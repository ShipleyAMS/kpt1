
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const CataloguesPage = () => {
  return (
    <ProductDetailLayout
      title="Catalogues"
      description="Our high-quality catalogues are perfect for showcasing your products and services. We offer a range of paper types, finishes, and binding options to create catalogues that make a lasting impression on your customers."
      images={["/lovable-uploads/5711bd98-36d2-4420-80b8-76d8febe0aec.png"]}
      specifications={[
        { name: "Size Options", description: "A4, A5, Custom sizes available" },
        { name: "Paper Types", description: "Gloss, Matte, Silk, Recycled" },
        { name: "Binding Options", description: "Saddle-stitched, Perfect bound, Wire-o, Spiral" },
        { name: "Finish Options", description: "Lamination (gloss/matte), Spot UV, Foiling" },
        { name: "Custom Features", description: "Die-cutting, Embossing, Custom shapes available" },
      ]}
      featuredProducts={[]}
      exampleProducts="Product Catalogues, Service Catalogues, Seasonal Catalogues, Price Lists, Fashion Catalogues"
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Professional layout and design of your catalogue content</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-quality printing on premium paper</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Finish</div>
            <p className="text-sm text-gray-600">Applying your chosen finishes like lamination or spot UV</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Binding</div>
            <p className="text-sm text-gray-600">Professional binding according to your specifications</p>
          </div>
        </div>
      }
    />
  );
};

export default CataloguesPage;
