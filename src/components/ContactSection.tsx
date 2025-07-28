import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Github, 
  ExternalLink, 
  MapPin, 
  Phone, 
  Send,
  Download 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:anantagarwal4946@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening email client...",
      description: "Your default email application should open with the message pre-filled.",
    });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-anant-gupta.pdf';
    link.download = 'Anant_Gupta_Resume.pdf';
    link.click();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anantagarwal4946@gmail.com',
      href: 'mailto:anantagarwal4946@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9509210859',
      href: 'tel:+919509210859'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, Rajasthan',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/anantgupta001',
      username: '@anantgupta001'
    },
    {
      icon: ExternalLink,
      label: 'LeetCode',
      href: 'https://leetcode.com/anantgupta7628',
      username: '@anantgupta7628'
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-12 bg-background-light dark:bg-background-dark"
    >
      <div>
        <div className="text-center mb-16">
          <h2 className="section-heading text-3xl md:text-4xl font-bold mb-8 text-heading-light dark:text-heading-dark">Let's Connect</h2>
          <p className="section-subheading text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to collaborations, internships, and innovative opportunities — feel free to reach out via GitHub, LinkedIn, or email.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="group">
            <a
              href="mailto:anantagarwal4946@gmail.com"
              className="px-8 py-3 rounded-full bg-[#34699A]/60 text-white font-[cursive] text-2xl font-normal shadow-lg hover:bg-[#34699A]/80 transition text-lg mt-2 backdrop-blur-md border border-white/30 glass group-hover:animate-flip"
              style={{ display: 'inline-block', perspective: '600px' }}
            >
              Say Hello!
            </a>
            <style>{`
              @keyframes flip {
                0% { transform: rotateY(0deg); }
                100% { transform: rotateY(360deg); }
              }
              .animate-flip {
                animation: flip 0.6s cubic-bezier(0.4, 0.2, 0.2, 1) forwards;
                backface-visibility: hidden;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};