"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import HeadlineSection from "./HeadlineSection";
import WhySection from "./WhySection";
import Image from "next/image";
import Gkd from "../../../assets/logo-gkd.jpg";
import Dlhk from "../../../assets/logo-dlhk.png";
import ClientSection from "./ClientSection";
import ExpertSection from "./ExpertSection";

export default function ITManpowerSharing() {
  return (
    <>
      <Navbar />
      <HeadlineSection />
      <WhySection />
      <hr />
      <ClientSection />
      <ExpertSection />

      {/* Hire Our Experts Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900">Hire Our Experts</h2>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="text-lg text-gray-700">Project Manager</li>
          <li className="text-lg text-gray-700">Frontend Developer</li>
          <li className="text-lg text-gray-700">Backend Developer</li>
          <li className="text-lg text-gray-700">Mobile App Developer</li>
          <li className="text-lg text-gray-700">UI/UX Designer</li>
          <li className="text-lg text-gray-700">System Analyst</li>
          <li className="text-lg text-gray-700">Data Specialist</li>
          <li className="text-lg text-gray-700">IoT Engineer</li>
          <li className="text-lg text-gray-700">AI Engineer</li>
          <li className="text-lg text-gray-700">Network Engineer</li>
        </ul>
      </section>

      {/* How to Hire Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900">
          How to Hire Cont Solution’s Talents
        </h2>
        <ul className="mt-8 space-y-4 text-lg text-gray-700">
          <li>Initial discussion with our account team</li>
          <li>
            Based on the discussion, we will provide recommendations for
            suitable talent
          </li>
          <li>Send detailed proposal</li>
          <li>Provide profiles & CVs of available talent</li>
          <li>Talent selection and matching process</li>
          <li>Final agreement (End-Agreement)</li>
          <li>Onboarding and remote talent support</li>
        </ul>
        <div className="mt-8">
          <a
            href="https://wa.me/your-number"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Free Consultancy
          </a>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900">Technology Stack</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-gray-700">
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
    </>
  );
}
