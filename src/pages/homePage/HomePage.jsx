import { Navbar } from "../../layouts/Navbar/Navbar";
import { AboutSection } from "./section/AboutSection";
import { CustomerReviewSection } from "./section/CustomerReviewSection";
import { HeroSection } from "./section/HeroSection";
import { PopularSection } from "./section/PopularSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PopularSection />
      <CustomerReviewSection />
    </>
  );
}
