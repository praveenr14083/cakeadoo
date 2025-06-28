import { Navbar } from "../../layouts/Navbar/Navbar";
import { AboutSection } from "./section/AboutSection";
import { HeroSection } from "./section/HeroSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </>
  );
}
