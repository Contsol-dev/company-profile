import React, { useState } from "react";
import Link from "next/link";
import PortfolioCard from "./ui/PortfolioCard";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DevelopmentSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(portfolioData.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = portfolioData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page: number) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
      const element = document.getElementById('development-heading');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 64;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 300);
  };
  

  return (
    <div id="development-heading" className="h-full bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-xl font-bold mb-8 text-center p-2 bg-cont-primary uppercase rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Development
        </motion.h1>

        <div ref={ref} className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: cardsPerPage }).map((_, index) => (
                <Skeleton key={index} height={300} />
              ))
            : currentCards.map((portfolio, index) => (
                <motion.div
                  key={portfolio.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/portfolio/${portfolio.id}`}>
                    <PortfolioCard portfolio={portfolio} />
                  </Link>
                </motion.div>
              ))}
        </div>

        <div className="flex justify-center mt-8 items-center">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <FaArrowLeft />
            </button>
          )}
          <div className="flex space-x-2 mx-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-2 py-1 transition-colors duration-200 ${
                  page === currentPage
                    ? "text-blue-600 underline"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSection;
