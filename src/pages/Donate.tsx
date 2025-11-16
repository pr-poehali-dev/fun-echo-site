import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface DonatePackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  color: string;
  gradient: string;
  popular?: boolean;
}

const Donate = () => {
  const [selectedPackage, setSelectedPackage] = useState<DonatePackage | null>(null);
  const [nickname, setNickname] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const { toast } = useToast();

  const donatePackages: DonatePackage[] = [
    {
      id: 'vip',
      name: 'VIP',
      price: 99,
      features: [
        '✨ Цветной ник в чате',
        '🚀 Команда /fly',
        '🏠 3 региона',
        '⚡ x1.5 к опыту',
        '💎 Стартовый набор'
      ],
      color: '#22c55e',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      price: 199,
      features: [
        '⭐ Всё из VIP',
        '🛡️ Команда /god',
        '🏰 7 регионов',
        '🎨 Кастомный префикс',
        '✨ Уникальные эффекты',
        '💰 x2 к опыту',
        '🎁 Премиум набор'
      ],
      color: '#a855f7',
      gradient: 'from-purple-400 to-violet-600',
      popular: true
    },
    {
      id: 'elite',
      name: 'ELITE',
      price: 349,
      features: [
        '👑 Всё из PREMIUM',
        '⚡ Команда /heal',
        '🌟 15 регионов',
        '🎭 Эксклюзивные скины',
        '🔥 Огненные эффекты',
        '💎 x2.5 к опыту',
        '🎪 Элитный набор',
        '🚪 Приоритет входа'
      ],
      color: '#3b82f6',
      gradient: 'from-blue-400 to-cyan-600'
    },
    {
      id: 'legend',
      name: 'LEGEND',
      price: 599,
      features: [
        '🌟 Всё из ELITE',
        '💫 Команда /feed',
        '🏛️ 25 регионов',
        '👕 Собственные скины',
        '🎆 Легендарные эффекты',
        '⚡ x3 к опыту',
        '👑 Легендарный набор',
        '🎖️ Особая роль Discord',
        '🎁 Ежемесячные бонусы'
      ],
      color: '#f59e0b',
      gradient: 'from-orange-400 to-amber-600'
    },
    {
      id: 'mythic',
      name: 'MYTHIC',
      price: 999,
      features: [
        '🔱 Всё из LEGEND',
        '🌈 Команда /nick',
        '🏯 50 регионов',
        '🎨 Полная кастомизация',
        '✨ Мифические эффекты',
        '🚀 x4 к опыту',
        '💎 Мифический набор',
        '👑 VIP роль Discord',
        '🎪 Эксклюзивные ивенты',
        '🏆 Навсегда'
      ],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-600',
      popular: true
    },
    {
      id: 'immortal',
      name: 'IMMORTAL',
      price: 1999,
      features: [
        '💫 Всё из MYTHIC',
        '🌟 Команда /gamemode',
        '🏰 Безлимит регионов',
        '👑 Собственный титул',
        '🔥 Божественные эффекты',
        '⚡ x5 к опыту',
        '🎁 Бессмертный набор',
        '🎖️ Админ роль Discord',
        '🎪 Личные ивенты',
        '🏆 Статус навсегда',
        '💎 Доступ к бета-тестам'
      ],
      color: '#ef4444',
      gradient: 'from-red-400 to-rose-600'
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
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FunEcho
              </div>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link to="/">
                <Button variant="ghost">Главная</Button>
              </Link>
              <Link to="/donate">
                <Button variant="default" className="bg-gradient-to-r from-primary to-secondary">
                  Донат
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Привилегии
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Поддержи проект и получи уникальные возможности на сервере!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {donatePackages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm ${
                pkg.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border/50'
              }`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                borderColor: pkg.popular ? pkg.color : undefined
              }}
              onClick={() => setSelectedPackage(pkg)}
            >
              {pkg.popular && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge 
                    className="font-bold px-3 py-1 text-xs border-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)`,
                      color: '#fff'
                    }}
                  >
                    ⭐ ХИТ
                  </Badge>
                </div>
              )}

              <div 
                className="h-1.5"
                style={{ background: `linear-gradient(90deg, ${pkg.color}, ${pkg.color}88)` }}
              />

              <CardHeader className="text-center pb-3 pt-6">
                <div 
                  className="mx-auto mb-3 w-16 h-16 rounded-2xl flex items-center justify-center transform transition-transform hover:rotate-6 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)` }}
                >
                  <span className="text-3xl">💎</span>
                </div>
                
                <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                <div className="text-4xl font-bold" style={{ color: pkg.color }}>
                  {pkg.price} ₽
                </div>
              </CardHeader>

              <CardContent className="space-y-3 px-6 pb-6">
                <ul className="space-y-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-foreground/90">
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full font-bold py-5 text-base border-0 transition-all hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)`,
                    color: '#fff'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPackage(pkg);
                  }}
                >
                  Купить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Как получить донат?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto text-2xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold">Выберите привилегию</h3>
                  <p className="text-sm text-muted-foreground">Нажмите на интересующий вас пакет</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto text-2xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold">Введите данные</h3>
                  <p className="text-sm text-muted-foreground">Укажите ваш игровой ник</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto text-2xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold">Оплатите</h3>
                  <p className="text-sm text-muted-foreground">Привилегия выдастся автоматически</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
        <DialogContent className="sm:max-w-md bg-card border-2" style={{ borderColor: selectedPackage?.color }}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: `linear-gradient(135deg, ${selectedPackage?.color}, ${selectedPackage?.color}cc)` }}
              >
                <span className="text-2xl">💎</span>
              </div>
              Покупка {selectedPackage?.name}
            </DialogTitle>
            <DialogDescription>
              Стоимость: <span className="text-2xl font-bold" style={{ color: selectedPackage?.color }}>{selectedPackage?.price} ₽</span>
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

            <div className="bg-muted/30 rounded-lg p-4 space-y-2 max-h-60 overflow-y-auto">
              <p className="text-sm font-semibold">Что входит в {selectedPackage?.name}:</p>
              <ul className="text-sm space-y-1">
                {selectedPackage?.features.map((feature, idx) => (
                  <li key={idx} className="text-foreground/90">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs text-muted-foreground bg-muted/20 p-3 rounded-lg flex items-start gap-2">
              <Icon name="Info" size={14} className="mt-0.5 flex-shrink-0" />
              <span>После оплаты привилегия автоматически активируется на вашем аккаунте через RCON (порт: 25565)</span>
            </div>

            <Button 
              className="w-full font-bold py-6 text-lg border-0"
              style={{ 
                background: `linear-gradient(135deg, ${selectedPackage?.color}, ${selectedPackage?.color}dd)`,
                color: '#fff'
              }}
              onClick={handlePurchase}
            >
              <Icon name="CreditCard" size={20} className="mr-2" />
              Перейти к оплате
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Donate;
