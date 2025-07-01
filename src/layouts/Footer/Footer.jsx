import React from "react";
import { Cake, Facebook, Instagram, Mail, Youtube } from "lucide-react";
import QuickLinks from "./components/QuickLinks";
import { QUICK_LINKS_DATA } from "./data/footerData";
import { POLICIES_DATA } from "./data/footerData";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    // Main Section - Footer
    <footer id="footer" className="bg-black text-gray-400">
      {/* Container Section */}
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-6 md:py-8 lg:py-10">
        <div className="space-y-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {/* Section 1 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Cake className="text-primary size-8" />
                <h1 className="text-xl text-primary font-bold">Cakeadoo</h1>
              </div>
              <p className="text-justify">
                Cakedoo began its journey with the rich aroma of festive plum
                cakes during Christmas and quickly became a beloved bakery. Over
                time, we’ve grown into a trusted name known for crafting
                delightful cakes, cookies, sweets, and more — all made with
                care, quality ingredients, and a passion for spreading happiness
                through every bite.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-white/20 text-white p-3 rounded-full hover:bg-blue-500"
                >
                  <Facebook />
                </a>

                <a
                  href="#"
                  className="bg-white/20 text-white p-3 rounded-full hover:bg-red-500"
                >
                  <Youtube />
                </a>

                <a
                  href="#"
                  className="bg-white/20 text-white p-3 rounded-full hover:bg-pink-500"
                >
                  <Instagram />
                </a>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-6">
              {/* Branches */}
              <div className="space-y-3">
                {/* Heading */}
                <div className="space-y-1">
                  <h1 className="text-white">Branches</h1>
                  <div className="h-[2px] w-10 bg-primary"></div>
                </div>

                {/* Branch Location 1 */}
                <div className="flex gap-2 items-center">
                  <MapPin className="text-xs text-white" />
                  <div>
                    <h1>Nagercoil</h1>
                    <p>629001</p>
                  </div>
                </div>

                {/* Branch Location 2 */}
                <div className="flex gap-2 items-center">
                  <MapPin className="text-xs text-white" />
                  <div>
                    <h1>Chennai</h1>
                    <p>600002</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Phone className="text-xs text-white" />
                  <p>+91 9876543210</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <h1 className="text-white">Online Orders</h1>
                  <div className="h-[2px] w-10 bg-primary"></div>
                </div>
                <div className="flex gap-2">
                  <Mail className="text-xs text-white" />
                  <p>cakeadoo@gmail.com</p>
                </div>
                <div className="flex gap-2">
                  <Phone className="text-xs text-white" />
                  <p>+91 9876543210</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <QuickLinks heading="Quick Links" links={QUICK_LINKS_DATA} />
            </div>

            <div>
              <QuickLinks heading="Policies" links={POLICIES_DATA} />
            </div>
          </div>

          {/* Copyright section */}
          <div className="flex flex-col md:flex-row text-center md:justify-between pt-8 border-t-1 gap-y-2">
            <p>
              Copyright © {new Date().getFullYear()} by Cakeadoo. All Rights
              Reserved.
            </p>
            <p>Design and Developed by Praveen</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
