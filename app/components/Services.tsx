"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRulerCombined, FaFileAlt, FaGlobe, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Pixel-Perfect Conversion",
    description: "I transform your Figma, Adobe XD, or PSD designs into high-performance, responsive HTML/Tailwind code.",
    icon: <FaRulerCombined />,
    includes: ["Mobile-First Approach", "W3C Validated Markup", "SEO-Friendly Semantics", "Swift Loading Speeds"],
    price: "$199",
    popular: false,
  },
  {
    title: "Premium Landing Pages",
    description: "High-converting landing pages built to turn visitors into customers with modern aesthetics and speed.",
    icon: <FaFileAlt />,
    includes: ["Conversion-Optimized UI", "Form Integration", "Analytics Setup", "Scroll Animations"],
    price: "$349",
    popular: true,
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end web applications built with Next.js, featuring robust backends and seamless user journeys.",
    icon: <FaGlobe />,
    includes: ["Database Architecture", "Auth & Security", "CMS Connectivity", "Deployment Pipeline"],
    price: "$899",
    popular: false,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 overflow-hidden bg-[#050505]"
    >
      {/* Background Orbs & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-green-500 font-mono text-sm tracking-widest uppercase mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Delivering high-performance digital products tailored to your specific business needs.
          </p>
        </motion.div>

        {/* Pricing/Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative group h-full`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] tracking-widest font-black px-4 py-1.5 rounded-full z-20 shadow-xl shadow-green-500/20">
                  RECOMMENDED
                </div>
              )}

              <div className={`flex flex-col h-full p-8 rounded-3xl border transition-all duration-500 backdrop-blur-sm
                ${service.popular 
                  ? 'bg-white/[0.03] border-green-500/40 shadow-[0_0_40px_-15px_rgba(34,197,94,0.2)]' 
                  : 'bg-white/[0.02] border-white/10 hover:border-green-500/20'
                }`}
              >
                {/* Icon Wrapper */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 
                  ${service.popular ? 'bg-green-500 text-black' : 'bg-white/5 text-green-500'}`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-10 flex-grow">
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500/70 text-sm flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Price Display */}
                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-gray-500 text-sm font-medium">Starts at</span>
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                  </div>

                  <motion.button 
                    whileTap={{ scale: 0.98 }}
                    className={`w-full group/btn flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300
                    ${service.popular 
                      ? 'bg-green-500 text-black hover:bg-green-400 shadow-lg shadow-green-500/20' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    Select Plan
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Project Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 p-1 pr-4 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
            <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter uppercase">Custom</span>
            Need a specific solution? <a href="#contact" className="text-white hover:text-green-400 font-medium underline underline-offset-4 decoration-green-500/30 transition-colors">Contact me directly</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;