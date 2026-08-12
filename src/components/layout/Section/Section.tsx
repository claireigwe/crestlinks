import React from 'react';
import styles from './Section.module.css';

export interface SectionProps {
  size?: 'default' | 'sm' | 'lg';
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({
  size = 'default',
  as: Component = 'section',
  children,
  className = '',
  id,
}: SectionProps) {
  const sectionClasses = [
    styles.section,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={sectionClasses} id={id}>
      {children}
    </Component>
  );
}
