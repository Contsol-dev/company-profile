import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import iconCPU from "@/assets/icons/ic_cpu.png";
import iconMobile from "@/assets/icons/ic_mobile_app.png";
import iconTraining from "@/assets/icons/ic_it_training.png";
import iconNetwork from "@/assets/icons/ic_router.png";
import iconWebsite from "@/assets/icons/ic_website.png";
import iconAI from "@/assets/icons/ic_artificial_intelligence.png";
import iconLaptop from "@/assets/icons/ic_laptop.png";
import iconService from "@/assets/icons/ic_service.png";
import iconDesign from "@/assets/icons/ic_design.png";

const services = [
  { icon: iconTraining, title: "IT Manpower Sharing" },
  { icon: iconLaptop, title: "Product Development" },
  { icon: iconWebsite, title: "Website Development" },
  { icon: iconMobile, title: "Mobile App Development" },
  { icon: iconService, title: "IoT Development" },
  { icon: iconCPU, title: "Data Analysis" },
  { icon: iconNetwork, title: "Network Installation" },
  { icon: iconAI, title: "AI Engineering" },
  { icon: iconDesign, title: "UI / UX Design" },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-cont-primary text-white">
      <div className="container mx-auto px-4">
        <Typography variant="h4" className="mb-8 text-center text-white">
          Butuh menyelesaikan yang ada di bawah ini?
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <Typography className="text-white text-center font-semibold">
                {service.title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
