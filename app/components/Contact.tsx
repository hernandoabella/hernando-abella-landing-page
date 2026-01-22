"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiCalendar, FiHeart } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaPinterest, FaYoutube, FaWhatsapp } from "react-icons/fa6";

const ContactAndFooter = () => {
  const socialLinks = [
    { href: "https://twitter.com/hernandoabella", icon: <FaXTwitter />, name: "Twitter" },
    { href: "https://www.instagram.com/hernandoabella", icon: <FaInstagram />, name: "Instagram" },
    { href: "https://www.youtube.com/c/hernandoabella", icon: <FaYoutube />, name: "YouTube" },
    { href: "https://www.pinterest.com/hernandoabella", icon: <FaPinterest />, name: "Pinterest" },
    { href: "https://github.com/hernandoabella", icon: <FaGithub />, name: "GitHub" },
    { href: "https://www.linkedin.com/in/hernandoabella", icon: <FaLinkedin />, name: "LinkedIn" },
    { href: "https://wa.me/+573043932597", icon: <FaWhatsapp />, name: "WhatsApp" },
  ];

  return (
    <section id="contact" className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 pt-16 pb-8 bg-[#050505] min-h-screen text-white pb-32 selection:bg-green-500/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-4xl mx-auto text-center px-4 py-16 z-10 w-full"
      >
        {/* Title */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let&apos;s <span className="text-green-500">Work Together</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to bring your next project to life? Let&apos;s discuss how we can create something amazing together.
        </motion.p>

        {/* Contact Info */}
        <motion.div 
          className="mb-12 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-2">Reach out directly at</p>
          <a
            href="mailto:hernandoabella@gmail.com"
            className="text-xl text-green-400 font-medium hover:text-green-300 transition-colors duration-300"
          >
            hernandoabella@gmail.com
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Email Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:hernandoabella@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-green-500/20 transition-all duration-300 group"
          >
            <FiMail className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <span>Send Email</span>
          </motion.a>

          {/* Schedule Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://calendly.com/hernandoabella/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-transparent border-2 border-green-500/40 text-white font-semibold hover:bg-green-500/10 hover:border-green-500 transition-all duration-300 group"
          >
            <FiCalendar className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <span>Schedule Meeting</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center flex-wrap gap-5 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:bg-green-500/10"
              whileHover={{ y: -3 }}
              aria-label={social.name}
            >
              {React.cloneElement(social.icon, { 
                className: "w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors duration-300" 
              })}
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-green-400 font-medium bg-gray-900/90 px-2 py-1 rounded-md">
                {social.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        className="relative w-full max-w-4xl mx-auto py-8 z-10 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center">
            © {new Date().getFullYear()} Hernando Abella. 
          </p>
          <p className="text-gray-400 text-sm">
            All rights reserved
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default ContactAndFooter;