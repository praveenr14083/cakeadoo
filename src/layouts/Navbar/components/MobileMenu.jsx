import React, { useState } from "react";
import { NAV_ITEMS } from "../../../utils/constants";
import { ChevronUp, ChevronDown } from "lucide-react";

// Mobile navigation menu with dropdown support
export function MobileMenu({ setIsMobileMenuOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const handleDropdown = (id) => {
    // Toggle dropdown open/close based on clicked item
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <nav className="md:hidden block w-full absolute top-17 h-[calc(100dvh-68px)] left-0 bg-white scroll-y-auto z-50">
      <div className="px-4 sm:px-6 lg:px-8 2xl:px-24 py-4">
        <ul className="flex flex-col gap-4">
          {/* Loop through all nav items */}
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              {/* If item doesn't have a dropdown, render a simple link */}
              {!item.dropDown ? (
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  className="hover:text-primary"
                >
                  {item.name}
                </a>
              ) : (
                // If item has dropdown menu
                <div>
                  <button
                    onClick={() => handleDropdown(item.id)} // Toggle dropdown
                    className="flex items-center justify-between w-full"
                  >
                    <span>{item.name}</span>
                    {/* Show icon depending on open/closed state */}
                    <span>
                      {openDropdown === item.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {/* Render dropdown if current item is open */}
                  {openDropdown === item.id && (
                    <ul className="mt-4 w-full flex flex-col gap-2 bg-primary/20 p-2 rounded">
                      {item.dropDown.map((subItem, i) => (
                        <li
                          key={i}
                          className="w-full py-2 px-4 rounded hover:bg-primary/21"
                        >
                          <a
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)} // Close on sub-link click
                            className="text-black/80"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
