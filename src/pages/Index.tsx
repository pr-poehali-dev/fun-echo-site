import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {

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
                <p className="text-2xl font-bold font-mono text-primary">hub.20tps.ru</p>
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
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Режимы Игры
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Разнообразие режимов для всех типов игроков
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { name: 'Выживание', icon: 'Pickaxe', desc: 'Классический режим с уникальными фичами', color: 'from-green-500 to-emerald-600' },
            { name: 'SkyBlock', icon: 'Cloud', desc: 'Выживание на небесных островах', color: 'from-blue-500 to-cyan-600' },
            { name: 'Creative', icon: 'Wand2', desc: 'Строй все что захочешь', color: 'from-purple-500 to-violet-600' },
            { name: 'MiniGames', icon: 'Gamepad2', desc: 'Увлекательные мини-игры', color: 'from-orange-500 to-red-600' }
          ].map((mode, idx) => (
            <Card key={idx} className="bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className={`mx-auto mb-3 w-16 h-16 rounded-2xl bg-gradient-to-br ${mode.color} flex items-center justify-center`}>
                  <Icon name={mode.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">{mode.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground text-sm">{mode.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/donate">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold px-12 py-6 text-lg">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Получить привилегии
            </Button>
          </Link>
        </div>
      </div>

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
              <p className="text-muted-foreground">IP: hub.20tps.ru</p>
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