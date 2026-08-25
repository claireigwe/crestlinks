import React from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import styles from './ServicesHero.module.css';

interface ServicesHeroProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function ServicesHero({
  imageSrc = '/images/hero-services.jpg',
  imageAlt = 'Commercial export ocean container loading at Nigerian port terminal',
}: ServicesHeroProps = {}) {
  return (
    <section className={styles.section} aria-label="Export Services & Management">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={styles.backgroundImage}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <Container size="wide">
        <div className={styles.contentWrapper}>
          <h1 className={styles.headline}>
            End-to-End Export Execution Built on Operational Precision.
          </h1>
          <p className={styles.subheading}>
            We manage the complete commercial export lifecycle—from farm-level procurement and pre-shipment lab verification to customs permits and maritime vessel delivery.
          </p>
          <div className={styles.ctaWrapper}>
            <Button variant="primary" size="lg" href="/contact" className={styles.ctaBtn}>
              Discuss Export Requirements
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
