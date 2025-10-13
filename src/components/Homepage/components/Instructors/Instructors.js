'use client'
import { useState, useEffect } from 'react';
import styles from './Instructors.module.css';
import { getInstructors } from '@/app/NodeApi/NodeApi';

const InstructorCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [accessCode, setAccessCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const data = await getInstructors();
      setInstructors(data);
      setLoading(false);
    } catch (error) {
      setError('Failed to load instructors');
      setLoading(false);
    }
  };

  const itemsPerPage = 3;
  const totalPages = Math.ceil(instructors.length / itemsPerPage);
  const showCarousel = instructors.length > 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentInstructors = () => {
    if (!showCarousel) return instructors;
    const startIndex = currentIndex * itemsPerPage;
    return instructors.slice(startIndex, startIndex + itemsPerPage);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
        ⭐
      </span>
    ));
  };

  useEffect(() => {
    if (showCarousel) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [showCarousel]);

  const handleSeeDetails = (instructor) => {
    setSelectedInstructor(instructor);
    setShowModal(true);
    setAccessCode('');
    setIsVerified(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInstructor(null);
    setAccessCode('');
    setIsVerified(false);
  };

  const handleVerifyCode = () => {
    if (accessCode === 'sdSahilnew') {
      setIsVerified(true);
    } else {
      alert('Invalid access code. Please try again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleVerifyCode();
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading instructors...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <section className={styles.instructorSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Expert Instructors</h2>
          <p className={styles.subtitle}>Learn from the best dance professionals in your area</p>
        </div>

        <div className={styles.carousel}>
          {showCarousel && (
            <button 
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={prevSlide}
            >
              ‹
            </button>
          )}

          <div className={styles.instructorGrid}>
            {getCurrentInstructors().map((instructor) => (
              <div key={instructor.id} className={styles.instructorCard}>
                <div className={styles.imageContainer}>
                  <img 
                    src={instructor.imageUrl || '/default-instructor.jpg'} 
                    alt={instructor.instructor}
                    className={styles.instructorImage}
                  />
                  <div className={styles.ratingBadge}>
                    {renderStars(instructor.rating || 5)}
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.instructorName}>{instructor.instructor}</h3>
                  <h4 className={styles.className}>{instructor.className}</h4>
                  
                  <div className={styles.buttonGroup}>
                    <button 
                      className={styles.seeDetailsButton}
                      onClick={() => handleSeeDetails(instructor)}
                    >
                      See Details
                    </button>
                    <button className={styles.enrollButton}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showCarousel && (
            <button 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextSlide}
            >
              ›
            </button>
          )}
        </div>

        {showCarousel && (
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`${styles.paginationDot} ${currentIndex === i ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            
            <h2 className={styles.modalTitle}>Access Instructor Details</h2>
            
            {!isVerified ? (
              <div className={styles.verificationSection}>
                <div className={styles.qrCodeContainer}>
                  <svg viewBox="0 0 200 200" className={styles.qrCode}>
                    <rect width="200" height="200" fill="white"/>
                    <rect x="10" y="10" width="30" height="30" fill="black"/>
                    <rect x="50" y="10" width="10" height="10" fill="black"/>
                    <rect x="70" y="10" width="10" height="10" fill="black"/>
                    <rect x="90" y="10" width="10" height="10" fill="black"/>
                    <rect x="110" y="10" width="10" height="10" fill="black"/>
                    <rect x="160" y="10" width="30" height="30" fill="black"/>
                    <rect x="10" y="50" width="10" height="10" fill="black"/>
                    <rect x="30" y="50" width="10" height="10" fill="black"/>
                    <rect x="50" y="50" width="10" height="10" fill="black"/>
                    <rect x="70" y="50" width="30" height="10" fill="black"/>
                    <rect x="130" y="50" width="10" height="10" fill="black"/>
                    <rect x="160" y="50" width="10" height="10" fill="black"/>
                    <rect x="180" y="50" width="10" height="10" fill="black"/>
                    <rect x="10" y="70" width="10" height="10" fill="black"/>
                    <rect x="30" y="70" width="10" height="10" fill="black"/>
                    <rect x="90" y="70" width="20" height="10" fill="black"/>
                    <rect x="130" y="70" width="20" height="10" fill="black"/>
                    <rect x="170" y="70" width="10" height="10" fill="black"/>
                    <rect x="10" y="90" width="10" height="10" fill="black"/>
                    <rect x="30" y="90" width="10" height="10" fill="black"/>
                    <rect x="50" y="90" width="20" height="10" fill="black"/>
                    <rect x="90" y="90" width="10" height="10" fill="black"/>
                    <rect x="130" y="90" width="10" height="10" fill="black"/>
                    <rect x="160" y="90" width="10" height="10" fill="black"/>
                    <rect x="180" y="90" width="10" height="10" fill="black"/>
                    <rect x="10" y="110" width="10" height="10" fill="black"/>
                    <rect x="30" y="110" width="10" height="10" fill="black"/>
                    <rect x="70" y="110" width="30" height="10" fill="black"/>
                    <rect x="130" y="110" width="30" height="10" fill="black"/>
                    <rect x="180" y="110" width="10" height="10" fill="black"/>
                    <rect x="10" y="130" width="10" height="10" fill="black"/>
                    <rect x="30" y="130" width="10" height="10" fill="black"/>
                    <rect x="50" y="130" width="50" height="10" fill="black"/>
                    <rect x="130" y="130" width="10" height="10" fill="black"/>
                    <rect x="160" y="130" width="10" height="10" fill="black"/>
                    <rect x="180" y="130" width="10" height="10" fill="black"/>
                    <rect x="10" y="160" width="30" height="30" fill="black"/>
                    <rect x="50" y="160" width="10" height="10" fill="black"/>
                    <rect x="90" y="160" width="20" height="10" fill="black"/>
                    <rect x="130" y="160" width="10" height="10" fill="black"/>
                    <rect x="160" y="160" width="30" height="30" fill="black"/>
                  </svg>
                  <p className={styles.qrText}>Scan QR Code or Enter Code Below</p>
                </div>
                
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Enter access code"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={styles.input}
                  />
                  <button 
                    onClick={handleVerifyCode}
                    className={styles.verifyButton}
                  >
                    Verify
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.detailsSection}>
                <h3 className={styles.detailsTitle}>{selectedInstructor.instructor}</h3>
                <p className={styles.detailsClassName}>{selectedInstructor.className}</p>
                
                <div className={styles.detailsList}>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Location:</span>
                    <span className={styles.value}>
                      {selectedInstructor.address}, {selectedInstructor.city}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Styles:</span>
                    <span className={styles.value}>{selectedInstructor.styles}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Schedule:</span>
                    <span className={styles.value}>{selectedInstructor.schedule}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Contact:</span>
                    <span className={styles.value}>{selectedInstructor.contact}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Rating:</span>
                    <span className={styles.value}>
                      {renderStars(selectedInstructor.rating)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default InstructorCarousel;