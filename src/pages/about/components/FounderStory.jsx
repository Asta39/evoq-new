import React from 'react';
import Icon from '../../../components/AppIcon';

const FounderStory = () => {
  const storyData = {
    journey: [
      {
        phase: "The Beginning",
        year: "2024",
        description: `Started as an IT student at the Kenyatta University with a passion for solving real-world problems through technology. My first project was building a full website for a wedding company.`,
        icon: "Lightbulb"
      },
      {
        phase: "Learning & Growth",
        year: "2024",
        description: `Worked with various startups across Nairobi, learning the ins and outs of web development, user experience design, and the unique challenges facing Kenyan businesses in the digital space.`,
        icon: "TrendingUp"
      },
      {
        phase: "Vision Formation",
        year: "2024",
        description: `Realized that many Kenyan businesses were being left behind in the digital transformation. I saw an opportunity to bridge this gap with affordable, high-quality digital solutions tailored for the local market.`,
        icon: "Eye"
      },
      {
        phase: "Evoq Creative Tech",
        year: "2025",
        description: `Founded Evoq Creative Tech with a mission to democratize access to premium digital solutions for Kenyan businesses. Started with a small team of passionate developers and designers.`,
        icon: "Rocket"
      },
      {
        phase: "AI Integration",
        year: "2025",
        description: `Pioneered AI-enhanced web solutions in Kenya, helping businesses leverage artificial intelligence for better customer experiences, automated workflows, and data-driven decision making.`,
        icon: "Brain"
      },
      {
        phase: "Future Vision",
        year: "2025+",
        description: `Expanding across East Africa while maintaining our commitment to innovation, quality, and empowering local businesses with world-class digital solutions that drive real growth.`,
        icon: "Globe"
      }
    ],
    personalMission: `My personal mission is to prove that world-class digital innovation can come from anywhere - including right here in Kenya. Every project we take on is an opportunity to showcase African talent and creativity on the global stage.`,
    values: [
      "Innovation without compromise",
      "Local understanding, global standards",
      "Empowering businesses through technology",
      "Building lasting partnerships"
    ]
  };

  return (
    <section id="founder-story" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            My Journey
          </h2>
          <p className="font-body text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {storyData.personalMission}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent transform md:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {storyData.journey.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full transform md:-translate-x-1.5 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 card-elevation">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name={item.icon} size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-primary">
                          {item.phase}
                        </h3>
                        <span className="font-body text-sm text-accent font-medium">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <p className="font-body text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Values */}
        <div className="mt-20 bg-gradient-to-r from-surface to-background rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
              Core Values That Drive Me
            </h3>
            <p className="font-body text-text-secondary">
              These principles guide every decision and project at Evoq Creative Tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storyData.values.map((value, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="font-body text-text-primary font-medium">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;