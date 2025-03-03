
import React from 'react';
import { cn } from '@/lib/utils';
import { Category } from './types';

interface CategorySelectorProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (categoryId: string) => void;
}

const CategorySelector = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}: CategorySelectorProps) => {
  return (
    <div className="flex justify-center mb-8 overflow-x-auto py-2">
      <div className="flex space-x-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === category.id
                ? "bg-forest-600 text-white shadow-md"
                : "bg-white text-forest-700 hover:bg-forest-100"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
