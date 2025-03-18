
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';
import { products } from '@/components/products/productData';

const WineBoxesPage = () => {
  const featuredProducts = products.filter(product => 
    ['Wooden Boxes', 'Gift Boxes', 'Jewelery Boxes'].includes(product.name)
  );

  return (
    <ProductDetailLayout
      title="Wine Boxes"
      description="Our premium wine boxes are designed to protect and showcase fine wines and spirits. Available in various materials including wood, rigid board, and cardboard, these boxes feature custom inserts, luxurious finishes, and can be fully personalized for special occasions or corporate gifting."
      images={["/lovable-uploads/7d6d05ad-2a4e-49fa-b367-5206277f9e19.png", "/lovable-uploads/ec48376c-2d1f-499d-a57d-da6f1b634ac2.png"]}
      specifications={[
        { name: "Materials", description: "Wood, Rigid board, Premium cardboard" },
        { name: "Bottle Capacity", description: "Single, Double, Triple, Custom configurations" },
        { name: "Insert Options", description: "EVA foam, Die-cut cardboard, Custom molded" },
        { name: "Finish Options", description: "Wood stain, Print, Foil stamping, Engraving" },
        { name: "Special Features", description: "Hinged lids, Sliding drawers, Display windows" },
        { name: "Minimum Order", description: "25 boxes" },
      ]}
      featuredProducts={featuredProducts}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Structure design and branding elements</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Construction</div>
            <p className="text-sm text-gray-600">Box building from selected materials</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Inserts</div>
            <p className="text-sm text-gray-600">Creating and installing bottle inserts</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Finishing</div>
            <p className="text-sm text-gray-600">Adding decorative elements and branding</p>
          </div>
        </div>
      }
    />
  );
};

export default WineBoxesPage;
