import React from 'react';
import styles from './Text.module.css';

export interface TextProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'muted' | 'inverse';
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Text({
  size = 'base',
  weight = 'regular',
  color = 'primary',
  as: Component = 'p',
  children,
  className = '',
  id,
}: TextProps) {
  const textClasses = [
    styles.text,
    styles[size],
    styles[`weight-${weight}`],
    styles[`color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={textClasses} id={id}>
      {children}
    </Component>
  );
}
