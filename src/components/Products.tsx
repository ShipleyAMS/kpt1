
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
        </div>

        <div 
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000 max-w-3xl mx-auto text-center"
        >
          <div className="prose prose-lg text-forest-700 mx-auto mb-8">
            <p>
              We offer a comprehensive range of high-quality printing and packaging solutions. 
              Visit our products page to explore our full catalog of offerings.
            </p>
          </div>
          
          <Link 
            to="/products" 
            className="inline-flex items-center px-8 py-4 bg-[#AA8066] text-white rounded-md font-medium hover:bg-[#96705a] transition-all duration-300 text-lg transform hover:-translate-y-1"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
