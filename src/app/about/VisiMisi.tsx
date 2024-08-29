import Image from "next/image";
import ArrowTargetSvg from "@/assets/svgs/ArrowTarget";
import BowSvg from "@/assets/svgs/Bow";
import MisiPoint from "./MisiPoint";
import Logo from '@/assets/logo.png';

export default function VisiMisi() {
  return(
    <div className="relative p-4 lg:p-16 flex flex-col items-start justify-center lg:flex-row mb-12 gap-40 bg-cont-primary ">
      <Image 
        src={Logo}
        alt="Logo Contsol"
        className="
          w-40 h-auto -rotate-12
          absolute right-2 -bottom-20
        "
      />
      <div 
        className="
          w-full lg:w-1/3 flex flex-col gap-8 h-full relative overflow-hidden bg-white
          mb-4 rounded-lg p-4 pl-6 pt-6 border-cont-secondary shadow-md shadow-gray-800
        "
      >
        <ArrowTargetSvg fillColor="#12335a" className="opacity-15 w-56 h-auto absolute -right-12 -bottom-20" />
        <div className="flex justify-center relative">
          <h2 className="text-cont-secondary justify-self-center font-bold uppercase text-center text-4xl z-10">
            Vision
          </h2>
        </div>
        <div className="mb-4 rounded-lg px-16 flex flex-col">
          <span className="text-cont-secondary text-5xl">&quot;</span>
          <p className="font-semibold text-cont-primary text-center text-2xl">To help solve problems through creative, innovative, and effective digital technology transformation.</p>
          <span className="text-cont-secondary text-5xl self-end">&quot;</span>
        </div>
      </div>
      <div 
        className="
          w-full lg:w-1/3 flex flex-col gap-8 h-full relative overflow-hidden bg-white
          mb-4 rounded-lg py-4 px-12 pt-6 pb-16
          border-cont-secondary shadow-md shadow-gray-800
        "
      >
        <BowSvg fillColor="#12335a" className="opacity-15 w-44 h-auto absolute -right-6 -bottom-6" />
        <div className="flex justify-center gap-4">
          <h2 className="text-cont-secondary font-bold uppercase text-center text-4xl z-10">
            Mission
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <MisiPoint 
            misi="Providing Consultation Services for Problem Solving"
          />
          <MisiPoint 
            misi="Empowering Productivity"
          />
          <MisiPoint 
            misi="Optimizing Operations"
          />
          <MisiPoint 
            misi="Offering Affordable and Sustainable Services"
          />
        </div>
      </div>
    </div>
  );
}