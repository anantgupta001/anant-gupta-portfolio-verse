import { Shield, Code2, Users, Globe, GraduationCap } from 'lucide-react';

export const AboutSection = () => (
  <section
    className="py-16 px-4 md:px-12 mx-auto bg-background-light dark:bg-background-dark"
  >
    <h2 className="section-heading text-3xl md:text-4xl font-bold mb-4 text-center text-heading-light dark:text-heading-dark">About Me</h2>
    <p className="section-subheading text-lg md:text-xl text-text-light dark:text-text-dark font-sans mb-8 text-center max-w-3xl mx-auto">
      I'm a passionate full-stack developer and cybersecurity enthusiast, currently pursuing B.Tech in Computer Science at VIT-AP. I love building scalable web apps, breaking things ethically, and leading impactful tech projects that solve real problems.
    </p>
    <div className="grid md:grid-cols-4 gap-8">
      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 flex flex-col items-start min-h-[260px] z-10 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
          <Globe className="h-7 w-7 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-[color:var(--accent)]">Open Source Contribution</h3>
        <p className="text-gray-700 dark:text-gray-200 font-sans mb-2">Contributed to FFCS on the Go, impacting over 120,000 VIT students each semester by streamlining the hectic course registration process.</p>
        <p className="text-gray-700 dark:text-gray-200 font-sans">Reduced selection time by 40% and improved overall user satisfaction by 70%.</p>
      </div>
      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 flex flex-col items-start min-h-[260px] z-10 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 mb-4">
          <Code2 className="h-7 w-7 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-[color:var(--accent)]">Full Stack Engineering</h3>
        <p className="text-gray-700 dark:text-gray-200 font-sans mb-2">Built StayHub, a dynamic accommodation platform with secure authentication, integrated location services using Mapbox, and responsive UI.</p>
        <p className="text-gray-700 dark:text-gray-200 font-sans">Designed scalable REST APIs and implemented robust user access control using cookies and salted sessions.</p>
      </div>
      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 flex flex-col items-start min-h-[260px] z-10 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mb-4">
          <Users className="h-7 w-7 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-[color:var(--accent)]">Technical Leadership</h3>
        <p className="text-gray-700 dark:text-gray-200 font-sans mb-2">Led a 5-member team to develop FoodApe, a food ordering app used by 30,000+ VIT-AP students.</p>
        <p className="text-gray-700 dark:text-gray-200 font-sans">Architected a monolithic backend, improved scalability by 30%, reduced latency by 25%, and integrated ML-based recommendations.</p>
      </div>
      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 flex flex-col items-start min-h-[260px] z-10 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 mb-4">
          <GraduationCap className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-[color:var(--accent)]">Education</h3>
        <p className="text-gray-700 dark:text-gray-200 font-sans mb-2">Pursuing B.Tech in Computer Science and Engineering from VIT-AP University (2022–2026) with a CGPA of 8.46.</p>
        <p className="text-gray-700 dark:text-gray-200 font-sans">Focused on systems, AI/ML, and scalable software design through real-world, project-driven learning.</p>
      </div>
    </div>
  </section>
);