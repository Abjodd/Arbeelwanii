"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "A React dashboard for the farmers app",
    description:
      "Developing a React dashboard for the farmers app to provide government officials with an intuitive and organized view of the collected data. Incorporating features like data filtering, sorting, and visualizations to ensure insights are easily accessible. Enhancing usability by focusing on a clean UI/UX design for seamless navigation and interaction with large datasets",
    tags: ["Vite + React", "firebase", "Node.js", "express", "API"],
    link: "https://gkvk-dashboard.vercel.app/",
    github: "https://github.com/Abjodd",
    image: "/project5.png",
  },
  {
    id: 2,
    title: "ATS-friendly resume building",
    description:
      "Designed and developed a website for real-time, ATS-friendly resume building, enabling users to create professional resumes for free. Implemented a live preview feature to allow users to see updates to their resume instantly. Ensured the resume template adhered to ATS standards for optimal compatibility with job application systems.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Node.js"],
    link: "https://github.com/Abjodd/resumebuilder",
    github: "https://github.com/Abjodd",
    image: "/project1.png",
  },
  {
    id: 3,
    title: "A GYM MANAGEMENT SYSTEM",
    description:
      "The Gym Management System is a software designed to store data about members, employees, products, payroll, receipts of members etc & all transactions that occur in Gym and lock-up with graphical user interface (GUI).",
    tags: ["Vite + React", "firebase", "Node.js", "express", "API"],
    link: "https://github.com/Abjodd/blackfitness",
    github: "https://github.com/Abjodd",
    image: "/project7.png",
  },
  {
    id: 4,
    title: "Social Media post extracter",
    description:
      "A powerful tool designed to effortlessly extract text from social media posts across various platforms. Useful for trend analysis, insight gathering, and content archiving.",
    tags: ["React", "python", "node.js", "web scrapping"],
    link: "https://github.com/Abjodd/amazon",
    github: "https://github.com/Abjodd",
    image: "/project4.png",
  },
  {
    id: 5,
    title: "YouTube Clone",
    description:
      "Built a fully functional YouTube Clone with video playback, search functionality, channel pages, and responsive UI. Implemented real-time video fetching from APIs, allowing users to explore trending and related videos. Designed with modern aesthetics and optimized for performance and seamless navigation.",
    tags: ["React", "Tailwind", "API Integration", "MOngoDB","Observer","Adaptive"],
    link: "https://ytclone-tz3k.vercel.app/", 
    github: "https://github.com/Abjodd", 
    image: "/project14.png", 
  }
];

const getProjectColor = (id) => {
  const colors = [
    ["#3b82f6", "#0ea5e9"],
    ["#8b5cf6", "#6366f1"],
    ["#ec4899", "#f43f5e"],
    ["#10b981", "#14b8a6"],
  ];
  return colors[(id - 1) % colors.length];
};

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  const handleExternalLink = (url, event) => {
    event?.preventDefault(); // Optional chaining in case event is undefined
    if (!url) {
      console.error("No URL provided");
      return;
    }
    
    try {
      // Check if URL is valid
      new URL(url); // This will throw if URL is invalid
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Invalid URL:", url, error);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,200,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glows */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/20 text-blue-300 text-sm mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            FEATURED_PROJECTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const [color1, color2] = getProjectColor(project.id);
            const isGitHubLink = project.link?.includes('github.com');

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 ${
                  activeProject === project.id
                    ? "shadow-lg shadow-blue-500/10 scale-[1.02] z-10"
                    : ""
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${color1}, ${color2})`,
                    }}
                  >
                    <span className="text-white text-6xl font-bold opacity-30">
                      P{project.id}
                    </span>
                  </div>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover relative z-10"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-70 z-20" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    <button
                      onClick={(e) => handleExternalLink(project.github, e)}
                      className="icon-btn"
                      aria-label="GitHub"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.34.726-4.033-1.416-4.033-1.416-.546-1.387-1.334-1.756-1.334-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.069 1.834 2.806 1.304 3.491.997.107-.775.418-1.305.762-1.604C6.662 17.115 3.86 16.086 3.86 11.5c0-1.311.47-2.381 1.237-3.221-.124-.303-.536-1.524.118-3.176 0 0 1.008-.322 3.301 1.23a10.4 10.4 0 0 1 6.004 0c2.29-1.552 3.296-1.23 3.296-1.23.653 1.652.243 2.873.118 3.176.77.84 1.237 1.91 1.237 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .318.192.693.801.575C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => handleExternalLink(project.link, e)}
                      className="icon-btn"
                      aria-label="Live Link"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full border border-blue-800/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  {project.link ? (
                    <button
                      onClick={(e) => handleExternalLink(project.link, e)}
                      className={`inline-flex items-center px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 hover:text-blue-100 hover:bg-blue-800/50 transition-all duration-300 ${
                        !project.link ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={!project.link}
                    >
                      {isGitHubLink ? "View Code" : "View Project"}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  ) : (
                    <span className="text-gray-500">Link not available</span>
                  )}
                </div>

                <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}