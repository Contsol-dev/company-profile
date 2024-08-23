import React from 'react';
import Link from 'next/link';
import PortfolioCard from './ui/PortfolioCard';
import { portfolioData } from "@/data/portfolioData";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DevelopmentSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-xl font-bold mb-8 text-center p-2 bg-cont-primary uppercase rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6}}  
        >
          Development
        </motion.h1>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((portfolio, index) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }} 
            >
              <Link  href={`/portfolio/${portfolio.id}`}>
                <PortfolioCard portfolio={portfolio} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevelopmentSection;
