// src/pages/pricing-packages/components/PricingBrochure.jsx -- NEW FILE --

import React from 'react';

// This component is designed to be rendered off-screen and converted to a PDF.
const Brochure = ({ packages, id }) => {
  if (!packages || packages.length === 0) return null;

  const styles = {
    container: { fontFamily: 'Helvetica, Arial, sans-serif', color: '#333', padding: '40px', width: '210mm', backgroundColor: '#ffffff' },
    header: { textAlign: 'center', borderBottom: '2px solid #4A90E2', paddingBottom: '20px', marginBottom: '30px' },
    logo: { fontSize: '28px', fontWeight: 'bold', color: '#4A90E2' },
    title: { fontSize: '24px', fontWeight: 'bold', margin: '20px 0', color: '#1a202c' },
    sectionTitle: { fontSize: '20px', fontWeight: 'bold', color: '#4A90E2', borderBottom: '1px solid #eee', paddingBottom: '10px', marginTop: '30px', marginBottom: '20px' },
    p: { fontSize: '14px', lineHeight: '1.6', color: '#4a5568' },
    packageContainer: { border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' },
    packageName: { fontSize: '20px', fontWeight: 'bold', color: '#1a202c' },
    packagePrice: { fontSize: '18px', fontWeight: 'bold', color: '#4A90E2', marginBottom: '10px' },
    featureList: { listStyle: 'none', padding: 0 },
    featureItem: { marginBottom: '8px', fontSize: '14px' },
    footer: { textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee', fontSize: '12px', color: '#718096' }
  };

  return (
    <div id={id} style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logo}>Evoq Creative Tech - Pricing Guide</div>
      </div>

      <h1 style={styles.title}>Our Web Development Packages</h1>
      <p style={styles.p}>Thank you for your interest in our services. Below is a detailed breakdown of our standard packages. All prices are in Kenyan Shillings (KES).</p>
      
      {packages.map(pkg => (
        <div key={pkg.id} style={styles.packageContainer}>
          <h2 style={styles.packageName}>{pkg.name}</h2>
          <p style={styles.packagePrice}>KES {pkg.price.toLocaleString()}</p>
          <p style={styles.p}>{pkg.description}</p>
          <h3 style={{...styles.sectionTitle, fontSize: '16px', marginTop: '20px', border: 'none'}}>Features Included:</h3>
          <ul style={styles.featureList}>
            {pkg.features.map((feature, i) => (
              <li key={i} style={styles.featureItem}>✔ {feature}</li>
            ))}
          </ul>
        </div>
      ))}
      
      <div style={styles.footer}>
        <p>Contact us for a custom quote: evoqcreativetech@gmail.com | +254 115 706 542</p>
        <p>www.yourwebsite.com</p>
      </div>
    </div>
  );
};

export default Brochure;