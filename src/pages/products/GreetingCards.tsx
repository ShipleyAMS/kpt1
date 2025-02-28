
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GreetingCardsPage = () => {
  const specifications = [
    { name: 'Card Types', description: 'Folded cards, Flat cards, Pop-up cards, Gatefold, Die-cut shapes, Multi-panel cards' },
    { name: 'Paper Options', description: 'Art paper (250-350 gsm), Textured paper, Recycled options, Specialty papers' },
    { name: 'Size Options', description: 'Standard A6/A5/A4, Square formats, Custom sizes, Mini cards, Panoramic' },
    { name: 'Finishing Options', description: 'Foil stamping, Embossing/Debossing, Spot UV, Glitter, Die-cutting, Laser cutting' },
    { name: 'Special Features', description: 'Sound modules, LED elements, Pop-up mechanisms, Pull tabs, Removable elements' },
    { name: 'Envelope Options', description: 'Matching envelopes, Custom sizes, Lined envelopes, Window envelopes, Specialty closures' },
    { name: 'Printing', description: 'Full-color CMYK, PMS color matching, Metallic inks, Special effect printing' },
    { name: 'Customization', description: 'Custom messaging, Personalized printing, Variable data, Blank interiors for handwriting' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Luxury Greeting Cards",
      image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      description: "Premium cards with foil stamping and embossing details."
    },
    {
      id: 2,
      name: "Pop-up Greeting Cards",
      image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      description: "Interactive 3D pop-up cards for special occasions."
    },
    {
      id: 3,
      name: "Corporate Holiday Cards",
      image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      description: "Customized greeting cards for business and corporate use."
    },
    {
      id: 4,
      name: "Die-Cut Specialty Cards",
      image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      description: "Unique shaped cards with custom die-cutting and special finishes."
    },
  ];

  return (
    <ProductDetailLayout
      title="Greeting Cards"
      description="Our greeting cards combine creativity with quality craftsmanship to create memorable communication pieces. From traditional folded cards to innovative pop-up and interactive designs, we offer comprehensive printing and finishing options for greeting card publishers and retailers. Our cards feature premium paper stocks, vibrant color reproduction, and specialty finishes to create products that recipients will treasure."
      images={[
        "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default GreetingCardsPage;
