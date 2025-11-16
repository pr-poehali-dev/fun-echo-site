import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface DonatePackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  color: string;
  icon: string;
  popular?: boolean;
}

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<DonatePackage | null>(null);
  const [nickname, setNickname] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const { toast } = useToast();

  const donatePackages: DonatePackage[] = [
    {
      id: 'vip',
      name: 'VIP',
      price: 199,
      features: [
        'Цветной ник',
        'Доступ к /fly',
        '5 регионов',
        'Приватный варп',
        'Набор ресурсов'
      ],
      color: 'from-green-500 to-emerald-600',
      icon: 'Star'
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      price: 399,
      features: [
        'Все из VIP',
        'Доступ к /god',
        '10 регионов',
        'Кастомные префиксы',
        'Эксклюзивные эффекты',
        'Набор алмазов'
      ],
      color: 'from-purple-500 to-violet-600',
      icon: 'Sparkles',
      popular: true
    },
    {
      id: 'legend',
      name: 'LEGEND',
      price: 699,
      features: [
        'Все из PREMIUM',
        'Доступ к /heal',
        '20 регионов',
        'Собственные команды',
        'Уникальные скины',
        'Магический набор',
        'Приоритет в очереди'
      ],
      color: 'from-orange-500 to-red-600',
      icon: 'Crown'
    }
  ];

  const handlePurchase = () => {
    if (!nickname.trim()) {
      toast({
        title: "Ошибка",
        description: "Введите ваш игровой ник",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Переход к оплате",
      description: `Обработка заказа для ${nickname}...`,
    });

    setTimeout(() => {
      setSelectedPackage(null);
      setNickname('');
      setPromoCode('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 22, 37, 0.85), rgba(26, 22, 37, 0.95)), url('https://cdn.poehali.dev/projects/05345b8a-9806-429d-8e5b-d31a4aabcdc6/files/dcb1f573-5359-4b98-a8b1-0c5ed51979b5.jpg')`
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <Badge className="px-6 py-2 text-lg bg-gradient-to-r from-primary to-secondary border-0">
                🎮 Лучший Minecraft Сервер
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FunEcho
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйся к самому эпичному приключению! Уникальные режимы, дружное комьюнити и незабываемые эмоции ждут тебя!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <div className="bg-card/80 backdrop-blur-sm px-8 py-4 rounded-xl border-2 border-primary/30">
                <p className="text-sm text-muted-foreground mb-1">IP адрес сервера:</p>
                <p className="text-2xl font-bold font-mono text-primary">play.funecho.ru</p>
              </div>
            </div>

            <div className="flex gap-8 justify-center pt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">500+</p>
                <p className="text-muted-foreground">Игроков онлайн</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-secondary">10K+</p>
                <p className="text-muted-foreground">В комьюнити</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent">24/7</p>
                <p className="text-muted-foreground">Работаем</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Привилегии Доната
          </h2>
          <p className="text-xl text-muted-foreground">
            Выбери свой уровень и получи эксклюзивные возможности!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {donatePackages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer bg-card/50 backdrop-blur-sm ${
                pkg.popular ? 'border-primary' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedPackage(pkg)}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-sm font-bold transform rotate-45 translate-x-8 translate-y-4">
                    ПОПУЛЯРНО
                  </div>
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />

              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 w-20 h-20 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center transform transition-transform hover:rotate-12`}>
                  <Icon name={pkg.icon as any} size={40} className="text-white" />
                </div>
                
                <CardTitle className="text-3xl font-bold">{pkg.name}</CardTitle>
                <CardDescription className="text-4xl font-bold text-primary pt-2">
                  {pkg.price} ₽
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                        <Icon name="Check" size={14} className="text-white" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 transition-opacity text-white font-bold py-6 text-lg`}
                  onClick={() => setSelectedPackage(pkg)}
                >
                  Купить {pkg.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
        <DialogContent className="sm:max-w-md bg-card border-2 border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedPackage?.color} flex items-center justify-center`}>
                <Icon name={selectedPackage?.icon as any} size={24} className="text-white" />
              </div>
              Покупка {selectedPackage?.name}
            </DialogTitle>
            <DialogDescription>
              Стоимость: <span className="text-2xl font-bold text-primary">{selectedPackage?.price} ₽</span>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="nickname" className="text-base">Ник в игре *</Label>
              <Input
                id="nickname"
                placeholder="Введите ваш игровой ник"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="bg-background border-2 border-muted focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="promo" className="text-base">Промокод (если есть)</Label>
              <Input
                id="promo"
                placeholder="Введите промокод"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="bg-background border-2 border-muted focus:border-primary"
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold">Что входит в {selectedPackage?.name}:</p>
              <ul className="text-sm space-y-1">
                {selectedPackage?.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Icon name="Check" size={14} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg">
              <Icon name="Info" size={14} className="inline mr-1" />
              После оплаты донат автоматически активируется на вашем аккаунте через RCON (порт: 25565)
            </div>

            <Button 
              className={`w-full bg-gradient-to-r ${selectedPackage?.color} hover:opacity-90 text-white font-bold py-6 text-lg`}
              onClick={handlePurchase}
            >
              <Icon name="CreditCard" size={20} className="mr-2" />
              Перейти к оплате
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">FunEcho</h3>
              <p className="text-muted-foreground">
                Лучший Minecraft сервер с уникальными режимами и дружным комьюнити
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Подключение</h4>
              <p className="text-muted-foreground">IP: play.funecho.ru</p>
              <p className="text-muted-foreground">Версия: 1.16.5 - 1.21</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Социальные сети</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-border text-muted-foreground">
            <p>© 2024 FunEcho. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
