
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';
import { products } from '@/components/products/productData';

const NotebooksPage = () => {
  const featuredProducts = products.filter(product => 
    ['Journals', 'Planners', 'Books'].includes(product.name)
  );

  return (
    <ProductDetailLayout
      title="Notebooks"
      description="Our premium notebooks combine functionality with stylish design. Available in various sizes, paper types, and binding options, these notebooks feature customizable covers, high-quality paper, and durable construction - perfect for personal use, corporate gifts, or retail."
      images={["/placeholder.svg", "/lovable-uploads/e3399284-14ec-4e5a-9139-92cd61ed0d70.png"]}
      specifications={[
        { name: "Size Options", description: "A4, A5, A6, B5, Custom sizes" },
        { name: "Paper Types", description: "Ruled, Plain, Dotted, Grid, Mixed" },
        { name: "Paper Weight", description: "70gsm, 80gsm, 90gsm, 100gsm options" },
        { name: "Binding Types", description: "Perfect bound, Wire-o, Thread sewn, Spiral" },
        { name: "Cover Options", description: "Hardcover, Softcover, PU leather, Fabric" },
        { name: "Minimum Order", description: "50 notebooks" },
      ]}
      featuredProducts={featuredProducts}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Cover design and interior layout</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">Printing covers and interior pages</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Assembly</div>
            <p className="text-sm text-gray-600">Collating and preparing for binding</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Binding</div>
            <p className="text-sm text-gray-600">Binding and finishing the notebook</p>
          </div>
        </div>
      }
    />
  );
};

export default NotebooksPage;
