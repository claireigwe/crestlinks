import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  interactive?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Card({
  interactive = false,
  padding = 'md',
  as: Component = 'div',
  children,
  className = '',
  id,
}: CardProps) {
  const cardClasses = [
    styles.card,
    interactive ? styles.interactive : '',
    styles[`padding-${padding}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={cardClasses} id={id}>
      {children}
    </Component>
  );
}
