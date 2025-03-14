
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import TestimonialsPage from "./pages/TestimonialsPage";

// Product pages
import BiblesPage from "./pages/products/Bibles";
import BooksPage from "./pages/products/Books";
import CalendarsPage from "./pages/products/Calendars";
import CosmeticBoxesPage from "./pages/products/CosmeticBoxes";
import GameCardsPage from "./pages/products/GameCards";
import GiftBoxesPage from "./pages/products/GiftBoxes";
import GreetingCardsPage from "./pages/products/GreetingCards";
import JeweleryBoxesPage from "./pages/products/JeweleryBoxes";
import JournalsPage from "./pages/products/Journals";
import ShoppingBagsPage from "./pages/products/ShoppingBags";
import WineBoxesPage from "./pages/products/WineBoxes";
import WoodenBoxesPage from "./pages/products/WoodenBoxes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          
          {/* Product Routes */}
          <Route path="/products/bibles" element={<BiblesPage />} />
          <Route path="/products/books" element={<BooksPage />} />
          <Route path="/products/calendars" element={<CalendarsPage />} />
          <Route path="/products/cosmetic-boxes" element={<CosmeticBoxesPage />} />
          <Route path="/products/game-cards" element={<GameCardsPage />} />
          <Route path="/products/gift-boxes" element={<GiftBoxesPage />} />
          <Route path="/products/greeting-cards" element={<GreetingCardsPage />} />
          <Route path="/products/jewelery-boxes" element={<JeweleryBoxesPage />} />
          <Route path="/products/journals" element={<JournalsPage />} />
          <Route path="/products/shopping-bags" element={<ShoppingBagsPage />} />
          <Route path="/products/wine-boxes" element={<WineBoxesPage />} />
          <Route path="/products/wooden-boxes" element={<WoodenBoxesPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
