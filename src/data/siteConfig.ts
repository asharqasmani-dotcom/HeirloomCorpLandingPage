export const siteConfig = {
  name: 'Heirloom Legacy, Inc.',
  organization: 'Heirloom Legacy, Inc.',
  domain: 'HeirloomCorp.org',
  publicWebsite: { label: 'HeirloomLegacy.org', href: 'https://heirloomlegacy.org' },
  corporateSite: { label: 'HeirloomCorp.org', href: 'https://heirloomcorp.org' },
  tagline: 'Building a Legacy of Stability Through Community, Partnership, and Purpose.',
  email: 'info@heirloomlegacy.org',
  copyright: '© 2026 Heirloom Legacy, Inc. All Rights Reserved.',
  // PLACEHOLDER: social profile URLs below are generic and must be replaced with
  // client-approved Heirloom Legacy profiles (or removed) before publishing.
  socials: [
    { label: 'IG', href: 'https://instagram.com', ariaLabel: 'Instagram (placeholder link)' },
    { label: 'LI', href: 'https://linkedin.com', ariaLabel: 'LinkedIn (placeholder link)' },
    { label: 'FB', href: 'https://facebook.com', ariaLabel: 'Facebook (placeholder link)' },
    { label: 'YT', href: 'https://youtube.com', ariaLabel: 'YouTube (placeholder link)' },
    { label: 'X', href: 'https://x.com', ariaLabel: 'X (placeholder link)' },
  ],
  logos: {
    // Heirloom Legacy, Inc. full wordmark (gold monogram + ivory text, transparent bg) — header & footer
    primary: '/assets/brand/heirloom-legacy-logo.png',
    light: '/assets/brand/heirloom-legacy-logo.png',
    // Gold monogram mark — favicon / app icon / organizational avatar
    mark: '/assets/brand/heirloom-legacy-mark.png',
    favicon: '/assets/brand/favicon-32.png',
  },
  hero: {
    bgImage: '/assets/dit.nomadenstudio.com/arvon/wp-content/uploads/sites/7/2026/01/Image-Gen-5.png',
    watermark: 'LEGACY',
    eyebrow: 'Heirloom Legacy, Inc.',
    heading: 'Building a Legacy of Stability Through Community and Partnership.',
    description:
      'Creating meaningful opportunities through community partnerships, purposeful resources, and a lasting commitment to dignity and stability.',
    cta: { label: 'Explore Our Mission', href: '#mission' },
    // Static highlight bar (replaces the former property-search bar; text only, same design)
    highlights: [
      { label: 'Our Purpose', value: 'Community Stability' },
      { label: 'Our Focus', value: 'Meaningful Partnerships' },
      { label: 'Our Vision', value: 'Lasting Community Impact' },
    ],
    highlightCta: { label: 'Connect With Us', href: '#contact' },
  },
};
