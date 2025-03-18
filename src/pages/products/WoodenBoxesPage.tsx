
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';
import { products } from '@/components/products/productData';

const WoodenBoxesPage = () => {
  const featuredProducts = products.filter(product => 
    ['Wine Boxes', 'Jewelery Boxes', 'Gift Boxes'].includes(product.name)
  );

  return (
    <ProductDetailLayout
      title="Wooden Boxes"
      description="Our wooden boxes combine natural beauty with superior craftsmanship. Made from sustainably sourced woods and available with various finishes, these boxes offer a premium packaging solution for luxury products, special gifts, or keepsakes with options for custom engraving and personalization."
      images={["/lovable-uploads/9821a74b-7319-4c79-bf2b-8e28872a8561.png", "/lovable-uploads/ec48376c-2d1f-499d-a57d-da6f1b634ac2.png"]}
      specifications={[
        { name: "Wood Types", description: "Pine, Oak, Bamboo, Walnut, Custom options" },
        { name: "Box Styles", description: "Sliding lid, Hinged, Sectioned, Nesting" },
        { name: "Size Options", description: "Small to large, Custom dimensions" },
        { name: "Finish Options", description: "Natural, Stained, Painted, Lacquered" },
        { name: "Customization", description: "Laser engraving, Branding, Custom inserts" },
        { name: "Minimum Order", description: "25 boxes" },
      ]}
      featuredProducts={featuredProducts}
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
