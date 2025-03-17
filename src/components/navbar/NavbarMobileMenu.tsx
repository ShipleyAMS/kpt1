import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { products, filterProductsByCategory } from '../products/productData';

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  // Getting products for each category
  const printingProducts = filterProductsByCategory(products, 'printing');
  const stationeryProducts = filterProductsByCategory(products, 'stationery');
  const packagingProducts = filterProductsByCategory(products, 'packaging');
  const gamesProducts = filterProductsByCategory(products, 'games');

  return (
    <div className="md:hidden bg-white/95 backdrop-blur-sm animate-fade-in max-h-[80vh] overflow-y-auto">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-4">
          {/* Updated mobile menu order */}
          <Link
            to="/"
            className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
            onClick={onClose}
          >
            HOME
          </Link>
          
          {/* Products dropdown section - keep at the top of the mobile menu as well */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-bold text-[#007041] px-4 py-2">PRODUCTS</h3>
            
            {/* Product Categories */}
            <div className="pl-4">
              <Link 
                to="/products"
                className="block py-2 px-4 text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
                onClick={onClose}
              >
                All Products
              </Link>
              
              {/* Category sections */}
              <MobileCategorySection 
                title="Printing" 
                linkPath="/products/printing" 
                products={printingProducts}
                onClose={onClose}
              />
              
              <MobileCategorySection 
                title="Stationery" 
                linkPath="/products/stationery" 
                products={stationeryProducts}
                onClose={onClose}
              />
              
              <MobileCategorySection 
                title="Packaging" 
                linkPath="/products/packaging" 
                products={packagingProducts}
                onClose={onClose}
              />
              
              <MobileCategorySection 
                title="Games & Cards" 
                linkPath="/products/games" 
                products={gamesProducts}
                onClose={onClose}
              />
            </div>
          </div>
          
          {/* Other nav links in the correct order */}
          <Link
            to="/about-us"
            className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
            onClick={onClose}
          >
            ABOUT US
          </Link>
          <Link
            to="/testimonials"
            className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
            onClick={onClose}
          >
            TESTIMONIALS
          </Link>
          <Link
            to="/#contact"
            className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
            onClick={onClose}
          >
            CONTACT US
          </Link>
          
          {/* Mobile Request Custom Quote Button */}
          <Link 
            to="/#contact" 
            className="inline-flex items-center py-2 px-4 bg-[#AA8066] text-white rounded-md font-medium hover:bg-[#96705a] transition-colors text-sm mt-2"
            onClick={onClose}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Request Custom Quote
          </Link>
        </nav>
      </div>
    </div>
  );
};

interface MobileCategorySectionProps {
  title: string;
  linkPath: string;
  products: any[];
  onClose: () => void;
}

const MobileCategorySection: React.FC<MobileCategorySectionProps> = ({ title, linkPath, products, onClose }) => {
  return (
    <div className="py-2">
      <Link 
        to={linkPath}
        className="block px-4 font-medium text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
        onClick={onClose}
      >
        {title}
      </Link>
      <div className="pl-4">
        {products.map(product => (
          <Link 
            key={product.id}
            to={product.link}
            className="block py-1 px-4 text-sm text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
            onClick={onClose}
          >
            {product.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
