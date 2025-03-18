
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';
import { products } from '@/components/products/productData';

const CalendarPage = () => {
  const featuredProducts = products.filter(product => 
    ['Books', 'Planners', 'Journals'].includes(product.name)
  );

  return (
    <ProductDetailLayout
      title="Calendar"
      description="Our calendars combine functionality with beautiful design. Available in various formats including wall calendars, desk calendars, and year planners, each calendar is printed on high-quality paper with vibrant colors and durable binding."
      images={["/lovable-uploads/513a1818-3b90-4839-979b-a7279d2b013e.png", "/lovable-uploads/5711bd98-36d2-4420-80b8-76d8febe0aec.png"]}
      specifications={[
        { name: "Types", description: "Wall calendars, Desk calendars, Year planners" },
        { name: "Size Options", description: "A3, A4, A5, Custom sizes available" },
        { name: "Paper Types", description: "Gloss, Matte, Silk, Premium Art" },
        { name: "Binding Options", description: "Wire-o, Spiral, Saddle-stitched, Custom" },
        { name: "Special Features", description: "Special date marking, Custom holidays" },
        { name: "Customization", description: "Corporate branding, Custom imagery" },
      ]}
      featuredProducts={featuredProducts}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Calendar layout and date formatting</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-quality printing of calendar pages</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Assembly</div>
            <p className="text-sm text-gray-600">Collating and assembling the calendar sheets</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Binding</div>
            <p className="text-sm text-gray-600">Wire-o or spiral binding for easy page turning</p>
          </div>
        </div>
      }
    />
  );
};

export default CalendarPage;
