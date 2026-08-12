import React from 'react';
import { Container } from '../../layout/Container/Container';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import styles from './WhyCrestlinks.module.css';

const pillars = [
  {
    title: 'Trusted Sourcing',
    description:
      'We work directly with verified producers and suppliers across Nigeria to guarantee product origin and supply consistency.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Professional Management',
    description:
      'Every shipment is supported by a structured, transparent, and professionally coordinated export workflow.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Commitment to Quality',
    description:
      'We focus on rigorous inspection and lab testing to ensure commodities meet exact buyer contract specifications.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Partnership',
    description:
      'We believe successful global business is built on integrity, clear communication, and dependable long-term relationships.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function WhyCrestlinks() {
  return (
    <section className={`section ${styles.section}`} aria-label="Why Choose CrestLinks">
      <Container size="wide">
        <div className={styles.headerWrapper}>
          <SectionHeading
            eyebrow="Core Advantages"
            title="Built on Trust. Driven by Quality."
            subtitle="Why international commodity buyers choose CrestLinks as their preferred Nigerian export partner."
            align="center"
          />
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <div key={pillar.title} className={styles.darkCard}>
              <div className={styles.iconWrapper} aria-hidden="true">
                {pillar.icon}
              </div>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardDescription}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
