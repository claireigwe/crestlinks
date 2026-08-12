import React from 'react';
import { Container } from '../../layout/Container/Container';
import styles from './DocumentationCompliance.module.css';

interface DocPillar {
  num: string;
  title: string;
  text: string;
}

const docPillars: DocPillar[] = [
  {
    num: 'DOCUMENTATION 01',
    title: 'NEPC License & Origin Certification',
    text: 'Complete verification under CrestLinks official Nigerian Export Promotion Council (NEPC) license, paired with Chamber of Commerce Certificates of Origin guaranteeing authentic regional sourcing.',
  },
  {
    num: 'DOCUMENTATION 02',
    title: 'Phytosanitary & Lab Verification',
    text: 'Official Ministry of Agriculture Phytosanitary Certificates issued following physical crop inspection, confirming freedom from pests, contaminants, and botanical disease.',
  },
  {
    num: 'DOCUMENTATION 03',
    title: 'Bills of Lading & Customs Filings',
    text: 'Clean On-Board Ocean Bills of Lading, Commercial Invoices, and Packing Lists meticulously prepared to ensure immediate customs clearance at destination sea ports.',
  },
];

export function DocumentationCompliance() {
  return (
    <section className={styles.section} aria-label="Documentation & Compliance Protocols">
      <Container size="wide">
        <div className={styles.contentWrapper}>
          <div className={styles.headerWrapper}>
            <h2 className={styles.headline}>
              Documentation & Regulatory Precision
            </h2>
            <p className={styles.subheading}>
              We eliminate administrative import friction by preparing every required statutory permit and maritime trade document prior to vessel departure.
            </p>
          </div>

          <div className={styles.grid}>
            {docPillars.map((doc) => (
              <article key={doc.num} className={styles.docColumn}>
                <span className={styles.num}>{doc.num}</span>
                <h3 className={styles.cardTitle}>{doc.title}</h3>
                <p className={styles.cardText}>{doc.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
