// src/pages/services-detail/components/Brochure.jsx -- FINAL, UPDATED WITH YOUR LOGO --

import React from 'react';

const Brochure = ({ service, id }) => {
  if (!service) return null;

  const styles = {
    container: { fontFamily: 'Helvetica, Arial, sans-serif', color: '#333', padding: '40px', width: '210mm', minHeight: '297mm', backgroundColor: '#ffffff' },
    header: { textAlign: 'center', borderBottom: '2px solid #4A90E2', paddingBottom: '20px', marginBottom: '30px' },
    // --- ADDED NEW STYLE FOR THE IMAGE LOGO ---
    logoImage: { width: '150px', height: 'auto', margin: '0 auto' },
    title: { fontSize: '24px', fontWeight: 'bold', margin: '20px 0', color: '#1a202c' },
    sectionTitle: { fontSize: '20px', fontWeight: 'bold', color: '#4A90E2', borderBottom: '1px solid #eee', paddingBottom: '10px', marginTop: '30px', marginBottom: '20px' },
    p: { fontSize: '14px', lineHeight: '1.6', color: '#4a5568' },
    listItem: { display: 'flex', alignItems: 'flex-start', marginBottom: '10px', fontSize: '14px' },
    check: { color: '#48BB78', marginRight: '10px', marginTop: '4px' },
    step: { display: 'flex', marginBottom: '20px' },
    stepNumber: { background: '#4A90E2', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '20px', flexShrink: 0 },
    techCategory: { marginBottom: '20px' },
    techTag: { display: 'inline-block', background: '#E2E8F0', color: '#4A5568', borderRadius: '15px', padding: '5px 12px', marginRight: '8px', marginBottom: '8px', fontSize: '12px' },
    footer: { textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee', fontSize: '12px', color: '#718096' }
  };

  return (
    <div id={id} style={styles.container}>
      {/* --- UPDATED LOGO SECTION --- */}
      <div style={styles.header}>
        {/* Replaced the text logo with an <img> tag */}
        <img 
          src="/assets/images/logo1.png" 
          alt="Evoq Creative Tech Logo" 
          style={styles.logoImage} 
        />
      </div>
      
      <h1 style={styles.title}>{service.overview.title}</h1>
      <p style={styles.p}>{service.overview.description}</p>
      <div style={styles.sectionTitle}>Key Features</div>
      {service.overview.keyPoints.map((point, i) => ( <div key={i} style={styles.listItem}><span style={styles.check}>✔</span><span>{point}</span></div> ))}
      <div style={styles.sectionTitle}>{service.process.title}</div>
      {service.process.steps.map((step, i) => ( <div key={i} style={styles.step}><div style={styles.stepNumber}>{step.step}</div><div><h4 style={{ ...styles.title, fontSize: '16px', margin: '0 0 5px 0' }}>{step.title}</h4><p style={{...styles.p, margin: 0 }}>{step.description}</p></div></div> ))}
      <div style={styles.sectionTitle}>{service.technologies.title}</div>
      {service.technologies.categories.map((cat, i) => ( <div key={i} style={styles.techCategory}><h4 style={{ ...styles.title, fontSize: '16px', margin: '0 0 10px 0' }}>{cat.name}</h4><div>{cat.techs.map((tech, j) => <span key={j} style={styles.techTag}>{tech}</span>)}</div></div> ))}
      <div style={styles.footer}><p>Contact us for a custom quote: evoqcreativetech@gmail.com | +254 115 706 542</p><p>www.evoqcreative.co.ke</p></div>
    </div>
  );
};

export default Brochure;