'use client';

import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../../ui/Button/Button';
import styles from './InquiryForm.module.css';

export interface InquiryFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  commodity: string;
  quantity: string;
  destination: string;
  packaging: string;
  additionalNotes: string;
}

const INITIAL_FORM_DATA: InquiryFormData = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  commodity: 'cashew-nuts',
  quantity: '',
  destination: '',
  packaging: 'jute-bags',
  additionalNotes: '',
};

const COMMODITY_OPTIONS = [
  { value: 'cashew-nuts', label: 'Raw Cashew Nuts (RCN)' },
  { value: 'sesame-seeds', label: 'Sesame Seeds (Raw / Cleaned)' },
  { value: 'cocoa-beans', label: 'Cocoa Beans (Grade I / II)' },
  { value: 'ginger', label: 'Split Dried Ginger' },
  { value: 'hibiscus', label: 'Dried Hibiscus Flowers' },
  { value: 'soybeans', label: 'Non-GMO Soybeans' },
  { value: 'shea-nuts', label: 'Raw Shea Nuts' },
  { value: 'other', label: 'Other / Custom Commodity Sourcing' },
];

const PACKAGING_OPTIONS = [
  { value: 'jute-bags', label: 'Standard Jute Bags (50kg / 80kg)' },
  { value: 'pp-bags', label: 'Woven Polypropylene (PP) Bags' },
  { value: 'vacuum-sealed', label: 'Vacuum Sealed Sacks' },
  { value: 'bulk-container', label: 'Bulk Container Liner' },
  { value: 'custom', label: 'Custom Buyer Specifications' },
];

const COMMODITY_GUIDANCE: Record<string, string> = {
  'cashew-nuts':
    'Raw Cashew Nuts (RCN) are typically sourced from prime Nigerian harvests with Kernel Outturn Ratio (KOR) verified prior to export.',
  'sesame-seeds':
    'Sesame Seeds are available in natural raw or machine-cleaned grades with minimum 99.5% purity standards.',
  'cocoa-beans':
    'Cocoa Beans are fermented and sun-dried, conforming to international Grade I & II bean count standards.',
  ginger:
    'Split Dried Ginger offers high essential oil content and low moisture levels suitable for food and extraction industries.',
  hibiscus:
    'Dried Hibiscus Flowers are hand-picked, sifted to eliminate foreign matter, and packed for floral tea and beverage processing.',
  soybeans:
    'Non-GMO Soybeans are selected for high protein content and consistent grain size for food manufacturing and crushing.',
  'shea-nuts':
    'Raw Shea Nuts are sun-dried with controlled free fatty acid (FFA) levels for cosmetic and botanical oil processing.',
  other:
    'Tell us your specific agricultural commodity requirement. Our Nigerian sourcing team will evaluate availability and origin specs.',
};

export function InquiryForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<InquiryFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company or organization name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid work email address.';
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Please enter your country of operation.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Please specify your estimated quantity (e.g., 25 Metric Tons).';
    }
    if (!formData.destination.trim()) {
      newErrors.destination = 'Please specify your destination country or port of discharge.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);

    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setStep(1);
    setIsSubmitted(false);
  };

  const selectedCommodityLabel =
    COMMODITY_OPTIONS.find((opt) => opt.value === formData.commodity)?.label || formData.commodity;

  if (isSubmitted) {
    return (
      <div className={styles.successContainer} role="region" aria-live="polite">
        <div className={styles.successBadge}>Inquiry Received</div>
        <h2 className={styles.successTitle}>Thank You for Reaching Out.</h2>
        <p className={styles.successText}>
          Our export management desk has logged your sourcing parameters. A dedicated trade representative will review your commodity specifications and contact you within <strong>24 business hours</strong>.
        </p>

        <div className={styles.recapCard}>
          <h3 className={styles.recapHeading}>Inquiry Summary</h3>
          <dl className={styles.recapList}>
            <div className={styles.recapRow}>
              <dt>Contact:</dt>
              <dd>{formData.fullName} ({formData.company})</dd>
            </div>
            <div className={styles.recapRow}>
              <dt>Work Email:</dt>
              <dd>{formData.email}</dd>
            </div>
            <div className={styles.recapRow}>
              <dt>Commodity:</dt>
              <dd>{selectedCommodityLabel}</dd>
            </div>
            <div className={styles.recapRow}>
              <dt>Quantity:</dt>
              <dd>{formData.quantity}</dd>
            </div>
            <div className={styles.recapRow}>
              <dt>Destination:</dt>
              <dd>{formData.destination}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.successFooter}>
          <p className={styles.urgentNote}>
            Need to make an urgent amendment to this request? Email us directly at{' '}
            <a href="mailto:info@crestlinks.com" className={styles.directLink}>
              info@crestlinks.com
            </a>
          </p>
          <Button variant="secondary" size="md" onClick={handleReset} type="button">
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      {/* Progress Header */}
      <div className={styles.progressHeader}>
        <div
          className={`${styles.progressStep} ${step === 1 ? styles.activeStep : styles.completedStep}`}
        >
          <span className={styles.stepNum}>01</span>
          <span className={styles.stepLabel}>Buyer Information</span>
        </div>
        <div className={styles.progressDivider} aria-hidden="true" />
        <div
          className={`${styles.progressStep} ${step === 2 ? styles.activeStep : ''}`}
        >
          <span className={styles.stepNum}>02</span>
          <span className={styles.stepLabel}>Sourcing & Specs</span>
        </div>
      </div>

      {step === 1 && (
        <form onSubmit={handleNext} noValidate className={styles.formBody}>
          <h2 className={styles.stepTitle}>Your Contact & Company Details</h2>
          <p className={styles.stepDesc}>
            Provide your business information so our export trade team can address your quotation accurately.
          </p>

          <div className={styles.fieldGrid}>
            <Input
              id="fullName"
              name="fullName"
              label="Full Name"
              placeholder="e.g. Sarah Jenkins"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
            />

            <Input
              id="company"
              name="company"
              label="Company / Organization"
              placeholder="e.g. Apex Global Foods Ltd"
              value={formData.company}
              onChange={handleChange}
              error={errors.company}
              required
            />
          </div>

          <div className={styles.fieldGrid}>
            <Input
              id="email"
              name="email"
              type="email"
              label="Work Email Address"
              placeholder="s.jenkins@apexglobal.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Input
              id="phone"
              name="phone"
              type="tel"
              label="Phone Number / WhatsApp (Optional)"
              placeholder="+1 (555) 019-2834"
              value={formData.phone}
              onChange={handleChange}
              helperText="Helps our trade team contact you promptly across time zones."
            />
          </div>

          <Input
            id="country"
            name="country"
            label="Country of Operation"
            placeholder="e.g. Netherlands, United Arab Emirates, China, USA"
            value={formData.country}
            onChange={handleChange}
            error={errors.country}
            required
          />

          <div className={styles.actionRow}>
            <Button variant="primary" size="lg" type="submit" className={styles.nextBtn}>
              Continue to Sourcing Details →
            </Button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} noValidate className={styles.formBody}>
          <h2 className={styles.stepTitle}>Commodity Sourcing Requirements</h2>
          <p className={styles.stepDesc}>
            Specify the product, target volume, and shipping destination for your export quote.
          </p>

          <Select
            id="commodity"
            name="commodity"
            label="Primary Commodity Needed"
            options={COMMODITY_OPTIONS}
            value={formData.commodity}
            onChange={handleChange}
            required
          />

          {formData.commodity && COMMODITY_GUIDANCE[formData.commodity] && (
            <div className={styles.guidanceBox} role="note">
              <span className={styles.guidanceIcon}>ℹ</span>
              <p>{COMMODITY_GUIDANCE[formData.commodity]}</p>
            </div>
          )}

          <div className={styles.fieldGrid}>
            <Input
              id="quantity"
              name="quantity"
              label="Estimated Quantity"
              placeholder="e.g. 25 Metric Tons / 1x 20ft FCL"
              value={formData.quantity}
              onChange={handleChange}
              error={errors.quantity}
              required
            />

            <Input
              id="destination"
              name="destination"
              label="Destination Country & Port"
              placeholder="e.g. Rotterdam Port, Netherlands"
              value={formData.destination}
              onChange={handleChange}
              error={errors.destination}
              required
            />
          </div>

          <Select
            id="packaging"
            name="packaging"
            label="Preferred Packaging"
            options={PACKAGING_OPTIONS}
            value={formData.packaging}
            onChange={handleChange}
          />

          <Textarea
            id="additionalNotes"
            name="additionalNotes"
            label="Additional Details / Quality Specifications (Optional)"
            placeholder="Include any target moisture levels, purity grades, preferred shipping terms (FOB/CIF), or inspection requirements..."
            value={formData.additionalNotes}
            onChange={handleChange}
            rows={4}
          />

          <div className={styles.actionRowSplit}>
            <Button
              variant="secondary"
              size="md"
              type="button"
              onClick={handleBack}
              disabled={isSubmitting}
            >
              ← Back
            </Button>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              {isSubmitting ? 'Submitting Quote Request...' : 'Request a Quote'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
