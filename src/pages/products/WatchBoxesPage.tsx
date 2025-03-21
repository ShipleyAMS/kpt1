
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const WatchBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Watch Boxes"
      description="Our watch boxes are crafted with precision and elegance to showcase timepieces. Featuring premium materials, plush interiors, and custom branding options, these boxes provide the perfect presentation for luxury watches."
      images={[
        "/lovable-uploads/faafb5be-1211-4112-a124-756086434ba0.png", 
        "/lovable-uploads/8882dbac-3137-4bfd-a13e-ee650cff677e.png",
        "/lovable-uploads/ec48376c-2d1f-499d-a57d-da6f1b634ac2.png"
      ]}
      specifications={[
        { name: "Materials", description: "Rigid cardboard, Leatherette, Premium paper" },
        { name: "Size Options", description: "Single watch, Dual watch, Multiple watch displays" },
        { name: "Interior", description: "Velvet, Suede, Silk cushions and lining" },
        { name: "Printing", description: "Hot stamping, Foil stamping, Embossing" },
        { name: "Special Features", description: "Magnetic closure, Pillow inserts, Display window" },
        { name: "Minimum Order", description: "250 boxes" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Precision design for watch packaging</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Material</div>
            <p className="text-sm text-gray-600">Premium material selection and preparation</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Construction</div>
            <p className="text-sm text-gray-600">Sturdy box construction with finishing</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Interior</div>
            <p className="text-sm text-gray-600">Luxury interior fitting and final assembly</p>
          </div>
        </div>
      }
    />
  );
};

export default WatchBoxesPage;
