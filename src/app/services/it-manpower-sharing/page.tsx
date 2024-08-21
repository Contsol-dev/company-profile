"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import HeadlineSection from "./HeadlineSection";
import WhySection from "./WhySection";
import Image from "next/image";
import Gkd from "../../../assets/logo-gkd.jpg";
import Dlhk from "../../../assets/logo-dlhk.png";
import ClientSection from "./ClientSection";
import ExpertSection from "./ExpertSection";
import HireSection from "./HireSection";
import TechSection from "./TechSection";
import FooterSection from "@/components/FooterSection";

export default function ITManpowerSharing() {
  return (
    <>
      <Navbar />
      <HeadlineSection />
      <WhySection />
      <hr />
      <ClientSection />
      <ExpertSection />
      <hr />
      <HireSection />
      <hr />
      <TechSection />
      <FooterSection />
    </>
  );
}
