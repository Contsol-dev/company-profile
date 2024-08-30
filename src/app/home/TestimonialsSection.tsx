import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Client from "@/assets/members/iqbal.jpg";


interface Testimonial {
  name: string;
  photo: string | StaticImageData;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    photo: Client, 
    testimonial: "This company provided excellent service and I'm very satisfied with the results.",
  },
  {
    name: 'Jane Smith',
    photo: Client, 
    testimonial: 'Amazing experience! The team was professional and delivered on time.',
  },
  {
    name: 'Mike Johnson',
    photo: Client, 
    testimonial: 'Great quality and attention to detail. Highly recommend their services.',
  },
];

interface TestimonialCardProps {
  photo: string | StaticImageData;
  name: string;
  testimonial: string;
}

// TestimonialCard component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ photo, name, testimonial }) => {
  return (
    <div className="bg-white w-160 h-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center">
        <img
          src={typeof photo === 'string' ? photo : (photo as StaticImageData).src} 
          alt={name}
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <h4 className="text-lg text-cont-primary font-semibold">{name}</h4>
        </div>
      </div>
      <p className="mt-12 text-gray-600">{testimonial}</p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 bg-cont-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              photo={testimonial.photo}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
