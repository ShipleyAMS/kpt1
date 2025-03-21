
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface ProductDetailLayoutProps {
  title: string;
  description: string;
  images: string[];
  specifications: { name: string; description: string }[];
  featuredProducts: { id: number; name: string; image: string; description: string }[];
  productionProcess?: React.ReactNode;
  exampleProducts?: string;
}

const ProductDetailLayout: React.FC<ProductDetailLayoutProps> = ({
  title,
  description,
  images,
  specifications,
  featuredProducts,
  productionProcess,
  exampleProducts,
}) => {
  const [mainImage, setMainImage] = useState(images[0]);

  // Process example products into an array if provided
  const exampleProductsArray = exampleProducts ? exampleProducts.split(',').map(product => product.trim()) : [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#007041] mb-8">{title}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg border border-[#EAF3E8] shadow-md">
                <img 
                  src={mainImage} 
                  alt={title} 
                  className="w-full h-auto object-cover aspect-[4/3]" 
                />
              </div>
              
              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex flex-wrap gap-3">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setMainImage(image)}
                      className={`overflow-hidden rounded-md border-2 transition-all ${
                        mainImage === image 
                          ? 'border-[#007041] shadow-md' 
                          : 'border-[#EAF3E8] hover:border-[#007041]/50'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${title} thumbnail ${index + 1}`} 
                        className="w-16 h-16 object-cover" 
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info & Specs */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none text-forest-700">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{description}</p>
              </div>
              
              <div className="bg-[#F8F7F2] rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#007041] mb-4">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specifications.slice(0, 6).map((spec, index) => (
                    <div key={index} className="border-l-2 border-[#007041] pl-3">
                      <strong className="block text-sm text-[#007041] mb-1">{spec.name}</strong>
                      <span className="text-sm text-gray-600">{spec.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Example Products Section */}
          {exampleProductsArray.length > 0 && (
            <section className="py-10 bg-[#F8F7F2] rounded-lg mb-16">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold text-[#007041] text-center mb-6">Example Products</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {exampleProductsArray.map((product, index) => (
                    <div 
                      key={index} 
                      className="bg-white py-2 px-4 rounded-full shadow-sm border border-[#EAF3E8] text-[#007041]"
                    >
                      {product}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
          
          {/* Production Process Section - if provided */}
          {productionProcess && (
            <section className="py-12 bg-[#EAF3E8] rounded-lg mb-16">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold text-[#007041] text-center mb-8">Our Production Process</h2>
                {productionProcess}
              </div>
            </section>
          )}

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

export default ProductDetailLayout;
