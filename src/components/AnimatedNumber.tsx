
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

  // For CGPA (9.0), show one decimal place, otherwise round to integer
  const displayValue = value === 9.0 ? count.toFixed(1) : Math.round(count);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}{suffix}
    </span>
  );
};

export default AnimatedNumber;
