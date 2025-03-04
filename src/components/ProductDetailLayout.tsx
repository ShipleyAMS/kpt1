import React from 'react';
import { Link } from 'react-router-dom';

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
    <>
      <div className="bg-kingTai-bgLight">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-kingTai-primary text-center mb-4">{title}</h1>
          <p className="text-lg text-forest-700 text-center max-w-3xl mx-auto">{description}</p>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-kingTai-primary mb-4">Product Images</h2>
              <div className="grid grid-cols-1 gap-4">
                {images.map((image, index) => (
                  <img key={index} src={image} alt={`${title} ${index + 1}`} className="rounded-lg shadow-md" />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-kingTai-primary mb-4">Specifications</h2>
              <ul className="space-y-2">
                {specifications.map((spec, index) => (
                  <li key={index} className="bg-kingTai-bgLight p-4 rounded-lg shadow-sm">
                    <strong className="text-forest-800">{spec.name}:</strong> {spec.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {productionProcess && (
        <div className="bg-kingTai-bgCream py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-kingTai-primary text-center mb-8">Production Process</h2>
            {productionProcess}
          </div>
        </div>
      )}

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-kingTai-primary text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-kingTai-bgLight rounded-lg overflow-hidden shadow-md">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-kingTai-primary mb-2">{product.name}</h3>
                  <p className="text-forest-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-kingTai-bgLight py-12">
        <div className="container mx-auto px-4 text-center">
          <Link
            to="/#contact"
            className="inline-flex items-center px-6 py-3 bg-kingTai-button text-white rounded-md font-medium hover:bg-kingTai-buttonHover transition-colors"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetailLayout;
