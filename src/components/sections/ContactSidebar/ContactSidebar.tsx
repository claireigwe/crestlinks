import React from 'react';
import styles from './ContactSidebar.module.css';

export function ContactSidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Direct Contact & Business Verification">
      {/* Direct Communication Block */}
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Direct Communication</h3>
        <p className={styles.cardDesc}>
          Prefer direct email or phone discussions? Contact our export management desk during business hours.
        </p>

        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <span className={styles.contactLabel}>Primary Export Desk</span>
            <a href="mailto:info@crestlinks.com" className={styles.contactValue}>
              info@crestlinks.com
            </a>
          </li>

          <li className={styles.contactItem}>
            <span className={styles.contactLabel}>Direct Line</span>
            <a href="tel:+2348002737854" className={styles.contactValue}>
              +234 (0) 800 273 7854
            </a>
          </li>

          <li className={styles.contactItem}>
            <span className={styles.contactLabel}>Registered Headquarters</span>
            <span className={styles.contactText}>Lagos, Nigeria</span>
          </li>

          <li className={styles.contactItem}>
            <span className={styles.contactLabel}>Desk Operating Hours</span>
            <span className={styles.contactText}>Mon – Fri: 08:00 – 18:00 (WAT / GMT+1)</span>
          </li>
        </ul>
      </div>

      {/* Trust & Reassurance Signals */}
      <div className={styles.cardAlt}>
        <h3 className={styles.cardTitle}>Export Reassurance</h3>
        <ul className={styles.trustList}>
          <li className={styles.trustItem}>
            <div className={styles.trustCheck}>✓</div>
            <div>
              <strong className={styles.trustHeadline}>Licensed Nigerian Exporter</strong>
              <p className={styles.trustSub}>
                Registered export license (NEPC) for international agricultural commodity shipments.
              </p>
            </div>
          </li>

          <li className={styles.trustItem}>
            <div className={styles.trustCheck}>✓</div>
            <div>
              <strong className={styles.trustHeadline}>Independent Inspection Support</strong>
              <p className={styles.trustSub}>
                Coordination with SGS or Bureau Veritas for pre-shipment quality verification.
              </p>
            </div>
          </li>

          <li className={styles.trustItem}>
            <div className={styles.trustCheck}>✓</div>
            <div>
              <strong className={styles.trustHeadline}>Complete Documentation</strong>
              <p className={styles.trustSub}>
                Full export compliance including Phytosanitary Certificates and Certificates of Origin.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
