import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const values = [
    {
      icon: "Zap",
      title: "Innovation First",
      description: "We leverage cutting-edge technologies and AI to create solutions that set you apart from the competition."
    },
    {
      icon: "Users",
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you to understand your vision and deliver beyond expectations."
    },
    {
      icon: "Target",
      title: "Results Driven",
      description: "Every project is designed with measurable outcomes in mind, ensuring your investment delivers real business value."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
              Empowering Kenyan Businesses with{' '}
              <span className="text-accent">Digital Excellence</span>
            </h2>
            
            <p className="font-body text-lg text-text-secondary mb-8 leading-relaxed">
              At Evoq Creative Tech, we believe every business deserves a digital presence that not only looks exceptional but performs brilliantly. Founded with a vision to bridge the gap between traditional business and modern technology, we specialize in creating web experiences that drive growth and engagement.
            </p>

            <p className="font-body text-base text-text-secondary mb-10 leading-relaxed">
              Our team combines local market understanding with global best practices, ensuring your digital solutions resonate with your audience while meeting international standards. From startups to enterprises, we've helped businesses across Kenya transform their digital presence and achieve measurable results.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-1 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={value.icon} size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
      // --- CHANGE THIS LINE ---
      src="/assets/images/founder.jpg" // Change filename if yours is different
      alt="David Kimani, Founder of Evoq Creative Tech" // Updated alt text for better SEO
      className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
    />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                  Ian Love
                </h4>
                <p className="font-body text-sm text-text-secondary mb-3">
                  Founder & Lead Developer
                </p>
                <p className="font-body text-xs text-text-secondary leading-relaxed">
                  "Technology should empower businesses, not complicate them. That's why we focus on creating solutions that are both powerful and user-friendly."
                </p>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;