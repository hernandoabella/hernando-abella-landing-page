"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiExternalLink, FiBookOpen, FiLayers, FiEye, FiArrowRight } from "react-icons/fi";
import { FaAmazon } from "react-icons/fa";
import gsap from "gsap";
import PreviewModal from "./PreviewModal"; // Import the master modal

type Book = { 
  title: string; 
  image: string; 
  link: string; 
  previewUrl?: string; // Added for the PDF viewer
};
type Categories = { [key: string]: Book[] };

const Books = () => {
    const categories: Categories = {
    "Best Seller": [
      {
        title: "300+ Python Algorithms",
        image: "/book-1.jpg",
        link: "https://www.amazon.com/300-Python-Algorithms-Mastering-Problem-Solving-ebook/dp/B0DJFS471K",
      },
      {
        title: "200+ Python Programs for Beginners",
        image: "/python-programs.jpg",
        link: "https://www.amazon.com/200-Python-Programs-Beginners/dp/B0CVLQTKHG",
      },
      {
        title: "Python Cheat Sheet",
        image: "/python-cheatsheet.jpg",
        link: "https://www.amazon.com/Python-Cheat-Sheet-Essentials-Mastering-ebook/dp/B0DK22TT6N",
      },
      {
        title: "clean code in python",
        image: "/cleancodeinpython.jpg",
        link: "https://www.amazon.com/Clean-Code-Python-Essentials-Mastering-ebook/dp/B0DTYXGQTW",
      },
    ],
    "Artificial Intelligence": [
      {
        title: "Agentic Artificial Intelligence",
        image: "/agentic-artificial-intelligence.png",
        link: "https://www.amazon.com/Agentic-Artificial-Intelligence-Beginners-Practical/dp/B0F9WH6J5P",
      },
      {
        title: "Building Smarter AI Systems with MPC Servers",
        image: "/building-smarter-ai-systems.jpg",
        link: "https://www.amazon.com/Building-Smarter-Systems-MCP-Servers-ebook/dp/B0FBRM8XJM",
      },
    ],
    "Algorithms & Data Structure": [
      {
        title: "300+ Python Algorithms",
        image: "/book-1.jpg",
        link: "https://www.amazon.com/300-Python-Algorithms-Mastering-Problem-Solving-ebook/dp/B0DJFS471K",
      },
      {
        title: "300+ Java Algorithms Vol 1",
        image: "/java-algorithms-1.png",
        link: "https://www.amazon.com/300-Java-Algorithms-Mastering-Problem-Solving/dp/B0GCD1DFM1",
      },
      {
        title: "300+ Java Algorithms Vol 2",
        image: "/java-algorithms-2.png",
        link: "https://www.amazon.com/300-Python-Algorithms-Mastering-Problem-Solving-ebook/dp/B0DJFS471K",
      },
      {
        title: "Data Structures and Algorithms in Python",
        image: "/dsa-in-python.jpg",
        link: "https://www.amazon.com/Data-Structures-Algorithms-Python-Activate/dp/B0CW65JBLW"
      },
    ],
    "Cheat Sheets": [
      {
        title: "The Ultimate AI Cheat Sheet",
        image: "/ai-cheatsheet.png",
        link: "https://www.amazon.com/Ultimate-Cheat-sheet-Entrepreneurs-Essentials/dp/B0F283MSGT",
      },
      {
        title: "Excel Cheat Sheet",
        image: "/excel-cheatsheet.png",
        link: "https://www.amazon.com/Excel-Cheat-Sheet-Essentials-Mastering/dp/B0F313PPY4/",
      },
      {
        title: "SQL Cheat Sheet",
        image: "/sql-cheatsheet.png",
        link: "https://www.amazon.com/SQL-CheatSheet-Handbook-Essentials-Mastering-ebook/dp/B0DJCY3TPX",
      },
      {
        title: "Python Cheat Sheet",
        image: "/python-cheatsheet.jpg",
        link: "https://www.amazon.com/Python-Cheat-Sheet-Essentials-Mastering-ebook/dp/B0DK22TT6N",
      },
      {
        title: "JavaScript Cheat Sheet",
        image: "/javascript-cheatsheet.png",
        link: "https://www.amazon.com/JavaScript-Cheat-Sheet-Essential-Essentials/dp/B0DKTH66HK",
      },
      {
        title: "Rust Cheat Sheet",
        image: "/rust-cheatsheet.png",
        link: "https://www.amazon.com/Rust-Cheat-Sheet-Essential-Patterns-ebook/dp/B0F5ZPJJ92",
      },
      {
        title: "Go Cheat Sheet",
        image: "/golang-cheatsheet.png",
        link: "https://www.amazon.com/Cheat-Sheet-Reference-Developers-Essentials-ebook/dp/B0DYF9BNQV",
      },
      {
        title: "Git Cheat Sheet",
        image: "/git-cheatsheet.png",
        link: "https://www.amazon.com/GIT-Cheat-Sheet-Essential-Essentials/dp/B0G2L91YKX",
      },
    ],
    "Program Collection": [
      {
        title: "200+ C Programs for Beginners",
        image: "/c-programs.jpg",
        link: "https://www.amazon.com/Programs-Beginners-Step-Step-Coding-ebook/dp/B0DNDB7K59",
      },
      {
        title: "200+ Python Programs for Beginners",
        image: "/python-programs.jpg",
        link: "https://www.amazon.com/200-Python-Programs-Beginners/dp/B0CVLQTKHG",
      },
      {
        title: "200+ JS Programs for Beginners",
        image: "/javascript-programs.jpg",
        link: "https://www.amazon.com/200-JavaScript-Programs-Beginners-Book-ebook/dp/B0CQ4FBQ8H",
      },
      {
        title: "200+ java Programs for Beginners",
        image: "/java-programs.jpg",
        link: "https://www.amazon.com/Java-Programs-Beginners-Hernando-Abella-ebook/dp/B0DM4HMBG8",
      },
      {
        title: "200+ rust Programs for Beginners",
        image: "/rust-programs.jpg",
        link: "https://www.amazon.com/200-Rust-Programs-Beginners-performance-ebook/dp/B0DHT9R764/",
      }
    ],
    "Killer One-Liners": [
      {
        title: "250+ Killer Python One-Liners",
        image: "/250-killer-python.jpg",
        link: "https://www.amazon.com/250-Killer-Python-One-Liners-solutions-ebook/dp/B0D442PCLX",
      },
      {
        title: "250+ Killer JavaScript One-Liners",
        image: "/250-killer-js.jpg",
        link: "https://www.amazon.com/250-JavaScript-Killer-One-Liners-Transform-ebook/dp/B0CN51HJQQ",
      },
      {
        title: "250+ Killer Ruby One-Liners",
        image: "/250-killer-ruby.jpg",
        link: "https://www.amazon.com/250-Killer-Ruby-One-Liners-Transform-ebook/dp/B0CXF57XT9",
      },
      {
        title: "250+ Killer TypeScript One-Liners",
        image: "/250-killer-ts.jpg",
        link: "https://www.amazon.com/250-Killer-TypeScript-One-Liners-Transform-ebook/dp/B0CYHZ5QKJ",
      },
      {
        title: "250+ Killer C-Sharp One-Liners",
        image: "/250-killer-csharp.jpg",
        link: "https://www.amazon.com/250-Killer-One-Liners-Transform-solutions-ebook/dp/B0D2ZM71J8",
      },
    ],
    "Pattern Programs": [
      {
        title: "150+ Python Pattern Programs",
        image: "/pattern-1.jpg",
        link: "https://www.amazon.com/150-Python-Pattern-Programs-creativity-ebook/dp/B0CVNG3PRV",
      },
      {
        title: "150+ JavaScript Pattern Programs",
        image: "/pattern-2.jpg",
        link: "https://www.amazon.com/150-JavaScript-Pattern-Programs-creativity-ebook/dp/B0CTYK7NFR/",
      },
      {
        title: "150+ C Pattern Programs",
        image: "/pattern-3.jpg",
        link: "https://www.amazon.com/150-Pattern-Programs-creativity-statements/dp/B0CTZW4Y9V",
      },
    ],
    "Design Patterns": [
      {
        title: "Advanced JavaScript Design Patterns",
        image: "/js-design-pattern.jpg",
        link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CW9LWMTB",
      },
    ],
    "50 Concepts": [
      {
        title: "50 Python Concepts Every Developer Should Know",
        image: "/50-concepts-python.jpg",
        link: "https://www.amazon.com/Python-Concepts-Every-Developer-Should-ebook",
      },
      {
        title: "50 JavaScript Concepts Every Developer Should Know",
        image: "/50-concepts-js.jpg",
        link: "https://www.amazon.com/JavaScript-Concepts-Every-Developer-Should-ebook/dp/B0CNC4WZT6",
      },
      {
        title: "50 Java Concepts Every Developer Should Know",
        image: "/50-concepts-java.jpg",
        link: "https://www.amazon.com/Java-Concepts-Every-Developer-Should-ebook/dp/B0CPPZ1BVM",
      },
      {
        title: "50 C-Sharp Concepts Every Developer Should Know",
        image: "/50-concepts-c-sharp.jpg",
        link: "https://www.amazon.com/Concepts-Every-Developer-Should-Know-ebook/dp/B0CVFXGJZ9",
      },
    ],
  };

  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryKeys[0]);
  const [activePreview, setActivePreview] = useState<{ url: string; title: string } | null>(null);
  
  const gridRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  // GSAP Entrance & Stagger
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".book-card-container");
      gsap.fromTo(cards, 
        { opacity: 0, y: 40, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.05, 
          ease: "power3.out",
          clearProps: "all" 
        }
      );
    }
  }, [selectedCategory]);

  return (
    <div className="bg-[#050505] min-h-screen text-white pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-32">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-green-500"></span>
              <span className="text-green-500 text-[10px] font-black uppercase tracking-[0.4em]">Knowledge Base</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              BOOK <span className="text-zinc-700 font-outline-2">CATALOG</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside ref={sidebarRef} className="lg:w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-2">
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest px-4 mb-4">Categories</p>
              {categoryKeys.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`group w-full flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-500 ${
                    selectedCategory === cat
                      ? "bg-green-500 text-black shadow-[0_10px_30px_rgba(34,197,94,0.2)]"
                      : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FiLayers className={selectedCategory === cat ? "text-black" : "text-green-500"} />
                    {cat}
                  </div>
                  <FiArrowRight className={`transition-transform duration-300 ${selectedCategory === cat ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} />
                </button>
              ))}
            </div>
          </aside>

          {/* Grid Content */}
          <main className="flex-1">
            <div 
              ref={gridRef}
              key={selectedCategory} 
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12"
            >
              {categories[selectedCategory].map((book, i) => (
                <div key={i} className="book-card-container group">
                  {/* Card Image Wrapper */}
                  <div className="relative aspect-[3/4.2] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-500 group-hover:border-green-500/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 blur-0 group-hover:blur-[2px]"
                    />
                    
                    {/* Hover Actions Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm flex flex-col items-center justify-center gap-4 p-6">
                      <button 
                        onClick={() => setActivePreview({ url: book.previewUrl || "/previews/default.pdf", title: book.title })}
                        className="w-full flex items-center justify-center gap-3 py-4 bg-white text-black rounded-2xl font-black text-[11px] tracking-widest hover:bg-green-500 transition-colors uppercase"
                      >
                        <FiEye size={18} /> Quick Preview
                      </button>
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 py-4 bg-zinc-800 text-white rounded-2xl font-black text-[11px] tracking-widest hover:bg-zinc-700 transition-colors uppercase"
                      >
                        <FaAmazon size={16} /> Get on Amazon
                      </a>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-6 px-2">
                    <h3 className="text-lg font-black leading-tight text-zinc-100 group-hover:text-green-400 transition-colors duration-300">
                      {book.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 text-zinc-600">
                        <FiBookOpen size={14} className="text-green-500/50" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Hardcopy & Digital</span>
                      </div>
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>

      {/* The Global Modal */}
      <PreviewModal 
        isOpen={!!activePreview}
        onClose={() => setActivePreview(null)}
        previewUrl={activePreview?.url || ""}
        bookTitle={activePreview?.title || ""}
      />
    </div>
  );
};

export default Books;