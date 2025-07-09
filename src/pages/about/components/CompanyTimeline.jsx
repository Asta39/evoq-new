import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const timelineData = [
    {
      year: "2021",
      title: "Company Founded",
      description: "Evoq Creative Tech was established with a vision to transform the Kenyan digital landscape. Started with a small team of 3 passionate developers.",
      icon: "Rocket",
      achievements: ["First 5 clients acquired", "Basic web development services launched", "Office established in Nairobi"]
    },
    {
      year: "2022",
      title: "Rapid Growth",
      description: "Expanded our service offerings and team size. Introduced comprehensive digital marketing solutions and established partnerships with key technology providers.",
      icon: "TrendingUp",
      achievements: ["Team grew to 8 members", "50+ projects completed", "Digital marketing services launched", "First enterprise client acquired"]
    },
    {
      year: "2023",
      title: "AI Integration Pioneer",
      description: "Became the first Kenyan agency to offer AI-enhanced web solutions. Launched chatbot development services and machine learning integration capabilities.",
      icon: "Brain",
      achievements: ["AI solutions department established", "100+ projects milestone reached", "Chatbot development services launched", "Industry recognition received"]
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Established ourselves as a leading digital agency in Kenya. Expanded client base across East Africa and introduced premium enterprise solutions.",
      icon: "Award",
      achievements: ["150+ projects completed", "98% client satisfaction rate", "East Africa expansion", "Premium enterprise packages launched"]
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Planning to expand across Africa while maintaining our commitment to innovation and quality. Focus on emerging technologies and sustainable growth.",
      icon: "Globe",
      achievements: ["Pan-African expansion planned", "Emerging tech integration", "Sustainability initiatives", "Advanced AI solutions roadmap"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              <Icon name="Clock" size={16} className="mr-2" />
              Our Journey
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            Milestones That Define Us
          </h2>
          <p className="font-body text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From a small startup to a leading digital agency, here's how we've grown and evolved to serve our clients better with each passing year.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-success transform md:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transform md:-translate-x-2 z-10 shadow-lg"></div>

                {/* Year Badge */}
                <div className={`absolute left-20 md:left-1/2 top-0 ${index % 2 === 0 ? 'md:-translate-x-20' : 'md:translate-x-4'} transform md:-translate-y-1`}>
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    {item.year}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 mt-8 md:mt-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-elevation border border-border">
                    {/* Icon & Title */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name={item.icon} size={24} className="text-accent" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-primary">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="font-body text-text-secondary leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-primary mb-3 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0"></div>
                            <span className="font-body text-sm text-text-secondary">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-accent/10">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
              Where We Stand Today
            </h3>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              These numbers represent our commitment to excellence and the trust our clients place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-accent mb-2">
                150+
              </div>
              <div className="font-body text-sm text-text-secondary">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-success mb-2">
                98%
              </div>
              <div className="font-body text-sm text-text-secondary">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">
                3+
              </div>
              <div className="font-body text-sm text-text-secondary">
                Years of Excellence
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-warning mb-2">
                10+
              </div>
              <div className="font-body text-sm text-text-secondary">
                Team Members
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;