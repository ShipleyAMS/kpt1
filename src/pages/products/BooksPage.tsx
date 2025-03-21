
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const BooksPage = () => {
  return (
    <ProductDetailLayout
      title="Books"
      description="Our custom book printing services deliver professional quality for all types of books, from novels to children's books. We offer various binding options and paper types to bring your story to life with vibrant colors and crisp text."
      images={[
        "/lovable-uploads/31bacdc3-7a65-46fa-9cfa-1ffcc2d85fd4.png", 
        "/lovable-uploads/fc2070f3-6ed1-4aae-83e2-d4929faa9892.png",
        "/lovable-uploads/802085c6-c3eb-4b37-b9cd-aa7fa45e7573.png",
        "/lovable-uploads/2b8953e5-bb56-4954-98c9-f1f5f4beca50.png",
        "/lovable-uploads/cbb377f4-36f8-4174-897d-9348c58c8e1c.png",
        "/lovable-uploads/327f0286-fc06-4f5e-8afb-fe9438c1f1c3.png",
        "/lovable-uploads/0de63f49-ec42-433e-889c-842579a6a99b.png",
        "/lovable-uploads/17307e7f-027e-4a8a-a523-4a58520ca55d.png",
        "/lovable-uploads/6489355c-e448-4a78-a2a0-2ffca929ef9a.png"
      ]}
      specifications={[
        { name: "Size Options", description: "Standard book sizes, Custom sizes available" },
        { name: "Paper Types", description: "Book wove, Cream, Premium white, Recycled" },
        { name: "Binding Options", description: "Perfect bound, Case bound, Saddle-stitched" },
        { name: "Cover Options", description: "Paperback, Hardcover with dust jacket" },
        { name: "Minimum Order", description: "25 copies" },
        { name: "Special Features", description: "Embossing, Foil stamping, Special endpapers" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Layout</div>
            <p className="text-sm text-gray-600">Professional book layout and formatting</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-quality printing of book pages</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Cover</div>
            <p className="text-sm text-gray-600">Cover printing and finishing</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Binding</div>
            <p className="text-sm text-gray-600">Professional binding to your specifications</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">5. Finishing</div>
            <p className="text-sm text-gray-600">Final quality check and packaging</p>
          </div>
        </div>
      }
    />
  );
};

export default BooksPage;
