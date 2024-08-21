import Link from "next/link";
import Image from "next/image";
import photo from "../../../assets/it-manpower-sharing.jpg";

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
          IT Manpower Sharing
        </h1>
        <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold text-white text-center mb-2 font-sans">
          Struggling with the cost of building a team of developers?
        </h1>
        <p className="xl:mx-80 lg:mx-60 md:mx-40 mx-20 xl:text-2xl lg:text-xl md:text-lg text-base text-white text-center font-sans">
          IT staff augmentation offers a powerful alternative that sets itself
          apart from outsourcing and recruitment. Hire a dedicated IT team to
          provide specialized expertise, drive innovation, ensure compliance,
          and reduce costs, allowing your business to focus on its core
          functions.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="#"
            className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-sm hover:bg-cont-secondary"
          >
            Hire Dedicated IT Team
          </Link>
          <Link
            href="#"
            className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-sm hover:bg-cont-secondary"
          >
            Join as Talent
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadlineSection;
