import React from "react";
const ORDER_OPTIONS = [
  {
    id: 1,
    image: "/assets/images/delivery-method/store-pickup.png",
    title: "IN-STORE PICKUP",
    description: "Pick up as early as 8AM.",
  },
  {
    id: 2,
    image: "/assets/images/delivery-method/food-delivery.png",
    title: "LOCAL DELIVERY",
    description: "We'll bring it to you in Nagercoil",
  },
  {
    id: 3,
    image: "/assets/images/delivery-method/lorry.png",
    title: "SHOPPING NATIONWIDE",
    description: "Fresh traditional snacks delivered nationwide!",
  },
  {
    id: 4,
    image: "/assets/images/delivery-method/shoping-cart.png",
    title: "ONLINE ORDER",
    description: "Enjoy secure and safe online shopping for every order!",
  },
];

export default function OurOrderOptionsSection() {
  return (
    // Main Section - Our Order Options Section
    <section id="order-options-section">
      {/* Container Section */}
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-6 md:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:bg-primary/20 rounded-2xl p-6 gap-6">
          {/* Wrap Image and Content */}
          {ORDER_OPTIONS.map((option) => (
            <div
              key={option.id}
              className="flex gap-4 lg:pr-3 lg:border-r-1 border-r-white last:lg:border-r-0"
            >
              {/* Image */}
              <div className="flex items-center justify-start">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-auto h-16 object-cover "
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 justify-center ">
                <h1 className="text-gray-800 font-bold">{option.title}</h1>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
