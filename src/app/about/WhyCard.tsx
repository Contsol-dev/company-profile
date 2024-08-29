import { useState } from 'react';

interface WhyCardProps {
  main: string;
  explanation: string;
}

export default function WhyCard({ main, explanation }: WhyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full h-96 perspective hover:cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-cont-primary flex flex-col overflow-hidden justify-center items-center p-4 rounded-lg">
            <h3 className="font-bold text-xl text-white text-center">{main}</h3>
          </div>
        </div>
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          <div className="w-full h-full bg-cont-primary flex flex-col overflow-hidden justify-start items-center p-8 rounded-lg">
            <p className="text-white">{explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
