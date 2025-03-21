
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const BiblesPage = () => {
  return (
    <ProductDetailLayout
      title="Bibles"
      description="Our premium Bible printing service offers exceptional quality with the reverence these sacred texts deserve. We use ultra-thin Bible paper, premium binding techniques, and offer various customization options including gilded edges and ribbon markers."
      images={[
        "/lovable-uploads/555d640f-d874-4ac3-9aec-5eb6c9240c07.png",
        "/lovable-uploads/e6192e30-4db7-4b1c-8fad-259b1fd4bb28.png",
        "/lovable-uploads/a193dad8-6c48-4d41-ac92-d368f2ce3be9.png",
        "/lovable-uploads/64a0f792-dc35-4288-8329-4cc153e6e769.png",
        "/lovable-uploads/05f695dd-831c-411e-a183-c87c663e1289.png",
        "/lovable-uploads/26dfa810-dcb0-41af-9ac4-3a4748040e8a.png",
        "/lovable-uploads/ad2a942a-c748-4bd4-be0e-2baf93f9c897.png"
      ]}
      specifications={[
        { name: "Size Options", description: "Standard Bible sizes, Compact, Large print" },
        { name: "Paper Type", description: "Ultra-thin Bible paper (India paper)" },
        { name: "Binding Options", description: "Smyth sewn, Case bound, Perfect bound" },
        { name: "Cover Options", description: "Leather, Leatherette, Hardcover, Softcover" },
        { name: "Special Features", description: "Gilded edges, Ribbon markers, Thumb indexing" },
        { name: "Customization", description: "Custom covers, Personalization, Family records" },
      ]}
      featuredProducts={[]}
      exampleProducts="Children's Bibles, Story Bibles, PU Bibles, Silk Screen Bibles, Gold Glide Bibles, Thumb Notch Bibles"
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
