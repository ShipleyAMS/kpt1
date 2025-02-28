
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
}

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const products: Product[] = [
    {
      id: 1,
      name: "Bible",
      image: "/lovable-uploads/b98f5f4b-72df-44dc-af9a-311dbd32d7b9.png",
      description: "High-quality Bibles with premium printing and binding.",
      link: "/products/bibles"
    },
    {
      id: 2,
      name: "Children's Books",
      image: "/lovable-uploads/7dd0ed77-bef4-4667-88b1-5f8a749589f2.png",
      description: "Colorful and engaging children's books with vibrant illustrations.",
      link: "/products/books"
    },
    {
      id: 3,
      name: "Calendar",
      image: "/lovable-uploads/513a1818-3b90-4839-979b-a7279d2b013e.png",
      description: "Custom calendars with beautiful designs and durable construction.",
      link: "/products/calendars"
    },
    {
      id: 4,
      name: "Jewelry Box",
      image: "/lovable-uploads/212a47c2-8686-42ba-aa2e-94eea5da96bc.png",
      description: "Elegant jewelry boxes with premium finishes and lining.",
      link: "/products/jewelery-boxes"
    },
    {
      id: 5,
      name: "Game Cards",
      image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      description: "High-quality game cards with vibrant colors and durable coating.",
      link: "/products/game-cards"
    },
    {
      id: 6,
      name: "Gift Box",
      image: "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
      description: "Custom gift boxes with precise die-cutting and premium finishes.",
      link: "/products/gift-boxes"
    },
    {
      id: 7,
      name: "Greeting Cards",
      image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      description: "Premium greeting cards with custom designs and special finishes.",
      link: "/products/greeting-cards"
    },
    {
      id: 8,
      name: "Jewelry Box Custom",
      image: "/lovable-uploads/b9086efc-629a-47ed-8b95-068140735132.png",
      description: "Customized jewelry boxes with bespoke designs and premium materials.",
      link: "/products/jewelery-boxes"
    },
    {
      id: 9,
      name: "Journal",
      image: "/lovable-uploads/0b092d75-12e1-469a-8aee-6e42bf1cdb30.png",
      description: "Premium notebooks with various cover options and high-quality paper.",
      link: "/products/journals"
    },
    {
      id: 10,
      name: "Shopping Bag",
      image: "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png",
      description: "Durable and stylish shopping bags with custom designs.",
      link: "/products/shopping-bags"
    },
    {
      id: 11,
      name: "Wine Box",
      image: "/lovable-uploads/7d6d05ad-2a4e-49fa-b367-5206277f9e19.png",
      description: "Elegant wine boxes with premium finishes and secure closures.",
      link: "/products/wine-boxes"
    },
    {
      id: 12,
      name: "Wooden Box",
      image: "/lovable-uploads/9821a74b-7319-4c79-bf2b-8e28872a8561.png",
      description: "Luxurious wooden boxes with custom engraving and premium finishes.",
      link: "/products/wooden-boxes"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'books', name: 'Books & Print' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'specialty', name: 'Specialty Items' },
  ];

  // Filter products based on active category
  const filteredProducts = products.filter((product) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'books') {
      return ['Bible', 'Children\'s Books', 'Journal'].includes(product.name);
    }
    if (activeCategory === 'packaging') {
      return ['Jewelry Box', 'Gift Box', 'Shopping Bag', 'Wine Box', 'Wooden Box', 'Jewelry Box Custom'].includes(product.name);
    }
    if (activeCategory === 'specialty') {
      return ['Calendar', 'Game Cards', 'Greeting Cards'].includes(product.name);
    }
    return true;
  });

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
    <section id="products" className="py-12 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800">Our Products</h2>
          <div className="mt-2 h-1 w-20 bg-forest-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-forest-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality printing and packaging solutions,
            crafted with precision and attention to detail.
          </p>
        </div>

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

        <div 
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={product.link}
                className="product-card bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-forest-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-forest-600">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-earth-500 text-white rounded-md font-medium hover:bg-earth-600 transition-colors"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
