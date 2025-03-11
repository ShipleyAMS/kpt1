
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link 
      to={product.link}
      className="group bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-[#007041] mb-2">{product.name}</h3>
        <p className="text-sm text-forest-600 flex-grow">{product.description}</p>
        <div className="mt-4 pt-3 border-t border-[#EAF3E8]">
          <span className="text-xs font-medium text-[#AA8066] inline-flex items-center">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
