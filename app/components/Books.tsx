"use client";

import React, { useState } from "react";
import Image from "next/image";

type Book = {
  title: string;
  image: string;
  link: string;
};

type Categories = {
  [key: string]: Book[];
};

const Books = () => {
  const categories: Categories = {
    
    "Best Seller": [
      {
        title: "Coding Love Notes",
        image: "/book-1.jpg",
        link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0D442PCLX",
      },
      { title: "Love in Brackets", image: "/book-1.jpg", link: "#" },
      { title: "While(True): Love", image: "/book-1.jpg", link: "#" },
    ],
    "Program Collection": [
      {
        title: "200 C Programs",
        image: "/c-programs.jpg",
        link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CVLQTKHG",
      },
      { title: "200 Python Programs", image: "/python-programs.jpg", link: "#" },
      { title: "200 Rust Programs", image: "/book-2.jpg", link: "#" },
    ],
    "Killer One-Liners": [
      {
        title: "The Loop Diaries",
        image: "/book-2.jpg",
        link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CVLQTKHG",
      },
      { title: "Decode Me If You Can", image: "/book-2.jpg", link: "#" },
      { title: "Try Except Love", image: "/book-2.jpg", link: "#" },
    ],
    "DSA": [
      {
        title: "The Loop Diaries",
        image: "/book-2.jpg",
        link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CVLQTKHG",
      },
      { title: "Decode Me If You Can", image: "/book-2.jpg", link: "#" },
      { title: "Try Except Love", image: "/book-2.jpg", link: "#" },
    ],
    "Pattern Programs": [
      {
        title: "The Art of Looping",
        image: "/book-3.jpg",
        link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CW9LWMTB",
      },
      { title: "Infinite Iterations", image: "/book-3.jpg", link: "#" },
      { title: "Loop Me Gently", image: "/book-3.jpg", link: "#" },
    ],
    
    
  };

  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryKeys[0]);

  return (
    <section
      className="relative p-10 text-gray-100"
      id="books"
      style={{
        backgroundImage: "url('/bg-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for darker look */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 text-center mb-10">
        <h2 className="font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 bg-transparent h-full">
          Explore My Books
        </h2>
      </div>

      {/* Tab Buttons */}
      <div className="relative z-10 flex justify-center gap-4 mb-12 flex-wrap">
        {categoryKeys.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition duration-300 transform hover:scale-105 font-medium ${
              selectedCategory === category
                ? "bg-green-600 text-white shadow-lg"
                : "bg-zinc-800 text-gray-300 hover:bg-green-600 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {categories[selectedCategory]?.map((book: Book, index: number) => (
          <div
            key={index}
            className="group transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative w-full h-80 rounded-xl overflow-hidden border border-green-700 shadow-md">
              <Image
                src={book.image}
                alt={book.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-90 transition duration-300"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-base font-semibold text-white truncate px-2">
                {book.title}
              </h3>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 text-sm bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition duration-300"
              >
                View Book
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;
