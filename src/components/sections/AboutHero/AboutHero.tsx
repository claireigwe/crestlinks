import React from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './AboutHero.module.css';

interface AboutHeroProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function AboutHero({
  imageSrc = '/images/hero-about.jpg',
  imageAlt = 'Nigerian agricultural trade commodities packaged for global export under morning light',
}: AboutHeroProps = {}) {
  return (
    <section className={styles.section} aria-label="About CrestLinks">
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
            An Export Partner Built on Operational Rigor and Trust.
          </h1>
          <p className={styles.subheading}>
            We connect global agricultural markets with verified Nigerian origin commodities through direct sourcing, independent quality control, and complete regulatory transparency.
          </p>
        </div>
      </Container>
    </section>
  );
}
