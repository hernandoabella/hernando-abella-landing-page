'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const books = [
  {
    title: 'The Art of Looping',
    description: 'A deep dive into the looping structures of Python.',
    image: '/books/looping.jpg',
    link: '/books/looping',
  },
  {
    title: 'Coding Flirt',
    description: 'Programming pick-up lines that make devs swoon.',
    image: '/books/flirt.jpg',
    link: '/books/flirt',
  },
  {
    title: 'Debugging Diaries',
    description: 'Real tales from the bug trenches.',
    image: '/books/debug.jpg',
    link: '/books/debugging',
  },
  // Add more books here
];

const BookGallery = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#111] text-white min-h-screen">
      <h2 className="font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-t from-purple-500 via-blue-300 to-blue-500 bg-transparent h-full text-center mb-10">My Book Collection</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book, idx) => (
          <motion.a
            href={book.link}
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl backdrop-blur-md group"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{book.title}</h3>
              <p className="text-sm text-gray-300">{book.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BookGallery;
