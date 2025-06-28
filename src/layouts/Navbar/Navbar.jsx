import React, { useState } from "react";
import { Cake, ShoppingCart, X } from "lucide-react";
import { RiMenu3Line } from "react-icons/ri";
import { MobileMenu } from "./components/MobileMenu";
import { NAV_ITEMS } from "../../utils/constants";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Navbar - Main Section
    <nav className="sticky top-0">
      <div className="px-4 sm:px-6 lg:px-8 2xl:px-24 py-4 flex items-center justify-between">
        {/* Wrap Logo */}
        <div className="flex items-center gap-2">
          <Cake className="text-primary size-8" />
          <h1 className="text-xl text-primary font-bold">Cakeadoo</h1>
        </div>

        {/* Wrap Nav Items */}
        <div className="hidden md:flex md:gap-8 md:items-center">
          <ul className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="font-semibold hover:text-primary">
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          {/* Wrap Contact & Cart */}
          <div className="flex gap-2">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 py-2 px-5 rounded text-white"
            >
              Contact Us
            </a>

            <button className="rounded p-2 bg-primary hover:bg-primary/90 ">
              <ShoppingCart className="text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex gap-5 items-center">
          <button className="block md:hidden hover:text-primary">
            <ShoppingCart />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="block md:hidden p-2 bg-primary hover:bg-primary/90 rounded"
          >
            {isMobileMenuOpen ? (
              <X className="size-5 text-white" />
            ) : (
              <RiMenu3Line className="size-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      {isMobileMenuOpen && (
        <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
    </nav>
  );
}
