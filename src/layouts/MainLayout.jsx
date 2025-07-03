import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
