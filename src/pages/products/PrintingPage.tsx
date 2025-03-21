
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Printer } from 'lucide-react';

const PrintingPage = () => {
  const printingProducts = [
    { name: "Catalogues", link: "/products/catalogues" },
    { name: "Leaflets", link: "/products/leaflets" },
    { name: "Books", link: "/products/books" },
    { name: "Bibles", link: "/products/bibles" },
    { name: "Calendars", link: "/products/calendar" },
    { name: "Game Cards", link: "/products/game-cards" },
    { name: "Greeting Cards", link: "/products/greeting-cards" },
    { name: "Tarot Cards", link: "/products/tarot-cards" },
    { name: "Jigsaw Puzzles", link: "/products/jigsaw-puzzles" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#007041]">PRINTING</h1>
            <div className="mt-2 h-1 w-24 bg-[#007041] mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-forest-700 max-w-3xl mx-auto">
              Explore our comprehensive range of high-quality printing solutions, 
              from catalogues and books to cards and promotional materials.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Printer className="h-8 w-8 text-[#007041] mr-3" />
              <h2 className="text-2xl font-semibold text-[#007041]">Our Printing Products</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {printingProducts.map((product, index) => (
                <Link 
                  key={index}
                  to={product.link}
                  className="bg-white rounded-lg shadow-md border border-[#EAF3E8] p-6 flex items-center justify-center bg-[#EAF3E8] transition-transform hover:scale-105"
                >
                  <h3 className="text-lg font-medium text-[#007041]">{product.name}</h3>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-10 bg-[#F8F7F2] rounded-lg">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-xl font-semibold text-[#007041] mb-5">Ready to Get Started?</h3>
              <Link
                to="/#contact"
                className="inline-flex items-center px-6 py-3 bg-[#AA8066] text-white rounded-md font-medium hover:bg-[#96705a] transition-colors"
              >
                Request Custom Quote
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrintingPage;
