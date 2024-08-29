import React, { useState } from "react";
import Image from "next/image";
import iconCPU from "@/assets/icons/ic_cpu.png";
import iconMobile from "@/assets/icons/ic_mobile_app.png";
import iconTraining from "@/assets/icons/ic_it_training.png";
import iconNetwork from "@/assets/icons/ic_router.png";
import iconWebsite from "@/assets/icons/ic_website.png";
import iconAI from "@/assets/icons/ic_artificial_intelligence.png";
import iconLaptop from "@/assets/icons/ic_laptop.png";
import iconService from "@/assets/icons/ic_service.png";
import iconDesign from "@/assets/icons/ic_design.png";
import iconPhoto from "@/assets/icons/ic_photo.png";
import iconLogo from "@/assets/icons/ic_logo.png";
import iconSocmed from "@/assets/icons/ic_socmed.png";
import iconVideo from "@/assets/icons/ic_video.png";

const itServices = [
  {
    icon: iconTraining,
    title: "IT Manpower Sharing",
    description: "Providing skilled IT professionals for your projects.",
  },
  {
    icon: iconLaptop,
    title: "Product Development",
    description: "End-to-end product development services tailored to your needs.",
  },
  {
    icon: iconWebsite,
    title: "Website Development",
    description: "Building responsive and engaging websites to enhance your online presence.",
  },
  {
    icon: iconMobile,
    title: "Mobile App Development",
    description: "Creating high-performance mobile apps for various platforms.",
  },
  {
    icon: iconService,
    title: "IoT Development",
    description: "Developing innovative IoT solutions to connect your devices seamlessly.",
  },
  {
    icon: iconCPU,
    title: "Data Analysis",
    description: "Transforming raw data into valuable insights for informed decision-making.",
  },
  {
    icon: iconNetwork,
    title: "Network Installation",
    description: "Setting up robust and secure networks for your business.",
  },
  {
    icon: iconAI,
    title: "AI Development",
    description: "Implementing AI solutions to automate processes and enhance efficiency.",
  },
  {
    icon: iconDesign,
    title: "UI / UX Design",
    description: "Crafting user-friendly interfaces and enhancing user experiences.",
  },
];

const creativeServices = [
  {
    icon: iconLogo,
    title: "Logo Design",
    description: "Creating unique and memorable logos that define your brand.",
  },
  {
    icon: iconSocmed,
    title: "Social Media Management",
    description: "Managing your social media presence to engage and grow your audience.",
  },
  {
    icon: iconPhoto,
    title: "Photo Production",
    description: "Professional photography services to showcase your products or services.",
  },
  {
    icon: iconVideo,
    title: "Video Ads Production",
    description: "Creating compelling video ads to promote your brand and products.",
  },
];

const ServicesSection = () => {
  const [selectedSection, setSelectedSection] = useState("IT Solutions");

  const services = selectedSection === "IT Solutions" ? itServices : creativeServices;

  return (
    <section className="py-12 bg-cont-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setSelectedSection("IT Solutions")}
            className={`px-4 py-2 text-xl font-semibold transition-colors duration-300 ${selectedSection === "IT Solutions" ? "text-cont-secondary border-b-2 border-cont-secondary" : "text-white"}`}
          >
            IT Solutions
          </button>
          <button
            onClick={() => setSelectedSection("Creative Studio")}
            className={`ml-8 px-4 py-2 text-xl font-semibold transition-colors duration-300 ${selectedSection === "Creative Studio" ? "text-cont-secondary border-b-2 border-cont-secondary" : "text-white"}`}
          >
            Creative Studio
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-white rounded-lg shadow-lg p-6 filter-white flex flex-col items-center bg-opacity-0 transition-transform duration-150 transform hover:bg-white hover:text-cont-primary hover:scale-105 hover:filter-none"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h5 className="text-lg font-semibold mb-2">{service.title}</h5>
              <p className="text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
