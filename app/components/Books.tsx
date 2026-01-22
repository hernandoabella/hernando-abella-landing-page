"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { FiBookOpen, FiLayers, FiEye, FiArrowRight, FiSearch } from "react-icons/fi";
import { FaAmazon } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PreviewModal from "./PreviewModal";

gsap.registerPlugin(ScrollTrigger);

// --- TIPOS ---
type Book = {
  title: string;
  image: string;
  link: string;
  previewUrl?: string;
};

const CATEGORIES_DATA: Record<string, Book[]> = {
  "Best Seller": [
    {
      title: "300+ Python Algorithms",
      image: "/book-1.jpg",
      link: "https://www.amazon.com/300-Python-Algorithms-Mastering-Problem-Solving-ebook/dp/B0DJFS471K",
      previewUrl: "/previews/python-algorithms-preview.pdf",
    },
    {
      title: "200+ Python Programs for Beginners",
      image: "/python-programs.jpg",
      link: "https://www.amazon.com/200-Python-Programs-Beginners/dp/B0CVLQTKHG",
      previewUrl: "/previews/python-programs-preview.pdf",
    },
    {
      title: "Python Cheat Sheet",
      image: "/python-cheatsheet.jpg",
      link: "https://www.amazon.com/Python-Cheat-Sheet-Essentials-Mastering-ebook/dp/B0DK22TT6N",
      previewUrl: "/previews/python-cheatsheet-preview.pdf",
    },

  ],
  "Artificial Intelligence": [
    {
      title: "Agentic Artificial Intelligence",
      image: "/agentic-artificial-intelligence.png",
      link: "https://www.amazon.com/Agentic-Artificial-Intelligence-Beginners-Practical/dp/B0F9WH6J5P",
      previewUrl: "/previews/agentic-ai-preview.pdf",
    },
    {
      title: "Building Smarter AI Systems with MPC Servers",
      image: "/building-smarter-ai-systems.jpg",
      link: "https://www.amazon.com/Building-Smarter-Systems-MCP-Servers-ebook/dp/B0FBRM8XJM",
      previewUrl: "/previews/mcp-servers-preview.pdf",
    },
  ],
  "Data Science": [
    {
      title: "Python Data Analytics and Visualization for Beginners",
      image: "/data-analytics.jpg",
      link: "https://www.amazon.com/Python-Analytics-Visualization-Beginners-Hands-ebook/dp/B0F7DP6H7Y",
      previewUrl: "/previews/python-data-visualization-preview.pdf",
    },

  ],
  "Algorithms & Data Structure": [
    {
      title: "300+ Python Algorithms",
      image: "/book-1.jpg",
      link: "https://www.amazon.com/300-Python-Algorithms-Mastering-Problem-Solving-ebook/dp/B0DJFS471K",
      previewUrl: "/previews/python-algorithms-preview.pdf",
    },
    {
      title: "300+ Java Algorithms Vol 1",
      image: "/java-algorithms-vol1.png",
      link: "https://www.amazon.com/300-Java-Algorithms-Mastering-Problem-Solving/dp/B0GCD1DFM1",
      previewUrl: "/previews/java-algorithms-vol1-preview.pdf",
    },
    {
      title: "300+ Java Algorithms Vol 2",
      image: "/java-algorithms-vol2.png",
      link: "https://www.amazon.com/300-Python-Algorithms-Mastering-Problem-Solving-ebook/dp/B0DJFS471K",
      previewUrl: "/previews/java-algorithms-vol2-preview.pdf",
    },
    {
      title: "Data Structures and Algorithms in Python",
      image: "/dsa-in-python.png",
      link: "https://www.amazon.com/Data-Structures-Algorithms-Python-Activate/dp/B0CW65JBLW",
      previewUrl: "/previews/data-structures-and-algorithms-preview.pdf",
    },
  ],
  "Software Architecture": [
    {
      title: "System Design Interview",
      image: "/system-design.jpg",
      link: "https://www.amazon.com/System-Design-Interview-Software-Architect-ebook/dp/B0FRZY6PPW",
      previewUrl: "/previews/system-design-interview-preview.pdf",
    },
  ],
  "Cook Books": [
    {
      title: "SQL COOKBOOK",
      image: "/sql-cookbook.jpg",
      link: "https://www.amazon.com/SQL-Cookbook-Everyone-delicious-recipes-ebook/dp/B0CWTF149J",
      previewUrl: "/previews/sql-cookbook-preview.pdf",
    },
    {
      title: "PYTHON COOKBOOK",
      image: "/python-cookbook.jpg",
      link: "https://www.amazon.com/Python-Cookbook-Everyone-delicious-recipes-ebook/dp/B0D4L6V11S",
      previewUrl: "/previews/python-cookbook-preview.pdf",
    },
    {
      title: "JAVASCRIPT COOKBOOK",
      image: "/js-cookbook.jpg",
      link: "https://www.amazon.com/JavaScript-Cookbook-Delicious-Everyone-Javascript-ebook/dp/B0DJ4PP4V2",
      previewUrl: "/previews/javascript-cookbook-preview.pdf",
    },
  ],
  "Cheat Sheets": [
    {
      title: "The Ultimate AI Cheat Sheet",
      image: "/ai-cheatsheet.png",
      link: "https://www.amazon.com/Ultimate-Cheat-sheet-Entrepreneurs-Essentials/dp/B0F283MSGT",
      previewUrl: "/previews/ai-cheatsheet-preview.pdf",
    },
    {
      title: "Excel Cheat Sheet",
      image: "/excel-cheatsheet.png",
      link: "https://www.amazon.com/Excel-Cheat-Sheet-Essentials-Mastering/dp/B0F313PPY4/",
      previewUrl: "/previews/excel-cheatsheet-preview.pdf",
    },
    {
      title: "SQL Cheat Sheet",
      image: "/sql-cheatsheet.png",
      link: "https://www.amazon.com/SQL-CheatSheet-Handbook-Essentials-Mastering-ebook/dp/B0DJCY3TPX",
      previewUrl: "/previews/sql-cheatsheet-preview.pdf",
    },
    {
      title: "Python Cheat Sheet",
      image: "/python-cheatsheet.jpg",
      link: "https://www.amazon.com/Python-Cheat-Sheet-Essentials-Mastering-ebook/dp/B0DK22TT6N",
      previewUrl: "/previews/python-cheatsheet-preview.pdf",
    },
    {
      title: "JavaScript Cheat Sheet",
      image: "/javascript-cheatsheet.png",
      link: "https://www.amazon.com/JavaScript-Cheat-Sheet-Essential-Essentials/dp/B0DKTH66HK",
      previewUrl: "/previews/js-cheatsheet-preview.pdf",
    },
    {
      title: "Rust Cheat Sheet",
      image: "/rust-cheatsheet.png",
      link: "https://www.amazon.com/Rust-Cheat-Sheet-Essential-Patterns-ebook/dp/B0F5ZPJJ92",
      previewUrl: "/previews/rust-cheatsheet-preview.pdf",
    },
    {
      title: "Go Cheat Sheet",
      image: "/golang-cheatsheet.png",
      link: "https://www.amazon.com/Cheat-Sheet-Reference-Developers-Essentials-ebook/dp/B0DYF9BNQV",
      previewUrl: "/previews/go-cheatsheet-preview.pdf",
    },
    {
      title: "Git Cheat Sheet",
      image: "/git-cheatsheet.png",
      link: "https://www.amazon.com/GIT-Cheat-Sheet-Essential-Essentials/dp/B0G2L91YKX",
      previewUrl: "/previews/git-cheatsheet-preview.pdf",
    },
  ],
  "Program Collection": [
    {
      title: "200+ C Programs for Beginners",
      image: "/c-programs.jpg",
      link: "https://www.amazon.com/Programs-Beginners-Step-Step-Coding-ebook/dp/B0DNDB7K59",
      previewUrl: "/previews/c-programs-preview.pdf",
    },
    {
      title: "200+ Python Programs for Beginners",
      image: "/python-programs.jpg",
      link: "https://www.amazon.com/200-Python-Programs-Beginners/dp/B0CVLQTKHG",
      previewUrl: "/previews/python-programs-preview.pdf",
    },
    {
      title: "200+ JS Programs for Beginners",
      image: "/javascript-programs.jpg",
      link: "https://www.amazon.com/200-JavaScript-Programs-Beginners-Book-ebook/dp/B0CQ4FBQ8H",
      previewUrl: "/previews/javascript-programs-preview.pdf",
    },
    {
      title: "200+ Java Programs for Beginners",
      image: "/java-programs.jpg",
      link: "https://www.amazon.com/Java-Programs-Beginners-Hernando-Abella-ebook/dp/B0DM4HMBG8",
      previewUrl: "/previews/java-programs-preview.pdf",
    },
    {
      title: "200+ Rust Programs for Beginners",
      image: "/rust-programs.jpg",
      link: "https://www.amazon.com/200-Rust-Programs-Beginners-performance-ebook/dp/B0DHT9R764/",
      previewUrl: "/previews/rust-programs-preview.pdf",
    }
  ],
  "Killer One-Liners": [
    {
      title: "250+ Killer Python One-Liners",
      image: "/250-killer-python.jpg",
      link: "https://www.amazon.com/250-Killer-Python-One-Liners-solutions-ebook/dp/B0D442PCLX",
      previewUrl: "/previews/python-oneliners-preview.pdf",
    },
    {
      title: "250+ Killer JavaScript One-Liners",
      image: "/250-killer-js.jpg",
      link: "https://www.amazon.com/250-JavaScript-Killer-One-Liners-Transform-ebook/dp/B0CN51HJQQ",
      previewUrl: "/previews/javascript-oneliners-preview.pdf",
    },
    {
      title: "250+ Killer Ruby One-Liners",
      image: "/250-killer-ruby.jpg",
      link: "https://www.amazon.com/250-Killer-Ruby-One-Liners-Transform-ebook/dp/B0CXF57XT9",
      previewUrl: "/previews/ruby-oneliners-preview.pdf",
    },
    {
      title: "250+ Killer TypeScript One-Liners",
      image: "/250-killer-ts.jpg",
      link: "https://www.amazon.com/250-Killer-TypeScript-One-Liners-Transform-ebook/dp/B0CYHZ5QKJ",
      previewUrl: "/previews/typescript-oneliners-preview.pdf",
    },
    {
      title: "250+ Killer C-Sharp One-Liners",
      image: "/250-killer-csharp.jpg",
      link: "https://www.amazon.com/250-Killer-One-Liners-Transform-solutions-ebook/dp/B0D2ZM71J8",
      previewUrl: "/previews/csharp-oneliners-preview.pdf",
    },
  ],
  "Pattern Programs": [
    {
      title: "150+ Python Pattern Programs",
      image: "/pattern-1.jpg",
      link: "https://www.amazon.com/150-Python-Pattern-Programs-creativity-ebook/dp/B0CVNG3PRV",
      previewUrl: "/previews/python-pattern-programs-preview.pdf",
    },
    {
      title: "150+ JavaScript Pattern Programs",
      image: "/pattern-2.jpg",
      link: "https://www.amazon.com/150-JavaScript-Pattern-Programs-creativity-ebook/dp/B0CTYK7NFR/",
      previewUrl: "/previews/javascript-pattern-programs-preview.pdf",
    },
    {
      title: "150+ C Pattern Programs",
      image: "/pattern-3.jpg",
      link: "https://www.amazon.com/150-Pattern-Programs-creativity-statements/dp/B0CTZW4Y9V",
      previewUrl: "/previews/c-pattern-programs-preview.pdf",
    },
  ],
  "Design Patterns": [
    {
      title: "Advanced JavaScript Design Patterns",
      image: "/js-design-pattern.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CW9LWMTB",
      previewUrl: "/previews/js-design-patterns-preview.pdf",
    },
    {
      title: "Python Design Patterns",
      image: "/python-design-patterns.png",
      link: "https://www.amazon.com/Python-Design-Patterns-Building-applications/dp/B0FTGG2MCV",
      previewUrl: "/previews/python-design-patterns-preview.pdf",
    },
  ],
  "50 Concepts": [
    {
      title: "50 Python Concepts Every Developer Should Know",
      image: "/50-concepts-python.jpg",
      link: "https://www.amazon.com/Python-Concepts-Every-Developer-Should-ebook",
      previewUrl: "/previews/50-python-concepts-preview.pdf",
    },
    {
      title: "50 JavaScript Concepts Every Developer Should Know",
      image: "/50-concepts-js.jpg",
      link: "https://www.amazon.com/JavaScript-Concepts-Every-Developer-Should-ebook/dp/B0CNC4WZT6",
      previewUrl: "/previews/50-js-concepts-preview.pdf",
    },
    {
      title: "50 Java Concepts Every Developer Should Know",
      image: "/50-concepts-java.jpg",
      link: "https://www.amazon.com/Java-Concepts-Every-Developer-Should-ebook/dp/B0CPPZ1BVM",
      previewUrl: "/previews/50-java-concepts-preview.pdf",
    },
    {
      title: "50 C-Sharp Concepts Every Developer Should Know",
      image: "/50-concepts-c-sharp.jpg",
      link: "https://www.amazon.com/Concepts-Every-Developer-Should-Know-ebook/dp/B0CVFXGJZ9",
      previewUrl: "/previews/50-csharp-concepts-preview.pdf",
    },
  ],
  "Interview Questions": [
    {
      title: "120+ JavaScript Interview Questions",
      image: "/javascript-interview.jpg",
      link: "",
      previewUrl: "/previews/javascript-interview-preview.pdf",
    },
    {
      title: "120+ Python Interview Questions",
      image: "/python-interview.jpg",
      link: "",
      previewUrl: "/previews/python-interview-preview.pdf",
    },
  ],
  "For Beginners": [
    {
      title: "Rust for Beginners",
      image: "/rust-for-beginners.jpg",
      link: "",
      previewUrl: "/previews/rust-for-beginners-preview.pdf",
    },
    {
      title: "JavaScript for Beginners",
      image: "/js-for-beginners.jpg",
      link: "",
      previewUrl: "/previews/javascript-for-beginners-preview.pdf",
    },
  ],
};

const Books = () => {
  const categoryKeys = Object.keys(CATEGORIES_DATA);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);
  const [activePreview, setActivePreview] = useState<{ url: string; title: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const gridRef = useRef<HTMLDivElement>(null);

  // Filtrado de búsqueda
  const filteredBooks = useMemo(() => {
    const books = CATEGORIES_DATA[selectedCategory];
    if (!searchQuery) return books;
    return books.filter(b => b.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [selectedCategory, searchQuery]);

  // Animación de entrada de tarjetas
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".book-card-container");
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.04,
            ease: "expo.out",
            overwrite: true
          }
        );
      }
    }, gridRef);
    return () => ctx.revert();
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#050505] min-h-screen text-white pb-32 selection:bg-green-500/30" id="books">
      <section className="max-w-7xl mx-auto px-6 pt-32">

        {/* HEADER DINÁMICO */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">

            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic">
              <span className="text-zinc-300 not-italic">BOOK CATALOG</span>
            </h2>
          </div>

          {/* BARRA DE BÚSQUEDA MINI */}
          <div className="relative group max-w-md w-full">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-green-500 transition-colors" />
            <input
              type="text"
              placeholder="Search in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/50 border border-white/5 py-4 pl-12 pr-6 rounded-2xl focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all text-sm font-medium placeholder:text-zinc-600"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* SIDEBAR CON CONTADORES */}
          {/* SIDEBAR COMPACTO */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32">
              {/* Header del sidebar más sutil */}
              <div className="flex items-center gap-2 px-4 mb-3">
                <div className="w-1 h-3 bg-green-500 rounded-full" />
                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">
                  Navigation
                </p>
              </div>

              {/* Contenedor de botones con scroll sutil si fuera necesario */}
              <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                {categoryKeys.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSearchQuery("");
                    }}
                    className={`group w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-[12px] font-bold transition-all duration-200 ${selectedCategory === cat
                        ? "bg-green-500 text-black shadow-lg shadow-green-500/10"
                        : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
                      }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <FiLayers
                        size={14}
                        className={selectedCategory === cat ? "text-black" : "text-green-500/70 group-hover:text-green-500"}
                      />
                      <span className="truncate tracking-tight">{cat}</span>
                    </div>

                    {/* Contador más pequeño y minimalista */}
                    <span className={`text-[9px] font-black min-w-[18px] h-[18px] flex items-center justify-center rounded-md ${selectedCategory === cat
                        ? 'bg-black/20 text-black'
                        : 'bg-zinc-900 text-zinc-600 group-hover:text-zinc-400'
                      }`}>
                      {CATEGORIES_DATA[cat].length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* GRID DE LIBROS */}
          <main className="flex-1">
            {filteredBooks.length > 0 ? (
              <div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14"
              >
                {filteredBooks.map((book, i) => (
                  <div key={i} className="book-card-container group flex flex-col">
                    {/* Contenedor de Imagen con Glassmorphism */}
                    <div className="relative aspect-[3/4.2] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-500 group-hover:border-green-500/40 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />

                      {/* Overlay de Acciones Moderno */}
                      <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <button
                          onClick={() => setActivePreview({ url: book.previewUrl || "/previews/default.pdf", title: book.title })}
                          className="w-full flex items-center justify-center gap-2 py-4 bg-white/10 backdrop-blur-xl text-white border border-white/10 rounded-2xl font-black text-[10px] tracking-widest hover:bg-white hover:text-black transition-all uppercase"
                        >
                          <FiEye size={16} /> Quick Preview
                        </button>
                        <a
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-4 bg-green-500 text-black rounded-2xl font-black text-[10px] tracking-widest hover:bg-green-400 transition-all uppercase"
                        >
                          <FaAmazon size={14} /> Buy on Amazon
                        </a>
                      </div>
                    </div>

                    {/* Info del Libro */}
                    <div className="mt-6 px-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-500/40" />
                        <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest italic">Stable Edition</span>
                      </div>
                      <h3 className="text-lg font-black leading-tight text-zinc-100 group-hover:text-green-400 transition-colors duration-300 min-h-[3.5rem] line-clamp-2">
                        {book.title}
                      </h3>
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <FiBookOpen className="text-zinc-700" size={18} />
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter">Verified Content</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-96 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[3rem]">
                <p className="text-zinc-600 font-black uppercase tracking-widest text-sm">No books found in this category</p>
              </div>
            )}
          </main>
        </div>
      </section>

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