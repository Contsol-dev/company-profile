"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "./HeadlineSection";
import HireSection from "./HireSection";
import PricingSection from "./PricingSection";

export default function LogoDesign() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeadlineSection />
      <HireSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
}
