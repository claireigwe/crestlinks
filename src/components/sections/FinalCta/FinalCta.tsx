import React from 'react';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import styles from './FinalCta.module.css';

export function FinalCta() {
  return (
    <section className={`section ${styles.section}`} aria-label="Build a Partnership">
      <Container>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Start Sourcing Today</span>
          <h2 className={styles.headline}>
            Let&apos;s Build a Long-Term Partnership
          </h2>
          <p className={styles.subheading}>
            Whether you&apos;re exploring sourcing opportunities or ready to
            request a quotation, CrestLinks is ready to support your business
            with dependable export solutions.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            className={styles.ctaButton}
          >
            Request a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
