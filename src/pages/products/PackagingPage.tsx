
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package } from 'lucide-react';

const PackagingPage = () => {
  const packagingProducts = [
    { name: "Make-up Boxes", image: "/lovable-uploads/212a47c2-8686-42ba-aa2e-94eea5da96bc.png", link: "/products/makeup-boxes" },
    { name: "Jewelery Boxes", image: "/lovable-uploads/b9086efc-629a-47ed-8b95-068140735132.png", link: "/products/jewelery-boxes" },
    { name: "Gift Boxes", image: "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png", link: "/products/gift-boxes" },
    { name: "Wine Boxes", image: "/lovable-uploads/7d6d05ad-2a4e-49fa-b367-5206277f9e19.png", link: "/products/wine-boxes" },
    { name: "Wooden Boxes", image: "/lovable-uploads/9821a74b-7319-4c79-bf2b-8e28872a8561.png", link: "/products/wooden-boxes" },
    { name: "Shopping Bags", image: "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png", link: "/products/shopping-bags" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#007041]">PACKAGING</h1>
            <div className="mt-2 h-1 w-24 bg-[#007041] mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-forest-700 max-w-3xl mx-auto">
              Discover our premium packaging solutions, expertly crafted to enhance your products 
              with elegance and functionality.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Package className="h-8 w-8 text-[#007041] mr-3" />
              <h2 className="text-2xl font-semibold text-[#007041]">Our Packaging Products</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {packagingProducts.map((product, index) => (
                <Link 
                  key={index}
                  to={product.link}
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-[#EAF3E8] flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-4 flex items-center justify-center bg-[#EAF3E8]">
                    <h3 className="text-lg font-medium text-[#007041]">{product.name}</h3>
                  </div>
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

export default PackagingPage;
