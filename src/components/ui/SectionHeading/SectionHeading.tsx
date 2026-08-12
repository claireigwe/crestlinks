import React from 'react';
import { Heading } from '../../typography/Heading/Heading';
import { Text } from '../../typography/Text/Text';
import { Badge } from '../Badge/Badge';
import styles from './SectionHeading.module.css';

export interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  level?: 1 | 2 | 3;
  className?: string;
  id?: string;
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  subtitle,
  align = 'left',
  level = 2,
  className = '',
  id,
}: SectionHeadingProps) {
  const textBody = description || subtitle;
  const containerClasses = [
    styles.sectionHeading,
    styles[`align-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses} id={id}>
      {eyebrow && <Badge variant="primary">{eyebrow}</Badge>}
      <Heading level={level} size="h2" className={styles.title}>
        {title}
      </Heading>
      {textBody && (
        <Text size="lg" color="secondary" className={styles.description}>
          {textBody}
        </Text>
      )}
    </div>
  );
}
