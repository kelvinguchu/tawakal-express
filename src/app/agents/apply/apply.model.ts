import { IconProp } from '@fortawesome/fontawesome-svg-core';

/**
 * Interface for agent benefits
 */
export interface AgentBenefit {
  title: string;
  description: string;
  icon: IconProp;
  color: string;
}

/**
 * Country interface
 */
export interface Country {
  name: string;
}
