
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const WineBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Wine Boxes"
      description="Our premium wine boxes are designed to protect and showcase fine wines and spirits. Available in various materials including wood, rigid board, and cardboard, these boxes feature custom inserts, luxurious finishes, and can be fully personalized for special occasions or corporate gifting."
      images={[
        "/images/packaging/wine-boxes/f237a227-533c-40ac-a7df-36908496434e.png", 
        "/images/packaging/wine-boxes/7cce18ea-dcd2-42f0-931f-83cfa8c81ae8.png",
        "/images/packaging/wine-boxes/297da318-11ca-4ceb-b434-e71a52e6d26f.png",
        "/images/packaging/wine-boxes/eeb12ac0-4e34-4983-a249-ba9cf5c96828.png",
        "/images/packaging/wine-boxes/0b0aa17f-a554-4f06-a9e3-b171f5e4e83a.png",
        "/images/packaging/wine-boxes/3d42649a-9a0c-4984-afa8-49ab550d3a54.png",
        "/images/packaging/wine-boxes/b86c108d-987e-45f2-b69d-1f597afc4ec5.png",
        "/images/packaging/wine-boxes/dd5a8239-1a88-42b5-b2cf-d32a61e010ce.png",
        "/images/packaging/wine-boxes/c2d4a59c-4fbc-4a26-8178-d8f8fb35d276.png",
        "/images/packaging/wine-boxes/aebee220-6ee7-41f2-bb2b-fea094e33091.png",
        "/images/packaging/wine-boxes/c1a24417-642c-4b54-868f-df46cf2e62ab.png"
      ]}
      specifications={[
        { name: "Materials", description: "Wood, Rigid board, Premium cardboard" },
        { name: "Bottle Capacity", description: "Single, Double, Triple, Custom configurations" },
        { name: "Insert Options", description: "EVA foam, Die-cut cardboard, Custom molded" },
        { name: "Finish Options", description: "Wood stain, Print, Foil stamping, Engraving" },
        { name: "Special Features", description: "Hinged lids, Sliding drawers, Display windows" },
        { name: "Minimum Order", description: "25 boxes" },
      ]}
      featuredProducts={[]}
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
