import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioCard from './ui/PortfolioCard';
import { portfolioData } from "@/data/portfolioData";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const DevelopmentSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  });

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(portfolioData.length / cardsPerPage);

  // Calculate the range of cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = portfolioData.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      
      const element = document.getElementById('development');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      
      const element = document.getElementById('development');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  

  return (
    <div id="development" className="h-full bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-xl font-bold mb-8 text-center p-2 bg-cont-primary uppercase rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}  
        >
          Development
        </motion.h1>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCards.map((portfolio, index) => (
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

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 items-center">
          {currentPage > 1 && (
            <button
              onClick={handlePreviousPage}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              <FaArrowLeft />
            </button>
          )}
          <div className="flex space-x-2 mx-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-2 py-1 transition-colors duration-200 ${
                  page === currentPage ? 'text-blue-600 underline' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          {currentPage < totalPages && (
            <button
              onClick={handleNextPage}
              className="p-2 text-gray-600 hover:text-blue-600"
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
