
import { Product, Category } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Bible",
    image: "/images/printing/bibles/bibles-main.png",
    description: "High-quality Bibles with premium printing and binding.",
    link: "/products/bibles"
  },
  {
    id: 2,
    name: "Children's Books",
    image: "/images/printing/books/books-1.png",
    description: "Colorful and engaging children's books with vibrant illustrations.",
    link: "/products/books"
  },
  {
    id: 3,
    name: "Calendar",
    image: "/images/printing/calendars/calendars-main.png",
    description: "Custom calendars with beautiful designs and durable construction.",
    link: "/products/calendars"
  },
  {
    id: 4,
    name: "Cosmetic Box",
    image: "/images/packaging/cosmetic-boxes/cosmetic-boxes-main.png",
    description: "Elegant cosmetic boxes with premium finishes and secure closures.",
    link: "/products/cosmetic-boxes"
  },
  {
    id: 5,
    name: "Game Cards",
    image: "/images/printing/game-cards/game-cards-main.png",
    description: "High-quality game cards with vibrant colors and durable coating.",
    link: "/products/game-cards"
  },
  {
    id: 6,
    name: "Product Packaging",
    image: "/images/packaging/gift-boxes/gift-boxes-main.png",
    description: "Custom product packaging with precise die-cutting and premium finishes.",
    link: "/products/gift-boxes"
  },
  {
    id: 7,
    name: "Greeting Cards",
    image: "/images/printing/greeting-cards/greeting-cards-main.png",
    description: "Premium greeting cards with custom designs and special finishes.",
    link: "/products/greeting-cards"
  },
  {
    id: 8,
    name: "Jewelry Box",
    image: "/images/packaging/jewelery-boxes/jewelery-boxes-main.png",
    description: "Customized jewelry boxes with bespoke designs and premium materials.",
    link: "/products/jewelery-boxes"
  },
  {
    id: 20,
    name: "Fragrance Box",
    image: "/images/packaging/fragrance-boxes/fragrance-boxes-main.png",
    description: "Luxurious packaging solutions for perfumes and fragrances.",
    link: "/products/fragrance-boxes"
  },
  {
    id: 21,
    name: "Watch Box",
    image: "/images/packaging/watch-boxes/watch-boxes-main.png",
    description: "Elegant boxes designed specifically for premium watches and timepieces.",
    link: "/products/watch-boxes"
  },
  {
    id: 9,
    name: "Journal",
    image: "/images/stationery/journals/journals-main.png",
    description: "Premium notebooks with various cover options and high-quality paper.",
    link: "/products/journals"
  },
  {
    id: 10,
    name: "Gift Bag",
    image: "/images/packaging/gift-bags/gift-bags-main.png",
    description: "Elegant gift bags for special occasions with premium finishes.",
    link: "/products/gift-bags"
  },
  {
    id: 11,
    name: "Wine Box",
    image: "/images/packaging/wine-boxes/wine-boxes-main.png",
    description: "Elegant wine boxes with premium finishes and secure closures.",
    link: "/products/wine-boxes"
  },
  {
    id: 12,
    name: "Wooden Box",
    image: "/images/packaging/wooden-boxes/wooden-boxes-main.png",
    description: "Luxurious wooden boxes with custom engraving and premium finishes.",
    link: "/products/wooden-boxes"
  },
  {
    id: 13,
    name: "Notebook",
    image: "/images/stationery/notebooks/notebooks-main.png",
    description: "High-quality notebooks with premium paper and customizable covers.",
    link: "/products/notebooks"
  },
  {
    id: 14,
    name: "Planner",
    image: "/images/stationery/planners/planners-main.png",
    description: "Organizational planners with practical layouts and premium binding.",
    link: "/products/planners"
  },
  {
    id: 15,
    name: "Gift Bag",
    image: "/images/packaging/gift-bags/gift-bags-main.png",
    description: "Elegant gift bags for special occasions with premium finishes.",
    link: "/products/gift-bags"
  },
  {
    id: 16,
    name: "Card Game",
    image: "/images/printing/game-cards/game-cards-2.png",
    description: "Custom card games with high-quality printing and finishes.",
    link: "/products/card-games"
  },
  {
    id: 17,
    name: "Jigsaw",
    image: "/images/printing/jigsaw-puzzles/jigsaw-puzzles-main.png",
    description: "Custom jigsaw puzzles with vibrant printing and precision cutting.",
    link: "/products/jigsaws"
  },
  {
    id: 18,
    name: "3D Card",
    image: "/images/printing/greeting-cards/greeting-cards-2.png",
    description: "Innovative 3D cards with special effects and premium materials.",
    link: "/products/3d-cards"
  },
  {
    id: 19,
    name: "Catalogues",
    image: "/images/printing/catalogues/catalogues-main.png",
    description: "Professional catalogues with high-quality printing and binding options.",
    link: "/products/catalogues"
  },
  {
    id: 22,
    name: "Tarot Cards",
    image: "/images/printing/tarot-cards/tarot-cards-main.png",
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
