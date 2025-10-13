import React from 'react'
import styles from './InstructorSection.module.css'

function InstructorSection() {
  const instructors = [
    {
      id: 1,
      name: 'Priya Sharma',
      specialty: 'Classical & Bollywood',
      experience: '8 Years Experience',
      image: '👩‍🎤',
      rating: '4.9',
      students: '150+'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      specialty: 'Hip Hop & Street Dance',
      experience: '6 Years Experience',
      image: '🕺',
      rating: '4.8',
      students: '200+'
    },
    {
      id: 3,
      name: 'Anita Desai',
      specialty: 'Ballet & Contemporary',
      experience: '10 Years Experience',
      image: '💃',
      rating: '4.9',
      students: '120+'
    }
  ]

  return (
    <section className={styles.instructorsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Meet Our Instructors</h2>
          <p className={styles.sectionSubtitle}>
            Learn from experienced and passionate dance professionals
          </p>
        </div>
        <div className={styles.instructorsGrid}>
          {instructors.map((instructor) => (
            <div key={instructor.id} className={styles.instructorCard}>
              <div className={styles.instructorImage}>
                <div className={styles.avatar}>{instructor.image}</div>
                <div className={styles.ratingBadge}>
                  <span>⭐ {instructor.rating}</span>
                </div>
              </div>
              <div className={styles.instructorInfo}>
                <h3 className={styles.instructorName}>{instructor.name}</h3>
                <p className={styles.specialty}>{instructor.specialty}</p>
                <p className={styles.experience}>{instructor.experience}</p>
                <div className={styles.stats}>
                  <span className={styles.stat}>
                    <span className={styles.statIcon}>👥</span>
                    {instructor.students} Students
                  </span>
                </div>
                <button className={styles.bookBtn}>Book Session</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstructorSection