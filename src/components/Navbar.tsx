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
        {/* Logo */}
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

        {/* Menu Links */}
        <div className="hidden lg:flex gap-10 text-lg text-cont-primary">
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/about"
          >
            About
          </Link>
          <div className="relative">
            <button
              className="font-bold hover:text-cont-secondary flex flex-row items-center transition-all"
              onClick={toggleDropdown}
            >
              Services
              <GoTriangleDown
                className={`ml-2 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full w-[300px] lg:w-[600px] bg-white p-6 border shadow-lg z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-cont-primary mb-2">DEVELOPMENT</h3>
                    <ul className="list-none">
                      <li>
                        <Link
                          href="#"
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
                          Product Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Website Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Application Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          IoT Development
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-cont-primary mb-2">CREATIVE</h3>
                    <ul className="list-none">
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Logo Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Social Media Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Design Guidelines
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Photo Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Video Ads Production
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/careers"
          >
            Careers
          </Link>
        </div>

        {/* Contact Us Button */}
        <div className="hidden lg:flex hover:scale-110 transition-all">
          <Link
            className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold text-base"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-l py-4">
          <div className="flex flex-col gap-4 px-4">
            <Link
              className="text-base font-bold hover:text-cont-secondary transition-all"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-base font-bold hover:text-cont-secondary transition-all"
              href="/about"
            >
              About
            </Link>
            <button
              className="text-base font-bold hover:text-cont-secondary transition-all"
              onClick={toggleDropdown}
            >
              Services
              <GoTriangleDown
                className={`ml-2 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col px-4">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/it-manpower-sharing"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  IT Manpower Sharing
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Mobile Development
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  UI/UX Design
                </Link>
              </div>
            )}
            <Link
              className="text-base font-bold hover:text-cont-secondary transition-all"
              href="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="text-base font-bold hover:text-cont-secondary transition-all"
              href="/careers"
            >
              Careers
            </Link>
            <Link
              className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold text-base hover:scale-110 transition-all"
              href="/contact-us"
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

