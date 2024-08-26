import Image from "next/image";
import Photo from "../../../assets/it-manpower-sharing.jpg";
import { Autoplay } from "swiper/modules";

const ExpertSection = () => {
  return (
    <section className="flex flex-col items-center p-20 bg-sky-950">
      <h2 className="text-5xl font-bold text-gray-100 text-center mb-5 font-sans">
        Hire Our Experts
      </h2>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-5 lg:gap-10 xl:gap-10">
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-2xl font-sans">
            Project Manager
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-2xl font-sans">
            Frontend Developer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-2xl font-sans">
            Backend Developer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-2xl font-sans">
            Mobile App Developer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-2xl font-sans">
            UI/UX Designer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-2xl font-sans">
            System Analyst
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-2xl font-sans">
            Data Specialist
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-2xl font-sans">
            IoT Engineer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-2xl font-sans">
            AI Engineer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-2xl font-sans">
            Network Engineer
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ExpertSection;
