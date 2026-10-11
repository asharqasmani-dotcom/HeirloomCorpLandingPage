import { render, cleanup } from '@testing-library/react';
import { useRef } from 'react';
import { afterEach, expect, it, vi } from 'vitest';
import { useReferenceMotion } from '../hooks/useReferenceMotion';

const Harness = () => {
  const root = useRef<HTMLDivElement>(null);
  useReferenceMotion(root);
  return <div ref={root}><div className="counter-item">Community</div><div className="counter-item">Partnership</div></div>;
};

afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

function setup(reduced = false) {
  const cancel = vi.fn();
  const animate = vi.fn(() => ({ cancel, onfinish: null }));
  Object.defineProperty(Element.prototype, 'animate', { configurable: true, value: animate });
  vi.stubGlobal('matchMedia', () => ({ matches: reduced, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
  let callback: IntersectionObserverCallback;
  const unobserve = vi.fn();
  const disconnect = vi.fn();
  vi.stubGlobal('IntersectionObserver', class {
    constructor(cb: IntersectionObserverCallback) { callback = cb; }
    observe = vi.fn();
    unobserve = unobserve;
    disconnect = disconnect;
  });
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({ bottom: 100, top: 0 } as DOMRect);
  return { animate, cancel, unobserve, disconnect, enter: (target: Element) => callback([{ target, isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver) };
}

it('reveals once with reference duration and stagger, and cancels on unmount', () => {
  const motion = setup();
  const view = render(<Harness />);
  const first = view.getByText('Community');
  const second = view.getByText('Partnership');
  expect(first.style.opacity).toBe('0');
  motion.enter(first); motion.enter(first); motion.enter(second);
  expect(motion.animate).toHaveBeenCalledTimes(2);
  expect(motion.animate.mock.calls[0]).toEqual(expect.arrayContaining([expect.objectContaining({ duration: 1250, delay: 200, easing: 'ease' })]));
  expect(motion.animate.mock.calls[1]).toEqual(expect.arrayContaining([expect.objectContaining({ delay: 300 })]));
  expect(first.style.opacity).toBe('');
  view.unmount();
  expect(motion.cancel).toHaveBeenCalledTimes(2);
});

it('leaves content visible without animation when reduced motion is requested', () => {
  const motion = setup(true);
  const view = render(<Harness />);
  expect(view.getByText('Community').style.opacity).toBe('');
  expect(motion.animate).not.toHaveBeenCalled();
});
