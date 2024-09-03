"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/application-development.jpg";

export default function ApplicationDevelopment() {
  const accordionData = [
    {
      title:
        "Our team has 3+ years of app development expertise across platforms",
      content:
        "With over three years of experience, our application development team possesses expertise across various platforms and technologies.",
    },
    {
      title: "We develop apps in 30-60 days, with faster options available",
      content:
        "We can develop your application in 30 to 60 days, with the potential for faster delivery by adjusting deadlines to match project complexity and functional requirements.",
    },
    {
      title: "Choose feature and module-based pricing, tailored to your budget",
      content:
        "Choose from our flexible pricing models—feature and module-based pricing—that can be customized to fit your budget and project needs.",
    },
    {
      title: "No extra fees for minor maintenance in the first 3 months",
      content:
        "Cont Solutions does not charge additional fees for minor maintenance during the first three months after application launch.",
    },
    {
      title:
        "We offer free repairs and enhancements if the app doesn't meet expectations",
      content:
        "If the application does not meet your expectations, we offer free repairs and enhancements within the agreed period.",
    },
    {
      title:
        "Our Project Managers ensure precise development and thorough testing",
      content:
        "Our Project Managers will ensure that the application is developed according to specifications and thoroughly tested before launch.",
    },
    {
      title: "Our team integrates complex features for scalable app growth",
      content:
        "Our team excels in integrating complex features, ensuring your application can grow alongside your business.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-10"></div>
      <HeadlineSection
        title="Application Development"
        subhead1="Struggling to Find the Right Application Solution for Your Business Needs?"
        subhead2=""
        caption="Our application development services offer solutions tailored to your specific needs, whether for internal corporate applications or consumer-facing apps. We prioritize performance, security, and scalability in every development, ensuring your application runs smoothly and meets business objectives. Choose our application development services for reliable and effective solutions."
        photo={photo}
        button1="Develop Your Application"
        button2="Application Consultation"
      />
      <HireSection accordionData={accordionData} />
      <FooterSection />
    </>
  );
}
