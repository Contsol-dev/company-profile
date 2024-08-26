import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logoWhite from "@/assets/ic_logo_white.png";
import mapImage from "../assets/map.png";
import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="bg-cont-primary py-12 text-white">
      <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center mb-8">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <Image src={logoWhite} alt="Logo" className="mb-2" width={100} height={50} />
        </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-4xl leading-none">CONT</h3>
            <h3 className="font-bold text-4xl leading-none">SOLUTIONS</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src={mapImage} alt="ContSol Office" width={300} height={300} className="mb-4" />
            <h3 className="font-bold mb-4">INFORMATION</h3>
          </div>
          <div>
            <h3 className="font-bold mb-4">COMPANY</h3>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">OUR SOLUTIONS</h3>
            <ul>
              <li><a href="#" className="hover:underline">IT Manpower Sharing</a></li>
              <li><a href="#" className="hover:underline">Product Development</a></li>
              <li><a href="#" className="hover:underline">Website Development</a></li>
              <li><a href="#" className="hover:underline">Application Development</a></li>
              <li><a href="#" className="hover:underline">Mobile App Development</a></li>
              <li><a href="#" className="hover:underline">IoT Development</a></li>
              <li><a href="#" className="hover:underline">Data Analysis</a></li>
              <li><a href="#" className="hover:underline">Network Installation</a></li>
              <li><a href="#" className="hover:underline">AI Engineering</a></li>
              <li><a href="#" className="hover:underline">UI / UX Design</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT US</h3>
            <p className="mb-2">
              <span className="font-semibold">E-mail :</span> hello@contsoldev.com
            </p>
            <p className="mb-2">
              <span className="font-semibold">Whatsapp Call / Text :</span> +6288-225-444-313
            </p>
            <p className="mb-4">
              <span className="font-semibold">Office Yogyakarta :</span><br />
              Jl. Persatuan 3 No.28, RT.07/RW.20, Demangan, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-12 my-4 border-t-2 border-white opacity-50" />
      <div className="mt-4 text-center text-sm">
        <p>© COPYRIGHT 2024. ALL RIGHTS RESERVED BY CONT SOLUTIONS</p>
      </div>
    </footer>
  );
};

export default FooterSection;
