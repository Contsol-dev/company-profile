import React from "react";

const PortofolioSection = () => {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "UI/UX Review Check",
      description:
        'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
    },
    {
      image:
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "Design Improvements",
      description:
        "Beautiful interiors, stunning images, and carefully crafted layouts that bring your ideas to life.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1572274402936-5079a587f6f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "Modern Design",
      description:
        "Experience the essence of modern design with our contemporary layouts and sleek finishes.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl text-center text-cont-primary">
          Berikut adalah portofolio kami
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-56">
                <img
                  src={card.image}
                  alt={`card-image-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="text-xl md:text-2xl font-semibold text-blue-gray-800 mb-2">
                  {card.title}
                </h5>
                <p className="text-gray-700 text-sm md:text-base">
                  {card.description}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button className="inline-block bg-cont-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg font-semibold transition duration-300 ease-in-out hover:bg-cont-secondary">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="inline-block bg-cont-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg font-semibold transition duration-300 ease-in-out hover:bg-cont-secondary">
            Tampilkan Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortofolioSection;
