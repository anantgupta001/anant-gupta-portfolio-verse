import { Shield, Code2, Users, Globe, Brain, GraduationCap } from 'lucide-react';

export const AboutSection = () => (
  <section
    className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8 mx-auto bg-background-light dark:bg-background-dark"
  >
    <h2 className="section-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center text-heading-light dark:text-heading-dark">About Me</h2>
    <p className="section-subheading text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 sm:mb-8 md:mb-12 text-center max-w-3xl mx-auto px-2">
      Full-stack developer currently pursuing B.Tech in Computer Science at VIT-AP, with a focus on building scalable applications and leading impactful technology projects.
    </p>
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
      <div className="bg-card-light dark:bg-card-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 flex-shrink-0">
            <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[color:var(--accent)]">Open Source Contribution</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 mb-2 sm:mb-3 leading-relaxed">Contributed to FFCS on the Go, an open-source platform used by over 120,000 VIT students each semester to simplify and accelerate the traditionally hectic course registration process.</p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed">Achieved a 40% reduction in average course selection time and a 70% increase in user satisfaction, based on survey feedback, by implementing a guided selection flow and significantly improving performance over the official VTOP system.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-card-light dark:bg-card-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 flex-shrink-0">
            <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[color:var(--accent)]">Full Stack Engineering</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 mb-2 sm:mb-3 leading-relaxed">Built StayHub, a dynamic accommodation platform with secure authentication, integrated location services using Mapbox, and responsive UI.</p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed">Designed scalable REST APIs and implemented robust user access control using cookies and salted sessions.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-card-light dark:bg-card-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0">
            <Users className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[color:var(--accent)]">Technical Leadership</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 mb-2 sm:mb-3 leading-relaxed">Led a 5-member team to develop FoodApe, a food ordering app used by 30,000+ VIT-AP students.</p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed">Architected a monolithic backend, improved scalability by 30%, reduced latency by 25%, and integrated ML-based recommendations.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-card-light dark:bg-card-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-border-light dark:border-border-dark transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 flex-shrink-0">
            <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[color:var(--accent)]">AI/ML</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 mb-2 sm:mb-3 leading-relaxed">Developed an Age Detection Model, a CNN-based ensemble system designed to predict age from facial images with high accuracy.</p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed">Achieved 80% prediction accuracy by training on the UTKFace and Facial Age datasets for 60 epochs, using softmax activation for multi-class classification and optimized model architecture for performance and generalization.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);