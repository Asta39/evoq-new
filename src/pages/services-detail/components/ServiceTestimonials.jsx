import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceTestimonials = ({ selectedService }) => {
  const testimonialData = {
    'website-development': [
      {
        id: 1,
        name: 'Sarah Mwangi',
        position: 'CEO, TechStart Kenya',
        company: 'TechStart Kenya',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c5b1b7?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        text: `Evoq Creative Tech delivered an exceptional website that perfectly captures our brand identity. The development process was smooth, and they provided excellent support throughout. Our online presence has significantly improved since launch.`,
        project: 'Corporate Website Development'
      },
      {
        id: 2,
        name: 'James Kiprotich',
        position: 'Founder, AgriTech Solutions',
        company: 'AgriTech Solutions',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        text: `The team's technical expertise and attention to detail impressed us. They built a robust platform that handles our complex requirements perfectly. The website is fast, secure, and user-friendly.`,
        project: 'E-commerce Platform Development'
      }
    ],
    'website-rebranding': [
      {
        id: 3,
        name: 'Grace Wanjiku',position: 'Marketing Director, Retail Plus',company: 'Retail Plus',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',rating: 5,text: `Our website rebranding exceeded all expectations. The new design is modern, professional, and perfectly aligned with our brand evolution. Customer engagement has increased by 40% since the relaunch.`,project: 'Complete Website Rebranding'
      },
      {
        id: 4,
        name: 'Michael Ochieng',position: 'Operations Manager, LogiFlow',company: 'LogiFlow',avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        text: `The rebranding process was seamless and professional. They maintained our SEO rankings while completely transforming our visual identity. The results speak for themselves - improved user experience and higher conversion rates.`,
        project: 'Brand Identity & Website Refresh'
      }
    ],
    'seo-digital-visibility': [
      {
        id: 5,
        name: 'Patricia Nyong',position: 'Digital Marketing Lead, EduTech Kenya',company: 'EduTech Kenya',avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        text: `Our organic traffic increased by 300% within 6 months of working with Evoq Creative Tech. Their SEO strategies are data-driven and results-focused. We now rank on the first page for all our target keywords.`,
        project: 'Comprehensive SEO Campaign'
      },
      {
        id: 6,
        name: 'David Mutua',position: 'Business Owner, Local Services Pro',company: 'Local Services Pro',avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        text: `The local SEO work they did for us was outstanding. We now appear in local search results and Google My Business has become a major source of leads. Their understanding of the Kenyan market is exceptional.`,
        project: 'Local SEO Optimization'
      }
    ],
    'ai-powered-websites': [
      {
        id: 7,
        name: 'Dr. Anne Kariuki',position: 'Director, HealthTech Innovations',company: 'HealthTech Innovations',avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        text: `The AI-powered features on our website have revolutionized how we interact with patients. The intelligent appointment system and personalized content recommendations have improved user satisfaction significantly.`,
        project: 'AI-Enhanced Healthcare Platform'
      },
      {
        id: 8,
        name: 'Robert Kimani',position: 'CTO, FinTech Solutions',company: 'FinTech Solutions',avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',rating: 5,text: `The AI integration was seamless and powerful. Our users now get personalized financial insights and automated support. The technology is cutting-edge yet user-friendly. Excellent work by the team.`,project: 'AI-Powered Financial Dashboard'
      }
    ],
    'agentic-chatbots': [
      {
        id: 9,
        name: 'Linda Akinyi',position: 'Customer Success Manager, Support Pro',company: 'Support Pro',avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        text: `Our AI chatbot handles 80% of customer inquiries automatically while maintaining a human-like conversation quality. Customer satisfaction scores have improved, and our support team can focus on complex issues.`,
        project: 'Intelligent Customer Support Bot'
      },
      {
        id: 10,
        name: 'Peter Waweru',position: 'Sales Director, Lead Gen Pro',company: 'Lead Gen Pro',avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        text: `The chatbot has become our best sales agent! It qualifies leads, schedules appointments, and provides instant responses 24/7. Our conversion rate has increased by 60% since implementation.`,
        project: 'Lead Generation Chatbot'
      }
    ]
  };

  const currentTestimonials = testimonialData[selectedService] || testimonialData['website-development'];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-warning fill-current' : 'text-border'}
      />
    ));
  };

  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform their digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface rounded-lg p-6 border border-border hover:shadow-md transition-shadow duration-200 ease-in-out"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-sm text-text-secondary">
                    {testimonial.position}
                  </p>
                  <p className="font-body text-sm text-accent">
                    {testimonial.company}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Project Tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full font-body text-xs">
                  {testimonial.project}
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="font-body text-text-primary leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Quote Icon */}
              <div className="flex justify-end mt-4">
                <Icon name="Quote" size={24} className="text-accent/30" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading font-bold text-3xl text-accent mb-2">
                150+
              </div>
              <p className="font-body text-text-secondary">
                Projects Completed
              </p>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-accent mb-2">
                98%
              </div>
              <p className="font-body text-text-secondary">
                Client Satisfaction
              </p>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-accent mb-2">
                5+
              </div>
              <p className="font-body text-text-secondary">
                Years Experience
              </p>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-accent mb-2">
                24/7
              </div>
              <p className="font-body text-text-secondary">
                Support Available
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="font-heading font-semibold text-xl text-primary mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="font-body text-text-secondary mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <button
            onClick={() => window.open('https://wa.me/254700000000?text=Hi! I\'d like to discuss my project and join your success stories.', '_blank')}
            className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-medium rounded-lg transition-colors duration-200 ease-in-out btn-hover-scale"
          >
            <Icon name="MessageCircle" size={18} />
            <span>Start Your Success Story</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;