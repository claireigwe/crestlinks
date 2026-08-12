import React from 'react';
import { Container } from '../../layout/Container/Container';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import styles from './ExportJourney.module.css';

const steps = [
  {
    step: 'Step 01',
    title: 'Submit Enquiry',
    description:
      'Share your required commodity, volume, grade specifications, and preferred port of delivery.',
  },
  {
    step: 'Step 02',
    title: 'Discuss Requirements',
    description:
      'Our export specialists review contract terms, pricing structures, and delivery schedules with you.',
  },
  {
    step: 'Step 03',
    title: 'Product Sourcing',
    description:
      'Commodities are selected and aggregated from our verified producer network across Nigeria.',
  },
  {
    step: 'Step 04',
    title: 'Quality Verification',
    description:
      'Rigorous lab testing and physical quality inspections are performed prior to final packaging.',
  },
  {
    step: 'Step 05',
    title: 'Export Documentation',
    description:
      'All regulatory, phytosanitary, NEPC permits, and customs clearance certificates are finalized.',
  },
  {
    step: 'Step 06',
    title: 'Packaging & Shipment',
    description:
      'Commodities are packaged in export-grade bags and loaded into ocean containers for shipping.',
  },
  {
    step: 'Step 07',
    title: 'Ongoing Support',
    description:
      'Full vessel tracking updates are provided until cargo safely arrives at your destination port.',
  },
];

export function ExportJourney() {
  return (
    <section className={`section ${styles.section}`} aria-label="Export Process Timeline">
      <Container size="wide">
        <SectionHeading
          eyebrow="Structured Process"
          title="A Transparent Journey from Farm to Global Markets"
          subtitle="How CrestLinks manages your agricultural commodity order from initial enquiry to final port arrival."
          align="center"
        />

        <div className={styles.timeline}>
          {steps.map((item) => (
            <div key={item.step} className={styles.stepCard}>
              <span className={styles.stepNumber}>{item.step}</span>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
