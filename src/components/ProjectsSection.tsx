import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Users, TrendingUp, Zap, Brain } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'FoodApe',
      description: 'Led a 5-member team to build a food-ordering app for 30,000 students. Built scalable architecture, boosting performance by 30%. Developed APIs with 20% faster response and 40% higher cache hits.',
      technologies: ['Flutter', 'Express', 'Node.js', 'MongoDB', 'TensorFlow.js'],
      icon: Users,
      stats: [
        { label: 'Users', value: '30K+' },
        { label: 'Performance', value: '+30%' },
        { label: 'Cache Hits', value: '+40%' }
      ],
      github: 'https://github.com/anantgupta001',
      demo: null,
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      title: 'StayHub',
      description: 'Full Stack Web App with secure authentication using cookies and salting. Integrated Mapbox API for dynamic location services. Optimized API response times and cache performance.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mapbox API'],
      icon: TrendingUp,
      stats: [
        { label: 'Auth', value: 'Secure' },
        { label: 'API', value: 'Optimized' },
        { label: 'Maps', value: 'Dynamic' }
      ],
      github: 'https://github.com/anantgupta001',
      demo: null,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Age Detection Using CNN',
      description: 'Built ensemble CNN model with 80% accuracy. Trained on UTK and Facial Age datasets. Used softmax for precise age classification.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Computer Vision'],
      icon: Brain,
      stats: [
        { label: 'Accuracy', value: '80%' },
        { label: 'Model', value: 'CNN' },
        { label: 'Datasets', value: '2+' }
      ],
      github: 'https://github.com/anantgupta001',
      demo: null,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'MAYHEM',
      description: 'Mental health journaling with AI pattern analysis. Beautiful data visualizations via graphs. Trend dashboard to track emotional health.',
      technologies: ['React', 'D3.js', 'Python', 'AI/ML', 'Data Visualization'],
      icon: Zap,
      stats: [
        { label: 'AI', value: 'Powered' },
        { label: 'Insights', value: 'Deep' },
        { label: 'Health', value: 'Mental' }
      ],
      github: 'https://github.com/anantgupta001',
      demo: null,
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing impactful solutions that demonstrate technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass border-border/50 hover:glow transition-all duration-300 group overflow-hidden animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:bg-primary/10"
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:bg-primary/10"
                      >
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex gap-4 mb-6">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};