import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Games from "./components/Games";
import Certificate from "./components/Certificate";
import BusinessBanner from "./components/BusinessBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0B0620] text-white">
      <Navbar />
      <Hero />
      <Carousel />
      <Games />
      <Certificate />
      <BusinessBanner />
      <Contact />
      <Footer />
    </div>
  );
}
