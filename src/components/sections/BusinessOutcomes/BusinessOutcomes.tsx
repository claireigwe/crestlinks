import React from 'react';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import styles from './BusinessOutcomes.module.css';

export function BusinessOutcomes() {
  return (
    <section className={styles.section} aria-label="Why Businesses Choose CrestLinks">
      <Container size="wide">
        <div className={styles.contentWrapper}>
          <h2 className={styles.headline}>
            Reduced Complexity. Predictable Execution.
          </h2>
          <p className={styles.paragraph}>
            International buyers choose CrestLinks not for generic services, but for commercial peace of mind. By handling farm-level sourcing, pre-shipment lab verification, customs filings, and container logistics under one roof, we eliminate supply chain complexity and protect your procurement schedule.
          </p>
          <div className={styles.ctaWrapper}>
            <Button variant="primary" size="md" href="/contact" className={styles.discussBtn}>
              Discuss Your Shipment Requirements &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
