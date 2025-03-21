
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GreetingCardsPage = () => {
  return (
    <ProductDetailLayout
      title="Greeting Cards"
      description="Our greeting cards are printed on premium card stock with vibrant colors and crisp details. Whether for personal use or corporate gifting, we offer various sizes, finishes, and customization options to create the perfect card for any occasion."
      images={["/lovable-uploads/7d99bcd5-099a-42f0-8760-70f056733a9d.png", "/lovable-uploads/5711bd98-36d2-4420-80b8-76d8febe0aec.png"]}
      specifications={[
        { name: "Size Options", description: "A6, A5, Square, Custom sizes" },
        { name: "Paper Types", description: "Premium card stock, Textured, Recycled" },
        { name: "Fold Options", description: "Single fold, Tri-fold, Pop-up" },
        { name: "Finish Options", description: "Gloss, Matte, Spot UV, Foil stamping" },
        { name: "Envelopes", description: "Included with matching or contrasting options" },
        { name: "Minimum Order", description: "25 cards" },
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
