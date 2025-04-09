'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import * as THREE from 'three';

export default function HeroSection() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Enhanced Three.js animation
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create more detailed geometry
    const geometry = new THREE.IcosahedronGeometry(5, 2);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00f3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
      emissive: 0x0088ff,
      emissiveIntensity: 0.5,
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Add inner glowing sphere for futuristic effect
    const innerGeometry = new THREE.IcosahedronGeometry(4.5, 1);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x0044ff,
      transparent: true,
      opacity: 0.2,
    });
    
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerSphere);
    
    // Add background particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const positions = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.6,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Add light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x00ffff, 2, 50);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    camera.position.z = 15;
    
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Update objects with interactive rotation
      sphere.rotation.x += 0.003;
      sphere.rotation.y += 0.005;
      sphere.rotation.y += mouseX * 0.01;
      sphere.rotation.x += mouseY * 0.01;
      
      innerSphere.rotation.x -= 0.002;
      innerSphere.rotation.y -= 0.003;
      
      particles.rotation.y = elapsedTime * 0.05;
      
      // Pulse effect
      const scale = 1 + Math.sin(elapsedTime) * 0.03;
      sphere.scale.set(scale, scale, scale);
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced 3D canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-0"></div>
      
      {/* Futuristic grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,200,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4"
          >
            <div className="inline-block px-3 py-1 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/20 text-blue-300 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
              Portfolio
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            Arbeel Wani
          </motion.h1>
          
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'UI/UX Engineer',
                1000,
                'Tech Enthusiast',
                1000,
                'Problem Solver',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="#projects" className="group relative px-8 py-3 rounded-full bg-transparent border border-blue-400 text-blue-300 hover:border-blue-500 hover:text-blue-200 transition duration-300 overflow-hidden">
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
              <span className="absolute top-0 right-0 h-1 w-6 bg-blue-400"></span>
              <span className="absolute bottom-0 left-0 h-1 w-6 bg-blue-400"></span>
            </a>
            
            <a href="#contact" className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 transform hover:translate-y-px transition duration-300 shadow-lg shadow-blue-700/30">
              <span className="relative z-10">Contact Me</span>
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur opacity-30 group-hover:opacity-50 transition duration-300"></span>
            </a>
          </motion.div>
          
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-8 flex justify-center gap-4"
          >
            {['github', 'linkedin', 'twitter'].map((social) => (
              <a 
                key={social}
                href={`#${social}`}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="sr-only">{social}</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {social === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>}
                  {social === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
                  {social === 'twitter' && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>}
                </svg>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
          <div className="p-1 rounded-full border border-blue-500/30">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}