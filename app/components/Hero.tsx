"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      {/* 🔥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/tech.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔥 Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center text-white">
        {/* Profile Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        {/* Name and Text */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Hi👋, I&apos;m Hernando!
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
          Full-Stack Developer
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-5 flex-wrap justify-center">
          <a href="https://portfolio-hernandoabella.vercel.app/" target="_blank">
            <div className="relative group">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  Portfolio
                </span>
              </button>
            </div>
          </a>

          <a href="#contact">
            <div className="relative group">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  Hire Me
                </span>
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;