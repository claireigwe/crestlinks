'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './ExportStory.module.css';

interface ChapterData {
  id: string;
  numberStr: string;
  navLabel: string;
  headline: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
  trustHighlightLabel: string;
  trustHighlightValue: string;
}

const chapters: ChapterData[] = [
  {
    id: 'farmers',
    numberStr: '01',
    navLabel: 'Verified Farmers',
    headline: 'Sourced Direct at the Origin',
    paragraph:
      'We partner directly with verified farming cooperatives across prime agricultural belts in Nigeria. This farm-level integration guarantees authentic product origin, sustainable harvest practices, and total supply chain traceability.',
    imageSrc: '/images/story/farm.jpg',
    imageAlt: 'Lush green Nigerian farmland with local agricultural producer inspecting healthy crops under natural morning light',
    trustHighlightLabel: 'Traceability Standard',
    trustHighlightValue: '100% Direct Farm Co-op Sourcing & Region Tracking',
  },
  {
    id: 'inspection',
    numberStr: '02',
    navLabel: 'Quality Inspection',
    headline: 'Inspected with Independent Precision',
    paragraph:
      'Before any commodity leaves the warehouse, independent laboratory testing and physical grade inspections are conducted. Moisture content, purity levels, and defect rates are rigorously verified against international buyer specifications.',
    imageSrc: '/images/story/inspection.jpg',
    imageAlt: 'Agricultural quality control specialist in Nigeria examining raw export commodities under natural sunlight with inspection checklist',
    trustHighlightLabel: 'Quality Assurance',
    trustHighlightValue: 'Pre-Shipment Lab Analysis & Moisture Certificate Verification',
  },
  {
    id: 'preparation',
    numberStr: '03',
    navLabel: 'Export Preparation',
    headline: 'Prepared for Overseas Transit',
    paragraph:
      'Commodities are packaged in heavy-duty multi-wall jute sacks, vacuum-sealed foil bags, or container liners specifically selected to maintain cargo freshness and prevent moisture absorption during maritime transit.',
    imageSrc: '/images/story/packaging.jpg',
    imageAlt: 'Export-grade raw Nigerian cashew nuts packaged in heavy-duty jute sacks',
    trustHighlightLabel: 'Packaging Standard',
    trustHighlightValue: 'Export-Grade Food Safe Sacks & Desiccant Liner Protection',
  },
  {
    id: 'compliance',
    numberStr: '04',
    navLabel: 'Documentation & Compliance',
    headline: 'Certified for Global Compliance',
    paragraph:
      'Complete handling of export documentation including Phytosanitary Certificates, NEPC Registration Clearance, Certificates of Origin, and Bills of Lading, ensuring frictionless port entry in destination countries.',
    imageSrc: '/images/story/compliance.jpg',
    imageAlt: 'Official agricultural export documentation with NEPC certificate seals on dark oak trade desk',
    trustHighlightLabel: 'Regulatory Guarantee',
    trustHighlightValue: 'NEPC License • Phytosanitary & Customs Clearance Approved',
  },
  {
    id: 'shipping',
    numberStr: '05',
    navLabel: 'Global Shipping',
    headline: 'Delivered to Global Ports',
    paragraph:
      'Cargo container loading is supervised at Nigerian sea port terminals. Full vessel manifest tracking and real-time shipping updates are provided until your commodities safely arrive at your destination port.',
    imageSrc: '/images/story/shipping.png',
    imageAlt: 'Commercial ocean container ship berthed at Nigerian sea port terminal loading export cargo containers under daylight',
    trustHighlightLabel: 'Logistics Execution',
    trustHighlightValue: 'FOB / CIF Shipping Terms & Ocean Vessel Manifest Tracking',
  },
];

export function ExportStory() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const totalChapters = chapters.length;
  const activeChapter = chapters[currentIndex];
  const progressPercent = ((currentIndex + 1) / totalChapters) * 100;

  // Auto-slide effect every 6 seconds (pauses on mouse hover)
  React.useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalChapters);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, totalChapters]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalChapters);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalChapters) % totalChapters);
  };

  return (
    <section className={styles.section} aria-label="From Farm to Global Markets">
      <Container size="wide">
        {/* Editorial Section Heading */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.headline}>
            From Farm to Global Markets
          </h2>
          <p className={styles.subheading}>
            A documentary overview of how CrestLinks manages quality control
            and logistics across every chapter of the export journey.
          </p>
        </div>

        {/* Main Stage Box */}
        <div
          className={styles.stageBox}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Chapter Progress Header */}
          <div className={styles.progressHeader}>
            <span className={styles.counter}>
              CHAPTER {activeChapter.numberStr} / 0{totalChapters}
            </span>

            <div
              className={styles.progressBarTrack}
              aria-label={`Progress: Chapter ${currentIndex + 1} of ${totalChapters}`}
            >
              <div
                className={styles.progressBarFill}
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <span className={styles.chapterTitleTag}>
              {activeChapter.navLabel}
            </span>
          </div>

          {/* Main Stage Grid */}
          <div className={styles.stageGrid}>
            {/* Left Column — 16:10 Photographic Stage */}
            <div className={styles.mediaContainer}>
              <Image
                key={activeChapter.id}
                src={activeChapter.imageSrc}
                alt={activeChapter.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                className={styles.storyImage}
                priority
              />
              <span className={styles.chapterOverlay}>
                Chapter {activeChapter.numberStr}
              </span>
            </div>

            {/* Right Column — Narrative & Trust Callout */}
            <div className={styles.contentContainer}>
              <div className={styles.headerGroup}>
                <span className={styles.chapterNumber}>
                  Chapter {activeChapter.numberStr} &mdash; {activeChapter.navLabel}
                </span>
                <h3 className={styles.chapterTitle}>
                  {activeChapter.headline}
                </h3>
              </div>

              <p className={styles.paragraph}>{activeChapter.paragraph}</p>

              <div className={styles.trustBox}>
                <span className={styles.trustBoxLabel}>
                  {activeChapter.trustHighlightLabel}
                </span>
                <span className={styles.trustBoxValue}>
                  {activeChapter.trustHighlightValue}
                </span>
              </div>
            </div>
          </div>

          {/* Chapter Navigation Controls Footer */}
          <div className={styles.controlsFooter}>
            <button
              onClick={handlePrev}
              aria-label="Previous Chapter"
              className={`${styles.navBtn} ${styles.navBtnFocus}`}
            >
              &larr; Previous Chapter
            </button>

            <div className={styles.chapterBadgeList}>
              {chapters.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to Chapter ${idx + 1}: ${ch.navLabel}`}
                  className={`${styles.dotIndicator} ${
                    idx === currentIndex ? styles.activeDot : ''
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Chapter"
              className={`${styles.navBtn} ${styles.navBtnFocus}`}
            >
              Next: {chapters[(currentIndex + 1) % totalChapters].navLabel} &rarr;
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
