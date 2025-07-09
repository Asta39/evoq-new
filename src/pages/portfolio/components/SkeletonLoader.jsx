import React from 'react';

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-background rounded-xl shadow-sm border border-border overflow-hidden animate-pulse">
          {/* Image Skeleton */}
          <div className="h-48 md:h-56 bg-surface" />
          
          {/* Content Skeleton */}
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="h-5 bg-surface rounded w-32" />
              <div className="h-5 bg-surface rounded w-16" />
            </div>
            
            {/* Title */}
            <div className="h-4 bg-surface rounded w-48 mb-2" />
            
            {/* Description */}
            <div className="space-y-2 mb-4">
              <div className="h-3 bg-surface rounded w-full" />
              <div className="h-3 bg-surface rounded w-3/4" />
            </div>
            
            {/* Technologies */}
            <div className="flex gap-2 mb-4">
              <div className="h-6 bg-surface rounded w-16" />
              <div className="h-6 bg-surface rounded w-20" />
              <div className="h-6 bg-surface rounded w-14" />
            </div>
            
            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex space-x-4">
                <div className="h-4 bg-surface rounded w-20" />
                <div className="h-4 bg-surface rounded w-16" />
              </div>
              <div className="h-8 bg-surface rounded w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;