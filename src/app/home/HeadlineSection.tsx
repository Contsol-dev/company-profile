import video from "@/assets/headline_video.mp4";

const HeadlineSection = () => {
  return (
    <div className="relative bg-gray-200 p-8 h-0 pb-[48%] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover filter brightness-50"
        ></video>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white text-center mb-1 md:mb-3">
          WELCOME TO CONT SOLUTION INDONESIA
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white text-center leading-tight md:leading-snug">
          Continuous Development,
        </h2>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white text-center leading-tight md:leading-snug">
          Innovative Solutions
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-8">
          <button className="w-full md:w-auto mt-4 md:mt-0 px-4 md:px-6 py-2 md:py-3 bg-cont-primary text-white text-base md:text-lg font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-cont-secondary">
            Our Services
          </button>
          <button className="w-full md:w-auto mt-4 md:mt-0 px-4 md:px-6 py-2 md:py-3 bg-cont-primary text-white text-base md:text-lg font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-cont-secondary">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadlineSection;
