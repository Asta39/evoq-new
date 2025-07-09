import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CalendlySection = () => {
  const [selectedMeetingType, setSelectedMeetingType] = useState('consultation');

  const meetingTypes = [
    {
      id: 'consultation',
      title: 'Free Consultation',
      duration: '30 minutes',
      description: 'Discuss your project requirements and get expert advice on the best approach.',
      icon: 'MessageSquare',
      color: 'bg-accent/10 text-accent'
    },
    {
      id: 'technical',
      title: 'Technical Discussion',
      duration: '45 minutes',
      description: 'Deep dive into technical requirements, architecture, and implementation details.',
      icon: 'Code',
      color: 'bg-success/10 text-success'
    },
    {
      id: 'proposal',
      title: 'Proposal Review',
      duration: '60 minutes',
      description: 'Review detailed project proposal, timeline, and finalize project scope.',
      icon: 'FileText',
      color: 'bg-warning/10 text-warning'
    }
  ];

  const availableSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '2:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '5:00 PM', available: false }
  ];

  const handleBookMeeting = () => {
    // In a real implementation, this would integrate with Calendly API
    const calendlyUrl = 'https://calendly.com/evoqcreativetech/consultation';
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Meeting Types */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-xl text-primary mb-6">
              Choose Meeting Type
            </h3>
            
            <div className="space-y-4">
              {meetingTypes.map((meeting) => (
                <div
                  key={meeting.id}
                  className={`p-6 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedMeetingType === meeting.id
                      ? 'border-accent bg-accent/5' :'border-border bg-background hover:border-accent/50'
                  }`}
                  onClick={() => setSelectedMeetingType(meeting.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${meeting.color}`}>
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
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedMeetingType === meeting.id
                        ? 'border-accent bg-accent' :'border-border'
                    }`}>
                      {selectedMeetingType === meeting.id && (
                        <div className="w-full h-full rounded-full bg-accent-foreground scale-50"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={handleBookMeeting}
              className="w-full"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Meeting on Calendly
            </Button>
          </div>

          {/* Available Times Preview */}
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="font-heading font-semibold text-xl text-primary mb-6">
              Available Today
            </h3>
            
            <div className="space-y-3 mb-6">
              {availableSlots.map((slot, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    slot.available
                      ? 'bg-success/10 border border-success/20' :'bg-surface border border-border opacity-50'
                  }`}
                >
                  <span className="font-body font-medium text-text-primary">
                    {slot.time}
                  </span>
                  <div className="flex items-center space-x-2">
                    {slot.available ? (
                      <>
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="font-body text-sm text-success">Available</span>
                      </>
                    ) : (
                      <>
                        <Icon name="X" size={16} className="text-text-secondary" />
                        <span className="font-body text-sm text-text-secondary">Booked</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-heading font-semibold text-lg text-primary mb-4">
                What to Expect
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Video" size={16} className="text-accent mt-1" />
                  <span className="font-body text-sm text-text-secondary">
                    Video call via Google Meet or Zoom
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="FileText" size={16} className="text-accent mt-1" />
                  <span className="font-body text-sm text-text-secondary">
                    Project requirements discussion
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Calculator" size={16} className="text-accent mt-1" />
                  <span className="font-body text-sm text-text-secondary">
                    Detailed quote and timeline
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Users" size={16} className="text-accent mt-1" />
                  <span className="font-body text-sm text-text-secondary">
                    Meet your project team
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/10 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Clock" size={16} className="text-accent" />
                <span className="font-body font-semibold text-accent">Time Zone</span>
              </div>
              <p className="font-body text-sm text-text-secondary">
                All times shown in East Africa Time (EAT). We accommodate different time zones for international clients.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-accent" />
            </div>
            <h4 className="font-heading font-semibold text-lg text-primary mb-2">
              Expert Consultation
            </h4>
            <p className="font-body text-sm text-text-secondary">
              Get personalized advice from our experienced team of developers and designers
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Target" size={24} className="text-accent" />
            </div>
            <h4 className="font-heading font-semibold text-lg text-primary mb-2">
              Tailored Solutions
            </h4>
            <p className="font-body text-sm text-text-secondary">
              Discuss your specific needs and get customized recommendations
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} className="text-accent" />
            </div>
            <h4 className="font-heading font-semibold text-lg text-primary mb-2">
              Fast Turnaround
            </h4>
            <p className="font-body text-sm text-text-secondary">
              Get your project quote and timeline within 24 hours of the meeting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;