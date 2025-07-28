import { Github, Linkedin, Mail } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { elementRef, isVisible } = useScrollAnimation(0.2); // threshold 0.2, more reliable
  return (
    <footer className="bg-background-light dark:bg-background-dark py-6 px-4 md:px-12 text-center">
      <div
        ref={elementRef}
        className={`max-w-3xl mx-auto flex flex-col items-center transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
        style={{ willChange: 'transform, opacity' }}
      >
        <noscript>
          <div className="text-heading-light dark:text-heading-dark text-base">&copy; {currentYear} Anant Gupta. All rights reserved.</div>
          <div className="text-heading-light dark:text-heading-dark text-base">Designed and built by Anant Gupta</div>
        </noscript>
        <div className="text-heading-light dark:text-heading-dark text-base">&copy; {currentYear} Anant Gupta. All rights reserved.</div>
        <div className="text-heading-light dark:text-heading-dark text-base">Designed and built by Anant Gupta</div>
      </div>
    </footer>
  );
};