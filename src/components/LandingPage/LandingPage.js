import React from 'react'
import styles from './LandinPage.module.css'
import DanceBannerSection from './components/DanceBannerSection/DanceBannerSection'
import DanceStyles from './components/DanceStyles/DanceStyles'
import InstructorSection from './components/InstructorSection/InstructorSection'
import StatsSection from './components/StatsSection/StatsSection'
function LandingPage() {
  return (
    <div className={styles.landingPage}>
        <DanceBannerSection />
        <DanceStyles />
        <InstructorSection />
        <StatsSection />
    </div>
  )
}

export default LandingPage