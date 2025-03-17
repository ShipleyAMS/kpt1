
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const CataloguesPage = () => {
  const specifications = [
    { name: 'Binding Options', description: 'Perfect binding, Saddle-stitched, Wire-o, Spiral, Case bound' },
    { name: 'Cover Options', description: 'Soft cover, Hard cover, Various finishes and materials' },
    { name: 'Paper Options', description: 'Coated (gloss/matte/silk), Uncoated, Various weights' },
    { name: 'Size Options', description: 'Standard (A4, A5), Custom sizes, Oversized' },
    { name: 'Special Features', description: 'Fold-outs, Inserts, Tabs, Special finishes' },
    { name: 'Printing', description: 'High-resolution CMYK, Pantone colors, Digital, Offset' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Product Catalogues",
      image: "/placeholder.svg",
      description: "Comprehensive product showcases with detailed specifications."
    },
    {
      id: 2,
      name: "Fashion Lookbooks",
      image: "/placeholder.svg",
      description: "Stylish collections featuring premium photography and design."
    },
    {
      id: 3,
      name: "Corporate Catalogues",
      image: "/placeholder.svg",
      description: "Professional catalogues for business-to-business marketing."
    },
    {
      id: 4,
      name: "Retail Catalogues",
      image: "/placeholder.svg",
      description: "Consumer-focused catalogues with pricing and product details."
    },
  ];

  return (
    <ProductDetailLayout
      title="Catalogues"
      description="Our professional catalogues showcase your products or services with premium printing and binding quality. Whether for retail, B2B, or promotional purposes, our catalogues feature excellent color reproduction, durable construction, and flexible size and binding options to present your offerings effectively."
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

export default CataloguesPage;
