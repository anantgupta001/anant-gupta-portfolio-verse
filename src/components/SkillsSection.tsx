import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Settings, 
  Wrench,
  BookOpen
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: '🖥️ Programming Languages',
      icon: Code2,
      skills: ['Python', 'JavaScript', 'C/C++', 'HTML/CSS', 'SQL/Postgres', 'R'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: '⚙️ Frameworks & Tools',
      icon: Settings,
      skills: ['React', 'Node.js', 'Next.js', 'Flask', 'OSINT'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: '🧰 Developer Tools & Libraries',
      icon: Wrench,
      skills: ['Git', 'VS Code', 'Kali Linux', 'Burp Suite', 'Metasploit', 'Wireshark', 'Cisco Packet Tracer'],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: '📚 Libraries & Automation',
      icon: BookOpen,
      skills: ['pandas', 'NumPy', 'Matplotlib', 'Selenium', 'Beautiful Soup'],
      color: 'from-orange-500/20 to-yellow-500/20'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for cybersecurity, development, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const { elementRef, isVisible } = useScrollAnimation();
            
            return (
              <Card 
                key={category.title}
                ref={elementRef}
                className={`glass border-border/50 hover:glow transition-all duration-500 group p-8 ${
                  isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-all duration-200 hover:scale-105 text-center font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};