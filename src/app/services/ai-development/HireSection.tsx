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
            With over three years of experience, our AI development team
            possesses expertise in various AI fields, including machine
            learning, NLP, and computer vision. We can develop your AI solution
            within 30 to 90 days, depending on the project complexity and your
            specific needs.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            Choose from our flexible pricing models—algorithm complexity-based
            pricing—that are designed to fit your budget and business goals.
            Cont Solutions does not charge additional fees for maintenance and
            minor updates during the first three months post-implementation.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            If the AI solution does not meet your expectations, we offer
            adjustments and fixes at no additional cost within the agreed
            period. Our Project Managers will ensure your AI solution is
            seamlessly integrated and performs optimally, offering ongoing
            support.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            Our team excels in creating relevant and efficient AI solutions,
            ensuring your business can thrive in the digital age.
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
