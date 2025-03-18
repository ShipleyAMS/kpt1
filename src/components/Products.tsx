
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Printer, Package, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductItem {
  name: string;
  icon?: React.ReactNode;
  image: string;
  link: string;
}

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Categories with their products
  const categories = [
    {
      name: "PRINTING",
      icon: <Printer className="h-8 w-8 text-[#007041] mb-2" />,
      image: "/lovable-uploads/5711bd98-36d2-4420-80b8-76d8febe0aec.png",
      products: [
        { name: "Catalogues", image: "/placeholder.svg", link: "/products/catalogues" },
        { name: "Leaflets", image: "/placeholder.svg", link: "/products/leaflets" },
        { name: "Books", image: "/lovable-uploads/7dd0ed77-bef4-4667-88b1-5f8a749589f2.png", link: "/products/books" },
        { name: "Bibles", image: "/lovable-uploads/b98f5f4b-72df-44dc-af9a-311dbd32d7b9.png", link: "/products/bibles" },
        { name: "Calendar", image: "/lovable-uploads/513a1818-3b90-4839-979b-a7279d2b013e.png", link: "/products/calendar" },
        { name: "Game Cards", image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png", link: "/products/game-cards" },
        { name: "Greeting Cards", image: "/lovable-uploads/7d99bcd5-099a-42f0-8760-70f056733a9d.png", link: "/products/greeting-cards" },
        { name: "Tarot Cards", image: "/placeholder.svg", link: "/products/tarot-cards" },
        { name: "Jigsaw Puzzles", image: "/placeholder.svg", link: "/products/jigsaw-puzzles" },
      ]
    },
    {
      name: "PACKAGING",
      icon: <Package className="h-8 w-8 text-[#007041] mb-2" />,
      image: "/lovable-uploads/ec48376c-2d1f-499d-a57d-da6f1b634ac2.png",
      products: [
        { name: "Make-up Boxes", image: "/lovable-uploads/212a47c2-8686-42ba-aa2e-94eea5da96bc.png", link: "/products/makeup-boxes" },
        { name: "Jewelery Boxes", image: "/lovable-uploads/b9086efc-629a-47ed-8b95-068140735132.png", link: "/products/jewelery-boxes" },
        { name: "Gift Boxes", image: "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png", link: "/products/gift-boxes" },
        { name: "Wine Boxes", image: "/lovable-uploads/7d6d05ad-2a4e-49fa-b367-5206277f9e19.png", link: "/products/wine-boxes" },
        { name: "Wooden Boxes", image: "/lovable-uploads/9821a74b-7319-4c79-bf2b-8e28872a8561.png", link: "/products/wooden-boxes" },
        { name: "Shopping Bags", image: "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png", link: "/products/shopping-bags" },
      ]
    },
    {
      name: "STATIONERY",
      icon: <BookOpen className="h-8 w-8 text-[#007041] mb-2" />,
      image: "/lovable-uploads/e3399284-14ec-4e5a-9139-92cd61ed0d70.png",
      products: [
        { name: "Notebooks", image: "/placeholder.svg", link: "/products/notebooks" },
        { name: "Journals", image: "/lovable-uploads/0b092d75-12e1-469a-8aee-6e42bf1cdb30.png", link: "/products/journals" },
        { name: "Planners", image: "/placeholder.svg", link: "/products/planners" },
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
