"use client"
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Headline from "./Headline";
import VisiMisi from "./VisiMisi";
import Team from "./Team";
import Why from "./Why";
import How from "./How";
import FooterSection from "@/components/FooterSection";

export default function  About() {
  return (
    <div className="bg-slate-50 w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Headline />
      <VisiMisi />
      <Team />
      <Why />
      <How />

      <FooterSection />
    </div>
  );
}