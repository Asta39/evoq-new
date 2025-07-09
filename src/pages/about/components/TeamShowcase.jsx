import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamShowcase = () => {
  const teamData = [
    {
      id: 1,
      name: "David Kimani",
      role: "Founder & CEO",
      expertise: ["Full-Stack Development", "AI Integration", "Business Strategy"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Visionary leader with 8+ years of experience in web development and AI solutions. Passionate about empowering Kenyan businesses through technology.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Wanjiku",
      role: "Lead UI/UX Designer",
      expertise: ["User Experience", "Interface Design", "Brand Identity"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4b6?w=300&h=300&fit=crop&crop=face",
      bio: "Creative designer with a keen eye for user-centered design. Specializes in creating intuitive interfaces that drive engagement and conversions.",
      social: {
        linkedin: "#",
        dribbble: "#",
        behance: "#"
      }
    },
    {
      id: 3,
      name: "Michael Ochieng",
      role: "Senior Developer",
      expertise: ["React Development", "Node.js", "Database Design"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Technical expert with deep knowledge in modern web technologies. Builds scalable applications that perform flawlessly under pressure.",
      social: {
        linkedin: "#",
        github: "#",
        stackoverflow: "#"
      }
    },
    {
      id: 4,
      name: "Grace Mutindi",
      role: "Digital Marketing Specialist",
      expertise: ["SEO Optimization", "Content Strategy", "Analytics"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Results-driven marketer who helps businesses achieve online visibility and growth through strategic digital marketing campaigns.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 5,
      name: "James Mwangi",
      role: "AI Solutions Architect",
      expertise: ["Machine Learning", "Chatbot Development", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "AI specialist focused on implementing intelligent solutions that automate processes and enhance user experiences for our clients.",
      social: {
        linkedin: "#",
        github: "#",
        medium: "#"
      }
    },
    {
      id: 6,
      name: "Linda Akinyi",
      role: "Project Manager",
      expertise: ["Agile Methodology", "Client Relations", "Quality Assurance"],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Organized project leader who ensures smooth delivery of all projects while maintaining excellent client relationships and quality standards.",
      social: {
        linkedin: "#",
        twitter: "#",
        slack: "#"
      }
    }
  ];

  const getSocialIcon = (platform) => {
    const iconMap = {
      linkedin: "Linkedin",
      twitter: "Twitter",
      github: "Github",
      dribbble: "Dribbble",
      behance: "Palette",
      stackoverflow: "Code",
      instagram: "Instagram",
      medium: "BookOpen",
      slack: "MessageSquare"
    };
    return iconMap[platform] || "Link";
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success/10 text-success border border-success/20">
              <Icon name="Users" size={16} className="mr-2" />
              Our Team
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            Meet the Experts Behind Your Success
          </h2>
          <p className="font-body text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our diverse team of talented professionals brings together years of experience, creativity, and technical expertise to deliver exceptional results for every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group bg-surface rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-elevation border border-border hover:border-accent/30"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-background group-hover:ring-accent/20 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-success rounded-full border-2 border-background flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="font-heading font-semibold text-xl text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-body text-accent font-medium mb-3">
                  {member.role}
                </p>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                {Object.entries(member.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background hover:bg-accent text-text-secondary hover:text-accent-foreground rounded-lg flex items-center justify-center transition-all duration-200 btn-hover-scale border border-border hover:border-accent"
                  >
                    <Icon name={getSocialIcon(platform)} size={16} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <Icon name="Users" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
              Want to Join Our Team?
            </h3>
            <p className="font-body text-text-secondary mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence. Join us in building the future of digital experiences in Kenya.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I'm interested in career opportunities at Evoq Creative Tech.");
                window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
              }}
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-colors duration-200 btn-hover-scale"
            >
              <Icon name="Briefcase" size={20} className="mr-2" />
              Explore Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;