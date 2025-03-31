
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Index from '@/pages/Index';
import AboutUs from '@/pages/AboutUs';
import NotFound from '@/pages/NotFound';

// Product Category Pages
import PrintingPage from '@/pages/products/PrintingPage';
import PackagingPage from '@/pages/products/PackagingPage';
import StationeryPage from '@/pages/products/StationeryPage';

// Product Pages
import BooksPage from '@/pages/products/BooksPage';
import BiblesPage from '@/pages/products/BiblesPage';
import CalendarPage from '@/pages/products/CalendarPage';
import GameCardsPage from '@/pages/products/GameCardsPage';
import GreetingCardsPage from '@/pages/products/GreetingCardsPage';
import TarotCardsPage from '@/pages/products/TarotCardsPage';
import JigsawPuzzlesPage from '@/pages/products/JigsawPuzzlesPage';
import CosmeticBoxesPage from '@/pages/products/CosmeticBoxesPage';
import JeweleryBoxesPage from '@/pages/products/JeweleryBoxesPage';
import GiftBoxesPage from '@/pages/products/GiftBoxesPage';
import GiftBagsPage from '@/pages/products/GiftBagsPage';
import WineBoxesPage from '@/pages/products/WineBoxesPage';
import WoodenBoxesPage from '@/pages/products/WoodenBoxesPage';
import FragranceBoxesPage from '@/pages/products/FragranceBoxesPage';
import WatchBoxesPage from '@/pages/products/WatchBoxesPage';
import NotebooksPage from '@/pages/products/NotebooksPage';
import JournalsPage from '@/pages/products/JournalsPage';
import PlannersPage from '@/pages/products/PlannersPage';

// Import only necessary CSS
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* Product Category Routes */}
        <Route path="/products/printing" element={<PrintingPage />} />
        <Route path="/products/packaging" element={<PackagingPage />} />
        <Route path="/products/stationery" element={<StationeryPage />} />
        
        {/* Product routes */}
        <Route path="/products/books" element={<BooksPage />} />
        <Route path="/products/bibles" element={<BiblesPage />} />
        <Route path="/products/calendar" element={<CalendarPage />} />
        <Route path="/products/game-cards" element={<GameCardsPage />} />
        <Route path="/products/greeting-cards" element={<GreetingCardsPage />} />
        <Route path="/products/tarot-cards" element={<TarotCardsPage />} />
        <Route path="/products/jigsaw-puzzles" element={<JigsawPuzzlesPage />} />
        
        <Route path="/products/cosmetic-boxes" element={<CosmeticBoxesPage />} />
        <Route path="/products/jewelery-boxes" element={<JeweleryBoxesPage />} />
        <Route path="/products/gift-boxes" element={<GiftBoxesPage />} />
        <Route path="/products/gift-bags" element={<GiftBagsPage />} />
        <Route path="/products/wine-boxes" element={<WineBoxesPage />} />
        <Route path="/products/wooden-boxes" element={<WoodenBoxesPage />} />
        <Route path="/products/fragrance-boxes" element={<FragranceBoxesPage />} />
        <Route path="/products/watch-boxes" element={<WatchBoxesPage />} />
        
        <Route path="/products/notebooks" element={<NotebooksPage />} />
        <Route path="/products/journals" element={<JournalsPage />} />
        <Route path="/products/planners" element={<PlannersPage />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
