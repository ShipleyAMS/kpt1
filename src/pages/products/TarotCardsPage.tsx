
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const TarotCardsPage = () => {
  return (
    <ProductDetailLayout
      title="Tarot Cards"
      description="Our tarot cards are crafted with attention to detail and spiritual reverence. Printed on premium cardstock with luxurious finishes, our tarot decks feature vibrant colors and crisp imagery, perfect for professional readers or personal use."
      images={[
        "/lovable-uploads/32bcdf42-a5c3-4cfa-bc1f-9182b3bfc322.png",
        "/lovable-uploads/5b538952-58df-486f-9e58-9b5fc27a5746.png",
        "/lovable-uploads/fff180c8-c4b8-4bde-8173-5171af770698.png",
        "/lovable-uploads/121911f7-0061-47cb-b810-54e92ebbe734.png"
      ]}
      specifications={[
        { name: "Card Size", description: "Standard tarot size, Custom sizes available" },
        { name: "Card Stock", description: "350gsm premium stock with linen texture" },
        { name: "Finish Options", description: "Gold edges, Holographic, Matte, Gloss" },
        { name: "Packaging", description: "Custom boxes, Pouches, Wooden boxes available" },
        { name: "Special Features", description: "Gold foil stamping, Embossing" },
        { name: "Deck Size", description: "78-card standard, Custom deck sizes available" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Artwork</div>
            <p className="text-sm text-gray-600">Finalizing card artwork and design</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-resolution printing on premium cardstock</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Finish</div>
            <p className="text-sm text-gray-600">Applying special finishes like gold edges</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Cut</div>
            <p className="text-sm text-gray-600">Precision cutting with rounded corners</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">5. Package</div>
            <p className="text-sm text-gray-600">Creating custom packaging for the deck</p>
          </div>
        </div>
      }
    />
  );
};

export default TarotCardsPage;
