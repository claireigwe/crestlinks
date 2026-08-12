import React from 'react';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './HowWeWork.module.css';

interface OperationalPillar {
  num: string;
  title: string;
  text: string;
}

const pillars: OperationalPillar[] = [
  {
    num: '01',
    title: 'Transparent Buyer Communication',
    text: 'Clear, direct, and proactive trade updates from initial contract discussion through order execution and shipping manifest tracking.',
  },
  {
    num: '02',
    title: 'Strict Quality Inspection',
    text: 'Every commodity shipment is physically graded and moisture-checked against agreed buyer contract specifications before warehouse exit.',
  },
  {
    num: '03',
    title: 'Full Regulatory Compliance',
    text: 'End-to-end management of Phytosanitary Certificates, Certificates of Origin, NEPC documentation, and customs clearance procedures.',
  },
  {
    num: '04',
    title: 'Dependable Vessel Fulfilment',
    text: 'Supervised terminal loading at Nigerian sea ports ensuring secure container sealing, cargo protection, and on-time ocean vessel departure.',
  },
];

export function HowWeWork() {
  return (
    <section className={styles.section} aria-label="How We Work">
      <Container size="wide">
        <div className={styles.headerWrapper}>
          <Badge variant="primary" className={styles.eyebrow}>
            Operational Standards
          </Badge>
          <h2 className={styles.headline}>
            How We Work
          </h2>
          <p className={styles.subheading}>
            The core operating principles that guide every export relationship from initial enquiry to destination port arrival.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((p) => (
            <article key={p.num} className={styles.pillarCard}>
              <span className={styles.pillarNum}>{p.num}</span>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarText}>{p.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
