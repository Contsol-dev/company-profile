export default function VisiMisi() {
  return(
    <div className=" p-4 lg:px-16 lg:py-12 w-screen flex flex-col lg:flex-row mb-12 gap-4">
      <div className="w-full lg:w-1/3">
        <h2 className="text-black font-bold uppercase text-4xl">
          Vision
        </h2>
        <h3 className="z-10 text-cont-secondary font-black uppercase text-2xl">&</h3>
        <h2 className="text-black font-bold uppercase text-4xl">
          Mission
        </h2>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <div className="mb-4">
          <h3 className="relative z-10 text-cont-secondary font-black uppercase">Vision</h3>
          <p className="font-semibold text-black text-2xl">&quot;To help solve problems through creative, innovative, and effective digital technology transformation.&quot;</p>
        </div>
        <div>
          <h3 className="relative z-10 text-cont-secondary font-black uppercase">Mission</h3>
          <div className="relative flex gap-2">
            <div className="absolute w-2 h-2 top-2 bg-cont-secondary rounded-full"></div>
            <p className="ml-4 font-semibold text-black text-xl">Providing Consultation Services for Problem Solving</p>
          </div>
          <div className="relative flex gap-2">
            <div className="absolute w-2 h-2 top-2 bg-cont-secondary rounded-full"></div>
            <p className="ml-4 font-semibold text-black text-xl">Empowering Productivity</p>
          </div>
          <div className="relative flex gap-2">
            <div className="absolute w-2 h-2 top-2 bg-cont-secondary rounded-full"></div>
            <p className="ml-4 font-semibold text-black text-xl">Optimizing Operations</p>
          </div>
          <div className="relative flex gap-2">
            <div className="absolute w-2 h-2 top-2 bg-cont-secondary rounded-full"></div>
            <p className="ml-4 font-semibold text-black text-xl">Offering Affordable and Sustainable Services</p>
          </div>
        </div>
      </div>
    </div>
  );
}