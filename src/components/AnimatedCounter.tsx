import React from 'react';
import { useCounterAnimation } from '@/hooks/use-counter-animation';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const { ref, count } = useCounterAnimation({
    end,
    duration,
    prefix,
    suffix,
    decimals,
  });

  return (
    <div ref={ref} className={className}>
      {count}
    </div>
  );
};

export default AnimatedCounter;
