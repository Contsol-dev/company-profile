"use client"
import AboutSection from "@/components/home/AboutSection";
import HeadlineSection from "@/components/home/HeadlineSection";
import Navbar from "@/components/Navbar";
import { NavbarWithMegaMenu } from "@/components/ui/MegaMenu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeadlineSection/>
      <AboutSection/>
    </div>
  );
}
