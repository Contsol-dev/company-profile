import Image from "next/image";
import Gkd from "../../../assets/logo-gkd.jpg";
import Dlhk from "../../../assets/logo-dlhk.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const ClientSection = () => {
  return (
    <section className="flex flex-col items-center p-10 bg-gray-100 px-40">
      <h2 className="text-5xl font-bold text-sky-950 text-center mb-5 font-sans">
        Our Clients
      </h2>
      <div className="mt-8 w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Gkd}
              alt="Gemala Kempa Daya Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Dlhk}
              alt="Dinas Lingkungan Hidup Yogyakarta Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          {/* Duplicates for proper looping */}
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Gkd}
              alt="Gemala Kempa Daya Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Dlhk}
              alt="Dinas Lingkungan Hidup Yogyakarta Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Gkd}
              alt="Gemala Kempa Daya Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Dlhk}
              alt="Dinas Lingkungan Hidup Yogyakarta Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          {/* Duplicates for proper looping */}
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Gkd}
              alt="Gemala Kempa Daya Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Dlhk}
              alt="Dinas Lingkungan Hidup Yogyakarta Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Gkd}
              alt="Gemala Kempa Daya Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Dlhk}
              alt="Dinas Lingkungan Hidup Yogyakarta Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          {/* Duplicates for proper looping */}
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Gkd}
              alt="Gemala Kempa Daya Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Dlhk}
              alt="Dinas Lingkungan Hidup Yogyakarta Logo"
              className="h-[150px] w-auto object-contain"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSection;
