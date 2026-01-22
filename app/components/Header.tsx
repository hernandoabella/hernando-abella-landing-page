"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "#home", label: "Index" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#my-work", label: "Work" },
    { href: "#books", label: "Books" },
    { href: "#contact", label: "Contact" },
  ];

  // GSAP: Magnetic Logo & Scroll Morph
  useGSAP(() => {
    // 1. Header Morph on Scroll
    gsap.to(headerRef.current, {
      paddingTop: "1rem",
      paddingBottom: "1rem",
      backgroundColor: "rgba(5, 5, 5, 0.8)",
      backdropFilter: "blur(16px)",
      borderBottomColor: "rgba(255, 255, 255, 0.05)",
      scrollTrigger: {
        trigger: "body",
        start: "top -20",
        end: "top -100",
        scrub: 0.5,
      },
    });

    // 2. Magnetic Effect for Logo
    const logo = logoRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = logo!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      gsap.to(logo, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(logo, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    };

    logo?.addEventListener("mousemove", handleMouseMove);
    logo?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      logo?.removeEventListener("mousemove", handleMouseMove);
      logo?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: headerRef });

  // Intersection Observer for Active State
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-[100] py-6 bg-transparent border-b border-transparent transition-colors duration-200"
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Magnetic Logo */}
        <div ref={logoRef} className="relative z-[110]">
          <h1 className="text-xl font-bold tracking-tighter text-white cursor-pointer select-none">
            HERNANDO<span className="text-green-500">ABELLA</span>
          </h1>
        </div>

        {/* Desktop Nav - Using Framer for Layout transitions (they play well together) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-500 rounded-full ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-green-500/20 border border-green-500/30 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="px-6 py-2.5 text-sm font-bold bg-green-500 text-black rounded-full hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-white bg-white/5 rounded-full border border-white/10"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 w-full h-screen bg-[#050505] flex flex-col justify-center px-12 md:hidden z-[105]"
          >
            <nav className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-5xl font-black tracking-tighter transition-all ${
                    activeSection === link.href.substring(1) ? "text-green-500" : "text-white/20 hover:text-white"
                  }`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {link.label}.
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;