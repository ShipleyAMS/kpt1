
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

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

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  const productCategories = [
    { name: "Bibles", href: "/products/bibles" },
    { name: "Books", href: "/products/books" },
    { name: "Calendars", href: "/products/calendars" },
    { name: "Cosmetic Boxes", href: "/products/cosmetic-boxes" },
    { name: "Game Cards", href: "/products/game-cards" },
    { name: "Gift Boxes", href: "/products/gift-boxes" },
    { name: "Greeting Cards", href: "/products/greeting-cards" },
    { name: "Jewelery Boxes", href: "/products/jewelery-boxes" },
    { name: "Journals", href: "/products/journals" },
    { name: "Shopping Bags", href: "/products/shopping-bags" },
    { name: "Wine Boxes", href: "/products/wine-boxes" },
    { name: "Wooden Boxes", href: "/products/wooden-boxes" }
  ];

  const navLinks = [
    { name: 'HOME', href: '/#home' },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'PRODUCTS', href: '/#products', hasDropdown: true },
    { name: 'CONTACT US', href: '/#contact' },
    { name: 'TESTIMONIALS', href: '/#testimonials' },
  ];

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
            {navLinks.map((link) => (
              <div key={link.name} className="relative group flex items-center h-full">
                {link.hasDropdown ? (
                  <div className="flex items-center h-full">
                    <button 
                      onClick={toggleProductsDropdown}
                      className={cn(
                        'flex items-center text-sm font-medium nav-link transition-colors',
                        isScrolled ? 'text-forest-900' : 'text-forest-800'
                      )}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Products Dropdown */}
                    {productsDropdownOpen && (
                      <div className="absolute left-0 mt-2 top-full z-10 bg-white rounded-md shadow-lg py-2 w-48 animate-fade-in">
                        {productCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.href}
                            className="block px-4 py-2 text-sm text-forest-700 hover:bg-forest-50 transition-colors"
                            onClick={() => setProductsDropdownOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      'text-sm font-medium nav-link transition-colors',
                      isScrolled ? 'text-forest-900' : 'text-forest-800'
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* Request Custom Quote Button */}
          <Link 
            to="/#contact" 
            className="inline-flex items-center px-4 py-2 bg-earth-500 text-white rounded-md font-medium hover:bg-earth-600 transition-colors text-sm"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Request Custom Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-forest-800 focus:outline-none"
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
        <div className="md:hidden bg-white/95 backdrop-blur-sm animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button 
                        onClick={toggleProductsDropdown}
                        className="flex justify-between items-center w-full text-forest-800 font-medium py-2 px-4 hover:bg-forest-50 rounded-md transition-colors"
                      >
                        {link.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      
                      {productsDropdownOpen && (
                        <div className="pl-6 mt-2 space-y-2">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.href}
                              className="block py-1 px-4 text-sm text-forest-700 hover:bg-forest-50 rounded-md transition-colors"
                              onClick={() => {
                                setProductsDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-forest-800 font-medium py-2 px-4 hover:bg-forest-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Request Custom Quote Button */}
              <Link 
                to="/#contact" 
                className="inline-flex items-center py-2 px-4 bg-earth-500 text-white rounded-md font-medium hover:bg-earth-600 transition-colors text-sm mt-2"
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
