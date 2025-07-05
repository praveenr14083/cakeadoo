import React, { useState } from "react";
import { Cake, ShoppingCart, X, ChevronDown, ChevronUp } from "lucide-react";
import { RiMenu3Line } from "react-icons/ri";
import { MobileMenu } from "./components/MobileMenu";
import { NAV_ITEMS } from "../../utils/constants";
import { useNavigate, Link } from "react-router";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    // Main Section - Navbar
    <nav id="navbar" className="sticky top-0 z-25 bg-white">
      {/* Container Section */}
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-4">
        <div className="flex items-center justify-between">
          {/* Wrap Logo */}
          <div className="flex items-center gap-2">
            <Cake className="text-primary size-8" />
            <h1 className="text-xl text-primary font-bold">Cakeadoo</h1>
          </div>

          {/* Wrap Nav Items */}
          <div className="hidden md:flex md:gap-8 md:items-center">
            <ul className="flex gap-10">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="relative group">
                  <Link
                    to={item.href}
                    className="font-semibold hover:text-primary flex items-center gap-1"
                  >
                    {item.name}
                    {item.dropDown && Array.isArray(item.dropDown) && (
                      <>
                        <ChevronDown className="size-4 group-hover:hidden" />
                        <ChevronUp className="size-4 hidden group-hover:block" />
                      </>
                    )}
                  </Link>

                  {item.dropDown && Array.isArray(item.dropDown) && (
                    <div className="absolute -right-25 pt-8 ">
                      <ul className="w-52 p-2 flex-col gap-1 rounded-xl bg-white shadow-xl z-50 hidden group-hover:flex">
                        {item.dropDown.map((subItem) => (
                          <li
                            key={subItem.id}
                            className="p-2 hover:bg-primary/20 hover:text-primary/90 rounded border-b-primary"
                          >
                            <a href={`#${subItem.id}`}>{subItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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

              <button
                onClick={() => navigate("/cart")}
                className="rounded p-2 bg-primary hover:bg-primary/90 "
              >
                <ShoppingCart className="text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex gap-5 items-center">
            <button
              onClick={() => navigate("/cart")}
              className="block md:hidden hover:text-primary"
            >
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
      </div>

      {/* Mobile Menu Icon */}
      {isMobileMenuOpen && (
        <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
    </nav>
  );
}
