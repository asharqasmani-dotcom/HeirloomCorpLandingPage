import { NavItem } from '../types';

// Single-page anchors. Every href resolves to a section id rendered in App.tsx.
export const navigationItems: NavItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Initiatives', href: '#initiatives' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const headerCta = { label: 'Partner With Us', href: '#contact' };

export const footerExplore: NavItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Our Values', href: '#values' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Contact', href: '#contact' },
];

export const footerConnect: NavItem[] = [
  { label: 'Community Initiatives', href: '#initiatives' },
  { label: 'Resource Partnerships', href: '#partnerships' },
  { label: 'Institutional Inquiries', href: '#contact' },
  { label: 'Contact Our Team', href: '#contact' },
];

// PLACEHOLDER: legal pages do not exist yet; anchors are inert until client supplies content.
export const footerLegal: NavItem[] = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Use', href: '#terms' },
];
