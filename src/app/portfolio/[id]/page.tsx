"use client";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PortfolioComponent from "@/components/portfolio/ui/PortfolioDetails";

export default function PortfolioPage() {
  return (
    <div>
      <Navbar />
      <div className="h-[4rem]"></div>
      <PortfolioComponent />
      <FooterSection />
    </div>
  )
}
