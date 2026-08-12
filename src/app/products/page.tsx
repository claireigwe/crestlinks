import React from 'react';
import type { Metadata } from 'next';
import {
  ProductsHero,
  CommoditiesOverview,
  CommodityExplorer,
  ExportStandards,
  FlexibleSourcing,
  FinalCtaSection,
} from '@/components';

export const metadata: Metadata = {
  title: 'Export Commodities Catalogue | CrestLinks — Agricultural Export Partner',
  description:
    'Explore CrestLinks export catalogue of premium Nigerian agricultural commodities including cashew nuts, sesame seeds, cocoa beans, ginger, hibiscus, soybeans, shea butter, and gum arabic.',
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <CommoditiesOverview />
      <CommodityExplorer />
      <ExportStandards />
      <FlexibleSourcing />
      <FinalCtaSection />
    </main>
  );
}
