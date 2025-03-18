
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          
          <Link
            to="/products"
            className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
            onClick={onClose}
          >
            PRODUCTS
          </Link>
          
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
