// src/pages/contact/components/CalendlySection.jsx -- THE COMPLETE AND FINAL CODE --

import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import Icon from '../../../components/AppIcon';

const CalendlySection = () => {
  // This state now holds the ID of the meeting to show.
  // The default '30min' must match one of the `id` fields below.
  const [selectedMeetingType, setSelectedMeetingType] = useState('30min');

  // This is your master list of meeting types.
  // IMPORTANT: You MUST replace the placeholder calendlyUrl values with your real links.
  const meetingTypes = [
    {
      id: '30min', // This ID should match the end of your URL
      title: 'Free Consultation',
      duration: '30 minutes',
      description: 'Discuss your project requirements and get expert advice on the best approach.',
      icon: 'MessageSquare',
      color: 'bg-accent/10 text-accent',
      calendlyUrl: 'https://calendly.com/evoqcreativetech/30min' // THIS ONE IS REAL AND WORKS
    },
    {
      id: 'technical-discussion', // You can name this ID whatever you want
      title: 'Technical Discussion',
      duration: '45 minutes',
      description: 'Deep dive into technical requirements, architecture, and implementation details.',
      icon: 'Code',
      color: 'bg-success/10 text-success',
      calendlyUrl: 'https://calendly.com/evoqcreativetech/technical-discussion' // <-- REPLACE THIS PLACEHOLDER
    },
    {
      id: 'proposal-review', // You can name this ID whatever you want
      title: 'Proposal Review',
      duration: '60 minutes',
      description: 'Review detailed project proposal, timeline, and finalize project scope.',
      icon: 'FileText',
      color: 'bg-warning/10 text-warning',
      calendlyUrl: 'https://calendly.com/evoqcreativetech/proposal-review' // <-- REPLACE THIS PLACEHOLDER
    }
  ];

  // This finds the correct URL from the array above based on the selectedMeetingType state.
  const currentMeetingUrl = meetingTypes.find(m => m.id === selectedMeetingType)?.calendlyUrl;

  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Calendar" size={32} className="text-accent" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Schedule a Meeting
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Book a one-on-one consultation with our experts to discuss your project in detail.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <h3 className="font-heading font-semibold text-xl text-primary text-center mb-4">
              1. Choose Meeting Type
            </h3>
            {meetingTypes.map((meeting) => (
              <div
                key={meeting.id}
                className={`p-6 rounded-lg border cursor-pointer transition-all duration-200 ${selectedMeetingType === meeting.id ? 'border-accent bg-accent/5' : 'border-border bg-background hover:border-accent/50'}`}
                onClick={() => setSelectedMeetingType(meeting.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${meeting.color}`}>
                    <Icon name={meeting.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-heading font-semibold text-lg text-primary">
                        {meeting.title}
                      </h4>
                      <span className="font-body text-sm text-text-secondary bg-surface px-2 py-1 rounded">
                        {meeting.duration}
                      </span>
                    </div>
                    <p className="font-body text-text-secondary">
                      {meeting.description}
                    </p>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 mt-1 flex-shrink-0 ${selectedMeetingType === meeting.id ? 'border-accent' : 'border-border'}`}>
                    {selectedMeetingType === meeting.id && (
                      <div className="w-full h-full rounded-full bg-accent scale-75"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-lg shadow-sm overflow-hidden border border-border">
            <h3 className="font-heading font-semibold text-xl text-primary text-center p-6 bg-surface">
              2. Select a Date & Time
            </h3>
            <div className="min-h-[700px] p-2">
              {currentMeetingUrl && (
                <InlineWidget
                  url={currentMeetingUrl}
                  styles={{
                    height: '700px'
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '0069ff',
                    textColor: '4d5058'
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;