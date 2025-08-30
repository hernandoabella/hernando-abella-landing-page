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
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-green-500/30 group"
        >
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            fill
            className="object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
        >
          Hi <span className="text-green-500">👋</span>, I&apos;m Hernando!
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-green-400 h-10 mb-8 font-medium"
        >
          <Typewriter
            options={{
              strings: ["Full-Stack Developer", "Web Enthusiast", "Tech Lover", "Problem Solver"],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 text-lg max-w-2xl mb-10 leading-relaxed"
        >
          I create beautiful, functional web experiences with modern technologies. 
          Passionate about clean code and innovative solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://portfolio-hernandoabella.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3.5 text-white font-medium shadow-lg transition-all duration-300 hover:shadow-green-500/20 hover:gap-4 hover:scale-105">
              <FaBriefcase className="text-white text-lg" />
              <span>View Portfolio</span>
            </button>
          </a>

          <a href="#contact" className="group">
            <button className="flex items-center gap-3 rounded-full bg-transparent border-2 border-green-500/40 px-6 py-3.5 text-white font-medium shadow-lg transition-all duration-300 hover:bg-green-500/10 hover:border-green-500 hover:gap-4 hover:scale-105">
              <FaEnvelopeOpenText className="text-white text-lg" />
              <span>Contact Me</span>
            </button>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center flex-wrap gap-5"
        >
          {[
            { href: "https://twitter.com/hernandoabella", icon: <FaXTwitter />, name: "Twitter" },
            { href: "https://www.instagram.com/hernandoabella", icon: <FaInstagram />, name: "Instagram" },
            { href: "https://www.youtube.com/c/hernandoabella", icon: <FaYoutube />, name: "YouTube" },
            { href: "https://www.pinterest.com/hernandoabella", icon: <FaPinterest />, name: "Pinterest" },
            { href: "https://github.com/hernandoabella", icon: <FaGithub />, name: "GitHub" },
            { href: "https://www.linkedin.com/in/hernandoabella", icon: <FaLinkedin />, name: "LinkedIn" },
            { href: "https://wa.me/+573043932597", icon: <FaWhatsapp />, name: "WhatsApp" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:bg-green-500/10"
              whileHover={{ y: -3 }}
              aria-label={social.name}
            >
              {React.cloneElement(social.icon, { 
                className: "w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors duration-300" 
              })}
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-green-400 font-medium bg-gray-900/90 px-2 py-1 rounded-md">
                {social.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-400 mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-green-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;