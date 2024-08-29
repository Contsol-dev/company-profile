import logo from "@/assets/members/Foto Bersama.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-6 md:p-8 bg-gray-100">
      <div className="flex justify-center w-full md:w-1/2">
        <Image 
          src={logo} 
          alt="Logo" 
          className="cursor-pointer max-w-[200px] md:max-w-none rounded-lg shadow-lg" 
          priority 
          width={540}
          height={960}
        />
      </div>
      <div className="w-full md:w-1/2 md:ml-8 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-cont-primary mb-4">
          About Contsolution
        </h2>
        <p className="text-gray-700 mb-4 text-sm md:text-lg leading-relaxed">
          Cont Solution was established in 2023. Initially, we focused on
          providing task assistance related to computer science, developing
          systems for Student Creativity Programs (PKM), and creating other
          systems needed by students to execute their creative ideas. Helping
          students has been a proud moment for us. As we evolve to improve, we
          adapt to accommodate the needs of our clients.
        </p>
        <a
          href="/about"
          className="inline-block bg-cont-primary text-white px-5 md:px-6 py-3 rounded-lg shadow-lg font-semibold transition duration-300 ease-in-out hover:bg-cont-secondary"
        >
          Baca Selengkapnya →
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
