import React from 'react';
import type { Metadata } from 'next';
import {
  AboutHero,
  WhoWeAre,
  NepcCertificationSection,
  AboutManifestoSignature,
  AboutPartnerships,
  FinalCtaSection,
} from '@/components';

export const metadata: Metadata = {
  title: 'About Us | CrestLinks — Agricultural Export Partner',
  description:
    'Learn about CrestLinks, a licensed Nigerian agricultural commodity export company connecting global buyers with verified raw origins through operational rigor and transparency.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <NepcCertificationSection />
      <AboutManifestoSignature />
      <AboutPartnerships />
      <FinalCtaSection />
    </main>
  );
}
