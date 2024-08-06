"use client"
import AboutSection from "@/components/home/AboutSection";
import PortofolioSection from "@/components/home/PortofolioSection";
import HeadlineSection from "@/components/home/HeadlineSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ServicesSection from "@/components/home/ServiceSection";
import FaqSection from "@/components/home/FaqSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeadlineSection/>
      <AboutSection/>
      <ServicesSection/>
      <PortofolioSection/>
      <FaqSection/>
      <FooterSection/>
    </div>
  );
}
