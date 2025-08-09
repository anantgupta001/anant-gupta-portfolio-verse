import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import experienceData from '../../data/experience.json';
import React, { useRef, useEffect, useState } from 'react';
import { Briefcase, Code, Monitor } from 'lucide-react';

const iconMap = { Briefcase, Code, Monitor };

export const ExperienceSection = () => {
  const experiences = experienceData;
  const firstLogoRef = useRef<HTMLDivElement>(null);
  const lastLogoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState<{ top: number; height: number }>({ top: 0, height: 0 });

  useEffect(() => {
    function updateLine() {
      if (firstLogoRef.current && lastLogoRef.current && sectionRef.current) {
        const firstRect = firstLogoRef.current.getBoundingClientRect();
        const lastRect = lastLogoRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const firstCenter = firstRect.top - sectionRect.top + firstRect.height / 2;
        const lastCenter = lastRect.top - sectionRect.top + lastRect.height / 2;
        setLineStyle({ top: firstCenter, height: lastCenter - firstCenter });
      }
    }
    updateLine();
    window.addEventListener('resize', updateLine);
    window.addEventListener('scroll', updateLine, true);
    return () => {
      window.removeEventListener('resize', updateLine);
      window.removeEventListener('scroll', updateLine, true);
    };
  }, [experiences.length]);

  return (
    <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8 mx-auto bg-background-light dark:bg-background-dark">
      <h2 className="section-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center text-heading-light dark:text-heading-dark">Professional Experience</h2>
      <p className="section-subheading text-sm xs:text-base sm:text-lg text-gray-500 dark:text-gray-300 text-center mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-2">
        Background in open source contributions, full-stack development, AI/ML integration, and technical leadership across a range of real-world projects and organizations.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => {
          const { elementRef, isVisible } = useScrollAnimation(0.15);
          const Icon = iconMap[exp.icon] || Briefcase;
          return (
            <div
              key={idx}
              ref={elementRef}
              className={`bg-card-light dark:bg-card-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-border-light dark:border-border-dark transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 flex-shrink-0">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-[color:var(--accent)]">{exp.title}</h3>
                  <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-1">{exp.organization}</div>
                  <div className="text-gray-400 dark:text-gray-500 text-xs mb-2 sm:mb-3">{exp.date}</div>
                  {Array.isArray(exp.description) ? (
                    <ul className="text-sm sm:text-base text-gray-700 dark:text-gray-200 space-y-2">
                      {exp.description.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[color:var(--accent)] mr-3 mt-1 flex-shrink-0">•</span>
                          <span className="break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 break-words whitespace-pre-line">{exp.description}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};