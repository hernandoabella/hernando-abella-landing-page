"use client";

import React from "react";
import { FiMail, FiCalendar } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="bang relative h-[500px] flex items-center justify-center text-white py-16 px-6 text-center overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#131313] bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="mb-5 font-extrabold text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 text-transparent">
          Ready to Take Your Projects to the Next Level?
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Let&apos;s work together to create something amazing.
        </p>

        <div className="mt-6 flex gap-6 justify-center flex-wrap">
          {/* Primary Button */}
          <a href="mailto:hernandoabella@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="relative group">
              <button className="group relative h-12 overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-2 text-white font-semibold shadow-md transition-all duration-300 flex items-center gap-3">
                <FiMail className="text-xl" />
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white/20 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
            </div>
          </a>

          {/* Secondary Button */}
          <a href="https://calendly.com/hernandoabella/30min" target="_blank" rel="noopener noreferrer">
            <div className="relative group">
              <button className="group relative h-12 overflow-hidden rounded-3xl border-2 border-violet-500 px-8 py-2 text-white font-semibold shadow-md transition-all duration-300 hover:bg-violet-600/10 flex items-center gap-3">
                <FiCalendar className="text-xl group-hover:text-violet-400 transition-colors duration-300" />
                <span className="relative z-10 group-hover:text-violet-400 transition-colors duration-300">Schedule a Meeting</span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-violet-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default CTA;
