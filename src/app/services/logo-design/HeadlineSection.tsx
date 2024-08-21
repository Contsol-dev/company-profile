import Link from "next/link";
import Image from "next/image";
import photo from "../../../assets/product-development.jpg";

const HeadlineSection = () => {
  return (
    <>
      <div className="sm:h-20 h-0"></div>
      <div className="relative bg-gray-200 p-8 h-0 pb-[48%] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={photo}
            className="w-full h-full object-cover filter brightness-25"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="xl:text-5xl mx-20 lg:text-4xl md:text-3xl text-2xl font-bold text-white text-center mb-5 font-sans">
            Logo Design
          </h1>
          <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold text-white text-center mb-2 font-sans">
            Looking to Create a Strong Visual Identity for Your Brand?
          </h1>

          <p className="xl:mx-80 lg:mx-60 md:mx-40 mx-20 xl:text-2xl lg:text-xl md:text-lg text-base text-white text-center font-sans">
            Our logo design services provide creative and unique solutions that
            reflect your business values. We create logos that are easily
            recognizable and leave a lasting impression. Choose our logo design
            services for professional and meaningful solutions.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="#"
              className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-sm hover:bg-cont-secondary"
            >
              Create Your Logo
            </Link>
            <Link
              href="#"
              className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-sm hover:bg-cont-secondary"
            >
              Logo Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadlineSection;
