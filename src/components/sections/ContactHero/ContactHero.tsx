import React from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './ContactHero.module.css';

interface ContactHeroProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function ContactHero({
  imageSrc = '/images/hero-contact.jpg',
  imageAlt = 'Modern trade office and B2B export negotiation space',
}: ContactHeroProps = {}) {
  return (
    <section className={styles.section} aria-label="Contact Introduction">
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
          <div className={styles.badgeWrapper}>
            <Badge variant="outline">B2B Export Inquiry</Badge>
          </div>
          <h1 className={styles.headline}>
            Let’s Initiate Your Sourcing Conversation.
          </h1>
          <p className={styles.subheading}>
            Connect with our export team to discuss commodity specifications, bulk order volumes, container logistics, or custom Nigerian agricultural sourcing requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}
