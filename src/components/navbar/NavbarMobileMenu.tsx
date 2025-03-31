
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({ isOpen, onClose }) => {
  const [productsOpen, setProductsOpen] = useState(false);

  if (!isOpen) return null;

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

  return (
    <div className="md:hidden bg-white/95 backdrop-blur-sm animate-fade-in max-h-[80vh] overflow-y-auto">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-4">
          <Link
            to="/"
            className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
            onClick={onClose}
          >
            HOME
          </Link>
          
          {/* Products Dropdown */}
          <div className="relative">
            <button
              className="flex items-center justify-between w-full text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
              onClick={toggleProducts}
            >
              <span>PRODUCTS</span>
              {productsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {productsOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  to="/products/printing"
                  className="block text-[#007041] py-2 px-4 rounded-md hover:bg-[#EAF3E8] transition-colors"
                  onClick={onClose}
                >
                  PRINTING
                </Link>
                <Link
                  to="/products/packaging"
                  className="block text-[#007041] py-2 px-4 rounded-md hover:bg-[#EAF3E8] transition-colors"
                  onClick={onClose}
                >
                  PACKAGING
                </Link>
                <Link
                  to="/products/stationery"
                  className="block text-[#007041] py-2 px-4 rounded-md hover:bg-[#EAF3E8] transition-colors"
                  onClick={onClose}
                >
                  STATIONERY
                </Link>
              </div>
            )}
          </div>
          
          <Link
            to="/about-us"
            className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
            onClick={onClose}
          >
            ABOUT US
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
