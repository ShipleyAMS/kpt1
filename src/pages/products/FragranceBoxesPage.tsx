
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const FragranceBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Fragrance Boxes"
      description="Our luxury fragrance boxes are designed to enhance the presentation of perfumes and scented products. With premium materials and exquisite finishing options, these boxes provide the perfect housing for high-end fragrances."
      images={[
        "/images/packaging/fragrance-boxes/1ca11ca6-fd55-4f7a-ae09-9a92a9e4fd24.png",
        "/images/packaging/fragrance-boxes/afe21ec4-4ea2-402d-95ba-958bade4d266.png",
        "/images/packaging/fragrance-boxes/955cb2ec-eb7f-405b-89b5-2819a70dfeba.png",
        "/images/packaging/fragrance-boxes/3e432d10-b6bb-4236-ab34-807363c0e288.png",
        "/images/packaging/fragrance-boxes/2546ab6c-a53c-4aef-94c8-95d248ea4a40.png",
        "/images/packaging/fragrance-boxes/0f7f1443-d7bd-48de-b893-0820b17fee51.png",
        "/images/packaging/fragrance-boxes/574cb988-d0f5-433a-b7e3-9a3cbd77418a.png",
        "/images/packaging/fragrance-boxes/d53daf32-61e4-428d-b92e-bd3d0d54307f.png"
      ]}
      specifications={[
        { name: "Materials", description: "Premium cardboard, Art paper, Specialty papers" },
        { name: "Size Options", description: "Custom sizes for various fragrance bottles" },
        { name: "Printing", description: "Full color, Spot color, Foil stamping" },
        { name: "Finish Options", description: "Matte, Gloss, Soft-touch, Embossing, Debossing" },
        { name: "Special Features", description: "Magnetic closure, Foam inserts, Windows" },
        { name: "Minimum Order", description: "500 boxes" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Custom design for fragrance packaging</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">Premium printing with special finishes</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Die-Cut</div>
            <p className="text-sm text-gray-600">Precision cutting and scoring</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Assembly</div>
            <p className="text-sm text-gray-600">Expert assembly with special features</p>
          </div>
        </div>
      }
    />
  );
};

export default FragranceBoxesPage;
