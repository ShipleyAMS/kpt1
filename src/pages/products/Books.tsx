
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const BooksPage = () => {
  const specifications = [
    { name: 'Binding Options', description: 'Hardcover, Softcover, Saddle-stitched, Perfect binding, Case binding, Thread-sewn, Board books' },
    { name: 'Cover Finishes', description: 'Matte, Gloss, Spot UV, Foil stamping, Embossing/Debossing, Cloth-wrapped, Dust jackets' },
    { name: 'Paper Options', description: 'Coated (gloss/matte/silk), Uncoated, FSC-certified, Recycled, Art paper for color illustrations' },
    { name: 'Size Options', description: 'Standard sizes from 5"x8" to 8.5"x11", Custom sizes available, Square formats for children\'s books' },
    { name: 'Special Features', description: 'Full-color illustrations, Die-cut pages, Pop-up elements, Fold-out pages, Interactive components' },
    { name: 'Page Count', description: 'From 8 pages (children\'s books) to 1,000+ pages (novels, textbooks), Flexible options based on content' },
    { name: 'Printing', description: 'Digital and offset printing, Four-color process, Specialty inks, High-resolution image reproduction' },
    { name: 'Additional Options', description: 'Bookmark ribbons, Gilded edges, Head/tail bands, Decorative endpapers, Rounded corners' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Children's Illustrated Books",
      image: "/lovable-uploads/2c5121b9-367d-4f3e-bf45-baa3b5d2e468.png",
      description: "Vibrant, durable books designed specifically for young readers."
    },
    {
      id: 2,
      name: "Educational Textbooks",
      image: "/lovable-uploads/7dd0ed77-bef4-4667-88b1-5f8a749589f2.png",
      description: "High-quality textbooks with clear layouts and durable binding."
    },
    {
      id: 3,
      name: "Premium Fiction Novels",
      image: "/lovable-uploads/21ca72e2-10fc-44d4-a243-59afa6495104.png",
      description: "Elegantly designed fiction books with premium paper and binding."
    },
    {
      id: 4,
      name: "Limited Edition Collections",
      image: "/lovable-uploads/b98f5f4b-72df-44dc-af9a-311dbd32d7b9.png",
      description: "Special edition books with luxury finishes and presentation boxes."
    },
  ];

  return (
    <ProductDetailLayout
      title="Books"
      description="King Tai produces exceptional quality books for publishers worldwide. Our book manufacturing capabilities cover everything from children's board books to premium hardcover novels and educational textbooks. We offer comprehensive options including various binding styles, cover finishes, paper types, and specialty printing techniques to ensure your books stand out in the marketplace."
      images={[
        "/lovable-uploads/2c5121b9-367d-4f3e-bf45-baa3b5d2e468.png",
        "/lovable-uploads/7dd0ed77-bef4-4667-88b1-5f8a749589f2.png",
        "/lovable-uploads/21ca72e2-10fc-44d4-a243-59afa6495104.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default BooksPage;
