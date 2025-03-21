
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const CosmeticBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Cosmetic Boxes"
      description="Our premium cosmetic boxes combine elegant design with sturdy construction. Perfect for beauty brands, these boxes feature high-quality printing, premium finishes, and customizable inserts to showcase your products beautifully."
      images={[
        "/lovable-uploads/b6e8fc28-653d-4228-9fa9-b1b99a5a25aa.png",
        "/lovable-uploads/cafd74c7-3272-4fd0-94a1-264c837cdf1b.png",
        "/lovable-uploads/e49dc655-cdd6-494c-87cf-c9f9f85e3dc2.png",
        "/lovable-uploads/c023e2ad-4c07-4dd9-8d1e-bf365f282863.png",
        "/lovable-uploads/88a5a924-4f50-4a50-aa1d-1a607dafbf7b.png",
        "/lovable-uploads/031e59f4-c1af-40b2-ab81-e901f38116e1.png",
        "/lovable-uploads/2332fc4c-7cad-40b5-92ca-601b645718f5.png"
      ]}
      specifications={[
        { name: "Materials", description: "Premium card, Rigid board, Eco-friendly options" },
        { name: "Size Options", description: "Standard sizes, Custom dimensions available" },
        { name: "Printing", description: "Full color CMYK, Pantone matching, Foil stamping" },
        { name: "Finish Options", description: "Matte, Gloss, Soft-touch, Embossing" },
        { name: "Special Features", description: "Windows, Custom inserts, Magnetic closures" },
      ]}
      featuredProducts={[]}
      exampleProducts="Makeup Storage Box, Lipstick Organizer Box, Compact Cosmetic Box"
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Box structure and graphics design</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-quality printing on selected material</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Finish</div>
            <p className="text-sm text-gray-600">Applying lamination, foil, and special finishes</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Die-Cut</div>
            <p className="text-sm text-gray-600">Precision cutting and scoring for folding</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">5. Assembly</div>
            <p className="text-sm text-gray-600">Gluing, folding and final quality check</p>
          </div>
        </div>
      }
    />
  );
};

export default CosmeticBoxesPage;
