// src/components/SEOHead.jsx -- FINAL, CORRECTED CODE --

import React from 'react';
import { Helmet } from 'react-helmet-async';

// This component is now ONLY responsible for managing the document head for SEO.
// It produces NO visible output on the page.

const SEOHead = ({ title, description, keywords, image, url, type, structuredData }) => {
  // Define your website's base URL here for consistency.
  const siteUrl = "https://evoq-creative-tech.vercel.app";
  
  // Create full, absolute URLs, which are best for SEO and social sharing.
  const fullUrl = `${siteUrl}${url}`;
  const fullImageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/assets/images/default-social-card.jpg`; // A default image is good practice

  return (
    <Helmet>
      {/* --- Standard SEO Tags --- */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* --- Open Graph Tags (for Facebook, LinkedIn, etc.) --- */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:site_name" content="Evoq Creative Tech" />

      {/* --- Twitter Card Tags --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* --- Structured Data (JSON-LD) --- */}
      {/* This script helps Google understand your content for rich results */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;