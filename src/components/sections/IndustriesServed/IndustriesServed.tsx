import React from 'react';
import Image from 'next/image';
import { Container } from '../../layout/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import styles from './IndustriesServed.module.css';

interface IndustryItem {
  id: string;
  name: string;
  category: string;
  valueProp: string;
  imageSrc: string;
  imageAlt: string;
  isFeatured?: boolean;
}

const industries: IndustryItem[] = [
  {
    id: 'food',
    name: 'Food Manufacturers',
    category: 'Industrial Processing',
    valueProp:
      'Consistent raw material procurement tailored for large-scale food processing, confectionery, nut roasting, and agricultural milling operations.',
    imageSrc: '/images/industries/food.png',
    imageAlt: 'Modern automated food manufacturing facility with stainless steel processing machinery',
    isFeatured: true,
  },
  {
    id: 'beverage',
    name: 'Beverage Producers',
    category: 'Botanical Extracts',
    valueProp:
      'Specialty dried hibiscus flowers, split ginger roots, and raw agricultural botanicals for commercial beverage blenders and herbal tea producers.',
    imageSrc: '/images/industries/beverage.png',
    imageAlt: 'Industrial beverage manufacturing facility with hibiscus tea extract bottles on automated line',
  },
  {
    id: 'traders',
    name: 'Commodity Traders',
    category: 'Bulk Export Contracts',
    valueProp:
      'Contract-compliant bulk volume commodity shipments backed by independent pre-shipment lab analysis and NEPC documentation.',
    imageSrc: '/images/industries/traders.png',
    imageAlt: 'Modern international commodity trading organization office with market monitors',
  },
  {
    id: 'importers',
    name: 'Wholesale Importers',
    category: 'Ocean Container Freight',
    valueProp:
      'Dependable containerized shipments delivered directly to international destination ports with full maritime manifest tracking.',
    imageSrc: '/images/industries/importers.png',
    imageAlt: 'Massive international wholesale commodity import warehouse with stacked pallets',
  },
  {
    id: 'distribution',
    name: 'Retail & Distribution',
    category: 'Regional Supply Chains',
    valueProp:
      'Standardized export-grade packaging and batch consistency for regional distributors and wholesale supply networks worldwide.',
    imageSrc: '/images/industries/distribution.png',
    imageAlt: 'Commercial distribution logistics hub with cargo trucks at loading docks',
  },
];

export function IndustriesServed() {
  return (
    <section className={styles.section} aria-label="Industries We Serve">
      <Container size="wide">
        {/* Editorial Section Heading */}
        <div className={styles.headerWrapper}>
          <Badge variant="primary" className={styles.eyebrow}>
            Global B2B Partnerships
          </Badge>
          <h2 className={styles.headline}>
            Supporting Businesses Around the World
          </h2>
          <p className={styles.subheading}>
            We partner with international organizations seeking reliable,
            direct-from-source Nigerian agricultural supply chains.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className={styles.grid}>
          {industries.map((ind) => (
            <article
              key={ind.id}
              className={`${styles.tileCard} ${
                ind.isFeatured ? styles.featuredCard : ''
              }`}
            >
              <Image
                src={ind.imageSrc}
                alt={ind.imageAlt}
                fill
                sizes={
                  ind.isFeatured
                    ? '(max-width: 1023px) 100vw, 66vw'
                    : '(max-width: 1023px) 100vw, 33vw'
                }
                className={styles.tileImage}
              />
              <div className={styles.overlay} aria-hidden="true" />
              <div className={styles.content}>
                <span className={styles.categoryTag}>{ind.category}</span>
                <h3 className={styles.tileTitle}>{ind.name}</h3>
                <p className={styles.tileValueProp}>{ind.valueProp}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
