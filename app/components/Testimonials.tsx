"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  feedback: string;
  image?: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Raj Kachu",
    feedback:
      "This book completely changed how I write JavaScript. The examples are practical, clear, and fun to follow!",
    image: "/raj.jpg",
    rating: 5,
  },
  {
    name: "Nelson Daza",
    feedback:
      "As a Python beginner, this book made loops and patterns click instantly. Highly recommend for anyone starting out!",
    rating: 4,
  },
  {
    name: "Gabriel Martínez",
    feedback:
      "Loved the SQL Cookbook! Straightforward explanations and real examples — it helped me level up fast.",
    image: "/gabriel.jpg",
    rating: 5,
  },
  {
    name: "Andrea López",
    feedback:
      "The Java concepts book is a gem. Every page had something that helped me in interviews and daily coding.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] text-white relative overflow-hidden"
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

                  {/* Name + Verified Badge */}
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <br/>
                    <span className="text-sm text-green-400 mt-1 bg-green-400/10 px-3 py-1 rounded-full">
                      Verified Purchase
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
