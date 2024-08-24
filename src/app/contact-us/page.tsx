"use client"
import Navbar from "@/components/Navbar"
import Form from "./Form"

export default function Contact() {
  return(
    <div className="
        bg-slate-50 w-screen overflow-x-hidden"
    >
      <Navbar />
      <div className="p-4 lg:px-16 lg:py-8 min-h-screen overflow-hidden flex flex-col justify-start gap-4">
        <h1 className="font-extrabold text-4xl lg:text-5xl text-cont-primary mt-20">Contact Us</h1>
        <p className="text-black">For more information, please contact us using the form below.</p>
        <Form />
      </div>
    </div>
  )
}