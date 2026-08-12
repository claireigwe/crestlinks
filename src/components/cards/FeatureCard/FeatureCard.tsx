import React from 'react';
import { Heading } from '../../typography/Heading/Heading';
import { Text } from '../../typography/Text/Text';
import styles from './FeatureCard.module.css';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  id?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className = '',
  id,
}: FeatureCardProps) {
  return (
    <article className={`${styles.featureCard} ${className}`} id={id}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <Heading level={3} size="h5" className={styles.title}>
        {title}
      </Heading>
      <Text size="sm" color="secondary">
        {description}
      </Text>
    </article>
  );
}
