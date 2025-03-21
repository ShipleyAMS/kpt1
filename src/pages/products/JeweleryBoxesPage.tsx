
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const JeweleryBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Jewelery Boxes"
      description="Our jewelery boxes are designed to showcase your precious pieces with elegance. Crafted from premium materials with luxurious finishes, these boxes feature custom inserts, plush linings, and secure closures to protect and display jewelry beautifully."
      images={[
        "/images/packaging/jewelery-boxes/jewelery-boxes-main.png", 
        "/images/packaging/jewelery-boxes/jewelery-boxes-1.png",
        "/images/packaging/jewelery-boxes/jewelery-boxes-2.png",
        "/images/packaging/jewelery-boxes/jewelery-boxes-3.png",
        "/images/packaging/jewelery-boxes/jewelery-boxes-4.png",
        "/images/packaging/jewelery-boxes/jewelery-boxes-5.png", 
        "/images/packaging/jewelery-boxes/jewelery-boxes-6.png",
        "/images/packaging/jewelery-boxes/jewelery-boxes-7.png",
        "/images/packaging/jewelery-boxes/jewelery-boxes-8.png",
        "/images/packaging/jewelery-boxes/jewelery-boxes-9.png",
        "/images/packaging/jewelery-boxes/jewelery-boxes-10.png",
        "/images/packaging/jewelery-boxes/jewelery-boxes-11.png",
        "/images/packaging/jewelery-boxes/jewelery-boxes-12.png"
      ]}
      specifications={[
        { name: "Materials", description: "Rigid board, Premium paper, Velvet, Silk" },
        { name: "Size Options", description: "Necklace, Ring, Earring, Bracelet, Custom" },
        { name: "Lining Options", description: "Velvet, Silk, Foam, Custom inserts" },
        { name: "Closure Types", description: "Magnetic, Ribbon tie, Box and lid" },
        { name: "Finish Options", description: "Foil stamping, Embossing, Spot UV" },
        { name: "Minimum Order", description: "50 boxes" },
      ]}
      featuredProducts={[]}
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
