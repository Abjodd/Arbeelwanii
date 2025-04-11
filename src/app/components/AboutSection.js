"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    name: "React & Next.js",
    keywords: ["Components", "Server Components", "API Routes", "Hooks"],
  },
  { name: "JavaScript ", keywords: ["Interfaces", "Async/Await"] },
  {
    name: "Node.js & Express",
    keywords: ["API Development", "Authentication", "Middleware", "REST"],
  },
  {
    name: "Database Management",
    keywords: ["MongoDB", "MySQL", "Firebase", "DBMS"],
  },
  {
    name: "Front-end Development",
    keywords: ["React", "Vite", "CSS", "Tailwind"],
  },
  {
    name: "UI/UX Design",
    keywords: ["Figma", "Wireframing", "Prototyping", "Accessibility"],
  },
  {
    name: "Data Structures & Algorithms",
    keywords: ["Arrays", "Trees", "Graphs", "Complexity Analysis"],
  },
  {
    name: "Mobile Development",
    keywords: ["Flutter", "Responsive Design", "Cross-platform"],
  },
  { name: "Dev Tools", keywords: ["Git", "GitHub", "Vercel"] },
  { name: "Python", keywords: ["Data Analysis", "Automations"] },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,200,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
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
              transform: `scale(${Math.random() * 0.8 + 0.2})`,
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
              <h3 className="text-3xl font-bold mb-8 text-white pl-4">
                Profile
              </h3>
              <div className="space-y-6 relative pl-4">
                <p className="text-gray-300">
                  I&apos; a developer focused on creating immersive digital
                  experiences that blend form and function. With a background in
                  both design and development, I bring a unique perspective to
                  every project.
                </p>
                <p className="text-gray-300">
                  I specialize in building futuristic interfaces and
                  applications that push the boundaries of web technology while
                  maintaining performance and accessibility.
                </p>

                {/* Terminal-like box */}
                <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <div className="text-xs text-gray-500 ml-2">
                      profile.json
                    </div>
                  </div>
                  <div className="font-mono text-sm">
                    <p className="text-blue-300">{"{"}</p>
                    <p className="text-gray-300 ml-4">
                      &quot;name&quot;:{" "}
                      <span className="text-green-300">
                        &quot;Arbeel Wani&quot;
                      </span>
                      ,
                    </p>
                    <p className="text-gray-300 ml-4">
                      &quot;role&quot;:{" "}
                      <span className="text-green-300">
                        &quot;Full Stack Developer&quot;
                      </span>
                      ,
                    </p>
                    <p className="text-gray-300 ml-4">
                      &quot;location&quot;:{" "}
                      <span className="text-green-300">&quot;Remote&quot;</span>
                      ,
                    </p>
                    <p className="text-gray-300 ml-4">
                      &quot;interests&quot;: [
                      <span className="text-green-300">
                        &quot;AI&quot;, &quot;3D Graphics&quot;,
                        &quot;UI/UX&quot;
                      </span>
                      ]
                    </p>
                    <p className="text-blue-300">{"}"}</p>
                  </div>
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
            <h3 className="text-3xl font-bold mb-8 text-white pl-4">
              Skills & Expertise
            </h3>

            {/* Redesigned skills section with hexagonal grid layout */}
            <div className="pl-4">
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-700/30 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                      <div className="flex items-center mb-2">
                        <div className="mr-2 w-6 h-6 flex items-center justify-center rounded-full bg-blue-800/50 text-blue-300 group-hover:bg-blue-700">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                          </svg>
                        </div>
                        <h4 className="text-md font-semibold text-blue-200 group-hover:text-blue-100">
                          {skill.name}
                        </h4>
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
