import React from 'react';
import type { Metadata } from 'next';
import {
  ServicesHero,
  ServicesOverview,
  ShipmentJourney,
  DocumentationCompliance,
  BusinessOutcomes,
  FinalCtaSection,
} from '@/components';

export const metadata: Metadata = {
  title: 'Export Services & Management | CrestLinks — Agricultural Export Partner',
  description:
    'Learn how CrestLinks manages the entire agricultural export lifecycle from farm sourcing and pre-shipment lab verification to NEPC permits and ocean freight shipping.',
};

export default function ExportServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesOverview />
      <ShipmentJourney />
      <DocumentationCompliance />
      <BusinessOutcomes />
      <FinalCtaSection />
    </main>
  );
}
