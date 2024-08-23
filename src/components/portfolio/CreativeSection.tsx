import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../../assets/bg-overlay.png";

const CreativeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl font-bold mb-8 text-center p-2 bg-cont-primary uppercase rounded-lg">
          CREATIVE
        </h1>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <iframe
              className="w-full h-64 md:h-80 lg:h-96 rounded-md"
              src="https://www.youtube.com/embed/D8VEhcPeSlc"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4">
              <h2 className="text-xs font-semibold text-blue-900 uppercase">
                Team Working
              </h2>
              <h3 className="text-2xl font-bold text-gray-900">
                Let's See Our Perfect Team Worker
              </h3>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <ul className="list-disc list-inside text-cyan-700">
              <li>Flexible Time</li>
              <li>Perfect Work</li>
              <li>Client Priority</li>
            </ul>
          </motion.div>
        </div>

        <div ref={ref} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="gap-8"
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
      </div>
    </div>
  );
};

export default CreativeSection;
