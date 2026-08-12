import React from 'react';
import styles from './Divider.module.css';

export interface DividerProps {
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
}

export function Divider({
  spacing = 'md',
  className = '',
  id,
}: DividerProps) {
  const dividerClasses = [
    styles.divider,
    styles[`spacing-${spacing}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <hr className={dividerClasses} id={id} />;
}
