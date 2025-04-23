"use client";

import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-gray-50 text-gray-900 dark:text-gray-100 dark:bg-[#131313] min-h-screen px-4"
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="mb-5 font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 bg-transparent h-full">
            About Me
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 leading-relaxed">
            Hi, I&apos;m Hernando, a passionate Full-Stack Developer with experience
            in designing and building dynamic web applications. My journey has
            allowed me to work with a wide variety of technologies, solving
            complex problems and creating innovative solutions.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            I&apos;m always exploring new tech and improving my skills to deliver
            scalable and efficient code. When not coding, I’m geeking out on tech
            trends or soaking up nature!
          </p>
        </div>

        {/* Skills Circle */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Icon Group */}
              <i className="devicon-html5-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-6 left-12 animate-pulse" />
              <i className="devicon-css3-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-16 right-6 animate-pulse" />
              <i className="devicon-sass-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-28 left-1/2 transform -translate-x-1/2 animate-pulse" />
              <i className="devicon-javascript-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute bottom-6 left-1/4 animate-pulse" />
              <i className="devicon-typescript-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute bottom-12 right-10 animate-pulse" />
              <i className="devicon-react-original text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-4 right-1/4 animate-pulse" />
              <i className="devicon-nodejs-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-32 left-1/4 animate-pulse" />
              <i className="devicon-php-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute bottom-4 right-6 animate-pulse" />
              <i className="devicon-java-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-1/2 left-1/4 animate-pulse" />
              <i className="devicon-csharp-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute bottom-1/4 left-1/4 animate-pulse" />
              <i className="devicon-mongodb-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-1/4 right-20 animate-pulse" />
              <i className="devicon-mysql-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute bottom-10 right-1/4 animate-pulse" />
              <i className="devicon-git-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-1/4 left-1/4 animate-pulse" />
              <i className="devicon-github-original text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-1/2 right-10 animate-pulse" />
              <i className="devicon-docker-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute bottom-6 left-10 animate-pulse" />
              <i className="devicon-figma-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-3 left-3 animate-pulse" />
              <i className="devicon-tailwindcss-plain text-3xl sm:text-4xl md:text-5xl text-green-500 absolute top-36 right-1/4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
