'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import styles from './ShipmentJourney.module.css';

interface JourneyStep {
  id: string;
  stepNumber: string;
  navLabel: string;
  headline: string;
  narrative: string;
  imageSrc: string;
  imageAlt: string;
  crestlinksRole: string;
  buyerExpectation: string;
}

const journeySteps: JourneyStep[] = [
  {
    id: 'inquiry',
    stepNumber: '01',
    navLabel: '1. Inquiry & Terms',
    headline: 'Contractual Alignment & Specification Review',
    narrative:
      'Every shipment begins with explicit commercial alignment. CrestLinks reviews your commodity volume requirements, grade parameters, target moisture limits, shipping terms (FOB / CIF), and destination port schedules.',
    imageSrc: '/images/story/farm.jpg',
    imageAlt: 'Agricultural export contract discussion and farm origin review',
    crestlinksRole: 'Contract terms alignment, specification sheet confirmation, and FOB/CIF quotation.',
    buyerExpectation: 'Clear, transparent pricing without hidden export surcharges or origin ambiguities.',
  },
  {
    id: 'sourcing',
    stepNumber: '02',
    navLabel: '2. Farm Sourcing',
    headline: 'Direct Procurement at Agricultural Origin',
    narrative:
      'Upon contract confirmation, commodities are procured directly from verified farming cooperatives across prime Nigerian agricultural belts, guaranteeing authentic product origin and fair local trade practices.',
    imageSrc: '/images/credibility.png',
    imageAlt: 'Agricultural producer inspecting raw crop harvest in prime Nigerian growing belt',
    crestlinksRole: 'Co-op inventory mobilization, batch origin verification, and farm-level aggregation.',
    buyerExpectation: 'Total supply chain traceability and authentic raw commodity origin.',
  },
  {
    id: 'inspection',
    stepNumber: '03',
    navLabel: '3. Quality Verification',
    headline: 'Independent Pre-Shipment Laboratory Analysis',
    narrative:
      'Before cargo leaves warehouse storage, independent laboratory testing and physical grade sampling verify nut count, moisture content, defect rates, and purity against contract specifications.',
    imageSrc: '/images/story/inspection.jpg',
    imageAlt: 'Agricultural quality control inspector conducting pre-shipment lab analysis under natural sunlight',
    crestlinksRole: 'Independent lab sampling, moisture certificate issuance, and export grade approval.',
    buyerExpectation: 'Empirical quality verification and guaranteed contract specification compliance.',
  },
  {
    id: 'compliance',
    stepNumber: '04',
    navLabel: '4. Customs & Permits',
    headline: 'Complete Regulatory & Permit Handling',
    narrative:
      'CrestLinks coordinates all mandatory export documentation including Phytosanitary Certificates, NEPC permits, Certificates of Origin, commercial invoices, packing lists, and customs clearance filings.',
    imageSrc: '/images/story/packaging.jpg',
    imageAlt: 'Export-grade packaging in jute sacks and official NEPC documentation handling',
    crestlinksRole: 'End-to-end documentation filing, NEPC permit clearance, and phytosanitary endorsement.',
    buyerExpectation: 'Frictionless customs entry at destination ports without administrative delays.',
  },
  {
    id: 'logistics',
    stepNumber: '05',
    navLabel: '5. Terminal Dispatch',
    headline: 'Supervised Sea Port Loading & Maritime Tracking',
    narrative:
      'Cargo container loading is supervised directly at Nigerian ocean port terminals. Full vessel manifests and real-time shipping tracking updates are provided until cargo safely arrives at your destination port.',
    imageSrc: '/images/story/shipping.png',
    imageAlt: 'Commercial ocean container ship berthed at Nigerian port terminal loading export cargo',
    crestlinksRole: 'Terminal container loading supervision, ocean bill of lading issuance, and vessel tracking.',
    buyerExpectation: 'On-time maritime dispatch, secure container sealing, and vessel arrival updates.',
  },
];

export function ShipmentJourney() {
  const [activeId, setActiveId] = useState<string>('inquiry');

  const activeStep =
    journeySteps.find((step) => step.id === activeId) || journeySteps[0];

  return (
    <section className={styles.section} aria-label="Interactive Export Shipment Journey">
      <Container size="wide">
        {/* Section Heading */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.headline}>
            The Export Shipment Journey
          </h2>
          <p className={styles.subheading}>
            Follow a single cargo shipment from initial contract discussion to vessel port delivery.
          </p>
        </div>

        {/* Horizontal Chapter Navigation Bar */}
        <div className={styles.chapterBarWrapper}>
          <div
            className={styles.chapterBar}
            role="tablist"
            aria-label="Select Stage of the Export Shipment Journey"
          >
            {journeySteps.map((step) => {
              const isActive = step.id === activeId;
              return (
                <button
                  key={step.id}
                  role="tab"
                  id={`stage-tab-${step.id}`}
                  aria-selected={isActive}
                  aria-controls={`stage-panel-${step.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`${styles.chapterBtn} ${styles.chapterBtnFocus} ${
                    isActive ? styles.activeChapter : ''
                  }`}
                  onClick={() => setActiveId(step.id)}
                >
                  {step.navLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Stage Box */}
        <div
          id={`stage-panel-${activeStep.id}`}
          role="tabpanel"
          aria-labelledby={`stage-tab-${activeStep.id}`}
          className={styles.stageBox}
        >
          {/* Left Column — Photography Stage */}
          <div className={styles.mediaContainer}>
            <Image
              key={activeStep.id}
              src={activeStep.imageSrc}
              alt={activeStep.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 55vw"
              className={styles.stageImage}
              priority
            />
            <span className={styles.chapterTag}>
              Stage {activeStep.stepNumber} of 05
            </span>
          </div>

          {/* Right Column — Operational Details */}
          <div className={styles.contentContainer}>
            <div className={styles.headerGroup}>
              <span className={styles.chapterNumber}>
                Stage {activeStep.stepNumber} &mdash; Export Workflow
              </span>
              <h3 className={styles.chapterHeadline}>{activeStep.headline}</h3>
              <p className={styles.narrativeText}>{activeStep.narrative}</p>
            </div>

            <div className={styles.detailsGrid}>
              <div className={styles.detailBox}>
                <span className={styles.detailLabel}>CrestLinks Responsibility</span>
                <span className={styles.detailValue}>{activeStep.crestlinksRole}</span>
              </div>
              <div className={styles.detailBox}>
                <span className={styles.detailLabel}>International Buyer Advantage</span>
                <span className={styles.detailValue}>{activeStep.buyerExpectation}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
