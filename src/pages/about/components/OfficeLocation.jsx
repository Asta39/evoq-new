import React from 'react';
import Icon from '../../../components/AppIcon';

const OfficeLocation = () => {
  const locationData = {
    address: "Nairobi, CBD",
    city: "Nairobi, Kenya",
    phone: "+254 115 706 542",
    email: "evoqcreativetech@gmail.com",
    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
      saturday: "Saturday: 9:00 AM - 2:00 PM",
      sunday: "Sunday: Closed"
    },
    coordinates: {
      lat: -1.2802983833101498,
      lng: 36.82265471554703
    }
  };

  const contactMethods = [
    {
      icon: "MapPin",
      title: "Visit Our Office",
      description: "Drop by our modern office space in the heart of Westlands for a face-to-face consultation.",
      action: "Get Directions",
      color: "accent"
    },
    {
      icon: "Phone",
      title: "Call Us",
      description: "Speak directly with our team to discuss your project requirements and get immediate answers.",
      action: "Call Now",
      color: "success"
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "Send us a detailed message about your project and we\'ll respond within 24 hours.",
      action: "Send Email",
      color: "primary"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp Chat",
      description: "Get instant responses through WhatsApp for quick questions and project discussions.",
      action: "Start Chat",
      color: "warning"
    }
  ];

  const handleContactAction = (method) => {
    switch (method) {
      case "Get Directions":
        window.open(`https://www.google.com/maps/search/?api=1&query=${locationData.coordinates.lat},${locationData.coordinates.lng}`, '_blank');
        break;
      case "Call Now":
        window.open(`tel:${locationData.phone}`, '_self');
        break;
      case "Send Email":
        window.open(`mailto:${locationData.email}?subject=Project Inquiry&body=Hi! I'd like to discuss my project requirements.`, '_self');
        break;
      case "Start Chat":
        const message = encodeURIComponent("Hi! I'd like to discuss my project with your team.");
        window.open(`https://wa.me/254115706542?text=${message}`, '_blank');
        break;
      default:
        break;
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      accent: "bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground",
      success: "bg-success/10 text-success border-success/20 hover:bg-success hover:text-success-foreground",
      primary: "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground",
      warning: "bg-warning/10 text-warning border-warning/20 hover:bg-warning hover:text-warning-foreground"
    };
    return colorMap[color] || colorMap.accent;
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
              <Icon name="MapPin" size={16} className="mr-2" />
              Our Location
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            Visit Us in Nairobi
          </h2>
          <p className="font-body text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Nairobi, our modern office space is designed to foster creativity and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-surface rounded-2xl p-2 shadow-lg border border-border">
              <div className="w-full h-96 rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Evoq Creative Tech Office Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${locationData.coordinates.lat},${locationData.coordinates.lng}&z=15&output=embed`}
                  className="border-0"
                />
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 bg-gradient-to-r from-surface to-background rounded-xl p-6 border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Clock" size={24} className="text-accent" />
                <h3 className="font-heading font-semibold text-xl text-primary">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-body text-text-secondary">Monday - Friday</span>
                  <span className="font-body text-primary font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-text-secondary">Saturday</span>
                  <span className="font-body text-primary font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-text-secondary">Sunday</span>
                  <span className="font-body text-primary font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 mb-8 border border-accent/10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Building" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">
                    Our Office Address
                  </h3>
                  <p className="font-body text-text-secondary leading-relaxed">
                    {locationData.address}<br />
                    {locationData.city}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-success" />
                  <a
                    href={`tel:${locationData.phone}`}
                    className="font-body text-text-primary hover:text-accent transition-colors duration-200"
                  >
                    {locationData.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <a
                    href={`mailto:${locationData.email}`}
                    className="font-body text-text-primary hover:text-accent transition-colors duration-200"
                  >
                    {locationData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl text-primary mb-6">
                Get In Touch
              </h3>
              
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-elevation border border-border hover:border-accent/30 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300 ${getColorClasses(method.color)}`}>
                      <Icon name={method.icon} size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="font-body text-text-secondary text-sm mb-4 leading-relaxed">
                        {method.description}
                      </p>
                      <button
                        onClick={() => handleContactAction(method.action)}
                        className="font-body text-accent hover:text-accent/80 font-medium text-sm transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>{method.action}</span>
                        <Icon name="ArrowRight" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <Icon name="Calendar" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
              Schedule a Visit
            </h3>
            <p className="font-body text-text-secondary mb-6 max-w-2xl mx-auto">
              Planning to visit our office? We'd love to meet you in person! Schedule an appointment to ensure our team is available to give you the attention you deserve.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to schedule a visit to your office to discuss my project.");
                window.open(`https://wa.me/254115706542?text=${message}`, '_blank');
              }}
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-colors duration-200 btn-hover-scale"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;