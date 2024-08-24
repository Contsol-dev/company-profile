"use client"
import AboutSection from "@/app/home/AboutSection";
import PortofolioSection from "@/app/home/PortofolioSection";
import HeadlineSection from "@/app/home/HeadlineSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ServicesSection from "@/app/home/ServiceSection";
import FaqSection from "@/app/home/FaqSection";
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
