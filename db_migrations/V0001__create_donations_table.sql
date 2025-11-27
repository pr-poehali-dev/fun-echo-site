CREATE TABLE IF NOT EXISTS t_p87317386_fun_echo_site.donations (
    id SERIAL PRIMARY KEY,
    order_id VARCHAR(100) UNIQUE NOT NULL,
    nickname VARCHAR(100) NOT NULL,
    package_id VARCHAR(50) NOT NULL,
    package_name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    promo_code VARCHAR(50),
    status VARCHAR(20) DEFAULT 'pending',
    payment_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    paid_at TIMESTAMP,
    rcon_executed BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_donations_order_id ON t_p87317386_fun_echo_site.donations(order_id);
CREATE INDEX idx_donations_nickname ON t_p87317386_fun_echo_site.donations(nickname);
CREATE INDEX idx_donations_status ON t_p87317386_fun_echo_site.donations(status);