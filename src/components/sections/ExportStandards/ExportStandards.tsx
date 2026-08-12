import React from 'react';
import { Container } from '../../layout/Container/Container';
import styles from './ExportStandards.module.css';

interface ProtocolItem {
  num: string;
  title: string;
  text: string;
}

const protocols: ProtocolItem[] = [
  {
    num: 'PROTOCOL 01',
    title: 'Pre-Shipment Lab Sampling',
    text: 'Independent laboratory sampling and physical grade checks are conducted on every commodity batch before warehouse exit to verify purity, nut count, and contract specifications.',
  },
  {
    num: 'PROTOCOL 02',
    title: 'Moisture Control & Liner Preservation',
    text: 'Strict moisture threshold monitoring combined with multi-wall jute sacks, vacuum-sealed inner foil bags, or container liners ensures cargo freshness throughout maritime transit.',
  },
  {
    num: 'PROTOCOL 03',
    title: 'Full Regulatory Clearance',
    text: 'End-to-end preparation of Phytosanitary Certificates, NEPC permits, Certificates of Origin, and Bills of Lading for frictionless customs entry at destination sea ports.',
  },
];

export function ExportStandards() {
  return (
    <section className={styles.section} aria-label="Quality & Export Standards">
      <Container size="wide">
        <div className={styles.contentWrapper}>
          <div className={styles.headerWrapper}>
            <h2 className={styles.headline}>
              The Standards Behind Every Shipment
            </h2>
            <p className={styles.subheading}>
              Our rigorous quality assurance framework protects cargo integrity from harvest origin to vessel port arrival.
            </p>
          </div>

          <div className={styles.grid}>
            {protocols.map((p) => (
              <article key={p.num} className={styles.standardColumn}>
                <span className={styles.num}>{p.num}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardText}>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
