"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { FaStar, FaRegStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);


  interface Testimonial {
  name: string;
  feedback: string;
  image?: string;
  rating: number;
  book: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Jeff Kikel",
    feedback:
      "I picked up Python Cheat Sheet by Hernando Abella because I wanted a quick and easy way to brush up on Python without having to dig through heavy textbooks.",
    image: "/jeff-kikel.jpg",
    rating: 4,
    book: "Python Cheat Sheet",
  },
  {
    name: "Randall McMurphy",
    feedback:
      "This book is a treasure trove of Python algorithms, perfect for anyone looking to sharpen their programming skills or tackle complex coding challenges.",
    image: "/randall-mcmurphy.jpg",
    rating: 5,
    book: "300+ Python Algorithms",
  },
  {
    name: "Bobby Plath",
    feedback:
      "These are great one-liners for coding with Python. Yes they are basic, but are very useful functions for coding. Very helpful.",
    image: "/bobby-plath.jpg",
    rating: 5,
    book: "250+ Killer Python One-Liners",
  },
  
  
];
  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]">
      <section
      id="books"
      className="relative w-full min-h-screen flex items-start justify-center px-4 sm:px-8 py-16 "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 max-w-7xl w-full">
        {/* Sidebar Navigation */}
        <motion.aside
          className="w-full lg:w-1/5 flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          <div className="flex flex-col gap-2">
            {categoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-green-500 text-white shadow-md shadow-green-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.aside>

        {/* Main Book Grid */}
        <div className="flex-1">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Book <span className="text-green-500">Catalog</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore top programming books crafted to boost your coding journey 🚀
            </p>
          </motion.div>

          <motion.div 
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
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
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-500/30 transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium">
                      <FiExternalLink className="text-sm" />
                      View Book
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium text-sm line-clamp-2 group-hover:text-green-400 transition-colors duration-300">
                    {book.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
        
      </div>
      
    </section>
    <section
          id="testimonials"
          className="py-20 px-6 text-white relative overflow-hidden"
        >
          {/* Decorative Glow Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          </div>
    
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-100 via-green-300 to-green-500">
              What Readers Are Saying
            </h2>
    
            <Carousel>
              <CarouselContent>
                {testimonialsData.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/3 p-4"
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:shadow-green-500/10 p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 duration-300 h-full">
                      {/* Profile Image or Fallback Avatar */}
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          width={90}
                          height={90}
                          className="rounded-full mb-4 object-cover shadow-md border border-white/10"
                          alt={testimonial.name}
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-md">
                          {testimonial.name.charAt(0).toUpperCase()}
                        </div>
                      )}
    
                      {/* Book Name */}
                      <h4 className="text-green-300 font-semibold text-sm mb-2 bg-green-400/10 px-3 py-1 rounded-full">
                        {testimonial.book}
                      </h4>
    
                      {/* Rating Stars */}
                      <div className="flex justify-center gap-1 text-yellow-400 mb-3">
                        {[...Array(5)].map((_, i) =>
                          i < testimonial.rating ? (
                            <FaStar key={i} />
                          ) : (
                            <FaRegStar key={i} className="opacity-50" />
                          )
                        )}
                      </div>
    
                      {/* Feedback */}
                      <p className="text-gray-300 italic mb-4 leading-relaxed">
                        “{testimonial.feedback}”
                      </p>
    
                      {/* Name + Verified Purchase */}
                      <div className="flex flex-col items-center">
                        <h3 className="text-lg font-bold">{testimonial.name}</h3>
                        
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
    
              {/* Arrows */}
              <CarouselPrevious className="!bg-green-500 hover:!bg-green-600 !text-white transition-all shadow-lg hover:scale-105" />
              <CarouselNext className="!bg-green-500 hover:!bg-green-600 !text-white transition-all shadow-lg hover:scale-105" />
            </Carousel>
          </div>
        </section>
    </div>
  );
};

export default Books;