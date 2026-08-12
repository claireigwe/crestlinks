'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../../ui/Button/Button';
import { Text } from '../../typography/Text/Text';
import styles from './MobileNav.module.css';

export interface NavItem {
  label: string;
  href: string;
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const pathname = usePathname();

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on pathname change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
      >
        <div className={styles.header}>
          <Text size="base" weight="bold" color="primary">
            Menu
          </Text>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className={styles.closeButton}
          >
            <svg
              width="24"
              height="24"
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
          </button>
        </div>

        <div className={styles.content}>
          <nav aria-label="Mobile Navigation">
            <ul className={styles.navList}>
              {items.map((item) => {
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
        </div>

        <div className={styles.footer}>
          <Button variant="primary" size="lg" href="/contact">
            Request a Quote
          </Button>
          <Text size="xs" color="muted">
            Licensed Nigerian Agricultural Commodities Exporter
          </Text>
        </div>
      </div>
    </>
  );
}
