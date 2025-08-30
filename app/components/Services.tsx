"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRulerCombined, FaFileAlt, FaGlobe, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "HTML Perfect Pixel Conversion",
    description:
      "Convert your design (Figma, PSD, etc.) into clean, responsive HTML with pixel-perfect precision.",
    icon: <FaRulerCombined className="text-3xl" />,
    includes: [
      "Responsive design",
      "Cross-browser compatibility",
      "Clean semantic HTML/CSS",
      "W3C validated code",
    ],
    price: "Starting at $199",
    popular: false,
  },
  {
    title: "Landing Page Creation",
    description:
      "Custom high-converting landing pages designed for speed, responsiveness, and clarity.",
    icon: <FaFileAlt className="text-3xl" />,
    includes: [
      "Mobile-first layout",
      "Modern UI/UX design",
      "Fast loading time",
      "SEO optimized",
    ],
    price: "Starting at $349",
    popular: true,
  },
  {
    title: "Website Development",
    description:
      "Full website builds using modern tech stacks, optimized for performance and SEO.",
    icon: <FaGlobe className="text-3xl" />,
    includes: [
      "Frontend + Backend setup",
      "Deployment support",
      "CMS integration (if needed)",
      "Performance tuning",
    ],
    price: "Starting at $899",
    popular: false,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-green-500">Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional web development services to bring your digital vision to life
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col h-full group ${service.popular ? 'lg:scale-110 lg:z-10' : ''}`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-4 py-1 rounded-full z-10">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`flex flex-col h-full p-6 rounded-2xl backdrop-blur-md border transition-all duration-500
                ${service.popular 
                  ? 'bg-gradient-to-b from-green-500/10 to-green-600/5 border-green-500/30 shadow-lg shadow-green-500/10' 
                  : 'bg-white/5 border-white/10 hover:border-green-500/30'
                }`}
              >
                {/* Icon */}
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: service.popular 
                      ? 'linear-gradient(135deg, rgba(72, 187, 120, 0.2) 0%, rgba(56, 161, 105, 0.2) 100%)' 
                      : 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div className={service.popular ? "text-green-400" : "text-green-500"}>
                    {service.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className={`text-xl font-semibold mb-3 ${service.popular ? "text-white" : "text-white"}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="mt-auto">
                  <div className={`text-lg font-bold mb-4 ${service.popular ? "text-green-400" : "text-green-500"}`}>
                    {service.price}
                  </div>
                  <button className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 group-hover:gap-3
                    ${service.popular 
                      ? 'bg-green-500 text-white hover:bg-green-600' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    Get Started
                    <FaArrowRight className="text-sm transition-all duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-400 text-sm"
        >
          <p>Need something custom? <a href="#contact" className="text-green-500 hover:underline">Let's discuss your project</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;