import React from 'react';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import { Button } from '../../ui/Button/Button';
import styles from './FlexibleSourcing.module.css';

export function FlexibleSourcing() {
  return (
    <section className={styles.section} aria-label="Flexible Sourcing Capabilities">
      <Container size="wide">
        <div className={styles.contentWrapper}>
          <h2 className={styles.headline}>
            Specialized & Custom Agricultural Sourcing.
          </h2>
          <p className={styles.paragraph}>
            CrestLinks is not limited to a static commodity catalogue. Leveraging our extensive network of agricultural producer co-ops across Nigeria, we source custom grades, specialized botanical extracts, and bulk raw agricultural products tailored to your exact manufacturing requirements.
          </p>
          <div className={styles.ctaWrapper}>
            <Button variant="primary" size="md" href="/contact" className={styles.discussBtn}>
              Discuss Custom Sourcing Requirements &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
