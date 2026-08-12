import React from 'react';
import styles from './Input.module.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  className?: string;
  id: string;
}

export function Input({
  label,
  helperText,
  error,
  required = false,
  className = '',
  id,
  ...rest
}: InputProps) {
  const groupClasses = [
    styles.fieldGroup,
    error ? styles.hasError : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={groupClasses}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.requiredMark}>*</span>}
        </label>
      )}
      <input
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        className={styles.input}
        {...rest}
      />
      {error && (
        <span id={`${id}-error`} className={styles.errorText} role="alert">
          {error}
        </span>
      )}
      {!error && helperText && (
        <span id={`${id}-helper`} className={styles.helperText}>
          {helperText}
        </span>
      )}
    </div>
  );
}
