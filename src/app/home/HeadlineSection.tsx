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
        <h1 className="text-1xl font-bold text-white text-center mb-1">
          WELCOME TO CONT SOLUTION INDONESIA
        </h1>
        <h2 className="text-7xl font-semibold text-white text-center">
          Continuous Development,
        </h2>
        <h2 className="text-7xl font-semibold text-white text-center">
          Innovative Solutions
        </h2>
        <button className="mt-8 px-6 py-3 bg-cont-primary text-white text-lg font-semibold rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-cont-secondary">
          LET&apos;S GO!!!!
        </button>
      </div>
    </div>
  );
};

export default HeadlineSection;
