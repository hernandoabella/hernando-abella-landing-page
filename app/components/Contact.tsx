"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section className="py-32 bg-[#141414]" id="contact">
      <div className="container text-center">
        <h2 className="font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-b from-slate-500 via-slate-100 to-slate-500 bg-transparent h-full mb-6">
          Contact Me
        </h2>
        <p className="text-lg text-gray-300">
          Feel free to reach out to me via email at{" "}
          <a
            href="mailto:hernandoabella@gmail.com"
            className="text-green-400 underline hover:text-green-200"
          >
            hernandoabella@gmail.com
          </a>
        </p>
        
      </div>
    </section>
  );
};

export default ContactSection;
