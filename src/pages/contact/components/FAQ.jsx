import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: `Website development timelines vary based on complexity:\n\n• Starter Package: 1-2 weeks\n• Business Package: 2-3 weeks\n• Premium Package: 3-4 weeks\n• Elite Package: 4-6 weeks\n\nTimelines may extend based on content availability and revision rounds. We provide detailed project schedules during consultation.`
    },
    {
      question: 'What is included in your pricing packages?',
      answer: `Each package includes different features:\n\n• Starter (KES 25,000): Basic website with essential pages\n• Business (KES 55,000): Professional site with advanced features\n• Premium (KES 75,000+): Custom design with premium functionality\n• Elite (KES 150,000+): Enterprise-level with AI integration\n\nAll packages include hosting setup, basic SEO, and mobile optimization.`
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: `Yes, we offer comprehensive support:\n\n• 30-day free support after launch\n• Monthly maintenance packages available\n• Content updates and security monitoring\n• Performance optimization\n• Technical support via WhatsApp and email\n\nMaintenance packages start from KES 5,000/month.`
    },
    {
      question: 'Can you work with clients outside Kenya?',
      answer: `Absolutely! We serve clients across Africa and globally:\n\n• Remote collaboration via video calls\n• Project management through digital tools\n• Multiple payment options available\n• Timezone-flexible communication\n• Local market expertise for African businesses\n\nWe've successfully delivered projects across East Africa, West Africa, and beyond.`
    },
    {
      question: 'What payment methods do you accept?',
      answer: `We offer flexible payment options:\n\n• M-Pesa (Paybill: 123456)\n• Bank transfers (local and international)\n• PayPal for international clients\n• Cryptocurrency payments\n• Installment plans available\n\nTypically, we require 50% upfront and 50% upon completion.`
    },
    {
      question: 'Do you provide AI-powered website features?',
      answer: `Yes, we specialize in AI integration:\n\n• Intelligent chatbots for customer service\n• AI-powered content recommendations\n• Automated lead qualification\n• Smart search functionality\n• Personalized user experiences\n• Analytics and insights dashboards\n\nAI features are available in Premium and Elite packages, with custom solutions for specific needs.`
    },
    {
      question: 'What if I need changes after the website is live?',
      answer: `We provide flexible post-launch support:\n\n• Minor content updates included in first 30 days\n• Additional changes quoted separately\n• Training provided for content management\n• Emergency support available\n• Redesign services for major changes\n\nWe maintain long-term relationships with our clients and are always available for updates and improvements.`
    },
    {
      question: 'How do you ensure website security and performance?',
      answer: `Security and performance are our priorities:\n\n• SSL certificates for all websites\n• Regular security updates and monitoring\n• Performance optimization and caching\n• Daily backups and disaster recovery\n• Mobile-first responsive design\n• SEO optimization included\n\nWe use industry-standard security practices and performance optimization techniques.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and pricing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface rounded-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background/50 transition-colors duration-200"
              >
                <h3 className="font-heading font-semibold text-lg text-primary pr-4">
                  {faq.question}
                </h3>
                <Icon
                  name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-text-secondary flex-shrink-0"
                />
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-border">
                    <p className="font-body text-text-secondary whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-accent/10 rounded-lg p-6">
            <h3 className="font-heading font-semibold text-xl text-primary mb-2">
              Still have questions?
            </h3>
            <p className="font-body text-text-secondary mb-4">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+254700000000';
                  const message = encodeURIComponent('Hi! I have a question that\'s not covered in your FAQ. Can you help?');
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-success hover:bg-success/90 text-success-foreground font-body font-medium rounded-lg transition-colors duration-200"
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Chat on WhatsApp
              </button>
              <button
                onClick={() => window.location.href = 'mailto:hello@evoqcreativetech.com'}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-medium rounded-lg transition-colors duration-200"
              >
                <Icon name="Mail" size={18} className="mr-2" />
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;