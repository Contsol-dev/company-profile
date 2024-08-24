"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/product-development.jpg";

export default function AiDevelopment() {
  const accordionData = [
    {
      title: "Our team has 3+ years of AI development experience",
      content:
        "With over three years of experience, our AI development team possesses expertise in various AI fields, including machine learning, NLP, and computer vision.",
    },
    {
      title: "We develop AI solutions in 30-90 days, based on complexity",
      content:
        "We can develop your AI solution within 30 to 90 days, depending on the project complexity and your specific needs.",
    },
    {
      title: "Choose algorithm complexity-based pricing to fit your budget",
      content:
        "Choose from our flexible pricing models—algorithm complexity-based pricing—that are designed to fit your budget and business goals.",
    },
    {
      title: "No extra fees for maintenance in the first 3 months",
      content:
        "Cont Solutions does not charge additional fees for maintenance and minor updates during the first three months post-implementation.",
    },
    {
      title: "We offer free adjustments and fixes within the agreed period",
      content:
        "If the AI solution does not meet your expectations, we offer adjustments and fixes at no additional cost within the agreed period.",
    },
    {
      title:
        "Our Project Managers ensure seamless integration and optimal performance",
      content:
        "Our Project Managers will ensure your AI solution is seamlessly integrated and performs optimally, offering ongoing support.",
    },
    {
      title: "Our team creates efficient AI solutions for digital success",
      content:
        "Our team excels in creating relevant and efficient AI solutions, ensuring your business can thrive in the digital age.",
    },
  ];

  return (
    <>
      <Navbar />
      <HeadlineSection
        title="AI Development"
        subhead1="Looking to Leverage Artificial Intelligence to Automate and Optimize
          Your Business Processes?"
        subhead2=""
        caption="Our AI development services provide innovative and customized
          solutions, enabling your business to enhance efficiency, analytics,
          and decision-making. We create targeted AI applications to help you
          tackle complex challenges intelligently. Choose our AI development
          services for visionary and effective solutions."
        photo={photo}
        button1="Develop Your AI Solution"
        button2="AI Consultation"
      />
      <HireSection accordionData={accordionData} />
      <FooterSection />
    </>
  );
}
