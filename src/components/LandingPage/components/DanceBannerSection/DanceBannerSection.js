import React from 'react'
import styles from './DanceBannerSection.module.css'
import Image from 'next/image'
import DanceImage from '@/components/LandingPage/components/images/dance_banner_image.webp'
function DanceBannerSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Feel the <span className={styles.accent}>Rhythm</span>
            <br />
            Dance Your <span className={styles.accent}>Dreams</span>
          </h1>
          <p className={styles.heroDescription}>
            Discover the joy of movement with our professional dance classes. 
            From classical to contemporary, hip-hop to ballet - find your perfect style.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>Start Dancing</button>
            <button className={styles.secondaryBtn}>Watch Videos</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.dancerSilhouette}>
            <Image 
              src={DanceImage}
              alt="Dancer" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DanceBannerSection;