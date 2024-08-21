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
            With over three years of experience, our mobile development team is
            ready to deliver applications that meet industry standards and user
            expectations. We can develop mobile applications within 30 to 90
            days, with the potential for faster delivery based on the deadlines
            you provide and the desired features and complexity.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            Choose from our flexible pricing models—platform and feature-based
            pricing—that are tailored to your business needs. Cont Solutions
            does not charge additional fees for minor updates during the first
            three months post-launch.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            If the application does not meet your requirements, we offer
            revisions and fixes at no extra cost within the agreed period. Our
            Project Managers will ensure your application is thoroughly tested
            and performs flawlessly before market launch.
          </p>
        </div>
        <div>
          <img
            src={Expert.src} // Ganti dengan path gambar kamu
            alt="Experience"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-xl text-gray-700 text-center lg:text-left">
            Our team is skilled in creating high-performance, user-friendly
            mobile applications, ensuring your app stands out in a competitive
            market.
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
