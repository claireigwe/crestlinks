import React from 'react';
import styles from './Heading.module.css';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Heading({
  level = 2,
  size,
  as,
  children,
  className = '',
  id,
}: HeadingProps) {
  const Component = as || (`h${level}` as React.ElementType);
  const sizeVariant = size || `h${level}`;

  const headingClasses = [
    styles.heading,
    styles[sizeVariant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={headingClasses} id={id}>
      {children}
    </Component>
  );
}
