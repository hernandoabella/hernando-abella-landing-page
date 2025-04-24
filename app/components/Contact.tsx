"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-[#161616] p-20" id="contact">
      <div className="container text-center">
        <h2 className="mb-5 font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 bg-transparent h-full">
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

      <hr  className="mt-10 w-1/2 m-auto"/>
    </section>
  );
};

export default ContactSection;
