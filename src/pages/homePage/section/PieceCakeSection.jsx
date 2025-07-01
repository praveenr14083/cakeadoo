import React from "react";
import { ProductCard } from "../../../components/ProductCard";

const PIECE_CAKES = [
  {
    id: 1,
    name: "American Brownie",
    image: "/assets/images/cakes/piece-cake/american-brownie.jpg",
    price: 80,
    href: "/products/piece-cake/american-brownie",
  },
  {
    id: 2,
    name: "Banana Cake",
    image: "/assets/images/cakes/piece-cake/banana-cake.jpg",
    price: 70,
    href: "/products/piece-cake/banana-cake",
  },
  {
    id: 3,
    name: "Brownies",
    image: "/assets/images/cakes/piece-cake/brownies.jpg",
    price: 90,
    href: "/products/piece-cake/brownies",
  },
  {
    id: 4,
    name: "Cup Cake",
    image: "/assets/images/cakes/piece-cake/cup-cake.jpg",
    price: 50,
    href: "/products/piece-cake/cup-cake",
  },
  //   {
  //     id: 5,
  //     name: "Doughnut",
  //     image: "/assets/images/cakes/piece-cake/doughnut.jpg",
  //     price: 60,
  //     href: "/products/piece-cake/doughnut",
  //   },
  //   {
  //     id: 6,
  //     name: "Marble Cake",
  //     image: "/assets/images/cakes/piece-cake/marble-cake.jpg",
  //     price: 85,
  //     href: "/products/piece-cake/marble-cake",
  //   },
  //   {
  //     id: 7,
  //     name: "Nut Cake",
  //     image: "/assets/images/cakes/piece-cake/nut-cake.jpg",
  //     price: 90,
  //     href: "/products/piece-cake/nut-cake",
  //   },
  //   {
  //     id: 8,
  //     name: "Nut Fancy Cake",
  //     image: "/assets/images/cakes/piece-cake/nut-fancy-cake.jpg",
  //     price: 95,
  //     href: "/products/piece-cake/nut-fancy-cake",
  //   },
  //   {
  //     id: 9,
  //     name: "Paper Cake",
  //     image: "/assets/images/cakes/piece-cake/paper-cake.jpg",
  //     price: 55,
  //     href: "/products/piece-cake/paper-cake",
  //   },
  //   {
  //     id: 10,
  //     name: "Pineapple Cake",
  //     image: "/assets/images/cakes/piece-cake/pineapple-cake.jpg",
  //     price: 75,
  //     href: "/products/piece-cake/pineapple-cake",
  //   },
  //   {
  //     id: 11,
  //     name: "Pudding Cake",
  //     image: "/assets/images/cakes/piece-cake/pudding-cake.jpg",
  //     price: 85,
  //     href: "/products/piece-cake/pudding-cake",
  //   },
  //   {
  //     id: 12,
  //     name: "White Chocolate Brownie",
  //     image: "/assets/images/cakes/piece-cake/white-chocolate-brownie.jpg",
  //     price: 100,
  //     href: "/products/piece-cake/white-chocolate-brownie",
  //   },
];

export function PieceCakeSection() {
  return (
    // Main Section - Piece Cake Section
    <section id="piece-cake-section">
      {/* Container Section */}
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-6 md:py-8 lg:py-10">
        <div className="space-y-10">
          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">PIECE CAKE</h1>
            <div className="h-[2px] w-10 bg-primary"></div>
          </div>

          {/* List the Cakes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {PIECE_CAKES.map((piece_cake) => (
              <ProductCard
                key={piece_cake.id}
                name={piece_cake.name}
                image={piece_cake.image}
                price={piece_cake.price}
                href={piece_cake.href}
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
