import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThreeDScene } from './ThreeDScene';
import { FloatingParticles } from './FloatingParticles';

export const LandingHero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-anant-gupta.pdf';
    link.download = 'Anant_Gupta_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-background/90 overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* 3D Scene in the middle-right area */}
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-96 h-96 opacity-60">
        <ThreeDScene />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <span className="text-primary gradient-text">Anant Gupta</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl">
              Cybersecurity Analyst & Full Stack Developer
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 mb-12">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-12 h-12 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <a 
                  href="https://github.com/anantgupta001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 text-primary" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-12 h-12 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-12 h-12 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <a href="mailto:anantagarwal4946@gmail.com">
                  <Mail className="h-6 w-6 text-primary" />
                </a>
              </Button>
            </div>

            {/* Download Resume Button */}
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 px-8 py-3 text-lg font-medium rounded-none"
            >
              <Download className="h-5 w-5 mr-3" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rotate-45 opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-primary/20 rotate-12 opacity-30"></div>
    </section>
  );
};