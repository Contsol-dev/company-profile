"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/product-development.jpg";
import PhotoServicesAccordion from "./PhotoServicesAccordion";
import PricingSection from "../components/PricingSection";

export default function PhotoProduct() {
  const accordionData = [
    {
      title: "Our team has 3+ years of product photography experience",
      content:
        "With over three years of experience, our photography team has handled a range of products, from fashion to technology, producing photos that enhance the appeal of your items.",
    },
    {
      title: "We complete sessions and edits in 7-14 days, based on needs",
      content:
        "We can complete photography sessions and editing within 7 to 14 days, depending on the number of products and the complexity of the setup.",
    },
    {
      title: "Choose per-photo or package-based pricing to fit your campaign",
      content:
        "Choose from our flexible pricing models—per-photo or package-based pricing—that can be adjusted to fit your marketing campaign needs.",
    },
    {
      title: "No extra fees for minor revisions during the editing process",
      content:
        "Cont Solutions does not charge additional fees for minor revisions or edits during the photo development process.",
    },
    {
      title: "We offer free reshoots or revisions until you're satisfied",
      content:
        "If the photos do not meet your expectations, we offer reshoot sessions or revisions at no extra cost during the agreed period.",
    },
    {
      title: "Our Project Managers ensure photos reflect product quality",
      content:
        "Our Project Managers will ensure that each product photo accurately reflects the quality and characteristics of your items.",
    },
    {
      title:
        "Our team creates appealing images that make your products stand out",
      content:
        "Our team excels in creating visually appealing and functional images, ensuring your products stand out in a competitive market.",
    },
  ];

  const packages1 = [
    {
      price: "500K",
      discount: "250K",
      benefit: [
        "10 Photos, with 25 Photo Options",
        "Consultation",
        "Theme Selection",
        "Photo Props",
        "Product Research",
      ],
    },
    {
      price: "1000K",
      discount: "500K",
      benefit: [
        "30 Photos, 50 Photo Options",
        "Consultation",
        "Theme Selection",
        "Photo Props",
        "Product Research",
      ],
    },
  ];

  const packages2 = [
    {
      price: "1000K",
      discount: "250K",
      benefit: [
        "10 Photos, with 25 Photo Options",
        "Consultation",
        "Theme Selection",
        "Photo Props",
        "Includes Modeling (if needed)",
      ],
    },
    {
      price: "2000K",
      discount: "1000K",
      benefit: [
        "30 Photos, 50 Photo Options",
        "Consultation",
        "Theme Selection",
        "Photo Props",
        "Includes Modeling (if needed)",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <HeadlineSection
        title="Photo Product"
        subhead1="Looking to Showcase Your Products in a Stunning and Attention-Grabbing Way?"
        subhead2=""
        caption="Our product photography services provide high-quality images that highlight the details and uniqueness of your products. We create captivating and professional visuals, ensuring your products stand out across various platforms. Choose our product photography services for creative and commercial solutions."
        photo={photo}
        button1="Capture Your Product Photos"
        button2="Photography Consultation"
      />
      <HireSection accordionData={accordionData} />
      <PhotoServicesAccordion />
      <div className="flex flex-col items-center pt-10 bg-gray-100 px-20">
        <div className="xl:text-xl lg:text-lg md:text-xl sm:text-xl text-md font-bold text-sky-950 font-sans">
          For Non-Food Small to Medium Products, Packaged Food, Non-Packaged
          Food & Beverages:
        </div>
      </div>
      <PricingSection packages={packages1} />
      <div className="flex flex-col items-center pt-10 bg-gray-100 px-20">
        <div className="xl:text-xl lg:text-lg md:text-xl sm:text-xl text-md font-bold text-sky-950 font-sans">
          For Large Products or Products with Models:
        </div>
      </div>
      <PricingSection packages={packages1} />
      <FooterSection />
    </>
  );
}
