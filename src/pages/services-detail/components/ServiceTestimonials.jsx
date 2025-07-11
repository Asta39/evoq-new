import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceTestimonials = ({ selectedService }) => {
  const testimonialData = {
    'website-development': [
     

    ],
    'website-rebranding': [
    
     
    ],
    'seo-digital-visibility': [
     
      
    ],
    'ai-powered-websites': [
     
      
    ],
    'agentic-chatbots': [
      
     
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
            Grow with us!
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Let us help your brand scale up in your business niche!
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
                50+
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
                2+
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
            onClick={() => window.open('https://wa.me/254115706542?text=Hi! I\'d like to discuss my project and join your success stories.', '_blank')}
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