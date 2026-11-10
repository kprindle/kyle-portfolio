import { useEffect } from 'react';

const SELECTOR = '.reveal, .reveal-stagger > *';

/**
 * Scroll reveals for browsers without scroll-driven animations (Firefox today). Where
 * `animation-timeline: view()` works, motion.css does it all in CSS and this does nothing.
 * Content is visible until this runs, so with no JS nothing is hidden.
 */
export function useRevealFallback() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supported = typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()');
    if (reduced || supported || !('IntersectionObserver' in window)) return undefined;

    const elements = [...document.querySelectorAll(SELECTOR)];
    // Anything already on screen stays shown, so nothing above the fold blinks out and back in.
    for (const el of elements) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.setAttribute('data-shown', '');
    }
    document.documentElement.classList.add('js-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-shown', '');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    for (const el of elements) {
      if (!el.hasAttribute('data-shown')) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}
