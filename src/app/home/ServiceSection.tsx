import { Typography } from "@material-tailwind/react";

const services = [
  { icon: "@/assets/logo.png", title: "IT Manpower Sharing" },
  { icon: "@/assets/logo.png", title: "Product Development" },
  { icon: "@/assets/logo.png", title: "Website Development" },
  { icon: "@/assets/logo.png", title: "Mobile App Development" },
  { icon: "@/assets/logo.png", title: "IoT Development" },
  { icon: "@/assets/logo.png", title: "Data Analysis" },
  { icon: "@/assets/logo.png", title: "Network Installation" },
  { icon: "@/assets/logo.png", title: "AI Engineering" },
  { icon: "@/assets/logo.png", title: "UI / UX Design" },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <Typography variant="h4" className="mb-8 text-center text-white">
          Butuh menyelesaikan yang ada di bawah ini?
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={service.icon}
                alt={service.title}
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
