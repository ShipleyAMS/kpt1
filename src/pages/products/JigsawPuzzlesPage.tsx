
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const JigsawPuzzlesPage = () => {
  return (
    <ProductDetailLayout
      title="Jigsaw Puzzles"
      description="Our custom jigsaw puzzles are professionally crafted with precision-cut pieces and vibrant printing. Perfect for promotional gifts, family photos, or retail products, our puzzles are available in various piece counts and packaging options."
      images={["/placeholder.svg", "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png"]}
      specifications={[
        { name: "Sizes", description: "Standard sizes or custom dimensions" },
        { name: "Piece Count", description: "24, 50, 100, 200, 500, 1000 pieces" },
        { name: "Material", description: "Premium puzzle board with linen texture" },
        { name: "Packaging", description: "Box with display image, Pouch, Custom packaging" },
        { name: "Customization", description: "Custom shapes, Special cut patterns" },
        { name: "Minimum Order", description: "25 puzzles" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Preparing artwork for puzzle production</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-resolution printing on puzzle board</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Cut</div>
            <p className="text-sm text-gray-600">Precision die-cutting of puzzle pieces</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Package</div>
            <p className="text-sm text-gray-600">Packaging in custom box with reference image</p>
          </div>
        </div>
      }
    />
  );
};

export default JigsawPuzzlesPage;
