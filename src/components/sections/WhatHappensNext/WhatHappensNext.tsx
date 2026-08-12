import React from 'react';
import { Container } from '../../layout/Container/Container';
import styles from './WhatHappensNext.module.css';

const STEPS = [
  {
    stepNumber: '01',
    title: 'Requirement Evaluation',
    description:
      'Our trade management desk reviews your product specifications, target order quantity, packaging requirements, and destination port standards within 24 business hours.',
  },
  {
    stepNumber: '02',
    title: 'Origin & Quality Verification',
    description:
      'We verify current harvest availability, grading parameters (e.g. moisture content, purity, kernel outturn), and packaging options with our trusted Nigerian producer network.',
  },
  {
    stepNumber: '03',
    title: 'Formal Commercial Offer',
    description:
      'You receive a comprehensive FOB or CIF quotation detailing clear specification parameters, pricing structure, lead times, payment terms, and documentation support.',
  },
  {
    stepNumber: '04',
    title: 'Export Execution & Shipment',
    description:
      'Upon contract confirmation, we coordinate pre-shipment inspection (SGS/Bureau Veritas), statutory export documentation, customs clearance, and port loading for export.',
  },
];

export function WhatHappensNext() {
  return (
    <section className={styles.section} aria-label="What Happens After Submission">
      <Container size="wide">
        <div className={styles.header}>
          <span className={styles.kicker}>Post-Inquiry Process</span>
          <h2 className={styles.title}>What Happens After You Submit</h2>
          <p className={styles.subtitle}>
            Every inquiry initiates a structured commercial trade conversation. Here is how our team handles your sourcing request.
          </p>
        </div>

        <div className={styles.grid}>
          {STEPS.map((item) => (
            <div key={item.stepNumber} className={styles.stepCard}>
              <div className={styles.cardNumber}>{item.stepNumber}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
