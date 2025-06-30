import React from "react";

export default function QuickLinks({ heading, links = [] }) {
  return (
    <div className="space-y-3">
      {/* Heading */}
      <div className="space-y-1">
        <h1 className="text-white">{heading}</h1>
        <div className="h-[2px] w-10 bg-primary"></div>
      </div>

      {/* Links */}
      <div>
        <ul className="space-y-2">
          {links.map((link) => (
            <li
              key={link.id}
              className="hover:text-primary hover:translate-x-1 transition-all duration-200"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
