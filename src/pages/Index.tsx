
import React, { useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Premium Printing & Packaging Solutions"
        description="King Tai offers premium printing and packaging solutions with factories in Hong Kong, Dongguan, Guangzhou, and Foshan. Quality printing for books, packaging, and more."
        keywords="printing, packaging, books, bibles, cards, boxes, printing factory, custom printing, premium packaging"
      />
      <Navbar />
      <Hero />
      <Products />
      <Testimonials limit={2} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
