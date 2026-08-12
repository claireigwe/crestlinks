import React from 'react';
import { Container } from '../../layout/Container/Container';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { Button } from '../../ui/Button/Button';
import styles from './AboutOverview.module.css';

export function AboutOverview() {
  return (
    <section className={`section ${styles.section}`} aria-label="Company Overview">
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Connecting Global Markets with Nigerian Agriculture"
              align="left"
            />
            <p className={styles.paragraph}>
              CrestLinks is a Nigerian agricultural commodities export company
              committed to helping international buyers source premium products
              from trusted producers across Nigeria.
            </p>
            <p className={styles.paragraph}>
              Our focus is simple: build lasting business relationships through
              professionalism, transparency, and dependable export solutions.
            </p>
            <div>
              <Button variant="secondary" size="lg" href="/about">
                Learn More About CrestLinks →
              </Button>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <h3 className={styles.highlightTitle}>
              Strategic Export Partnership
            </h3>
            <div className={styles.statsList}>
              <div className={styles.statRow}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>
                  Official NEPC Registered Nigerian Exporter
                </span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statNumber}>7+</span>
                <span className={styles.statLabel}>
                  Premium Export-Ready Agricultural Commodities
                </span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statNumber}>Direct</span>
                <span className={styles.statLabel}>
                  Verified Farm & Producer Procurement Network
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
