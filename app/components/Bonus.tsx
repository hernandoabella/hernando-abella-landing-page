"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

interface Book {
  image: string;
  pdf: string;
  title: string;
  description: string;
}

interface BookGalleryProps {
  title: string;
  text: string;
  books: Book[];
  buttonLabel?: string;
}

const BookGallery2: FC<BookGalleryProps> = ({
  title,
  text,
  books,
  buttonLabel = "Download All Bonus Books",
}) => {
  const handleDownloadAll = () => {
    books.forEach((book) => {
      const link = document.createElement("a");
      link.href = book.pdf;
      link.download = `${book.title.replace(/\s+/g, "-")}.pdf`;
      link.target = "_blank";
      link.click();
    });
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 pt-16 pb-20 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] text-gray-100">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center z-10"
      >
        Download the <span className="text-green-400"> Bonus Books</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 leading-relaxed mb-14 max-w-2xl text-center z-10"
      >
        {text}
      </motion.p>

      {/* Books Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10"
      >
        {books.map((book, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 hover:border-green-500/30 transition-all duration-300"
          >
            {/* Left - Book Text */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {book.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{book.description}</p>
            </div>

            {/* Right - Book Image */}
            <div className="flex-1 w-full relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        className="flex justify-center mt-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadAll}
          className="px-10 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-green-500/20 transition-all duration-300"
        >
          {buttonLabel}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default BookGallery2;
