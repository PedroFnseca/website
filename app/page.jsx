import Hero from "./components/Hero";
import WearYourStory from "./components/WearYourStory";
import Esp32HttpClientShowcase from "./components/Esp32HttpClientShowcase";
import FeatureCarousel from "./components/FeatureCarousel";
import PortfolioGrid from "./components/PortfolioGrid";
import Timeline from "./components/Timeline";
import Marquee from "./components/Marquee";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WearYourStory />
      <Esp32HttpClientShowcase />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <Contact />
    </>
  );
}
