
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const ShoppingBagsPage = () => {
  const specifications = [
    { name: 'Bag Types', description: 'Paper bags, Luxury carrier bags, Gift bags, Boutique bags, Wine bags, Promotional bags' },
    { name: 'Materials', description: 'Art paper (128-250 gsm), Kraft paper, Specialty papers, Recycled options, Eco-friendly materials' },
    { name: 'Handle Options', description: 'Ribbon handles, Twisted paper handles, Die-cut handles, Rope handles, Cotton cord' },
    { name: 'Size Range', description: 'Small gift bags to large shopping bags, Custom sizes available for specific products' },
    { name: 'Finishing Options', description: 'Matte/gloss lamination, Spot UV, Foil stamping, Embossing, Special coatings' },
    { name: 'Base Options', description: 'Cardboard reinforced, Gusseted bottom, Flat bottom, Custom shapes, Extra durability' },
    { name: 'Printing', description: 'Full-color CMYK, PMS color matching, Special effect inks, Inside printing' },
    { name: 'Special Features', description: 'Magnetic closures, Window cutouts, Custom die-cutting, Specialty folds' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Luxury Retail Bags",
      image: "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png",
      description: "Premium shopping bags for high-end retail and boutiques."
    },
    {
      id: 2,
      name: "Custom Corporate Bags",
      image: "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png",
      description: "Branded shopping bags for corporate events and promotions."
    },
    {
      id: 3,
      name: "Gift Bags Collection",
      image: "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png",
      description: "Elegant gift bags for special occasions and retail packaging."
    },
    {
      id: 4,
      name: "Eco-Friendly Shopping Bags",
      image: "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png",
      description: "Sustainable shopping bags made from recycled and biodegradable materials."
    },
  ];

  return (
    <ProductDetailLayout
      title="Shopping Bags"
      description="Our custom shopping bags combine aesthetic appeal with practical functionality for retail and promotional use. From luxury boutique bags to eco-friendly options, we create shopping bags that enhance brand recognition and customer experience. Our attention to detail in materials, printing, and finishing ensures bags that are not only attractive but durable enough to represent your brand effectively."
      images={[
        "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default ShoppingBagsPage;
