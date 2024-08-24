import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

interface Package {
  price: string;
  discount: string;
  benefit: string[];
}

interface PricingSectionProps {
  packages: Package[];
}

const PricingSection = ({ packages }: PricingSectionProps) => {
  return (
    <section className="flex flex-col items-center p-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`${
              index === 2 ? "bg-sky-900" : "bg-white"
            } hover:scale-110 hover:transition-all duration-1000 p-6 shadow-lg font-sans ${
              index === 2
                ? "border-b-8 border-yellow-300"
                : "border-b-8 border-teal-500"
            }`}
          >
            <h3
              className={`${
                index === 2 ? "text-white" : "text-sky-900"
              } text-4xl font-bold mb-2`}
            >
              {pkg.discount} IDR
            </h3>
            <p className="text-lg font-semibold text-red-600 mb-4 line-through">
              {pkg.price} IDR
            </p>
            <ul
              className={`${
                index === 2 ? "text-white" : "text-gray-900"
              } text-gray-700 space-y-2 mb-6`}
            >
              {pkg.benefit.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckIcon
                    className={`${
                      index === 2 ? "text-yellow-300" : "text-teal-500"
                    } w-6 h-6 mr-3`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
