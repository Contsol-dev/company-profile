import { useState } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";

const WhySection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Our IT experts are highly skilled with 3+ years of experience",
      content:
        "With over three years of proficiency, our IT experts are highly skilled and experienced in their fields.",
    },
    {
      title: "We supply IT talent in 7-21 days, tailored to your needs",
      content:
        "We can supply IT talent within 7 - 21 days, depending on your business needs and work arrangements (remote, hybrid, onsite), providing quick solutions to meet project deadlines.",
    },
    {
      title: "Choose flexible pricing based on seniority levels",
      content:
        "Choose from our flexible pricing models - seniority based pricing - tailored to suit your unique requirements, based on the level of seniority required.",
    },
    {
      title: "No additional management fees for cost-effective services",
      content:
        "Cont Solutions does not charge additional management fees, ensuring cost-effective services",
    },
    {
      title:
        "We offer a talent replacement guarantee within the contract period",
      content:
        "If a talent doesn't meet performance expectations, we offer a replacement guarantee during the contract period. We ensure the replacement is completed within 7-21 business days.",
    },
    {
      title: "Our Project Manager ensures top performance and quality",
      content:
        "Our Project Managers will ensure that each stage of development runs smoothly and according to the agreed plan.",
    },
    {
      title: "Our team ensures optimal website performance on all devices",
      content:
        "Our Project Manager will ensure that the IT talent performs to your expectations, offering ongoing monitoring and quality assurance.",
    },
    {
      title: "Our team provides essential skills for complex projects",
      content:
        "Our team is adept at deploying a diverse set of skills essential for intricate projects, ensuring we align with the demands of contemporary workforce needs.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 px-20">
      <div className="md:w-1/3 xl:text-8xl lg:text-7xl md:text-4xl sm:text-8xl text-6xl font-bold text-sky-950 font-sans">
        Why Choose Us?
      </div>
      <div className="md:w-2/3 md:ml-8 mt-8 md:mt-0">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-500 py-2 ease-in-out ${
              activeIndex === index ? "pb-4 border-b border-gray-500" : ""
            }`}
          >
            <button
              className={`w-full text-left focus:outline-none ${
                activeIndex !== index ? "border-b border-gray-500" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <h1 className="xl:text-xl lg:text-lg text-sm sm:text-base text-gray-700 lg:text-left font-bold mb-4 flex justify-between items-center">
                {item.title}
                {activeIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6 ms-3" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 ms-3" />
                )}
              </h1>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="xl:text-xl lg:text-lg text-sm sm:text-sm text-gray-700 text-center lg:text-left mt-4">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
