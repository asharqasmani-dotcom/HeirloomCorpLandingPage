import { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    label: 'HOME',
    href: '#top',
  },
  {
    label: 'ABOUT',
    href: '#about',
    dropdown: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Services', href: '#services' },
      { label: 'Our Process', href: '#process' },
      { label: 'Team', href: '#team' },
    ],
  },
  {
    label: 'PROPERTIES',
    href: '#properties',
    dropdown: [
      { label: 'Our Properties', href: '#properties' },
      { label: 'Single Property', href: '#properties' },
    ],
  },
  {
    label: 'INSIGHT',
    href: '#insights',
    dropdown: [
      { label: 'Blog', href: '#insights' },
      { label: 'Single Post', href: '#insights' },
    ],
  },
  {
    label: 'RESOURCES',
    href: '#testimonials',
    dropdown: [
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: '404 Error Page', href: '#not-found' },
    ],
  },
  {
    label: 'CONTACT',
    href: '#contact',
  },
];

export const footerPages: { label: string; href: string }[] = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export const footerServices: { label: string; href: string }[] = [
  { label: 'Property Advisory', href: '#about' },
  { label: 'Private Viewing', href: '#process' },
  { label: 'Investment Guidance', href: '#properties' },
  { label: 'Market Insights', href: '#insights' },
  { label: 'Client Consultation', href: '#inquire' },
];

export const footerLegal: { label: string; href: string }[] = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms & Conditions', href: '#terms' },
];
