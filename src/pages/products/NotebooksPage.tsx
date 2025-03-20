
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const NotebooksPage = () => {
  return (
    <ProductDetailLayout
      title="Notebooks"
      description="Our premium notebooks combine functionality with stylish design. Available in various sizes, paper types, and binding options, these notebooks feature customizable covers, high-quality paper, and durable construction - perfect for personal use, corporate gifts, or retail."
      images={[
        "/lovable-uploads/d0add415-21d2-4656-8c56-cb812eca49a6.png", 
        "/lovable-uploads/34846106-4bd4-464a-8c86-6e9d5a049fea.png",
        "/lovable-uploads/9cac2a34-a2db-45df-a18a-dcd7526fe480.png",
        "/lovable-uploads/48e550bc-0d5f-4553-9aea-82970612ef16.png"
      ]}
      specifications={[
        { name: "Size Options", description: "A4, A5, A6, B5, Custom sizes" },
        { name: "Paper Types", description: "Ruled, Plain, Dotted, Grid, Mixed" },
        { name: "Paper Weight", description: "70gsm, 80gsm, 90gsm, 100gsm options" },
        { name: "Binding Types", description: "Perfect bound, Wire-o, Thread sewn, Spiral" },
        { name: "Cover Options", description: "Hardcover, Softcover, PU leather, Fabric" },
        { name: "Minimum Order", description: "50 notebooks" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Cover design and interior layout</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">Printing covers and interior pages</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Assembly</div>
            <p className="text-sm text-gray-600">Collating and preparing for binding</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Binding</div>
            <p className="text-sm text-gray-600">Binding and finishing the notebook</p>
          </div>
        </div>
      }
    />
  );
};

export default NotebooksPage;
