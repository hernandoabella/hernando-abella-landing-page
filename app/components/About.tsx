"use client";

import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden"
    >
      {/* ⬢ Hex Pattern Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <pattern id="hex" width="20" height="17.32" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
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

      {/* ⬣ Diagonal Line Grid */}
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
        <div className="w-full md:w-1/2 text-left">
          <h2 className="mb-6 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-200 via-sky-400 to-sky-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg sm:text-xl mb-5 leading-relaxed text-gray-200">
            Hi, I&apos;m Hernando — a passionate Full-Stack Developer experienced in building dynamic and scalable web applications. I love solving problems and creating useful tools.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
            I’m always exploring new tech, writing books, and pushing myself to build better. When I'm not coding, you can find me enjoying nature or diving deep into the latest tech trends.
          </p>
        </div>

        {/* Skills Panel */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative flex items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
            <div className="grid grid-cols-6 gap-5 sm:gap-6">
              {[
                "figma-plain", "html5-plain", "css3-plain", "bootstrap-plain",
                "tailwindcss-plain", "javascript-plain", "typescript-plain", "react-original",
                "vuejs-plain", "nodejs-plain", "php-plain", "mongodb-plain",
                "mysql-plain", "git-plain", "github-original", "docker-plain",
                "postgresql-plain", "express-original", "graphql-plain", "nextjs-original",
              ].map((icon) => (
                <i
                  key={icon}
                  className={`devicon-${icon} text-3xl sm:text-4xl text-cyan-400 hover:text-cyan-300 transition transform hover:scale-110`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
