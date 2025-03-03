
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
      className="product-card bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-king-primary mb-2">{product.name}</h3>
        <p className="text-sm text-forest-800">{product.description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
