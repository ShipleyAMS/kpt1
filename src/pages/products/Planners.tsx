
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const PlannersPage = () => {
  const specifications = [
    { name: 'Layout Options', description: 'Daily, Weekly, Monthly, Yearly, Academic' },
    { name: 'Binding Options', description: 'Spiral, Perfect binding, Disc-bound, Hardcover' },
    { name: 'Cover Materials', description: 'Leather, Synthetic, Fabric, Hardboard, Custom designs' },
    { name: 'Size Options', description: 'A4, A5, B5, Personal, Pocket, Custom sizes' },
    { name: 'Special Features', description: 'Goal tracking, Habit trackers, Budget sections, Notes' },
    { name: 'Customization', description: 'Custom layouts, Corporate branding, Personalization' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Daily Planners",
      image: "/placeholder.svg",
      description: "Detailed day planners with hourly scheduling and goal tracking."
    },
    {
      id: 2,
      name: "Academic Planners",
      image: "/placeholder.svg",
      description: "School-year planners with assignment tracking and class schedules."
    },
    {
      id: 3,
      name: "Business Planners",
      image: "/placeholder.svg",
      description: "Professional planners with meeting notes and project management sections."
    },
    {
      id: 4,
      name: "Custom Corporate Planners",
      image: "/placeholder.svg",
      description: "Branded planners with company logos and corporate color schemes."
    },
  ];

  return (
    <ProductDetailLayout
      title="Planners"
      description="Our planners are designed to help maximize productivity and organization. Available in various layouts including daily, weekly, and monthly formats, our planners feature premium paper, durable binding, and thoughtful design elements to support effective time management and goal achievement."
      images={[
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
    />
  );
};

export default PlannersPage;
