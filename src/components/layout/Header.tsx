import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { label: 'About', id: 'about-section' },
    { label: 'Experience', id: 'experience-section' },
    { label: 'Projects', id: 'projects-section' },
    { label: 'Skills', id: 'skills-section' },
    { label: 'Education', id: 'education-section' },
    { label: 'Contact', id: 'contact-section' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-background-light dark:bg-background-dark ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 py-2 flex items-center justify-end">
        {/* Navigation links and theme toggle on the right */}
        <div className="flex items-center gap-4 justify-end flex-1">
          <nav className="hidden md:flex items-center gap-3 justify-end">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-1 py-1 rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};