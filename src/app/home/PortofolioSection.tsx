import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  const PortofolioSection = () => {
    const cards = [
      {
        image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        title: "UI/UX Review Check",
        description:
          'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      },
      {
        image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        title: "Design Improvements",
        description:
          "Beautiful interiors, stunning images, and carefully crafted layouts that bring your ideas to life.",
      },
      {
        image: "https://images.unsplash.com/photo-1572274402936-5079a587f6f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        title: "Modern Design",
        description:
          "Experience the essence of modern design with our contemporary layouts and sleek finishes.",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <Typography variant="h1" className="mb-8 text-6xl text-center text-cont-primary">
            Berikut adalah portofolio kami
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} className="mt-6 w-full">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img src={card.image} alt={`card-image-${index}`} className="w-full h-full object-cover" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button className="inline-block bg-cont-primary text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition duration-300 ease-in-out hover:bg-cont-secondary">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="inline-block bg-cont-primary text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition duration-300 ease-in-out hover:bg-cont-secondary">Tampilkan Lebih Banyak</Button>
          </div>
        </div>
      </section>
    );
  };
  
  export default PortofolioSection;
  