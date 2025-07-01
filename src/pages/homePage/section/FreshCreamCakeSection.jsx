import React from "react";
import { ProductCard } from "../../../components/ProductCard";

const FRESH_CREAM_CAKES = [
  {
    id: 1,
    name: "Black Forest Elite Cake",
    image: "/assets/images/cakes/fresh-cream-cake/black-forest-elite-cake.png",
    price: 450,
    href: "/products/fresh-cream-cake/black-forest-elite-cake",
  },
  {
    id: 2,
    name: "Chocolate Dream Truffle Cake",
    image:
      "/assets/images/cakes/fresh-cream-cake/chocolate-dream-truffle-cake.png",
    price: 500,
    href: "/products/fresh-cream-cake/chocolate-dream-truffle-cake",
  },
  {
    id: 3,
    name: "Strawberry Cake",
    image: "/assets/images/cakes/fresh-cream-cake/strawberry-cake.png",
    price: 420,
    href: "/products/fresh-cream-cake/strawberry-cake",
  },
  {
    id: 4,
    name: "White Forest Elite Cake",
    image: "/assets/images/cakes/fresh-cream-cake/white-forest-elite-cake.png",
    price: 430,
    href: "/products/fresh-cream-cake/white-forest-elite-cake",
  },
];

export default function FreshCreamCakeSection() {
  return (
    // Main Section - Fresh Cream Cake Section
    <section id="fresh-cream-cake-section">
      {/* Container Section */}
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-6 md:py-8 lg:py-10">
        <div className="space-y-10">
          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">Fresh Cream Cake</h1>
            <div className="h-[2px] w-10 bg-primary"></div>
          </div>

          {/* List the Cakes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {FRESH_CREAM_CAKES.map((fresh_cream_cake) => (
              <ProductCard
                key={fresh_cream_cake.id}
                name={fresh_cream_cake.name}
                image={fresh_cream_cake.image}
                price={fresh_cream_cake.price}
                href={fresh_cream_cake.href}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <a
              href="#"
              className="bg-primary/80 hover:bg-primary py-3 px-5 rounded-full text-white"
            >
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
