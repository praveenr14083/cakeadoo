import React from "react";

export function ProductCard({ name, image, price, href }) {
  return (
    <div className="shadow-xl space-y-1 bg-white">
      {/* Image */}
      <a href={href} className="flex justify-center items-center">
        <img className="w-full object-contain" src={image} alt={name} />
      </a>

      {/* Product Details and Cart Button */}
      <div className="space-y-2 p-6">
        <h1 className="text-lg font-semibold text-primary">{name}</h1>
        <p className="text-gray-700 font-medium">Rs. {price}</p>
        <a
          href={href}
          className="block w-full text-center bg-primary/80 hover:bg-primary text-white px-4 py-2 rounded-lg transition"
        >
          Add To Cart
        </a>
      </div>
    </div>
  );
}
