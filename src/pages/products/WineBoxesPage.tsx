
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const WineBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Wine Boxes"
      description="Our wine boxes combine elegant design with sturdy protection for wine bottles. Whether for gifting, retail display, or collection storage, our wine boxes feature premium materials, custom branding options, and precise bottle compartments."
      images={[
        "/lovable-uploads/f237a227-533c-40ac-a7df-36908496434e.png",
        "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
        "/lovable-uploads/0ec05fee-4030-4bc0-bf83-6b14f314e476.png",
        "/lovable-uploads/99e8d61c-e0c1-4121-8345-c4e6009030ca.png",
        "/lovable-uploads/7b19f840-c217-43f6-a925-82c05b1102a9.png"
      ]}
      specifications={[
        { name: "Box Types", description: "Single bottle, Double bottle, Multiple bottle boxes" },
        { name: "Materials", description: "Wood, Premium rigid board, Leather-wrapped" },
        { name: "Printing", description: "Hot stamping, Engraving, Embossing, Full color" },
        { name: "Interior", description: "Foam inserts, Velvet lining, Custom compartments" },
        { name: "Special Features", description: "Windows, Accessory compartments, Handle options" },
      ]}
      featuredProducts={[]}
      exampleProducts="Wooden Wine Box, Personalized Wine Box, Luxury Wine Box, Wine Carrier Box"
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Custom design for bottle protection</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Materials</div>
            <p className="text-sm text-gray-600">Selection of premium materials</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Construction</div>
            <p className="text-sm text-gray-600">Precision cutting and assembly</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Finishing</div>
            <p className="text-sm text-gray-600">Adding branding and protective inserts</p>
          </div>
        </div>
      }
    />
  );
};

export default WineBoxesPage;
