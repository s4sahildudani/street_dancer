'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './DanceClasses.module.css'
import { getDanceClasses } from '../../../../app/NodeApi/NodeApi'

function DanceClasses() {
  const [city, setCity] = useState('')
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    if (!searched) return 
    const fetchClasses = async () => {
      setLoading(true)
      try {
        const data = await getDanceClasses(city)
        setClasses(data)
      } catch {
        setClasses([])
      }
      setLoading(false)
    }
    fetchClasses()
  }, [city, searched])

  const handleSearch = (e) => {
    setCity(e.target.value)
    setSearched(true)
  }

  return (
    <section className={styles.section}>
      <h2>Our Dance Classes</h2>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <label htmlFor="city" style={{ marginRight: '1rem', fontWeight: 500 }}>Select City:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={handleSearch}
          placeholder="Enter city name"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            width: '200px'
          }}
        />
      </div>
      {loading && <p style={{ textAlign: 'center' }}>Loading classes...</p>}
      <div className={styles.grid}>
        {searched && !loading && classes.length === 0 && (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888' }}>
            No classes found for &quot;{city}&quot;
          </p>
        )}
        {classes.map((cls, index) => (
          <div key={index} className={styles.card} style={{ borderTop: '4px solid #667eea', boxShadow: '0 4px 20px rgba(102,126,234,0.07)' }}>
            <h3 style={{ color: '#764ba2', marginBottom: '0.5rem' }}>{cls.class_name}</h3>
            <Image
              src={cls.image_url || 'https://images.unsplash.com/photo-1604312975862-d1fba70e1e0c?w=800'}
              alt={cls.dance_name}
              width={80}
              height={80}
              className={styles.emoji}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
            <p style={{ margin: '0.5rem 0', color: '#667eea', fontWeight: 500 }}>Location: {cls.city || city}</p>
            <button className={styles.button}>Join Class</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DanceClasses