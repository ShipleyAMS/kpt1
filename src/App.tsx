
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Index from '@/pages/Index';
import AboutUs from '@/pages/AboutUs';
import TestimonialsPage from '@/pages/TestimonialsPage';
import NotFound from '@/pages/NotFound';

// Import only necessary CSS
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
