import { Statement } from '../types';
import { siteConfig } from './siteConfig';

// Organizational statement only. No donor/client testimonials are displayed because
// none have been verified or approved for attribution.
export const statementsData: Statement[] = [
  {
    id: 'statement-1',
    author: 'Heirloom Legacy, Inc.',
    role: 'Our Community Philosophy',
    quote:
      'Because the strongest communities are built through partnership, our vision is to bring people and purposeful resources together to create opportunities for lasting stability.',
    avatar: siteConfig.logos.mark,
    identifier: siteConfig.publicWebsite.label,
  },
];
