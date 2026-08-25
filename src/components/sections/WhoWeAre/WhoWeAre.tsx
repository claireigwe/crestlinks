import React from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './WhoWeAre.module.css';

export function WhoWeAre() {
  return (
    <section className={styles.section} aria-label="Who We Are">
      <Container size="wide">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/story/inspection.jpg"
              alt="Agricultural quality control inspector conducting pre-shipment lab analysis in Nigeria"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <div className={styles.contentWrapper}>
            <h2 className={styles.headline}>
              Bridging Global Buyers with Authentic Nigerian Origins.
            </h2>
            <p className={styles.paragraph}>
              CrestLinks is a licensed Nigerian agricultural commodities export company. We operate as a dedicated B2B partner for international importers, wholesale distributors, food manufacturers, and commodity traders seeking high-grade agricultural products.
            </p>
            <p className={styles.paragraph}>
              Founded on the conviction that international trade requires absolute operational transparency, we eliminate middleman ambiguity by integrating directly with verified farming cooperatives and enforcing strict laboratory verification before every shipment.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
