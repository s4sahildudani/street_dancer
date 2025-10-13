import React from 'react'
import styles from './StatsSection.module.css'

function StatsSection() {
  const stats = [
    {
      id: 1,
      number: '500+',
      label: 'Happy Students',
      icon: '👥'
    },
    {
      id: 2,
      number: '15+',
      label: 'Dance Styles',
      icon: '💃'
    },
    {
      id: 3,
      number: '8+',
      label: 'Expert Instructors',
      icon: '🏆'
    },
    {
      id: 4,
      number: '3',
      label: 'Studio Locations',
      icon: '📍'
    }
  ]

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.backgroundPattern}></div>
    </section>
  )
}
export default StatsSection