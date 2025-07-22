import { Download, Github, Linkedin, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-anant-gupta.pdf';
    link.download = 'Anant_Gupta_Resume.pdf';
    link.click();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-border/20">
      <div className="container mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            <span className="text-xl font-bold text-primary">AG</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="w-8 h-8 hover:text-primary transition-colors duration-300"
            >
              <a 
                href="https://github.com/anantgupta001" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="w-8 h-8 hover:text-primary transition-colors duration-300"
            >
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="w-8 h-8 hover:text-primary transition-colors duration-300"
            >
              <a href="mailto:anantagarwal4946@gmail.com">
                <Download className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 hover:text-primary transition-colors duration-300"
            >
              <Sun className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};