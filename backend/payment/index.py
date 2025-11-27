import json
import os
import uuid
from datetime import datetime
from typing import Dict, Any
import psycopg2
from pydantic import BaseModel, Field, ValidationError

class CreateOrderRequest(BaseModel):
    nickname: str = Field(..., min_length=1, max_length=100)
    package_id: str = Field(..., min_length=1)
    package_name: str = Field(..., min_length=1)
    price: int = Field(..., gt=0)
    promo_code: str = Field(default='')

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Обработка платежей для донатов на Minecraft сервер
    Args: event с httpMethod, body, queryStringParameters; context с request_id
    Returns: HTTP response с данными платежа
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method == 'POST':
        try:
            body_data = json.loads(event.get('body', '{}'))
            order_req = CreateOrderRequest(**body_data)
            
            order_id = str(uuid.uuid4())[:8].upper()
            
            db_url = os.environ.get('DATABASE_URL')
            if not db_url:
                return {
                    'statusCode': 500,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Database not configured'})
                }
            
            conn = psycopg2.connect(db_url)
            cur = conn.cursor()
            
            final_price = order_req.price
            discount = 0
            if order_req.promo_code.upper() == 'START':
                discount = 10
                final_price = int(order_req.price * 0.9)
            
            cur.execute(
                """
                INSERT INTO t_p87317386_fun_echo_site.donations 
                (order_id, nickname, package_id, package_name, price, promo_code, status)
                VALUES (%s, %s, %s, %s, %s, %s, 'pending')
                """,
                (order_id, order_req.nickname, order_req.package_id, 
                 order_req.package_name, final_price, order_req.promo_code or None)
            )
            conn.commit()
            cur.close()
            conn.close()
            
            merchant_id = os.environ.get('FREEKASSA_MERCHANT_ID', '12345')
            secret_key = os.environ.get('FREEKASSA_SECRET_KEY', 'secret')
            
            import hashlib
            sign_string = f"{merchant_id}:{final_price}:{secret_key}:{order_id}"
            sign = hashlib.md5(sign_string.encode()).hexdigest()
            
            payment_url = f"https://pay.freekassa.com/?m={merchant_id}&oa={final_price}&o={order_id}&s={sign}&us_nickname={order_req.nickname}&us_package={order_req.package_id}"
            
            result = {
                'success': True,
                'order_id': order_id,
                'payment_url': payment_url,
                'original_price': order_req.price,
                'final_price': final_price,
                'discount': discount,
                'nickname': order_req.nickname,
                'package': order_req.package_name
            }
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps(result)
            }
            
        except ValidationError as e:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Invalid request data', 'details': str(e)})
            }
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': str(e)})
            }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'})
    }