"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/product-development.jpg";

export default function IotDevelopment() {
  const accordionData = [
    {
      title: "Our IoT team has 3+ years of expertise in various technologies",
      content:
        "With over three years of experience, our IoT development team is skilled in various technologies and communication protocols.",
    },
    {
      title:
        "We develop and deploy IoT solutions in 7-30 days, with faster options available",
      content:
        "We can develop and deploy your IoT solutions within 7 to 30 days, with the potential for faster delivery based on the deadlines you provide and the desired features and complexity.",
    },
    {
      title:
        "Choose device and integration-based pricing, tailored to your business",
      content:
        "Choose from our flexible pricing models—device and integration-based pricing—that can be customized to fit your business needs.",
    },
    {
      title: "No extra fees for minor maintenance in the first 3 months",
      content:
        "Cont Solutions does not charge additional fees for minor maintenance during the first three months post-implementation.",
    },
    {
      title:
        "We offer repair and replacement guarantees if devices don't perform as expected",
      content:
        "If the IoT devices do not perform as expected, we offer repair and replacement guarantees within the agreed contract period.",
    },
    {
      title:
        "Our Project Managers ensure effective implementation and ongoing support",
      content:
        "Our Project Managers will ensure that your IoT solution is implemented and managed effectively, providing ongoing monitoring and support.",
    },
    {
      title:
        "Our team builds robust IoT ecosystems to maximize your connected technology benefits",
      content:
        "Our team excels in creating robust and efficient IoT ecosystems, ensuring your business fully benefits from connected technology.",
    },
  ];

  return (
    <>
      <Navbar />
      <HeadlineSection
        title="IoT Development"
        subhead1="Looking to Connect the Physical and Digital Worlds to Enhance Your Business Efficiency?"
        subhead2=""
        caption="Our IoT development services offer solutions that enable your business to automate processes, collect real-time data, and optimize operations. We create innovative and customizable IoT devices, ensuring seamless integration with existing systems. Choose our IoT development services for smart and connected solutions."
        photo={photo}
        button1="Develop Your IoT Solution"
        button2="IoT Consultation"
      />
      <HireSection accordionData={accordionData} />
      <FooterSection />
    </>
  );
}
