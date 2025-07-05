import React from "react";
import CartItemListSection from "./sections/CartItemListSection";
import SummaryCardSection from "./sections/SummaryCardSection";

export default function CartPage() {
  return (
    <section id="cart">
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-6 md:py-8 lg:py-10">
        <div className="space-y-5">
          {/* Headng */}
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">SHOPPING CART</h1>
            <div className="h-[2px] w-10 bg-primary"></div>
          </div>

          {/* Wrap Items and Summary card Sections*/}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items Section */}
            <div className="w-full lg:w-[75%]">
              <CartItemListSection />
            </div>

            {/* Summary Card Section */}
            <div className="w-full lg:w-[25%]">
              <SummaryCardSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
