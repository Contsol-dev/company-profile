// components/PhotoServicesAccordion.js
import { useState } from "react";
import photo from "../../../assets/it-manpower-sharing.jpg";

const PhotoServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleIndex = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const services = [
    {
      title: "Small to Medium-Sized Non-Food Product Photography",
      description:
        "We offer product photography services for small to medium-sized non-food items. This service is designed to showcase the details and quality of your products clearly and attractively, ideal for online catalogs or marketing materials. Examples include accessories, skincare products, jewelry, and gadgets.",
      image: photo.src,
    },
    {
      title: "Packaged Food Product Photography",
      description:
        "This service specializes in photographing packaged food products, ensuring that every detail of the packaging looks appealing and professional. With proper lighting and styling techniques, we highlight the quality and attractiveness of your product, ideal for product labels and online promotions.",
      image: photo.src,
    },
    {
      title: "Non-Packaged Food and Beverage Photography",
      description:
        "We also provide photography services for non-packaged food and beverages, such as restaurant dishes or fresh drinks. Using creative styling and appropriate lighting techniques, we capture the deliciousness and presentation of your products in a way that is visually appetizing.",
      image: photo.src,
    },
    {
      title: "Large Non-Food Product Photography",
      description:
        "For large non-food products, we offer photography services that emphasize the detail and scale of your items. From furniture to large equipment, we ensure every aspect of the product is clearly photographed, ideal for catalogs, websites, and other marketing materials.",
      image: photo.src,
    },
    {
      title: "Product Photography with Models",
      description:
        "This service involves using models to display your products in a relevant and engaging context. Suitable for fashion, accessories, and other products that require direct presentation on users, these photos help potential customers envision how the product will look or be used in real life.",
      image: photo.src,
    },
  ];

  return (
    <section className="flex flex-col items-center px-10 py-10 md:px-20 lg:px-20 xl:px-20 bg-cont-primary space-x-3">
      <div className="xl:text-4xl lg:text-3xl md:text-4xl sm:text-4xl text-2xl font-bold text-gray-100 font-sans mb-4">
        Photo Services
      </div>
      <div className="flex flex-row space-x-4">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleIndex(index)}
            className={`relative cursor-pointer transition-all duration-500 ease-in-out ${
              activeIndex === index
                ? "flex-shrink-0 sm:w-60 w-40 md:w-80"
                : "w-auto"
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[240px] object-cover"
            />
          </div>
        ))}
      </div>
      {activeIndex !== null && (
        <div className="text-gray-100 p-5 w-full transition-all duration-500 ease-in-out">
          <h3 className="text-lg font-semibold">
            {services[activeIndex].title}
          </h3>
          <p className="mt-2">{services[activeIndex].description}</p>
        </div>
      )}
    </section>
  );
};

export default PhotoServicesAccordion;
