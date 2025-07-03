import { Footer } from "../../layouts/Footer/Footer";
import { Navbar } from "../../layouts/Navbar/Navbar";
import { AboutSection } from "./section/AboutSection";
import { CustomerReviewSection } from "./section/CustomerReviewSection";
import FreshCreamCakeSection from "./section/FreshCreamCakeSection";
import { HeroSection } from "./section/HeroSection";
import OurOrderOptions from "./section/OurOrderOptionsSection";
import { PieceCakeSection } from "./section/PieceCakeSection";
import { PopularSection } from "./section/PopularSection";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <PopularSection />
      <FreshCreamCakeSection />
      <PieceCakeSection />
      <CustomerReviewSection />
      <OurOrderOptions />
      {/* <Footer /> */}
    </>
  );
}
