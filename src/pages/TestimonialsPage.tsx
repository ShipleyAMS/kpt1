
import React from 'react';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

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
          <p className="mt-4 text-forest-600 max-w-2xl mx-auto text-center">
            At King Tai, customer satisfaction is our top priority. Here's what some of our clients have to say about our products and services.
          </p>
        </div>
      </div>
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
