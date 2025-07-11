// src/pages/portfolio/index.jsx -- THE COMPLETE AND FINAL CODE --

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
  const [activeFilters, setActiveFilters] = useState({ technology: [], industry: [], type: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(6);

  // --- UPDATED: portfolioData now uses local image paths ---
  const portfolioData = [
    {
      id: 1,
      client: "Print Shop",
      title: "Informative Print Shop Website",
      description: "Complete web application tailored to the upcoming 2027 elections as desired by the business.",
      fullDescription: `The Print Shop is a dynamic and user-friendly website designed to provide comprehensive information about the upcoming elections in Kenya. This platform is specifically crafted to address the needs of candidates during the capmaign period.`,
      type: "Website Development",
      industry: "Printing",
      thumbnail: "/assets/images/luna-thumb.png",
      gallery: [
        "/assets/images/luna-01.png",
        "/assets/images/luna-02.png",
        "/assets/images/luna-03.png"
      ],
      technologies: ["React", "Typescript", "Java Script", "Tailwind CSS"],
      completedDate: "July 2025",
      duration: "3 months",
      goals: [ "Create scalable multi-tenant SaaS platform", "Integrate AI-powered business insights", "Implement real-time collaboration features", "Ensure mobile-responsive design" ],
      challenges: [ "Complex multi-tenant architecture", "Real-time data synchronization", "AI model integration and optimization", "Performance optimization for large datasets" ],
      solutions: [ { title: "Microservices Architecture", description: "Implemented scalable microservices to handle different platform modules independently." }, { title: "AI Integration", description: "Custom AI models for business insights and automated chatbot responses." }, { title: "Real-time Updates", description: "WebSocket implementation for instant collaboration and notifications." }, { title: "Performance Optimization", description: "Database indexing and caching strategies for optimal performance." } ],
      results: [ { value: "300%", metric: "User Engagement" }, { value: "45%", metric: "Faster Operations" }, { value: "99.9%", metric: "Uptime" } ],
      testimonial: {
        content: "Evoq Creative Tech delivered beyond our expectations. The AI integration has transformed how our users interact with the platform.",
        author: "Kevin Bond",
        position: "CEO, Luna Graphics",
        avatar: "/assets/images/avatar.jpg"
      }
    },
    {
      id: 2,
      client: "Luxe & Allure Events and Decor",
      title: "Gallery Website",
      description: "Comprehensive website with a large gallery showcasing the best events and decor done by the company.",
      fullDescription: `Luxe & Allure Events and Decor is a dynamic event management company based in Nairobi, Kenya. They specialize in creating and managing high-end events for weddings, corporate functions, and special occasions. With a focus on luxury and exclusivity, they offer a wide range of services, including event planning, decor, and entertainment.`,
      type: "Website Rebranding",
      industry: "Events",
      thumbnail: "/assets/images/luxe-thumb.jpg",
      gallery: [
        "/assets/images/luxe-01.jpg",
        "/assets/images/luxe-02.jpg",
        "/assets/images/luxe-03.jpg"
      ],
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "M-Pesa API"],
      completedDate: "Feb 2024",
      duration: "2 months",
      goals: [ "Showcase the best events and decor done by the company", "Increase customer engagement", "Increase online presence", "Drive sales" ],
      challenges: [ "Complex data visualization requirements", "M-Pesa payment integration", "Real-time data processing", "Mobile optimization for rural areas" ],
      solutions: [ { title: "Event Registration System", description: "Custom-built system for event registrations." }, { title: "Payment Integration", description: "Seamless M-Pesa integration for event registrations." }, { title: "Offline Capabilities", description: "Progressive Web App features for areas with poor connectivity." }, { title: "Performance Optimization", description: "Optimized for low-bandwidth environments common in rural Kenya." } ],
      results: [ { value: "200%", metric: "Event Registrations" }, { value: "180%", metric: "User Engagement" }, { value: "95%", metric: "Mobile Usage" } ],
      testimonial: {
        content: "The platform has revolutionized how we connect with supporters and showcase our environmental impact.",
        author: "Naitore Mugambi",
        position: "Founder & CEO, Luxe & Allure Events and Decor",
        avatar: "/assets/images/avatar.jpg"
      }
    }
    /*
    {
      id: 3,
      client: "Nairobi Fashion House",
      title: "E-commerce Platform Redesign",
      description: "Modern e-commerce website with AI-powered product recommendations and seamless mobile shopping experience.",
      fullDescription: `Nairobi Fashion House needed a complete e-commerce platform overhaul to compete in the digital marketplace. We created a modern, mobile-first shopping experience with AI-powered product recommendations, virtual try-on features, and integrated payment solutions including M-Pesa and card payments.`,
      type: "Website Rebranding",
      industry: "E-commerce",
      thumbnail: "/assets/images/portfolio/project-fashion-thumb.jpg",
      gallery: [
        "/assets/images/portfolio/project-fashion-01.jpg",
        "/assets/images/portfolio/project-fashion-02.jpg",
        "/assets/images/portfolio/project-fashion-03.jpg"
      ],
      technologies: ["React", "Next.js", "AI Integration", "Stripe", "Tailwind CSS"],
      completedDate: "Jan 2024",
      duration: "2.5 months",
      goals: [ "Modernize brand presence online", "Improve mobile shopping experience", "Implement AI recommendations", "Increase conversion rates" ],
      challenges: [ "Legacy system migration", "Complex product catalog management", "Payment gateway integration", "Performance optimization" ],
      solutions: [ { title: "Modern Design System", description: "Complete visual rebrand with consistent design language across all touchpoints." }, { title: "AI Recommendations", description: "Machine learning algorithms for personalized product suggestions." }, { title: "Mobile Optimization", description: "Progressive Web App with native app-like experience." }, { title: "Payment Integration", description: "Multiple payment options including M-Pesa, Visa, and Mastercard." } ],
      results: [ { value: "400%", metric: "Online Sales" }, { value: "65%", metric: "Mobile Conversions" }, { value: "85%", metric: "Customer Satisfaction" } ],
      testimonial: {
        content: "Our online sales have quadrupled since the new platform launch. The AI recommendations are incredibly effective.",
        author: "Grace Mutindi",
        position: "Owner, Nairobi Fashion House",
        avatar: "/assets/images/avatar.jpg"
      }
    }
    
    {
      id: 4,
      client: "EduTech Solutions",
      title: "Learning Management System",
      description: "Comprehensive LMS with AI tutoring, progress tracking, and interactive learning modules for Kenyan students.",
      fullDescription: `EduTech Solutions required a robust Learning Management System tailored for Kenyan educational institutions. The platform features AI-powered tutoring, adaptive learning paths, comprehensive progress tracking, and offline capabilities to serve students in areas with limited internet connectivity.`,
      type: "Website Development",
      industry: "Education",
      thumbnail: "/assets/images/portfolio/project-edutech-thumb.jpg",
      gallery: [
        "/assets/images/portfolio/project-edutech-01.jpg",
        "/assets/images/portfolio/project-edutech-02.jpg",
        "/assets/images/portfolio/project-edutech-03.jpg"
      ],
      technologies: ["React", "Python", "AI Integration", "PostgreSQL", "WebRTC"],
      completedDate: "Dec 2023",
      duration: "4 months",
      goals: [ "Create comprehensive learning platform", "Implement AI-powered tutoring", "Enable offline learning capabilities", "Track student progress effectively" ],
      challenges: [ "Complex AI tutoring implementation", "Offline synchronization", "Multi-device compatibility", "Scalability for thousands of users" ],
      solutions: [ { title: "AI Tutoring System", description: "Custom AI models for personalized learning assistance and adaptive content delivery." }, { title: "Offline Capabilities", description: "Progressive Web App with offline content caching and sync capabilities." }, { title: "Real-time Collaboration", description: "WebRTC implementation for virtual classrooms and peer-to-peer learning." }, { title: "Analytics Dashboard", description: "Comprehensive analytics for teachers and administrators to track progress." } ],
      results: [ { value: "500+", metric: "Active Students" }, { value: "40%", metric: "Improved Grades" }, { value: "90%", metric: "User Retention" } ],
      testimonial: {
        content: "The AI tutoring feature has significantly improved our students' learning outcomes. Exceptional work!",
        author: "Prof. David Kiprotich",
        position: "Director, EduTech Solutions",
        avatar: "/assets/images/avatar.jpg"
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
      thumbnail: "/assets/images/portfolio/project-healthcare-thumb.jpg",
      gallery: [
        "/assets/images/portfolio/project-healthcare-01.jpg",
        "/assets/images/portfolio/project-healthcare-02.jpg",
        "/assets/images/portfolio/project-healthcare-03.jpg"
      ],
      technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Encryption"],
      completedDate: "Nov 2023",
      duration: "3.5 months",
      goals: [ "Enable remote healthcare access", "Ensure HIPAA compliance", "Integrate with existing systems", "Provide seamless user experience" ],
      challenges: [ "Healthcare data security requirements", "Video call quality optimization", "Integration with medical devices", "Regulatory compliance" ],
      solutions: [ { title: "Security Implementation", description: "End-to-end encryption and HIPAA-compliant data handling." }, { title: "Video Optimization", description: "Adaptive video quality based on connection speed and device capabilities." }, { title: "EHR Integration", description: "Seamless integration with existing Electronic Health Record systems." }, { title: "Mobile Accessibility", description: "Native mobile app experience for patients and healthcare providers." } ],
      results: [ { value: "1000+", metric: "Consultations/Month" }, { value: "95%", metric: "Patient Satisfaction" }, { value: "60%", metric: "Reduced Wait Times" } ],
      testimonial: {
        content: "This platform has transformed how we deliver healthcare services to remote communities in Kenya.",
        author: "Dr. Mary Njeri",
        position: "Chief Medical Officer, HealthCare Plus",
        avatar: "/assets/images/avatar.jpg"
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
      thumbnail: "/assets/images/portfolio/project-agritech-thumb.jpg",
      gallery: [
        "/assets/images/portfolio/project-agritech-01.jpg",
        "/assets/images/portfolio/project-agritech-02.jpg",
        "/assets/images/portfolio/project-agritech-03.jpg"
      ],
      technologies: ["React", "IoT Integration", "Python", "MongoDB", "AI Integration"],
      completedDate: "Oct 2023",
      duration: "3 months",
      goals: [ "Modernize farming practices", "Integrate IoT monitoring", "Provide market insights", "Improve crop yields" ],
      challenges: [ "IoT device integration", "Rural connectivity issues", "Complex data visualization", "Multi-language support" ],
      solutions: [ { title: "IoT Integration", description: "Seamless connection with various farming sensors and monitoring devices." }, { title: "Offline Capabilities", description: "Local data storage and sync for areas with poor connectivity." }, { title: "AI Recommendations", description: "Machine learning models for crop optimization and pest prediction." }, { title: "Market Analytics", description: "Real-time market price tracking and trend analysis." } ],
      results: [ { value: "35%", metric: "Yield Increase" }, { value: "200+", metric: "Active Farmers" }, { value: "50%", metric: "Cost Reduction" } ],
      testimonial: {
        content: "The smart farming dashboard has revolutionized how we manage our crops and increased our yields significantly.",
        author: "John Kamau",
        position: "Lead Farmer, AgriTech Kenya",
        avatar: "/assets/images/avatar.jpg"
      }
    }*/
  ];

  const filterOptions = useMemo(() => {
    const technologies = [...new Set(portfolioData.flatMap(project => project.technologies))];
    const industries = [...new Set(portfolioData.map(project => project.industry))];
    const types = [...new Set(portfolioData.map(project => project.type))];
    return { technologies, industries, types };
  }, [portfolioData]);

  const filteredProjects = useMemo(() => {
    return portfolioData.filter(project => {
      const matchesSearch = !searchQuery || project.client.toLowerCase().includes(searchQuery.toLowerCase()) || project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTechnology = activeFilters.technology.length === 0 || activeFilters.technology.some(tech => project.technologies.includes(tech));
      const matchesIndustry = activeFilters.industry.length === 0 || activeFilters.industry.includes(project.industry);
      const matchesType = activeFilters.type.length === 0 || activeFilters.type.includes(project.type);
      return matchesSearch && matchesTechnology && matchesIndustry && matchesType;
    });
  }, [portfolioData, searchQuery, activeFilters]);

  const handleFilterChange = (category, value) => {
    setActiveFilters(prev => ({ ...prev, [category]: prev[category].includes(value) ? prev[category].filter(item => item !== value) : [...prev[category], value] }));
  };

  const handleClearFilters = () => {
    setActiveFilters({ technology: [], industry: [], type: [] });
    setSearchQuery('');
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  useEffect(() => {
    const timer = setTimeout(() => { setIsLoading(false); }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
              <FilterSystem
                filters={filterOptions}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onClearFilters={handleClearFilters}
              />
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <h2 className="font-heading font-semibold text-xl text-text-primary">Our Projects</h2>
                  <span className="text-sm text-text-secondary">{filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found</span>
                </div>
                {filteredProjects.length > 0 && (
                  <div className="text-sm text-text-secondary">Showing {Math.min(visibleProjects, filteredProjects.length)} of {filteredProjects.length}</div>
                )}
              </div>
              <div id="portfolio-grid">
                {isLoading ? (
                  <SkeletonLoader count={6} />
                ) : filteredProjects.length === 0 ? (
                  <div className="text-center py-16">
                    <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">No projects found</h3>
                    <p className="text-text-secondary mb-6">Try adjusting your search criteria or clearing the filters.</p>
                    <Button variant="primary" onClick={handleClearFilters} iconName="RotateCcw" iconPosition="left">Clear Filters</Button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {currentProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
                      ))}
                    </div>
                    {hasMoreProjects && (
                      <div className="text-center mt-12">
                        <Button variant="outline" size="lg" onClick={handleLoadMore} iconName="Plus" iconPosition="left" className="btn-hover-scale">Load More Projects</Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        </main>
        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
        <WhatsAppWidget />
      </div>
    </>
  );
};

export default Portfolio;