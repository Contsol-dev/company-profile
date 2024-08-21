"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "./HeadlineSection";
import HireSection from "./HireSection";

export default function AiDevelopment() {
  return (
    <>
      <Navbar />
      <HeadlineSection />
      <HireSection />
      <FooterSection />
    </>
  );
}
