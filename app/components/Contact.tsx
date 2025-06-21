"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section
      className="bang bg-[#161616] px-6 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="mb-6 font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500">
          Contact Me
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Feel free to reach out to me via email at{" "}
          <a
            href="mailto:hernandoabella@gmail.com"
            className="text-green-400 underline hover:text-green-200 transition duration-300"
          >
            hernandoabella@gmail.com
          </a>
        </p>
      </div>

      
    </section>
  );
};

export default ContactSection;