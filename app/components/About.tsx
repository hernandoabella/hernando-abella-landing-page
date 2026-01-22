"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaToolbox, FaCheckCircle } from "react-icons/fa";

// Definimos la interfaz para corregir el error de TypeScript
interface AboutProps {
  isOpen?: boolean;
}

const AboutMe = ({ isOpen }: AboutProps) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="text-green-500" />,
      skills: ["nextjs-original", "react-original", "typescript-plain", "tailwindcss-plain", "vuejs-plain", "bootstrap-plain"],
    },
    {
      title: "Backend",
      icon: <FaServer className="text-green-500" />,
      skills: ["nodejs-plain", "express-original", "postgresql-plain", "mongodb-plain", "mysql-plain", "graphql-plain"],
    },
    {
      title: "Tools",
      icon: <FaToolbox className="text-green-500" />,
      skills: ["docker-plain", "git-plain", "github-original", "figma-plain"],
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full flex items-center justify-center px-4 sm:px-6 py-16 md:py-24 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-20 flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto gap-12 lg:gap-20">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              About <span className="text-green-500">Me</span>
            </h2>
            <div className="h-1 w-20 bg-green-500 rounded-full" />
          </div>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hey there! I&apos;m <span className="text-white font-medium">Hernando</span>, 
              a Full-Stack Developer with over a decade of experience crafting high-performance 
              web solutions.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects Completed", value: "200+", sub: "Worldwide clients" },
              { label: "Years Experience", value: "10+", sub: "Continuous growth" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-green-500 mb-1">{stat.value}</div>
                <div className="text-white font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Skill Categories */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <div className="grid gap-6">
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-green-500/30 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  {cat.icon}
                  <h3 className="text-lg font-semibold text-white uppercase text-xs tracking-widest">{cat.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {cat.skills.map((skill, i) => (
                    <div key={i} className="group/icon relative flex flex-col items-center">
                      <motion.i
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className={`devicon-${skill} text-3xl sm:text-4xl text-gray-500 group-hover/icon:text-white transition-all duration-300 cursor-help`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Proficiency Bar */}
            <div className="mt-4 p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <FaCheckCircle />
                  <span>Full-Stack Mastery</span>
                </div>
                <span className="text-green-400 text-sm font-bold">92%</span>
              </div>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;