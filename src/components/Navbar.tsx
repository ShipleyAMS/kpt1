import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { products, categories, filterProductsByCategory } from './products/productData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Updated order of navigation links
  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'TESTIMONIALS', href: '/testimonials' },
    { name: 'CONTACT US', href: '/#contact' },
  ];

  // Getting products for each category
  const printingProducts = filterProductsByCategory(products, 'printing');
  const stationeryProducts = filterProductsByCategory(products, 'stationery');
  const packagingProducts = filterProductsByCategory(products, 'packaging');
  const gamesProducts = filterProductsByCategory(products, 'games');

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/7b19f840-c217-43f6-a925-82c05b1102a9.png" 
            alt="King Tai Logo" 
            className="h-14 w-auto" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {/* Home link */}
            <Link
              to="/"
              className={cn(
                'text-sm font-medium nav-link transition-colors',
                isScrolled ? 'text-[#007041]' : 'text-[#007041]'
              )}
            >
              HOME
            </Link>
            
            {/* Products Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    'text-sm font-medium transition-colors',
                    isScrolled ? 'text-[#007041]' : 'text-[#007041]'
                  )}>PRODUCTS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-5 gap-3 p-4 w-screen max-w-screen-lg">
                      {/* All Products Column */}
                      <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-[#007041] text-sm">ALL PRODUCTS</h3>
                        <Link 
                          to="/products" 
                          className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Products
                        </Link>
                      </div>
                      
                      {/* Printing Column */}
                      <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-[#007041] text-sm">PRINTING</h3>
                        <Link 
                          to="/products/printing" 
                          className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Printing
                        </Link>
                        {printingProducts.map(product => (
                          <Link 
                            key={product.id}
                            to={product.link} 
                            className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                      
                      {/* Stationery Column */}
                      <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-[#007041] text-sm">STATIONERY</h3>
                        <Link 
                          to="/products/stationery" 
                          className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Stationery
                        </Link>
                        {stationeryProducts.map(product => (
                          <Link 
                            key={product.id}
                            to={product.link} 
                            className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                      
                      {/* Packaging Column */}
                      <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-[#007041] text-sm">PACKAGING</h3>
                        <Link 
                          to="/products/packaging" 
                          className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Packaging
                        </Link>
                        {packagingProducts.map(product => (
                          <Link 
                            key={product.id}
                            to={product.link} 
                            className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                      
                      {/* Games & Cards Column */}
                      <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-[#007041] text-sm">GAMES & CARDS</h3>
                        <Link 
                          to="/products/games" 
                          className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Games & Cards
                        </Link>
                        {gamesProducts.map(product => (
                          <Link 
                            key={product.id}
                            to={product.link} 
                            className="text-sm text-forest-700 hover:text-[#AA8066] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Other navigation links */}
            <Link
              to="/about-us"
              className={cn(
                'text-sm font-medium nav-link transition-colors',
                isScrolled ? 'text-[#007041]' : 'text-[#007041]'
              )}
            >
              ABOUT US
            </Link>
            <Link
              to="/testimonials"
              className={cn(
                'text-sm font-medium nav-link transition-colors',
                isScrolled ? 'text-[#007041]' : 'text-[#007041]'
              )}
            >
              TESTIMONIALS
            </Link>
            <Link
              to="/#contact"
              className={cn(
                'text-sm font-medium nav-link transition-colors',
                isScrolled ? 'text-[#007041]' : 'text-[#007041]'
              )}
            >
              CONTACT US
            </Link>
          </nav>
          
          {/* Request Custom Quote Button */}
          <Link 
            to="/#contact" 
            className="inline-flex items-center px-4 py-2 bg-[#AA8066] text-white rounded-md font-medium hover:bg-[#96705a] transition-colors text-sm"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Request Custom Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#007041] focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {/* Updated mobile menu order */}
              <Link
                to="/"
                className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
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
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Products
                  </Link>
                  
                  {/* Printing Category */}
                  <div className="py-2">
                    <Link 
                      to="/products/printing"
                      className="block px-4 font-medium text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Printing
                    </Link>
                    <div className="pl-4">
                      {printingProducts.map(product => (
                        <Link 
                          key={product.id}
                          to={product.link}
                          className="block py-1 px-4 text-sm text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stationery Category */}
                  <div className="py-2">
                    <Link 
                      to="/products/stationery"
                      className="block px-4 font-medium text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Stationery
                    </Link>
                    <div className="pl-4">
                      {stationeryProducts.map(product => (
                        <Link 
                          key={product.id}
                          to={product.link}
                          className="block py-1 px-4 text-sm text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Packaging Category */}
                  <div className="py-2">
                    <Link 
                      to="/products/packaging"
                      className="block px-4 font-medium text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Packaging
                    </Link>
                    <div className="pl-4">
                      {packagingProducts.map(product => (
                        <Link 
                          key={product.id}
                          to={product.link}
                          className="block py-1 px-4 text-sm text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Games & Cards Category */}
                  <div className="py-2">
                    <Link 
                      to="/products/games"
                      className="block px-4 font-medium text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Games & Cards
                    </Link>
                    <div className="pl-4">
                      {gamesProducts.map(product => (
                        <Link 
                          key={product.id}
                          to={product.link}
                          className="block py-1 px-4 text-sm text-forest-700 hover:bg-[#EAF3E8] rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other nav links in the correct order */}
              <Link
                to="/about-us"
                className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                to="/testimonials"
                className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                TESTIMONIALS
              </Link>
              <Link
                to="/#contact"
                className="text-[#007041] font-medium py-2 px-4 hover:bg-[#EAF3E8] rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
              
              {/* Mobile Request Custom Quote Button */}
              <Link 
                to="/#contact" 
                className="inline-flex items-center py-2 px-4 bg-[#AA8066] text-white rounded-md font-medium hover:bg-[#96705a] transition-colors text-sm mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Request Custom Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
