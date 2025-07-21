import { Github, ExternalLink, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">Anant Gupta</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about building scalable, impactful software solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/anantgupta001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://leetcode.com/anantgupta7628"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Jaipur, Rajasthan</p>
              <a 
                href="mailto:anantagarwal4946@gmail.com"
                className="block hover:text-primary transition-colors"
              >
                anantagarwal4946@gmail.com
              </a>
              <a 
                href="tel:+919509210859"
                className="block hover:text-primary transition-colors"
              >
                +91-9509210859
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Anant Gupta • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};