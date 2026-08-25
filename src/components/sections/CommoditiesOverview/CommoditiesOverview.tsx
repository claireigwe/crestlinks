import React from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import styles from './CommoditiesOverview.module.css';

export function CommoditiesOverview() {
  return (
    <section className={styles.section} aria-label="Why Our Commodities">
      <Container size="wide">
        <div className={styles.contentWrapper}>
          <div className={styles.textGroup}>
            <h2 className={styles.headline}>
              Carefully Sourced. Rigorously Verified. Export-Ready.
            </h2>
            <p className={styles.paragraph}>
              Every agricultural commodity in the CrestLinks catalogue is procured directly from verified farming cooperatives across prime Nigerian agricultural belts. We prioritize physical purity, contract moisture standards, and export-grade packaging to ensure your shipments arrive in prime condition.
            </p>
          </div>

          {/* High-Resolution Commercial Inspection Banner Photography */}
          <div className={styles.imageContainer}>
            <Image
              src="/images/story/inspection.jpg"
              alt="Agricultural quality control specialist inspecting Nigerian commodities for export readiness"
              fill
              sizes="(max-width: 1023px) 100vw, 80vw"
              className={styles.overviewImage}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
