import React from "react";
import { Star } from "lucide-react";

const colors = [
  {
    cardColor: "bg-blue-500/60",
    btnClor: "bg-blue-500",
  },
  {
    cardColor: "bg-pink-500/60",
    btnClor: "bg-pink-500",
  },
  {
    cardColor: "bg-violet-500/60",
    btnClor: "bg-violet-500",
  },
  {
    cardColor: "bg-green-500/60",
    btnClor: "bg-green-500",
  },
];

export function PopularCard({
  index,
  title,
  imageSrc,
  imageAlt,
  price,
  onAddToCart,
  star,
}) {
  const totalStars = 5;
  const colorStyle = colors[index % colors.length];

  return (
    <div
      className={`p-5 ${index % 2 === 0 ? "lg:mt-15" : ""} ${
        colorStyle.cardColor
      }
      w-full max-w-[250px] h-[350px] flex flex-col items-center justify-between rounded-2xl`}
    >
      {/* Heading */}
      <div className="w-full">
        <h1 className="text-start text-lg font-semibold text-white">{title}</h1>
        <div className="h-[1px] w-10 bg-white"></div>
      </div>

      {/* Product Image */}
      <img
        src={imageSrc}
        alt={imageAlt || "Product Image"}
        className="w-full max-w-[180px] h-auto object-contain"
      />

      {/* Rating and Price */}
      <div className="w-full flex flex-col gap-2">
        <div className="flex gap-2 justify-center mb-1">
          {Array.from({ length: totalStars }, (_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < star ? "fill-yellow-500 text-yellow-500" : "text-yellow-500"
              }`}
            />
          ))}
        </div>
        <p className="text-center text-lg font-semibold text-white">
          Rs. {price}
        </p>
      </div>

      {/* Add to Cart Btn */}
      <div className="w-full">
        <button
          className={`w-full ${colorStyle.btnClor} text-white p-2 rounded-xl`}
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
