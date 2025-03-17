
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const CardGamesPage = () => {
  const specifications = [
    { name: 'Card Stock', description: 'Casino quality, 300-350 GSM, Blue core, Black core' },
    { name: 'Finishing Options', description: 'Gloss, Matte, Linen finish, Plastic coating' },
    { name: 'Box Options', description: 'Tuck boxes, Two-piece boxes, Tin containers, Custom designs' },
    { name: 'Card Sizes', description: 'Poker, Bridge, Mini, Tarot, Custom sizes' },
    { name: 'Special Features', description: 'Custom shapes, Special inks, Security features' },
    { name: 'Printing', description: 'CMYK, Pantone colors, UV printing, Digital, Offset' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Custom Playing Cards",
      image: "/placeholder.svg",
      description: "High-quality playing cards with custom faces and backs."
    },
    {
      id: 2,
      name: "Educational Card Games",
      image: "/placeholder.svg",
      description: "Learning-focused card games for all ages and subjects."
    },
    {
      id: 3,
      name: "Promotional Card Games",
      image: "/placeholder.svg",
      description: "Branded card games for marketing and promotional use."
    },
    {
      id: 4,
      name: "Collectible Card Games",
      image: "/placeholder.svg",
      description: "Premium collectible cards with special finishes and effects."
    },
  ];

  return (
    <ProductDetailLayout
      title="Card Games"
      description="We produce high-quality custom card games with premium materials and exceptional printing. From standard playing cards to specialized game decks, our cards feature superior cardstock, precise cutting, and a variety of coating options to ensure excellent handling and durability for casual play or professional gaming."
      images={[
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default CardGamesPage;
