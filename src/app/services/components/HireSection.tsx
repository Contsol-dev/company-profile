import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

interface HireSectionProps {
  accordionData: AccordionData[];
}

interface AccordionData {
  title: string;
  content: string;
}

const HireSection = ({ accordionData }: HireSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center p-20 bg-gray-100 space-y-12 px-20">
      <div className="xl:text-6xl lg:text-5xl md:text-6xl sm:text-6xl text-4xl font-bold text-sky-950 font-sans">
        Why Choose Us?
      </div>
      <div className="md:ml-8 mt-8 md:mt-0">
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
                  <ChevronUpIcon className="w-6 h-6" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6" />
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

      {/* CTA Button */}
      <div className="mt-10">
        <a
          href="https://wa.me/6288225444313"
          className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-xs hover:bg-cont-secondary hover:transition-all duration-500 ease-in-out"
        >
          Free Consultancy
        </a>
      </div>
    </section>
  );
};

export default HireSection;
