import React from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './NepcCertificationSection.module.css';

export function NepcCertificationSection() {
  return (
    <section
      className={styles.section}
      aria-label="Official NEPC Export Registration Certification"
    >
      <Container size="wide">
        <div className={styles.grid}>
          {/* Left Column — Certificate Visual Display */}
          <div className={styles.certificateColumn}>
            <div className={styles.certificateCard}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/nepc-certificate.jpg"
                  alt="Official Exporters Registration Certificate issued to CrestLinks Exports Ltd by the Nigerian Export Promotion Council"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 440px"
                  className={styles.certificateImage}
                />
              </div>
            </div>
          </div>

          {/* Right Column — Official Regulatory Details */}
          <div className={styles.narrative}>
            <div>
              <Badge variant="outline" className={styles.eyebrowBadge}>
                Official Export Credential
              </Badge>
            </div>

            <h2 className={styles.headline}>
              Registered Exporter with the Nigerian Export Promotion Council
            </h2>

            <p className={styles.paragraph}>
              CrestLinks Exports Ltd is officially licensed and registered by the
              Nigerian Export Promotion Council (NEPC) under Certificate RE No.{' '}
              <strong>0044097</strong>. This official registration confirms our
              legal authorization to export premium Nigerian agricultural
              commodities worldwide under full regulatory compliance.
            </p>

            <div className={styles.detailsGrid}>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Registered Entity</span>
                <span className={styles.detailValue}>
                  CRESTLINKS EXPORTS LTD
                </span>
                <span className={styles.detailSub}>Licensed Exporter</span>
              </div>

              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Registration No.</span>
                <span className={styles.detailValue}>RE No. 0044097</span>
                <span className={styles.detailSub}>NEPC Registered</span>
              </div>

              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Issuing Authority</span>
                <span className={styles.detailValue}>
                  Nigerian Export Promotion Council
                </span>
                <span className={styles.detailSub}>Federal Republic of Nigeria</span>
              </div>

              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Validity Period</span>
                <span className={styles.detailValue}>
                  June 17, 2026 – June 16, 2028
                </span>
                <span className={styles.detailSub}>Current & Active</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
