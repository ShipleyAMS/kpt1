
import React, { useState, useEffect, useRef } from 'react';
import CategorySelector from './products/CategorySelector';
import ProductsGrid from './products/ProductsGrid';
import { products, categories, filterProductsByCategory } from './products/productData';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Filter products based on active category
  const filteredProducts = filterProductsByCategory(products, activeCategory);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="products" className="py-16 bg-[#F8F7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#007041]">Our Products</h2>
          <div className="mt-2 h-1 w-24 bg-[#007041] mx-auto rounded-full"></div>
          <p className="mt-5 text-forest-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality printing and packaging solutions,
            crafted with precision and attention to detail.
          </p>
        </div>

        <CategorySelector 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <div 
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000 mt-10"
        >
          <ProductsGrid products={filteredProducts} />
        </div>

        <div className="mt-14 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-[#AA8066] text-white rounded-md font-medium hover:bg-[#96705a] transition-colors"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
