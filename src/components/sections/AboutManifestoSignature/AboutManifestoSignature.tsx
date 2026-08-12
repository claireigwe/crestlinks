import React from 'react';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './AboutManifestoSignature.module.css';

interface PillarData {
  numberStr: string;
  title: string;
  text: string;
}

const manifestoPillars: PillarData[] = [
  {
    numberStr: '01',
    title: 'Direct Origin Traceability',
    text: 'We partner directly with verified farming cooperatives across prime agricultural belts in Nigeria. This farm-level integration guarantees authentic commodity origin and sustainable sourcing practices.',
  },
  {
    numberStr: '02',
    title: 'Independent Lab Verification',
    text: 'Before any container receives warehouse exit approval, independent laboratory testing and physical grade inspections verify moisture levels and purity against contract specifications.',
  },
  {
    numberStr: '03',
    title: 'Frictionless Port Delivery',
    text: 'Complete management of Phytosanitary Certificates, NEPC documentation, and customs clearance procedures, followed by supervised container terminal loading for on-time vessel departure.',
  },
];

export function AboutManifestoSignature() {
  return (
    <section
      className={styles.section}
      aria-label="The CrestLinks Operating Manifesto"
    >
      <Container size="wide">
        <div className={styles.contentWrapper}>
          {/* Statement Header */}
          <div className={styles.statementHeader}>
            <h2 className={styles.giantStatement}>
              We measure quality not by sales promises, but by pre-shipment laboratory certificates.
            </h2>
          </div>

          {/* 3-Column Asymmetric Breakdown */}
          <div className={styles.grid}>
            {manifestoPillars.map((pillar) => (
              <article key={pillar.numberStr} className={styles.manifestoColumn}>
                <span className={styles.columnNumber}>
                  PILLAR {pillar.numberStr}
                </span>
                <h3 className={styles.columnTitle}>{pillar.title}</h3>
                <p className={styles.columnText}>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
