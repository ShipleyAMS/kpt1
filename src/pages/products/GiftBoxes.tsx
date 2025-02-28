
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const GiftBoxesPage = () => {
  const specifications = [
    { name: 'Box Types', description: 'Rigid boxes, Folding cartons, Collapsible boxes, Drawer boxes, Magnetic closure boxes, Book-style boxes' },
    { name: 'Materials', description: 'Gray board, SBS board, Kraft paper, Art paper, Specialty papers, Fabric-covered options' },
    { name: 'Finishing Options', description: 'Foil stamping, Embossing/Debossing, Spot UV, Gloss/matte lamination, Soft-touch coating' },
    { name: 'Size Range', description: 'Custom sizes for all products, From small jewelry boxes to large presentation boxes' },
    { name: 'Insert Options', description: 'EVA foam, Velvet trays, Satin lining, Magnetic closures, Ribbon pulls' },
    { name: 'Window Options', description: 'PVC windows, Die-cut windows, Custom shapes, Clear sleeves for product visibility' },
    { name: 'Special Features', description: 'Magnetic closures, Ribbon closures, Hidden compartments, Specialty hinges' },
    { name: 'Printing', description: 'Full-color CMYK, PMS color matching, Special effect inks, Interior printing options' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Luxury Gift Box",
      image: "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
      description: "Premium rigid gift boxes with custom interior fittings."
    },
    {
      id: 2,
      name: "Corporate Gift Packaging",
      image: "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
      description: "Branded gift boxes perfect for corporate gifting and events."
    },
    {
      id: 3,
      name: "Holiday Gift Boxes",
      image: "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
      description: "Seasonal packaging with festive designs and premium finishes."
    },
    {
      id: 4,
      name: "Custom Retail Packaging",
      image: "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
      description: "Bespoke gift boxes for retail products and special occasions."
    },
  ];

  return (
    <ProductDetailLayout
      title="Gift Boxes"
      description="Our custom gift boxes elevate the gifting experience with premium materials and exquisite finishes. From luxury retail packaging to corporate gift boxes, we create packaging solutions that make a lasting impression. Our gift boxes combine aesthetic appeal with sturdy construction to showcase and protect the contents while adding value to the gifting experience."
      images={[
        "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default GiftBoxesPage;
