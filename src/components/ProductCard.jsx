import React from "react";

export function ProductCard({ name, image, price, href }) {
  return (
    <div className="shadow-xl bg-white flex flex-col gap-1 justify-between">
      {/* Image */}
      <a href={href} className="flex justify-center items-center">
        <img className="w-full object-contain" src={image} alt={name} />
      </a>

      {/* Product Details and Cart Button */}
      <div className="space-y-2 p-6">
        <h1 className="text-lg font-semibold text-primary">{name}</h1>
        <div className="flex gap-3">
          <p className="text-gray-500 font-light line-through">
            Rs. {price + 50}
          </p>
          <p className="text-orange-400 font-semibold">Rs. {price}</p>
        </div>

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
