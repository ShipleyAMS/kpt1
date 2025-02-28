
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const JeweleryBoxesPage = () => {
  const specifications = [
    { name: 'Box Types', description: 'Ring boxes, Necklace boxes, Bracelet boxes, Earring boxes, Watch boxes, Collection/Set boxes' },
    { name: 'Materials', description: 'Rigid board, Velvet-covered, Leather/PU leather, Wood, Premium paper, Specialty materials' },
    { name: 'Interior Lining', description: 'Velvet, Satin, Suede, Foam inserts, Custom molded inserts, Padding options' },
    { name: 'Size Range', description: 'Small ring boxes to large collection boxes, Custom sizes for specific jewelry pieces' },
    { name: 'Closure Types', description: 'Magnetic, Snap button, Ribbon tie, Hinged, Lift-off lid, Drawer style' },
    { name: 'Finishing Options', description: 'Foil stamping, Embossing/Debossing, Specialty coatings, Fabric wrapping' },
    { name: 'Special Features', description: 'Multi-tier designs, Removable trays, Mirror inserts, Specialty compartments' },
    { name: 'Customization', description: 'Logo imprinting, Custom shapes, Brand colors, Specialty hardware and accents' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Luxury Ring Box",
      image: "/lovable-uploads/212a47c2-8686-42ba-aa2e-94eea5da96bc.png",
      description: "Premium velvet-lined ring boxes for engagement and wedding rings."
    },
    {
      id: 2,
      name: "Jewelry Collection Box",
      image: "/lovable-uploads/b9086efc-629a-47ed-8b95-068140735132.png",
      description: "Multi-compartment boxes for complete jewelry collections and sets."
    },
    {
      id: 3,
      name: "Watch Presentation Box",
      image: "/lovable-uploads/212a47c2-8686-42ba-aa2e-94eea5da96bc.png",
      description: "Custom designed boxes for luxury timepieces with padded inserts."
    },
    {
      id: 4,
      name: "Branded Jewelry Packaging",
      image: "/lovable-uploads/b9086efc-629a-47ed-8b95-068140735132.png",
      description: "Custom branded jewelry boxes for retailers and jewelry designers."
    },
  ];

  return (
    <ProductDetailLayout
      title="Jewelery Boxes"
      description="Our jewelry boxes combine elegance with functionality, designed to showcase and protect valuable pieces. From small ring boxes to multi-tier collection cases, we create custom jewelry packaging that enhances the presentation experience. With premium materials, luxurious linings, and meticulous craftsmanship, our jewelry boxes add value and sophistication to any jewelry item."
      images={[
        "/lovable-uploads/212a47c2-8686-42ba-aa2e-94eea5da96bc.png",
        "/lovable-uploads/b9086efc-629a-47ed-8b95-068140735132.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default JeweleryBoxesPage;
