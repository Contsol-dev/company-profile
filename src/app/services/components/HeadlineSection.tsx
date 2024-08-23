import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface HeadlineSectionProps {
  title: string;
  subhead1: string;
  subhead2: string | undefined;
  caption: string;
  photo: StaticImageData;
  button1: string;
  button2: string;
}

const HeadlineSection = ({
  title,
  subhead1,
  subhead2,
  caption,
  photo,
  button1,
  button2,
}: HeadlineSectionProps) => {
  return (
    <div className="relative bg-gray-200 p-8 h-0 pb-[48%] overflow-hidden min-h-96">
      <div className="absolute inset-0 w-full h-full ">
        <Image
          src={photo}
          className="w-full h-full object-cover filter brightness-25"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl mt-8 md:mt-20 font-bold text-white text-center xl:mb-5 lg:mb-5 md:mb-2 mb-2 font-sans">
          {title}
        </h1>
        <h1 className="xl:text-3xl lg:text-2xl md:text-lg text-base font-bold text-white text-center mb-2 xl:mx-20 lg:mx-20 md:mx-20 mx-10 font-sans">
          {subhead1}
        </h1>
        {subhead2 && (
          <h1 className="xl:text-3xl lg:text-2xl md:text-lg text-base font-bold text-white text-center mb-2 xl:mx-20 lg:mx-20 md:mx-20 mx-10 font-sans">
            {subhead2}
          </h1>
        )}
        <p className="xl:mx-70 lg:mx-60 md:mx-40 xl:mx-20 mx-10 xl:text-2xl lg:text-xl md:text-base text-xs sm:text-sm text-white text-center font-sans">
          {caption}
        </p>
        <div className="xl:mt-8 lg:mt-8 md:mt-5 mt-5 flex justify-center space-x-4">
          <Link
            href="https://wa.me/6288225444313"
            className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-xs hover:bg-cont-secondary hover:transition-all duration-500 ease-in-out"
          >
            {button1}
          </Link>
          <Link
            href="/contact-us"
            className="bg-cont-primary text-white px-6 py-3 rounded-full font-bold xl:text-xl lg:text-lg md:text-base text-xs hover:bg-cont-secondary hover:transition-all duration-500 ease-in-out"
          >
            {button2}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadlineSection;
