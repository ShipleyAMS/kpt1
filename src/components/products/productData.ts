
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
    name: "Cosmetic Box",
    image: "/lovable-uploads/b6e8fc28-653d-4228-9fa9-b1b99a5a25aa.png",
    description: "Elegant cosmetic boxes with premium finishes and secure closures.",
    link: "/products/cosmetic-boxes"
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
    id: 20,
    name: "Fragrance Box",
    image: "/placeholder.svg",
    description: "Luxurious packaging solutions for perfumes and fragrances.",
    link: "/products/fragrance-boxes"
  },
  {
    id: 21,
    name: "Watch Box",
    image: "/lovable-uploads/faafb5be-1211-4112-a124-756086434ba0.png",
    description: "Elegant boxes designed specifically for premium watches and timepieces.",
    link: "/products/watch-boxes"
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
    name: "Gift Bag",
    image: "/lovable-uploads/6806d7dc-b1b9-4350-a861-2e3bfd62ae75.png",
    description: "Elegant gift bags for special occasions with premium finishes.",
    link: "/products/gift-bags"
  },
  {
    id: 11,
    name: "Wine Box",
    image: "/lovable-uploads/f237a227-533c-40ac-a7df-36908496434e.png",
    description: "Elegant wine boxes with premium finishes and secure closures.",
    link: "/products/wine-boxes"
  },
  {
    id: 12,
    name: "Wooden Box",
    image: "/lovable-uploads/33abf773-6299-4658-aea2-6515350a7907.png",
    description: "Luxurious wooden boxes with custom engraving and premium finishes.",
    link: "/products/wooden-boxes"
  },
  {
    id: 13,
    name: "Notebook",
    image: "/lovable-uploads/48e550bc-0d5f-4553-9aea-82970612ef16.png",
    description: "High-quality notebooks with premium paper and customizable covers.",
    link: "/products/notebooks"
  },
  {
    id: 14,
    name: "Planner",
    image: "/placeholder.svg",
    description: "Organizational planners with practical layouts and premium binding.",
    link: "/products/planners"
  },
  {
    id: 15,
    name: "Gift Bag",
    image: "/placeholder.svg",
    description: "Elegant gift bags for special occasions with premium finishes.",
    link: "/products/gift-bags"
  },
  {
    id: 16,
    name: "Card Game",
    image: "/placeholder.svg",
    description: "Custom card games with high-quality printing and finishes.",
    link: "/products/card-games"
  },
  {
    id: 17,
    name: "Jigsaw",
    image: "/placeholder.svg",
    description: "Custom jigsaw puzzles with vibrant printing and precision cutting.",
    link: "/products/jigsaws"
  },
  {
    id: 18,
    name: "3D Card",
    image: "/placeholder.svg",
    description: "Innovative 3D cards with special effects and premium materials.",
    link: "/products/3d-cards"
  },
  {
    id: 19,
    name: "Catalogues",
    image: "/placeholder.svg",
    description: "Professional catalogues with high-quality printing and binding options.",
    link: "/products/catalogues"
  },
];

export const categories: Category[] = [
  { id: 'all', name: 'All Products' },
  { id: 'printing', name: 'Printing' },
  { id: 'stationery', name: 'Stationery' },
  { id: 'packaging', name: 'Packaging' },
  { id: 'games', name: 'Games & Cards' },
];

export const filterProductsByCategory = (products: Product[], categoryId: string): Product[] => {
  if (categoryId === 'all') return products;
  
  if (categoryId === 'printing') {
    return products.filter(product => 
      ['Bible', 'Children\'s Books', 'Calendar', 'Catalogues'].includes(product.name)
    );
  }
  
  if (categoryId === 'stationery') {
    return products.filter(product => 
      ['Journal', 'Notebook', 'Planner'].includes(product.name)
    );
  }
  
  if (categoryId === 'packaging') {
    return products.filter(product => 
      ['Jewelry Box', 'Gift Box', 'Gift Bag', 'Wine Box', 'Wooden Box', 'Cosmetic Box', 'Fragrance Box', 'Watch Box'].includes(product.name)
    );
  }
  
  if (categoryId === 'games') {
    return products.filter(product => 
      ['Game Cards', 'Greeting Cards', 'Card Game', 'Jigsaw', '3D Card'].includes(product.name)
    );
  }
  
  return products;
};
