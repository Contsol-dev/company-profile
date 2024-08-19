import Image from "next/image";
import Photo from "../../../assets/it-manpower-sharing.jpg";
import { Autoplay } from "swiper/modules";

const ExpertSection = () => {
  return (
    <section className="flex flex-col items-center p-10 bg-gray-100 px-20">
      <h2 className="text-5xl font-bold text-sky-950 text-center mb-5 font-sans">
        Hire Our Experts
      </h2>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-5">
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className=" bg-black bg-opacity-50 p-4 rounded-lg">
            Project Manager
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-lg">
            Frontend Developer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-lg">
            Backend Developer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-lg">
            Mobile App Developer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-lg">
            UI/UX Designer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-lg">
            System Analyst
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-lg">
            Data Specialist
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-lg">
            IoT Engineer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-lg">
            AI Engineer
          </div>
        </li>
        <li
          className="relative bg-cover bg-center h-60 rounded-lg overflow-hidden flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundImage: `url(${Photo.src})` }}
        >
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-lg">
            Network Engineer
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ExpertSection;
