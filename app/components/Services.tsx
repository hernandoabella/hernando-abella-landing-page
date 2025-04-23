"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRulerCombined, FaFileAlt, FaGlobe } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "HTML Perfect Pixel Conversion",
      description:
        "Convert your design (Figma, PSD, etc.) into clean, responsive HTML with pixel-perfect precision.",
      icon: <FaRulerCombined className="text-4xl text-green-500 dark:text-blue-400" />,
    },
    {
      title: "Landing Page Creation",
      description:
        "Custom high-converting landing pages designed for speed, responsiveness, and clarity.",
      icon: <FaFileAlt className="text-4xl text-green-500 dark:text-purple-400" />,
    },
    {
      title: "Website Development",
      description:
        "Full website builds using modern tech stacks, optimized for performance and SEO.",
      icon: <FaGlobe className="text-4xl text-green-500 dark:text-yellow-400" />,
    },
  ];

  return (
    <section id="services" className="flex flex-col justify-center items-center dark:bg-[#131313] py-16">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-5 font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 bg-transparent h-full"
      >
        Services
      </motion.h2>

      {/* Services List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Service Title */}
            <h3 className="text-2xl font-semibold mb-3 text-center">{service.title}</h3>

            {/* Service Description */}
            <p className="text-gray-700 dark:text-gray-300 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
