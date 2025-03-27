
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Premium printing and packaging solutions with factories in Hong Kong, Dongguan, Guangzhou, and Foshan.",
  keywords = "printing, packaging, books, bibles, game cards, gift boxes, custom printing",
  image = "/og-image.png",
  url = "",
  type = "website"
}) => {
  // Construct the full title with the company name
  const fullTitle = `${title} | King Tai Printing & Packaging`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
};

export default SEO;
