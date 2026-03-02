"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Index" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#my-work", label: "Work" },
  { href: "#books", label: "Books" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((s) => observer.observe(s));
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-black/90 backdrop-blur-md border-b border-white/10" 
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        
        {/* Logo */}
        <div className="relative z-[110]">
          <a href="#home" className="text-xl font-bold tracking-tighter text-white select-none hover:opacity-80 transition-opacity">
            HERNANDO<span className="text-green-500">ABELLA</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive 
                    ? "bg-green-500/20 text-white shadow-[0_0_15px_rgba(34,197,94,0.2)]" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-6 py-2.5 text-sm font-bold bg-green-500 text-black rounded-full hover:bg-green-400 transition-all active:scale-95"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-white bg-white/5 rounded-full border border-white/10 relative z-[110]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay (React + Tailwind) */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-black transition-transform duration-500 ease-in-out md:hidden z-[105] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black tracking-tighter transition-colors ${
                activeSection === link.href.substring(1) ? "text-green-500" : "text-white/40 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;