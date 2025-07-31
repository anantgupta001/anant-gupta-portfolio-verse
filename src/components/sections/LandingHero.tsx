import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const LandingHero = () => {
  const { toast } = useToast();

  const scrollToAbout = () => {
    const about = document.getElementById('about-section');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Use the local resume file from public directory
    const resumePath = '/Anant Resume.pdf';
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Anant_Gupta_Resume.pdf';
    link.target = '_blank';
    
    // Add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Downloading Resume...",
      description: "Your resume should start downloading shortly.",
    });
  };

  return (
    <section className="w-full min-h-[100vh] sm:min-h-[90vh] md:min-h-[80vh] flex flex-col justify-between bg-background-light dark:bg-background-dark px-4 sm:px-6 md:px-8 pb-0 relative overflow-hidden">
      <div className="w-full max-w-2xl pl-0 sm:pl-4 md:pl-12 flex flex-col items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left pt-16 sm:pt-20 md:pt-24 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-0 text-heading-light dark:text-heading-dark">Hello, I'm</h1>
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] dark:from-[#60a5fa] dark:to-[#3b82f6] bg-clip-text text-transparent">Anant Gupta</div>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4 max-w-lg">Turning ideas into impactful code<br className="hidden sm:block" />with clarity and precision.</p>
        <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start mb-2">
          <a href="https://github.com/anantgupta001" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
            <Github className="h-7 w-7 sm:h-8 sm:w-8" />
          </a>
          <a href="https://www.linkedin.com/in/anantgupta7628/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
            <Linkedin className="h-7 w-7 sm:h-8 sm:w-8" />
          </a>
          <a href="mailto:anantagarwal4946@gmail.com" className="text-gray-500 hover:text-blue-600 transition">
            <Mail className="h-7 w-7 sm:h-8 sm:w-8" />
          </a>
        </div>
        <button
          onClick={handleDownloadResume}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#34699A]/60 text-white font-semibold shadow-lg hover:bg-[#34699A]/80 transition text-base sm:text-lg mt-2 backdrop-blur-md border border-white/30 glass"
          style={{ WebkitBackdropFilter: 'blur(8px)' }}
        >
          <Download className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden xs:inline">Download Resume</span>
          <span className="xs:hidden">Resume</span>
        </button>
      </div>
      {/* Centered, very bottom, circular, responsive bouncing chevron-down button */}
      <button
        aria-label="Scroll to About Me"
        onClick={scrollToAbout}
        className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white/80 dark:bg-[#273449]/80 border border-gray-300 dark:border-slate-700 shadow-lg text-blue-600 dark:text-purple-400 animate-bounce focus:outline-none mb-2"
        style={{ lineHeight: 1 }}
      >
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>
      {/* Floating Avatar - hidden on mobile, visible on larger screens */}
      <div className="hidden lg:block absolute left-2/3 xl:left-3/5 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <img
          src="/avatar.png"
          alt="Anant Gupta Avatar"
          className="w-[20rem] h-[20rem] xl:w-[28rem] xl:h-[28rem] object-cover animate-float"
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