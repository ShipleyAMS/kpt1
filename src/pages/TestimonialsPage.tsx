
import React from 'react';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const TestimonialsPage = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'Testimonials | King Tai Printing & Packaging';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-8 bg-forest-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-king-primary text-center">
            What Our Clients Say
          </h1>
          <div className="mt-2 h-1 w-20 bg-forest-400 mx-auto rounded-full"></div>
        </div>
      </div>
      
      <Testimonials showControls={false} />
      
      <div className="py-8 bg-forest-50 text-center">
        <Link
          to="/#contact"
          className="inline-block px-6 py-3 bg-[#AA8066] text-white font-semibold rounded-md hover:bg-[#96705a] transition-colors"
        >
          REQUEST CUSTOM QUOTE
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
