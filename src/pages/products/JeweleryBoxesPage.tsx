
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const JeweleryBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Jewelery Boxes"
      description="Our jewelery boxes are designed to showcase your precious pieces with elegance. Crafted from premium materials with luxurious finishes, these boxes feature custom inserts, plush linings, and secure closures to protect and display jewelry beautifully."
      images={[
        "/lovable-uploads/bd0c61b8-a405-4055-954d-857f892c3b15.png", 
        "/lovable-uploads/0d579e96-7339-4c90-896d-be889efd8e54.png",
        "/lovable-uploads/4741774e-2fbd-42e8-b75d-3b0668247a49.png",
        "/lovable-uploads/74afe07a-19e7-448e-a8e4-3a31d32991a7.png",
        "/lovable-uploads/616239fd-7e8c-48bd-9417-95cb30066cae.png",
        "/lovable-uploads/e5008518-487b-4836-9e50-9fe3a4af0084.png", 
        "/lovable-uploads/5246a152-5d3c-4ad0-829e-72a12018d247.png",
        "/lovable-uploads/1a8ec54c-4d6f-4b14-8fc2-540ab5d74b0b.png",
        "/lovable-uploads/9e78147c-aa7b-4966-92fb-9890fb00a46a.png",
        "/lovable-uploads/024e09ec-4a90-4012-84f3-effdeee370f6.png",
        "/lovable-uploads/7a1c1ec7-e0a9-4ddd-9a2a-8953616b7ed9.png",
        "/lovable-uploads/803c212b-b718-42b0-a36d-68ddf48d2e78.png",
        "/lovable-uploads/3626e3d8-66b5-4ccb-8577-dfb6e9ac02dc.png"
      ]}
      specifications={[
        { name: "Materials", description: "Rigid board, Premium paper, Velvet, Silk" },
        { name: "Size Options", description: "Necklace, Ring, Earring, Bracelet, Custom" },
        { name: "Lining Options", description: "Velvet, Silk, Foam, Custom inserts" },
        { name: "Closure Types", description: "Magnetic, Ribbon tie, Box and lid" },
        { name: "Finish Options", description: "Foil stamping, Embossing, Spot UV" },
      ]}
      featuredProducts={[]}
      exampleProducts="Necklace Box, Braclet Box, Earring Box, Ring Box"
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Box structure and branding design</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Construction</div>
            <p className="text-sm text-gray-600">Creating the rigid structure</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Covering</div>
            <p className="text-sm text-gray-600">Applying exterior materials and finishes</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Lining</div>
            <p className="text-sm text-gray-600">Installing interior lining and inserts</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">5. Finishing</div>
            <p className="text-sm text-gray-600">Adding closures and final embellishments</p>
          </div>
        </div>
      }
    />
  );
};

export default JeweleryBoxesPage;
