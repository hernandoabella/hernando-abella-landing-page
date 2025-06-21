"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaRulerCombined,
  FaFileAlt,
  FaGlobe,
  FaPaintBrush,
  FaStore,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "HTML Perfect Pixel Conversion",
    description:
      "Convert your design (Figma, PSD, etc.) into clean, responsive HTML with pixel-perfect precision.",
    icon: <FaRulerCombined className="text-4xl text-cyan-400" />,
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
    icon: <FaFileAlt className="text-4xl text-cyan-400" />,
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
    icon: <FaGlobe className="text-4xl text-cyan-400" />,
    includes: [
      "Frontend + Backend setup",
      "Deployment support",
      "CMS integration (if needed)",
      "Performance tuning",
    ],
    price: "Starting at $499",
  },
  {
    title: "Backend Development",
    description:
      "Build secure and scalable backend systems using Node.js, Express, Laravel, or Django.",
    icon: <FaTools className="text-4xl text-cyan-400" />,
    includes: [
      "REST or GraphQL APIs",
      "Database integration",
      "Authentication & Authorization",
      "Error handling & logging",
    ],
    price: "Starting at $599",
  },
  {
    title: "API Integration",
    description:
      "Integrate 3rd-party APIs like Stripe, PayPal, Mailchimp, Firebase, and more with your app.",
    icon: <FaGlobe className="text-4xl text-cyan-400" />,
    includes: [
      "Payment gateways",
      "Email services",
      "Auth & OAuth 2.0",
      "Realtime APIs & Webhooks",
    ],
    price: "Starting at $299",
  },
  {
    title: "Cloud Deployment & CI/CD",
    description:
      "Deploy your apps on cloud platforms with continuous integration & delivery for efficiency.",
    icon: <FaStore className="text-4xl text-cyan-400" />,
    includes: [
      "Vercel, Netlify, Render, or AWS",
      "Docker & GitHub Actions",
      "Production setup & domain config",
      "Auto-deploy pipelines",
    ],
    price: "Starting at $399",
  },
  {
    title: "Database Design & Optimization",
    description:
      "Plan and optimize your database architecture for scalability and performance.",
    icon: <FaRulerCombined className="text-4xl text-cyan-400" />,
    includes: [
      "Schema design (SQL/NoSQL)",
      "Indexing & query optimization",
      "Data migration",
      "ER diagram delivery",
    ],
    price: "Starting at $249",
  },
  {
    title: "Security & Auth Systems",
    description:
      "Secure your web apps with modern auth systems, roles, permissions & token strategies.",
    icon: <FaPaintBrush className="text-4xl text-cyan-400" />,
    includes: [
      "JWT / OAuth / 2FA",
      "Role-based access",
      "Rate limiting",
      "Security best practices",
    ],
    price: "Starting at $349",
  },
  {
    title: "Maintenance & Support",
    description:
      "Keep your website secure, updated, and performing at its best with our monthly care plans.",
    icon: <FaTools className="text-4xl text-cyan-400" />,
    includes: [
      "Security updates",
      "Bug fixes & performance checks",
      "Monthly backups",
      "Email/Slack support",
    ],
    price: "Starting at $49/month",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden flex items-center justify-center"
    >
      {/* Background Mesh */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="mesh" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#1e293b" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh)" />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-center font-extrabold text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-sky-400 to-sky-600"
        >
          Available Services
        </motion.h2>

        {/* Optional Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-slate-300 text-lg max-w-2xl"
        >
          Everything you need to build, launch, and maintain stunning web experiences.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 p-6 sm:p-8"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-300">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4">{service.description}</p>
              <ul className="text-sm text-slate-400 list-disc list-inside mb-4 space-y-1 text-left mx-auto max-w-xs">
                {service.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-cyan-400 font-semibold text-sm mt-auto">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
