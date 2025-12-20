import React from 'react'
import styles from './LandinPage.module.css'
import LandingHero from './components/LandingHero/LandingHero';
import Stats from './components/Stats/Stats';
import CTA from './components/DanceCta/Cta';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Instructors from './components/Instructor/Instructor';
import DanceStylesNew from './components/DanceStylesNew/DanceStylesNew'
// import DanceBannerSection from './components/DanceBannerSection/DanceBannerSection'
// import DanceStyles from './components/DanceStyles/DanceStyles'
// import InstructorSection from './components/InstructorSection/InstructorSection'
// import StatsSection from './components/StatsSection/StatsSection'
function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <LandingHero />
      <Stats />
      <DanceStylesNew />
      <Instructors />
      <Pricing />
      <Testimonials />
      <CTA />
      
        {/* <DanceBannerSection />
        <DanceStyles />
        <InstructorSection />
        <StatsSection /> */}
    </div>
  )
}

export default LandingPage