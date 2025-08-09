import aimlData from '../../data/education.json';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import React, { useRef, useEffect, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

export const EducationSection = () => {
  const education = aimlData;
  const firstLogoRef = useRef<HTMLDivElement>(null);
  const lastLogoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState<{ top: number; height: number }>({ top: 0, height: 0 });

  // Icon mapping by index
  const iconList = [GraduationCap, Award];

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
  }, [education.length]);

  return (
    <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8 mx-auto bg-background-light dark:bg-background-dark">
      <h2 className="section-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center text-heading-light dark:text-heading-dark">Education</h2>
      <p className="section-subheading text-sm xs:text-base sm:text-lg text-gray-500 dark:text-gray-300 text-center mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-2">
        A comprehensive overview of academic background and learning experiences.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
        {education.map((edu, idx) => {
          const { elementRef, isVisible } = useScrollAnimation(0.15);
          const Icon = iconList[idx % iconList.length];
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
                <img
                  src={(edu as any).logo || '/avatar.png'}
                  alt={`${edu.organization} logo`}
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover border border-border-light dark:border-border-dark"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-[color:var(--accent)]">{edu.title}</h3>
                  <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-1">{edu.organization}</div>
                  <div className="text-gray-400 dark:text-gray-500 text-xs mb-2 sm:mb-3">{edu.date}</div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 break-words whitespace-pre-line leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};