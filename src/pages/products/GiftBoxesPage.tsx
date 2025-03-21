import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GiftBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Product Packaging"
      description="Our product packaging solutions combine stunning presentation with practical design. Available in various shapes, sizes, and finishes, our custom packaging helps your products make a memorable impression with elegant branding and premium materials."
      images={[
        "/lovable-uploads/4a00c030-1150-4412-9bd5-501f1c8882a8.png",
        "/lovable-uploads/ff876c3b-2746-4cb2-bbe6-267574224e75.png",
        "/lovable-uploads/b3cb8ec0-5a50-4fee-9a3f-d07e748816fd.png",
        "/lovable-uploads/85816358-8041-4c7f-8d1b-73dcd1c99ec8.png",
        "/lovable-uploads/a2f9a901-8c41-4fff-9d6f-396153482e6f.png",
        "/lovable-uploads/9dcecdb1-d407-4f8f-9e57-552f6e71ef37.png",
        "/lovable-uploads/b57ddaca-0c3a-4a9e-adfe-dd590fc922f0.png",
        "/lovable-uploads/962d52e6-916c-466d-b4cc-7fa8bcfb56fe.png",
        "/lovable-uploads/f3741b71-0acd-4eb0-b39b-e276234ebc29.png",
        "/lovable-uploads/d2cda713-46cc-44ed-a70c-4dc80e156520.png",
        "/lovable-uploads/1b32afc0-97dd-4168-b8ac-7fa192106eda.png",
        "/lovable-uploads/d495eaf7-820c-4641-845c-eee9e77c7515.png",
        "/lovable-uploads/61946b8e-97bc-4625-88a9-ccdede4044d9.png"
      ]}
      specifications={[
        { name: "Box Types", description: "Rigid, Folding, Collapsible, Drawer" },
        { name: "Materials", description: "Premium board, Kraft, Eco-friendly options" },
        { name: "Size Options", description: "Small, Medium, Large, Custom sizes" },
        { name: "Finish Options", description: "Matte, Gloss, Soft-touch, Specialty finishes" },
        { name: "Special Features", description: "Ribbons, Windows, Inserts, Magnetic closures" },
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
