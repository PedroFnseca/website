import Hero from "./components/Hero";
import WearYourStory from "./components/WearYourStory";
import FeatureCarousel from "./components/FeatureCarousel";
import PortfolioGrid from "./components/PortfolioGrid";
import Timeline from "./components/Timeline";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <WearYourStory />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
    </>
  );
}
