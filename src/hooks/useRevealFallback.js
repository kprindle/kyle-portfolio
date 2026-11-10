import { useEffect } from 'react';

const SELECTOR = '.reveal, .reveal-stagger > *';

/**
 * Scroll fades for browsers without scroll-driven animations (Firefox today). Where
 * `animation-timeline: view()` works, motion.css does it all in CSS and this does nothing.
 * Blocks fade in as they come on screen and out as they scroll off the top (data-shown, data-above).
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
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) el.setAttribute('data-shown', '');
    }
    document.documentElement.classList.add('js-reveal');

    // The top margin makes a block fade out a little before it slides under the sticky header.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.setAttribute('data-shown', '');
            el.removeAttribute('data-above');
          } else {
            el.removeAttribute('data-shown');
            el.toggleAttribute('data-above', entry.boundingClientRect.top < 0);
          }
        }
      },
      { rootMargin: '-12% 0px -8% 0px' }
    );
    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);
}
