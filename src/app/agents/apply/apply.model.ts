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
 * Interface for agent application phases
 */
export interface AgentPhase {
  number: number;
  title: string;
  description: string;
  icon: IconProp;
}

/**
 * Country interface
 */
export interface Country {
  name: string;
}
