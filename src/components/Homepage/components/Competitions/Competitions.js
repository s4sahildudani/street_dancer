import React from 'react'
import styles from '../shared.module.css'
function Competitions() {
  const competitions = [
    {
      title: "Annual Dance Championship",
      date: "December 15, 2023",
      prize: "$1000",
      category: "All Styles"
    },
    {
      title: "Street Dance Battle",
      date: "November 30, 2023",
      prize: "$500",
      category: "Hip Hop"
    }
  ]

  return (
    <section className={styles.section}>
      <h2>Upcoming Competitions</h2>
      <div className={styles.grid}>
        {competitions.map((comp, index) => (
          <div key={index} className={styles.card}>
            <h3>{comp.title}</h3>
            <p className={styles.date}>Date: {comp.date}</p>
            <p className={styles.prize}>Prize Pool: {comp.prize}</p>
            <p className={styles.category}>Category: {comp.category}</p>
            <button className={styles.button}>Register Now</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Competitions