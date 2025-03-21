
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GiftBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Product Packaging"
      description="Our product packaging solutions combine stunning presentation with practical design. Available in various shapes, sizes, and finishes, our custom packaging helps your products make a memorable impression with elegant branding and premium materials."
      images={[
        "/images/packaging/gift-boxes/gift-boxes-main.png",
        "/images/packaging/gift-boxes/gift-boxes-1.png",
        "/images/packaging/gift-boxes/gift-boxes-2.png",
        "/images/packaging/gift-boxes/gift-boxes-3.png",
        "/images/packaging/gift-boxes/gift-boxes-4.png",
        "/images/packaging/gift-boxes/gift-boxes-5.png",
        "/images/packaging/gift-boxes/gift-boxes-6.png",
        "/images/packaging/gift-boxes/gift-boxes-7.png",
        "/images/packaging/gift-boxes/gift-boxes-8.png",
        "/images/packaging/gift-boxes/gift-boxes-9.png",
        "/images/packaging/gift-boxes/gift-boxes-10.png",
        "/images/packaging/gift-boxes/gift-boxes-11.png",
        "/images/packaging/gift-boxes/gift-boxes-12.png"
      ]}
      specifications={[
        { name: "Box Types", description: "Rigid, Folding, Collapsible, Drawer" },
        { name: "Materials", description: "Premium board, Kraft, Eco-friendly options" },
        { name: "Size Options", description: "Small, Medium, Large, Custom sizes" },
        { name: "Finish Options", description: "Matte, Gloss, Soft-touch, Specialty finishes" },
        { name: "Special Features", description: "Ribbons, Windows, Inserts, Magnetic closures" },
        { name: "Minimum Order", description: "100 boxes" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Structure design and branding integration</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Production</div>
            <p className="text-sm text-gray-600">Printing, cutting and scoring</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Finishing</div>
            <p className="text-sm text-gray-600">Adding special finishes and embellishments</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Assembly</div>
            <p className="text-sm text-gray-600">Construction and quality check</p>
          </div>
        </div>
      }
    />
  );
};

export default GiftBoxesPage;
