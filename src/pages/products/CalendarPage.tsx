
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const CalendarPage = () => {
  return (
    <ProductDetailLayout
      title="Calendar"
      description="Our calendars combine functionality with beautiful design. Available in various formats including wall calendars, desk calendars, and year planners, each calendar is printed on high-quality paper with vibrant colors and durable binding."
      images={[
        "/lovable-uploads/730c8a7d-9d8b-431a-9b5f-66522ef22f31.png", 
        "/lovable-uploads/58c9329b-4e3d-4c77-aee1-a1f6949460c4.png", 
        "/lovable-uploads/5609e6da-e888-4937-93b7-e4735b0ab66d.png", 
        "/lovable-uploads/c95b3a94-f7af-4b29-9808-dc56f25ab6ff.png",
        "/lovable-uploads/0ec05fee-4030-4bc0-bf83-6b14f314e476.png",
        "/lovable-uploads/99e8d61c-e0c1-4121-8345-c4e6009030ca.png",
        "/lovable-uploads/71baa567-f0c0-4681-90e9-aa2b0309ccdf.png"
      ]}
      specifications={[
        { name: "Types", description: "Wall calendars, Desk calendars, Year planners" },
        { name: "Size Options", description: "A3, A4, A5, Custom sizes available" },
        { name: "Paper Types", description: "Gloss, Matte, Silk, Premium Art" },
        { name: "Binding Options", description: "Wire-o, Spiral, Saddle-stitched, Custom" },
        { name: "Special Features", description: "Special date marking, Custom holidays" },
        { name: "Customization", description: "Corporate branding, Custom imagery" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Calendar layout and date formatting</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Print</div>
            <p className="text-sm text-gray-600">High-quality printing of calendar pages</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Assembly</div>
            <p className="text-sm text-gray-600">Collating and assembling the calendar sheets</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Binding</div>
            <p className="text-sm text-gray-600">Wire-o or spiral binding for easy page turning</p>
          </div>
        </div>
      }
    />
  );
};

export default CalendarPage;
