import video from "../../assets/headline_video.mp4";

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
        <h1 className="text-9xl font-bold text-white text-center mb-5">
          Contsol Dev
        </h1>
        <h2 className="text-3xl font-semibold text-white text-center">
          Continuous Development
        </h2>
        <h2 className="text-3xl font-semibold text-white text-center">
          Innovative Solutions
        </h2>
      </div>
    </div>
  );
};

export default HeadlineSection;
