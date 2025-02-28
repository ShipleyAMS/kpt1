
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const JournalsPage = () => {
  const specifications = [
    { name: 'Binding Options', description: 'Hardcover, Softcover, Spiral bound, Wire-O, Stitched, PU leather, Genuine leather' },
    { name: 'Paper Options', description: 'Uncoated paper (70-120 gsm), Cream/white options, Lined, Dot grid, Plain, Ruled' },
    { name: 'Size Options', description: 'A5, A6, B5, Pocket size, Custom sizes, Square format, Executive' },
    { name: 'Cover Finishes', description: 'Debossing, Foil stamping, Spot UV, Screen printing, Fabric covering, Leather wrapping' },
    { name: 'Special Features', description: 'Ribbon markers, Elastic closures, Pen loops, Pockets, Perforated pages' },
    { name: 'Edge Treatments', description: 'Gilded edges, Colored edges, Rounded corners, Index tabs, Thumb cuts' },
    { name: 'Customization', description: 'Personal monograms, Company logos, Custom endpapers, Branded elements' },
    { name: 'Page Count', description: 'From 80 to 240 pages, Custom page counts available, Section dividers' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Executive Journal",
      image: "/lovable-uploads/0b092d75-12e1-469a-8aee-6e42bf1cdb30.png",
      description: "Premium leather-bound journals for professional use."
    },
    {
      id: 2,
      name: "Bullet Journal",
      image: "/lovable-uploads/0b092d75-12e1-469a-8aee-6e42bf1cdb30.png",
      description: "Specially designed journals with dot grid pages for planning."
    },
    {
      id: 3,
      name: "Travel Journal",
      image: "/lovable-uploads/0b092d75-12e1-469a-8aee-6e42bf1cdb30.png",
      description: "Durable journals with pockets and features for travelers."
    },
    {
      id: 4,
      name: "Custom Corporate Journals",
      image: "/lovable-uploads/0b092d75-12e1-469a-8aee-6e42bf1cdb30.png",
      description: "Branded journals for corporate gifts and promotional purposes."
    },
  ];

  return (
    <ProductDetailLayout
      title="Journals"
      description="Our journal collection combines functionality with elegant design for writing, planning, and creative expression. From executive notebooks to specialized bullet journals, we offer a variety of binding styles, paper options, and customization features. Each journal is crafted with attention to detail, ensuring durability and a premium writing experience for personal use or corporate gifting."
      images={[
        "/lovable-uploads/0b092d75-12e1-469a-8aee-6e42bf1cdb30.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default JournalsPage;
