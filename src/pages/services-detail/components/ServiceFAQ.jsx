import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceFAQ = ({ selectedService }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = {
    'website-development': [
      {
        question: 'How long does it take to develop a website?',
        answer: 'The timeline depends on the complexity of your project. A basic website typically takes 4-6 weeks, while more complex sites with custom features can take 8-12 weeks. We provide a detailed timeline during the planning phase.'
      },
      {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Yes, we offer comprehensive maintenance packages that include security updates, content updates, performance monitoring, and technical support. We also provide training so you can manage basic content updates yourself.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices including smartphones, tablets, and desktops.'
      },
      {
        question: 'Can you help with content creation?',
        answer: 'Yes, we offer content creation services including copywriting, photography coordination, and graphic design. We can also help optimize existing content for better SEO performance.'
      },
      {
        question: 'What if I need changes after the website is launched?',
        answer: 'We provide a 30-day post-launch support period for minor adjustments. For major changes or ongoing updates, we offer flexible maintenance packages or project-based services.'
      }
    ],
    'website-rebranding': [
      {
        question: 'Will rebranding affect my current SEO rankings?',
        answer: 'We take special care to preserve your SEO value during rebranding. We implement proper 301 redirects, maintain URL structures where possible, and ensure all SEO elements are properly migrated.'
      },
      {
        question: 'How do you ensure brand consistency across all pages?',
        answer: 'We develop comprehensive brand guidelines and style systems that ensure consistency across all pages. Our design process includes creating reusable components and templates.'
      },
      {
        question: 'Can you work with our existing content?',
        answer: 'Yes, we can migrate and optimize your existing content to fit the new brand identity. We also help identify content that may need updating or refreshing to align with your new brand.'
      },
      {
        question: 'What happens to our existing domain and hosting?',
        answer: 'Your domain and hosting can remain the same. We work with your current setup or can recommend better hosting solutions if needed. The rebranding focuses on design and content, not infrastructure changes.'
      }
    ],
    'seo-digital-visibility': [
      {
        question: 'How long before I see SEO results?',
        answer: 'SEO is a long-term strategy. You may start seeing improvements in 3-6 months, with significant results typically appearing after 6-12 months. We provide monthly reports to track progress.'
      },
      {
        question: 'Do you guarantee first-page rankings?',
        answer: 'While we cannot guarantee specific rankings (no ethical SEO company can), we guarantee to follow best practices and provide transparent reporting on your progress and improvements.'
      },
      {
        question: 'What makes your SEO different for Kenyan businesses?',
        answer: 'We understand the Kenyan market, local search behaviors, and competition. We optimize for local keywords, set up Google My Business, and understand the unique challenges of the Kenyan digital landscape.'
      },
      {
        question: 'Do you handle technical SEO issues?',
        answer: 'Yes, we address technical SEO issues including site speed optimization, mobile responsiveness, crawlability, indexing issues, and structured data implementation.'
      }
    ],
    'ai-powered-websites': [
      {
        question: 'What AI features can be integrated into my website?',
        answer: 'We can integrate chatbots, personalization engines, content recommendations, automated customer support, predictive analytics, and intelligent search functionality based on your needs.'
      },
      {
        question: 'Is AI integration expensive?',
        answer: 'AI integration costs vary based on complexity. We offer scalable solutions starting with basic chatbots and can expand to more sophisticated AI features as your business grows.'
      },
      {
        question: 'How do you ensure AI features work reliably?',
        answer: 'We thoroughly test all AI implementations, use proven AI platforms and APIs, implement fallback systems, and provide ongoing monitoring and optimization to ensure reliable performance.'
      },
      {
        question: 'Can AI features be added to existing websites?',
        answer: 'Yes, many AI features can be integrated into existing websites. We assess your current site and recommend the best approach for seamless AI integration.'
      }
    ],
    'agentic-chatbots': [
      {
        question: 'How intelligent are your chatbots?',
        answer: 'Our chatbots use advanced NLP and machine learning to understand context, handle complex queries, and provide human-like responses. They continuously learn from interactions to improve over time.'
      },
      {
        question: 'Can the chatbot handle multiple languages?',
        answer: 'Yes, our chatbots can be configured to handle multiple languages including English, Swahili, and other local languages relevant to your audience.'
      },
      {
        question: 'How does the chatbot integrate with my business systems?',
        answer: 'We can integrate chatbots with your CRM, email marketing tools, booking systems, and other business applications to provide seamless customer experiences and data flow.'
      },
      {
        question: 'What happens when the chatbot cannot answer a question?',
        answer: 'Our chatbots are designed with escalation protocols. When they encounter complex queries, they can seamlessly transfer the conversation to human agents or collect contact information for follow-up.'
      }
    ]
  };

  const currentFAQs = faqData[selectedService] || faqData['website-development'];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-surface py-16">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {currentFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface/50 transition-colors duration-200 ease-in-out"
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
                    <p className="font-body text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <h3 className="font-heading font-semibold text-xl text-primary mb-4">
            Still Have Questions?
          </h3>
          <p className="font-body text-text-secondary mb-6">
            Our team is here to help you with any additional questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/254700000000?text=Hi! I have some questions about your services.', '_blank')}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-success hover:bg-success/90 text-success-foreground font-body font-medium rounded-lg transition-colors duration-200 ease-in-out btn-hover-scale"
            >
              <Icon name="MessageCircle" size={18} />
              <span>Chat on WhatsApp</span>
            </button>
            <button className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-medium rounded-lg transition-colors duration-200 ease-in-out btn-hover-scale">
              <Icon name="Mail" size={18} />
              <span>Send Email</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;