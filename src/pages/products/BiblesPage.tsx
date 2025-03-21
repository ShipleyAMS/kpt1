import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const BiblesPage = () => {
  return (
    <ProductDetailLayout
      title="Bibles"
      description="Our premium Bible printing service offers exceptional quality with the reverence these sacred texts deserve. We use ultra-thin Bible paper, premium binding techniques, and offer various customization options including gilded edges and ribbon markers."
      images={["/images/printing/bibles/b98f5f4b-72df-44dc-af9a-311dbd32d7b9.png", "/images/printing/bibles/5711bd98-36d2-4420-80b8-76d8febe0aec.png"]}
      specifications={[
        { name: "Size Options", description: "Standard Bible sizes, Compact, Large print" },
        { name: "Paper Type", description: "Ultra-thin Bible paper (India paper)" },
        { name: "Binding Options", description: "Smyth sewn, Case bound, Perfect bound" },
        { name: "Cover Options", description: "Leather, Leatherette, Hardcover, Softcover" },
        { name: "Special Features", description: "Gilded edges, Ribbon markers, Thumb indexing" },
        { name: "Customization", description: "Custom covers, Personalization, Family records" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Typesetting</div>
            <p className="text-sm text-gray-600">Careful formatting of sacred text</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Printing</div>
            <p className="text-sm text-gray-600">High-precision printing on bible paper</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Binding</div>
            <p className="text-sm text-gray-600">Sewn binding for durability</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Cover</div>
            <p className="text-sm text-gray-600">Cover application and embossing</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">5. Finishing</div>
            <p className="text-sm text-gray-600">Edge gilding, ribbon markers, and final quality check</p>
          </div>
        </div>
      }
    />
  );
};

export default BiblesPage;
