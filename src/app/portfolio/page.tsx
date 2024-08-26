"use client";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import CreativeSection from "@/components/portfolio/CreativeSection";
import DevelopmentSection from "@/components/portfolio/DevelopmentSection";
import Hero from "@/components/portfolio/Hero";

export default function PortfolioIndexPage() {
  return (
    <div>
      <Navbar />
      <div className="h-[4rem]"></div>
      <Hero />
      <DevelopmentSection />
      <CreativeSection />
      <FooterSection/>
    </div>
  );
}
