"use client"
import AboutSection from "@/components/home/AboutSection";
import HeadlineSection from "@/components/home/HeadlineSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-white">Kontol</h1>
      <HeadlineSection/>
      <AboutSection/>
    </div>
  );
}
