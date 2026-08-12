import React from 'react';
import { Container } from '../../layout/Container/Container';
import styles from './ServicesOverview.module.css';

export function ServicesOverview() {
  return (
    <section className={styles.section} aria-label="What It Means to Work With CrestLinks">
      <Container size="wide">
        <div className={styles.contentWrapper}>
          <h2 className={styles.headline}>
            An Integrated Partner, Not a Transactional Supplier.
          </h2>
          <p className={styles.paragraph}>
            International trade requires far more than placing orders—it demands direct origin oversight, rigorous quality verification, complete regulatory compliance, and dependable ocean logistics. CrestLinks manages the entire export relationship, removing supply chain friction so your business receives contract-compliant commodities on time, every time.
          </p>
        </div>
      </Container>
    </section>
  );
}
