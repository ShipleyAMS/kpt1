
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const WoodenBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Wooden Boxes"
      description="Our wooden boxes combine timeless elegance with premium craftsmanship. Perfect for luxury gifts, keepsakes, or specialty products, these boxes feature quality wood materials, custom design options, and precise finishing details."
      images={[
        "/lovable-uploads/33abf773-6299-4658-aea2-6515350a7907.png",
        "/lovable-uploads/42a79d26-50fc-4ec6-9437-c89c30bd03f1.png",
        "/lovable-uploads/7dd0ed77-bef4-4667-88b1-5f8a749589f2.png",
        "/lovable-uploads/739e8f05-71db-4443-b81e-dde057f048d6.png",
        "/lovable-uploads/212a47c2-8686-42ba-aa2e-94eea5da96bc.png"
      ]}
      specifications={[
        { name: "Wood Types", description: "Pine, Beech, Walnut, Cherry, Bamboo" },
        { name: "Box Styles", description: "Hinged lid, Sliding lid, Compartmented" },
        { name: "Finishes", description: "Natural, Stained, Lacquered, Burned" },
        { name: "Decoration", description: "Laser engraving, Inlay, Custom printing" },
        { name: "Interior Options", description: "Foam inserts, Fabric lining, Partitions" },
      ]}
      featuredProducts={[]}
      exampleProducts="Wooden Storage Box, Rustic Wooden Box, Vintage Wooden Box, Wooden Trinket Box, Wooden Keepsake Box, Wooden Jewelry Box"
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Custom design with client specifications</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Wood Selection</div>
            <p className="text-sm text-gray-600">Selecting premium wood materials</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Construction</div>
            <p className="text-sm text-gray-600">Precision cutting and assembly</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Finishing</div>
            <p className="text-sm text-gray-600">Sanding, staining and protective coating</p>
          </div>
        </div>
      }
    />
  );
};

export default WoodenBoxesPage;
