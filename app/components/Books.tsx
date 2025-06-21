"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";

type Book = {
  title: string;
  image: string;
  link: string;
};

type Categories = {
  [key: string]: Book[];
};

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
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop() || "file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
        title: "200 C Programs",
        image: "/c-programs.jpg",
        link: "https://www.amazon.com/Programs-Beginners-Step-Step-Coding-ebook/dp/B0DNDB7K59",
      },
      {
        title: "200 Python Programs",
        image: "/python-programs.jpg",
        link: "https://www.amazon.com/200-Python-Programs-Beginners/dp/B0CVLQTKHG",
      },
      {
        title: "200 JS Programs",
        image: "/javascript-programs.jpg",
        link: "https://www.amazon.com/200-JavaScript-Programs-Beginners-Book-ebook/dp/B0CQ4FBQ8H",
      },
      {
        title: "200 java Programs",
        image: "/java-programs.jpg",
        link: "https://www.amazon.com/Java-Programs-Beginners-Hernando-Abella-ebook/dp/B0DM4HMBG8",
      },
      {
        title: "200 rust Programs",
        image: "/rust-programs.jpg",
        link: "https://www.amazon.com/200-Rust-Programs-Beginners-performance-ebook/dp/B0DHT9R764/",
      }


    ],
    "Killer One-Liners": [
      {
        title: "python-oneliner",
        image: "/250-killer-python.jpg",
        link: "https://www.amazon.com/250-Killer-Python-One-Liners-solutions-ebook/dp/B0D442PCLX",
      },
      {
        title: "js-oneliner",
        image: "/250-killer-js.jpg",
        link: "https://www.amazon.com/250-JavaScript-Killer-One-Liners-Transform-ebook/dp/B0CN51HJQQ",
      },
      {
        title: "ruby-oneliner",
        image: "/250-killer-ruby.jpg",
        link: "https://www.amazon.com/250-Killer-Ruby-One-Liners-Transform-ebook/dp/B0CXF57XT9",
      },
      {
        title: "typescript-oneliner",
        image: "/250-killer-ts.jpg",
        link: "https://www.amazon.com/250-Killer-TypeScript-One-Liners-Transform-ebook/dp/B0CYHZ5QKJ",
      },
      {
        title: "csharp-oneliner",
        image: "/250-killer-csharp.jpg",
        link: "https://www.amazon.com/250-Killer-One-Liners-Transform-solutions-ebook/dp/B0D2ZM71J8",
      },
    ],
    "Pattern Programs": [
      {
        title: "pattern 1",
        image: "/pattern-1.jpg",
        link: "https://www.amazon.com/150-Python-Pattern-Programs-creativity-ebook/dp/B0CVNG3PRV",
      },
      {
        title: "pattern 2",
        image: "/pattern-2.jpg",
        link: "https://www.amazon.com/150-JavaScript-Pattern-Programs-creativity-ebook/dp/B0CTYK7NFR/",
      },
      {
        title: "pattern 3",
        image: "/pattern-3.jpg",
        link: "https://www.amazon.com/150-Pattern-Programs-creativity-statements/dp/B0CTZW4Y9V",
      },

    ],
    "Design Patterns": [
      {
        title: "JS Design Patterns",
        image: "/js-design-pattern.jpg",
        link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CW9LWMTB",
      },
    ],
    "50 Concepts": [
      {
        title: "50-concepts-python",
        image: "/50-concepts-python.jpg",
        link: "https://www.amazon.com/Python-Concepts-Every-Developer-Should-ebook",
      },
      {
        title: "50-concepts-js-sharp",
        image: "/50-concepts-js.jpg",
        link: "https://www.amazon.com/JavaScript-Concepts-Every-Developer-Should-ebook/dp/B0CNC4WZT6",
      },
      {
        title: "50-concepts-java-sharp",
        image: "/50-concepts-java.jpg",
        link: "https://www.amazon.com/Java-Concepts-Every-Developer-Should-ebook/dp/B0CPPZ1BVM",
      },
      {
        title: "50-concepts-c-sharp",
        image: "/50-concepts-c-sharp.jpg",
        link: "https://www.amazon.com/Concepts-Every-Developer-Should-Know-ebook/dp/B0CVFXGJZ9",
      },

    ],
  };

  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryKeys[0]);

  return (
    <section id="books" className="relative min-h-screen p-10 text-gray-100 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#2c5364] overflow-hidden">
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.06] z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
            <circle cx="20" cy="20" r="2" fill="#10B981" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      <div className="relative z-10 text-center mb-10">
        <h2 className="font-extrabold text-white text-4xl sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-400 to-lime-500">
          Explore My Books
        </h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Curated resources for mastering programming, boosting productivity, and cracking interviews.
        </p>
      </div>

      <div className="relative z-10 flex justify-center gap-4 mb-12 flex-wrap">
        {categoryKeys.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition duration-300 transform hover:scale-105 font-medium ${selectedCategory === category
              ? "bg-green-600 text-white shadow-lg"
              : "bg-zinc-800 text-gray-300 hover:bg-green-600 hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {categories[selectedCategory]?.map((book, index) => (
          <div
            key={index}
            className="group transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={book.image}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-90 transition duration-300"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex gap-10 justify-center relative z-10">
        <a href="#" target="_blank" onClick={handleMultipleDownloads}>
          <div className="relative group">
            <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-3xl bg-green-950 px-8 py-2 text-gray-200 flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2">
                <FiBookOpen className="text-lg" />
                Get Bonus!
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-green-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
          </div>
        </a>

        <a href="#contact">
          <div className="relative group">
            <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-3xl border-2 border-green-950 px-8 py-2 text-gray-200 flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2">
                <FiArrowRight className="text-lg" />
                More Books
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-green-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Books;