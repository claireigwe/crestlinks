import React from 'react';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './AboutPartnerships.module.css';

export function AboutPartnerships() {
  return (
    <section className={styles.section} aria-label="Built Around Partnerships">
      <Container size="wide">
        <div className={styles.contentWrapper}>
          <h2 className={styles.headline}>
            Built Around Partnerships, Not Spot Transactions.
          </h2>
          <p className={styles.paragraph}>
            We understand that global procurement managers and commodity traders rely on predictable supply chains. CrestLinks is designed to act as an extension of your procurement team in Nigeria—delivering consistent grade quality, dependable ocean transit timelines, and complete integrity with every shipment.
          </p>
        </div>
      </Container>
    </section>
  );
}
