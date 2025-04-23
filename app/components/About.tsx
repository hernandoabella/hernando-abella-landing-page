"use client";

import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-gradient-to-r from-[#0d0d0d] to-[#1d1d1d] dark:bg-[#131313] text-gray-900 dark:text-gray-100 min-h-screen px-4"
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
            <div className="absolute inset-10 flex items-center justify-center bg-gradient-to-t from-green-700 via-green-800 to-green-900">
              {/* Icons Container */}
              <div className="grid grid-cols-4 gap-10 justify-items-center items-center">
                <i className="devicon-figma-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-html5-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-css3-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-bootstrap-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-tailwindcss-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-javascript-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-typescript-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-react-original text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-vuejs-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-nodejs-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-php-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-mongodb-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-mysql-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-git-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-github-original text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-docker-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-postgresql-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                
                <i className="devicon-express-original text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-graphql-plain text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
                <i className="devicon-nextjs-original text-5xl sm:text-6xl text-green-500 hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-125" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
