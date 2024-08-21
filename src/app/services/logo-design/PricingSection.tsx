import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const PricingSection = () => {
  return (
    <section className="flex flex-col items-center p-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white hover:scale-110 hover:transition-all duration-1000 p-6 shadow-lg border-l-8 border-yellow-800 font-sans">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">200k IDR</h3>
          <p className="text-lg font-semibold text-red-600 mb-4 line-through">
            500k IDR
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>One Logo Option</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>High Resolution</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Multiple Formats (JPEG, PNG, PDF, CDR, Ai, EPS, etc.)</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Minor Revisions</span>
            </li>
          </ul>
        </div>

        <div className="bg-white hover:scale-110 hover:transition-all duration-1000 p-6 shadow-lg border-l-8 border-gray-400 font-sans">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">500k IDR</h3>
          <p className="text-lg font-semibold text-red-600 mb-4 line-through">
            1000k IDR
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Two Logo Option</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>High Resolution</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Multiple Formats (JPEG, PNG, PDF, CDR, Ai, EPS, etc.)</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Two Major Revisions, Minor Revisions</span>
            </li>
          </ul>
        </div>
        <div className="bg-white hover:scale-110 hover:transition-all duration-1000 p-6 shadow-lg border-l-8 border-yellow-300 font-sans">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">3000k IDR</h3>
          <p className="text-lg font-semibold text-red-600 mb-4 line-through">
            5000k IDR
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Four Logo Option</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Logo Philosophy</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>High Resolution</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Multiple Formats (JPEG, PNG, PDF, CDR, Ai, EPS, etc.)</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Major Revisions, Minor Revisions</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Mockups</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Logo Guidelines</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Video Animation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
