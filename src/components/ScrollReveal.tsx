
import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number; // Between 0 and 1
  delay?: number; // Milliseconds
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  threshold = 0.1,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add('active');
            }
          }, delay);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);
  
  return (
    <div ref={ref} className="reveal-section">
      {children}
    </div>
  );
};

export default ScrollReveal;
