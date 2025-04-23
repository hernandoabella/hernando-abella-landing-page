"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRulerCombined, FaFileAlt, FaGlobe, FaPaintBrush, FaStore, FaTools } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "HTML Perfect Pixel Conversion",
      description:
        "Convert your design (Figma, PSD, etc.) into clean, responsive HTML with pixel-perfect precision.",
      icon: <FaRulerCombined className="text-4xl text-green-500 dark:text-blue-400" />,
      includes: [
        "Responsive design",
        "Cross-browser compatibility",
        "Clean semantic HTML/CSS",
        "W3C validated code",
      ],
      price: "Starting at $99",
    },
    {
      title: "Landing Page Creation",
      description:
        "Custom high-converting landing pages designed for speed, responsiveness, and clarity.",
      icon: <FaFileAlt className="text-4xl text-green-500 dark:text-purple-400" />,
      includes: [
        "Mobile-first layout",
        "Modern UI/UX design",
        "Fast loading time",
        "SEO optimized",
      ],
      price: "Starting at $149",
    },
    {
      title: "Website Development",
      description:
        "Full website builds using modern tech stacks, optimized for performance and SEO.",
      icon: <FaGlobe className="text-4xl text-green-500 dark:text-yellow-400" />,
      includes: [
        "Frontend + Backend setup",
        "Deployment support",
        "CMS integration (if needed)",
        "Performance tuning",
      ],
      price: "Starting at $499",
    },
    {
      title: "UI/UX Design Consulting",
      description:
        "Improve your product’s usability and aesthetics through expert UI/UX evaluation and design.",
      icon: <FaPaintBrush className="text-4xl text-green-500 dark:text-pink-400" />,
      includes: [
        "User research & persona mapping",
        "Wireframes & prototypes",
        "Design systems",
        "Accessibility recommendations",
      ],
      price: "Starting at $199",
    },
    {
      title: "E-commerce Store Setup",
      description:
        "Launch your online store with ease—custom-built, integrated, and optimized to convert.",
      icon: <FaStore className="text-4xl text-green-500 dark:text-orange-400" />,
      includes: [
        "Product setup & categories",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Basic SEO setup",
      ],
      price: "Starting at $399",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and performing at its best with our monthly care plans.",
      icon: <FaTools className="text-4xl text-green-500 dark:text-cyan-400" />,
      includes: [
        "Security updates",
        "Bug fixes & performance checks",
        "Monthly backups",
        "Email/Slack support",
      ],
      price: "Starting at $49/month",
    },
  ];

  return (
    <section id="services" className="flex flex-col justify-center items-center bg-[#131313] p-20 min-h-screen">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-5 font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 bg-transparent"
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
            className="flex flex-col items-center p-10 bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Service Title */}
            <h3 className="text-2xl font-semibold mb-3 text-center">{service.title}</h3>

            {/* Service Description */}
            <p className="text-gray-700 dark:text-gray-300 text-center mb-3">
              {service.description}
            </p>

            {/* What’s Included */}
            <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 text-left mb-4">
              {service.includes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Pricing */}
            <p className="text-green-600 dark:text-green-400 font-semibold text-sm mt-auto">
              {service.price}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
