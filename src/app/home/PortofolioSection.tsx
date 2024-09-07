import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import { portfolioData } from "@/data/portfolioData";

const PortfolioSection = () => {
  return (
    <section className="py-6 bg-gray-100">
      <h1 className="font-bold text-cont-primary text-3xl text-center mb-6">
        Development Portfolio
      </h1>

      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 }, 
          768: { slidesPerView: 3 }, 
          1024: { slidesPerView: 4 }, 
        }}
      >
        {portfolioData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[60vh] max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
              
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50">
                <img
                  src={item.overlay}
                  alt={`${item.name} overlay`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 p-4 bg-cont-primary bg-opacity-10 rounded-lg text-white">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm">{item.service}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h1 className="font-bold text-cont-primary text-3xl text-center my-6">
        Creative Portfolio
      </h1>
    </section>
  );
};

export default PortfolioSection;
