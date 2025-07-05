import { Trash2 } from "lucide-react";
import React from "react";

export function CartItemCard() {
  return (
    <div className="w-full flex flex-col gap-4 border border-gray-300 p-4 rounded-lg">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        {/* Image + Product Info */}
        <div className="flex gap-4 items-center">
          <div className="size-25 flex items-center justify-center rounded overflow-hidden">
            <img
              className="w-full object-contain"
              src="/assets/images/cakes/piece-cake/banana-cake.jpg"
              alt="banana-cake"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-primary text-xl font-semibold">
              Chocolate Truffle Cake
            </h1>
            <div className="flex gap-3 items-center">
              <p className="text-gray-400 line-through text-sm">₹150</p>
              <p className="text-orange-500 font-semibold text-base">₹100</p>
            </div>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex gap-2 items-center">
          <div className="flex items-center h-12 gap-2 border border-gray-300 rounded px-2">
            <button className="size-8 hover:bg-gray-200 rounded text-lg">
              +
            </button>
            <p className="w-6 text-center">10</p>
            <button className="size-8 hover:bg-gray-200 rounded text-lg">
              −
            </button>
          </div>
          <button className="p-3 border border-gray-300 rounded text-red-500 hover:bg-red-500 hover:text-white">
            <Trash2 />
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex justify-end font-semibold text-gray-700">
        Subtotal: ₹1000
      </div>
    </div>
  );
}
