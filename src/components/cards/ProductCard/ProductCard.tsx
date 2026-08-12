import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

export interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  origin?: string;
  href?: string;
  className?: string;
  id?: string;
}

export function ProductCard({
  title,
  category,
  description,
  imageSrc,
  imageAlt = '',
  origin = 'Nigeria',
  href = '#',
  className = '',
  id,
}: ProductCardProps) {
  return (
    <article className={`${styles.productCard} ${className}`} id={id}>
      {imageSrc && (
        <div className={styles.mediaWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={styles.image}
          />
          <span className={styles.badgeOverlay}>{origin} Origin</span>
        </div>
      )}
      <div className={styles.content}>
        <span className={styles.categoryTag}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <Link href={href} className={styles.linkText}>
            View Specifications &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
