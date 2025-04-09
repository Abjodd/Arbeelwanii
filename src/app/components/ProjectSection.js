'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Neomorphic AI Dashboard",
    description: "A futuristic dashboard for AI analytics with real-time data visualization.",
    tags: ["React", "Three.js", "WebGL", "API"],
    image: "/api/placeholder/600/400",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Cyberpunk E-commerce",
    description: "A neon-themed e-commerce platform with immersive product showcasing.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Stripe"],
    image: "/api/placeholder/600/400",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Neural Network Visualizer",
    description: "Interactive visualizer for neural networks with real-time training metrics.",
    tags: ["TypeScript", "D3.js", "TensorFlow.js", "WebGL"],
    image: "/api/placeholder/600/400",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Holographic Portfolio",
    description: "A 3D portfolio website with holographic UI elements and animations.",
    tags: ["Three.js", "GSAP", "WebGL", "React"],
    image: "/api/placeholder/600/400",
    link: "#",
    github: "#"
  }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'linear-gradient(0deg, rgba(0,200,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-3 py-1 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/20 text-blue-300 text-sm mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            FEATURED_PROJECTS
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 ${activeProject === project.id ? 'shadow-lg shadow-blue-500/10 scale-[1.02] z-10' : ''}`}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-lg rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/10 blur-lg rounded-tr-full"></div>
              
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-90" />
                
                {/* Overlay icons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900/50 backdrop-blur-sm border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-800/70 transition-all duration-300"
                    aria-label="View on GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a 
                    href={project.link}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900/50 backdrop-blur-sm border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-800/70 transition-all duration-300"
                    aria-label="View live project"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="p-6 relative">
                {/* Tech tags with cool styling */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 bg-blue-900/30 backdrop-blur-sm text-blue-300 rounded-full border border-blue-800/50 group-hover:border-blue-500/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center px-4 py-2 bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg text-blue-300 hover:text-blue-100 hover:bg-blue-800/50 transition-all duration-300 group-hover:translate-x-1"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              {/* Animated hover glow effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="#all-projects" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-blue-300 border border-blue-500/50 rounded-full hover:text-white transition duration-300">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              View All Projects
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>  
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}