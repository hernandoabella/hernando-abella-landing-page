"use client";

import React from "react";
import BonusBtn from "./BonusBtn";

const DownloadBonusBook = () => {
  return (
    <section className="relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/tech.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="mx-auto text-center p-20 relative z-10">
        <h2 className="mb-5 font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 bg-transparent h-full">
          Bonus Books!
        </h2>
        <BonusBtn />
      </div>
    </section>
  );
};

export default DownloadBonusBook;
