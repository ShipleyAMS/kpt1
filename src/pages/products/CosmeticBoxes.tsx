
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const CosmeticBoxesPage = () => {
  const specifications = [
    { name: 'Box Types', description: 'Folding cartons, Rigid boxes, Drawer boxes, Sleeve boxes, Tube packaging, Magnetic closure boxes' },
    { name: 'Materials', description: 'SBS board, Kraft paper, Art paper, Specialty papers, Eco-friendly options, Recycled materials' },
    { name: 'Finishing Options', description: 'Foil stamping, Embossing/Debossing, Spot UV, Soft-touch lamination, Matte/gloss finishes' },
    { name: 'Size Range', description: 'Custom sizes to fit specific cosmetic products, Standard sizes for lipsticks, creams, serums, etc.' },
    { name: 'Window Options', description: 'PVC windows, Die-cut windows, Custom shapes, Transparent sleeves, Product visibility options' },
    { name: 'Insert Options', description: 'EVA foam inserts, Velvet trays, Plastic trays, Custom molded inserts, Product holders' },
    { name: 'Special Features', description: 'Magnetic closures, Ribbon pulls, Special opening mechanisms, Hidden compartments' },
    { name: 'Printing', description: 'Full-color CMYK, PMS color matching, Special effect inks, Interior printing options' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Luxury Cosmetic Box",
      image: "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
      description: "Premium rigid boxes with custom inserts for high-end cosmetics."
    },
    {
      id: 2,
      name: "Skincare Collection Box",
      image: "/lovable-uploads/b9086efc-629a-47ed-8b95-068140735132.png",
      description: "Multi-product packaging with premium finishes for skincare sets."
    },
    {
      id: 3,
      name: "Eco-Friendly Cosmetic Packaging",
      image: "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
      description: "Sustainable packaging solutions for environmentally conscious brands."
    },
    {
      id: 4,
      name: "Custom Lipstick Boxes",
      image: "/lovable-uploads/b9086efc-629a-47ed-8b95-068140735132.png",
      description: "Elegant and durable packaging for lipsticks and small cosmetics."
    },
  ];

  return (
    <ProductDetailLayout
      title="Cosmetic Boxes"
      description="Our cosmetic packaging solutions are designed to enhance product appeal and provide premium protection. We create custom cosmetic boxes that combine aesthetic elegance with practical functionality, suitable for everything from luxury skincare collections to makeup palettes. Our packaging expertise ensures your cosmetic products stand out on shelves with high-quality materials and exquisite finishes."
      images={[
        "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default CosmeticBoxesPage;
