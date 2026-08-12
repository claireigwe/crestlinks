import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: (e: React.MouseEvent) => void;
  'aria-label'?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  type = 'button',
  children,
  className = '',
  id,
  onClick,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        id={id}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      id={id}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
