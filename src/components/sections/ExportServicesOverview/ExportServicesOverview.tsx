import React from 'react';
import { Container } from '../../layout/Container/Container';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { Button } from '../../ui/Button/Button';
import styles from './ExportServicesOverview.module.css';

const services = [
  {
    title: 'Sourcing & Contracting',
    description:
      'Direct farm-level procurement and contract negotiations ensuring stable volume commitments and fair market pricing.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: 'Quality Verification & Testing',
    description:
      'Independent laboratory analysis covering moisture levels, purity, defect rates, and chemical compliance before packing.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Export Documentation & Compliance',
    description:
      'Complete handling of phytosanitary certificates, NEPC permits, certificates of origin, and bill of lading documentation.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Freight & Port Logistics',
    description:
      'End-to-end container loading, customs clearance at Nigerian ports, and ocean freight coordination to destination ports.',
    icon: (
      <svg
        width="20"
        height="20"
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
    ),
  },
];

export function ExportServicesOverview() {
  return (
    <section className={`section ${styles.section}`} aria-label="Export Services">
      <Container>
        <SectionHeading
          eyebrow="Comprehensive Capabilities"
          title="More Than a Supplier—A Reliable Export Partner"
          subtitle="From sourcing and quality assurance to documentation and export coordination, CrestLinks supports buyers throughout every stage of the export journey."
          align="center"
        />

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon} aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              <p className={styles.serviceDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.footerActions}>
          <Button variant="secondary" size="lg" href="/export-services">
            Explore Our Export Services →
          </Button>
        </div>
      </Container>
    </section>
  );
}
