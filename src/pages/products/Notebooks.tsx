
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const NotebooksPage = () => {
  const specifications = [
    { name: 'Binding Options', description: 'Spiral, Perfect binding, Saddle-stitched, Hardcover' },
    { name: 'Cover Options', description: 'Leather, PU, Fabric, Cardstock, Recycled materials' },
    { name: 'Paper Options', description: 'Ruled, Plain, Dotted, Graph, Various GSM weights' },
    { name: 'Size Options', description: 'A4, A5, A6, B5, Custom sizes' },
    { name: 'Special Features', description: 'Bookmarks, Elastic closures, Pen loops, Pocket folders' },
    { name: 'Customization', description: 'Foil stamping, Embossing, Edge coloring, Custom pages' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Leather Notebooks",
      image: "/placeholder.svg",
      description: "Luxury notebooks with genuine leather covers and premium paper."
    },
    {
      id: 2,
      name: "Recycled Notebooks",
      image: "/placeholder.svg",
      description: "Eco-friendly notebooks made with recycled materials."
    },
    {
      id: 3,
      name: "Spiral Notebooks",
      image: "/placeholder.svg",
      description: "Durable spiral-bound notebooks with various page options."
    },
    {
      id: 4,
      name: "Custom Corporate Notebooks",
      image: "/placeholder.svg",
      description: "Branded notebooks with custom logos and corporate designs."
    },
  ];

  return (
    <ProductDetailLayout
      title="Notebooks"
      description="Our premium notebooks combine functionality and style with high-quality papers and binding options. Perfect for everyday use, journaling, or corporate gifts, our notebooks can be customized with various cover materials, paper types, and special features to meet your specific requirements."
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

export default NotebooksPage;
