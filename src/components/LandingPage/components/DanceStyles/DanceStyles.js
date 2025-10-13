'use client'

import React, { useEffect, useState } from 'react'
import { getDanceForms } from '../../../../app/NodeApi/NodeApi'

function DanceStyles() {
  const [danceStyles, setDanceStyles] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const data = await getDanceForms()
        setDanceStyles(data)
      } catch {
        setDanceStyles([])
      }
    }
    fetchStyles()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1200) setItemsPerPage(3)
      else if (width >= 768) setItemsPerPage(2)
      else setItemsPerPage(1)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalPages = Math.ceil(danceStyles.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const visibleStyles = danceStyles.slice(startIndex, startIndex + itemsPerPage)

  const nextPage = () => {
    setCurrentPage(prev => (prev >= totalPages - 1 ? 0 : prev + 1))
  }

  const prevPage = () => {
    setCurrentPage(prev => (prev <= 0 ? totalPages - 1 : prev - 1))
  }

  const getCardWidth = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return '100%'
    }
    return '400px'
  }

  if (danceStyles.length === 0) {
    return (
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.title}>Dance Styles</h2>
          <p style={styles.emptyText}>No dance styles found.</p>
        </div>
      </section>
    )
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>🎭 Dance Styles</h2>
          <p style={styles.subtitle}>
            Discover the rhythm that moves your soul
          </p>
        </div>

        <div style={styles.carouselFlex}>
          {danceStyles.length > itemsPerPage && (
            <button
              style={{ ...styles.navButton, left: 0 }}
              onClick={prevPage}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
          )}

          <div style={styles.cardsGrid}>
            {visibleStyles.map((style, idx) => (
              <div
                key={idx}
                style={{ ...styles.card, width: getCardWidth() }}
              >
                <div style={styles.imageWrapper}>
                  <img
                    src={style.image_url || 'https://images.unsplash.com/photo-1604312975862-d1fba70e1e0c?w=800'}
                    alt={style.dance_name}
                    style={styles.image}
                  />
                  <div style={styles.imageOverlay}></div>
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{style.dance_name}</h3>
                  <div style={styles.badge}>Popular</div>
                  <button style={styles.exploreButton}>
                    <span style={styles.buttonIcon}>✨</span>
                    Explore Now
                    <span style={styles.buttonArrow}>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {danceStyles.length > itemsPerPage && (
            <button
              style={{ ...styles.navButton, right: 0 }}
              onClick={nextPage}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          )}
        </div>

        {danceStyles.length > itemsPerPage && (
          <div style={styles.pageIndicator}>
            <span style={styles.pageText}>{currentPage + 1} / {totalPages}</span>
          </div>
        )}
      </div>
    </section>
  )
}

// ADD THIS FLEX STYLE
const styles = {
  section: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '80px 20px',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: 900,
    color: '#ffffff',
    marginBottom: '16px',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    letterSpacing: '1px'
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '600px',
    margin: '0 auto',
    fontWeight: 300
  },
  emptyText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.1rem',
    marginTop: '20px'
  },
  carouselWrapper: {
    position: 'relative',
    padding: '0 80px'
  },
  carouselFlex: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    minHeight: '340px',
    marginBottom: '2rem'
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.98)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width:"400px",
    backdropFilter: 'blur(10px)'
  },
  imageWrapper: {
    position: 'relative',
    height: '240px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease'
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
    pointerEvents: 'none'
  },
  cardContent: {
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1
  },
  cardTitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#2d3748',
    marginBottom: '12px',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  badge: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 600,
    marginBottom: '24px',
    letterSpacing: '0.5px'
  },
  exploreButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '14px 32px',
    borderRadius: '50px',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: 'auto',
    width: '100%',
    justifyContent: 'center'
  },
  buttonIcon: {
    fontSize: '1.1rem'
  },
  buttonArrow: {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease'
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    // left: 0,
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.95)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    color: '#667eea',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    zIndex: 10,
    backdropFilter: 'blur(10px)'
  },
  pageIndicator: {
    textAlign: 'center',
    marginTop: '50px'
  },
  pageText: {
    color: 'white',
    fontWeight: 600,
    fontSize: '1.1rem',
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '25px',
    padding: '10px 24px',
    display: 'inline-block',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 255, 255, 0.2)'
  }
}

// Add media queries using window matchMedia
if (typeof window !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @media (max-width: 768px) {
      .carousel-wrapper {
        padding: 0 60px !important;
      }
        
    }
    
    @media (max-width: 480px) {
      .carousel-wrapper {
        padding: 0 50px !important;
      }
    }
  `
  document.head.appendChild(style)
}

export default DanceStyles