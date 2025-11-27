// Breakpoint definitions (in pixels)
export const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};

// Media query helpers for styled-components
export const media = {
  // Mobile only: < 768px
  mobile: (styles) => `
    @media (max-width: ${breakpoints.tablet - 1}px) {
      ${styles}
    }
  `,

  // Tablet only: 768px - 1023px
  tablet: (styles) => `
    @media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px) {
      ${styles}
    }
  `,

  // Desktop: >= 1024px
  desktop: (styles) => `
    @media (min-width: ${breakpoints.desktop}px) {
      ${styles}
    }
  `,

  // Wide: >= 1440px
  wide: (styles) => `
    @media (min-width: ${breakpoints.wide}px) {
      ${styles}
    }
  `,

  // Tablet and up: >= 768px
  tabletUp: (styles) => `
    @media (min-width: ${breakpoints.tablet}px) {
      ${styles}
    }
  `,

  // Desktop and up: >= 1024px
  desktopUp: (styles) => `
    @media (min-width: ${breakpoints.desktop}px) {
      ${styles}
    }
  `,
};

// Utility function to get current breakpoint
export function getCurrentBreakpoint() {
  if (typeof window === 'undefined') return 'desktop';

  const width = window.innerWidth;

  if (width < breakpoints.tablet) {
    return 'mobile';
  } else if (width < breakpoints.desktop) {
    return 'tablet';
  } else if (width < breakpoints.wide) {
    return 'desktop';
  } else {
    return 'wide';
  }
}
