
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-kingTai-primary border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/7b19f840-c217-43f6-a925-82c05b1102a9.png" 
              alt="King Tai Logo" 
              className="h-16 w-auto"
            />
            <p className="mt-4 text-gray-600">
              Quality first, customer first, high-quality service, and integrity.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-kingTai-primary hover:text-kingTai-button transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-kingTai-primary hover:text-kingTai-button transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-kingTai-primary hover:text-kingTai-button transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-kingTai-primary hover:text-kingTai-button transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kingTai-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-kingTai-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-kingTai-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="text-gray-600 hover:text-kingTai-primary transition-colors">Products</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-kingTai-primary transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-kingTai-primary transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kingTai-primary">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-600 hover:text-kingTai-primary transition-colors">Books & Bibles</a>
              </li>
              <li>
                <a href="#products" className="text-gray-600 hover:text-kingTai-primary transition-colors">Packaging Boxes</a>
              </li>
              <li>
                <a href="#products" className="text-gray-600 hover:text-kingTai-primary transition-colors">Shopping Bags</a>
              </li>
              <li>
                <a href="#products" className="text-gray-600 hover:text-kingTai-primary transition-colors">Calendars</a>
              </li>
              <li>
                <a href="#products" className="text-gray-600 hover:text-kingTai-primary transition-colors">Game Cards</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kingTai-primary">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-kingTai-primary" />
                <span className="text-gray-600">
                  Rm 9/F Silvercorp Int'l Tower<br />
                  707-713 Nathan Road Mongkok,<br />
                  Hong Kong
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-kingTai-primary" />
                <div className="text-gray-600">
                  <p>Tel: +86 150 1316 9618</p>
                  <p>WhatsApp: +86 150 1316 9618</p>
                  <p>WeChat: AndyKingTai</p>
                  <p className="text-sm text-gray-500">Contact Person: Andy Zhang</p>
                </div>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-kingTai-primary" />
                <span className="text-gray-600">info@kingtaipp.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} King Tai Printing & Packaging. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
