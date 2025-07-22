import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { LandingHero } from '@/components/LandingHero';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div id="home">
          <LandingHero />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
