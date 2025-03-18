import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Printer, Package, PenTool } from 'lucide-react';

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

  const categories = [
    {
      title: "PRINTING",
      icon: <Printer className="h-12 w-12 mb-4 text-[#007041]" />,
      image: "/lovable-uploads/52d60be2-0fad-48e1-b8cf-fb89e84b8024.png",
      items: [
        "Catalogues",
        "Leaflets",
        "Books",
        "Bibles",
        "Calendar",
        "Game Cards",
        "Greeting Cards",
        "Tarot Cards",
        "Jigsaw Puzzles"
      ]
    },
    {
      title: "PACKAGING",
      icon: <Package className="h-12 w-12 mb-4 text-[#007041]" />,
      image: "/lovable-uploads/42a79d26-50fc-4ec6-9437-c89c30bd03f1.png",
      items: [
        "Make-up Box",
        "Jewelery Box",
        "Gift Box",
        "Wine Box",
        "Wooden Box",
        "Shopping Bag"
      ]
    },
    {
      title: "STATIONERY",
      icon: <PenTool className="h-12 w-12 mb-4 text-[#007041]" />,
      image: "/lovable-uploads/eb8f5372-488f-44f7-9708-e97b95d40294.png",
      items: [
        "Notebook",
        "Journal",
        "Planner"
      ]
    }
  ];

  return (
    <section id="products" className="py-16 bg-[#F8F7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#007041]">Our Products</h2>
          <div className="mt-2 h-1 w-24 bg-[#007041] mx-auto rounded-full"></div>
        </div>

        <div 
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000 grid md:grid-cols-3 gap-8 mt-10"
        >
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    {category.icon}
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex}
                      to={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-2 rounded-md hover:bg-[#F8F7F2] transition-colors text-[#007041] hover:text-[#AA8066] text-sm font-medium"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link 
            to="/#contact" 
            className="inline-flex items-center px-6 py-3 bg-[#AA8066] text-white rounded-md font-medium hover:bg-[#96705a] transition-colors"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
