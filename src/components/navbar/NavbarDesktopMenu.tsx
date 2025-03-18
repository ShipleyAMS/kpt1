import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { RequestQuoteButton } from './RequestQuoteButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavbarDesktopMenuProps {
  isScrolled: boolean;
}

export const NavbarDesktopMenu: React.FC<NavbarDesktopMenuProps> = ({ isScrolled }) => {
  return (
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
        
        {/* Products Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger 
            className={cn(
              'text-sm font-medium nav-link transition-colors outline-none',
              isScrolled ? 'text-[#007041]' : 'text-[#007041]'
            )}
          >
            PRODUCTS
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem className="cursor-pointer">
              <Link to="/products/printing" className="w-full">PRINTING</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Link to="/products/packaging" className="w-full">PACKAGING</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Link to="/products/stationery" className="w-full">STATIONERY</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
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
      
      <RequestQuoteButton />
    </div>
  );
};
