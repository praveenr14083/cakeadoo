import React from "react";
import { PopularCard } from "../components/PopularCard";
const popularProducts = [
  {
    title: "Rose Cake",
    imageSrc: "/assets/images/popular/rose-flavour-cake.png",
    imageAlt: "Rose Cake",
    price: 700,
    star: 5,
  },
  {
    title: "Vanilla Delight",
    imageSrc: "/assets/images/popular/vennila-flavour-cake.png",
    imageAlt: "Vanilla Cake",
    price: 650,
    star: 5,
  },
  {
    title: "Black Forest",
    imageSrc: "/assets/images/popular/black-forest.png",
    imageAlt: "Black Forest Cake",
    price: 750,
    star: 5,
  },
  {
    title: "Rasmalai",
    imageSrc: "/assets/images/popular/rasamalai-cake.webp",
    imageAlt: "Rasmalai Cake",
    price: 800,
    star: 5,
  },
];

export function PopularSection() {
  return (
    // Main Section - Popular Section
    <section id="popular-section">
      {/* Container Section */}
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-6 md:py-8 lg:py-10">
        <div className="flex flex-col gap-10">
          {/* Heading */}
          <div>
            <h1
              className="text-primary text-3xl md:text-5xl text-center font-bold"
              style={{ fontFamily: "Great Vibes" }}
            >
              Popular
            </h1>

            <h2 className="text-2xl md:text-6xl text-center font-bold">
              Our Best Cakes
            </h2>
          </div>

          {/* Product List */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8">
            {popularProducts.map((product, index) => {
              if (index >= 4) return null; // Skip rendering after 4 items
              return (
                <PopularCard
                  key={index}
                  index={index}
                  title={product.title}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  price={product.price}
                  onAddToCart={() => alert(`${product.title} added to cart!`)}
                  color={product.color}
                  star={product.star}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
