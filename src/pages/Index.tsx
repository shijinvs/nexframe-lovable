
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import NexFrameServices from '@/components/NexFrameServices';
import WhyNexFrame from '@/components/WhyNexFrame';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="NexFrame Software Solutions - Innovative Solutions for Modern Businesses" 
        description="NexFrame Software Solutions: Building innovative ERP systems, mobile & web applications, and digital transformation solutions for businesses that think different."
        keywords={['ERP systems', 'Frappe development', 'Odoo implementation', 'custom software', 'mobile app development', 'web development', 'digital transformation']}
      />
      <Hero />
      <NexFrameServices />
      <WhyNexFrame />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
