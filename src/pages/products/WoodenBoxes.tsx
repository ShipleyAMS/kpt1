
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const WoodenBoxesPage = () => {
  const specifications = [
    { name: 'Wood Types', description: 'Pine, Oak, Walnut, Bamboo, Cherry, Maple, MDF with wood veneer, Sustainable options' },
    { name: 'Box Styles', description: 'Hinged lid, Sliding lid, Lift-off lid, Compartmentalized, Custom shapes, Drawer style' },
    { name: 'Finishing Options', description: 'Natural finish, Staining, Lacquer, Painting, Oil finishing, Weathered/Distressed' },
    { name: 'Customization', description: 'Laser engraving, CNC carving, Inlays, Branded elements, Wood burning' },
    { name: 'Interior Options', description: 'Velvet lining, Foam inserts, Custom dividers, Protective padding, Custom compartments' },
    { name: 'Hardware', description: 'Metal hinges, Clasps, Locks, Handles, Decorative elements, Corner protectors' },
    { name: 'Size Range', description: 'Small gift boxes to large presentation cases, Custom dimensions' },
    { name: 'Special Features', description: 'Secret compartments, Multi-tier design, Display windows, Specialty joinery' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Luxury Gift Wooden Box",
      image: "/lovable-uploads/9821a74b-7319-4c79-bf2b-8e28872a8561.png",
      description: "Premium wooden gift boxes with custom engraving and finishing."
    },
    {
      id: 2,
      name: "Corporate Award Box",
      image: "/lovable-uploads/9821a74b-7319-4c79-bf2b-8e28872a8561.png",
      description: "Elegant wooden boxes for awards, trophies, and recognition items."
    },
    {
      id: 3,
      name: "Collector's Display Box",
      image: "/lovable-uploads/9821a74b-7319-4c79-bf2b-8e28872a8561.png",
      description: "Specialty wooden boxes for collectibles with viewing windows."
    },
    {
      id: 4,
      name: "Custom Product Packaging",
      image: "/lovable-uploads/9821a74b-7319-4c79-bf2b-8e28872a8561.png",
      description: "Bespoke wooden packaging for premium products and limited editions."
    },
  ];

  return (
    <ProductDetailLayout
      title="Wooden Boxes"
      description="Our wooden boxes combine traditional craftsmanship with modern design for premium packaging solutions. From elegant gift boxes to custom presentation cases, we create wooden packaging that conveys quality and permanence. With a variety of wood types, finishes, and customization options, our wooden boxes provide a distinctive and eco-friendly packaging choice for luxury products."
      images={[
        "/lovable-uploads/9821a74b-7319-4c79-bf2b-8e28872a8561.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default WoodenBoxesPage;
