
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
      image: "/lovable-uploads/ef8912ba-ad99-40c3-b65d-03e93a57155c.png",
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
      image: "/lovable-uploads/51f0b84b-08de-467e-b210-35b58d2d85c2.png",
      products: [
        { name: "Cosmetic Boxes", image: "/lovable-uploads/b6e8fc28-653d-4228-9fa9-b1b99a5a25aa.png", link: "/products/cosmetic-boxes" },
        { name: "Jewelery Boxes", image: "/lovable-uploads/bd0c61b8-a405-4055-954d-857f892c3b15.png", link: "/products/jewelery-boxes" },
        { name: "Fragrance Boxes", image: "/lovable-uploads/1ca11ca6-fd55-4f7a-ae09-9a92a9e4fd24.png", link: "/products/fragrance-boxes" },
        { name: "Watch Boxes", image: "/lovable-uploads/faafb5be-1211-4112-a124-756086434ba0.png", link: "/products/watch-boxes" },
        { name: "Gift Boxes", image: "/lovable-uploads/4a00c030-1150-4412-9bd5-501f1c8882a8.png", link: "/products/gift-boxes" },
        { name: "Gift Bags", image: "/lovable-uploads/397f328c-f306-42e6-b2d2-2c04434346ee.png", link: "/products/gift-bags" },
        { name: "Wine Boxes", image: "/lovable-uploads/f237a227-533c-40ac-a7df-36908496434e.png", link: "/products/wine-boxes" },
        { name: "Wooden Boxes", image: "/lovable-uploads/33abf773-6299-4658-aea2-6515350a7907.png", link: "/products/wooden-boxes" },
      ]
    },
    {
      name: "STATIONERY",
      icon: <BookOpen className="h-8 w-8 text-[#007041] mb-2" />,
      image: "/lovable-uploads/8bb72b96-16ef-4e70-8451-25ef42e29b83.png",
      products: [
        { name: "Notebooks", image: "/lovable-uploads/2e228353-624a-40eb-873c-01d1de7088fb.png", link: "/products/notebooks" },
        { name: "Journals", image: "/lovable-uploads/cea7e9e9-d0c6-4839-9680-4963d79b91c3.png", link: "/products/journals" },
        { name: "Planners", image: "/lovable-uploads/559afcce-3c6a-4840-a647-4efeba9173f0.png", link: "/products/planners" },
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
