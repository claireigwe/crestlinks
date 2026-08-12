import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Badge({
  variant = 'primary',
  children,
  className = '',
  id,
}: BadgeProps) {
  const badgeClasses = [styles.badge, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={badgeClasses} id={id}>
      {children}
    </span>
  );
}
