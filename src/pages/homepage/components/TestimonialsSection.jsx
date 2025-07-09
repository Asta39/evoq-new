import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      position: "CEO, Nairobi Fashion Hub",
      company: "Fashion Retail",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `Evoq Creative Tech transformed our online presence completely. The AI-powered website they built for us has increased our online sales by 300% in just 6 months. Their understanding of the Kenyan market is exceptional.`,
      rating: 5,
      project: "E-commerce Website with AI Recommendations"
    },
    {
      id: 2,
      name: "James Mwangi",
      position: "Founder, TechStart Kenya",
      company: "Technology Startup",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `The team at Evoq delivered beyond our expectations. Our startup needed a professional website that could scale with our growth, and they provided exactly that. The agentic chatbot has revolutionized our customer support.`,
      rating: 5,
      project: "Startup Website with AI Chatbot"
    },
    {
      id: 3,
      name: "Grace Akinyi",
      position: "Marketing Director, Savannah Tours",
      company: "Tourism & Travel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Working with Evoq was a game-changer for our tourism business. The website redesign and SEO optimization brought us to the first page of Google. Our booking inquiries have tripled since the launch.`,
      rating: 5,
      project: "Tourism Website Redesign & SEO"
    },
    {
      id: 4,
      name: "David Kiprop",
      position: "Director, Rift Valley NGO",
      company: "Non-Profit Organization",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Evoq Creative Tech understood our mission and created a website that perfectly represents our cause. The donation integration and volunteer management system have streamlined our operations significantly.`,
      rating: 5,
      project: "NGO Website with Donation System"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what businesses across Kenya are saying about their experience with Evoq Creative Tech.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Quote" size={32} className="text-accent" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <p className="font-body text-lg md:text-xl text-text-primary leading-relaxed mb-6">
                "{currentData.content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentData.rating)].map((_, index) => (
                  <Icon key={index} name="Star" size={20} className="text-warning fill-current" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Image
                  src={currentData.avatar}
                  alt={currentData.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-heading font-semibold text-lg text-primary">
                    {currentData.name}
                  </h4>
                  <p className="font-body text-sm text-text-secondary">
                    {currentData.position}
                  </p>
                  <p className="font-body text-xs text-accent">
                    {currentData.company}
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-surface rounded-full">
                <Icon name="Briefcase" size={16} className="text-accent mr-2" />
                <span className="font-body text-sm text-text-secondary">
                  {currentData.project}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-background hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-200 ease-in-out shadow-sm btn-hover-scale"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ease-in-out ${
                    index === currentTestimonial
                      ? 'bg-accent' :'bg-border hover:bg-accent/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-background hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-200 ease-in-out shadow-sm btn-hover-scale"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "100+", label: "Projects Completed" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-accent mb-2">
                {stat.number}
              </div>
              <div className="font-body text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;