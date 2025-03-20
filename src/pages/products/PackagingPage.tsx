
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package } from 'lucide-react';

const PackagingPage = () => {
  const packagingProducts = [
    { name: "Cosmetic Boxes", image: "/lovable-uploads/b6e8fc28-653d-4228-9fa9-b1b99a5a25aa.png", link: "/products/cosmetic-boxes" },
    { name: "Jewelery Boxes", image: "/lovable-uploads/bd0c61b8-a405-4055-954d-857f892c3b15.png", link: "/products/jewelery-boxes" },
    { name: "Fragrance Boxes", image: "/placeholder.svg", link: "/products/fragrance-boxes" },
    { name: "Watch Boxes", image: "/lovable-uploads/faafb5be-1211-4112-a124-756086434ba0.png", link: "/products/watch-boxes" },
    { name: "Product Packaging", image: "/lovable-uploads/4a00c030-1150-4412-9bd5-501f1c8882a8.png", link: "/products/gift-boxes" },
    { name: "Gift Bags", image: "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png", link: "/products/gift-bags" },
    { name: "Wine Boxes", image: "/lovable-uploads/f237a227-533c-40ac-a7df-36908496434e.png", link: "/products/wine-boxes" },
    { name: "Wooden Boxes", image: "/lovable-uploads/33abf773-6299-4658-aea2-6515350a7907.png", link: "/products/wooden-boxes" },
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
