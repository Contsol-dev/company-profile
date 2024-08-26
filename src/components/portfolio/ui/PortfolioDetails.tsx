"use client";
import React from 'react';
import { useParams } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { notFound } from "next/navigation";

interface PortfolioDetailProps {
  portfolio: {
    id: string;
    type: string;
    name: string;
    image: string;
    overview: string;
  };
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ portfolio }) => {
  return (
    <div className="p-6">
      <img src={portfolio.image} alt={portfolio.name} className="w-full h-64 object-cover mb-4"/>
      <h1 className="text-3xl font-semibold mb-2">{portfolio.name}</h1>
      <p className="text-lg text-gray-500 mb-4">{portfolio.type}</p>
      <p className="text-gray-700">{portfolio.overview}</p>
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

  return <PortfolioDetail portfolio={portfolio} />;
}

export default PortfolioComponent;