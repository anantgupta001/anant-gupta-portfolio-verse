import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export const LandingHero = () => {
  const scrollToAbout = () => {
    const about = document.getElementById('about-section');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-between bg-background-light dark:bg-background-dark px-4 pb-0 relative overflow-hidden">
      <div className="w-full max-w-xl pl-4 md:pl-12 flex flex-col items-start gap-6 text-left pt-24 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-0 text-heading-light dark:text-heading-dark">Hello, I'm</h1>
        <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] dark:from-[#60a5fa] dark:to-[#3b82f6] bg-clip-text text-transparent">Anant Gupta</div>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4">Turning ideas into impactful code<br />with clarity and precision.</p>
        <div className="flex gap-6 justify-start mb-2">
          <a href="https://github.com/anantgupta001" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition text-3xl">
            <Github className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/anantgupta001/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition text-3xl">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="mailto:anantagarwal4946@gmail.com" className="text-gray-500 hover:text-blue-600 transition text-3xl">
            <Mail className="h-8 w-8" />
          </a>
        </div>
        <a
          href="/resume-anant-gupta.pdf"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#34699A]/60 text-white font-semibold shadow-lg hover:bg-[#34699A]/80 transition text-lg mt-2 backdrop-blur-md border border-white/30 glass"
          style={{ WebkitBackdropFilter: 'blur(8px)' }}
          download
        >
          <Download className="h-5 w-5" />
          Download Resume
        </a>
      </div>
      {/* Centered, very bottom, circular, responsive bouncing chevron-down button. Make sure AboutSection has id='about-section' */}
      <button
        aria-label="Scroll to About Me"
        onClick={scrollToAbout}
        className="mx-auto w-14 h-14 rounded-full flex items-center justify-center bg-white/80 dark:bg-[#273449]/80 border border-gray-300 dark:border-slate-700 shadow-lg text-blue-600 dark:text-purple-400 animate-bounce focus:outline-none mb-2"
        style={{ lineHeight: 1 }}
      >
        <ChevronDown className="h-8 w-8" />
      </button>
      {/* Floating Avatar on the right for md+ screens */}
      <div className="hidden md:block absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <img
          src="/avatar.png"
          alt="Anant Gupta Avatar"
          className="w-[28rem] h-[28rem] object-cover animate-float"
        />
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};