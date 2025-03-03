
import { Product, Category } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Bible",
    image: "/lovable-uploads/b98f5f4b-72df-44dc-af9a-311dbd32d7b9.png",
    description: "High-quality Bibles with premium printing and binding.",
    link: "/products/bibles"
  },
  {
    id: 2,
    name: "Children's Books",
    image: "/lovable-uploads/7dd0ed77-bef4-4667-88b1-5f8a749589f2.png",
    description: "Colorful and engaging children's books with vibrant illustrations.",
    link: "/products/books"
  },
  {
    id: 3,
    name: "Calendar",
    image: "/lovable-uploads/513a1818-3b90-4839-979b-a7279d2b013e.png",
    description: "Custom calendars with beautiful designs and durable construction.",
    link: "/products/calendars"
  },
  {
    id: 4,
    name: "Make-up Box",
    image: "/lovable-uploads/212a47c2-8686-42ba-aa2e-94eea5da96bc.png",
    description: "Elegant jewelry boxes with premium finishes and lining.",
    link: "/products/jewelery-boxes"
  },
  {
    id: 5,
    name: "Game Cards",
    image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
    description: "High-quality game cards with vibrant colors and durable coating.",
    link: "/products/game-cards"
  },
  {
    id: 6,
    name: "Gift Box",
    image: "/lovable-uploads/9ac49b3f-55f6-4fd1-a2f8-de698f05988c.png",
    description: "Custom gift boxes with precise die-cutting and premium finishes.",
    link: "/products/gift-boxes"
  },
  {
    id: 7,
    name: "Greeting Cards",
    image: "/lovable-uploads/7d99bcd5-099a-42f0-8760-70f056733a9d.png",
    description: "Premium greeting cards with custom designs and special finishes.",
    link: "/products/greeting-cards"
  },
  {
    id: 8,
    name: "Jewelry Box",
    image: "/lovable-uploads/b9086efc-629a-47ed-8b95-068140735132.png",
    description: "Customized jewelry boxes with bespoke designs and premium materials.",
    link: "/products/jewelery-boxes"
  },
  {
    id: 9,
    name: "Journal",
    image: "/lovable-uploads/0b092d75-12e1-469a-8aee-6e42bf1cdb30.png",
    description: "Premium notebooks with various cover options and high-quality paper.",
    link: "/products/journals"
  },
  {
    id: 10,
    name: "Shopping Bag",
    image: "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png",
    description: "Durable and stylish shopping bags with custom designs.",
    link: "/products/shopping-bags"
  },
  {
    id: 11,
    name: "Wine Box",
    image: "/lovable-uploads/7d6d05ad-2a4e-49fa-b367-5206277f9e19.png",
    description: "Elegant wine boxes with premium finishes and secure closures.",
    link: "/products/wine-boxes"
  },
  {
    id: 12,
    name: "Wooden Box",
    image: "/lovable-uploads/9821a74b-7319-4c79-bf2b-8e28872a8561.png",
    description: "Luxurious wooden boxes with custom engraving and premium finishes.",
    link: "/products/wooden-boxes"
  },
];

export const categories: Category[] = [
  { id: 'all', name: 'All Products' },
  { id: 'books', name: 'Books & Print' },
  { id: 'packaging', name: 'Packaging' },
  { id: 'specialty', name: 'Specialty Items' },
];

export const filterProductsByCategory = (products: Product[], categoryId: string): Product[] => {
  if (categoryId === 'all') return products;
  
  if (categoryId === 'books') {
    return products.filter(product => 
      ['Bible', 'Children\'s Books', 'Journal'].includes(product.name)
    );
  }
  
  if (categoryId === 'packaging') {
    return products.filter(product => 
      ['Jewelry Box', 'Gift Box', 'Shopping Bag', 'Wine Box', 'Wooden Box', 'Make-up Box'].includes(product.name)
    );
  }
  
  if (categoryId === 'specialty') {
    return products.filter(product => 
      ['Calendar', 'Game Cards', 'Greeting Cards'].includes(product.name)
    );
  }
  
  return products;
};
