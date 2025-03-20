
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GiftBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Gift Boxes"
      description="Our gift boxes combine stunning presentation with practical design. Available in various shapes, sizes, and finishes, our custom gift boxes help your products or gifts make a memorable impression with elegant branding and premium materials."
      images={["/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png", "/lovable-uploads/ec48376c-2d1f-499d-a57d-da6f1b634ac2.png"]}
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
