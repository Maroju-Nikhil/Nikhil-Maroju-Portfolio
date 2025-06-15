
import React from 'react';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  startOnMount?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  value, 
  suffix = '', 
  duration = 800,
  className = '',
  startOnMount = true 
}) => {
  const { count, elementRef } = useCountAnimation({ 
    end: value, 
    duration,
    startOnMount 
  });

  return (
    <span ref={elementRef} className={className}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedNumber;
