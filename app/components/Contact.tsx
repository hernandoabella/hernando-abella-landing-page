"use client";

import React from "react";
import { FiMail, FiCalendar } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#161616] px-6 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Title */}
        <h2 className="mb-6 font-extrabold text-3xl sm:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500">
          Contact Me
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Feel free to reach out via email at{" "}
          <a
            href="mailto:hernandoabella@gmail.com"
            className="text-green-400 underline hover:text-green-200 transition duration-300"
          >
            hernandoabella@gmail.com
          </a>{" "}
          or schedule a meeting with me directly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Email Button */}
          <a
            href="mailto:hernandoabella@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:from-cyan-600 hover:to-blue-600 transition"
          >
            <FiMail className="text-xl" />
            <span>Send Email</span>
          </a>

          {/* Schedule Button */}
          <a
            href="https://calendly.com/hernandoabella/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-green-400 text-white font-semibold hover:bg-green-500/20 transition"
          >
            <FiCalendar className="text-xl" />
            <span>Schedule Meeting</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
