import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import { Button } from '../../ui/Button/Button';
import styles from './FinalCtaSection.module.css';

export function FinalCtaSection() {
  return (
    <section className={styles.section} aria-label="Start Your Export Partnership">
      {/* Background Photography Stage */}
      <Image
        src="/images/closing-cta.png"
        alt="Peaceful commercial container export port in Nigeria at golden sunrise"
        fill
        priority
        sizes="100vw"
        className={styles.backgroundImage}
      />
      <div className={styles.gradientOverlay} aria-hidden="true" />

      <Container size="wide">
        <div className={styles.contentWrapper}>
          <h2 className={styles.headline}>
            Great export partnerships begin with one conversation.
          </h2>

          <p className={styles.subheading}>
            Whether you&apos;re exploring sourcing opportunities or ready to
            establish a dependable Nigerian export supply chain, CrestLinks is
            ready to support your business with professional execution and
            complete transparency.
          </p>

          <div className={styles.actionsGroup}>
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className={styles.primaryCta}
            >
              Request a Quote
            </Button>
            <Link href="/contact#schedule" className={styles.secondaryAction}>
              Schedule a Conversation &rarr;
            </Link>
          </div>

          <div className={styles.trustRow}>
            <span className={styles.trustItem}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={styles.checkSvg}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Licensed Nigerian Agricultural Exporter
            </span>
            <span className={styles.trustItem}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={styles.checkSvg}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Export Documentation Support
            </span>
            <span className={styles.trustItem}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={styles.checkSvg}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              International Buyer Partnerships
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
