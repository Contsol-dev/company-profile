"use client"
import Navbar from "@/components/Navbar"
import Hero from "./Hero"
import Form from "./Form"

import FooterSection from "@/components/FooterSection"

export default function Contact() {
  return(
    <div className="bg-slate-50 w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Form />

      <FooterSection />
    </div>
  )
}