import React from 'react';
import { Container } from '../../layout/Container/Container';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { ProductCard } from '../../cards/ProductCard/ProductCard';
import { Button } from '../../ui/Button/Button';
import styles from './FeaturedCommodities.module.css';

const featuredProducts = [
  {
    title: 'Cashew Nuts',
    category: 'Raw & Kernels',
    description:
      'High-yield raw cashew nuts and processed kernels sourced directly from prime Nigerian cashew growing belts.',
    imageSrc: '/images/commodities/cashew.jpg',
    imageAlt: 'Raw Nigerian cashew nuts in export jute sacks',
    origin: 'Nigeria',
    href: '/products#cashew',
  },
  {
    title: 'Sesame Seeds',
    category: 'Natural & Cleaned',
    description:
      'Premium grade natural white and hulled sesame seeds with high oil content, thoroughly cleaned for export.',
    imageSrc: '/images/commodities/sesame.png',
    imageAlt: 'Cleaned golden Nigerian sesame seeds',
    origin: 'Nigeria',
    href: '/products#sesame',
  },
  {
    title: 'Cocoa Beans',
    category: 'Fermented Main Crop',
    description:
      'Well-fermented, sun-dried main crop Nigerian cocoa beans meeting international chocolate manufacturing standards.',
    imageSrc: '/images/commodities/cocoa.png',
    imageAlt: 'Fermented Nigerian cocoa beans in wooden tray',
    origin: 'Nigeria',
    href: '/products#cocoa',
  },
  {
    title: 'Ginger',
    category: 'Split Sun-Dried',
    description:
      'Aromatic Nigerian split dried ginger roots known globally for high pungency and exceptional essential oil levels.',
    imageSrc: '/images/commodities/ginger.png',
    imageAlt: 'Sun-dried split Nigerian ginger roots',
    origin: 'Nigeria',
    href: '/products#ginger',
  },
];

export function FeaturedCommodities() {
  return (
    <section className={`section ${styles.section}`} aria-label="Featured Commodities">
      <Container size="wide">
        <div className={styles.headerWrapper}>
          <SectionHeading
            eyebrow="Export Portfolio"
            title="Premium Commodities. Global Standards."
            subtitle="Our growing portfolio includes carefully sourced agricultural commodities prepared for international markets."
            align="center"
          />
        </div>

        <div className={styles.grid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        <div className={styles.footerActions}>
          <Button variant="primary" size="lg" href="/products">
            View All Products & Specifications →
          </Button>
        </div>
      </Container>
    </section>
  );
}
