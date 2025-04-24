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
        <h2 className="mb-5 font-extrabold text-white text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 bg-transparent h-full">
          Ready to Take Your Projects to the Next Level?
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Let&apos;s work together to create something amazing. 
          
        </p>
        <div className="mt-6 flex gap-10 justify-center">
          <a href="mailto:hernandoabella@gmail.com" target="_blank">
            <div className="relative group">
              <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-3xl bg-green-950 px-8 py-2 text-gray-200"><span className="relative z-10">Contact Me</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-green-500  transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
            </div>
          </a>

          <a href="https://calendly.com/hernandoabella/30min">
            <div className="relative group">
              <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-3xl border-2 border-green-950 px-8 py-2 text-gray-200"><span className="relative z-10">Schedule a Meeting</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-green-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
