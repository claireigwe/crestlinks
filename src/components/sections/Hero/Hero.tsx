import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import styles from './Hero.module.css';

interface HeroProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({
  imageSrc = '/images/hero-home.jpg',
  imageAlt = 'Premium Nigerian agricultural export commodities packaged in stamped jute sacks at a sunlit port terminal',
}: HeroProps = {}) {
  return (
    <section className={styles.hero} aria-label="CrestLinks Global Export Hero">
      {/* Full-Bleed Refined Agricultural Export Photography */}
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
      </div>

      {/* Hero Viewport Content */}
      <Container size="wide">
        <div className={styles.contentWrapper}>
          <div className={styles.mainGrid}>
            {/* Editorial Narrative Block */}
            <div className={styles.editorialNarrative}>
              <h1 className={styles.headline}>
                Connecting Nigeria&apos;s Agricultural Excellence to Global Markets
              </h1>

              <p className={styles.subheading}>
                CrestLinks connects international buyers with premium Nigerian
                agricultural commodities through a transparent, reliable, and
                professionally managed export process.
              </p>

              <div className={styles.actionsGroup}>
                <div className={styles.actions}>
                  <Button
                    variant="primary"
                    size="lg"
                    href="/contact"
                    className={styles.primaryCta}
                  >
                    Request a Quote
                  </Button>
                  <Link href="/products" className={styles.secondaryCta}>
                    Explore Our Commodities <span className={styles.arrow}>→</span>
                  </Link>
                </div>

                {/* Subtle Premium Trust Indicator Line */}
                <div className={styles.heroTrustIndicators}>
                  <span className={styles.trustIndicatorItem}>
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
                      className={styles.trustCheckSvg}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Licensed Export Company
                  </span>
                  <span className={styles.trustDot}>•</span>
                  <span className={styles.trustIndicatorItem}>
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
                      className={styles.trustCheckSvg}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Export-Ready Quality
                  </span>
                  <span className={styles.trustDot}>•</span>
                  <span className={styles.trustIndicatorItem}>
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
                      className={styles.trustCheckSvg}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    End-to-End Logistics
                  </span>
                </div>
              </div>
            </div>

            {/* Lightened, Balanced Credibility Panel */}
            <aside
              className={styles.trustWidget}
              aria-label="Export Credibility Indicators"
            >
              <h2 className={styles.trustTitle}>Export Credibility</h2>
              <div className={styles.trustGrid}>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon} aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.trustLabel}>NEPC Registered</span>
                    <span className={styles.trustSubtext}>Verified Exporter</span>
                  </div>
                </div>

                <div className={styles.trustItem}>
                  <div className={styles.trustIcon} aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.trustLabel}>Strict Specifications</span>
                    <span className={styles.trustSubtext}>Quality Tested</span>
                  </div>
                </div>

                <div className={styles.trustItem}>
                  <div className={styles.trustIcon} aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.trustLabel}>Direct Sourcing</span>
                    <span className={styles.trustSubtext}>Farm to Port</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
