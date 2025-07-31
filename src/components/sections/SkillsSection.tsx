import { Code2, Settings, Wrench, BookOpen } from 'lucide-react';
import skillsData from '../../data/skills.json';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const iconMap = { Code2, Settings, Wrench, BookOpen };

export const SkillsSection = () => {
  // Map icon string from JSON to actual icon component
  const skillCategories = Array.isArray(skillsData)
    ? skillsData.map(cat => ({ ...cat, icon: iconMap[cat.icon] || Code2 }))
    : [];
  return (
    <section
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 flex flex-col items-center bg-background-light dark:bg-background-dark"
    >
      <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-heading-light dark:text-heading-dark">Technical Skills</h2>
      <p className="section-subheading text-base sm:text-lg text-gray-500 dark:text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
        A comprehensive overview of my technical expertise spanning programming languages, frameworks, and development environments, demonstrated through real-world projects and contributions.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 w-full max-w-4xl">
        {skillCategories.map((category, index) => {
          const { elementRef, isVisible } = useScrollAnimation(0.2);
          const Icon = category.icon;
          return (
            <div
              key={index}
              ref={elementRef}
              className={`bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 sm:p-8 border border-border-light dark:border-border-dark transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 flex-shrink-0">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-heading-light dark:text-heading-dark">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};