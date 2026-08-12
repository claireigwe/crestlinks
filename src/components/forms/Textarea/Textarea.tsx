import React from 'react';
import styles from './Textarea.module.css';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  className?: string;
  id: string;
}

export function Textarea({
  label,
  helperText,
  error,
  required = false,
  className = '',
  id,
  rows = 4,
  ...rest
}: TextareaProps) {
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
      <textarea
        id={id}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        className={styles.textarea}
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
