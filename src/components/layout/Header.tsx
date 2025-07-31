import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-background-light dark:bg-background-dark ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation and theme toggle */}
        <div className="flex items-center gap-4 justify-end flex-1">
          <nav className="hidden md:flex items-center gap-3 justify-end">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm lg:text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark md:hidden">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};