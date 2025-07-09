import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Phone',
      title: 'Phone',
      primary: '+254 700 000 000',
      secondary: '+254 711 000 000',
      action: () => window.location.href = 'tel:+254700000000'
    },
    {
      icon: 'Mail',
      title: 'Email',
      primary: 'hello@evoqcreativetech.com',
      secondary: 'projects@evoqcreativetech.com',
      action: () => window.location.href = 'mailto:hello@evoqcreativetech.com'
    },
    {
      icon: 'MapPin',
      title: 'Office',
      primary: 'Nairobi, Kenya',
      secondary: 'Available for remote projects across Africa',
      action: null
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: 'https://facebook.com/evoqcreativetech',
      color: 'text-blue-600'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/evoqcreativetech',
      color: 'text-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/company/evoqcreativetech',
      color: 'text-blue-700'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/evoqcreativetech',
      color: 'text-blue-500'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Get In Touch
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Multiple ways to reach us. Choose what works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
              {contactDetails.map((detail, index) => (
                <div
                  key={index}
                  className={`bg-background rounded-lg p-6 shadow-sm ${
                    detail.action ? 'cursor-pointer hover:shadow-md transition-shadow duration-200' : ''
                  }`}
                  onClick={detail.action}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={detail.icon} size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                        {detail.title}
                      </h3>
                      <p className="font-body text-text-primary mb-1">
                        {detail.primary}
                      </p>
                      <p className="font-body text-sm text-text-secondary">
                        {detail.secondary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-primary mb-4 flex items-center">
                <Icon name="Clock" size={20} className="mr-2 text-accent" />
                Business Hours
              </h3>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-body text-text-primary">{schedule.day}</span>
                    <span className="font-body text-text-secondary">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="font-body text-sm text-success font-medium">
                    Currently Available
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="md"
                    onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
                    className={`p-3 ${social.color} hover:bg-surface`}
                    iconName={social.icon}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="font-heading font-semibold text-lg text-primary mb-4 flex items-center">
              <Icon name="MapPin" size={20} className="mr-2 text-accent" />
              Our Location
            </h3>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Evoq Creative Tech Office Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=-1.2921,36.8219&z=14&output=embed"
                className="border-0"
              />
            </div>
            <div className="mt-4 p-4 bg-surface rounded-lg">
              <p className="font-body text-sm text-text-secondary">
                <strong className="text-text-primary">Address:</strong> Nairobi, Kenya
              </p>
              <p className="font-body text-sm text-text-secondary mt-1">
                We serve clients across Kenya and Africa with remote collaboration capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;