import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const HireSection = () => {
  // State to manage which accordion is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      title: "Initial discussion with our account team",
      description:
        "Contact our account team to start discussing your talent needs and requirements.",
    },
    {
      title:
        "Based on the discussion, we will provide recommendations for suitable talent",
      description:
        "We will analyze your needs and recommend the most suitable talent.",
    },
    {
      title: "Send detailed proposal",
      description:
        "A proposal containing detailed information about the talent and services will be sent to you.",
    },
    {
      title: "Provide profiles & CVs of available talent",
      description:
        "We will provide profiles and CVs of available talent for you to choose from.",
    },
    {
      title: "Talent selection and matching process",
      description:
        "We assist you in selecting and matching talent that fits your project needs.",
    },
    {
      title: "Final agreement (End-Agreement)",
      description:
        "After discussions and talent selection, we draft and agree on the final agreement.",
    },
    {
      title: "Onboarding and remote talent support",
      description:
        "We provide support for onboarding and managing remote talent.",
    },
  ];

  return (
    <section className="flex flex-col items-center p-20 bg-gray-100">
      <h2 className="text-5xl font-bold text-sky-950 text-center mb-5 font-sans">
        How to Hire Cont Solution’s Talents
      </h2>
      <ul className="mt-8 space-y-4 text-xl text-gray-700 font-sans w-full max-w-4xl">
        {steps.map((step, index) => (
          <li key={index}>
            <div
              className="flex items-center cursor-pointer py-4"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex flex-col items-center me-4">
                <div className="w-10 h-10 p-2 rounded-full text-sm border-4 font-semibold border-cont-primary flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <b className="flex-grow text-left">{step.title}</b>
                  <ChevronDownIcon
                    className={`ms-5 w-6 h-6 text-teal-500 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                  style={{
                    maxHeight:
                      openIndex === index
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0",
                  }}
                >
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <a
          href="https://wa.me/6288225444313"
          className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-sm hover:bg-cont-secondary"
        >
          Free Consultancy
        </a>
      </div>
    </section>
  );
};

export default HireSection;
