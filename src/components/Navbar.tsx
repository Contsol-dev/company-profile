import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full h-fit shadow-xl bg-white z-50">
      <div className="flex justify-between items-center w-full px-4 py-6 2xl:px-16">
        <div className="flex flex-row gap-3 items-center ml-4">
          <Image
            src={logo}
            alt="Logo"
            width="45"
            height="45"
            className="cursor-pointer"
            priority
          />
          <div className="text-cont-primary ltr font-[ITC Avant Garde] ml-0 leading-[0.88882623] text-left normal-case tracking-[-0.02em]">
            <span className="text-cont-primary font-bold text-lg">Cont</span>
            <span className="text-cont-primary font-normal text-lg">
              Solutions
            </span>
          </div>
        </div>
        <div className="hidden lg:flex gap-10 text-xl text-cont-primary">
          <Link className="font-bold hover:text-cont-secondary transition-all" href="/">Home</Link>
          <Link className="font-bold hover:text-cont-secondary transition-all" href="/">Layanan</Link>
          <Link className="font-bold hover:text-cont-secondary transition-all" href="/">Tentang</Link>
          <Link className="font-bold hover:text-cont-secondary transition-all" href="/">Portofolio</Link>
        </div>
        <div className="hidden lg:flex hover:scale-110 transition-all">
          <Link className="bg-cont-primary text-white px-8 py-3 rounded-full font-bold text-xl" href="/">Konsultasi Gratis</Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-10 h-10 fill-cont-primary stroke-cont-primary" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
            kontolodon 
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl py-4">
          <div className="flex flex-col items-center gap-4 text-xl text-cont-primary">
            <Link className="font-bold hover:text-cont-secondary transition-all" href="/">Home</Link>
            <Link className="font-bold hover:text-cont-secondary transition-all" href="/">Layanan</Link>
            <Link className="font-bold hover:text-cont-secondary transition-all" href="/">Tentang</Link>
            <Link className="font-bold hover:text-cont-secondary transition-all" href="/">Portofolio</Link>
            <Link className="bg-cont-primary text-white px-8 py-3 rounded-full font-bold text-xl hover:scale-110 transition-all" href="/">Konsultasi Gratis</Link>
          </div>
        </div>
      )}
    </nav>

  );
};

export default Navbar;
