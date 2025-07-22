import { Card } from '@/components/ui/card';
import { Code2, Users, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const AboutSection = () => {
  const aboutItems = [
    {
      title: 'Full Stack Development',
      description: 'Building IoT solutions and web applications using Next.js, MongoDB, Node.js, and modern frameworks.',
      icon: Code2,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Technical Leadership',
      description: 'Leading development teams and delivering hands-on cybersecurity demonstrations and training.',
      icon: Users,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Education',
      description: 'B.Tech in Computer Science with Business Systems from VIT-AP University (2022–2026).',
      icon: GraduationCap,
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable, impactful software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => {
            const { elementRef, isVisible } = useScrollAnimation();
            
            return (
              <Card
                key={item.title}
                ref={elementRef}
                className={`glass border-border/50 hover:glow transition-all duration-500 group p-8 text-center ${
                  isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};