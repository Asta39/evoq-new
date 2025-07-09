import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PortfolioHero = () => {
  const handleStartProject = () => {
    window.location.href = '/contact';
  };

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '15+', label: 'Industries Served' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-medium mb-6">
            <Icon name="Briefcase" size={16} className="mr-2" />
            Our Work Portfolio
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            Transforming Ideas Into
            <span className="block text-accent">Digital Excellence</span>
          </h1>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore our curated collection of successful projects that showcase our expertise in web development, AI integration, and digital transformation across diverse industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleStartProject}
              iconName="ArrowRight"
              iconPosition="right"
              className="btn-hover-scale"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('portfolio-grid').scrollIntoView({ behavior: 'smooth' })}
              iconName="Eye"
              iconPosition="left"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-accent mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm md:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-8 md:h-12 fill-background"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
};

export default PortfolioHero;