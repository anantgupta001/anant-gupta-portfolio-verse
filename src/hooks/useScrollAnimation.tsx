import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px', // changed from '50px 0px -50px 0px' to '0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    } else {
      // fallback: if ref is not set, show content
      setIsVisible(true);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return { elementRef, isVisible };
};