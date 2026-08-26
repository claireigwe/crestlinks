import {
  Hero,
  CredibilitySection,
  NepcCertificationSection,
  CommodityShowcase,
  ExportStory,
  WhyChooseUsManifesto,
  FinalCtaSection,
} from '@/components';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CredibilitySection />
      <NepcCertificationSection />
      <CommodityShowcase />
      <ExportStory />
      <WhyChooseUsManifesto />
      <FinalCtaSection />
    </main>
  );
}
