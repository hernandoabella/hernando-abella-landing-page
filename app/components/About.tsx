"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden"
    >
      {/* Hex Pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <pattern
            id="hex"
            width="20"
            height="17.32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 0 L20 5 L20 15 L10 20 L0 15 L0 5 Z"
              stroke="#38bdf8"
              strokeWidth="0.3"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      {/* Diagonal Grid */}
      <svg
        className="absolute top-0 right-0 w-full h-full opacity-10 z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <path d="M0 0 L0 40" stroke="#94a3b8" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-left"
        >
          <h2 className="mb-2 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-200 via-sky-400 to-sky-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mb-6 text-lg text-cyan-300 italic">
            Building digital experiences with code & creativity ✨
          </p>

          <p className="text-lg sm:text-xl mb-5 leading-relaxed text-gray-200">
            Hi, I&apos;m Hernando — a passionate Full-Stack Developer focused on
            crafting dynamic, scalable, and user-friendly web applications. I
            thrive on solving challenges and transforming ideas into functional,
            beautiful digital products.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
            Beyond coding, I write books, explore new technologies, and share
            knowledge to empower others. My mission is to deliver solutions that
            create real impact for businesses and people alike.
          </p>
        </motion.div>

        {/* Skills Panel */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative flex items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 transition">
            <div className="grid grid-cols-6 gap-5 sm:gap-6">
              {[
                "figma-plain",
                "html5-plain",
                "css3-plain",
                "bootstrap-plain",
                "tailwindcss-plain",
                "javascript-plain",
                "typescript-plain",
                "react-original",
                "vuejs-plain",
                "nodejs-plain",
                "php-plain",
                "mongodb-plain",
                "mysql-plain",
                "git-plain",
                "github-original",
                "docker-plain",
                "postgresql-plain",
                "express-original",
                "graphql-plain",
                "nextjs-original",
              ].map((icon, i) => (
                <motion.i
                  key={icon}
                  className={`devicon-${icon} text-3xl sm:text-4xl text-cyan-400 hover:text-cyan-300 transition transform hover:scale-125`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
