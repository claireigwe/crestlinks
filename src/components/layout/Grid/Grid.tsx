import React from 'react';
import styles from './Grid.module.css';

export interface GridProps {
  cols?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Grid({
  cols = 3,
  gap = 'md',
  as: Component = 'div',
  children,
  className = '',
  id,
}: GridProps) {
  const gridClasses = [
    styles.grid,
    styles[`cols-${cols}`],
    styles[`gap-${gap}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={gridClasses} id={id}>
      {children}
    </Component>
  );
}
