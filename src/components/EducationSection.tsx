import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap,
  Calendar,
  Award
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'VIT-AP',
      period: '2022 – Present',
      cgpa: '8.46',
      status: 'Current',
      icon: GraduationCap,
      description: 'Pursuing Bachelor of Technology in Computer Science Engineering with focus on software development, data structures, and algorithms.',
      subjects: [
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Computer Networks',
        'Object-Oriented Programming',
        'Operating Systems',
        'Machine Learning'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC), PCM',
      institution: 'JVP International School, Jaipur',
      period: '2022',
      cgpa: '83.2%',
      status: 'Completed',
      icon: Award,
      description: 'Completed higher secondary education with Physics, Chemistry, and Mathematics as core subjects.',
      subjects: [
        'Physics',
        'Chemistry', 
        'Mathematics',
        'Computer Science',
        'English'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and foundational learning that shaped my technical expertise and problem-solving skills.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => {
              const { elementRef, isVisible } = useScrollAnimation();
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  ref={elementRef}
                  className={`relative flex items-center ${
                    isLeft ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10 shadow-glow">
                    <edu.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  {/* Content Card */}
                  <div 
                    className={`w-5/12 ${
                      isLeft ? 'pr-8' : 'pl-8'
                    } transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <Card className="glass border-border/50 hover:glow transition-all duration-300 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary mb-1">{edu.degree}</h3>
                          <p className="text-lg font-semibold">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <Badge 
                          variant={edu.status === 'Current' ? 'default' : 'secondary'}
                          className={edu.status === 'Current' ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary border-primary/20'}
                        >
                          {edu.status}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-muted-foreground font-medium">
                          {edu.degree.includes('CGPA') ? 'CGPA' : 'Percentage'}
                        </span>
                        <span className="text-2xl font-bold text-primary">{edu.cgpa}</span>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Subjects:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {edu.subjects.map((subject, subjectIndex) => (
                            <div 
                              key={subjectIndex} 
                              className="flex items-center gap-2 text-xs"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-muted-foreground">{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};