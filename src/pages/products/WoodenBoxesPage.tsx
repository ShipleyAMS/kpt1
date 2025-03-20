
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const WoodenBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Wooden Boxes"
      description="Our wooden boxes combine natural beauty with superior craftsmanship. Made from sustainably sourced woods and available with various finishes, these boxes offer a premium packaging solution for luxury products, special gifts, or keepsakes with options for custom engraving and personalization."
      images={[
        "/lovable-uploads/33abf773-6299-4658-aea2-6515350a7907.png", 
        "/lovable-uploads/d68069c1-2cef-43ad-aa0e-5a9e2e1e96b5.png",
        "/lovable-uploads/a492b7e6-8175-400b-8e6e-13f77a5c0197.png",
        "/lovable-uploads/39917ffc-4b0b-49e4-8381-67a06a1d4ba3.png",
        "/lovable-uploads/dfa9017b-8909-41d8-810c-e522135114af.png",
        "/lovable-uploads/a13d0179-4dcc-4491-86cb-6feb84804fac.png",
        "/lovable-uploads/1268ce49-0a47-42ad-918f-6a9e3416e75d.png",
        "/lovable-uploads/049cc80f-8281-410a-bd28-18b7fc715a20.png"
      ]}
      specifications={[
        { name: "Wood Types", description: "Pine, Oak, Bamboo, Walnut, Custom options" },
        { name: "Box Styles", description: "Sliding lid, Hinged, Sectioned, Nesting" },
        { name: "Size Options", description: "Small to large, Custom dimensions" },
        { name: "Finish Options", description: "Natural, Stained, Painted, Lacquered" },
        { name: "Customization", description: "Laser engraving, Branding, Custom inserts" },
        { name: "Minimum Order", description: "25 boxes" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Box structure and custom features</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Wood Selection</div>
            <p className="text-sm text-gray-600">Selecting and preparing quality wood</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Crafting</div>
            <p className="text-sm text-gray-600">Precision cutting and assembly</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Finishing</div>
            <p className="text-sm text-gray-600">Sanding, staining and sealing</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">5. Customization</div>
            <p className="text-sm text-gray-600">Adding engravings, inserts and hardware</p>
          </div>
        </div>
      }
    />
  );
};

export default WoodenBoxesPage;
