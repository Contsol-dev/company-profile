"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSectionInvert";
import photo from "../../../assets/logo-design.jpg";
import PricingSection from "../components/PricingSection";

export default function LogoDesign() {
  const accordionData = [
    {
      title: "Our team has 3+ years of logo design experience",
      content:
        "With over three years of experience, our logo design team has developed visual identities for various types of businesses, from startups to large corporations.",
    },
    {
      title: "We complete logos in 7-14 days, with tailored revisions",
      content:
        "We can complete logo design projects within 7 to 14 days, with revisions tailored to your feedback.",
    },
    {
      title: "Choose concept and revision-based pricing to fit your budget",
      content:
        "Choose from our flexible pricing models—concept and revision-based pricing—that can be adjusted to fit your design budget and needs.",
    },
    {
      title: "No extra fees for minor revisions during the design process",
      content:
        "Cont Solutions does not charge additional fees for minor revisions during the design process.",
    },
    {
      title:
        "We offer free revisions until you're satisfied with the final result",
      content:
        "If the design does not align with your vision, we offer revisions at no extra cost until you are satisfied with the final result.",
    },
    {
      title:
        "Our Project Managers ensure your logo reflects your brand identity",
      content:
        "Our Project Managers will ensure that your logo design accurately reflects your brand identity, providing a strong visual impact.",
    },
    {
      title: "Our team creates logos that stand out in a competitive market",
      content:
        "Our team excels in creating logos that are both functional and aesthetic, ensuring your brand identity stands out in a competitive market.",
    },
  ];

  const packages = [
    {
      price: "500K",
      discount: "200K",
      benefit: [
        "One Logo Option",
        "High Resolution",
        "Multiple Formats (JPEG, PNG, PDF, CDR, Ai, EPS, etc.)",
        "Minor Revisions",
      ],
    },
    {
      price: "1000K",
      discount: "500K",
      benefit: [
        "Two Logo Options",
        "High Resolution",
        "Multiple Formats (JPEG, PNG, PDF, CDR, Ai, EPS, etc.)",
        "Two Major Revisions, Minor Revisions",
      ],
    },
    {
      price: "5000K",
      discount: "3000K",
      benefit: [
        "Four Logo Options",
        "Logo Philophy",
        "High Resolution",
        "Multiple Formats (JPEG, PNG, PDF, CDR, Ai, EPS, etc.)",
        "Major Revisions, Minor Revisions",
        "Mockups",
        "Logo Guidelines",
        "Video Animation",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-10"></div>
      <HeadlineSection
        title="Logo Design"
        subhead1="Looking to Create a Strong Visual Identity for Your Brand?"
        subhead2=""
        caption="Our logo design services provide creative and unique solutions that reflect your business values. We create logos that are easily recognizable and leave a lasting impression. Choose our logo design services for professional and meaningful solutions."
        photo={photo}
        button1="Create Your Logo"
        button2="Design Consultation"
      />
      <HireSection accordionData={accordionData} />
      <PricingSection packages={packages} />
      <FooterSection />
    </>
  );
}
