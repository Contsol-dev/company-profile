"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/product-development.jpg";

export default function UiUxDesign() {
  const accordionData = [
    {
      title: "Our team has 3+ years of UI/UX design experience.",
      content:
        "With over three years of experience, our UI/UX design team boasts a portfolio across various industries, ensuring designs tailored to your target audience.",
    },
    {
      title: "We complete designs in 7-30 days, tailored to your needs.",
      content:
        "We can complete UI/UX design projects within 7 to 30 days, depending on complexity and specific needs.",
    },
    {
      title: "Choose page or feature-based pricing to fit your project.",
      content:
        "Choose from our flexible pricing models—page or feature-based pricing—that are customized to fit your project's requirements and budget.",
    },
    {
      title: "No extra fees for minor revisions during development.",
      content:
        "Cont Solutions does not charge additional fees for minor design revisions during the development process.",
    },
    {
      title: "We offer unlimited revisions until you're satisfied.",
      content:
        "If the design results do not meet your expectations, we offer revisions until you are satisfied with the final outcome.",
    },
    {
      title: "Our Project Managers ensure a seamless design process.",
      content:
        "Our Project Managers will ensure that every design element is carefully considered, delivering an optimal user experience.",
    },
    {
      title:
        "Our team merges aesthetics and functionality for optimal user experience.",
      content:
        "Our team excels in merging aesthetics and functionality, ensuring your design not only looks great but also performs well.",
    },
  ];

  return (
    <>
      <Navbar />
      <HeadlineSection
        title="UI/UX Design"
        subhead1="Looking to Create an Engaging and Intuitive User Experience?"
        subhead2=""
        caption="Our UI/UX design services focus on crafting aesthetically pleasing and user-friendly interfaces that enhance user satisfaction and engagement. We design solutions that are not only beautiful but also functional and easy to use. Choose our UI/UX design services for solutions that blend art and science in your digital experience."
        photo={photo}
        button1="Design Your UI/UX"
        button2="Design Consultation"
      />
      <HireSection accordionData={accordionData} />
      <FooterSection />
    </>
  );
}
