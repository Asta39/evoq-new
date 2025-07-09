import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FounderHero = () => {
  const founderData = {
    name: "David Kimani",
    title: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    mission: `Building the future of digital experiences in Kenya, one innovative solution at a time. My vision is to empower African businesses with cutting-edge technology that drives real growth and transformation.`,
    experience: "8+ Years",
    projectsCompleted: "150+",
    clientsSatisfied: "98%"
  };

  const handleConsultation = () => {
    const message = encodeURIComponent("Hi David! I'd like to schedule a consultation to discuss my project needs.");
    window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-background via-surface to-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                <Icon name="User" size={16} className="mr-2" />
                Meet Our Founder
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              {founderData.name}
            </h1>
            
            <p className="font-body text-lg md:text-xl text-accent font-medium mb-6">
              {founderData.title}
            </p>

            <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed mb-8">
              {founderData.mission}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-primary mb-1">
                  {founderData.experience}
                </div>
                <div className="font-body text-sm text-text-secondary">
                  Experience
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-primary mb-1">
                  {founderData.projectsCompleted}
                </div>
                <div className="font-body text-sm text-text-secondary">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-primary mb-1">
                  {founderData.clientsSatisfied}
                </div>
                <div className="font-body text-sm text-text-secondary">
                  Satisfaction
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleConsultation}
                iconName="MessageCircle"
                iconPosition="right"
                className="btn-hover-scale"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('founder-story').scrollIntoView({ behavior: 'smooth' })}
                iconName="ArrowDown"
                iconPosition="right"
                className="btn-hover-scale"
              >
                Read My Story
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-background rounded-2xl p-2 shadow-lg">
                <Image
                  src={founderData.image}
                  alt={`${founderData.name} - Founder & CEO of Evoq Creative Tech`}
                  className="w-full h-96 md:h-[500px] object-cover rounded-xl"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={20} />
                  <span className="font-body font-medium text-sm">
                    Certified Tech Leader
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderHero;