import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Games from "./components/Games";
import Certificate from "./components/Certificate";

export default function Home() {
  return (
    <div className="bg-[#0B0620]">
      <Navbar />
      <Hero />
      <Carousel />
      <Games />
      <Certificate />
    </div>
  );
}
