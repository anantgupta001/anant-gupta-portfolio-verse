import { Card } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  Cloud, 
  Wrench,
  BookOpen,
  Palette 
} from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Palette,
      skills: ['JavaScript', 'React', 'Redux', 'HTML', 'CSS', 'Bootstrap', 'Tailwind'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Backend',
      icon: Code,
      skills: ['Node.js', 'Express.js'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'NoSQL'],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Cloudinary'],
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Postman', 'Hoppscotch', 'VS Code', 'IntelliJ', 'PyCharm', 'Jupyter'],
      color: 'from-indigo-500/20 to-blue-500/20'
    },
    {
      title: 'Languages & Coursework',
      icon: BookOpen,
      skills: ['C', 'C++', 'Java', 'Python', 'DSA', 'DBMS', 'CN', 'OOPS', 'OS', 'ML', 'DL', 'TOC', 'Software Engineering'],
      color: 'from-teal-500/20 to-cyan-500/20'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="glass border-border/50 hover:glow transition-all duration-300 group p-6 animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};