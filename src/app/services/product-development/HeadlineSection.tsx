import Link from "next/link";
import Image from "next/image";
import photo from "../../../assets/product-development.jpg";

const HeadlineSection = () => {
  return (
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
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-white text-center mb-5 font-sans">
          Product Development
        </h1>
        <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold text-white text-center mb-2 font-sans">
          Struggling to turn your ideas into tangible, successful products?
        </h1>
        <p className="xl:mx-80 lg:mx-60 md:mx-40 mx-20 xl:text-2xl lg:text-xl md:text-lg text-base text-white text-center font-sans">
          Our product development services offer a comprehensive solution that
          combines innovation, research, and execution. Our experienced team
          will assist you through every stage, from concept to launch, ensuring
          your product meets market needs and is ready to compete. Choose our
          product development services for innovative and practical solutions.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="#"
            className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-sm hover:bg-cont-secondary"
          >
            Develop Your Product
          </Link>
          <Link
            href="#"
            className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-sm hover:bg-cont-secondary"
          >
            Consult with an Expert
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadlineSection;
