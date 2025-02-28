
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GameCardsPage = () => {
  const specifications = [
    { name: 'Card Stock', description: 'Blue core, Black core, Ivory core, 270-350 gsm, Linen finish, Plastic coated, PVC options' },
    { name: 'Card Sizes', description: 'Standard poker (2.5" x 3.5"), Bridge size, Tarot size, Mini cards, Custom dimensions' },
    { name: 'Finishing Options', description: 'Linen texture, Smooth finish, Gloss/matte lamination, Specialty coatings for shuffling' },
    { name: 'Printing Quality', description: 'High-resolution color printing, Custom back designs, Edge-to-edge printing, Metallic inks' },
    { name: 'Special Features', description: 'Foil stamping, Embossing, Spot UV, Custom colors, Special effects printing' },
    { name: 'Packaging Options', description: 'Tuck boxes, Tin boxes, Plastic cases, Magnetic closure boxes, Shrink wrapping' },
    { name: 'Game Card Types', description: 'Trading cards, Collectible cards, Educational cards, Playing cards, Tarot/Oracle decks' },
    { name: 'Additional Services', description: 'Rules booklets, Game boards, Custom dice, Game pieces, Complete game production' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Playing Cards",
      image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      description: "High-quality playing cards with custom designs and premium finish."
    },
    {
      id: 2,
      name: "Educational Card Games",
      image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      description: "Durable cards designed for learning and educational purposes."
    },
    {
      id: 3,
      name: "Collectible Trading Cards",
      image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      description: "Premium collectible cards with special finishes and effects."
    },
    {
      id: 4,
      name: "Custom Game Cards",
      image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      description: "Bespoke card designs for custom games and promotional purposes."
    },
  ];

  return (
    <ProductDetailLayout
      title="Game Cards"
      description="King Tai produces premium quality game cards for card games, trading card games, educational games, and more. Our game cards feature superior cardstock, precise cutting, and durable finishes that ensure excellent shuffling, dealing, and long-term use. From standard playing cards to custom game decks, we offer comprehensive options for game creators and publishers."
      images={[
        "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default GameCardsPage;
