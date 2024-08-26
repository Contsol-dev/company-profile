"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/product-development.jpg";
import PricingSection from "../components/PricingSection";

export default function SocialMediaManagement() {
  const accordionData = [
    {
      title: "Our team has 3+ years of social media management experience",
      content:
        "With over three years of experience, our social media management team has worked with various types of businesses, boosting their presence and interactions on digital platforms.",
    },
    {
      title: "We create and manage content in 7-30 days, based on needs",
      content:
        "We can create and manage content within 7 to 30 days, depending on posting frequency and campaign types.",
    },
    {
      title:
        "Choose content package and service-based pricing to fit your budget",
      content:
        "Choose from our flexible pricing models—content package and service-based pricing—that are tailored to your needs and budget.",
    },
    {
      title: "No extra fees for minor strategy adjustments during the contract",
      content:
        "Cont Solutions does not charge additional fees for minor strategy adjustments during the contract period.",
    },
    {
      title: "We offer free revisions if the strategy doesn't meet your goals",
      content:
        "If the social media strategy does not achieve the desired results, we offer revisions and adjustments at no extra cost during the agreed period.",
    },
    {
      title:
        "Our Project Managers ensure smooth campaign execution and optimization",
      content:
        "Our Project Managers will ensure each social media campaign runs as planned, providing ongoing analysis and optimization.",
    },
    {
      title:
        "Our team creates engaging content to boost your brand's digital presence",
      content:
        "Our team excels in creating engaging and relevant content, ensuring your brand continues to thrive on social media platforms.",
    },
  ];

  const packages = [
    {
      price: "1000K",
      discount: "750K",
      benefit: [
        "15 Feed/Story Designs",
        "Upload Every 2 Days",
        "Audience Engagement",
        "Content Planning & Content Calendar",
        "Admin Posting",
        "Captions and Hashtags",
        "One Minor Revision per Design",
      ],
    },
    {
      price: "2500K",
      discount: "1750K",
      benefit: [
        "15 Feed Designs + 6 Stories + 4 Reels",
        "Content Planning & Content Calendar",
        "Admin Posting",
        "Captions and Hashtags",
        "Reels Brainstorming",
        "Final Report",
        "One Minor Revision per Design",
      ],
    },
    {
      price: "5000K",
      discount: "3000K",
      benefit: [
        "30 Feed Designs + 12 Stories + 8 Reels",
        "Content Planning & Content Calendar",
        "Admin Posting",
        "Captions and Hashtags",
        "Reels Brainstorming",
        "Final Report",
        "One Minor Revision per Design",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <HeadlineSection
        title="Social Media Management"
        subhead1="Looking to Enhance Your Business Presence on Social Media?"
        subhead2=""
        caption="Our social media management services provide effective strategies to build your brand, increase engagement, and manage communication with your audience. We create relevant and engaging content, ensuring your business remains connected with your target market. Choose our social media management services for strategic and sustainable solutions."
        photo={photo}
        button1="Manage Your Social Media"
        button2="Strategy Consultation"
      />
      <HireSection accordionData={accordionData} />
      <PricingSection packages={packages} />
      <FooterSection />
    </>
  );
}
