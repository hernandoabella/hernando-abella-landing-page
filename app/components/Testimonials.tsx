"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    name: "Raj Kachu",
    feedback:
      "Hernando built our company website from the ground up. His expertise in full-stack development and attention to detail made the entire process seamless. Our website now runs faster and looks more professional than ever.",
    image: "/raj.jpg",
    website: "https://www.thevplan.com",
  },
  {
    name: "Nelson Daza",
    feedback:
      "I trusted Hernando with redesigning our website, and I couldn't be happier with the results. The site is visually appealing, user-friendly, and mobile-optimized. His expertise in web technologies is top-notch.",
    image: "/nelson.jpg",
    website: "https://www.alunapublishinghouse.com",
  },
  {
    name: "Gabriel Martínez",
    feedback:
      "Working with Hernando on our Landing Page was an excellent experience. He not only delivered high-quality code but also implemented features that boosted our user engagement.",
    image: "/gabriel.jpg",
    website: "https://www.la-gir.com",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 px-4 md:px-10 dark:bg-[#131313] bg-gray-50 dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-100 via-green-300 to-green-500">
          What my clients say
        </h2>

        <Carousel>
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3 p-4"
              >
                <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 duration-300 h-full">
                  <Image
                    src={testimonial.image}
                    width={100}
                    height={100}
                    className="rounded-full mb-4 object-cover shadow"
                    alt={testimonial.name}
                  />

                  <p className="text-base text-gray-700 dark:text-gray-300 italic mb-4">
                    “{testimonial.feedback}”
                  </p>

                  <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <h3 className="text-lg font-bold mb-1">{testimonial.name}</h3>

                  <a
                    href={testimonial.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 dark:text-green-400 hover:underline"
                  >
                    Visit website
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
