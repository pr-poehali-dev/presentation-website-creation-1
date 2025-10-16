import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Comment {
  id: number;
  author: string;
  text: string;
  timestamp: string;
}

interface Presentation {
  id: number;
  title: string;
  author: string;
  views: number;
  comments: Comment[];
  image: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPresentation, setSelectedPresentation] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');
  
  const [presentations, setPresentations] = useState<Presentation[]>([
    {
      id: 1,
      title: 'Трюфо Винке',
      author: 'Войлов Кепероваа',
      views: 1240,
      comments: [],
      image: 'https://v3b.fal.media/files/b/tiger/SMY1PcAi2HbuXJPHOFXz0_output.png'
    },
    {
      id: 2,
      title: 'Инновации в бизнесе',
      author: 'Анна Смирнова',
      views: 856,
      comments: [],
      image: 'https://v3b.fal.media/files/b/tiger/SMY1PcAi2HbuXJPHOFXz0_output.png'
    },
    {
      id: 3,
      title: 'Цифровая трансформация',
      author: 'Михаил Петров',
      views: 2103,
      comments: [],
      image: 'https://v3b.fal.media/files/b/tiger/SMY1PcAi2HbuXJPHOFXz0_output.png'
    }
  ]);

  const handleAddComment = (presentationId: number) => {
    if (!newComment.trim()) return;
    
    setPresentations(prev => prev.map(p => {
      if (p.id === presentationId) {
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              id: Date.now(),
              author: 'Вы',
              text: newComment,
              timestamp: new Date().toLocaleString('ru-RU')
            }
          ]
        };
      }
      return p;
    }));
    
    setNewComment('');
  };

  const features = [
    {
      icon: 'Presentation',
      title: 'Создание презентаций',
      description: 'Интуитивный редактор с современными шаблонами'
    },
    {
      icon: 'MessageSquare',
      title: 'Система комментариев',
      description: 'Обсуждайте и получайте обратную связь в реальном времени'
    },
    {
      icon: 'Users',
      title: 'Совместная работа',
      description: 'Работайте над проектами в команде'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика',
      description: 'Отслеживайте просмотры и вовлеченность'
    },
    {
      icon: 'Zap',
      title: 'Быстрая загрузка',
      description: 'Мгновенный доступ к презентациям'
    },
    {
      icon: 'Share2',
      title: 'Экспорт и шаринг',
      description: 'Делитесь проектами одним кликом'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Layers" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ПРОЗТАЦА
              </h1>
            </div>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('presentations')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'presentations' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Презентации
              </button>
              <button
                onClick={() => setActiveSection('features')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'features' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Возможности
              </button>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Вход
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-0">
              Современные презентации
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
              Субне празежи
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Побенце гіровции в поѕенрие не орпгісті
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl"
                onClick={() => setActiveSection('presentations')}
              >
                Начать создавать
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg rounded-xl"
                onClick={() => setActiveSection('features')}
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto animate-slide-up">
            {[
              { icon: 'Sparkles', title: 'Инновационный', desc: 'Современные технологии' },
              { icon: 'Rocket', title: 'Быстрый', desc: 'Молниеносная скорость' },
              { icon: 'Shield', title: 'Надёжный', desc: 'Защита данных' }
            ].map((item, i) => (
              <Card key={i} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'presentations' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Презентация карты</h2>
            <p className="text-muted-foreground">Откройте для себя лучшие презентации сообщества</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {presentations.map((presentation) => (
              <Card 
                key={presentation.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-scale-in"
                onClick={() => setSelectedPresentation(presentation.id)}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="PlayCircle" size={64} className="text-primary/30" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{presentation.title}</CardTitle>
                  <CardDescription>{presentation.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Eye" size={16} />
                      <span>{presentation.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="MessageSquare" size={16} />
                      <span>{presentation.comments.length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedPresentation && (
            <Card className="max-w-4xl mx-auto animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Комментарии и обсуждения</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedPresentation(null)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {presentations.find(p => p.id === selectedPresentation)?.comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3 p-4 rounded-lg bg-muted/50">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {comment.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">{comment.author}</span>
                        <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                      </div>
                      <p className="text-sm">{comment.text}</p>
                    </div>
                  </div>
                ))}

                {presentations.find(p => p.id === selectedPresentation)?.comments.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Icon name="MessageSquare" size={48} className="mx-auto mb-3 opacity-30" />
                    <p>Пока нет комментариев. Будьте первым!</p>
                  </div>
                )}

                <div className="space-y-3 pt-4 border-t">
                  <Textarea
                    placeholder="Добавьте комментарий..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end">
                    <Button 
                      onClick={() => handleAddComment(selectedPresentation)}
                      disabled={!newComment.trim()}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </section>
      )}

      {activeSection === 'features' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Возможности</h2>
            <p className="text-xl text-muted-foreground">
              Все инструменты для создания и презентации проектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <Card 
                key={i} 
                className="border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
                <p className="text-muted-foreground mb-6">
                  Присоединяйтесь к тысячам пользователей, создающих потрясающие презентации
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                  onClick={() => setActiveSection('presentations')}
                >
                  Создать презентацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Layers" className="text-white" size={18} />
              </div>
              <span className="font-semibold">ПРОЗТАЦА</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
