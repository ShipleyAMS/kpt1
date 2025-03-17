
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const JigsawsPage = () => {
  const specifications = [
    { name: 'Material', description: 'Premium cardboard, Wood, Custom materials' },
    { name: 'Piece Count', description: '100, 500, 1000, 1500, 2000, Custom piece counts' },
    { name: 'Piece Shapes', description: 'Standard, Custom shapes, Special designs' },
    { name: 'Printing', description: 'High-resolution CMYK, Special inks, UV printing' },
    { name: 'Packaging', description: 'Boxes, Tubes, Custom containers, Retail packaging' },
    { name: 'Special Features', description: 'Magnetic options, Glow-in-the-dark, 3D effects' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Custom Photo Jigsaws",
      image: "/placeholder.svg",
      description: "Personalized puzzles created from your photos or artwork."
    },
    {
      id: 2,
      name: "Promotional Jigsaws",
      image: "/placeholder.svg",
      description: "Marketing puzzles with company logos and promotional designs."
    },
    {
      id: 3,
      name: "Educational Jigsaws",
      image: "/placeholder.svg",
      description: "Learning-focused puzzles for children and educational use."
    },
    {
      id: 4,
      name: "Premium Wooden Jigsaws",
      image: "/placeholder.svg",
      description: "High-end wooden puzzles with special cuts and elegant designs."
    },
  ];

  return (
    <ProductDetailLayout
      title="Jigsaws"
      description="Our custom jigsaw puzzles combine precision cutting with vibrant, high-resolution printing to create engaging puzzles for all ages. Available in various piece counts, sizes, and materials, our puzzles can feature your artwork, photography, or custom designs for promotional, educational, or personal use."
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

export default JigsawsPage;
