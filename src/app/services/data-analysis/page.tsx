"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/data-analysis.jpg";

export default function DataAnalysis() {
  const accordionData = [
    {
      title:
        "Our data team has 3+ years of expertise in analytics and visualization",
      content:
        "With over three years of experience, our data analysis team excels in various techniques, including predictive analytics and data visualization.",
    },
    {
      title:
        "We deliver analysis reports in 7-30 days, based on data complexity",
      content:
        "We can deliver analysis reports within 7 to 30 days, depending on the complexity and volume of data.",
    },
    {
      title:
        "Choose project-based or subscription pricing tailored to your needs",
      content:
        "Choose from our flexible pricing models—project-based or subscription pricing—that are tailored to your analysis needs.",
    },
    {
      title: "No extra fees for minor report updates during the project",
      content:
        "Cont Solutions does not charge additional fees for minor report updates during the project period.",
    },
    {
      title:
        "We offer free revisions until the analysis meets your expectations",
      content:
        "If the analysis results do not meet your expectations, we offer free revisions until the results align with your business needs.",
    },
    {
      title:
        "Our Project Managers ensure data quality and accuracy throughout the process",
      content:
        "Our Project Managers will oversee the entire analysis process, ensuring the quality and accuracy of the presented data.",
    },
    {
      title:
        "Our team turns raw data into valuable insights for strategic decisions",
      content:
        "Our team is skilled at transforming raw data into valuable insights, ensuring you can make better and more strategic decisions.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-10"></div>
      <HeadlineSection
        title="Data Analysis"
        subhead1="Looking to Make Smarter, Data-Driven Business Decisions?"
        subhead2=""
        caption="Our data analysis services provide in-depth and actionable insights, helping you understand trends, identify opportunities, and address business challenges. We process and analyze data with the right approach, ensuring accurate and relevant results. Choose our data analysis services for fact-based and strategic solutions."
        photo={photo}
        button1="Analyze Your Data"
        button2="Data Consultation"
      />
      <HireSection accordionData={accordionData} />
      <FooterSection />
    </>
  );
}
