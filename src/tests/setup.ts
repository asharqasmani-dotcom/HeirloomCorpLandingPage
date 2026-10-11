import '@testing-library/jest-dom';

// Polyfill IntersectionObserver for testing animated counters
const mockIntersectionObserver = vi.fn().mockImplementation((callback) => ({
  observe: vi.fn((target) => {
    callback(
      [
        {
          isIntersecting: true,
          target,
          boundingClientRect: target.getBoundingClientRect(),
          intersectionRatio: 1,
          intersectionRect: target.getBoundingClientRect(),
          rootBounds: null,
          time: Date.now(),
        },
      ],
      this
    );
  }),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  takeRecords: vi.fn(() => []),
  root: null,
  rootMargin: '',
  thresholds: [],
  scrollMargin: '',
}));

window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
