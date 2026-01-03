"use client";

import { FaStar, FaRegStar, FaCheckCircle, FaQuoteRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
    feedback: "I picked up Python Cheat Sheet by Hernando Abella because I wanted a quick and easy way to brush up on Python without having to dig through heavy textbooks.",
    image: "/jeff-kikel.jpg",
    rating: 4,
    book: "Python Cheat Sheet",
  },
  {
    name: "Randall McMurphy",
    feedback: "This book is a treasure trove of Python algorithms, perfect for anyone looking to sharpen their programming skills or tackle complex coding challenges.",
    image: "/randall-mcmurphy.jpg",
    rating: 5,
    book: "300+ Python Algorithms",
  },
  {
    name: "Bobby Plath",
    feedback: "These are great one-liners for coding with Python. Yes they are basic, but are very useful functions for coding. Very helpful.",
    image: "/bobby-plath.jpg",
    rating: 5,
    book: "250+ Killer Python One-Liners",
  },
];

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, name: string) => {
  const target = e.target as HTMLImageElement;
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=10b981&color=fff&size=200`;
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-[#080808] text-white relative overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Reader Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Developers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real feedback from readers mastering code with my collections.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group px-4 md:px-12">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full p-2"
                  >
                    <div className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col hover:bg-white/[0.06] hover:border-green-500/30 transition-all duration-500 shadow-2xl">
                      
                      {/* Floating Quote Icon */}
                      <FaQuoteRight className="absolute top-8 right-8 text-white/5 text-4xl" />

                      {/* Header: Book Title */}
                      <div className="mb-6 relative z-10">
                        <span className="px-3 py-1 rounded-md bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                          {testimonial.book}
                        </span>
                      </div>

                      {/* Body: Feedback */}
                      <p className="text-gray-300 leading-relaxed italic text-base mb-8 flex-grow relative z-10">
                        &quot;{testimonial.feedback}&quot;
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 text-yellow-500 mb-8 bg-black/30 w-fit px-3 py-1 rounded-full border border-white/5">
                        {[...Array(5)].map((_, i) => (
                          i < testimonial.rating ? <FaStar key={i} size={12} /> : <FaRegStar key={i} size={12} className="opacity-20" />
                        ))}
                      </div>

                      {/* Footer: Profile */}
                      <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                        <div className="relative h-14 w-14 flex-shrink-0">
                          {testimonial.image ? (
                            <Image
                              src={testimonial.image}
                              fill
                              className="rounded-full object-cover border-2 border-green-500/20"
                              alt={testimonial.name}
                              onError={(e) => handleImageError(e, testimonial.name)}
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gradient-to-tr from-green-500 to-emerald-700 flex items-center justify-center text-white font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-bold text-white tracking-wide">{testimonial.name}</h3>
                            <FaCheckCircle className="text-green-500 text-[10px]" />
                          </div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Verified Reader</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - Styled to match the dark theme */}
            <div className="flex justify-center gap-4 mt-12">
               <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/5 border-white/10 hover:bg-green-500 hover:text-black hover:border-green-500 transition-all" />
               <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/5 border-white/10 hover:bg-green-500 hover:text-black hover:border-green-500 transition-all" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;