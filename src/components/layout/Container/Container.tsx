import React from 'react';
import styles from './Container.module.css';

export interface ContainerProps {
  size?: 'default' | 'wide' | 'narrow';
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container({
  size = 'default',
  as: Component = 'div',
  children,
  className = '',
  id,
}: ContainerProps) {
  const containerClasses = [
    styles.container,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={containerClasses} id={id}>
      {children}
    </Component>
  );
}
