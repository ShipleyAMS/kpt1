
import React from 'react';
import { Link } from 'react-router-dom';
import { products, filterProductsByCategory } from '../products/productData';

export const ProductsDropdownContent: React.FC = () => {
  // Getting products for each category
  const printingProducts = filterProductsByCategory(products, 'printing');
  const stationeryProducts = filterProductsByCategory(products, 'stationery');
  const packagingProducts = filterProductsByCategory(products, 'packaging');
  const gamesProducts = filterProductsByCategory(products, 'games');

  return (
    <div className="grid grid-cols-5 gap-3 p-4 w-screen max-w-screen-lg">
      {/* All Products Column */}
      <div className="flex flex-col space-y-3">
        <h3 className="font-bold text-[#007041] text-sm">ALL PRODUCTS</h3>
        <Link 
          to="/products" 
          className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
        >
          View All Products
        </Link>
      </div>
      
      {/* Printing Column */}
      <ProductCategoryColumn 
        title="PRINTING" 
        linkPath="/products/printing"
        products={printingProducts} 
      />
      
      {/* Stationery Column */}
      <ProductCategoryColumn 
        title="STATIONERY" 
        linkPath="/products/stationery"
        products={stationeryProducts} 
      />
      
      {/* Packaging Column */}
      <ProductCategoryColumn 
        title="PACKAGING" 
        linkPath="/products/packaging"
        products={packagingProducts} 
      />
      
      {/* Games & Cards Column */}
      <ProductCategoryColumn 
        title="GAMES & CARDS" 
        linkPath="/products/games"
        products={gamesProducts} 
      />
    </div>
  );
};

interface ProductCategoryColumnProps {
  title: string;
  linkPath: string;
  products: any[];
}

const ProductCategoryColumn: React.FC<ProductCategoryColumnProps> = ({ title, linkPath, products }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="font-bold text-[#007041] text-sm">{title}</h3>
      <Link 
        to={linkPath} 
        className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
      >
        View All {title}
      </Link>
      {products.map(product => (
        <Link 
          key={product.id}
          to={product.link} 
          className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
        >
          {product.name}
        </Link>
      ))}
    </div>
  );
};
