
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const CalendarsPage = () => {
  const specifications = [
    { name: 'Calendar Types', description: 'Wall calendars, Desk calendars, Pocket calendars, Spiral-bound, Saddle-stitched, Flip calendars' },
    { name: 'Size Options', description: 'Standard sizes from 5"x7" to 12"x12", Custom sizes available, Panoramic formats for wall calendars' },
    { name: 'Paper Options', description: 'Art paper (128-200 gsm), Recycled options, Matte, Gloss, Silky finish' },
    { name: 'Binding Options', description: 'Wire-O, Spiral, Saddle-stitched, Perfect bound, Twin-loop wire, Metal hanging mechanisms' },
    { name: 'Special Features', description: 'Die-cut shapes, Special cover finishes, Tear-off pages, Perforated date pages, Note sections' },
    { name: 'Custom Elements', description: 'Personalized dates, Custom photography, Branded designs, Holiday markings, Special events' },
    { name: 'Cover Finishes', description: 'Matte/gloss lamination, Spot UV, Embossing, Foil stamping, Soft-touch coating' },
    { name: 'Additional Options', description: 'Pockets for documents, Magnetic closure, Year planners, Monthly/weekly views, Holiday indicators' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wall Calendar",
      image: "/lovable-uploads/513a1818-3b90-4839-979b-a7279d2b013e.png",
      description: "High-quality wall calendars with stunning photography and durable pages."
    },
    {
      id: 2,
      name: "Desktop Calendar",
      image: "/lovable-uploads/513a1818-3b90-4839-979b-a7279d2b013e.png",
      description: "Elegant desk calendars with sturdy stands and premium finish."
    },
    {
      id: 3,
      name: "Pocket Planner",
      image: "/lovable-uploads/513a1818-3b90-4839-979b-a7279d2b013e.png",
      description: "Compact and portable calendars perfect for on-the-go scheduling."
    },
    {
      id: 4,
      name: "Custom Corporate Calendar",
      image: "/lovable-uploads/513a1818-3b90-4839-979b-a7279d2b013e.png",
      description: "Branded calendars for corporate gifts and promotional purposes."
    },
  ];

  return (
    <ProductDetailLayout
      title="Calendars"
      description="Our premium calendars combine practical functionality with superior design and materials. From elegant wall calendars to compact desk planners, we offer a complete range of calendar printing services. Our calendars feature high-quality paper stocks, durable binding options, and customizable designs to create products that are both beautiful and practical for year-round use."
      images={[
        "/lovable-uploads/513a1818-3b90-4839-979b-a7279d2b013e.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default CalendarsPage;
