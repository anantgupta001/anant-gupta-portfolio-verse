import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, TrendingUp, Heart } from 'lucide-react';

export const ExperienceSection = () => {
  const experience = {
    title: 'Open Source Contributor',
    company: 'FFCS on the Go',
    period: '2024',
    location: 'Remote',
    description: 'Contributing to a platform that serves VIT students with course selection and academic planning.',
    achievements: [
      {
        icon: Users,
        text: 'Served 120,000+ VIT students per semester',
        metric: '120K+'
      },
      {
        icon: TrendingUp,
        text: 'Reduced average course selection time by 40%',
        metric: '40%'
      },
      {
        icon: Heart,
        text: 'Increased user satisfaction by 70% via streamlined UI/UX',
        metric: '70%'
      }
    ]
  };

  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'VIT-AP',
      period: '2022 – Present',
      cgpa: '8.46',
      status: 'Current'
    },
    {
      degree: 'Higher Secondary Certificate (HSC), PCM',
      institution: 'JVP International School, Jaipur',
      period: '2022',
      cgpa: '83.2%',
      status: 'Completed'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions and continuously learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Experience
            </h3>
            
            <Card className="glass border-border/50 hover:glow transition-all duration-300 p-6 animate-slideInUp">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-primary">{experience.title}</h4>
                  <p className="text-lg font-semibold">{experience.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Open Source
                </Badge>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="space-y-4">
                <h5 className="font-semibold text-primary">Key Achievements:</h5>
                {experience.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <achievement.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{achievement.text}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{achievement.metric}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="glass border-border/50 hover:glow transition-all duration-300 p-6 animate-slideInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary">{edu.degree}</h4>
                      <p className="font-semibold">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <Calendar className="h-3 w-3" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={edu.status === 'Current' ? 'default' : 'secondary'}
                        className={edu.status === 'Current' ? 'bg-primary text-primary-foreground' : ''}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {edu.degree.includes('CGPA') ? 'CGPA' : 'Percentage'}
                    </span>
                    <span className="text-xl font-bold text-primary">{edu.cgpa}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};