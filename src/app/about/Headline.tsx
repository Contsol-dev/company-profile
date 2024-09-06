import Image from "next/image";
import BuletSvg from "@/assets/svgs/Bulet";
import Logo from "@/assets/logo.png";

export default function Headline() {
  return (
    <div className="p-4 lg:px-16 lg:py-12 w-screen h-fit flex flex-col lg:flex-row gap-8 mb-12">
      <div className="w-full lg:w-2/4 h-60 lg:h-96 bg-transparent">
        <Image
          src={Logo}
          alt="Logo Contsol"
          className="h-full w-auto mx-auto"
        />
      </div>
      <div className="relative flex flex-col w-full lg:w-2/4 py-4 gap-4">
        <div className="absolute top-0 left-0 w-full h-full">
          <BuletSvg className="w-auto h-20 opacity-10" fillColor="#12335a"/>
        </div>

        <h3 className="relative z-10 text-cont-primary font-black uppercase">Who We Are</h3>
        <h2 className="relative z-10 text-black font-bold uppercase text-4xl">
          Hello, we are <span className="text-cont-secondary">Cont Solutions Indonesia</span>, your digital problem-solving solution.
        </h2>
        <p className="relative z-10 text-cont-primary font-normal text-lg">
          Cont Solution was established in 2023. 
          Initially, we focused on providing task assistance related to computer science, 
          developing systems for Student Creativity Programs (PKM), 
          and creating other systems needed by students to execute their creative ideas. 
          Helping students has been a proud moment for us. 
          As we evolve to improve, we adapt to accommodate the needs of our clients.
        </p>
      </div>

    </div>
  );
}