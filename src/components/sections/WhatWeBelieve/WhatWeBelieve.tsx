import React from 'react';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './WhatWeBelieve.module.css';

interface BeliefItem {
  tag: string;
  title: string;
  text: string;
}

const beliefs: BeliefItem[] = [
  {
    tag: 'Principle 01',
    title: 'Direct Origin Integrity',
    text: 'We believe genuine quality begins at the soil. By working directly with verified agricultural co-ops across Nigeria, we ensure complete supply chain origin tracking and fair local partnerships.',
  },
  {
    tag: 'Principle 02',
    title: 'Independent Quality Verification',
    text: 'We believe trust must be verified empirically. Independent lab analysis, moisture testing, and grade certification are mandatory before any cargo container receives export loading approval.',
  },
  {
    tag: 'Principle 03',
    title: 'Complete Regulatory Compliance',
    text: 'We believe international trade should operate without administrative friction. All NEPC permits, phytosanitary certificates, and export documentation are meticulously prepared for seamless customs entry.',
  },
  {
    tag: 'Principle 04',
    title: 'Partnership Over Spot Trading',
    text: 'We believe long-term commercial relationships create far greater value than spot market transactions. We measure our success by multi-year buyer satisfaction and supply reliability.',
  },
];

export function WhatWeBelieve() {
  return (
    <section className={styles.section} aria-label="What We Believe">
      <Container size="wide">
        <div className={styles.headerWrapper}>
          <Badge variant="primary" className={styles.eyebrow}>
            Operating Philosophy
          </Badge>
          <h2 className={styles.headline}>
            What We Believe
          </h2>
          <p className={styles.subheading}>
            Our core values guide every decision, from farm-level procurement to international destination port delivery.
          </p>
        </div>

        <div className={styles.grid}>
          {beliefs.map((b) => (
            <article key={b.tag} className={styles.card}>
              <span className={styles.cardTag}>{b.tag}</span>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardText}>{b.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
