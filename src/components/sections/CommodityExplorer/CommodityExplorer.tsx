'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import { Button } from '../../ui/Button/Button';
import styles from './CommodityExplorer.module.css';

interface CommodityDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  availableGrades: string;
  packagingOptions: string;
  applications: string;
  originRegion: string;
}

const commodityList: CommodityDetail[] = [
  {
    id: 'cashew',
    name: 'Cashew Nuts',
    category: 'Nuts & Kernels',
    description:
      'Premium raw Nigerian cashew nuts sourced from high-yield orchards across Oyo, Kogi, and Kwara states. Renowned for high nut count and optimal kernel yield.',
    imageSrc: '/images/commodities/cashew.png',
    imageAlt: 'High-grade raw Nigerian cashew nuts packaged in heavy-duty export jute sacks',
    availableGrades: 'W180, W210, W240, W320, Raw In-Shell (KOR 48-52+ lbs)',
    packagingOptions: '80kg Multi-Wall Jute Sacks / Vacuum Foil Liners',
    applications: 'Confectionery, Nut Roasting, Snack Processing, Food Manufacturing',
    originRegion: 'Kogi, Kwara & Oyo States, Nigeria',
  },
  {
    id: 'sesame',
    name: 'Sesame Seeds',
    category: 'Seeds & Oilseeds',
    description:
      'Cleaned, high-purity natural white and brown sesame seeds harvested in Benue, Nasarawa, and Jigawa. High oil content ideal for international crushing and baking.',
    imageSrc: '/images/commodities/sesame.png',
    imageAlt: 'Export-grade cleaned raw Nigerian sesame seeds in bulk warehouse storage',
    availableGrades: 'Natural White / Brown (Purity 99.5% Min, Moisture 6% Max)',
    packagingOptions: '50kg Woven Polypropylene Sacks / Container Bulk Liners',
    applications: 'Tahini Manufacturing, Commercial Bakery, Sesame Oil Extraction',
    originRegion: 'Benue, Nasarawa & Jigawa States, Nigeria',
  },
  {
    id: 'cocoa',
    name: 'Cocoa Beans',
    category: 'Cash Crops & Cocoa',
    description:
      'Well-fermented, sun-dried main crop Nigerian cocoa beans sourced from Ondo and Cross River belts. Rich chocolate flavor profile suitable for European chocolatiers.',
    imageSrc: '/images/commodities/cocoa.png',
    imageAlt: 'Fermented sun-dried Nigerian cocoa beans in export jute bags',
    availableGrades: 'Main Crop Grade 1 (Bean Count 95-105/100g, Moisture 7.5% Max)',
    packagingOptions: '62.5kg Heavy-Duty Export Jute Bags',
    applications: 'Chocolate Manufacturing, Cocoa Butter & Powder Processing',
    originRegion: 'Ondo, Cross River & Osun States, Nigeria',
  },
  {
    id: 'ginger',
    name: 'Ginger',
    category: 'Spices & Extracts',
    description:
      'Pungent, highly aromatic split dried ginger roots from Kaduna State. High oleoresin content prized by global spice blenders and extract processors.',
    imageSrc: '/images/commodities/ginger.png',
    imageAlt: 'Split dried Nigerian ginger roots packaged for maritime export',
    availableGrades: 'Split Dried / Whole Dried (Purity 98% Min, Moisture 10% Max)',
    packagingOptions: '40kg / 50kg Heavy Jute Bags',
    applications: 'Spice Grinding, Beverage Extraction, Essential Oil Processing',
    originRegion: 'Kaduna & Plateau States, Nigeria',
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus Flowers',
    category: 'Natural Botanicals',
    description:
      'Deep red dried hibiscus calyces (Hibiscus sabdariffa) harvested in Kano and Jigawa. Free from artificial colorants, ideal for herbal tea blenders.',
    imageSrc: '/images/commodities/hibiscus.png',
    imageAlt: 'Vibrant dark red dried Nigerian hibiscus flowers in bulk warehouse liners',
    availableGrades: 'Whole Dried Dark Red Calyces (Purity 98% Min, Moisture 12% Max)',
    packagingOptions: '25kg / 50kg Press-Packed Woven Sacks',
    applications: 'Herbal Tea Blending, Beverage Manufacturing, Botanical Extracts',
    originRegion: 'Kano, Jigawa & Bauchi States, Nigeria',
  },
  {
    id: 'soybeans',
    name: 'Soybeans',
    category: 'Legumes & Grains',
    description:
      'Non-GMO yellow soybeans sourced from agricultural co-ops in Benue and Kaduna. High protein content suitable for animal feed and commercial food processing.',
    imageSrc: '/images/commodities/soybeans.png',
    imageAlt: 'High-grade non-GMO Nigerian soybeans in export grain warehouse',
    availableGrades: 'Grade A Non-GMO Yellow (Protein 38% Min, Moisture 11% Max)',
    packagingOptions: '50kg Woven Polypropylene Sacks / Container Liners',
    applications: 'Soy Processing, Animal Feed Milling, Food Manufacturing',
    originRegion: 'Benue & Kaduna States, Nigeria',
  },
  {
    id: 'sheabutter',
    name: 'Shea Butter & Nuts',
    category: 'Natural Fats & Oils',
    description:
      'Wild-harvested Nigerian shea nuts and unrefined organic shea butter produced in Niger and Kwara. Rich fatty acid profile for cosmetic and food industries.',
    imageSrc: '/images/commodities/sheabutter.png',
    imageAlt: 'Export-grade raw Nigerian shea nuts and unrefined butter containers',
    availableGrades: 'Raw Shea Nuts / Grade A Unrefined Organic Shea Butter',
    packagingOptions: '80kg Jute Sacks (Nuts) / 25kg Food-Safe Cartons (Butter)',
    applications: 'Cosmetic Formulations, Cocoa Butter Equivalents (CBE), Skincare',
    originRegion: 'Niger & Kwara States, Nigeria',
  },
  {
    id: 'gumarabic',
    name: 'Gum Arabic',
    category: 'Natural Gums & Resins',
    description:
      'Export-grade Acacia Senegal and Acacia Seyal gum exudates collected from northern Nigeria. Excellent emulsifying agent for beverage and confectionery industries.',
    imageSrc: '/images/commodities/gumarabic.png',
    imageAlt: 'Cleaned raw Nigerian Gum Arabic exudates prepared for export container shipment',
    availableGrades: 'Grade 1 Acacia Senegal (Kordofan) / Grade 2 Acacia Seyal (Talha)',
    packagingOptions: '50kg Poly-Lined Woven Bags',
    applications: 'Beverage Emulsification, Confectionery Glazing, Pharmaceutical Binding',
    originRegion: 'Yobe, Borno & Jigawa States, Nigeria',
  },
];

export function CommodityExplorer() {
  const [activeId, setActiveId] = useState<string>('cashew');

  const activeCommodity =
    commodityList.find((item) => item.id === activeId) || commodityList[0];

  return (
    <section className={styles.section} aria-label="Interactive Commodity Explorer">
      <Container size="wide">
        {/* Section Heading */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.headline}>
            Explore Our Agricultural Portfolio
          </h2>
          <p className={styles.subheading}>
            Select a commodity to view detailed export specifications, available grades, packaging options, and typical applications.
          </p>
        </div>

        {/* Horizontal Tab Bar */}
        <div className={styles.tabBarWrapper}>
          <div
            className={styles.tabBar}
            role="tablist"
            aria-label="Select Commodity to Inspect Specifications"
          >
            {commodityList.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`${styles.tabBtn} ${styles.tabBtnFocus} ${
                    isActive ? styles.activeTab : ''
                  }`}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Stage Box */}
        <div
          id={`panel-${activeCommodity.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCommodity.id}`}
          className={styles.stageBox}
        >
          {/* Left Column — Photography Stage */}
          <div className={styles.mediaContainer}>
            <Image
              key={activeCommodity.id}
              src={activeCommodity.imageSrc}
              alt={activeCommodity.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 55vw"
              className={styles.commodityImage}
              priority
            />
            <span className={styles.categoryOverlay}>
              {activeCommodity.category}
            </span>
          </div>

          {/* Right Column — Specifications */}
          <div className={styles.contentContainer}>
            <div className={styles.headerGroup}>
              <h3 className={styles.commodityTitle}>{activeCommodity.name}</h3>
              <p className={styles.description}>{activeCommodity.description}</p>
            </div>

            <div className={styles.specGrid}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Available Grades</span>
                <span className={styles.specValue}>{activeCommodity.availableGrades}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Packaging Standard</span>
                <span className={styles.specValue}>{activeCommodity.packagingOptions}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Typical Applications</span>
                <span className={styles.specValue}>{activeCommodity.applications}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Primary Sourcing Region</span>
                <span className={styles.specValue}>{activeCommodity.originRegion}</span>
              </div>
            </div>

            <div className={styles.ctaFooter}>
              <Button variant="primary" size="md" href="/contact" className={styles.quoteBtn}>
                Request Specification & Quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
