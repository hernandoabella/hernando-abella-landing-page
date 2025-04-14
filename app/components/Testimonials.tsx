"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonialsData = [
  {
    name: "Raj Kachu",
    feedback:
      "Hernando built our company website from the ground up. His expertise in full-stack development and attention to detail made the entire process seamless. Our website now runs faster and looks more professional than ever.",
    image: "/raj.jpg",
    website: "thevplan.com",
  },
  {
    name: "Nelson Daza",
    feedback:
      "I trusted Hernando with redesigning our website, and I couldn't be happier with the results. The site is visually appealing, user-friendly, and mobile-optimized. His expertise in web technologies is top-notch.",
    image: "/nelson.jpg",
    website: "alunapublishinghouse.com",
  },
  {
    name: "Gabriel Martínez",
    feedback:
      "Working with Hernando on our Landing Page was an excellent experience. He not only delivered high-quality code but also implemented features that boosted our user engagement.",
    image: "/gabriel.jpg",
    website: "la-gir.com",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 dark:bg-[#131313]" id="testimonials">
      <div className="container mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">What my clients say</h2>
        <Carousel>
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 p-4">
                <div className="p-6 border rounded-lg text-center transition-transform transform hover:scale-105 ">
                  {/* Rounded Image */}
                  <div className="mb-4 flex justify-center items-center">
                    <Image
                      src={testimonial.image}
                      width={100}
                      height={100}
                      className="rounded-full object-fill"
                      alt={testimonial.name}
                    />
                  </div>
                  {/* Feedback */}
                  <p className="text-lg italic mb-4">{testimonial.feedback}</p>
                  {/* Stars */}
                  <div className="flex justify-center gap-2 mb-4 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  {/* Name */}
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  {/* Website */}
                  <a
                    href={testimonial.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:underline"
                  >
                    {testimonial.website}
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