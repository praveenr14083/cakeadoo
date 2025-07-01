import React from "react";
import "@fontsource/great-vibes";

export function AboutSection() {
  return (
    // Main Section - About Us
    <section id="about-us">
      {/* Conatain Section */}
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-6 md:py-8 lg:py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/assets/images/about/chocolate-cake.png"
              alt="Rose Cake"
              className="w-full max-w-[450px] h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-4">
            <h1
              className="text-primary text-3xl md:text-5xl text-center md:text-start font-bold"
              style={{ fontFamily: "Great Vibes" }}
            >
              About Us
            </h1>

            <h2 className="text-2xl md:text-6xl text-center md:text-start font-bold">
              Where Every Slice Tells a Story
            </h2>

            <p className="text-gray-500 text-center md:text-start">
              Born from a kitchen filled with joy and flour-dusted memories,
              Cakeadoo is more than a bakery — it's a passion project. Every
              cake is baked fresh, decorated with care, and delivered with love.
              We believe every occasion deserves sweetness that feels like home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
