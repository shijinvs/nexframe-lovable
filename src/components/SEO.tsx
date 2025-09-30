import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'NexFrame Software Solutions',
  description = 'NexFrame Software Solutions: Building innovative ERP systems, mobile & web applications, and digital transformation solutions for businesses that think different.',
  type = 'website',
  name = 'NexFrame Software Solutions',
  imageUrl = '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png',
  keywords = ['ERP systems', 'Frappe development', 'Odoo implementation', 'custom software', 'mobile app development', 'web development', 'digital transformation']
}) => {
  const location = useLocation();
  const currentUrl = `https://nexframe.com${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://nexframe.com${imageUrl}`;

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NexFrame Software Solutions',
    url: 'https://nexframe.com',
    logo: 'https://nexframe.com/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png',
    description: 'Building innovative ERP systems, mobile & web applications, and digital transformation solutions',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@nexframe.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/nexframe',
      'https://twitter.com/nexframe'
    ]
  };

  const keywordString = keywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="NexFrame Software Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@nexframe" />
      <meta name="twitter:creator" content="@nexframe" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
