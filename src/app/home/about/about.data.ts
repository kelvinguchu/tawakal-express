import { CoreValue, Country } from './about.model';

/**
 * Core values data
 */
export const CORE_VALUES: CoreValue[] = [
  {
    icon: 'faHandshake',
    title: 'Trust & Reliability',
    description:
      'We build trust through consistent, reliable service and transparent operations, ensuring our customers can depend on us for their financial needs.',
    color: 'blue',
  },
  {
    icon: 'faShieldHalved',
    title: 'Security & Compliance',
    description:
      'We prioritize the security of every transaction and adhere to the highest regulatory standards to protect our customers and their money.',
    color: 'green',
  },
  {
    icon: 'faBolt',
    title: 'Speed & Efficiency',
    description:
      'We understand the urgency of money transfers and strive to deliver fast, efficient service without compromising on quality or security.',
    color: 'gold',
  },
  {
    icon: 'faUsers',
    title: 'Community Focus',
    description:
      "We're deeply connected to the communities we serve and committed to making a positive impact through our services and community initiatives.",
    color: 'red',
  },
  {
    icon: 'faGlobe',
    title: 'Global Perspective',
    description:
      'We embrace diversity and maintain a global outlook, adapting our services to meet the unique needs of customers across different regions and cultures.',
    color: 'blue',
  },
  {
    icon: 'faHeart',
    title: 'Customer-Centric',
    description:
      'We put our customers at the heart of everything we do, listening to their needs and continuously improving our services to exceed their expectations.',
    color: 'green',
  },
];

/**
 * Countries with direct branches
 */
export const BRANCH_COUNTRIES: Country[] = [
  { name: 'Australia', flag: 'au' },
  { name: 'Canada', flag: 'ca' },
  { name: 'Djibouti', flag: 'dj' },
  { name: 'Ethiopia', flag: 'et' },
  { name: 'Kenya', flag: 'ke' },
  { name: 'Norway', flag: 'no' },
  { name: 'Somalia', flag: 'so' },
  { name: 'South Sudan', flag: 'ss' },
  { name: 'Sudan', flag: 'sd' },
  { name: 'Sweden', flag: 'se' },
  { name: 'UAE', flag: 'ae' },
  { name: 'Uganda', flag: 'ug' },
  { name: 'UK', flag: 'gb' },
  { name: 'USA', flag: 'us' },
];

/**
 * Partner countries
 */
export const PARTNER_COUNTRIES: Country[] = [
  { name: 'Bangladesh', flag: 'bd' },
  { name: 'Egypt', flag: 'eg' },
  { name: 'India', flag: 'in' },
  { name: 'Indonesia', flag: 'id' },
  { name: 'Jordan', flag: 'jo' },
  { name: 'Kuwait', flag: 'kw' },
  { name: 'Lebanon', flag: 'lb' },
  { name: 'Morocco', flag: 'ma' },
  { name: 'Nepal', flag: 'np' },
  { name: 'Pakistan', flag: 'pk' },
  { name: 'Philippines', flag: 'ph' },
  { name: 'Sri Lanka', flag: 'lk' },
];
