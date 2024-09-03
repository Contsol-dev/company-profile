"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/website-development.jpg";

export default function WebsiteDevelopment() {
  const accordionData = [
    {
      title: "Our team has 3+ years of web development expertise",
      content:
        "With over three years of expertise, our website development team is ready to deliver results that exceed your expectations.",
    },
    {
      title: "We complete websites in 14-30 days, with faster delivery options",
      content:
        "We can complete website development projects in 14 to 30 days, with the possibility of faster delivery based on the time you provide, depending on the complexity and functional requirements.",
    },
    {
      title: "Choose feature-based pricing tailored to your needs",
      content:
        "Choose from our flexible pricing models—feature-based pricing—customized to your specific needs.",
    },
    {
      title: "No extra fees for minor design changes during development",
      content:
        "Cont Solutions does not charge additional fees for minor design changes during the development process.",
    },
    {
      title: "We offer unlimited revisions until you're satisfied",
      content:
        "If the website does not meet your expectations, we offer revisions until you are satisfied with the final result.",
    },
    {
      title: "Our Project Managers ensure smooth development at every stage",
      content:
        "Our Project Managers will ensure that each stage of development runs smoothly and according to the agreed plan.",
    },
    {
      title: "Our team ensures optimal website performance on all devices",
      content:
        "Our team is skilled in various modern web technologies, ensuring your website performs optimally across different devices.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-10"></div>
      <HeadlineSection
        title="Website Development"
        subhead1="Looking to Build an Engaging and Professional Online Presence?"
        subhead2="Want to Develop a Management Website to Streamline Your Business?"
        caption="Our website development services provide effective and visually appealing solutions tailored to your business needs. We focus on responsive and optimized design, ensuring an outstanding user experience. Choose our website development services to create a site that aligns with your vision and objectives."
        photo={photo}
        button1="Build Your Website"
        button2="Website Consultation"
      />
      <HireSection accordionData={accordionData} />
      <FooterSection />
    </>
  );
}
