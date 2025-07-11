import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const getTechIcon = (tech) => {
    const techIcons = {
      'React': 'Code2',
      'WordPress': 'Globe',
      'AI Integration': 'Brain',
      'Node.js': 'Server',
      'MongoDB': 'Database',
      'Next.js': 'Zap',
      'Tailwind CSS': 'Palette',
      'Python': 'FileCode',
      'PHP': 'Code',
      'MySQL': 'Database'
    };
    return techIcons[tech] || 'Code2';
  };

  const getIndustryColor = (industry) => {
    const colors = {
      'Startups': 'bg-accent/10 text-accent',
      'Enterprise': 'bg-success/10 text-success',
      'NGO': 'bg-warning/10 text-warning',
      'E-commerce': 'bg-error/10 text-error',
      'Healthcare': 'bg-primary/10 text-primary',
      'Education': 'bg-secondary/10 text-text-primary'
    };
    return colors[industry] || 'bg-surface text-text-secondary';
  };

  return (
    <div className="group bg-background rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out overflow-hidden card-elevation">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <Image
          src={project.thumbnail}
          alt={project.title}
 className="w-full h-48 object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"         />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/90 text-text-primary backdrop-blur-sm">
            {project.type}
          </span>
        </div>

        {/* View Details Button - Appears on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="Eye"
            iconPosition="left"
            className="btn-hover-scale"
          >
            View Details
          </Button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Client & Industry */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-accent transition-colors duration-200">
            {project.client}
          </h3>
          <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${getIndustryColor(project.industry)}`}>
            {project.industry}
          </span>
        </div>

        {/* Project Title */}
        <h4 className="font-body font-medium text-base text-text-primary mb-2">
          {project.title}
        </h4>

        {/* Description */}
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 px-2 py-1 bg-surface rounded-md"
            >
              <Icon name={getTechIcon(tech)} size={14} className="text-text-secondary" />
              <span className="text-xs font-medium text-text-secondary">{tech}</span>
            </div>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-text-secondary px-2 py-1">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} className="text-text-secondary" />
              <span className="text-xs text-text-secondary">{project.completedDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} className="text-text-secondary" />
              <span className="text-xs text-text-secondary">{project.duration}</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="ArrowRight"
            iconPosition="right"
            className="text-accent hover:text-accent/80"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;