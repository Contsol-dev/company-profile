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
            With over three years of experience, our UI/UX design team boasts a
            portfolio across various industries, ensuring designs tailored to
            your target audience. We can complete UI/UX design projects within 7
            to 30 days, depending on complexity and specific needs.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            Choose from our flexible pricing models—page or feature-based
            pricing—that are customized to fit your project's requirements and
            budget. Cont Solutions does not charge additional fees for minor
            design revisions during the development process.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            If the design results do not meet your expectations, we offer
            revisions until you are satisfied with the final outcome. Our
            Project Managers will ensure that every design element is carefully
            considered, delivering an optimal user experience.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            Our team excels in merging aesthetics and functionality, ensuring
            your design not only looks great but also performs well.
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
