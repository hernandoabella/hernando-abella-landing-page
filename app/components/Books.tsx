"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";

type Book = { title: string; image: string; link: string };
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
        link: "https://www.amazon.com/300-Python-Algorithms-Mastering-Problem-Solving-ebook/dp/B0DJFS471K",
      },
      {
        title: "200+ Python Programs for Beginners",
        image: "/python-cheatsheet.jpg",
        link: "https://www.amazon.com/300-Python-Algorithms-Mastering-Problem-Solving-ebook/dp/B0DJFS471K",
      },
      {
        title: "clean code in python",
        image: "/cleancodeinpython.jpg",
        link: "https://www.amazon.com/Clean-Code-Python-Essentials-Mastering-ebook/dp/B0DTYXGQTW",
      },

    ],
    "Algorithms & Data Structure": [
      {
        title: "+300 Python Algoriths",
        image: "/book-1.jpg",
        link: "https://www.amazon.com/300-Python-Algorithms-Mastering-Problem-Solving-ebook/dp/B0DJFS471K",
      },
      { title: "Data Structures and Algorithms in Python", image: "/dsa-in-python.jpg", link: "#" },

    ],
    "Cheat Sheets": [
      {
        title: "The Ultimate AI Cheat Sheet",
        image: "/ai-cheatsheet.png",
        link: "#",
      },
      {
        title: "Excel Cheat Sheet",
        image: "/excel-cheatsheet.png",
        link: "#",
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
        link: "#",
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
    <section className="min-h-screen p-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#2c5364] text-gray-100">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-400 to-lime-500">
          Explore My Books
        </h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Curated resources for programming, productivity, and interviews.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categoryKeys.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition transform hover:scale-105 ${
              selectedCategory === cat
                ? "bg-green-600 text-white shadow"
                : "bg-zinc-800 text-gray-300 hover:bg-green-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories[selectedCategory]?.map((book, i) => (
          <a
            key={i}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
          >
            <div className="relative w-full h-72">
              <Image
                src={book.image}
                alt={book.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-90 transition"
              />
            </div>
            <div className="p-4 bg-zinc-900">
              <h3 className="font-semibold">{book.title}</h3>
            </div>
          </a>
        ))}
      </div>

      {/* Bonus & More */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        <button
          onClick={handleMultipleDownloads}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-700 text-white font-semibold hover:bg-green-600 transition"
        >
          <FiBookOpen /> Get Bonus!
        </button>
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-green-700 text-white font-semibold hover:bg-green-700/20 transition"
        >
          <FiArrowRight /> More Books
        </a>
      </div>
    </section>
  );
};

export default Books;
