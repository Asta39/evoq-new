import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Brochure from './Brochure'; // The hidden brochure component

const ServiceDetails = ({ selectedService }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadBrochure = () => {
  setIsDownloading(true); // Disable button and show "Downloading..."
  
  // Find the hidden brochure component in the DOM
  const brochureElement = document.getElementById('brochure-to-download');
  
  // Use html2canvas to take a high-quality "screenshot" of the component
  html2canvas(brochureElement, { scale: 2 }) // scale: 2 improves resolution
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // Create a standard A4 PDF
      
      // Calculate dimensions to fit the image to the PDF width
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = pdfWidth / canvasWidth;
      const pdfHeight = canvasHeight * ratio;
      
      // Add the screenshot to the PDF
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Create a dynamic file name and save the PDF
      const fileName = `${currentService.overview.title.replace(/ /g, '-')}-Brochure.pdf`;
      pdf.save(fileName);
      
      setIsDownloading(false); // Re-enable the button
    });
};


const handleScheduleConsultation = () => {
  // 1. Define your WhatsApp number (no '+' sign)
  const whatsappNumber = "254115706542";
  
  // 2. Get the title of the currently selected service
  const serviceTitle = currentService.overview.title;

  // 3. Create a clear, pre-filled message
  const message = `Hi Evoq Creative Tech, I'd like to schedule a free consultation regarding your *${serviceTitle}* service.`;

  // 4. Encode the message for the URL
  const encodedMessage = encodeURIComponent(message);

  // 5. Create the full WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // 6. Open the link in a new tab
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

  const serviceDetails = {
    'website-development': {
      overview: {
        title: 'Custom Website Development',
        description: `We create bespoke websites tailored to your business needs using cutting-edge technologies. Our development process ensures your website is fast, secure, and scalable.`,
        keyPoints: [
          'Responsive design that works on all devices',
          'SEO-optimized structure and content',
          'Fast loading speeds and performance optimization',
          'Secure coding practices and SSL integration',
          'Content Management System integration',
          'E-commerce functionality when needed'
        ]
      },
      process: {
        title: 'Our Development Process',
        steps: [
          {
            step: '01',
            title: 'Discovery & Planning',
            description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.',
            duration: '1-2 weeks'
          },
          {
            step: '02',
            title: 'Design & Prototyping',
            description: 'Our designers create wireframes and high-fidelity mockups that align with your brand identity.',
            duration: '2-3 weeks'
          },
          {
            step: '03',
            title: 'Development & Testing',
            description: 'We build your website using modern technologies and conduct thorough testing across all devices.',
            duration: '3-6 weeks'
          },
          {
            step: '04',
            title: 'Launch & Support',
            description: 'We deploy your website and provide ongoing support to ensure optimal performance.',
            duration: 'Ongoing'
          }
        ]
      },
      technologies: {
        title: 'Technologies We Use',
        categories: [
          {
            name: 'Frontend',
            techs: ['React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript']
          },
          {
            name: 'Backend',
            techs: ['Node.js', 'Python', 'PHP', 'Laravel', 'Express.js', 'Django']
          },
          {
            name: 'Database',
            techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase']
          },
          {
            name: 'Tools',
            techs: ['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Figma']
          }
        ]
      }
    },
    'website-rebranding': {
      overview: {
        title: 'Website Rebranding Services',
        description: `Transform your existing website with a fresh, modern design that reflects your evolved brand identity while maintaining SEO value and user familiarity.`,
        keyPoints: [
          'Brand analysis and strategy development',
          'Modern UI/UX design implementation',
          'Content migration and optimization',
          'SEO preservation during transition',
          'Performance improvements and optimization',
          'User experience enhancement'
        ]
      },
      process: {
        title: 'Rebranding Process',
        steps: [
          {
            step: '01',
            title: 'Brand Audit',
            description: 'We evaluate your current brand positioning and identify opportunities for improvement.',
            duration: '1 week'
          },
          {
            step: '02',
            title: 'Strategy Development',
            description: 'Create a comprehensive rebranding strategy that aligns with your business objectives.',
            duration: '1-2 weeks'
          },
          {
            step: '03',
            title: 'Design & Development',
            description: 'Implement the new brand identity across your website with modern design principles.',
            duration: '4-6 weeks'
          },
          {
            step: '04',
            title: 'Migration & Launch',
            description: 'Carefully migrate content and launch the rebranded website with minimal downtime.',
            duration: '1 week'
          }
        ]
      },
      technologies: {
        title: 'Rebranding Tools',
        categories: [
          {
            name: 'Design',
            techs: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator']
          },
          {
            name: 'Development',
            techs: ['React', 'Vue.js', 'WordPress', 'Webflow', 'Custom CMS']
          },
          {
            name: 'Analytics',
            techs: ['Google Analytics', 'Hotjar', 'Mixpanel', 'SEMrush']
          },
          {
            name: 'Migration',
            techs: ['301 Redirects', 'Schema Markup', 'Sitemap Updates']
          }
        ]
      }
    },
    'seo-digital-visibility': {
      overview: {
        title: 'SEO & Digital Visibility',
        description: `Boost your online presence with comprehensive SEO strategies designed for the Kenyan market. We help businesses rank higher and attract qualified traffic.`,
        keyPoints: [
          'Comprehensive keyword research and analysis',
          'On-page and technical SEO optimization',
          'Local SEO for Kenyan businesses',
          'Content strategy and optimization',
          'Link building and authority development',
          'Performance tracking and reporting'
        ]
      },
      process: {
        title: 'SEO Process',
        steps: [
          {
            step: '01',
            title: 'SEO Audit',
            description: 'Comprehensive analysis of your current SEO performance and identification of opportunities.',
            duration: '1 week'
          },
          {
            step: '02',
            title: 'Strategy Development',
            description: 'Create a tailored SEO strategy based on your industry and target audience.',
            duration: '1 week'
          },
          {
            step: '03',
            title: 'Implementation',
            description: 'Execute on-page, technical, and content optimization strategies.',
            duration: '2-4 weeks'
          },
          {
            step: '04',
            title: 'Monitoring & Optimization',
            description: 'Continuous monitoring and optimization based on performance data.',
            duration: 'Ongoing'
          }
        ]
      },
      technologies: {
        title: 'SEO Tools & Platforms',
        categories: [
          {
            name: 'Analysis',
            techs: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs']
          },
          {
            name: 'Technical',
            techs: ['Screaming Frog', 'GTMetrix', 'PageSpeed Insights']
          },
          {
            name: 'Content',
            techs: ['Yoast SEO', 'Surfer SEO', 'Clearscope', 'BuzzSumo']
          },
          {
            name: 'Local SEO',
            techs: ['Google My Business', 'Local Citations', 'Schema Markup']
          }
        ]
      }
    },
    'ai-powered-websites': {
      overview: {
        title: 'AI-Powered Websites',
        description: `Leverage artificial intelligence to create smarter, more engaging websites that provide personalized experiences and automated interactions.`,
        keyPoints: [
          'AI-driven personalization engines',
          'Intelligent content recommendations',
          'Automated customer support systems',
          'Predictive analytics integration',
          'Machine learning optimization',
          'Voice and chat interfaces'
        ]
      },
      process: {
        title: 'AI Integration Process',
        steps: [
          {
            step: '01',
            title: 'AI Strategy Planning',
            description: 'Identify AI opportunities and define implementation strategy for your specific use case.',
            duration: '1-2 weeks'
          },
          {
            step: '02',
            title: 'Data Preparation',
            description: 'Prepare and structure data for AI model training and implementation.',
            duration: '2-3 weeks'
          },
          {
            step: '03',
            title: 'AI Development',
            description: 'Develop and integrate AI features into your website architecture.',
            duration: '4-8 weeks'
          },
          {
            step: '04',
            title: 'Testing & Optimization',
            description: 'Test AI functionality and optimize performance based on user interactions.',
            duration: '2-3 weeks'
          }
        ]
      },
      technologies: {
        title: 'AI Technologies',
        categories: [
          {
            name: 'Machine Learning',
            techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API']
          },
          {
            name: 'Natural Language',
            techs: ['GPT Models', 'BERT', 'Spacy', 'NLTK']
          },
          {
            name: 'Integration',
            techs: ['REST APIs', 'GraphQL', 'WebSockets', 'Microservices']
          },
          {
            name: 'Analytics',
            techs: ['Google Analytics 4', 'Mixpanel', 'Amplitude', 'Custom Tracking']
          }
        ]
      }
    },
    'agentic-chatbots': {
      overview: {
        title: 'Agentic Chatbots',
        description: `Deploy intelligent chatbots that understand context, learn from interactions, and provide human-like customer service experiences.`,
        keyPoints: [
          'Natural language processing capabilities',
          'Context-aware conversation handling',
          'Multi-language support for diverse audiences',
          'Integration with business systems',
          'Lead qualification and routing',
          '24/7 automated customer support'
        ]
      },
      process: {
        title: 'Chatbot Development Process',
        steps: [
          {
            step: '01',
            title: 'Requirements Analysis',
            description: 'Define chatbot objectives, use cases, and integration requirements.',
            duration: '1 week'
          },
          {
            step: '02',
            title: 'Conversation Design',
            description: 'Design conversation flows and train the AI model with relevant data.',
            duration: '2-3 weeks'
          },
          {
            step: '03',
            title: 'Development & Integration',
            description: 'Build the chatbot and integrate it with your website and business systems.',
            duration: '3-4 weeks'
          },
          {
            step: '04',
            title: 'Training & Optimization',
            description: 'Continuously train and optimize the chatbot based on user interactions.',
            duration: 'Ongoing'
          }
        ]
      },
      technologies: {
        title: 'Chatbot Technologies',
        categories: [
          {
            name: 'AI Platforms',
            techs: ['OpenAI GPT', 'Dialogflow', 'Microsoft Bot Framework', 'Rasa']
          },
          {
            name: 'Integration',
            techs: ['WhatsApp API', 'Facebook Messenger', 'Slack', 'Custom APIs']
          },
          {
            name: 'Analytics',
            techs: ['Conversation Analytics', 'User Behavior Tracking', 'Performance Metrics']
          },
          {
            name: 'Deployment',
            techs: ['Cloud Hosting', 'Serverless Functions', 'Docker', 'Kubernetes']
          }
        ]
      }
    }
  };

  const currentService = serviceDetails[selectedService] || serviceDetails['website-development'];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'process', label: 'Process', icon: 'GitBranch' },
    { id: 'technologies', label: 'Technologies', icon: 'Settings' }
  ];

  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 font-body font-medium text-sm transition-all duration-200 ease-in-out border-b-2 ${
                activeTab === tab.id
                  ? 'border-accent text-accent' :'border-transparent text-text-secondary hover:text-accent hover:border-accent/50'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
                  {currentService.overview.title}
                </h2>
                <p className="font-body text-lg text-text-secondary leading-relaxed">
                  {currentService.overview.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {currentService.overview.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-surface rounded-lg">
                    <Icon name="Check" size={20} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="font-body text-text-primary">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
                  {currentService.process.title}
                </h2>
                <p className="font-body text-lg text-text-secondary">
                  Our proven methodology ensures successful project delivery
                </p>
              </div>

              <div className="space-y-6">
                {currentService.process.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6 p-6 bg-surface rounded-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-heading font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-heading font-semibold text-lg text-primary">
                          {step.title}
                        </h3>
                        <span className="font-body text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="font-body text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'technologies' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
                  {currentService.technologies.title}
                </h2>
                <p className="font-body text-lg text-text-secondary">
                  We use cutting-edge technologies to deliver exceptional results
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {currentService.technologies.categories.map((category, index) => (
                  <div key={index} className="bg-surface rounded-lg p-6">
                    <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.techs.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full font-body text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <h3 className="font-heading font-semibold text-xl text-primary mb-4">
            Ready to Get Started?
          </h3>
          <p className="font-body text-text-secondary mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with our expert services.
          </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
  
  {/* Schedule Consultation Button */}
<button
  onClick={handleScheduleConsultation}
  className="group flex items-center justify-center gap-3 px-8 py-3 font-semibold text-text-primary bg-black/5 backdrop-blur-md border border-black/10 rounded-full transition-all duration-300 hover:bg-black/10 hover:border-black/20"
>
  <Icon name="Calendar" size={20} className="transition-transform duration-300 group-hover:scale-110" />
  <span>Schedule Consultation</span>
</button>
  
  {/* Download Brochure Button */}
<button
  onClick={handleDownloadBrochure}
  disabled={isDownloading}
  className="group flex items-center justify-center gap-3 px-8 py-3 font-semibold text-text-primary bg-black/5 backdrop-blur-md border border-black/10 rounded-full transition-all duration-300 hover:bg-black/10 hover:border-black/20 disabled:opacity-50 disabled:cursor-not-allowed"
>
  <Icon name="Download" size={20} className="transition-transform duration-300 group-hover:scale-110" />
  <span>{isDownloading ? 'Downloading...' : 'Download Brochure'}</span>
</button>

</div>
        </div>
      </div>
      {/* This renders our brochure off-screen so we can capture it */}
<div style={{ position: 'absolute', left: '-9999px', top: 0, zIndex: -1 }}>
  <Brochure id="brochure-to-download" service={currentService} />
</div>
    </section>
  );
};

export default ServiceDetails;