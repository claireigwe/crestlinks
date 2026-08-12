import React from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import { Button } from '../../ui/Button/Button';
import styles from './ProductsHero.module.css';

export function ProductsHero() {
  return (
    <section className={styles.section} aria-label="Export Commodities Catalogue">
      <Image
        src="/images/hero-refined.png"
        alt="High-grade Nigerian agricultural export commodities ready for container loading under morning light"
        fill
        priority
        sizes="100vw"
        className={styles.backgroundImage}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <Container size="wide">
        <div className={styles.contentWrapper}>
          <h1 className={styles.headline}>
            Premium Nigerian Agricultural Commodities for Global Trade.
          </h1>
          <p className={styles.subheading}>
            Direct-from-source agricultural products rigorously inspected, contract-verified, and packaged to meet international buyer standards worldwide.
          </p>
          <div className={styles.ctaWrapper}>
            <Button variant="primary" size="lg" href="/contact" className={styles.ctaBtn}>
              Request a Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
