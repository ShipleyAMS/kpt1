
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Index from '@/pages/Index';
import AboutUs from '@/pages/AboutUs';
import TestimonialsPage from '@/pages/TestimonialsPage';
import NotFound from '@/pages/NotFound';

// Product Pages
import CataloguesPage from '@/pages/products/CataloguesPage';
import LeafletsPage from '@/pages/products/LeafletsPage';
import BooksPage from '@/pages/products/BooksPage';
import BiblesPage from '@/pages/products/BiblesPage';
import CalendarPage from '@/pages/products/CalendarPage';
import GameCardsPage from '@/pages/products/GameCardsPage';
import GreetingCardsPage from '@/pages/products/GreetingCardsPage';
import TarotCardsPage from '@/pages/products/TarotCardsPage';
import JigsawPuzzlesPage from '@/pages/products/JigsawPuzzlesPage';
import MakeupBoxesPage from '@/pages/products/MakeupBoxesPage';
import JeweleryBoxesPage from '@/pages/products/JeweleryBoxesPage';
import GiftBoxesPage from '@/pages/products/GiftBoxesPage';
import WineBoxesPage from '@/pages/products/WineBoxesPage';
import WoodenBoxesPage from '@/pages/products/WoodenBoxesPage';
import ShoppingBagsPage from '@/pages/products/ShoppingBagsPage';
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
        <Route path="/testimonials" element={<TestimonialsPage />} />
        
        {/* Product routes */}
        <Route path="/products/catalogues" element={<CataloguesPage />} />
        <Route path="/products/leaflets" element={<LeafletsPage />} />
        <Route path="/products/books" element={<BooksPage />} />
        <Route path="/products/bibles" element={<BiblesPage />} />
        <Route path="/products/calendar" element={<CalendarPage />} />
        <Route path="/products/game-cards" element={<GameCardsPage />} />
        <Route path="/products/greeting-cards" element={<GreetingCardsPage />} />
        <Route path="/products/tarot-cards" element={<TarotCardsPage />} />
        <Route path="/products/jigsaw-puzzles" element={<JigsawPuzzlesPage />} />
        
        <Route path="/products/makeup-boxes" element={<MakeupBoxesPage />} />
        <Route path="/products/jewelery-boxes" element={<JeweleryBoxesPage />} />
        <Route path="/products/gift-boxes" element={<GiftBoxesPage />} />
        <Route path="/products/wine-boxes" element={<WineBoxesPage />} />
        <Route path="/products/wooden-boxes" element={<WoodenBoxesPage />} />
        <Route path="/products/shopping-bags" element={<ShoppingBagsPage />} />
        
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
