
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const WineBoxesPage = () => {
  const specifications = [
    { name: 'Box Types', description: 'Single bottle boxes, Double/Triple bottle boxes, Gift sets, Presentation boxes, Wooden crates' },
    { name: 'Materials', description: 'Rigid board, Wood, MDF, Corrugated, Specialty papers, Premium finishes' },
    { name: 'Interior Options', description: 'EVA foam inserts, Flocked inserts, Custom molded trays, Protective inserts' },
    { name: 'Closure Types', description: 'Magnetic, Hinged lid, Slide lid, Ribbon tie, Clasps, Lock mechanisms' },
    { name: 'Finishing Options', description: 'Wood staining, Painting, Foil stamping, Embossing, UV printing, Laser engraving' },
    { name: 'Additional Components', description: 'Wine accessories, Promotional materials, Information cards, Certificate inserts' },
    { name: 'Size Options', description: 'Standard wine bottle sizes, Champagne sizes, Custom sizes for specialty bottles' },
    { name: 'Customization', description: 'Logo imprinting, Custom shapes, Specialty hardware, Branded elements' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Single Bottle Box",
      image: "/lovable-uploads/7d6d05ad-2a4e-49fa-b367-5206277f9e19.png",
      description: "Elegant boxes for single wine bottle presentation and gifting."
    },
    {
      id: 2,
      name: "Multi-Bottle Gift Sets",
      image: "/lovable-uploads/7d6d05ad-2a4e-49fa-b367-5206277f9e19.png",
      description: "Luxury boxes for multiple bottles and wine gift collections."
    },
    {
      id: 3,
      name: "Wooden Wine Crates",
      image: "/lovable-uploads/7d6d05ad-2a4e-49fa-b367-5206277f9e19.png",
      description: "Traditional wooden crates for premium wine presentation."
    },
    {
      id: 4,
      name: "Custom Promotional Wine Packaging",
      image: "/lovable-uploads/7d6d05ad-2a4e-49fa-b367-5206277f9e19.png",
      description: "Branded wine packaging for corporate gifts and special occasions."
    },
  ];

  return (
    <ProductDetailLayout
      title="Wine Boxes"
      description="Our wine packaging solutions combine elegance with protection for premium wine presentation. From individual bottle boxes to multi-bottle gift sets, we create custom wine packaging that enhances the gifting experience and brand value. Our wine boxes feature high-quality materials, precise construction, and luxurious finishes that complement fine wines and spirits."
      images={[
        "/lovable-uploads/7d6d05ad-2a4e-49fa-b367-5206277f9e19.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default WineBoxesPage;
