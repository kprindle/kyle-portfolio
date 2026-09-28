import { useEffect, useState } from 'react';

/** Tracks which section sits in the upper-middle of the viewport, for nav highlighting. */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);
  const key = ids.join('|');

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeId;
}
