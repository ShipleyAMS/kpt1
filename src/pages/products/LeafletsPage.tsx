import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const LeafletsPage = () => {
  return (
    <ProductDetailLayout
      title="Leaflets"
      description="Our leaflets are perfect for promotional campaigns, events, and information distribution. Available in various sizes and paper types, our leaflets are designed to grab attention and deliver your message effectively."
      images={["/lovable-uploads/5711bd98-36d2-4420-80b8-76d8febe0aec.png"]}
      specifications={[
        { name: "Size Options", description: "A4, A5, A6, DL, Custom sizes" },
        { name: "Paper Types", description: "Standard, Recycled, Gloss, Matte" },
        { name: "Fold Options", description: "Single fold, Bi-fold, Tri-fold, Z-fold, Gate fold" },
        { name: "Finish Options", description: "Lamination (gloss/matte), Spot UV" },
        { name: "Minimum Order", description: "100 copies" },
        { name: "Custom Features", description: "Die-cutting, Perforations, Custom shapes" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Professional design to maximize impact</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-resolution printing on selected paper</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Finish</div>
            <p className="text-sm text-gray-600">Optional finishes for enhanced durability</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Folding</div>
            <p className="text-sm text-gray-600">Precision folding to your specifications</p>
          </div>
        </div>
      }
    />
  );
};

export default LeafletsPage;
