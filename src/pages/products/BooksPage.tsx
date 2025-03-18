
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';
import { products } from '@/components/products/productData';

const BooksPage = () => {
  const featuredProducts = products.filter(product => 
    ['Bibles', 'Journals', 'Planners'].includes(product.name)
  );

  return (
    <ProductDetailLayout
      title="Books"
      description="Our custom book printing services deliver professional quality for all types of books, from novels to children's books. We offer various binding options and paper types to bring your story to life with vibrant colors and crisp text."
      images={["/lovable-uploads/7dd0ed77-bef4-4667-88b1-5f8a749589f2.png", "/lovable-uploads/5711bd98-36d2-4420-80b8-76d8febe0aec.png"]}
      specifications={[
        { name: "Size Options", description: "Standard book sizes, Custom sizes available" },
        { name: "Paper Types", description: "Book wove, Cream, Premium white, Recycled" },
        { name: "Binding Options", description: "Perfect bound, Case bound, Saddle-stitched" },
        { name: "Cover Options", description: "Paperback, Hardcover with dust jacket" },
        { name: "Minimum Order", description: "25 copies" },
        { name: "Special Features", description: "Embossing, Foil stamping, Special endpapers" },
      ]}
      featuredProducts={featuredProducts}
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
