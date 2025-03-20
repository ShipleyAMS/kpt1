
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const PlannersPage = () => {
  return (
    <ProductDetailLayout
      title="Planners"
      description="Our planners are designed to boost productivity with intuitive layouts and premium construction. Available in daily, weekly, and monthly formats with customizable covers and layouts, these planners feature high-quality paper and durable binding to support your organization all year long."
      images={[
        "/lovable-uploads/559afcce-3c6a-4840-a647-4efeba9173f0.png", 
        "/lovable-uploads/d85e5bc0-ceb4-4e66-8d99-3075077afa6b.png",
        "/lovable-uploads/3ab6adeb-b4af-4acf-8a3e-d1ebf16cbd85.png"
      ]}
      specifications={[
        { name: "Format Options", description: "Daily, Weekly, Monthly, Academic, Project" },
        { name: "Size Options", description: "A5, A4, B5, Pocket size, Custom" },
        { name: "Paper Quality", description: "Premium 90gsm, Bleed-resistant" },
        { name: "Cover Options", description: "Hardcover, Softcover, Leather, Custom designs" },
        { name: "Binding Types", description: "Spiral, Wire-o, Perfect bound, Thread sewn" },
        { name: "Special Features", description: "Tabs, Pockets, Elastic closure, Ribbon markers" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Layout design with calendar integration</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-quality printing of interior pages and covers</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Features</div>
            <p className="text-sm text-gray-600">Adding tabs, markers, and special features</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Binding</div>
            <p className="text-sm text-gray-600">Binding according to planner style</p>
          </div>
        </div>
      }
    />
  );
};

export default PlannersPage;
