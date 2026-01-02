"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiExternalLink, FiBookOpen, FiLayers } from "react-icons/fi";
import gsap from "gsap";

type Book = { title: string; image: string; link: string };
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
    "Algorithms & Data Structure": [
      {
        title: "+300 Python Algorithms",
        image: "/book-1.jpg",
        link: "https://www.amazon.com/300-Python-Algorithms-Mastering-Problem-Solving-ebook/dp/B0DJFS471K",
      },
      {
        title: "Data Structures and Algorithms in Python",
        image: "/dsa-in-python.jpg",
        link: "#"
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
  const gridRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  // GSAP Animation for the Grid
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".book-card");
      
      // Reset state before animating
      gsap.set(cards, { opacity: 0, y: 30 });

      // Animate in
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        overwrite: true
      });
    }
  }, [selectedCategory]);

  // Initial Sidebar Animation
  useEffect(() => {
    gsap.from(sidebarRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.8)"
    });
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, title: string) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://placehold.co/400x600/1a1a1a/10b981?text=${encodeURIComponent(title.substring(0, 20))}`;
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Digital <span className="text-green-500">Library</span>
          </h2>
          <p className="text-zinc-500 mt-2 font-medium">Selected titles for elite developers.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar */}
          <aside ref={sidebarRef} className="lg:w-64 flex-shrink-0">
            <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-3xl backdrop-blur-md">
              <div className="flex flex-col gap-1">
                {categoryKeys.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
                        : "text-zinc-500 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <FiLayers className={selectedCategory === cat ? "text-white" : "text-green-600"} />
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <div 
              ref={gridRef}
              key={selectedCategory} 
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {categories[selectedCategory].map((book, i) => (
                <a
                  key={`${selectedCategory}-${i}`}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-card group flex flex-col cursor-pointer"
                >
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-green-500/50 transition-colors duration-500">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => handleImageError(e, book.title)}
                    />
                    
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <div className="bg-green-500 p-4 rounded-full text-black">
                         <FiExternalLink size={24} />
                       </div>
                    </div>
                  </div>

                  <div className="mt-5 px-2">
                    <h3 className="text-lg font-bold group-hover:text-green-400 transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-zinc-600">
                      <FiBookOpen size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Amazon Kindle</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Books;