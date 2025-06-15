
import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationOptions {
  start?: number;
  end: number;
  duration?: number;
  startOnMount?: boolean;
}

export const useCountAnimation = ({ 
  start = 0, 
  end, 
  duration = 1000,
  startOnMount = true 
}: UseCountAnimationOptions) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef<number>();
  const elementRef = useRef<HTMLElement>(null);

  const startAnimation = () => {
    if (isAnimating || hasAnimated) return;
    
    setIsAnimating(true);
    setHasAnimated(true);
    const startTime = Date.now();
    const startValue = start;
    const endValue = end;
    const totalChange = endValue - startValue;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Faster easing function for more dynamic animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (totalChange * easeOutCubic);
      
      setCount(currentValue);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount) {
      startAnimation();
      return;
    }

    // Set up intersection observer for scroll-triggered animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            console.log('Element is intersecting, starting animation');
            startAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
      console.log('Observer attached to element');
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [end, duration, startOnMount, hasAnimated, isAnimating]);

  return { count, startAnimation, isAnimating, elementRef };
};
