import Hero from "./components/Hero";
import Esp32HttpClientShowcase from "./components/Esp32HttpClientShowcase";
import FeaturedCases from "./components/FeaturedCases";
import PortfolioGrid from "./components/PortfolioGrid";
import Timeline from "./components/Timeline";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Esp32HttpClientShowcase />
      <FeaturedCases />
      <PortfolioGrid />
      <Timeline />
      <AboutSection />
      <Contact />
    </>
  );
}
