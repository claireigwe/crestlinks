import React from 'react';
import type { Metadata } from 'next';
import { ContactHero, ContactMain, WhatHappensNext } from '@/components';

export const metadata: Metadata = {
  title: 'Contact Us | CrestLinks — Agricultural Export Partner',
  description:
    'Initiate your B2B agricultural export inquiry with CrestLinks. Request quotations for premium Nigerian cashew nuts, sesame seeds, cocoa beans, ginger, hibiscus, soybeans, and custom sourcing.',
  openGraph: {
    title: 'Contact Us | CrestLinks — Agricultural Export Partner',
    description:
      'Start a direct sourcing conversation with CrestLinks. Submit your commodity specifications, volume requirements, and container shipping destination for a prompt commercial offer.',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactMain />
      <WhatHappensNext />
    </main>
  );
}
