"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/product-development.jpg";
import PricingSection from "../components/PricingSection";

export default function VideoAdsProduction() {
  const accordionData = [
    {
      title: "Our team has 3+ years of video production experience",
      content:
        "With over three years of experience, our video production team has created a variety of video ads for different industries, ensuring your video is relevant and engaging for your target audience.",
    },
    {
      title: "We complete video ads in 14-30 days, based on concept complexity",
      content:
        "We can complete video production within 14 to 30 days, depending on the scale and complexity of the video concept.",
    },
    {
      title: "Choose duration or complexity-based pricing to fit your budget",
      content:
        "Choose from our flexible pricing models—based on video duration or complexity—that align with your budget and marketing goals.",
    },
    {
      title: "No extra fees for minor revisions during production",
      content:
        "Cont Solutions does not charge additional fees for minor revisions or edits during the video production process.",
    },
    {
      title: "We offer free revisions or reshoots until you're satisfied",
      content:
        "If the video does not meet your expectations, we offer revisions or reshoots within the agreed period at no extra cost.",
    },
    {
      title:
        "Our Project Managers ensure the video grabs attention and delivers the message",
      content:
        "Our Project Managers will ensure that your video ad effectively grabs attention and communicates the desired message.",
    },
    {
      title:
        "Our team creates high-quality videos that stand out across platforms",
      content:
        "Our team excels in creating high-quality, engaging videos, ensuring your brand stands out across digital platforms and other media.",
    },
  ];

  const packages = [
    {
      price: "400k",
      discount: "250k",
      benefit: [
        "30 - 60 Seconds",
        "No Actor Involvement",
        "Client-Provided Storyboard",
        "Background Music & Basic Editing",
        "Voiceover (If Needed)",
        "Product-Focused Shots",
      ],
    },
    {
      price: "750k",
      discount: "500k",
      benefit: [
        "30 - 60 Seconds",
        "Actor Involvement",
        "Storyline Development",
        "Background Music & Advanced Editing",
        "Voiceover",
        "Scriptwriting",
      ],
    },
    {
      price: "2 Million",
      discount: "1 Million",
      benefit: [
        "60 Seconds - 5 Minutes",
        "Actor Involvement",
        "Detailed Storyline",
        "Background Music & Professional Editing",
        "Scriptwriting",
        "Location Scouting",
        "Professional Voiceover",
      ],
    },
  ];

  const motionPackages = [
    {
      price: "1 Million",
      discount: "800k",
      benefit: [
        "30 Seconds Duration",
        "Client-Provided Storyboard",
        "Voiceover (If Needed)",
        "Non-Copyright Sound",
        "SFX",
        "Revisions",
      ],
    },
    {
      price: "2 Million",
      discount: "1.2 Million",
      benefit: [
        "60 Seconds Duration",
        "Script/Storyboard Consultation",
        "Voiceover (If Needed)",
        "Non-Copyright Background Sound",
        "SFX",
        "5 Revisions",
      ],
    },
    {
      price: "4 Million",
      discount: "2.5 Million",
      benefit: [
        "60 Seconds - 2 Minutes Duration",
        "Script/Storyboard Consultation",
        "Voiceover (If Needed)",
        "Non-Copyright Background Sound",
        "SFX",
        "8 Revisions",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <HeadlineSection
        title="Video Ads Production"
        subhead1="Looking to Promote Your Products or Services with Engaging and Memorable Video Ads?"
        subhead2=""
        caption="Our video ad production services offer creative solutions that blend storytelling with dynamic visuals to boost awareness and conversion. We create captivating videos that effectively convey your brand’s message. Choose our video ad production services for inspiring and professional solutions."
        photo={photo}
        button1="Produce Your Video Ad"
        button2="Video Consultation"
      />
      <HireSection accordionData={accordionData} />
      <div className="flex flex-col items-center bg-gray-100 space-y-12 px-20">
        <div className="xl:text-4xl lg:text-3xl md:text-4xl sm:text-4xl text-2xl font-bold text-sky-950 font-sans">
          Video Ads Production
        </div>
      </div>
      <PricingSection packages={packages} />
      <div className="flex flex-col items-center bg-gray-100 space-y-12 px-20">
        <div className="xl:text-4xl lg:text-3xl md:text-4xl sm:text-4xl text-2xl font-bold text-sky-950 font-sans">
          Motion Graphic Design
        </div>
      </div>
      <PricingSection packages={motionPackages} />
      <FooterSection />
    </>
  );
}
