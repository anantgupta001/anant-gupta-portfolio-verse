import { Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-anant-gupta.pdf';
    link.download = 'Anant_Gupta_Resume.pdf';
    link.click();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Name/Logo */}
          <div className="text-2xl font-bold gradient-text">
            Anant Gupta
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:glow transition-all duration-300"
            >
              <a 
                href="https://github.com/anantgupta001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:glow transition-all duration-300"
            >
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              onClick={handleDownloadResume}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};