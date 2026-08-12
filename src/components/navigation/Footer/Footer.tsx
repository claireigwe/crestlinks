import React from 'react';
import Link from 'next/link';
import { Container } from '../../layout/Container/Container';
import { Text } from '../../typography/Text/Text';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container size="wide">
        <div className={styles.top}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="CrestLinks Home">
              <span className={styles.logoMark} aria-hidden="true">
                C
              </span>
              <span>CrestLinks</span>
            </Link>
            <Text size="sm" color="secondary">
              CrestLinks is a licensed Nigerian agricultural commodities export
              company connecting global buyers with premium commodities through a
              transparent, reliable, and professionally managed export process.
            </Text>
            <Text size="xs" color="muted">
              Licensed Exporter · Export Commodity Assurance · Nigeria
            </Text>
          </div>

          {/* Quick Links */}
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className={styles.footerLink}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/export-services" className={styles.footerLink}>
                  Export Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Commodities */}
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Commodities</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/products#cashew-nuts" className={styles.footerLink}>
                  Cashew Nuts
                </Link>
              </li>
              <li>
                <Link href="/products#sesame-seeds" className={styles.footerLink}>
                  Sesame Seeds
                </Link>
              </li>
              <li>
                <Link href="/products#cocoa-beans" className={styles.footerLink}>
                  Cocoa Beans
                </Link>
              </li>
              <li>
                <Link href="/products#ginger" className={styles.footerLink}>
                  Ginger
                </Link>
              </li>
              <li>
                <Link href="/products#hibiscus" className={styles.footerLink}>
                  Hibiscus
                </Link>
              </li>
              <li>
                <Link href="/products#soybeans" className={styles.footerLink}>
                  Soybeans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Global Enquiries</h3>
            <ul className={styles.linkList}>
              <li>
                <Text size="sm" color="secondary">
                  <strong>Headquarters:</strong> Nigeria
                </Text>
              </li>
              <li>
                <Text size="sm" color="secondary">
                  <strong>Export Department:</strong>
                </Text>
                <Link href="/contact" className={styles.footerLink}>
                  Request a Quotation
                </Link>
              </li>
              <li>
                <Text size="sm" color="secondary">
                  <strong>Hours:</strong> Mon – Fri, 8:00 – 17:00 WAT
                </Text>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className={styles.bottom}>
          <Text size="xs" color="muted">
            © {currentYear} CrestLinks. All rights reserved. Premium Agricultural Export Partner.
          </Text>

          <ul className={styles.legalLinks}>
            <li>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={styles.footerLink}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
