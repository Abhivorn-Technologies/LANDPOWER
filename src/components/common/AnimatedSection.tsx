'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  id,
  direction = 'up',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 32 };
      case 'down':
        return { opacity: 0, y: -32 };
      case 'left':
        return { opacity: 0, x: -32 };
      case 'right':
        return { opacity: 0, x: 32 };
      case 'none':
      default:
        return { opacity: 0, y: 0, scale: 0.96 };
    }
  };

  return (
    <motion.div
      id={id}
      className={className}
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // Premium ease-out curve
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
