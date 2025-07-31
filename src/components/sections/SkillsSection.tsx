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
      <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-heading-light dark:text-heading-dark">Technical Skills</h2>
      <p className="section-subheading text-base sm:text-lg text-gray-500 dark:text-gray-300 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
        A comprehensive overview of my technical expertise spanning programming languages, frameworks, and development environments, demonstrated through real-world projects and contributions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl">
        {skillCategories.map((category, index) => {
          const { elementRef, isVisible } = useScrollAnimation(0.2);
          const Icon = category.icon;
          return (
            <div
              key={index}
              ref={elementRef}
              className={`bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-4 sm:p-6 border border-border-light dark:border-border-dark transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-heading-light dark:text-heading-dark">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};