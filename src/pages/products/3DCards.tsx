
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const ThreeDCardsPage = () => {
  const specifications = [
    { name: 'Materials', description: 'Premium cardstock, Specialty papers, Plastic elements' },
    { name: 'Techniques', description: 'Pop-up, Lenticular, Layered, Moving elements' },
    { name: 'Finishing Options', description: 'Foil stamping, Embossing, Spot UV, Die-cutting' },
    { name: 'Size Options', description: 'Standard, Square, Custom dimensions' },
    { name: 'Special Features', description: 'Sound modules, Light elements, Interactive components' },
    { name: 'Customization', description: 'Full-color printing, Custom designs, Personalization' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Pop-up Cards",
      image: "/placeholder.svg",
      description: "Intricate pop-up designs that create 3D scenes when opened."
    },
    {
      id: 2,
      name: "Lenticular Cards",
      image: "/placeholder.svg",
      description: "Cards with images that change or move when viewed from different angles."
    },
    {
      id: 3,
      name: "Interactive Cards",
      image: "/placeholder.svg",
      description: "Cards with moving elements or interactive features."
    },
    {
      id: 4,
      name: "Luxury 3D Cards",
      image: "/placeholder.svg",
      description: "Premium cards with multiple special effects and elegant designs."
    },
  ];

  return (
    <ProductDetailLayout
      title="3D Cards"
      description="Our innovative 3D cards create memorable experiences through advanced printing and construction techniques. Featuring pop-up elements, lenticular effects, or interactive components, these specialty cards add dimension and engagement for special occasions, promotions, or premium greeting cards."
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

export default ThreeDCardsPage;
