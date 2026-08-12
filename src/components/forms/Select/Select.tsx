import React from 'react';
import styles from './Select.module.css';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  className?: string;
  id: string;
}

export function Select({
  label,
  options,
  placeholder,
  helperText,
  error,
  required = false,
  className = '',
  id,
  ...rest
}: SelectProps) {
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
      <select
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        className={styles.select}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
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
