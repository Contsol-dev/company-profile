import Image from "next/image";
import Photo from "../../../assets/it-manpower-sharing.jpg";
import { Autoplay } from "swiper/modules";

const TechSection = () => {
  return (
    <section className="flex flex-col items-center p-10 bg-gray-100 px-20">
      <h2 className="text-5xl font-bold text-sky-950 text-center mb-5 font-sans">
        Technology Stack
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-lg text-gray-700">
        <div>
          <h3 className="font-semibold">Backend Services</h3>
          <ul>
            <li>Node Js</li>
            <li>Laravel</li>
            <li>Express Js</li>
            <li>Fast Api</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Front End Development</h3>
          <ul>
            <li>React Js</li>
            <li>Angular</li>
            <li>Tailwind</li>
            <li>Next Js</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Mobile Development</h3>
          <ul>
            <li>Kotlin</li>
            <li>Flutter</li>
            <li>React Native</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Internet Of Things</h3>
          <ul>
            <li>Arduino IDE</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Network</h3>
          <ul>
            <li>Cisco</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Data Analysis</h3>
          <ul>
            <li>Python</li>
            <li>R</li>
            <li>Jupyter Notebook</li>
            <li>Power Bi</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Deployment Services</h3>
          <ul>
            <li>Docker</li>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Google Cloud</li>
            <li>Hostinger</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
