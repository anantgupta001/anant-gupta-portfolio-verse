import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Hospital, 
  Code, 
  Monitor,
  Calendar,
  Briefcase
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Cyber Security Analyst - Technical Team',
      company: 'Be a Nerd (VIT-AP Club)',
      period: '2023',
      icon: Shield,
      description: 'Led cybersecurity initiatives and conducted security assessments for the technical team at VIT-AP University\'s premier tech club.',
      achievements: [
        'Conducted social engineering simulations to assess and improve organizational security awareness',
        'Performed Wi-Fi penetration testing during workshops to identify and mitigate vulnerabilities in wireless networks',
        'Delivered hands-on cybersecurity demonstrations to educate club members on best practices and emerging threats'
      ]
    },
    {
      title: 'Group Leader - Smart Hospital Appointment System',
      company: 'Smart India Hackathon (VIT-AP)',
      period: '2023',
      icon: Hospital,
      description: 'Led a team to develop an innovative hospital appointment system with RFID integration and real-time tracking capabilities.',
      achievements: [
        'Developed RFID attendance and appointment system for seamless patient management',
        'Built full stack application using Next.js, MongoDB, and Node.js',
        'Implemented real-time tracking and notification features for enhanced user experience'
      ]
    },
    {
      title: 'Front End Developer',
      company: 'Engineering Clinics (ECS, VIT-AP)',
      period: '2023',
      icon: Monitor,
      description: 'Developed IoT solutions and user interfaces for energy monitoring and management systems.',
      achievements: [
        'Developed an IoT solution to monitor and record real-time electricity consumption of individual appliances',
        'Created detailed insights dashboard for efficient energy usage tracking',
        'Designed seamless, user-friendly and dynamic UI for the Electro-Buck Project',
        'Collaborated with team members to achieve project goals and deliverables'
      ]
    },
    {
      title: 'Open Source Contributor',
      company: 'FFCS on the Go',
      period: '2024',
      icon: Code,
      description: 'Contributing to a platform that serves VIT students with course selection and academic planning.',
      achievements: [
        'Served 120,000+ VIT students per semester',
        'Reduced average course selection time by 40%',
        'Increased user satisfaction by 70% via streamlined UI/UX'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through cybersecurity analysis, full-stack development, and technical leadership in various projects and organizations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
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
                    <exp.icon className="h-6 w-6 text-primary-foreground" />
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
                          <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                          <p className="text-lg font-semibold">{exp.company}</p>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex} 
                            className="flex items-start gap-3 text-sm leading-relaxed"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
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

        {/* Key Expertise Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Key Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              'Cybersecurity Analysis',
              'Full-Stack Development',
              'Team Leadership',
              'IoT Solutions',
              'UI/UX Design',
              'Open Source Contribution'
            ].map((skill, index) => {
              const { elementRef, isVisible } = useScrollAnimation();
              
              return (
                <div
                  key={skill}
                  ref={elementRef}
                  className={`transition-all duration-500 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(experiences.length + index) * 100}ms` }}
                >
                  <div className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg border border-primary/20">
                    {skill}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};