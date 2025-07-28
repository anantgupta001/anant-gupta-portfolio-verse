import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import experienceData from '../data/experience.json';
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
    <>
      <section className="relative bg-background-light dark:bg-background-dark py-16 px-4 md:px-12 mx-auto" ref={sectionRef}>
        {/* Vertical center line only between first and last logo, hidden on mobile */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 bg-gray-700 w-1 z-0"
          style={{ top: lineStyle.top, height: lineStyle.height }}
        />
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-8 text-heading-light dark:text-heading-dark">Professional Experience</h2>
        <p className="section-subheading text-lg text-gray-400 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          Background in open source contributions, full-stack development, AI/ML integration, and technical leadership across a range of real-world projects and organizations.
        </p>
        <div className="relative max-w-6xl mx-auto flex flex-col gap-24 z-10">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            const { elementRef, isVisible } = useScrollAnimation(0.15);
            // Attach refs to first and last logo
            const logoRef = idx === 0 ? firstLogoRef : idx === experiences.length - 1 ? lastLogoRef : undefined;
            const Icon = iconMap[exp.icon] || Briefcase;
            return (
              <div
                key={idx}
                ref={elementRef}
                className={`relative flex flex-col md:flex-row items-center md:justify-between w-full transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                {/* Card (Left) */}
                <div className={`md:w-1/2 md:pr-20 flex ${isLeft ? 'justify-end md:order-1 order-2' : 'md:order-2 order-2'} w-full`}>
                  {isLeft && (
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 min-h-[180px] text-left mt-8 md:mt-0 flex flex-col justify-center border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-lg font-bold mb-1 text-pink-500">{exp.title}</h3>
                      <div className="text-gray-400 text-sm mb-1">{exp.organization}</div>
                      <div className="text-gray-500 text-xs mb-2">{exp.date}</div>
                      <p className="text-gray-700 dark:text-gray-200 font-sans break-words whitespace-pre-line">{exp.description}</p>
                    </div>
                  )}
                </div>
                {/* Center Icon & Connector (overlapping the vertical line) */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                  ref={logoRef}
                >
                  {/* Only vector icon in the logo circle */}
                  <div className={`w-16 h-16 rounded-full bg-gray-900 border-4 ${isLeft ? 'border-pink-500' : 'border-blue-500'} flex items-center justify-center shadow-xl my-4`}>
                    <Icon className={`w-10 h-10 ${isLeft ? 'text-pink-500 dark:text-pink-400' : 'text-blue-500 dark:text-blue-400'}`} />
                  </div>
                </div>
                {/* Card (Right) */}
                <div className={`md:w-1/2 md:pl-20 flex ${!isLeft ? 'justify-start md:order-2 order-2' : 'md:order-1 order-2'} w-full`}>
                  {!isLeft && (
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 min-h-[180px] text-left mt-8 md:mt-0 flex flex-col justify-center border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-lg font-bold mb-1 text-blue-500">{exp.title}</h3>
                      <div className="text-gray-400 text-sm mb-1">{exp.organization}</div>
                      <div className="text-gray-500 text-xs mb-2">{exp.date}</div>
                      <p className="text-gray-700 dark:text-gray-200 font-sans break-words whitespace-pre-line">{exp.description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};