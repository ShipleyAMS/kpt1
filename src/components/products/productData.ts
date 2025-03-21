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
    image: "/lovable-uploads/730c8a7d-9d8b-431a-9b5f-66522ef22f31.png",
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
    image: "/lovable-uploads/0d846d1b-bb50-46e6-b470-34d6a2e11ae0.png",
    description: "High-quality game cards with vibrant colors and durable coating.",
    link: "/products/game-cards"
  },
  {
    id: 6,
    name: "Product Packaging",
    image: "/lovable-uploads/4a00c030-1150-4412-9bd5-501f1c8882a8.png",
    description: "Custom product packaging with precise die-cutting and premium finishes.",
    link: "/products/gift-boxes"
  },
  {
    id: 7,
    name: "Greeting Cards",
    image: "/lovable-uploads/048818fd-ebcb-4883-8ee0-cfc0e2f2ff6f.png",
    description: "Premium greeting cards with custom designs and special finishes.",
    link: "/products/greeting-cards"
  },
  {
    id: 8,
    name: "Jewelry Box",
    image: "/lovable-uploads/bd0c61b8-a405-4055-954d-857f892c3b15.png",
    description: "Customized jewelry boxes with bespoke designs and premium materials.",
    link: "/products/jewelery-boxes"
  },
  {
    id: 20,
    name: "Fragrance Box",
    image: "/lovable-uploads/1ca11ca6-fd55-4f7a-ae09-9a92a9e4fd24.png",
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
    image: "/lovable-uploads/cea7e9e9-d0c6-4839-9680-4963d79b91c3.png",
    description: "Premium notebooks with various cover options and high-quality paper.",
    link: "/products/journals"
  },
  {
    id: 10,
    name: "Gift Bag",
    image: "/lovable-uploads/397f328c-f306-42e6-b2d2-2c04434346ee.png",
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
    image: "/lovable-uploads/2e228353-624a-40eb-873c-01d1de7088fb.png",
    description: "High-quality notebooks with premium paper and customizable covers.",
    link: "/products/notebooks"
  },
  {
    id: 14,
    name: "Planner",
    image: "/lovable-uploads/559afcce-3c6a-4840-a647-4efeba9173f0.png",
    description: "Organizational planners with practical layouts and premium binding.",
    link: "/products/planners"
  },
  {
    id: 15,
    name: "Gift Bag",
    image: "/lovable-uploads/397f328c-f306-42e6-b2d2-2c04434346ee.png",
    description: "Elegant gift bags for special occasions with premium finishes.",
    link: "/products/gift-bags"
  },
  {
    id: 16,
    name: "Card Game",
    image: "/lovable-uploads/870c440a-98b9-472a-9f5c-021a5818c907.png",
    description: "Custom card games with high-quality printing and finishes.",
    link: "/products/card-games"
  },
  {
    id: 17,
    name: "Jigsaw",
    image: "/lovable-uploads/71785627-ea7b-4afd-a519-5ba658396519.png",
    description: "Custom jigsaw puzzles with vibrant printing and precision cutting.",
    link: "/products/jigsaws"
  },
  {
    id: 18,
    name: "3D Card",
    image: "/lovable-uploads/7d99bcd5-099a-42f0-8760-70f056733a9d.png",
    description: "Innovative 3D cards with special effects and premium materials.",
    link: "/products/3d-cards"
  },
  {
    id: 19,
    name: "Catalogues",
    image: "/lovable-uploads/5711bd98-36d2-4420-80b8-76d8febe0aec.png",
    description: "Professional catalogues with high-quality printing and binding options.",
    link: "/products/catalogues"
  },
  {
    id: 22,
    name: "Tarot Cards",
    image: "/lovable-uploads/32bcdf42-a5c3-4cfa-bc1f-9182b3bfc322.png",
    description: "Premium tarot cards with intricate designs and high-quality finishes.",
    link: "/products/tarot-cards"
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
      ['Jewelry Box', 'Product Packaging', 'Gift Bag', 'Wine Box', 'Wooden Box', 'Cosmetic Box', 'Fragrance Box', 'Watch Box'].includes(product.name)
    );
  }
  
  if (categoryId === 'games') {
    return products.filter(product => 
      ['Game Cards', 'Greeting Cards', 'Card Game', 'Jigsaw', '3D Card'].includes(product.name)
    );
  }
  
  return products;
};
