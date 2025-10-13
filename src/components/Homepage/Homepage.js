import React from 'react'
import Styles from './Homepage.module.css'
import DanceClasses from './components/DanceClasses/DanceClasses'
import Competitions from './components/Competitions/Competitions'
import SpecialEvents from './components/SpecialEvents/SpecialEvents'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import InstructorCarousel from './components/Instructors/Instructors'
function Homepage() {
  return (
    <>
      <Navbar />
      <div className={Styles.homepage}>
     
      <div className={Styles.heroSection}>
        <h1>Welcome to StepDance</h1>
        <p>Discover the joy of dance with our amazing classes and events</p>
      </div>
      <InstructorCarousel />
      {/* <DanceClasses /> */}
      <Competitions />
      <SpecialEvents />
    </div>
    <Footer />
    </>
    
  )
}

export default Homepage