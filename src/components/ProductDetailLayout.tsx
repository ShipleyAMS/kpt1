
import React from 'react';
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
}

const ProductDetailLayout: React.FC<ProductDetailLayoutProps> = ({
  title,
  description,
  images,
  specifications,
  featuredProducts,
  productionProcess,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section with Gradient Background */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-[#F8F7F2] to-[#EAF3E8]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#007041] text-center mb-4">{title}</h1>
          <div className="mt-2 h-1 w-24 bg-[#007041] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-forest-700 text-center max-w-3xl mx-auto leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Product Images & Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-[#007041] pb-2 border-b border-[#EAF3E8]">Product Gallery</h2>
              <div className="grid grid-cols-1 gap-6">
                {images.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg">
                    <img 
                      src={image} 
                      alt={`${title} ${index + 1}`} 
                      className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#007041] pb-2 border-b border-[#EAF3E8] mb-8">Specifications</h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="bg-[#F8F7F2] p-4 rounded-lg shadow-sm border-l-4 border-[#007041]">
                    <strong className="block text-lg text-[#007041] mb-1">{spec.name}</strong>
                    <span className="text-forest-600">{spec.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Section - if provided */}
      {productionProcess && (
        <section className="py-16 bg-[#EAF3E8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-[#007041] text-center mb-10">Our Production Process</h2>
            {productionProcess}
          </div>
        </section>
      )}

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#007041] text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-[#F8F7F2] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-52 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#007041] mb-2">{product.name}</h3>
                  <p className="text-forest-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#F8F7F2]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-[#007041] mb-6">Ready to Get Started?</h3>
          <Link
            to="/#contact"
            className="inline-flex items-center px-6 py-3 bg-[#AA8066] text-white rounded-md font-medium hover:bg-[#96705a] transition-colors"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailLayout;
