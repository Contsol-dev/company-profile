import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import logoWhite from "@/assets/ic_logo_white.png";

const FooterSection = () => {
  return (
    <footer className="bg-cont-primary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="flex-shrink-0 md:mb-2 md:mr-4">
            <Image
              src={logoWhite}
              alt="Logo"
              className="md:items-start"
              width={80}
              height={40}
            />
          </div>
          <div className="flex flex-col mt-1 text-center md:text-left">
            <h3 className="font-bold text-3xl leading-none">CONT</h3>
            <h3 className="font-bold text-3xl leading-none">SOLUTIONS</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <div className="mb-4 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.060876755317!2d110.41221291477642!3d-7.783780894387704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f888be3885%3A0x6a8b8a923b13894b!2sJl.%20Persatuan%20III%20No.28%2C%20Demangan%2C%20Maguwoharjo%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281!5e0!3m2!1sen!2sid!4v1605702434181!5m2!1sen!2sid"
                width="100%"
                height="300"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <h3 className="font-bold mb-4">INFORMATION</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@contsol?lang=en"
                className="hover:text-gray-400"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://www.instagram.com/contsol.dev/"
                className="hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCo_BYx1dFMSVs4vS9m2PsfQ"
                className="hover:text-gray-400"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li className="mb-2">
                <a href="/about">
                  {">"} <span className="hover:underline">About</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact-us">
                  {">"} <span className="hover:underline">Contact Us</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/portfolio">
                  {">"} <span className="hover:underline">Portfolio</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/careers">
                  {">"} <span className="hover:underline">Careers</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">DEVELOPMENT</h3>
            <ul className="space-y-2">
              <li className="mb-2">
                <a href="/services/it-manpower-sharing">
                  {">"}{" "}
                  <span className="hover:underline">IT Manpower Sharing</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/product-development">
                  {">"}{" "}
                  <span className="hover:underline">Product Development</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/website-development">
                  {">"}{" "}
                  <span className="hover:underline">Website Development</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/application-development">
                  {">"}{" "}
                  <span className="hover:underline">
                    Application Development
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/mobile-app-development">
                  {">"}{" "}
                  <span className="hover:underline">
                    Mobile App Development
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/iot-development">
                  {">"} <span className="hover:underline">IoT Development</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/data-analysis">
                  {">"} <span className="hover:underline">Data Analysis</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/network-installation">
                  {">"}{" "}
                  <span className="hover:underline">Network Installation</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/ai-development">
                  {">"} <span className="hover:underline">AI Development</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/ui-ux-design">
                  {">"} <span className="hover:underline">UI / UX Design</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">CREATIVE</h3>
            <ul className="space-y-2">
              <li className="mb-2">
                <a href="/services/logo-design">
                  {">"} <span className="hover:underline">Logo Design</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/social-media-management">
                  {">"}{" "}
                  <span className="hover:underline">
                    Social Media Management
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/photo-product">
                  {">"} <span className="hover:underline">Photo Product</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/services/video-ads-production">
                  {">"}{" "}
                  <span className="hover:underline">Video Ads Production</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT US</h3>
            <p className="mb-2">
              <span className="font-semibold">E-mail :</span>{" "}
              <a href="mailto:contsolhelp@gmail.com">contsolhelp@gmail.com</a>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Whatsapp Call / Text :</span>{" "}
              +6288-225-444-313
            </p>
            <p className="mb-4">
              <span className="font-semibold">Office Yogyakarta :</span>
              <br />
              Jl. Persatuan 3 No.28, RT.07/RW.20, Demangan, Maguwoharjo, Kec.
              Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-24 mt-16 border-t-2 border-white opacity-50" />
      <div className="mx-24 mt-2 text-start text-sm">
        <p>© COPYRIGHT 2024. ALL RIGHTS RESERVED BY CONT SOLUTIONS</p>
      </div>
    </footer>
  );
};

export default FooterSection;
