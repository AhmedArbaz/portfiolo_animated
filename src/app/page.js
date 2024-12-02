import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container py-4 px-12 mt-24 mx-auto">
      <Navbar/>
      <HeroSection/>
      </div>
    </main>
    
  );
}
