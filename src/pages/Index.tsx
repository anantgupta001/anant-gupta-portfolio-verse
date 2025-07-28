import { Header } from '@/components/layout/Header';
import { LandingHero } from '@/components/sections/LandingHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Index = () => {
  const [showUp, setShowUp] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowUp(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen bg-background-light dark:bg-background-dark relative z-10">
        <Header />
        <main>
          <LandingHero />
          <div>
            <section id="about-section" className="scroll-mt-24"><AboutSection /></section>
            <section id="experience-section" className="scroll-mt-24"><ExperienceSection /></section>
            <section id="projects-section" className="scroll-mt-24"><ProjectsSection /></section>
            <section id="skills-section" className="scroll-mt-24"><SkillsSection /></section>
            <section id="education-section" className="scroll-mt-24"><EducationSection /></section>
            <section id="contact-section" className="scroll-mt-24"><ContactSection /></section>
          </div>
        </main>
        <Footer />
        {/* Sticky up button, only visible after landing page */}
        {showUp && (
          <button
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 dark:bg-[#273449]/80 border border-gray-300 dark:border-slate-700 shadow-lg flex items-center justify-center text-blue-600 dark:text-purple-400 hover:bg-blue-100 dark:hover:bg-blue-900 transition animate-fade-in"
          >
            <ChevronUp className="h-7 w-7" />
          </button>
        )}
      </div>
    </>
  );
};

export default Index;
