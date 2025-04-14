"use client";

import React from "react";
import { FaCode, FaServer, FaShoppingCart, FaTools, FaCloud, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building modern, responsive, and high-performance web applications with Next.js and React.",
      icon: <FaCode className="text-4xl text-green-500 dark:text-blue-400" />,
    },
    {
      title: "Backend Development",
      description:
        "Creating secure, scalable APIs and backend systems with Node.js, Express, and databases.",
      icon: <FaServer className="text-4xl text-green-500 dark:text-purple-400" />,
    },
    {
      title: "Full-Stack Solutions",
      description:
        "End-to-end development, integrating frontend, backend, and databases for seamless functionality.",
      icon: <FaTools className="text-4xl text-green-500 dark:text-yellow-400" />,
    },
    {
      title: "E-commerce Development",
      description:
        "Building custom online stores with Stripe, PayPal, and seamless checkout experiences.",
      icon: <FaShoppingCart className="text-4xl text-green-500 dark:text-green-400" />,
    },
    {
      title: "DevOps & Deployment",
      description:
        "Optimizing CI/CD pipelines, cloud deployment, and server management for better performance.",
      icon: <FaCloud className="text-4xl text-green-500 dark:text-indigo-400" />,
    },
  ];

  return (
    <section id="services" className="flex flex-col justify-center items-center dark:bg-[#131313] py-16">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>

      {/* Services List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Service Title */}
            <h3 className="text-2xl font-semibold mb-3 text-center">{service.title}</h3>

            {/* Service Description */}
            <p className="text-gray-700 dark:text-gray-300 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;