
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';
import { products } from '@/components/products/productData';

const JournalsPage = () => {
  const featuredProducts = products.filter(product => 
    ['Notebooks', 'Planners', 'Books'].includes(product.name)
  );

  return (
    <ProductDetailLayout
      title="Journals"
      description="Our premium journals offer the perfect blend of style and practicality. Featuring high-quality paper, elegant covers, and durable binding, these journals are ideal for writing, sketching, or journaling. Available with various page designs and customization options for personal or corporate use."
      images={["/lovable-uploads/0b092d75-12e1-469a-8aee-6e42bf1cdb30.png", "/lovable-uploads/e3399284-14ec-4e5a-9139-92cd61ed0d70.png"]}
      specifications={[
        { name: "Size Options", description: "A5, B5, A4, Custom sizes available" },
        { name: "Paper Types", description: "Plain, Ruled, Dotted, Mixed layouts" },
        { name: "Paper Quality", description: "Premium 100gsm, Fountain pen friendly" },
        { name: "Cover Options", description: "Hardcover, Leather, Fabric, PU leather" },
        { name: "Binding Types", description: "Thread sewn, Smyth sewn, Perfect bound" },
        { name: "Special Features", description: "Ribbon markers, Pocket, Elastic closure" },
      ]}
      featuredProducts={featuredProducts}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Cover and interior page design</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Paper Selection</div>
            <p className="text-sm text-gray-600">Selecting premium paper for interior</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Printing</div>
            <p className="text-sm text-gray-600">Printing covers and interior pages</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Binding</div>
            <p className="text-sm text-gray-600">Sewing and binding signatures</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">5. Finishing</div>
            <p className="text-sm text-gray-600">Adding ribbon markers, elastic closures</p>
          </div>
        </div>
      }
    />
  );
};

export default JournalsPage;
