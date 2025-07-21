import { useState, useEffect } from 'react';
import { Download, Github, ExternalLink, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from './AnimatedBackground';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Software Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-anant-gupta.pdf';
    link.download = 'Anant_Gupta_Resume.pdf';
    link.click();
  };

  const contactInfo = [
    { icon: MapPin, text: 'Jaipur, Rajasthan', href: null },
    { icon: Phone, text: '+91-9509210859', href: 'tel:+919509210859' },
    { icon: Mail, text: 'anantagarwal4946@gmail.com', href: 'mailto:anantagarwal4946@gmail.com' },
  ];

  return (
    <section 
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Animated background elements */}
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            Hi, I'm{' '}
            <span className="gradient-text">Anant Gupta</span>
          </h1>
          
          {/* Typewriter effect */}
          <div className="text-2xl md:text-3xl font-semibold mb-8 h-12 flex items-center justify-center">
            <span className="text-primary">{displayText}</span>
            <span className="border-r-2 border-primary animate-blink ml-1"></span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-slideInUp">
            I'm a Full Stack Software Developer skilled in both frontend and backend technologies 
            with a strong grasp of Data Structures and Algorithms. I'm passionate about building 
            scalable, impactful software, and have contributed to high-impact open-source projects 
            and led teams to build production-grade applications.
          </p>
          
          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="h-4 w-4 text-primary" />
                {item.href ? (
                  <a href={item.href} className="hover:text-primary transition-colors">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow text-lg px-8 py-3"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="glass border-primary/30 hover:border-primary hover:glow"
              >
                <a 
                  href="https://github.com/anantgupta001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="glass border-primary/30 hover:border-primary hover:glow"
              >
                <a 
                  href="https://leetcode.com/anantgupta7628" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  LeetCode
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};