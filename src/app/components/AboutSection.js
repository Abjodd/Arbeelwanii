'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: "React & Next.js", keywords: ["Components", "Server Components", "API Routes", "Hooks"] },
  { name: "JavaScript ", keywords: [  "Interfaces", "Async/Await"] },
  { name: "Node.js & Express", keywords: ["API Development", "Authentication", "Middleware", "REST"] },
  { name: "Database Management", keywords: ["MongoDB", "MySQL", "Firebase", "DBMS"] },
  { name: "Front-end Development", keywords: ["React", "Vite", "CSS", "Tailwind"] },
  { name: "UI/UX Design", keywords: ["Figma", "Wireframing", "Prototyping", "Accessibility"] },
  { name: "Data Structures & Algorithms", keywords: ["Arrays", "Trees", "Graphs", "Complexity Analysis"] },
  { name: "Mobile Development", keywords: ["Flutter", "Responsive Design", "Cross-platform"] },
  { name: "Dev Tools", keywords: ["Git", "GitHub","Vercel"] },
  { name: "Python", keywords: ["Data Analysis", "Automations"] }
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'linear-gradient(0deg, rgba(0,200,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      {/* Animated particles in background (simplified) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-400/10 blur-xl animate-pulse"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 0.8 + 0.2})`
            }}
          ></div>
        ))}
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 rounded-full bg-cyan-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-3 py-1 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/20 text-blue-300 text-sm mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
            Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            ABOUT_ME
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -left-2 top-0 w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent"></div>
              <h3 className="text-3xl font-bold mb-8 text-white pl-4">Profile</h3>
              <div className="space-y-6 relative pl-4">
                <p className="text-gray-300">
                I&apos; a developer focused on creating immersive digital experiences that blend form and function.
                  With a background in both design and development, I bring a unique perspective to every project.
                </p>
                <p className="text-gray-300">
                  I specialize in building futuristic interfaces and applications that push the boundaries of web technology
                  while maintaining performance and accessibility.
                </p>
                
                {/* Terminal-like box */}
                <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <div className="text-xs text-gray-500 ml-2">profile.json</div>
                  </div>
                  <div className="font-mono text-sm">
                    <p className="text-blue-300">{"{"}</p>
                    <p className="text-gray-300 ml-4">"name": <span className="text-green-300">"Arbeel Wani"</span>,</p>
                    <p className="text-gray-300 ml-4">"role": <span className="text-green-300">"Full Stack Developer"</span>,</p>
                    <p className="text-gray-300 ml-4">"location": <span className="text-green-300">"Remote"</span>,</p>
                    <p className="text-gray-300 ml-4">"interests": [<span className="text-green-300">"AI", "3D Graphics", "UI/UX"</span>]</p>
                    <p className="text-blue-300">{"}"}</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  {['github', 'linkedin', 'twitter'].map((social) => (
                    <a 
                      key={social}
                      href={`#${social}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {social === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
                        {social === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                        {social === 'twitter' && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -left-2 top-0 w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent"></div>
            <h3 className="text-3xl font-bold mb-8 text-white pl-4">Skills & Expertise</h3>
            
            {/* Redesigned skills section with hexagonal grid layout */}
            <div className="pl-4">
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-700/30 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                      <div className="flex items-center mb-2">
                        <div className="mr-2 w-6 h-6 flex items-center justify-center rounded-full bg-blue-800/50 text-blue-300 group-hover:bg-blue-700">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                          </svg>
                        </div>
                        <h4 className="text-md font-semibold text-blue-200 group-hover:text-blue-100">{skill.name}</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        {skill.keywords.map((keyword, kidx) => (
                          <span 
                            key={kidx}
                            className="px-2 py-1 bg-blue-900/20 text-xs rounded-md border border-blue-700/20 text-gray-300 group-hover:border-blue-600/40 transition-all duration-300"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}