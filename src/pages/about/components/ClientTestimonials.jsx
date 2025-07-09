import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialsData = [
    {
      id: 1,
      name: "Peter Kariuki",
      position: "CEO",
      company: "TechStart Kenya",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop",
      testimonial: `Evoq Creative Tech transformed our online presence completely. Their AI-enhanced website not only looks stunning but has increased our lead generation by 300%. David and his team truly understand the Kenyan market and delivered beyond our expectations.`,
      rating: 5,
      project: "AI-Enhanced Business Website",
      results: "300% increase in leads"
    },
    {
      id: 2,
      name: "Mary Wanjiru",
      position: "Marketing Director",
      company: "Savannah Retail Group",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop",
      testimonial: `The e-commerce platform Evoq built for us has revolutionized our business. Sales have increased by 250% since launch, and the M-Pesa integration works flawlessly. Their attention to detail and understanding of local payment preferences is exceptional.`,
      rating: 5,
      project: "E-commerce Platform Development",
      results: "250% increase in sales"
    },
    {
      id: 3,
      name: "James Muthomi",
      position: "Founder",
      company: "EduTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop",
      testimonial: `Working with Evoq was a game-changer for our educational platform. Their chatbot solution handles 80% of student inquiries automatically, and the learning management system they built is incredibly user-friendly. Highly recommended!`,
      rating: 5,
      project: "Educational Platform & Chatbot",
      results: "80% automated support"
    },
    {
      id: 4,
      name: "Grace Nyambura",
      position: "Operations Manager",
      company: "HealthCare Plus",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop",
      testimonial: `The patient management system Evoq developed has streamlined our operations significantly. Appointment bookings are up 400%, and our staff productivity has improved dramatically. Their post-launch support is outstanding.`,
      rating: 5,
      project: "Healthcare Management System",
      results: "400% more bookings"
    },
    {
      id: 5,
      name: "Samuel Kiprotich",
      position: "Director",
      company: "Agri-Connect Kenya",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop",
      testimonial: `Evoq's agricultural marketplace platform has connected over 5,000 farmers with buyers across Kenya. The mobile-first design and offline capabilities they implemented are perfect for our rural users. Exceptional work!`,
      rating: 5,
      project: "Agricultural Marketplace Platform",
      results: "5,000+ farmers connected"
    },
    {
      id: 6,
      name: "Linda Achieng",
      position: "CEO",
      company: "FinTech Innovations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop",
      testimonial: `The fintech dashboard Evoq created for us is incredibly sophisticated yet user-friendly. Their security implementation is top-notch, and the real-time analytics have improved our decision-making process significantly.`,
      rating: 5,
      project: "FinTech Dashboard Development",
      results: "Enhanced security & analytics"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[activeTestimonial];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-warning fill-current" : "text-border"}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-surface to-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-warning/10 text-warning border border-warning/20">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Client Testimonials
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            What Our Clients Say About Us
          </h2>
          <p className="font-body text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with Evoq Creative Tech.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-border mb-12">
          {/* Navigation Buttons */}
          <div className="absolute top-6 right-6 flex space-x-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-surface hover:bg-accent text-text-secondary hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-200 btn-hover-scale"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-surface hover:bg-accent text-text-secondary hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-200 btn-hover-scale"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Client Info */}
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 mx-auto lg:mx-0 rounded-full overflow-hidden mb-4 ring-4 ring-accent/20">
                <Image
                  src={currentTestimonial.image}
                  alt={`${currentTestimonial.name} - ${currentTestimonial.position}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-heading font-bold text-xl text-primary mb-1">
                {currentTestimonial.name}
              </h3>
              
              <p className="font-body text-accent font-medium mb-2">
                {currentTestimonial.position}
              </p>
              
              <p className="font-body text-text-secondary text-sm mb-4">
                {currentTestimonial.company}
              </p>

              {/* Company Logo */}
              <div className="w-24 h-8 mx-auto lg:mx-0 bg-surface rounded overflow-hidden">
                <Image
                  src={currentTestimonial.logo}
                  alt={`${currentTestimonial.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              {/* Rating */}
              <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                {renderStars(currentTestimonial.rating)}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-lg md:text-xl text-text-primary leading-relaxed mb-6 italic">
                "{currentTestimonial.testimonial}"
              </blockquote>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Briefcase" size={16} className="text-accent" />
                    <span className="font-body text-sm font-medium text-text-secondary">
                      Project Type
                    </span>
                  </div>
                  <p className="font-body text-primary font-medium">
                    {currentTestimonial.project}
                  </p>
                </div>
                
                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                    <span className="font-body text-sm font-medium text-text-secondary">
                      Key Results
                    </span>
                  </div>
                  <p className="font-body text-primary font-medium">
                    {currentTestimonial.results}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeTestimonial
                  ? 'bg-accent scale-125' :'bg-border hover:bg-accent/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-accent/5 to-success/5 rounded-2xl p-8 md:p-12 border border-accent/10">
            <Icon name="MessageCircle" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="font-body text-text-secondary mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative digital solutions that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hi! I'd like to discuss how Evoq Creative Tech can help transform my business.");
                  window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-colors duration-200 btn-hover-scale"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Start Your Success Story
              </button>
              <button
                onClick={() => window.location.href = '/portfolio'}
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-surface text-primary border border-border hover:border-accent font-medium rounded-lg transition-all duration-200 btn-hover-scale"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;