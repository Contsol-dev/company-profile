"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/mobile-app-development.jpg";

export default function MobileAppDevelopment() {
  const accordionData = [
    {
      title: "Our team has 3+ years of mobile development expertise",
      content:
        "With over three years of experience, our mobile development team is ready to deliver applications that meet industry standards and user expectations.",
    },
    {
      title:
        "We develop mobile apps in 30-90 days, with faster options available",
      content:
        "We can develop mobile applications within 30 to 90 days, with the potential for faster delivery based on the deadlines you provide and the desired features and complexity.",
    },
    {
      title:
        "Choose platform and feature-based pricing tailored to your business",
      content:
        "Choose from our flexible pricing models—platform and feature-based pricing—that are tailored to your business needs.",
    },
    {
      title: "No extra fees for minor updates in the first 3 months",
      content:
        "Cont Solutions does not charge additional fees for minor updates during the first three months post-launch.",
    },
    {
      title:
        "We offer free revisions and fixes if the app doesn't meet your requirements",
      content:
        "If the application does not meet your requirements, we offer revisions and fixes at no extra cost within the agreed period.",
    },
    {
      title: "Our Project Managers ensure flawless performance before launch",
      content:
        "Our Project Managers will ensure your application is thoroughly tested and performs flawlessly before market launch.",
    },
    {
      title:
        "Our team creates high-performance, user-friendly apps for a competitive edge",
      content:
        "Our team is skilled in creating high-performance, user-friendly mobile applications, ensuring your app stands out in a competitive market.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-10"></div>
      <HeadlineSection
        title="Mobile App Development"
        subhead1="Looking to Turn Your Ideas into Innovative and User-Friendly Mobile Apps?"
        subhead2=""
        caption="Our mobile application development services offer solutions for Android platforms, designed to deliver an optimal user experience. We focus on quality, performance, and intuitive design, ensuring your mobile app is both attractive and functional. Choose our mobile application development services for modern and effective solutions."
        photo={photo}
        button1="Create Your Mobile App"
        button2="Platform Consultation"
      />
      <HireSection accordionData={accordionData} />
      <FooterSection />
    </>
  );
}
