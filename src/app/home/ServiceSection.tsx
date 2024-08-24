import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const services = [
  { icon: "@/assets/icons/ic_artificial_intelligence.svg", title: "IT Manpower Sharing" },
  { icon: "@/assets/icons/ic_cpu.svg", title: "Product Development" },
  { icon: "@/assets/icons/ic_website.svg", title: "Website Development" },
  { icon: "@/assets/icons/ic_mobile_app.svg", title: "Mobile App Development" },
  { icon: "@/assets/icons/ic_it_training.svg", title: "IoT Development" },
  { icon: "@/assets/icons/ic_service.svg", title: "Data Analysis" },
  { icon: "@/assets/icons/ic_router.svg", title: "Network Installation" },
  { icon: "@/assets/icons/ic_artificial_intelligence.svg", title: "AI Engineering" },
  { icon: "@/assets/icons/ic_laptop.svg", title: "UI / UX Design" },
];


const ServicesSection = () => {
  return (
    <section className="py-12 bg-cont-primary text-white">
      <div className="container mx-auto px-4">
        <Typography variant="h4" className="mb-8 text-center text-white">
          Butuh menyelesaikan yang ada di bawah ini?
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={100}
                height={100}
                className="w-16 h-16 mb-4"
              />
              <Typography className="text-white">{service.title}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
