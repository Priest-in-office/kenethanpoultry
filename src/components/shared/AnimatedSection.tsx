import { type ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleUp';
  delay?: number;
  className?: string;
  stagger?: number;
}

export default function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  className = '',
  stagger = 0,
}: AnimatedSectionProps) {
  const ref = useScrollAnimation<HTMLDivElement>({ animation, delay, stagger });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
