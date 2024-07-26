import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-16 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className="flex flex-row gap-3 items-center ml-4">
          <Image
            src={logo}
            alt="Logo"
            width="45"
            height="45"
            className="cursor-pointer"
            priority
          />
          <div className="text-[#12335a] ltr font-[ITC Avant Garde] ml-0 leading-[0.88882623] text-left normal-case tracking-[-0.02em]">
            <span className="text-[#12335a] font-bold text-lg">Cont</span>
            <span className="text-[#12335a] font-normal text-lg">
              Solutions
            </span>
          </div>
        </div>
        <div className="text-black">Right</div>
      </div>
    </nav>
  );
};

export default Navbar;
