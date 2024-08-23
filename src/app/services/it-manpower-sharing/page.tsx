"use client";
import Navbar from "@/components/Navbar";
import WhySection from "./WhySection";
import ClientSection from "./ClientSection";
import ExpertSection from "./ExpertSection";
import HireSection from "./HireSection";
import TechSection from "./TechSection";
import FooterSection from "@/components/FooterSection";
import HeadlineSection from "../components/HeadlineSection";
import photo from "../../../assets/it-manpower-sharing.jpg";

export default function ITManpowerSharing() {
  return (
    <>
      <Navbar />
      <HeadlineSection
        title="IT Manpower Sharing"
        subhead1="Struggling with the cost of building a team of developers?"
        subhead2=""
        caption="IT staff augmentation offers a powerful alternative that sets itself
          apart from outsourcing and recruitment. Hire a dedicated IT team to
          provide specialized expertise, drive innovation, ensure compliance,
          and reduce costs, allowing your business to focus on its core
          functions."
        photo={photo}
        button1="Hire Dedicated IT Team"
        button2="Join as Talent"
      />
      <WhySection />
      <hr />
      <ClientSection />
      <ExpertSection />
      <hr />
      <HireSection />
      <hr />
      <TechSection />
      <FooterSection />
    </>
  );
}
