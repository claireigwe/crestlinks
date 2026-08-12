'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import { MobileNav, NavItem } from '../MobileNav/MobileNav';
import styles from './Header.module.css';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Export Services', href: '/export-services' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      >
        <Container size="wide">
          <div className={styles.inner}>
            {/* Logo */}
            <Link href="/" className={styles.logo} aria-label="CrestLinks Home">
              <span className={styles.logoMark} aria-hidden="true">
                C
              </span>
              <span>CrestLinks</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.nav} aria-label="Primary Navigation">
              <ul className={styles.navList}>
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`${styles.navLink} ${
                          isActive ? styles.activeLink : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className={styles.actions}>
              <Button
                variant="primary"
                size="md"
                href="/contact"
                className={styles.ctaDesktop}
              >
                Request a Quote
              </Button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu-drawer"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                className={styles.menuToggle}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={NAV_ITEMS}
      />
    </>
  );
}
