import React from "react";

export function SummaryCard() {
  return (
    <div className="w-full border border-gray-300 rounded p-4 space-y-3">
      {/* Title */}
      <h1 className="text-lg font-semibold">Order Summary</h1>

      {/* Pricing details */}
      <div className="space-y-2">
        {/* Item total */}
        <div className="flex justify-between">
          <p>Items (3)</p>
          <p>Rs. 100</p>
        </div>

        {/* Shipping cost */}
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>Free</p>
        </div>
      </div>

      {/* Divider line */}
      <hr className="text-gray-300" />

      {/* Grand total */}
      <div className="flex justify-between">
        <p className="font-bold text-gray-700">Total</p>
        <p className="text-orange-500 font-semibold">Rs.100</p>
      </div>

      {/* Checkout button */}
      <button className="bg-primary hover:bg-primary/90 text-white p-2 w-full rounded">
        Proceed to Checkout
      </button>

      {/* Continue shopping button */}
      <button className="bg-white hover:bg-gray-300/20 border border-gray-300 p-2 w-full rounded">
        Continue Shopping
      </button>
    </div>
  );
}
