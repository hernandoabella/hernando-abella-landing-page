"use client";

import React from "react";
import Image from "next/image";

const Books = () => {
  const books = [
    {
      image: "/book-1.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0D442PCLX",
    },
    {
      image: "/book-2.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CVLQTKHG",
    },
    {
      image: "/book-3.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CW9LWMTB",
    },
  ];

  return (
    <section
      id="books"
      className="pt-60 bg-gray-50 dark:bg-[#131313] text-gray-900 dark:text-gray-100"
    >
      <div className="text-center mb-12">
        <h2 className="mb-5 font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 bg-transparent h-full">
          Best Seller Books!
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container">
        {books.map((book, index) => (
          <div key={index} className="flex flex-col items-center">
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              <div className="relative w-80 h-96">
                <Image
                  src={book.image}
                  layout="fill"
                  alt={`Cover of ${book.link}`}
                  className="border"
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;
