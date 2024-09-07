"use client";
import React from "react";
import { useParams } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; 

interface PortfolioDetailProps {
  portfolio: {
    id: string;
    type: string;
    name: string;
    image: string;
    description: string;
    overview: string;
    assets: string;
  };
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ portfolio }) => {
  return (
    <div className="w-full min-h-[100vh] bg-gray-100 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto"
      >
        <div>
          <h2 className="text-xl text-gray-500 mb-2">Our Partner</h2>
          <h1 className="text-3xl lg:text-4xl text-cont-primary font-bold mb-4">
            {portfolio.name} – {portfolio.type}
          </h1>
          <p className="text-gray-700 mb-4">{portfolio.description}</p>

          <h3 className="text-2xl text-cont-primary font-semibold mb-2">
            Project Description
          </h3>
          <p className="text-gray-700">{portfolio.overview}</p>
        </div>

        <div className="flex justify-center items-center">
          <motion.div
            className="w-full max-w-md lg:max-w-lg object-contain p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={portfolio.assets}
              alt={`${portfolio.name} displayed on devices`}
              width={400}
              height={300}
              className="object-contain"
              onError={(e) => {
                e.currentTarget.src = "/fallback-image.png"; 
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

function PortfolioComponent() {
  const params = useParams();
  const { id } = params;

  const portfolio = portfolioData.find((item) => item.id === id);

  if (!portfolio) {
    notFound();
  }

  return (
    <AnimatePresence>
      <PortfolioDetail portfolio={portfolio} />
    </AnimatePresence>
  );
}

export default PortfolioComponent;
