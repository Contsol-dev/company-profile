import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const PricingSection = () => {
  return (
    <section className="flex flex-col items-center p-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white hover:scale-110 hover:transition-all duration-1000 p-6 shadow-lg border-l-8 border-yellow-800 font-sans">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">750k IDR</h3>
          <p className="text-lg font-semibold text-red-600 mb-4 line-through">
            1000k IDR
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>15 Feed/Story Designs</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Upload Every 2 Days</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Audience Engagement</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Content Planning & Content Calendar</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Admin Posting</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Captions and Hashtags</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>One Minor Revision per Design</span>
            </li>
          </ul>
        </div>

        <div className="bg-white hover:scale-110 hover:transition-all duration-1000 p-6 shadow-lg border-l-8 border-gray-400 font-sans">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">1750k IDR</h3>
          <p className="text-lg font-semibold text-red-600 mb-4 line-through">
            2500k IDR
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>15 Feed Designs + 6 Stories + 4 Reels</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Content Planning & Content Calendar</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Admin Posting</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Captions and Hashtags</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Reels Brainstorming</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Final Report</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>One Minor Revision per Design</span>
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
              <span>30 Feed Designs + 12 Stories + 8 Reels</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Content Planning & Content Calendar</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Admin Posting</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Captions and Hashtags</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Reels Brainstorming</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>Final Report</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
              <span>One Minor Revision per Design</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
