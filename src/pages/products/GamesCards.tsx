
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products, filterProductsByCategory } from '@/components/products/productData';

const GamesCardsPage = () => {
  const gamesProducts = filterProductsByCategory(products, 'games');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#007041] mb-8">Games & Cards Products</h1>
          
          <div className="prose prose-lg max-w-none text-forest-700 mb-12">
            <p>
              King Tai produces a diverse range of high-quality games and cards, from traditional playing cards 
              to custom card games, jigsaws, and innovative 3D cards. Our products feature premium materials, 
              precise manufacturing, and vibrant printing to create engaging and durable gaming experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {gamesProducts.map((product) => (
              <Link 
                key={product.id}
                to={product.link} 
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#007041] mb-2">{product.name}</h3>
                  <p className="text-forest-600 mb-4">{product.description}</p>
                  <span className="text-sm font-medium text-[#AA8066] inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
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

export default GamesCardsPage;
