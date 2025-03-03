
import React from 'react';
import { ArrowLeft, Printer, FileText, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

interface Specification {
  name: string;
  description: string;
}

interface RelatedProduct {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface ProductDetailLayoutProps {
  title: string;
  description: string;
  images: string[];
  specifications: Specification[];
  featuredProducts: RelatedProduct[];
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
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        {/* Breadcrumb */}
        <div className="bg-forest-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-forest-600">
              <Link to="/" className="hover:text-forest-800">Home</Link>
              <span>/</span>
              <Link to="/#products" className="hover:text-forest-800">Products</Link>
              <span>/</span>
              <span className="text-forest-800 font-medium">{title}</span>
            </div>
          </div>
        </div>

        {/* Product Hero */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image Gallery */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-w-4 aspect-h-3 bg-forest-50">
                    <img 
                      src={images[0]} 
                      alt={title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  
                  {images.length > 1 && (
                    <div className="grid grid-cols-4 gap-2 p-4">
                      {images.slice(0, 4).map((image, index) => (
                        <div 
                          key={index} 
                          className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden border border-forest-100"
                        >
                          <img 
                            src={image}
                            alt={`${title} - view ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="lg:w-1/2">
                <Link 
                  to="/#products"
                  className="inline-flex items-center text-sm text-forest-600 hover:text-forest-800 mb-4"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Products
                </Link>
                
                <h1 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">{title}</h1>
                
                <div className="mb-6 flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-yellow-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-forest-600">Premium Quality</span>
                </div>
                
                <div className="prose prose-forest max-w-none mb-8">
                  <p>{description}</p>
                </div>
                
                <div className="bg-forest-50 p-4 rounded-lg mb-6">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <Printer className="h-5 w-5 text-forest-600 mr-2" />
                      <span className="text-sm font-medium">Custom printing available</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-forest-600 mr-2" />
                      <span className="text-sm font-medium">Detailed specifications</span>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-earth-500 text-white rounded-md font-medium hover:bg-earth-600 transition-colors"
                >
                  Request Quote for {title}
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Specifications */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-forest-800 mb-6">Specifications</h2>
            
            <div className="bg-white rounded-lg border border-forest-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-forest-800">{spec.name}</h3>
                      <p className="text-sm text-forest-600">{spec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products - Now appears before Production Process */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-forest-800 mb-6">Featured Products</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="product-card bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center transform transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-forest-800 mb-2">{product.name}</h3>
                    <p className="text-sm text-forest-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Production Process - Now appears after Featured Products */}
        {productionProcess && (
          <section className="py-8 bg-forest-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-forest-800 mb-6">Production Process</h2>
              {productionProcess}
            </div>
          </section>
        )}
        
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailLayout;
