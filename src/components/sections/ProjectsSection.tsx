import projectsData from '../../data/projects.json';
import { Github, ExternalLink, Users, TrendingUp, Brain, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const iconMap = { Users, TrendingUp, Brain, Zap };

export const ProjectsSection = () => {
  // Map icon string to component, fallback to Users if not found
  const projects = Array.isArray(projectsData) ? projectsData.map(project => ({
    ...project,
    icon: iconMap[project.icon] || Users,
  })) : [];

  if (!projects.length) {
    return (
      <section className="py-16 px-4 md:px-12 mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>
        <p className="text-lg text-gray-500 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">No projects found. Please check your projects.json file.</p>
      </section>
    );
  }

  // Use a simple currentIdx state
  const [currentIdx, setCurrentIdx] = useState(0);

  const goTo = (idx) => setCurrentIdx((idx + projects.length) % projects.length);
  const prev = () => goTo(currentIdx - 1);
  const next = () => goTo(currentIdx + 1);

  return (
    <section
      className="py-16 px-4 md:px-12 mx-auto flex flex-col items-center bg-background-light dark:bg-background-dark"
    >
      <h2 className="section-heading text-3xl md:text-4xl font-bold mb-8 text-heading-light dark:text-heading-dark">Featured Projects</h2>
      <p className="section-subheading text-lg text-gray-500 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
        A curated collection of work in open source, AI/ML, and full-stack applications — demonstrating practical implementations of cutting-edge technologies.
      </p>
      <div className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center overflow-x-hidden overflow-y-hidden" style={{ maxHeight: 420 }}>
        {/* Side arrow buttons */}
        <button
          aria-label="Previous project"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-[#273449] border border-gray-300 dark:border-slate-700 rounded-full p-3 shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition z-20"
        >
          <ChevronLeft className="h-7 w-7 text-blue-600 dark:text-purple-400" />
        </button>
        <div className="flex flex-row items-center justify-center w-full h-full">
          <div className="w-[600px] h-[320px] md:h-[380px] shadow-lg dark:shadow-2xl transition-all duration-500 flex items-center justify-center">
            {renderProjectCard(projects[currentIdx], true)}
          </div>
        </div>
        <button
          aria-label="Next project"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-[#273449] border border-gray-300 dark:border-slate-700 rounded-full p-3 shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition z-20"
        >
          <ChevronRight className="h-7 w-7 text-blue-600 dark:text-purple-400" />
        </button>
      </div>
    </section>
  );

  // Helper to render a project card
  function renderProjectCard(project, isCenter) {
    return (
      <div className={`rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark flex flex-col w-full h-full p-8 pb-20 relative ${isCenter ? 'shadow-lg dark:shadow-2xl' : 'shadow-md dark:shadow-xl'}`}>
        {isCenter && (project.github || project.demo) && (
          <div className="absolute left-4 bottom-4 flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-600 transition"
                title="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-green-600 hover:text-green-700 transition"
                title="Live Demo"
              >
                <ExternalLink className="h-6 w-6" />
              </a>
            )}
          </div>
        )}
        {isCenter ? (
          <div className="flex flex-col items-center mb-2">
            <div className={`p-2 rounded-2xl bg-gradient-to-r ${project.color} shadow-sm mb-2`}>
              {project.icon && React.createElement(project.icon, { className: 'h-14 w-14 text-[color:var(--accent)]' })}
            </div>
            <h3 className="text-2xl font-bold text-[color:var(--accent)] leading-tight mb-2 text-center">{project.title}</h3>
          </div>
        ) : (
          <div className="flex items-center gap-3 mb-1">
            <div className={`p-1 rounded-xl bg-gradient-to-r ${project.color} shadow-sm`}>
              {project.icon && React.createElement(project.icon, { className: 'h-8 w-8 text-[color:var(--accent)]' })}
            </div>
            <h3 className="text-lg font-bold text-[color:var(--accent)] leading-tight mb-1">{project.title}</h3>
          </div>
        )}
        {Array.isArray(project.description) ? (
          <ul className={`text-gray-700 dark:text-gray-200 mt-1 mb-1 text-xs flex-1 space-y-1 ${isCenter ? '' : 'truncate'}`}>
            {project.description.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[color:var(--accent)] mr-2 mt-1">•</span>
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={`text-gray-700 dark:text-gray-200 mt-1 mb-1 text-xs flex-1 ${isCenter ? '' : 'truncate'}`}>{project.description}</p>
        )}
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-1">
          {project.technologies && (
            isCenter
              ? project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900 text-[color:var(--accent)] rounded-full border border-blue-200 dark:border-blue-800"
                  >
                    {tech}
                  </span>
                ))
              : <>
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900 text-[color:var(--accent)] rounded-full border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900 text-[color:var(--accent)] rounded-full border border-blue-200 dark:border-blue-800">...</span>
                  )}
                </>
          )}
        </div>
        {/* Links (removed, now in top right) */}
      </div>
    );
  }
};