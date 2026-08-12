import React from 'react';
import { Text } from '../../typography/Text/Text';
import styles from './StatisticCard.module.css';

export interface StatisticCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
  id?: string;
}

export function StatisticCard({
  value,
  label,
  description,
  className = '',
  id,
}: StatisticCardProps) {
  return (
    <div className={`${styles.statisticCard} ${className}`} id={id}>
      <span className={styles.value}>{value}</span>
      <Text size="base" color="primary" className={styles.label}>
        {label}
      </Text>
      {description && (
        <Text size="xs" color="secondary">
          {description}
        </Text>
      )}
    </div>
  );
}
