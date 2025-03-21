import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const BooksPage = () => {
  return (
    <ProductDetailLayout
      title="Books"
      description="Our custom book printing services deliver professional quality for all types of books, from novels to children's books. We offer various binding options and paper types to bring your story to life with vibrant colors and crisp text."
      images={[
        "/lovable-uploads/1f68b178-a318-4525-ab8d-a1b460ddcc01.png", 
        "/lovable-uploads/70b06e06-ad0e-42d6-a027-62479529c8a8.png",
        "/lovable-uploads/1c1a35fa-b827-4969-97f4-afe383b1d024.png",
        "/lovable-uploads/41987e09-f4e5-40ab-bfa6-09c00864b182.png",
        "/lovable-uploads/d64c2332-2c2d-4d1d-86b1-39fbad88fed7.png",
        "/lovable-uploads/ed4945d5-4393-4cc8-b95a-cd368af35ec4.png",
        "/lovable-uploads/449bf80a-fa42-4547-803a-4800ebb3a5b0.png"
      ]}
      specifications={[
        { name: "Size Options", description: "Standard book sizes, Custom sizes available" },
        { name: "Paper Types", description: "Book wove, Cream, Premium white, Recycled" },
        { name: "Binding Options", description: "Perfect bound, Case bound, Saddle-stitched" },
        { name: "Cover Options", description: "Paperback, Hardcover with dust jacket" },
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
