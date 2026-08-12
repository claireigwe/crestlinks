import React from 'react';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './WhyChooseUsManifesto.module.css';

interface OperationalPrinciple {
  number: string;
  heading: string;
  text: string;
}

const principles: OperationalPrinciple[] = [
  {
    number: '01',
    heading: 'Verified Sourcing',
    text: 'We partner directly with verified producers and agricultural cooperatives across prime Nigerian growing belts to guarantee product origin and supply consistency.',
  },
  {
    number: '02',
    heading: 'Independent Quality Verification',
    text: 'Every batch undergoes rigorous pre-shipment laboratory analysis and moisture testing to ensure strict compliance with international buyer contract specifications.',
  },
  {
    number: '03',
    heading: 'Professional Export Management',
    text: 'Complete end-to-end handling of phytosanitary certificates, NEPC registration permits, customs clearance, and container shipping documentation.',
  },
  {
    number: '04',
    heading: 'Transparent Communication',
    text: 'Direct, clear, and proactive updates from initial contract negotiation to real-time vessel tracking until cargo arrives at your destination port.',
  },
  {
    number: '05',
    heading: 'Long-Term Partnership Focus',
    text: 'We prioritize long-term commercial relationships and supply continuity over short-term spot transactions, acting as a dependable trade partner.',
  },
];

export function WhyChooseUsManifesto() {
  return (
    <section className={styles.section} aria-label="Why Buyers Choose CrestLinks">
      <Container size="wide">
        <div className={styles.contentWrapper}>
          {/* Bold Manifesto Header */}
          <div className={styles.manifestoHeader}>
            <h2 className={styles.manifestoStatement}>
              Built for Long-Term Partnerships.
            </h2>
          </div>

          {/* 5 Editorial Principles Stack */}
          <div className={styles.principlesList}>
            {principles.map((principle) => (
              <article key={principle.number} className={styles.principleRow}>
                <span className={styles.principleNumber}>
                  {principle.number}
                </span>
                <h3 className={styles.principleHeading}>
                  {principle.heading}
                </h3>
                <p className={styles.principleText}>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
