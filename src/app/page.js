"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-black z-50 text-4xl font-bold gradient-text"
          >
            INITIALIZING INTERFACE...
          </motion.div>
        </div>
      ) : (
        <div className="grid-background">
          <div className="blob w-80 h-80 bottom-20 right-10 absolute z-0"></div>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      )}
    </>
  );
}
