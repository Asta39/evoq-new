import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyValues = () => {
  const valuesData = [
    {
      icon: "Lightbulb",
      title: "Innovation First",
      description: "We stay ahead of technology trends, constantly exploring new tools and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.",
      color: "accent"
    },
    {
      icon: "Heart",
      title: "Client Success",
      description: "Your success is our success. We build long-term partnerships by understanding your business goals and delivering solutions that drive measurable results.",
      color: "success"
    },
    {
      icon: "MapPin",
      title: "Local Expertise",
      description: "Deep understanding of the Kenyan market, local business practices, and cultural nuances allows us to create solutions that truly resonate with your target audience.",
      color: "warning"
    },
    {
      icon: "Award",
      title: "Quality Excellence",
      description: "We never compromise on quality. Every project undergoes rigorous testing and optimization to ensure it meets international standards and exceeds expectations.",
      color: "primary"
    },
    {
      icon: "Users",
      title: "Collaborative Approach",
      description: "We believe in transparent communication and collaborative development. You're involved in every step of the process, ensuring the final product aligns with your vision.",
      color: "accent"
    },
    {
      icon: "Zap",
      title: "Agile Delivery",
      description: "Fast-paced development cycles with regular updates and feedback loops ensure your project stays on track and adapts to changing requirements efficiently.",
      color: "success"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      accent: "bg-accent/10 text-accent border-accent/20",
      success: "bg-success/10 text-success border-success/20",
      warning: "bg-warning/10 text-warning border-warning/20",
      primary: "bg-primary/10 text-primary border-primary/20"
    };
    return colorMap[color] || colorMap.accent;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-surface to-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
              <Icon name="Star" size={16} className="mr-2" />
              Our Values
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            What Drives Us Forward
          </h2>
          <p className="font-body text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            These core values shape our culture, guide our decisions, and ensure we deliver exceptional results for every client we serve.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-elevation border border-border hover:border-accent/30"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border mb-6 ${getColorClasses(value.color)} group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={value.icon} size={24} />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="font-body text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-accent/10">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
              Experience These Values in Action
            </h3>
            <p className="font-body text-text-secondary mb-6 max-w-2xl mx-auto">
              Ready to work with a team that puts your success first? Let's discuss how our values-driven approach can transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hi! I'd like to learn more about how Evoq Creative Tech can help with my project.");
                  window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-colors duration-200 btn-hover-scale"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Start Conversation
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-surface text-primary border border-border hover:border-accent font-medium rounded-lg transition-all duration-200 btn-hover-scale"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;