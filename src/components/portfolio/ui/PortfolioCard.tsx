import React from 'react';

interface PortfolioCardProps {
  portfolio: {
    id: string;
    type: string;
    name: string;
    image: string;
    overview: string;
    overlay: string;
  };
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
  return (
    <div className="relative border rounded-lg shadow-lg overflow-hidden group">
      <div className="relative overflow-hidden transform transition-transform duration-500 ease-in-out">
        <img
          src={portfolio.image}
          alt={portfolio.name}
          className="w-full h-48 object-cover"
        />
        <img
          src={portfolio.overlay}
          alt={`${portfolio.name} overlay`}
          className="absolute inset-0 w-full h-full object-cover z-1"
        />
      </div>
      <div className="relative w-full p-4 text-black bg-white">
        <h3 className="text-xl font-semibold transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">{portfolio.name}</h3>
        <p className="text-sm text-gray-500 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">{portfolio.type}</p>
        <p className="mt-2 text-gray-700 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">{portfolio.overview}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
