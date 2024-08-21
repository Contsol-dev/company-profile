import { useState, useRef } from "react";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Expert from "../../../assets/product-dev/expert.jpg";

const HireSection = () => {
  return (
    <section className="flex flex-col items-center p-20 bg-gray-100 space-y-12 px-40">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-xl">
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            With over three years of experience, our data analysis team excels
            in various techniques, including predictive analytics and data
            visualization. We can deliver analysis reports within 7 to 30 days,
            depending on the complexity and volume of data.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            Choose from our flexible pricing models—project-based or
            subscription pricing—that are tailored to your analysis needs. Cont
            Solutions does not charge additional fees for minor report updates
            during the project period.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            If the analysis results do not meet your expectations, we offer free
            revisions until the results align with your business needs. Our
            Project Managers will oversee the entire analysis process, ensuring
            the quality and accuracy of the presented data.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            Our team is skilled at transforming raw data into valuable insights,
            ensuring you can make better and more strategic decisions.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10">
        <a
          href="https://wa.me/6288225444313"
          className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-sm hover:bg-cont-secondary"
        >
          Free Consultacy
        </a>
      </div>
    </section>
  );
};

export default HireSection;
