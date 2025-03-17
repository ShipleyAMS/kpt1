
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GiftBagsPage = () => {
  const specifications = [
    { name: 'Materials', description: 'Paper (various GSM), Kraft, Recycled, Luxury papers' },
    { name: 'Size Options', description: 'Small, Medium, Large, Wine, Custom sizes' },
    { name: 'Handle Types', description: 'Rope, Ribbon, Die-cut, Twisted paper, Fabric' },
    { name: 'Finishing Options', description: 'Gloss, Matte, Spot UV, Foil stamping, Embossing' },
    { name: 'Special Features', description: 'Custom windows, Interior printing, Matching tissue' },
    { name: 'Customization', description: 'Full-color printing, Custom designs, Corporate branding' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Luxury Gift Bags",
      image: "/placeholder.svg",
      description: "Premium gift bags with high-end finishes and elegant designs."
    },
    {
      id: 2,
      name: "Eco-Friendly Gift Bags",
      image: "/placeholder.svg",
      description: "Sustainable gift bags made from recycled and biodegradable materials."
    },
    {
      id: 3,
      name: "Holiday Gift Bags",
      image: "/placeholder.svg",
      description: "Seasonal gift bags for various holidays and special occasions."
    },
    {
      id: 4,
      name: "Corporate Gift Bags",
      image: "/placeholder.svg",
      description: "Branded gift bags for corporate events and promotional purposes."
    },
  ];

  return (
    <ProductDetailLayout
      title="Gift Bags"
      description="Our custom gift bags combine style and functionality for a perfect presentation solution. Available in various sizes, materials, and designs, our gift bags can be fully customized with your branding, special finishes, and unique features to make your gifts stand out for any occasion."
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

export default GiftBagsPage;
