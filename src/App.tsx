
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Index from '@/pages/Index';
import AboutUs from '@/pages/AboutUs';
import TestimonialsPage from '@/pages/TestimonialsPage';
import NotFound from '@/pages/NotFound';

// Product Pages
import AllProductsPage from '@/pages/products/AllProducts';
import BiblesPage from '@/pages/products/Bibles';
import BooksPage from '@/pages/products/Books';
import CalendarsPage from '@/pages/products/Calendars';
import CataloguesPage from '@/pages/products/Catalogues';
import CosmeticBoxesPage from '@/pages/products/CosmeticBoxes';
import GameCardsPage from '@/pages/products/GameCards';
import GiftBoxesPage from '@/pages/products/GiftBoxes';
import GreetingCardsPage from '@/pages/products/GreetingCards';
import JeweleryBoxesPage from '@/pages/products/JeweleryBoxes';
import JournalsPage from '@/pages/products/Journals';
import ShoppingBagsPage from '@/pages/products/ShoppingBags';
import WineBoxesPage from '@/pages/products/WineBoxes';
import WoodenBoxesPage from '@/pages/products/WoodenBoxes';
import NotebooksPage from '@/pages/products/Notebooks';
import PlannersPage from '@/pages/products/Planners';
import GiftBagsPage from '@/pages/products/GiftBags';
import CardGamesPage from '@/pages/products/CardGames';
import JigsawsPage from '@/pages/products/Jigsaws';
import ThreeDCardsPage from '@/pages/products/3DCards';

// Category Pages
import PrintingPage from '@/pages/products/Printing';
import StationeryPage from '@/pages/products/Stationery';
import PackagingPage from '@/pages/products/Packaging';
import GamesCardsPage from '@/pages/products/GamesCards';

import './App.css';
import './styles/fonts.css';
import './styles/utilities.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        
        {/* Product Category Pages */}
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/printing" element={<PrintingPage />} />
        <Route path="/products/stationery" element={<StationeryPage />} />
        <Route path="/products/packaging" element={<PackagingPage />} />
        <Route path="/products/games" element={<GamesCardsPage />} />
        
        {/* Individual Product Pages */}
        <Route path="/products/bibles" element={<BiblesPage />} />
        <Route path="/products/books" element={<BooksPage />} />
        <Route path="/products/calendars" element={<CalendarsPage />} />
        <Route path="/products/catalogues" element={<CataloguesPage />} />
        <Route path="/products/cosmetic-boxes" element={<CosmeticBoxesPage />} />
        <Route path="/products/game-cards" element={<GameCardsPage />} />
        <Route path="/products/gift-boxes" element={<GiftBoxesPage />} />
        <Route path="/products/greeting-cards" element={<GreetingCardsPage />} />
        <Route path="/products/jewelery-boxes" element={<JeweleryBoxesPage />} />
        <Route path="/products/journals" element={<JournalsPage />} />
        <Route path="/products/shopping-bags" element={<ShoppingBagsPage />} />
        <Route path="/products/wine-boxes" element={<WineBoxesPage />} />
        <Route path="/products/wooden-boxes" element={<WoodenBoxesPage />} />
        <Route path="/products/notebooks" element={<NotebooksPage />} />
        <Route path="/products/planners" element={<PlannersPage />} />
        <Route path="/products/gift-bags" element={<GiftBagsPage />} />
        <Route path="/products/card-games" element={<CardGamesPage />} />
        <Route path="/products/jigsaws" element={<JigsawsPage />} />
        <Route path="/products/3d-cards" element={<ThreeDCardsPage />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
