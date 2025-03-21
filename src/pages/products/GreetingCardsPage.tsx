import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GreetingCardsPage = () => {
  return (
    <ProductDetailLayout
      title="Greeting Cards"
      description="Our greeting cards are printed on premium card stock with vibrant colors and crisp details. Whether for personal use or corporate gifting, we offer various sizes, finishes, and customization options to create the perfect card for any occasion."
      images={[
        "/lovable-uploads/048818fd-ebcb-4883-8ee0-cfc0e2f2ff6f.png", 
        "/lovable-uploads/8e99c50e-0c6f-4806-a017-8eddc80370ad.png",
        "/lovable-uploads/fd28b227-57e8-4da6-9791-1000ad3f3dc4.png",
        "/lovable-uploads/38459308-6ad6-4d8a-9f5f-0202655966b0.png",
        "/lovable-uploads/c332a942-b164-4f67-9781-ddcd64f90038.png",
        "/lovable-uploads/ed75f642-3c65-494f-8ace-5700b74066b7.png"
      ]}
      specifications={[
        { name: "Size Options", description: "A6, A5, Square, Custom sizes" },
        { name: "Paper Types", description: "Premium card stock, Textured, Recycled" },
        { name: "Fold Options", description: "Single fold, Tri-fold, Pop-up" },
        { name: "Finish Options", description: "Gloss, Matte, Spot UV, Foil stamping" },
        { name: "Envelopes", description: "Included with matching or contrasting options" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Card design and layout finalization</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">Premium printing on selected card stock</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Finish</div>
            <p className="text-sm text-gray-600">Adding special finishes like foil or spot UV</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Folding</div>
            <p className="text-sm text-gray-600">Precision folding and matching with envelopes</p>
          </div>
        </div>
      }
    />
  );
};

export default GreetingCardsPage;
