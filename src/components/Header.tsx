
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <Navbar />
    </header>
  );
};

export default Header;
