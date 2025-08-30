"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const skills = [
    "figma-plain", "html5-plain", "css3-plain", "bootstrap-plain", 
    "tailwindcss-plain", "javascript-plain", "typescript-plain", 
    "react-original", "vuejs-plain", "nodejs-plain", "php-plain", 
    "mongodb-plain", "mysql-plain", "git-plain", "github-original", 
    "docker-plain", "postgresql-plain", "express-original", 
    "graphql-plain", "nextjs-original"
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-10 lg:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-2/5 text-center lg:text-left"
        >
          <motion.h2 
            className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About <span className="text-green-500">Me</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hey, I&apos;m Hernando, a passionate Full-Stack Developer who thrives on building 
            fast, scalable, and intuitive web applications. I specialize in transforming 
            complex challenges into elegant, user-friendly solutions.
          </motion.p>
          
          <motion.p
            className="text-lg sm:text-xl leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            When I&apos;m not coding, you&apos;ll find me writing tech books, exploring new frameworks, 
            or sharing knowledge with the developer community. My mission is to create digital 
            experiences that not only look great but also make a meaningful impact.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-green-500">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-green-500">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Panel */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-3/5 flex justify-center"
        >
          <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-2xl 
                          bg-white/5 backdrop-blur-md border border-white/10 
                          shadow-xl shadow-green-500/5 hover:shadow-green-500/10 
                          transition-all duration-500">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 sm:gap-5">
              {skills.map((icon, i) => (
                <motion.div
                  key={icon}
                  className="flex items-center justify-center group relative"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15 }}
                >
                  <i 
                    className={`devicon-${icon} text-3xl sm:text-4xl text-gray-400 transition-all duration-300 group-hover:text-green-400`}
                  />
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-green-400 font-medium bg-gray-900/90 px-2 py-1 rounded-md">
                    {icon.split('-')[0].charAt(0).toUpperCase() + icon.split('-')[0].slice(1)}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Skill level indicator */}
            <motion.div 
              className="mt-8 pt-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">Full-Stack Proficiency</span>
                <span className="text-green-400 text-sm font-medium">90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-2.5 rounded-full" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;