import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../../assets/contsol-members.jpeg";
import { videos } from "@/data/portfolioData";

const CreativeSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const openModal = (embedId: string) => setSelectedVideo(embedId);
  const closeModal = () => setSelectedVideo(null);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % videos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl font-bold mb-8 text-center p-2 bg-cont-primary uppercase rounded-lg">
          Creative
        </h1>
        <h1 className="text-xl font-bold mb-8 mx-auto text-center w-[50vw] p-2 text-cont-primary bg-cont-secondary uppercase rounded-lg">
          Social Media Management
        </h1>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-xs font-semibold text-blue-900 uppercase">
              Second Question Answer
            </h2>
            <h3 className="text-2xl font-bold text-gray-900">
              Usually Asked Question Clients
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="text-blue-900 font-semibold mt-4">
              Where I Get Meeting Day?
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <Image
              src={image}
              alt="Uploaded Example"
              className="rounded-md h-64 md:h-80 lg:h-96 object-cover"
              width={600}
              height={400}
            />
          </motion.div>
        </div>

        <div className="relative mt-14 overflow-hidden">
        <h1 className="text-xl font-bold mb-8 mx-auto text-center w-[50vw] p-2 text-cont-primary bg-cont-secondary uppercase rounded-lg">
          Video Editing
        </h1>
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            initial={{ x: "-100%" }}
            animate={{ x: `-${currentSlide * 100}%` }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className="min-w-full flex-shrink-0 cursor-pointer"
                onClick={() => video.embedId && openModal(video.embedId)}
              >
                <div className="relative pb-[36.25%] w-[60%] mx-auto">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="text-center text-blue-900 mt-2">
                  {video.title}
                </h4>
                <p className="text-center text-gray-500">
                  {video.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-cont-primary p-2 bg-transparent focus:outline-none"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-cont-primary p-2 bg-transparent focus:outline-none"
          >
            &gt;
          </button>
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-2xl font-bold"
              >
                &times;
              </button>
              <iframe
                className="w-full h-[80vh] rounded-md"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreativeSection;
