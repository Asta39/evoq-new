import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handleStartSimilarProject = () => {
    const message = `Hi! I'm interested in starting a similar project to ${project.title} for ${project.client}. Can we discuss the requirements?`;
    const phoneNumber = '+254700000000';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-1200 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="font-heading font-bold text-xl text-text-primary">
              {project.title}
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              {project.client} • {project.industry}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
            className="text-text-secondary hover:text-text-primary"
          />
        </div>

        {/* Image Gallery */}
        <div className="relative h-64 md:h-80 bg-surface">
          <Image
            src={project.gallery[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-md transition-colors duration-200"
              >
                <Icon name="ChevronLeft" size={20} className="text-text-primary" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-md transition-colors duration-200"
              >
                <Icon name="ChevronRight" size={20} className="text-text-primary" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {project.gallery.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? 'bg-accent' : 'bg-background/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Project Overview */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
              Project Overview
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Goals & Challenges */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-heading font-semibold text-base text-text-primary mb-3 flex items-center">
                <Icon name="Target" size={18} className="text-accent mr-2" />
                Goals
              </h4>
              <ul className="space-y-2">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-base text-text-primary mb-3 flex items-center">
                <Icon name="AlertCircle" size={18} className="text-warning mr-2" />
                Challenges
              </h4>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Minus" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-base text-text-primary mb-3 flex items-center">
              <Icon name="Lightbulb" size={18} className="text-accent mr-2" />
              Solutions Implemented
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {project.solutions.map((solution, index) => (
                <div key={index} className="bg-surface rounded-lg p-4">
                  <h5 className="font-medium text-text-primary mb-2">{solution.title}</h5>
                  <p className="text-sm text-text-secondary">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-heading font-semibold text-base text-text-primary mb-3 flex items-center">
              <Icon name="Code2" size={18} className="text-accent mr-2" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-surface rounded-full text-sm font-medium text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h4 className="font-heading font-semibold text-base text-text-primary mb-3 flex items-center">
              <Icon name="TrendingUp" size={18} className="text-success mr-2" />
              Results & Impact
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="text-center bg-surface rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent mb-1">{result.value}</div>
                  <div className="text-sm text-text-secondary">{result.metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {project.testimonial && (
            <div className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
              <div className="flex items-start space-x-4">
                <Icon name="Quote" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-text-primary italic mb-4">"{project.testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-text-primary">{project.testimonial.author}</div>
                      <div className="text-sm text-text-secondary">{project.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-background border-t border-border p-6 flex flex-col sm:flex-row gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={handleStartSimilarProject}
            iconName="MessageCircle"
            iconPosition="left"
            className="flex-1 btn-hover-scale"
          >
            Start Similar Project
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onClose}
            className="sm:w-auto"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;