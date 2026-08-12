import React from 'react';
import styles from './Stack.module.css';

export interface StackProps {
  direction?: 'row' | 'column';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Stack({
  direction = 'column',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  as: Component = 'div',
  children,
  className = '',
  id,
}: StackProps) {
  const stackClasses = [
    styles.stack,
    styles[direction],
    styles[`gap-${gap}`],
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={stackClasses} id={id}>
      {children}
    </Component>
  );
}
