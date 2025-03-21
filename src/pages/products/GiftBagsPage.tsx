
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GiftBagsPage = () => {
  return (
    <ProductDetailLayout
      title="Gift Bags"
      description="Our premium gift bags combine durability with elegant design. Available in paper, fabric, and eco-friendly materials, these bags feature reinforced handles, custom printing, and various finish options - perfect for retail, events, or promotional purposes."
      images={[
        "/lovable-uploads/397f328c-f306-42e6-b2d2-2c04434346ee.png", 
        "/lovable-uploads/ee468134-879a-490c-9b45-e57f02f9ce69.png",
        "/lovable-uploads/b08ea8e5-1dbd-4854-acd2-ae05b0bce7ae.png",
        "/lovable-uploads/d63318b7-4d58-4d30-b3c6-3cfe773439bb.png",
        "/lovable-uploads/95036f72-eee6-430f-bae0-90b5233726a8.png"
      ]}
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
