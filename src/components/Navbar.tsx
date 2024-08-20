import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed w-full h-fit shadow-xl bg-white z-50">
      <div className="flex justify-between items-center w-full px-4 py-4 2xl:px-16">
        <div className="flex flex-row gap-3 items-center ml-4">
          <Image
            src={logo}
            alt="Logo"
            width="45"
            height="45"
            className="cursor-pointer"
            priority
          />
          <div className="text-cont-primary ltr font-[ITC Avant Garde] ml-0 leading-[0.88882623] text-lg normal-case tracking-[-0.02em]">
            <span className="text-cont-primary font-bold text-lgg">Cont</span>
            <span className="text-cont-primary font-normal text-lgg">
              Solutions
            </span>
          </div>
        </div>
        <div className="hidden lg:flex gap-10 text-lg text-cont-primary">
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/"
          >
            About
          </Link>
          <div className="relative">
            <button
              className="font-bold hover:text-cont-secondary flex flex-row items-center transition-all"
              onClick={toggleDropdown}
            >
              Service
              <GoTriangleDown
                className={`ml-2 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full w-full lg:w-auto lg:max-w-4xl bg-transparent lg:bg-white lg:flex lg:flex-row p-6 lg:p-0 border lg:border-none shadow-lg lg:shadow-none transition-opacity opacity-0 lg:opacity-100">
                <ul className="flex flex-col lg:flex-row gap-6 list-none m-0 p-0 lg:gap-8 lg:p-6">
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/it-manpower-sharing"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      IT Manpower Sharing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/"
          >
            Portfolio
          </Link>
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/"
          >
            Careers
          </Link>
        </div>
        <div className="hidden lg:flex hover:scale-110 transition-all">
          <Link
            className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold text-base"
            href="/"
          >
            Contact Us
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-10 h-10 fill-cont-primary stroke-cont-primary"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white shadow-l py-4">
          <div className="">
            <Link
              className="text-base hover:text-cont-secondary transition-all"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-base hover:text-cont-secondary transition-all"
              href="/"
            >
              About
            </Link>
            <Link
              className="text-base hover:text-cont-secondary transition-all"
              href="/"
            >
              Service
            </Link>
            <Link
              className="text-base hover:text-cont-secondary transition-all"
              href="/"
            >
              Portfolio
            </Link>
            <Link
              className="text-base hover:text-cont-secondary transition-all"
              href="/"
            >
              Careers
            </Link>
            <Link
              className="bg-cont-primary text-white px-8 py-3 rounded-full font-bold text-base hover:scale-110 transition-all"
              href="/"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
