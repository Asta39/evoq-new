import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PaymentTermsSection = () => {
  const [activeTab, setActiveTab] = useState('payment');

  const paymentMethods = [
    {
      id: 'mpesa',
      name: 'M-Pesa',
      icon: 'Smartphone',
      details: [
        'Paybill Number: 522522',
        'Account Number: EVOQ[YourName]',
        'Instant payment confirmation',
        'Secure mobile money transfer'
      ]
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: 'Building2',
      details: [
        'Bank: Equity Bank Kenya',
        'Account: 1234567890',
        'Account Name: Evoq Creative Tech',
        'Swift Code: EQBLKENA'
      ]
    },
    {
      id: 'card',
      name: 'Card Payment',
      icon: 'CreditCard',
      details: [
        'Visa and Mastercard accepted',
        'Secure payment processing',
        'International cards supported',
        '3D Secure authentication'
      ]
    }
  ];

  const paymentSchedule = [
    {
      phase: 'Project Initiation',
      percentage: 50,
      description: 'Paid upon project agreement and contract signing',
      deliverables: ['Project planning', 'Design mockups', 'Development setup']
    },
    {
      phase: 'Development Milestone',
      percentage: 30,
      description: 'Paid at 70% project completion',
      deliverables: ['Core functionality', 'Content integration', 'Initial testing']
    },
    {
      phase: 'Project Completion',
      percentage: 20,
      description: 'Final payment upon project delivery and approval',
      deliverables: ['Final testing', 'Launch preparation', 'Training & handover']
    }
  ];

  const policies = [
    {
      title: 'Refund Policy',
      icon: 'RotateCcw',
      content: `Full refund available within 7 days of project initiation if no work has commenced.\nPartial refunds considered based on work completed and project milestones.\nRefund requests must be submitted in writing with valid reasons.`
    },
    {
      title: 'Revision Policy',
      icon: 'Edit3',
      content: `Up to 3 major revisions included in all packages.\nAdditional revisions charged at KES 2,000 per hour.\nRevision requests must be submitted within 30 days of delivery.`
    },
    {
      title: 'Support Terms',
      icon: 'HeadphonesIcon',
      content: `30 days free support included with all packages.\nExtended support available at KES 5,000 per month.\nSupport covers bug fixes, minor updates, and technical assistance.`
    }
  ];

  return (
    <div className="bg-background rounded-xl border border-border p-6 lg:p-8">
      <div className="text-center mb-8">
        <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary mb-2">
          Payment Terms & Policies
        </h3>
        <p className="text-text-secondary text-lg">
          Transparent pricing with flexible payment options
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 border-b border-border">
        {[
          { id: 'payment', label: 'Payment Methods', icon: 'CreditCard' },
          { id: 'schedule', label: 'Payment Schedule', icon: 'Calendar' },
          { id: 'policies', label: 'Policies', icon: 'FileText' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors duration-200 ${
              activeTab === tab.id
                ? 'border-accent text-accent' :'border-transparent text-text-secondary hover:text-accent'
            }`}
          >
            <Icon name={tab.icon} size={18} />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Payment Methods Tab */}
      {activeTab === 'payment' && (
        <div className="grid md:grid-cols-3 gap-6">
          {paymentMethods.map((method) => (
            <div key={method.id} className="bg-surface rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Icon name={method.icon} size={32} className="text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-primary mb-4">
                {method.name}
              </h4>
              <ul className="space-y-2">
                {method.details.map((detail, index) => (
                  <li key={index} className="text-text-secondary text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Payment Schedule Tab */}
      {activeTab === 'schedule' && (
        <div className="space-y-6">
          {paymentSchedule.map((phase, index) => (
            <div key={index} className="bg-surface rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-full text-accent-foreground font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-primary">
                      {phase.phase}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">
                    {phase.percentage}%
                  </div>
                  <div className="text-text-secondary text-sm">
                    of total cost
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <h5 className="font-medium text-primary mb-2">Deliverables:</h5>
                <ul className="grid md:grid-cols-3 gap-2">
                  {phase.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-text-secondary text-sm">
                        {deliverable}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Policies Tab */}
      {activeTab === 'policies' && (
        <div className="space-y-6">
          {policies.map((policy, index) => (
            <div key={index} className="bg-surface rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                  <Icon name={policy.icon} size={24} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-lg text-primary mb-3">
                    {policy.title}
                  </h4>
                  <div className="text-text-secondary text-sm leading-relaxed">
                    {policy.content.split('\n').map((line, idx) => (
                      <p key={idx} className="mb-2 last:mb-0">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contact CTA */}
      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-text-secondary mb-4">
          Have questions about our payment terms?
        </p>
        <Button
          variant="outline"
          size="lg"
          onClick={() => {
            const message = encodeURIComponent("Hi! I have questions about your payment terms and policies.");
            window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
          }}
          className="btn-hover-scale"
          iconName="MessageCircle"
          iconPosition="left"
        >
          Contact Us on WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default PaymentTermsSection;