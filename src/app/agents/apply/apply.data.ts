import { AgentBenefit, AgentPhase } from './apply.model';

/**
 * Benefits of becoming a Tawakal Express agent
 */
export const AGENT_BENEFITS: AgentBenefit[] = [
  {
    title: 'Additional Income',
    description:
      'Earn competitive commissions on every transaction you process, creating a reliable source of additional income for your business.',
    icon: ['fas', 'money-bill-wave'],
    color: 'text-tawakal-green',
  },
  {
    title: 'Increased Foot Traffic',
    description:
      'Attract new customers to your business who come for money transfer services and may purchase your other products or services.',
    icon: ['fas', 'users'],
    color: 'text-tawakal-blue',
  },
  {
    title: 'Simple Technology',
    description:
      'Access our user-friendly platform that requires minimal training and technical knowledge to operate efficiently.',
    icon: ['fas', 'mobile-screen'],
    color: 'text-[#9e5a63]',
  },
  {
    title: 'Dedicated Support',
    description:
      'Receive personalized support from our team, including marketing materials, technical assistance, and business guidance.',
    icon: ['fas', 'headset'],
    color: 'text-amber-500',
  },
  {
    title: 'Global Network',
    description:
      'Join our extensive international network, connecting you to customers and opportunities across the globe.',
    icon: ['fas', 'globe'],
    color: 'text-tawakal-blue',
  },
  {
    title: 'Community Service',
    description:
      'Provide an essential service that helps families stay connected financially across international borders.',
    icon: ['fas', 'hand-holding-heart'],
    color: 'text-tawakal-green',
  },
];

/**
 * Phases of becoming a Tawakal Express agent
 */
export const AGENT_PHASES: AgentPhase[] = [
  {
    number: 1,
    title: 'Application',
    description:
      'Complete and submit the application form with your business information.',
    icon: ['fas', 'paper-plane'],
  },
  {
    number: 2,
    title: 'Verification',
    description:
      'Our team will review your application and verify your business details.',
    icon: ['fas', 'check-circle'],
  },
  {
    number: 3,
    title: 'Training',
    description: 'Receive comprehensive training on our systems and processes.',
    icon: ['fas', 'graduation-cap'],
  },
  {
    number: 4,
    title: 'Launch',
    description: 'Start offering Tawakal Express services to your customers.',
    icon: ['fas', 'rocket'],
  },
];
