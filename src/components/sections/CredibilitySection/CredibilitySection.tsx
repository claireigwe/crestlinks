import React from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './CredibilitySection.module.css';

const pillars = [
  {
    number: '01',
    title: 'Trusted Sourcing',
    description:
      'Direct farm-level procurement network with verified agricultural producers across Nigeria.',
  },
  {
    number: '02',
    title: 'Professional Management',
    description:
      'Structured, transparent, and end-to-end coordinated export workflow from origin to port.',
  },
  {
    number: '03',
    title: 'Commitment to Quality',
    description:
      'Rigorous independent lab testing ensuring strict contract grade and moisture specifications.',
  },
  {
    number: '04',
    title: 'Long-Term Partnership',
    description:
      'Built on business integrity, clear buyer communication, and dependable supply consistency.',
  },
];

export function CredibilitySection() {
  return (
    <section className={styles.section} aria-label="Why Trust CrestLinks">
      <Container size="wide">
        <div className={styles.grid}>
          {/* Left Column — Quality Inspector Showcase */}
          <div className={styles.visualWrapper}>
            <Image
              src="/images/credibility.png"
              alt="Agricultural quality control specialist inspecting Nigerian export commodities under natural sunlight"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 45vw"
              className={styles.inspectorImage}
            />
            <div className={styles.floatingTag}>
              <div className={styles.tagIcon} aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className={styles.tagText}>
                <span className={styles.tagTitle}>
                  Independent Quality Inspection Before Every Shipment
                </span>
                <span className={styles.tagSubtitle}>
                  NEPC Registered Export Company
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — Editorial Narrative & 4 Trust Pillars */}
          <div className={styles.narrative}>
            <h2 className={styles.headline}>
              Built on Trust. Driven by Quality.
            </h2>

            <p className={styles.paragraph}>
              CrestLinks connects international buyers with premium Nigerian
              agricultural commodities through a transparent, reliable, and
              professionally managed export process.
            </p>

            <div className={styles.pillarsGrid}>
              {pillars.map((pillar) => (
                <div key={pillar.number} className={styles.pillarCard}>
                  <div className={styles.pillarHeader}>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <span className={styles.pillarNumber}>{pillar.number}</span>
                  </div>
                  <p className={styles.pillarDescription}>
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
