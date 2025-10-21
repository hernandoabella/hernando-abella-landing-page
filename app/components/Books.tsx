"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiArrowRight } from "react-icons/fi";

type Book = { title: string; image: string; link: string; tag?: string };
type Categories = { [key: string]: Book[] };

const bonusFiles = [
  "/BONUS/50-Concepts-Every-Java-Developer-Should-Know.pdf",
  "/BONUS/120-Advanced-Javascript-Interview-Questions.pdf",
  "/BONUS/150-Python-Pattern-Programs.pdf",
  "/BONUS/250-Killer-JS-One-Liners.pdf",
  "/BONUS/SQL-Cookbook.pdf",
];

const Books = () => {
  const handleMultipleDownloads = useCallback(() => {
    bonusFiles.forEach((file) => {
      const a = document.createElement("a");
      a.href = file;
      a.download = file.split("/").pop() || "file";
      a.click();
    });
  }, []);

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
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section
      id="books"
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]"
    >
      {/* Glow background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-7xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-green-500">Book</span> Catalog
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my complete collection of programming books designed to make you a better developer.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Book Grid */}
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories[selectedCategory]?.map((book, i) => (
            <motion.a
              key={i}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-400/30 hover:shadow-green-500/10 shadow-lg transition-all duration-500 hover:scale-105"
              whileHover={{ y: -4 }}
            >
              {/* Image with overlay */}
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500" />

                {/* Floating title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-base group-hover:text-green-400 transition-colors duration-300">
                    {book.title}
                  </h3>
                  {book.tag && (
                    <span className="text-xs text-gray-300 bg-white/10 px-2 py-0.5 rounded-md mt-1 inline-block">
                      {book.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover “View Book” action */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium">
                  <FiExternalLink className="text-sm" />
                  View Book
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bonus & All Books Buttons */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.button
            onClick={handleMultipleDownloads}
            className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-green-500/20 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <span>Get Bonus Files</span>
          </motion.button>

          <motion.a
            href="https://www.amazon.com/s?k=hernando+abella"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-transparent border border-green-500/40 text-white font-semibold hover:bg-green-500/10 hover:border-green-500 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
            <span>View All Books</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Books;
