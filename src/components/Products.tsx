
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Printer, Package, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductItem {
  name: string;
  icon?: React.ReactNode;
  image?: string;
  link: string;
}

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Categories with their products
  const categories = [
    {
      name: "PRINTING",
      icon: <Printer className="h-8 w-8 text-[#007041] mb-2" />,
      image: "/images/categories/printing-category.png",
      products: [
        { name: "Catalogues", link: "/products/catalogues" },
        { name: "Books", link: "/products/books" },
        { name: "Bibles", link: "/products/bibles" },
        { name: "Calendars", link: "/products/calendar" },
        { name: "Game Cards", link: "/products/game-cards" },
        { name: "Greeting Cards", link: "/products/greeting-cards" },
        { name: "Tarot Cards", link: "/products/tarot-cards" },
        { name: "Jigsaw Puzzles", link: "/products/jigsaw-puzzles" },
      ]
    },
    {
      name: "PACKAGING",
      icon: <Package className="h-8 w-8 text-[#007041] mb-2" />,
      image: "/images/categories/packaging-category.png",
      products: [
        { name: "Cosmetic Boxes", image: "/images/packaging/cosmetic-boxes/cosmetic-boxes-main.png", link: "/products/cosmetic-boxes" },
        { name: "Jewelery Boxes", image: "/images/packaging/jewelery-boxes/jewelery-boxes-main.png", link: "/products/jewelery-boxes" },
        { name: "Fragrance Boxes", image: "/images/packaging/fragrance-boxes/fragrance-boxes-main.png", link: "/products/fragrance-boxes" },
        { name: "Watch Boxes", image: "/images/packaging/watch-boxes/watch-boxes-main.png", link: "/products/watch-boxes" },
        { name: "Gift Boxes", image: "/images/packaging/gift-boxes/gift-boxes-main.png", link: "/products/gift-boxes" },
        { name: "Gift Bags", image: "/images/packaging/gift-bags/gift-bags-main.png", link: "/products/gift-bags" },
        { name: "Wine Boxes", image: "/images/packaging/wine-boxes/wine-boxes-main.png", link: "/products/wine-boxes" },
        { name: "Wooden Boxes", image: "/images/packaging/wooden-boxes/wooden-boxes-main.png", link: "/products/wooden-boxes" },
      ]
    },
    {
      name: "STATIONERY",
      icon: <BookOpen className="h-8 w-8 text-[#007041] mb-2" />,
      image: "/images/categories/stationery-category.png",
      products: [
        { name: "Notebooks", image: "/images/stationery/notebooks/notebooks-main.png", link: "/products/notebooks" },
        { name: "Journals", image: "/images/stationery/journals/journals-main.png", link: "/products/journals" },
        { name: "Planners", image: "/images/stationery/planners/planners-main.png", link: "/products/planners" },
      ]
    }
  ];

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
          <p className="mt-4 text-lg text-forest-700 max-w-3xl mx-auto">
            We offer a comprehensive range of high-quality printing and packaging solutions.
            Explore our categories below to discover our full range of products.
          </p>
        </div>

        <div 
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-col items-center mb-4">
                      {category.icon}
                      <h3 className="text-xl font-semibold text-[#007041]">{category.name}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {category.products.map((product, idx) => (
                        <Link 
                          key={idx}
                          to={product.link}
                          className="bg-[#EAF3E8] p-3 rounded-md hover:bg-[#d9ead2] cursor-pointer transition-colors text-center text-sm font-medium text-[#007041]"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-[#AA8066] text-white rounded-md font-medium hover:bg-[#96705a] transition-all duration-300 text-lg transform hover:-translate-y-1"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
