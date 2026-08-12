import React from 'react';
import { Container } from '../../layout/Container/Container';
import { InquiryForm } from '../../forms/InquiryForm/InquiryForm';
import { ContactSidebar } from '../ContactSidebar/ContactSidebar';
import styles from './ContactMain.module.css';

export function ContactMain() {
  return (
    <section className={styles.section} aria-label="Export Sourcing Inquiry & Contact Information">
      <Container size="wide">
        <div className={styles.layoutGrid}>
          <div className={styles.primaryColumn}>
            <InquiryForm />
          </div>
          <div className={styles.secondaryColumn}>
            <ContactSidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}
