import Image from "next/image";
import Gkd from "../../../assets/clients/logo-gkd.png";
import Dlhk from "../../../assets/clients/logo-dlhk.png";
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
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 6,
            },
          }}
          className="w-full"
        >
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={Gkd}
              alt="Gemala Kempa Daya Logo"
              className="h-[150px] w-auto object-contain mix-blend-screen"
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
