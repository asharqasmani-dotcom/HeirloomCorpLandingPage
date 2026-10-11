import { ClientLogo } from '../types';

// PLACEHOLDER LOGOS — these are template artwork from the original design kit.
// They are NOT actual Heirloom Legacy partners and must be replaced with
// client-approved partner logos (or the strip removed) before publishing.
const base = '/assets/dit.nomadenstudio.com/arvon/wp-content/uploads/sites/7/2026/01/';
const files = ['Client-1.png', 'Clien-2.png', 'Clien-3.png', 'Clien-4.png', 'Clien-5.png', 'Clien-6.png', 'Clien-7.png', 'Clien-8.png'];

export const clientLogos: ClientLogo[] = files.map((file, i) => ({
  id: `placeholder-logo-${i + 1}`,
  name: `Placeholder partner ${i + 1}`,
  src: base + file,
  alt: `Placeholder partner logo ${i + 1} — pending client-approved replacement`,
  placeholder: true,
}));
