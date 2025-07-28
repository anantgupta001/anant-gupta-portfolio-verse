import { Shield, Code2, Users, Globe, Brain, GraduationCap } from 'lucide-react';

export const AboutSection = () => (
  <section
    className="py-16 px-4 md:px-12 mx-auto bg-background-light dark:bg-background-dark"
  >
    <h2 className="section-heading text-3xl md:text-4xl font-bold mb-4 text-center text-heading-light dark:text-heading-dark">About Me</h2>
    <p className="section-subheading text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 text-center max-w-3xl mx-auto">
      Full-stack developer currently pursuing B.Tech in Computer Science at VIT-AP, with a focus on building scalable applications and leading impactful technology projects.
    </p>
    <div className="grid md:grid-cols-4 gap-8">
      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 flex flex-col items-start min-h-[260px] z-10 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
          <Globe className="h-7 w-7 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-[color:var(--accent)]">Open Source Contribution</h3>
        <p className="text-gray-700 dark:text-gray-200 mb-2">Contributed to FFCS on the Go, an open-source platform used by over 120,000 VIT students each semester to simplify and accelerate the traditionally hectic course registration process.</p>
        <p className="text-gray-700 dark:text-gray-200">Achieved a 40% reduction in average course selection time and a 70% increase in user satisfaction, based on survey feedback, by implementing a guided selection flow and significantly improving performance over the official VTOP system.</p>
      </div>
      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 flex flex-col items-start min-h-[260px] z-10 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 mb-4">
          <Code2 className="h-7 w-7 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-[color:var(--accent)]">Full Stack Engineering</h3>
        <p className="text-gray-700 dark:text-gray-200 mb-2">Built StayHub, a dynamic accommodation platform with secure authentication, integrated location services using Mapbox, and responsive UI.</p>
        <p className="text-gray-700 dark:text-gray-200">Designed scalable REST APIs and implemented robust user access control using cookies and salted sessions.</p>
      </div>
      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 flex flex-col items-start min-h-[260px] z-10 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mb-4">
          <Users className="h-7 w-7 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-[color:var(--accent)]">Technical Leadership</h3>
        <p className="text-gray-700 dark:text-gray-200 mb-2">Led a 5-member team to develop FoodApe, a food ordering app used by 30,000+ VIT-AP students.</p>
        <p className="text-gray-700 dark:text-gray-200">Architected a monolithic backend, improved scalability by 30%, reduced latency by 25%, and integrated ML-based recommendations.</p>
      </div>
      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 flex flex-col items-start min-h-[260px] z-10 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 mb-4">
          <Brain className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-[color:var(--accent)]">AI/ML</h3>
        <p className="text-gray-700 dark:text-gray-200 mb-2">Developed an Age Detection Model, a CNN-based ensemble system designed to predict age from facial images with high accuracy.</p>
        <p className="text-gray-700 dark:text-gray-200">Achieved 80% prediction accuracy by training on the UTKFace and Facial Age datasets for 60 epochs, using softmax activation for multi-class classification and optimized model architecture for performance and generalization.</p>
      </div>
    </div>
  </section>
);