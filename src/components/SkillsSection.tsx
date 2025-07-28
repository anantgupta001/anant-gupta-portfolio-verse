import { Code2, Settings, Wrench, BookOpen } from 'lucide-react';
import skillsData from '../data/skills.json';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = { Code2, Settings, Wrench, BookOpen };

export const SkillsSection = () => {
  // Map icon string from JSON to actual icon component
  const skillCategories = Array.isArray(skillsData)
    ? skillsData.map(cat => ({ ...cat, icon: iconMap[cat.icon] || Code2 }))
    : [];
  return (
    <section
      className="py-16 px-4 md:px-12 flex flex-col items-center bg-background-light dark:bg-background-dark"
    >
      <h2 className="section-heading text-3xl md:text-4xl font-bold mb-8 text-heading-light dark:text-heading-dark">Technical Skills</h2>
      <p className="section-subheading text-lg text-gray-500 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
        A comprehensive overview of my technical expertise spanning programming languages, frameworks, and development environments, demonstrated through real-world projects and contributions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {skillCategories.map((cat, idx) => {
          const { elementRef, isVisible } = useScrollAnimation(0.2);
          return (
            <div
              key={idx}
              ref={elementRef}
              className={`rounded-2xl shadow-lg bg-white dark:bg-[#273449] p-6 flex flex-col gap-3 transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ willChange: 'transform, opacity', transitionDelay: isVisible ? `${idx * 120}ms` : '0ms' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <cat.icon className="h-6 w-6 text-[color:var(--accent)]" />
                <h3 className="text-xl font-bold text-[color:var(--accent)]">{cat.title}</h3>
              </div>
              <ul className="flex flex-col gap-4 mt-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg px-5 py-3 text-base text-left font-medium text-text-light dark:text-text-dark border border-border-light dark:border-border-dark">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};