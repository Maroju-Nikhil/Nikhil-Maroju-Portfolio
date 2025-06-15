
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
  duration = 2000,
  className = '',
  startOnMount = true 
}) => {
  const { count } = useCountAnimation({ 
    end: value, 
    duration,
    startOnMount 
  });

  return (
    <span className={className}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedNumber;
