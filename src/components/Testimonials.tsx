
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  country?: string;
  quote: string;
  position?: string;
}

const Testimonials = ({ limit }: { limit?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Kevin R.",
      company: "Company",
      position: "General Manager",
      quote: "After receiving the delivery and opening one of the boxes, I was completely blown away on the quality and craftsmanship of your work. We are so very satisfied, thank you as always for your incredible work, we look forward to working with you in the future. Thanks for all your hard work and efforts!"
    },
    {
      id: 2,
      name: "Sarah M.",
      company: "Luxe Home Interiors",
      position: "Marketing Director",
      quote: "We recently ordered catalogues and brochures for our latest product line, and I couldn't be more impressed with the results! The quality of the print work was absolutely top-notch, and our clients were blown away by the vibrant colors and sleek finish. The attention to detail was evident in every page. This company truly understands the importance of great print materials for our brand, and I'll definitely be back for future orders!"
    },
    {
      id: 3,
      name: "James L.",
      company: "Author",
      quote: "We decided to print our new book with this company, and the final product exceeded all expectations. The quality of the paper, the binding, and the overall finish was simply outstanding. It's clear that they take great pride in their work. Our readers have already commented on how professional the book feels. We're so impressed, we'll definitely be placing another order for our next project!"
    },
    {
      id: 4,
      name: "Emily R.",
      company: "Jewelry Startup",
      position: "Founder",
      quote: "As a new jewelry startup, packaging is everything, and I couldn't be happier with the jewelry boxes I ordered. The boxes are sturdy, beautifully designed, and the perfect complement to our brand. The best part? The price was incredibly reasonable for the quality we received. I'll definitely be ordering again as we grow!"
    }
  ];

  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === displayedTestimonials.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) return displayedTestimonials.length - 1;
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
            Hear what our clients have to say about their experience working with King Tai.
          </p>
          {!limit && (
            <Link
              to="/#contact"
              className="inline-block mt-6 px-6 py-3 bg-[#AA8066] text-white font-semibold rounded-md hover:bg-[#96705a] transition-colors"
            >
              REQUEST CUSTOM QUOTE
            </Link>
          )}
          {limit && (
            <div className="mt-4">
              <Link
                to="/testimonials"
                className="text-forest-700 hover:text-king-primary transition-colors underline"
              >
                View all testimonials
              </Link>
            </div>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Quote className="h-10 w-10 text-forest-200" />
              </div>
              
              <blockquote className="text-center">
                <p className="text-md md:text-lg text-forest-700 italic mb-6">
                  "{displayedTestimonials[currentIndex].quote}"
                </p>
                <footer className="mt-3">
                  <div className="font-semibold text-forest-800 text-base">
                    {displayedTestimonials[currentIndex].name}
                  </div>
                  <div className="text-forest-600 text-sm">
                    {displayedTestimonials[currentIndex].position && 
                      `${displayedTestimonials[currentIndex].position}, `}
                    {displayedTestimonials[currentIndex].company}
                    {displayedTestimonials[currentIndex].country && 
                      `, ${displayedTestimonials[currentIndex].country}`}
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
            {displayedTestimonials.map((_, index) => (
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
