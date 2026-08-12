'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import { Button } from '../../ui/Button/Button';
import styles from './CommodityShowcase.module.css';

interface CommodityData {
  id: string;
  tabLabel: string;
  name: string;
  category: string;
  overview: string;
  imageSrc: string;
  imageAlt: string;
  applications: string;
  grades: string;
  packaging: string;
  readiness: string;
}

const commodities: CommodityData[] = [
  {
    id: 'cashew',
    tabLabel: 'Cashew Nuts',
    name: 'Raw & Processed Cashew Nuts',
    category: 'Nuts & Kernels',
    overview:
      'High-yield raw cashew nuts and processed kernels sourced directly from prime Nigerian cashew growing belts, thoroughly dried and graded for international export.',
    imageSrc: '/images/commodities/cashew.png',
    imageAlt: 'Raw Nigerian cashew nuts packaged in export jute sacks',
    applications: 'Confectionery, Snack Foods, Roasting & Food Ingredients',
    grades: 'W240, WW320, Raw Nut Count 180-200 / KOR 48-52 lbs',
    packaging: '80kg Jute Sacks / 25lb Vacuum Foil Bags in Outer Carton',
    readiness: '100% Pre-Shipment Tested & NEPC Export Certified',
  },
  {
    id: 'sesame',
    tabLabel: 'Sesame Seeds',
    name: 'Natural & Cleaned Sesame Seeds',
    category: 'Oilseeds',
    overview:
      'Premium Nigerian natural white and hulled sesame seeds with high oil content, cleaned to 99.5% purity standards for international food manufacturers.',
    imageSrc: '/images/commodities/sesame.png',
    imageAlt: 'Cleaned golden Nigerian sesame seeds in wooden trade bowl',
    applications: 'Tahini Production, Bakery Ingredients, Oil Extraction',
    grades: 'Natural White / Hulled • Purity > 99.5% • Oil Content > 50%',
    packaging: '50kg Woven Polypropylene (PP) Export Bags',
    readiness: 'Phytosanitary Inspected & Fumigated Cargo Ready',
  },
  {
    id: 'cocoa',
    tabLabel: 'Cocoa Beans',
    name: 'Fermented Main Crop Cocoa Beans',
    category: 'Cash Crops',
    overview:
      'Well-fermented, sun-dried main crop Nigerian cocoa beans sourced from major cocoa belts, meeting global chocolate processing standards.',
    imageSrc: '/images/commodities/cocoa.png',
    imageAlt: 'Fermented dried Nigerian cocoa beans in wooden trade tray',
    applications: 'Chocolate Manufacturing, Cocoa Powder & Cocoa Butter',
    grades: 'Main Crop Grade 1 • Bean Count 95-105 / 100g • Moisture < 7.5%',
    packaging: '63.5kg Standard Export Jute Bags',
    readiness: 'Quality Tested for Mould & Defect Rates Pre-Loading',
  },
  {
    id: 'ginger',
    tabLabel: 'Ginger',
    name: 'Sun-Dried Split Ginger Roots',
    category: 'Spices',
    overview:
      'Aromatic Nigerian split dried ginger roots renowned globally for exceptional oleoresin levels, intense aroma, and rich essential oil content.',
    imageSrc: '/images/commodities/ginger.png',
    imageAlt: 'Sun-dried split Nigerian ginger roots on natural trade surface',
    applications: 'Flavorings, Spice Blends, Pharmaceuticals & Teas',
    grades: 'Split Dried • Moisture < 12% • Foreign Matter < 1%',
    packaging: '40kg / 50kg Clean Polypropylene Export Bags',
    readiness: 'Moisture Controlled & Phytosanitary Certified',
  },
  {
    id: 'hibiscus',
    tabLabel: 'Hibiscus Flowers',
    name: 'Dried Dark Red Hibiscus Flowers',
    category: 'Natural Agricultural Products',
    overview:
      'Whole dried dark red Nigerian hibiscus calyces (Roselle) harvested at peak maturity, offering deep color extraction and high citric acidity.',
    imageSrc: '/images/commodities/hibiscus.png',
    imageAlt: 'Dried dark red Nigerian hibiscus flowers in trade bowl',
    applications: 'Herbal Teas, Food Colorants, Beverage Extracts',
    grades: 'Whole Dried Calyces • Moisture < 10% • Extraneous Matter < 2%',
    packaging: '25kg Compressed Bales / PP Export Bags',
    readiness: '100% Hand-Picked & Quality Inspected for Export',
  },
];

export function CommodityShowcase() {
  const [activeId, setActiveId] = useState<string>('cashew');

  const activeCommodity =
    commodities.find((item) => item.id === activeId) || commodities[0];

  return (
    <section className={styles.section} aria-label="Products We Export">
      <Container size="wide">
        {/* Editorial Section Heading */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.headline}>
            Premium Commodities. Global Standards.
          </h2>
          <p className={styles.subheading}>
            Sourced directly from verified Nigerian agricultural belts and
            prepared for international export markets.
          </p>
        </div>

        {/* Interactive Commodity Pill Selector Bar */}
        <div
          className={styles.selectorBar}
          role="tablist"
          aria-label="Select Commodity to View Specifications"
        >
          {commodities.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${item.id}`}
                tabIndex={isActive ? 0 : -1}
                className={`${styles.tabButton} ${styles.tabButtonFocus} ${
                  isActive ? styles.activeTab : ''
                }`}
                onClick={() => setActiveId(item.id)}
              >
                {item.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Featured Stage Display */}
        <div
          id={`panel-${activeCommodity.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCommodity.id}`}
          className={styles.stageGrid}
        >
          {/* Left Column — 4:3 Photographic Showcase */}
          <div className={styles.mediaContainer}>
            <Image
              key={activeCommodity.id}
              src={activeCommodity.imageSrc}
              alt={activeCommodity.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className={styles.commodityImage}
              priority
            />
            <span className={styles.originBadge}>Nigeria Origin</span>
          </div>

          {/* Right Column — Narrative & Export Specs */}
          <div className={styles.contentContainer}>
            <div className={styles.headerGroup}>
              <span className={styles.categoryTag}>
                {activeCommodity.category}
              </span>
              <h3 className={styles.commodityTitle}>
                {activeCommodity.name}
              </h3>
            </div>

            <p className={styles.description}>{activeCommodity.overview}</p>

            <div className={styles.specsList}>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Typical Applications</span>
                <span className={styles.specValue}>
                  {activeCommodity.applications}
                </span>
              </div>

              <div className={styles.specBox}>
                <span className={styles.specLabel}>Grades & Quality</span>
                <span className={styles.specValue}>
                  {activeCommodity.grades}
                </span>
              </div>

              <div className={styles.specBox}>
                <span className={styles.specLabel}>Export Packaging</span>
                <span className={styles.specValue}>
                  {activeCommodity.packaging}
                </span>
              </div>

              <div className={styles.specBox}>
                <span className={styles.specLabel}>Export Readiness</span>
                <span className={styles.specValue}>
                  {activeCommodity.readiness}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className={styles.footerActions}>
          <Button variant="secondary" size="lg" href="/products">
            View Export Catalogue &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
