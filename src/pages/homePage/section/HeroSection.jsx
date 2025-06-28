import React from "react";
import { ShoppingBag } from "lucide-react";
import "@fontsource/great-vibes";
import "./styles/HeroSection.css";
import { RandomDots } from "../components/RandomDots";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          {/* Content */}
          <div className="flex flex-col justify-center gap-4 order-2 md:order-1">
            <h1 className="text-2xl md:text-6xl text-center md:text-start font-bold">
              <span
                style={{ fontFamily: "Great Vibes" }}
                className="text-primary text-4xl md:text-7xl"
              >
                Sweet moments<br></br>
              </span>
              deserve unforgettable cakes.
            </h1>
            <p className="text-gray-500 text-center md:text-start">
              Sweet moments deserve unforgettable treats. From birthdays to
              weddings, we bake it all.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                className="bg-primary py-4 px-6 rounded-full text-white flex gap-2"
                href="#"
              >
                <ShoppingBag />
                Order Now
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-end items-center order-1 md:order-2">
            <img
              src="/assets/images/hero/rose-flavour.png"
              alt="Rose Cake"
              className="w-full max-w-[500px] h-auto object-contain updown"
            />

            <div className="-z-1">
              <RandomDots />
            </div>
          </div>
        </div>
      </div>

      {/* Bacground Image */}
      <img
        src="/assets/images/hero/bg-shape.png"
        alt="Rose Cake"
        className="absolute right-0 top-0 -z-2 max-w-[200px]  md:max-w-[280px] h-auto object-contain opacity-10 md:opacity-30"
      />
    </section>
  );
}
