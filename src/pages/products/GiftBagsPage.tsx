
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GiftBagsPage = () => {
  return (
    <ProductDetailLayout
      title="Gift Bags"
      description="Our premium gift bags combine durability with elegant design. Available in paper, fabric, and eco-friendly materials, these bags feature reinforced handles, custom printing, and various finish options - perfect for retail, events, or promotional purposes."
      images={["/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png", "/lovable-uploads/ec48376c-2d1f-499d-a57d-da6f1b634ac2.png"]}
      specifications={[
        { name: "Materials", description: "Kraft, Art paper, Cotton, Jute, Eco-friendly options" },
        { name: "Size Options", description: "Small, Medium, Large, Custom sizes" },
        { name: "Handle Types", description: "Paper twisted, Ribbon, Cotton, Rope" },
        { name: "Printing", description: "Full color, Spot color, Foil stamping, Embossing" },
        { name: "Finish Options", description: "Matte, Gloss, Spot UV, Lamination" },
        { name: "Minimum Order", description: "250 bags" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Bag structure and graphic design</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-quality printing on selected material</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Die-Cut</div>
            <p className="text-sm text-gray-600">Cutting and scoring for assembly</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Assembly</div>
            <p className="text-sm text-gray-600">Folding, gluing, handle attachment</p>
          </div>
        </div>
      }
    />
  );
};

export default GiftBagsPage;
