export const seoConfig = {
  // Default SEO settings
  default: {
    title: 'Evoq Creative Tech - Professional Web Development & Digital Solutions',
    description: 'Professional web development company specializing in React, modern web technologies, and creative digital experiences. Custom web applications, responsive design, and technical SEO optimization.',
    keywords: 'web development, React development, digital solutions, custom web applications, responsive design, technical SEO, modern web technologies, creative tech, professional web services',
    image: '/assets/images/evoq-creative-tech-og.jpg'
  },
  
  // Page-specific SEO configurations
  pages: {
    homepage: {
      title: 'Evoq Creative Tech - Professional Web Development & Digital Solutions',
      description: 'Transform your digital presence with Evoq Creative Tech. Professional web development, React applications, responsive design, and technical SEO optimization. Get started today.',
      keywords: 'web development company, React development services, digital transformation, custom web applications, responsive web design, technical SEO, modern web technologies, professional web services',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Evoq Creative Tech",
        "url": "https://evoq-creative-tech.vercel.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://evoq-creative-tech.vercel.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    },
    
    services: {
      title: 'Web Development Services - React, Modern Tech & Digital Solutions | Evoq Creative Tech',
      description: 'Comprehensive web development services including React development, responsive design, e-commerce solutions, and technical SEO. Professional digital solutions tailored to your business needs.',
      keywords: 'web development services, React development, responsive design, e-commerce development, technical SEO services, digital solutions, custom web applications, modern web technologies',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Development",
        "provider": {
          "@type": "Organization",
          "name": "Evoq Creative Tech"
        },
        "description": "Professional web development services including React development, responsive design, and technical SEO optimization"
      }
    },
    
    pricing: {
      title: 'Web Development Pricing & Packages - Affordable Professional Services | Evoq Creative Tech',
      description: 'Transparent pricing for professional web development services. Custom packages for React development, responsive design, and digital solutions. Get a quote today.',
      keywords: 'web development pricing, React development cost, responsive design packages, digital solutions pricing, custom web application cost, professional web services pricing',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "description": "Web development services pricing starting from competitive rates"
      }
    },
    
    portfolio: {
      title: 'Portfolio - Web Development Projects & Digital Solutions | Evoq Creative Tech',
      description: 'Explore our portfolio of professional web development projects. React applications, responsive designs, and innovative digital solutions for businesses worldwide.',
      keywords: 'web development portfolio, React projects, responsive design examples, digital solutions showcase, custom web applications portfolio, professional web development work',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Evoq Creative Tech Portfolio",
        "description": "Showcase of professional web development projects and digital solutions"
      }
    },
    
    about: {
      title: 'About Us - Professional Web Development Team | Evoq Creative Tech',
      description: 'Learn about Evoq Creative Tech\'s mission to deliver exceptional web development services. Our team of experts specializes in React, modern web technologies, and digital innovation.',
      keywords: 'about evoq creative tech, web development team, React developers, digital solutions experts, professional web development company, modern web technologies team',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Evoq Creative Tech",
        "description": "Learn about our professional web development team and mission"
      }
    },
    
    contact: {
      title: 'Contact Us - Get Started with Professional Web Development | Evoq Creative Tech',
      description: 'Ready to transform your digital presence? Contact Evoq Creative Tech for professional web development services, React applications, and digital solutions. Free consultation available.',
      keywords: 'contact web developer, React development consultation, digital solutions inquiry, professional web services contact, custom web application quote',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Evoq Creative Tech",
        "description": "Get in touch for professional web development services and digital solutions"
      }
    }
  },
  
  // Business information for structured data
  business: {
    name: 'Evoq Creative Tech',
    description: 'Professional web development and digital solutions company',
    url: 'https://evoq-creative-tech.vercel.app',
    logo: 'https://evoq-creative-tech.vercel.app/assets/images/logo.png',
    email: 'hello@evoqcreativetech.com',
    phone: '+1-XXX-XXX-XXXX',
    address: {
      streetAddress: 'Remote & Global',
      addressLocality: 'Worldwide',
      addressCountry: 'Global'
    },
    socialMedia: {
      twitter: 'https://twitter.com/evoqcreativetech',
      linkedin: 'https://linkedin.com/company/evoqcreativetech',
      github: 'https://github.com/evoqcreativetech'
    },
    services: [
      'Web Development',
      'React Development',
      'Responsive Design',
      'Technical SEO',
      'Digital Solutions',
      'Custom Web Applications',
      'E-commerce Development',
      'Performance Optimization'
    ]
  },
  
  // Technical SEO settings
  technical: {
    sitemap: 'https://evoq-creative-tech.vercel.app/sitemap.xml',
    robotsTxt: 'https://evoq-creative-tech.vercel.app/robots.txt',
    manifest: 'https://evoq-creative-tech.vercel.app/manifest.json',
    themeColor: '#2D2D2D',
    backgroundColor: '#FFFFFF',
    lang: 'en',
    charset: 'UTF-8'
  }
};

// Helper function to get SEO data for a specific page
export const getPageSEO = (pageName) => {
  const pageData = seoConfig.pages[pageName] || {};
  return {
    ...seoConfig.default,
    ...pageData
  };
};

// Helper function to generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": `https://evoq-creative-tech.vercel.app${breadcrumb.url}`
    }))
  };
};

// Helper function to generate FAQ structured data
export const generateFAQStructuredData = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Helper function to generate service structured data
export const generateServiceStructuredData = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": seoConfig.business.name,
      "url": seoConfig.business.url
    },
    "areaServed": service.areaServed || "Worldwide",
    "serviceType": service.type || "Web Development"
  };
};

export default seoConfig;