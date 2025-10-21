"use client";

import React from "react";
import { FiMail, FiCalendar } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="relative flex items-center justify-center text-white py-24 px-6 text-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0d1b1e] to-[#112a33]">
      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="mb-6 font-extrabold text-3xl sm:text-4xl xl:text-5xl leading-tight">
          Ready to <span className="text-green-400">Take Your Projects</span>  
          <br /> to the Next Level?
        </h2>

        {/* Description */}
        <p className="mb-10 text-lg text-gray-300 max-w-xl mx-auto">
          Let&apos;s collaborate to build something powerful, elegant, and unforgettable.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-6 justify-center flex-wrap">
          {/* Primary Button */}
          <a
            href="mailto:hernandoabella@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 shadow-lg shadow-green-500/25 overflow-hidden transition-all duration-500 hover:shadow-green-400/40 hover:scale-[1.03]"
          >
            <FiMail className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </a>

          {/* Secondary Button */}
          <a
            href="https://calendly.com/hernandoabella/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white border-2 border-green-500/50 hover:border-green-400 transition-all duration-500 hover:bg-green-500/10 backdrop-blur-sm"
          >
            <FiCalendar className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <span>Schedule a Meeting</span>
            <span className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </a>
        </div>

        {/* Subtle underline glow */}
        <div className="mt-14 mx-auto w-40 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm opacity-70"></div>
      </div>
    </section>
  );
};

export default CTA;
