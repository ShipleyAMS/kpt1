
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
          <p className="mt-5 text-forest-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality printing and packaging solutions,
            crafted with precision and attention to detail.
          </p>
        </div>

        <div 
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000 grid md:grid-cols-3 gap-8 mt-10"
        >
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-[#007041]">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-forest-600 hover:text-[#AA8066] transition-colors">
                    <Link to={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
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
