import React from "react";
import "@fontsource/great-vibes";

export function AboutSection() {
  return (
    <section id="about-us">
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-4 flex items-center justify-between">
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
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-center md:text-start text-4xl md:text-6xl font-bold leading-tight">
              <span
                style={{ fontFamily: "Great Vibes" }}
                className="text-primary block text-5xl md:text-7xl"
              >
                Where Every Slice
              </span>
              <span className="block text-black">Tells a Story</span>
            </h1>

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
