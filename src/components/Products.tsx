
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
        {
          name: "Catalogues",
          description: "Professional product showcases with premium printing."
        },
        {
          name: "Leaflets",
          description: "Eye-catching promotional materials for effective marketing."
        },
        {
          name: "Books",
          description: "High-quality book printing with various binding options."
        },
        {
          name: "Bibles",
          description: "Premium bible printing with delicate papers and binding."
        },
        {
          name: "Calendar",
          description: "Custom calendars for promotional and personal use."
        },
        {
          name: "Game Cards",
          description: "Durable game cards with premium finishes."
        },
        {
          name: "Greeting Cards",
          description: "Personalized cards for every occasion."
        },
        {
          name: "Tarot Cards",
          description: "Specialized card printing with custom finishes."
        },
        {
          name: "Jigsaw Puzzles",
          description: "Custom puzzles with precise cutting and vibrant colors."
        }
      ]
    },
    {
      title: "PACKAGING",
      icon: <Package className="h-12 w-12 mb-4 text-[#007041]" />,
      items: [
        {
          name: "Make-up Box",
          description: "Elegant cosmetic packaging solutions."
        },
        {
          name: "Jewelery Box",
          description: "Premium jewelry presentation boxes."
        },
        {
          name: "Gift Box",
          description: "Custom gift boxes for special occasions."
        },
        {
          name: "Wine Box",
          description: "Elegant wine packaging and presentation boxes."
        },
        {
          name: "Wooden Box",
          description: "Premium wooden boxes with custom finishes."
        },
        {
          name: "Shopping Bag",
          description: "Custom retail bags with brand designs."
        }
      ]
    },
    {
      title: "STATIONERY",
      icon: <PenTool className="h-12 w-12 mb-4 text-[#007041]" />,
      items: [
        {
          name: "Notebook",
          description: "Professional notebooks with custom designs."
        },
        {
          name: "Journal",
          description: "Premium journals with various paper options."
        },
        {
          name: "Planner",
          description: "Organizational planners for productivity."
        }
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
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <Link 
                    key={itemIndex}
                    to={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block group"
                  >
                    <div className="p-3 rounded-lg hover:bg-[#F8F7F2] transition-colors">
                      <div className="text-[#007041] font-medium group-hover:text-[#AA8066] transition-colors">
                        {item.name}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
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
