"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
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
      {/* Animated Background Circles */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      >
        <svg
          className="absolute w-[700px] h-[700px] opacity-10"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="600" stroke="#7dd3fc" strokeWidth="1" />
          <circle cx="300" cy="300" r="400" stroke="#7dd3fc" strokeWidth="1" />
          <circle cx="300" cy="300" r="340" stroke="#7dd3fc" strokeWidth="1" />
          <circle cx="300" cy="300" r="280" stroke="#7dd3fc" strokeWidth="1" />
          <circle cx="300" cy="300" r="240" stroke="#60a5fa" strokeWidth="1" />
          <circle cx="300" cy="300" r="200" stroke="#38bdf8" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center text-white max-w-3xl mx-auto">
        {/* Profile Image with Glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 blur-2xl opacity-60 animate-pulse"></div>
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-sky-400 shadow-2xl relative z-10"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Hi 👋, I&apos;m Hernando!
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-sky-400 h-10 mb-6"
        >
          <Typewriter
            options={{
              strings: ["Full-Stack Developer", "Web Enthusiast", "Tech Lover"],
              autoStart: true,
              loop: true,
              delay: 70,
            }}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex flex-wrap gap-6 justify-center"
        >
          <a
            href="https://portfolio-hernandoabella.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative group flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-3 text-white shadow-lg transition hover:from-sky-600 hover:to-cyan-600">
              <FaBriefcase className="text-white" />
              <span className="relative z-10">Portfolio</span>
              <span className="absolute left-0 top-0 h-full w-full scale-0 rounded-full bg-white opacity-10 transition-transform duration-500 group-hover:scale-150"></span>
            </button>
          </a>

          <a href="#contact">
            <button className="relative group flex items-center gap-2 overflow-hidden rounded-full border-2 border-sky-400 px-8 py-3 text-white shadow-lg transition hover:bg-sky-500 hover:border-sky-500">
              <FaEnvelopeOpenText className="text-white" />
              <span className="relative z-10">Contact Me</span>
              <span className="absolute left-0 top-0 h-full w-full scale-0 rounded-full bg-white opacity-10 transition-transform duration-500 group-hover:scale-150"></span>
            </button>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex justify-center flex-wrap gap-6 text-gray-400"
        >
          {[
            { href: "https://twitter.com/hernandoabella", icon: <FaXTwitter /> },
            { href: "https://www.instagram.com/hernandoabella", icon: <FaInstagram /> },
            { href: "https://www.youtube.com/c/hernandoabella", icon: <FaYoutube /> },
            { href: "https://www.pinterest.com/hernandoabella", icon: <FaPinterest /> },
            { href: "https://github.com/hernandoabella", icon: <FaGithub /> },
            { href: "https://www.linkedin.com/in/hernandoabella", icon: <FaLinkedin /> },
            { href: "https://wa.me/+573043932597", icon: <FaWhatsapp /> },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition transform hover:scale-125 duration-200"
            >
              {React.cloneElement(social.icon, { className: "w-6 h-6" })}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
