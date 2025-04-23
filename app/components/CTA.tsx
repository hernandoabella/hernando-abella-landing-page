"use client";

import React from "react";

const CTA = () => {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white py-16 px-6 text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/tech.mp4" type="video/mp4" /> {/* Replace with your video path */}
        Your browser does not support the video tag.
      </video>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#131313] bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="mb-5 font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 bg-transparent h-full">
          Ready to Take Your Projects to the Next Level?
        </h2>
        <p className="mb-8 text-lg">
          Let&apos;s work together to create something amazing. 
          
        </p>
        <div className="flex justify-center">
          <a href="#contact"
            className="bg-green-800 hover:bg-green-700 text-white py-3 px-6 rounded transition-all duration-300 mr-4"
          >
            Contact Me
          </a>
          <a
            href="https://calendly.com/hernandoabella/30min" target="_blank"
            className="border border-white hover:bg-white hover:text-green-600 py-3 px-6 rounded transition-all duration-300"
          >
            Schedule a meet
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
