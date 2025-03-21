
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GameCardsPage = () => {
  return (
    <ProductDetailLayout
      title="Game Cards"
      description="Our game cards are professionally printed on durable cardstock with premium finishes for long-lasting play. Perfect for card games, educational flashcards, or promotional playing cards, we offer various sizes and packaging options."
      images={[
        "/lovable-uploads/0d846d1b-bb50-46e6-b470-34d6a2e11ae0.png", 
        "/lovable-uploads/8e5084e7-4201-4b07-8b4f-abcf5043b815.png",
        "/lovable-uploads/44d4fb0e-97f2-4901-8ecc-3731fca0ab68.png",
        "/lovable-uploads/1a1f9fc7-68bc-419b-9071-2b348229e15e.png"
      ]}
      specifications={[
        { name: "Card Sizes", description: "Poker, Bridge, Custom sizes available" },
        { name: "Card Stock", description: "300gsm, 350gsm, Casino-grade" },
        { name: "Finish Options", description: "Linen texture, Smooth, Plastic coated" },
        { name: "Packaging", description: "Tuck boxes, Plastic cases, Tins" },
        { name: "Special Features", description: "Custom shapes, Rounded corners, Edge coloring" },
      ]}
      featuredProducts={[]}
      exampleProducts="Family Game Cards, Study Cards, Learning Cards"
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Card layout and design finalization</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-resolution printing on premium cardstock</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Finish</div>
            <p className="text-sm text-gray-600">Applying selected finishes and coatings</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Packaging</div>
            <p className="text-sm text-gray-600">Cutting, collating and packaging the cards</p>
          </div>
        </div>
      }
    />
  );
};

export default GameCardsPage;
