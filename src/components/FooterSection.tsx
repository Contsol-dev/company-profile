import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import mapImage from "../assets/logo.png"; // ganti dengan path peta yang benar

const FooterSection = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <img src={logo} alt="Logo" className="mb-4" />
          <img src={mapImage} alt="ContSol Office" className="mb-4" />
          <p className="text-gray-600">
            ContSol merupakan perusahaan konsultan yang bertujuan membantu bisnis dalam melakukan Digital Marketing dengan berbagai layanan terbaik.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-black">Company</h3>
          <ul>
            <li><a href="#" className="hover:underline text-black">About</a></li>
            <li><a href="#" className="hover:underline text-black">Contact Us</a></li>
            <li><a href="#" className="hover:underline text-black">Portfolio</a></li>
            <li><a href="#" className="hover:underline text-black">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-black">Our Solutions</h3>
          <ul>
            <li><a href="#" className="hover:underline text-black">IT Manpower Sharing</a></li>
            <li><a href="#" className="hover:underline text-black">Product Development</a></li>
            <li><a href="#" className="hover:underline text-black">Website Development</a></li>
            <li><a href="#" className="hover:underline text-black">Mobile App Development</a></li>
            <li><a href="#" className="hover:underline text-black">IoT Development</a></li>
            <li><a href="#" className="hover:underline text-black">Data Analysis</a></li>
            <li><a href="#" className="hover:underline text-black">Network Installation</a></li>
            <li><a href="#" className="hover:underline text-black">AI Engineering</a></li>
            <li><a href="#" className="hover:underline text-black">UI / UX Design</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-black">Get in Touch</h3>
          <p className="text-gray-600">E-mail: hello@contsoldev.com</p>
          <p className="text-gray-600">Whatsapp Call / Text: +6288-225-444-313</p>
          <p className="text-gray-600">Office Yogyakarta: Jl Persatuan 3, dst.</p>
          <h3 className="font-bold mt-4 mb-4 text-black">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600 text-black"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-blue-400 text-black"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-pink-600 text-black"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-red-600 text-black"><FaYoutube size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
