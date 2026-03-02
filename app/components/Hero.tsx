"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaInstagram, FaXTwitter,
  FaPinterest, FaYoutube, FaWhatsapp, FaBriefcase,
  FaEnvelopeOpenText,
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  { href: "https://twitter.com/hernandoabella", icon: <FaXTwitter />, name: "Twitter" },
  { href: "https://github.com/hernandoabella", icon: <FaGithub />, name: "GitHub" },
  { href: "https://www.linkedin.com/in/hernandoabella", icon: <FaLinkedin />, name: "LinkedIn" },
  { href: "https://www.youtube.com/c/hernandoabella", icon: <FaYoutube />, name: "YouTube" },
  { href: "https://wa.me/+573043932597", icon: <FaWhatsapp />, name: "WhatsApp" },
  { href: "https://www.instagram.com/hernandoabella", icon: <FaInstagram />, name: "Instagram" },
  { href: "https://www.pinterest.com/hernandoabella", icon: <FaPinterest />, name: "Pinterest" },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Enhanced Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        {/* Profile Image with Pulsing Aura */}
        <motion.div variants={item} className="relative mb-10">
          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-green-500/50 p-1 bg-[#121212]">
            <Image
              src="/profile.jpg"
              alt="Hernando Abella"
              fill
              priority
              className="object-cover rounded-full hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Name with Gradient Text */}
        <motion.h1 
          variants={item}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white"
        >
          Hi, I&apos;m <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Hernando</span> 👋
        </motion.h1>

        {/* Typewriter Refined */}
        <motion.div variants={item} className="text-xl md:text-2xl text-green-400 font-medium h-8 mb-8">
          <Typewriter
            options={{
              strings: ["Full-Stack Developer", "Web Architect", "UI/UX Enthusiast"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </motion.div>

        <motion.p variants={item} className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
          I design and build high-performance web applications using modern stacks. 
          Focusing on scalable code and exceptional user experiences.
        </motion.p>

        {/* Main CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-5 justify-center mb-16">
          <a
            href="https://portfolio-hernandoabella.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-green-500 px-8 py-4 text-black font-bold shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all active:scale-95"
          >
            <FaBriefcase />
            View My Work
          </a>

          <a 
            href="mailto:hernandoabella@gmail.com" 
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all active:scale-95"
          >
            <FaEnvelopeOpenText className="text-green-500" />
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons - Glassmorphism style */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-colors group relative"
              aria-label={social.name}
            >
              <span className="text-xl">{social.icon}</span>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {social.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Mouse Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-green-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;