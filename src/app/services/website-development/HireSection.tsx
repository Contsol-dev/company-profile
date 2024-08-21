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
            With over three years of expertise, our website development team is
            ready to deliver results that exceed your expectations. We can
            complete website development projects in 14 to 30 days, with the
            possibility of faster delivery based on the time you provide,
            depending on the complexity and functional requirements.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            Choose from our flexible pricing models—feature-based
            pricing—customized to your specific needs. Cont Solutions does not
            charge additional fees for minor design changes during the
            development process.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            If the website does not meet your expectations, we offer revisions
            until you are satisfied with the final result. Our Project Managers
            will ensure that each stage of development runs smoothly and
            according to the agreed plan.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            Our team is skilled in various modern web technologies, ensuring
            your website performs optimally across different devices.
          </p>
        </div>
      </div>

      {/* CTA Button */}
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
