import { useState, useRef } from "react";

export function ProductDetailsSection() {
  // Track if mouse is hovering over image
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse position for magnifier
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track quantity value
  const [quantity, setQuantity] = useState(1);

  // Reference to image element
  const imageRef = useRef(null);

  const imageUrl = "/assets/images/cakes/piece-cake/cup-cake.jpg";

  // Show magnifier on hover
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Hide magnifier when leaving
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Update mouse position for magnifier
  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = Math.max(
        0,
        Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
      );
      const y = Math.max(
        0,
        Math.min(100, ((e.clientY - rect.top) / rect.height) * 100)
      );
      setMousePosition({ x, y });
    }
  };

  // Increment quantity
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrement quantity (minimum 1)
  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // Handle direct input change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <section>
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-6 md:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image with magnifier */}
          <div className="flex justify-center relative">
            <div
              ref={imageRef}
              className="relative lg:cursor-crosshair"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <img
                src={imageUrl || "/placeholder.svg"}
                alt="Delicious Cupcake"
                className="w-full h-auto object-contain rounded"
              />

              {/* Magnifying glass overlay */}
              {isHovering && (
                <div
                  className="hidden lg:block absolute border-1 border-primary shadow-lg pointer-events-none rounded-full bg-primary/20"
                  style={{
                    width: "120px",
                    height: "120px",
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: "translate(-50%, -50%)",
                    backdropFilter: "blur(1px)",
                  }}
                />
              )}
            </div>

            {/* Magnified view */}
            {isHovering && (
              <div className="absolute left-full ml-6 top-0 w-100 h-100 border-2 border-gray-300 bg-white shadow-2xl overflow-hidden z-10 hidden lg:block rounded-lg">
                <div
                  className="w-full h-full bg-no-repeat"
                  style={{
                    backgroundImage: `url('${imageUrl}')`,
                    backgroundSize: "250%",
                    backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                  }}
                />
              </div>
            )}
          </div>

          {/* Product details */}
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-primary">
              Premium Vanilla Cupcake
            </h1>

            {/* Price */}
            <div className="flex gap-3">
              <p className="text-2xl text-gray-500 font-light line-through">
                Rs. {150}
              </p>
              <p className="text-2xl text-orange-500 font-semibold">
                Rs. {120}
              </p>
            </div>

            {/* Size selection */}
            <div className="inline-flex flex-col gap-2">
              <h1>Size</h1>
              <button className="text-white bg-primary p-3 rounded">
                Regular Size
              </button>
              <a className="text-gray-500 font-light underline" href="#">
                Clear
              </a>
            </div>

            {/* Quantity selector */}
            <div className="flex gap-2">
              <button
                className="bg-gray-200 text-2xl size-12 hover:bg-gray-300 transition-colors"
                onClick={handleDecrement}
              >
                -
              </button>
              <input
                className="w-30 border-1 border-gray-300 px-3  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                value={quantity}
                min={1}
                onChange={handleQuantityChange}
              />
              <button
                className="bg-gray-200 text-2xl size-12 hover:bg-gray-300 transition-colors"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>

            <button className="bg-primary hover:bg-primary/90 p-3 text-white rounded-lg transition-colors">
              Add to Cart
            </button>

            {/* Category */}
            <div className="flex gap-2">
              <p>Category:</p>
              <a className="text-primary hover:underline" href="#">
                Cupcakes & Desserts
              </a>
            </div>

            {/* Features */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Product Features:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Freshly baked vanilla cupcake</li>
                <li>• Rich buttercream frosting</li>
                <li>• Made with premium ingredients</li>
                <li>• Perfect for celebrations</li>
                <li>• Same-day delivery available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
