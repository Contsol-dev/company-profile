"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/product-development.jpg";

export default function ProductDevelopment() {
  const accordionData = [
    {
      title: "Our team has 3+ years of industry experience",
      content:
        "With over three years of experience, our development team possesses extensive expertise across various industries.",
    },
    {
      title:
        "We ensure timely product delivery with customized development cycles",
      content:
        "We work swiftly, with customized product development cycles, ensuring your product is released on time and meets market targets.",
    },
    {
      title: "Choose complexity-based pricing to suit your needs",
      content:
        "Choose from our flexible pricing models—project complexity-based pricing—tailored to your unique needs.",
    },
    {
      title:
        "No extra management fees for cost-effective, high-quality services",
      content:
        "Cont Solutions does not charge additional management fees, providing cost-effective yet high-quality services.",
    },
    {
      title:
        "We offer free revisions if expectations aren't met during the contract",
      content:
        "If the development results do not meet expectations, we offer free revisions during the contract period. We ensure that each revision is carried out effectively and promptly.",
    },
    {
      title: "Our Project Managers prioritize quality and your satisfaction",
      content:
        "Our Project Managers will oversee the entire development process, making quality and your satisfaction our top priority.",
    },
    {
      title:
        "Our team uses diverse methodologies to keep your product competitive",
      content:
        "Our team is trained in various development methodologies, ensuring your product remains highly competitive in the market.",
    },
  ];

  return (
    <>
      <Navbar />
      <HeadlineSection
        title="Product Development"
        subhead1="Struggling to turn your ideas into tangible, successful products?"
        subhead2=""
        caption="Our product development services offer a comprehensive solution that combines innovation, research, and execution. Our experienced team will assist you through every stage, from concept to launch, ensuring your product meets market needs and is ready to compete. Choose our product development services for innovative and practical solutions."
        photo={photo}
        button1="Develop Your Product"
        button2="Consult with an Expert"
      />
      <HireSection accordionData={accordionData} />
      <FooterSection />
    </>
  );
}
