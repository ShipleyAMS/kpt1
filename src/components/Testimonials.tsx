
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  country: string;
  quote: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Brightstar Publishing",
      country: "United States",
      quote: "King Tai has been our trusted printing partner for over 5 years. Their attention to detail and commitment to quality is unmatched in the industry. Our premium book series wouldn't be the same without them."
    },
    {
      id: 2,
      name: "David Wilson",
      company: "Luxury Wines Ltd.",
      country: "Australia",
      quote: "The wine boxes produced by King Tai have elevated our brand presence. The craftsmanship and premium finish on each box perfectly represents the quality of our wines. Highly recommended!"
    },
    {
      id: 3,
      name: "Laura Chen",
      company: "Elegant Cosmetics",
      country: "Singapore",
      quote: "Working with King Tai for our cosmetics packaging needs has been a game-changer. Their innovative designs and attention to sustainability align perfectly with our brand values."
    },
    {
      id: 4,
      name: "Michael Roberts",
      company: "Global Gifts",
      country: "United Kingdom",
      quote: "The shopping bags and gift boxes we order from King Tai always exceed our expectations. Our customers frequently comment on how premium our packaging feels. A truly exceptional supplier."
    },
    {
      id: 5,
      name: "Sophia Li",
      company: "Children's Learning Press",
      country: "Canada",
      quote: "The children's books printed by King Tai feature vibrant colors and durable binding that withstand even the most enthusiastic young readers. Their quality control is impeccable."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === testimonials.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) return testimonials.length - 1;
      return prevIndex - 1;
    });
  };
  
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-12 bg-forest-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-king-primary">Client Testimonials</h2>
          <div className="mt-2 h-1 w-20 bg-forest-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-forest-600 max-w-2xl mx-auto text-sm md:text-base">
            Hear what our clients from around the world have to say about their experience working with King Tai.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Quote className="h-10 w-10 text-forest-200" />
              </div>
              
              <blockquote className="text-center">
                <p className="text-md md:text-lg text-forest-700 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <footer className="mt-3">
                  <div className="font-semibold text-forest-800 text-base">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-forest-600 text-sm">
                    {testimonials[currentIndex].company}, {testimonials[currentIndex].country}
                  </div>
                </footer>
              </blockquote>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-forest-50 focus:outline-none hidden md:block"
            >
              <ChevronLeft className="h-4 w-4 text-forest-700" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-forest-50 focus:outline-none hidden md:block"
            >
              <ChevronRight className="h-4 w-4 text-forest-700" />
            </button>
          </div>
          
          {/* Mobile navigation buttons */}
          <div className="flex justify-center space-x-4 mt-4 md:hidden">
            <button
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-forest-50 focus:outline-none"
            >
              <ChevronLeft className="h-4 w-4 text-forest-700" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-forest-50 focus:outline-none"
            >
              <ChevronRight className="h-4 w-4 text-forest-700" />
            </button>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentIndex === index ? "bg-forest-600 w-6" : "bg-forest-300 hover:bg-forest-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
