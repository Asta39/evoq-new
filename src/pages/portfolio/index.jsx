import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import WhatsAppWidget from '../../components/ui/WhatsAppWidget';
import Breadcrumb from '../../components/ui/Breadcrumb';
import PortfolioHero from './components/PortfolioHero';
import FilterSystem from './components/FilterSystem';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import SkeletonLoader from './components/SkeletonLoader';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    technology: [],
    industry: [],
    type: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Mock portfolio data
  const portfolioData = [
    {
      id: 1,
      client: "TechStart Kenya",
      title: "AI-Powered SaaS Platform",
      description: "Complete web application with AI chatbot integration and advanced analytics dashboard for startup management.",
      fullDescription: `TechStart Kenya needed a comprehensive SaaS platform to help Kenyan startups manage their operations efficiently. The platform includes AI-powered insights, automated reporting, and intelligent chatbot assistance for user queries. We built a scalable solution that handles multiple tenants with role-based access control and real-time collaboration features.`,
      type: "Website Development",
      industry: "Startups",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop"
      ],
      technologies: ["React", "Node.js", "AI Integration", "MongoDB", "Tailwind CSS"],
      completedDate: "Mar 2024",
      duration: "3 months",
      goals: [
        "Create scalable multi-tenant SaaS platform",
        "Integrate AI-powered business insights",
        "Implement real-time collaboration features",
        "Ensure mobile-responsive design"
      ],
      challenges: [
        "Complex multi-tenant architecture",
        "Real-time data synchronization",
        "AI model integration and optimization",
        "Performance optimization for large datasets"
      ],
      solutions: [
        {
          title: "Microservices Architecture",
          description: "Implemented scalable microservices to handle different platform modules independently."
        },
        {
          title: "AI Integration",
          description: "Custom AI models for business insights and automated chatbot responses."
        },
        {
          title: "Real-time Updates",
          description: "WebSocket implementation for instant collaboration and notifications."
        },
        {
          title: "Performance Optimization",
          description: "Database indexing and caching strategies for optimal performance."
        }
      ],
      results: [
        { value: "300%", metric: "User Engagement" },
        { value: "45%", metric: "Faster Operations" },
        { value: "99.9%", metric: "Uptime" }
      ],
      testimonial: {
        content: "Evoq Creative Tech delivered beyond our expectations. The AI integration has transformed how our users interact with the platform.",
        author: "James Mwangi",
        position: "CEO, TechStart Kenya",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    },
    {
      id: 2,
      client: "Green Earth NGO",
      title: "Environmental Impact Dashboard",
      description: "Interactive web platform showcasing environmental projects with real-time data visualization and donation integration.",
      fullDescription: `Green Earth NGO required a comprehensive platform to showcase their environmental conservation projects across Kenya. The solution includes interactive maps, real-time environmental data visualization, project tracking, and integrated donation system with M-Pesa integration for local supporters.`,
      type: "Website Development",
      industry: "NGO",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop"
      ],
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "M-Pesa API"],
      completedDate: "Feb 2024",
      duration: "2 months",
      goals: [
        "Showcase environmental projects effectively",
        "Integrate real-time environmental data",
        "Enable easy donation process",
        "Create engaging user experience"
      ],
      challenges: [
        "Complex data visualization requirements",
        "M-Pesa payment integration",
        "Real-time data processing",
        "Mobile optimization for rural areas"
      ],
      solutions: [
        {
          title: "Interactive Visualizations",
          description: "Custom D3.js charts and maps for environmental data presentation."
        },
        {
          title: "Payment Integration",
          description: "Seamless M-Pesa integration for local donation processing."
        },
        {
          title: "Offline Capabilities",
          description: "Progressive Web App features for areas with poor connectivity."
        },
        {
          title: "Performance Optimization",
          description: "Optimized for low-bandwidth environments common in rural Kenya."
        }
      ],
      results: [
        { value: "250%", metric: "Donation Increase" },
        { value: "180%", metric: "User Engagement" },
        { value: "95%", metric: "Mobile Usage" }
      ],
      testimonial: {
        content: "The platform has revolutionized how we connect with supporters and showcase our environmental impact.",
        author: "Dr. Sarah Wanjiku",
        position: "Director, Green Earth NGO",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      }
    },
    {
      id: 3,
      client: "Nairobi Fashion House",
      title: "E-commerce Platform Redesign",
      description: "Modern e-commerce website with AI-powered product recommendations and seamless mobile shopping experience.",
      fullDescription: `Nairobi Fashion House needed a complete e-commerce platform overhaul to compete in the digital marketplace. We created a modern, mobile-first shopping experience with AI-powered product recommendations, virtual try-on features, and integrated payment solutions including M-Pesa and card payments.`,
      type: "Website Rebranding",
      industry: "E-commerce",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop"
      ],
      technologies: ["React", "Next.js", "AI Integration", "Stripe", "Tailwind CSS"],
      completedDate: "Jan 2024",
      duration: "2.5 months",
      goals: [
        "Modernize brand presence online",
        "Improve mobile shopping experience",
        "Implement AI recommendations",
        "Increase conversion rates"
      ],
      challenges: [
        "Legacy system migration",
        "Complex product catalog management",
        "Payment gateway integration",
        "Performance optimization"
      ],
      solutions: [
        {
          title: "Modern Design System",
          description: "Complete visual rebrand with consistent design language across all touchpoints."
        },
        {
          title: "AI Recommendations",
          description: "Machine learning algorithms for personalized product suggestions."
        },
        {
          title: "Mobile Optimization",
          description: "Progressive Web App with native app-like experience."
        },
        {
          title: "Payment Integration",
          description: "Multiple payment options including M-Pesa, Visa, and Mastercard."
        }
      ],
      results: [
        { value: "400%", metric: "Online Sales" },
        { value: "65%", metric: "Mobile Conversions" },
        { value: "85%", metric: "Customer Satisfaction" }
      ],
      testimonial: {
        content: "Our online sales have quadrupled since the new platform launch. The AI recommendations are incredibly effective.",
        author: "Grace Mutindi",
        position: "Owner, Nairobi Fashion House",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
      }
    },
    {
      id: 4,
      client: "EduTech Solutions",
      title: "Learning Management System",
      description: "Comprehensive LMS with AI tutoring, progress tracking, and interactive learning modules for Kenyan students.",
      fullDescription: `EduTech Solutions required a robust Learning Management System tailored for Kenyan educational institutions. The platform features AI-powered tutoring, adaptive learning paths, comprehensive progress tracking, and offline capabilities to serve students in areas with limited internet connectivity.`,
      type: "Website Development",
      industry: "Education",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop"
      ],
      technologies: ["React", "Python", "AI Integration", "PostgreSQL", "WebRTC"],
      completedDate: "Dec 2023",
      duration: "4 months",
      goals: [
        "Create comprehensive learning platform",
        "Implement AI-powered tutoring",
        "Enable offline learning capabilities",
        "Track student progress effectively"
      ],
      challenges: [
        "Complex AI tutoring implementation",
        "Offline synchronization",
        "Multi-device compatibility",
        "Scalability for thousands of users"
      ],
      solutions: [
        {
          title: "AI Tutoring System",
          description: "Custom AI models for personalized learning assistance and adaptive content delivery."
        },
        {
          title: "Offline Capabilities",
          description: "Progressive Web App with offline content caching and sync capabilities."
        },
        {
          title: "Real-time Collaboration",
          description: "WebRTC implementation for virtual classrooms and peer-to-peer learning."
        },
        {
          title: "Analytics Dashboard",
          description: "Comprehensive analytics for teachers and administrators to track progress."
        }
      ],
      results: [
        { value: "500+", metric: "Active Students" },
        { value: "40%", metric: "Improved Grades" },
        { value: "90%", metric: "User Retention" }
      ],
      testimonial: {
        content: "The AI tutoring feature has significantly improved our students' learning outcomes. Exceptional work!",
        author: "Prof. David Kiprotich",
        position: "Director, EduTech Solutions",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg"
      }
    },
    {
      id: 5,
      client: "HealthCare Plus",
      title: "Telemedicine Platform",
      description: "Secure telemedicine platform with appointment booking, video consultations, and patient record management.",
      fullDescription: `HealthCare Plus needed a comprehensive telemedicine solution to serve patients across Kenya, especially in remote areas. The platform includes secure video consultations, appointment scheduling, electronic health records, prescription management, and integration with local pharmacies for medication delivery.`,
      type: "Website Development",
      industry: "Healthcare",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&h=800&fit=crop"
      ],
      technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Encryption"],
      completedDate: "Nov 2023",
      duration: "3.5 months",
      goals: [
        "Enable remote healthcare access",
        "Ensure HIPAA compliance",
        "Integrate with existing systems",
        "Provide seamless user experience"
      ],
      challenges: [
        "Healthcare data security requirements",
        "Video call quality optimization",
        "Integration with medical devices",
        "Regulatory compliance"
      ],
      solutions: [
        {
          title: "Security Implementation",
          description: "End-to-end encryption and HIPAA-compliant data handling."
        },
        {
          title: "Video Optimization",
          description: "Adaptive video quality based on connection speed and device capabilities."
        },
        {
          title: "EHR Integration",
          description: "Seamless integration with existing Electronic Health Record systems."
        },
        {
          title: "Mobile Accessibility",
          description: "Native mobile app experience for patients and healthcare providers."
        }
      ],
      results: [
        { value: "1000+", metric: "Consultations/Month" },
        { value: "95%", metric: "Patient Satisfaction" },
        { value: "60%", metric: "Reduced Wait Times" }
      ],
      testimonial: {
        content: "This platform has transformed how we deliver healthcare services to remote communities in Kenya.",
        author: "Dr. Mary Njeri",
        position: "Chief Medical Officer, HealthCare Plus",
        avatar: "https://randomuser.me/api/portraits/women/72.jpg"
      }
    },
    {
      id: 6,
      client: "AgriTech Kenya",
      title: "Smart Farming Dashboard",
      description: "IoT-integrated farming management system with weather monitoring, crop tracking, and market price analytics.",
      fullDescription: `AgriTech Kenya required a comprehensive smart farming solution to help Kenyan farmers optimize their agricultural practices. The platform integrates IoT sensors for soil and weather monitoring, crop management tools, market price tracking, and AI-powered farming recommendations based on local conditions.`,
      type: "Website Development",
      industry: "Agriculture",
      thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=800&fit=crop"
      ],
      technologies: ["React", "IoT Integration", "Python", "MongoDB", "AI Integration"],
      completedDate: "Oct 2023",
      duration: "3 months",
      goals: [
        "Modernize farming practices",
        "Integrate IoT monitoring",
        "Provide market insights",
        "Improve crop yields"
      ],
      challenges: [
        "IoT device integration",
        "Rural connectivity issues",
        "Complex data visualization",
        "Multi-language support"
      ],
      solutions: [
        {
          title: "IoT Integration",
          description: "Seamless connection with various farming sensors and monitoring devices."
        },
        {
          title: "Offline Capabilities",
          description: "Local data storage and sync for areas with poor connectivity."
        },
        {
          title: "AI Recommendations",
          description: "Machine learning models for crop optimization and pest prediction."
        },
        {
          title: "Market Analytics",
          description: "Real-time market price tracking and trend analysis."
        }
      ],
      results: [
        { value: "35%", metric: "Yield Increase" },
        { value: "200+", metric: "Active Farmers" },
        { value: "50%", metric: "Cost Reduction" }
      ],
      testimonial: {
        content: "The smart farming dashboard has revolutionized how we manage our crops and increased our yields significantly.",
        author: "John Kamau",
        position: "Lead Farmer, AgriTech Kenya",
        avatar: "https://randomuser.me/api/portraits/men/78.jpg"
      }
    }
  ];

  // Extract unique filter options
  const filterOptions = useMemo(() => {
    const technologies = [...new Set(portfolioData.flatMap(project => project.technologies))];
    const industries = [...new Set(portfolioData.map(project => project.industry))];
    const types = [...new Set(portfolioData.map(project => project.type))];
    
    return { technologies, industries, types };
  }, [portfolioData]);

  // Filter projects based on search and active filters
  const filteredProjects = useMemo(() => {
    return portfolioData.filter(project => {
      // Search filter
      const matchesSearch = !searchQuery || 
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Technology filter
      const matchesTechnology = activeFilters.technology.length === 0 ||
        activeFilters.technology.some(tech => project.technologies.includes(tech));

      // Industry filter
      const matchesIndustry = activeFilters.industry.length === 0 ||
        activeFilters.industry.includes(project.industry);

      // Type filter
      const matchesType = activeFilters.type.length === 0 ||
        activeFilters.type.includes(project.type);

      return matchesSearch && matchesTechnology && matchesIndustry && matchesType;
    });
  }, [portfolioData, searchQuery, activeFilters]);

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  // Clear all filters
  const handleClearFilters = () => {
    setActiveFilters({
      technology: [],
      industry: [],
      type: []
    });
    setSearchQuery('');
  };

  // Handle project modal
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Load more projects
  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Reset visible projects when filters change
  useEffect(() => {
    setVisibleProjects(6);
  }, [activeFilters, searchQuery]);

  const currentProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  return (
    <>
      <Helmet>
        <title>Portfolio - Evoq Creative Tech | Web Development Projects Kenya</title>
        <meta name="description" content="Explore our portfolio of successful web development projects in Kenya. From AI-powered websites to e-commerce platforms, see how we transform ideas into digital excellence." />
        <meta name="keywords" content="portfolio, web development Kenya, AI websites, e-commerce, digital projects, Nairobi web design" />
        <meta property="og:title" content="Portfolio - Evoq Creative Tech" />
        <meta property="og:description" content="Discover our curated collection of successful digital projects across diverse industries in Kenya." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://evoqcreativetech.com/portfolio" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 md:pt-20">
          <PortfolioHero />
          
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
              <Breadcrumb />
              
              {/* Filter System */}
              <FilterSystem
                filters={filterOptions}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onClearFilters={handleClearFilters}
              />

              {/* Results Summary */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <h2 className="font-heading font-semibold text-xl text-text-primary">
                    Our Projects
                  </h2>
                  <span className="text-sm text-text-secondary">
                    {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
                  </span>
                </div>
                
                {filteredProjects.length > 0 && (
                  <div className="text-sm text-text-secondary">
                    Showing {Math.min(visibleProjects, filteredProjects.length)} of {filteredProjects.length}
                  </div>
                )}
              </div>

              {/* Portfolio Grid */}
              <div id="portfolio-grid">
                {isLoading ? (
                  <SkeletonLoader count={6} />
                ) : filteredProjects.length === 0 ? (
                  <div className="text-center py-16">
                    <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                      No projects found
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Try adjusting your search criteria or clearing the filters.
                    </p>
                    <Button
                      variant="primary"
                      onClick={handleClearFilters}
                      iconName="RotateCcw"
                      iconPosition="left"
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {currentProjects.map((project) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          onViewDetails={handleViewDetails}
                        />
                      ))}
                    </div>

                    {/* Load More Button */}
                    {hasMoreProjects && (
                      <div className="text-center mt-12">
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={handleLoadMore}
                          iconName="Plus"
                          iconPosition="left"
                          className="btn-hover-scale"
                        >
                          Load More Projects
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        <WhatsAppWidget />
      </div>
    </>
  );
};

export default Portfolio;