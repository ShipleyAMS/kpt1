
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const FragranceBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Fragrance Boxes"
      description="Our luxury fragrance boxes are designed to enhance the presentation of perfumes and scented products. With premium materials and exquisite finishing options, these boxes provide the perfect housing for high-end fragrances."
      images={[
        "/images/packaging/fragrance-boxes/fragrance-boxes-main.png",
        "/images/packaging/fragrance-boxes/fragrance-boxes-1.png",
        "/images/packaging/fragrance-boxes/fragrance-boxes-2.png",
        "/images/packaging/fragrance-boxes/fragrance-boxes-3.png",
        "/images/packaging/fragrance-boxes/fragrance-boxes-4.png",
        "/images/packaging/fragrance-boxes/fragrance-boxes-5.png",
        "/images/packaging/fragrance-boxes/fragrance-boxes-6.png",
        "/images/packaging/fragrance-boxes/fragrance-boxes-7.png"
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
