import React from 'react'
import styles from '../shared.module.css'

function SpecialEvents() {
  const events = [
    {
      title: "Navratri Garba Night",
      date: "October 15-24, 2023",
      venue: "City Convention Center",
      description: "9 nights of traditional Garba celebration"
    },
    {
      title: "Christmas Dance Show",
      date: "December 25, 2023",
      venue: "Community Theater",
      description: "Annual holiday performance showcase"
    }
  ]

  return (
    <section className={styles.section}>
      <h2>Special Events</h2>
      <div className={styles.grid}>
        {events.map((event, index) => (
          <div key={index} className={styles.card}>
            <h3>{event.title}</h3>
            <p className={styles.date}>Date: {event.date}</p>
            <p className={styles.venue}>Venue: {event.venue}</p>
            <p className={styles.description}>{event.description}</p>
            <button className={styles.button}>Get Tickets</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SpecialEvents