/**
 * Heirloom Legacy, Inc. Design Tokens
 * Official brand book colors and typography tokens.
 */
export const tokens = {
  colors: {
    navy: '#0B1B3D',
    ivory: '#F5F2E9',
    gold: '#B6975E',
    green: '#0A3A2F',
    white: '#FFFFFF',
    gray: '#A0A0A0',

    // Derived UI tokens
    goldSoft: '#CBB182',
    goldBorder: 'rgba(182, 151, 94, 0.35)',
    goldBorderSoft: 'rgba(182, 151, 94, 0.18)',
    ivoryOnDark: 'rgba(245, 242, 233, 0.82)',
    ivoryDim: 'rgba(245, 242, 233, 0.62)',
    navyDim: 'rgba(11, 27, 61, 0.70)',
    navyFaint: 'rgba(11, 27, 61, 0.14)',
  },
  fonts: {
    title: '"Cormorant Garamond", "Minion Variable", Georgia, serif',
    body: '"Inter", "Helvetica Now", Helvetica, Arial, sans-serif',
  },
  typography: {
    eyebrow: {
      fontSize: '12px',
      fontWeight: 600,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.28em',
    },
    heroH1: {
      fontSize: 'clamp(2.6rem, 5.4vw, 4.6rem)',
      fontWeight: 600,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
    },
    sectionH2: {
      fontSize: 'clamp(2rem, 4vw, 3.25rem)',
      fontWeight: 600,
      lineHeight: 1.08,
    },
    cardHeading: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    bodyText: {
      desktopSize: '17px',
      mobileSize: '16px',
      fontWeight: 400,
      lineHeight: 1.65,
    },
    button: {
      fontSize: '14px',
      fontWeight: 600,
    },
  },
  breakpoints: {
    mobile: '767px',
    tablet: '1024px',
    desktop: '1280px',
  },
} as const;
