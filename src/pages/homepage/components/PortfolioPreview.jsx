import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: "Nairobi Fashion Hub",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "AI-powered fashion e-commerce platform with personalized recommendations",
      technologies: ["React", "AI/ML", "Payment Gateway", "Inventory Management"],
      results: "300% increase in online sales",
      link: "/portfolio"
    },
    {
      id: 2,
      title: "TechStart Kenya",
      category: "Startup Website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Modern startup website with integrated AI chatbot for customer support",
      technologies: ["React", "AI Chatbot", "Analytics", "CRM Integration"],
      results: "500% increase in lead generation",
      link: "/portfolio"
    },
    {
      id: 3,
      title: "Savannah Tours",
      category: "Tourism",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop",
      description: "Tourism website with booking system and virtual tour integration",
      technologies: ["Booking System", "Virtual Tours", "SEO", "Mobile App"],
      results: "Triple booking inquiries",
      link: "/portfolio"
    },
    {
      id: 4,
      title: "Rift Valley NGO",
      category: "Non-Profit",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      description: "NGO website with donation system and volunteer management",
      technologies: ["Donation Gateway", "Volunteer Portal", "CMS", "Analytics"],
      results: "Streamlined operations",
      link: "/portfolio"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            Our <span className="text-accent">Recent Work</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore some of our latest projects and see how we've helped businesses across Kenya transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out card-elevation group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-background/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-body font-medium">
                    {project.category}
                  </span>
                </div>

                {/* View Project Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to={project.link}>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="btn-hover-scale"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-primary mb-3">
                  {project.title}
                </h3>
                
                <p className="font-body text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-background rounded text-xs font-body text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="flex items-center gap-2 text-accent">
                  <Icon name="TrendingUp" size={16} />
                  <span className="font-body text-sm font-medium">
                    {project.results}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-surface rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="font-body text-text-secondary mb-6 leading-relaxed">
              Join the growing list of successful businesses that have transformed their digital presence with Evoq Creative Tech.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  size="md"
                  className="btn-hover-scale"
                  iconName="Eye"
                  iconPosition="left"
                >
                  View Full Portfolio
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="md"
                  className="btn-hover-scale"
                  iconName="MessageSquare"
                  iconPosition="left"
                >
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;