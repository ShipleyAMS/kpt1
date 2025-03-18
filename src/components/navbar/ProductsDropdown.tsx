
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

interface ProductsDropdownProps {
  isScrolled: boolean;
}

export const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ isScrolled }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={cn(
              'text-sm font-medium nav-link transition-colors bg-transparent hover:bg-transparent focus:bg-transparent',
              isScrolled ? 'text-[#007041]' : 'text-[#007041]'
            )}
          >
            PRODUCTS
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[200px] p-4 md:grid gap-3">
              <Link
                to="/products/printing"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-[#EAF3E8]"
              >
                <div className="text-sm font-medium text-[#007041] group-hover:text-[#007041]/80">PRINTING</div>
              </Link>
              <Link
                to="/products/packaging"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-[#EAF3E8]"
              >
                <div className="text-sm font-medium text-[#007041] group-hover:text-[#007041]/80">PACKAGING</div>
              </Link>
              <Link
                to="/products/stationery"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-[#EAF3E8]"
              >
                <div className="text-sm font-medium text-[#007041] group-hover:text-[#007041]/80">STATIONERY</div>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
