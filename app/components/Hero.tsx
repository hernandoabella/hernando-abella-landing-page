"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaPinterest,
  FaYoutube,
  FaWhatsapp,
  FaBriefcase,
  FaEnvelopeOpenText,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#2c5364]"
    >
      
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="absolute w-[700px] h-[700px] opacity-10" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="600" stroke="#7dd3fc" strokeWidth="1" />
          <circle cx="300" cy="300" r="400" stroke="#7dd3fc" strokeWidth="1" />
          <circle cx="300" cy="300" r="340" stroke="#7dd3fc" strokeWidth="1" />
          <circle cx="300" cy="300" r="280" stroke="#7dd3fc" strokeWidth="1" />
          <circle cx="300" cy="300" r="240" stroke="#60a5fa" strokeWidth="1" />
          <circle cx="300" cy="300" r="200" stroke="#38bdf8" strokeWidth="1" />
        </svg>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center text-white max-w-3xl mx-auto">
        {/* Profile Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-sky-400 shadow-2xl"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi 👋, I'm Hernando!
        </h1>

        {/* Typewriter */}
        <div className="text-xl md:text-2xl lg:text-3xl text-sky-400 h-10 mb-6">
          <Typewriter
            options={{
              strings: ["Full-Stack Developer", "Web Enthusiast", "Tech Lover"],
              autoStart: true,
              loop: true,
              delay: 70,
            }}
          />
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap gap-6 justify-center">
          <a href="https://portfolio-hernandoabella.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="relative group flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-3 text-white shadow-lg transition hover:from-sky-600 hover:to-cyan-600">
              <FaBriefcase className="text-white" />
              <span className="relative z-10">Hire Me</span>
              <span className="absolute left-0 top-0 h-full w-full scale-0 rounded-full bg-white opacity-10 transition-transform duration-500 group-hover:scale-150"></span>
            </button>
          </a>

          <a href="#contact">
            <button className="relative group flex items-center gap-2 overflow-hidden rounded-full border-2 border-sky-400 px-8 py-3 text-white shadow-lg transition hover:bg-sky-500 hover:border-sky-500">
              <FaEnvelopeOpenText className="text-white" />
              <span className="relative z-10">Portfolio</span>
              <span className="absolute left-0 top-0 h-full w-full scale-0 rounded-full bg-white opacity-10 transition-transform duration-500 group-hover:scale-150"></span>
            </button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center flex-wrap gap-6 text-gray-400">
          <a href="https://twitter.com/hernandoabella" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/hernandoabella" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/c/hernandoabella" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaYoutube className="w-6 h-6" />
          </a>
          <a href="https://www.pinterest.com/hernandoabella" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaPinterest className="w-6 h-6" />
          </a>
          <a href="https://github.com/hernandoabella" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/hernandoabella" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://wa.me/+573043932597" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
