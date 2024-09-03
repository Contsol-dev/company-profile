"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import HireSection from "../components/HireSection";
import photo from "../../../assets/network-installation.jpg";

export default function NetworkInstallation() {
  const accordionData = [
    {
      title: "Our team has 3+ years of network installation expertise",
      content:
        "With over three years of experience, our network installation team has assisted various companies in designing and implementing network infrastructure tailored to their specific needs.",
    },
    {
      title: "We complete installations in 7-30 days, tailored to your needs",
      content:
        "We can complete network installations within 7 to 30 days, depending on the scale and complexity of the project.",
    },
    {
      title: "Choose scale-based pricing, adjusted to your budget",
      content:
        "Choose from our flexible pricing models—network scale-based pricing—that can be adjusted to fit your budget and requirements.",
    },
    {
      title: "No extra fees for minor maintenance in the first 3 months",
      content:
        "Cont Solutions does not charge additional fees for minor maintenance during the first three months post-installation.",
    },
    {
      title: "We offer free repairs if the network doesn't perform as expected",
      content:
        "If the network does not perform as expected, we offer free repairs within the agreed period.",
    },
    {
      title:
        "Our Project Managers ensure high standards and optimal performance",
      content:
        "Our Project Managers will ensure that each installation phase is executed to the highest standards, providing security and optimal performance.",
    },
    {
      title: "Our team uses the latest technologies for future-ready networks",
      content:
        "Our team is trained in the latest network technologies, ensuring your business network is ready to meet future challenges.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-10"></div>
      <HeadlineSection
        title="Network Installation"
        subhead1="Looking to Ensure Your Business Network Runs Smoothly and Securely?"
        subhead2=""
        caption="Our network installation services provide reliable and efficient solutions for your connectivity needs. From design to implementation, we ensure your network is optimal, secure, and capable of supporting business growth. Choose our network installation services for structured and dependable solutions."
        photo={photo}
        button1="Install Your Network"
        button2="Network Consultation"
      />
      <HireSection accordionData={accordionData} />
      <FooterSection />
    </>
  );
}
