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
        <h1 className="text-5xl font-bold text-white text-center mb-5 font-sans">
          IT Manpower Sharing
        </h1>
        <p className="mx-80 text-2xl text-white text-center font-sans">
          Struggling with the cost of building a team of developers? IT staff
          augmentation offers a powerful alternative that sets itself apart from
          outsourcing and recruitment. Hire a dedicated IT team to provide
          specialized expertise, drive innovation, ensure compliance, and reduce
          costs, allowing your business to focus on its core functions.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="#"
            className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold text-xl hover:bg-cont-secondary"
          >
            Hire Dedicated IT Team
          </Link>
          <Link
            href="#"
            className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold text-xl hover:bg-cont-secondary"
          >
            Join as Talent
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadlineSection;
