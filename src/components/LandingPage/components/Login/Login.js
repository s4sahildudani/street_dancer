'use client'
import React, { useState } from 'react'
import styles from './Login.module.css'
import Image from 'next/image'
import { checkUser, registerUser } from '@/app/NodeApi/NodeApi'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    name: '',
    confirmPassword: ''
  })
  console.log('formData',formData);
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isLogin) {
        const response = await checkUser(formData);
        if (response.success) {
          const userData = {
            ...response.user,
            name: response.user.name || formData.email.split('@')[0]
          };
          localStorage.setItem('user', JSON.stringify(userData));
          router.push('/home');
        }
      } else {
        if (!formData.phone.match(/^\d{10}$/)) {
          throw new Error('Please enter a valid 10-digit phone number');
        }

        // Send registration data with password as confirmPassword
        const registrationData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        };

        const response = await registerUser(registrationData);
        
        if (response.success) {
          setError('Registration successful! Please login.');
          setIsLogin(true);
          // Clear form data
          setFormData({
            email: '',
            password: '',
            phone: '',
            name: '',
            confirmPassword: ''
          });
        }
      }
    } catch (error) {
      setError(error.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }

  // Add success message styles
  const messageStyle = {
    color: error.includes('successful') ? '#4CAF50' : '#ff4444',
    marginBottom: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    padding: '0.5rem',
    borderRadius: '4px',
    background: error.includes('successful') ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 68, 68, 0.1)',
    border: error.includes('successful') ? '1px solid rgba(76, 175, 80, 0.2)' : '1px solid rgba(255, 68, 68, 0.2)'
  }

  // Update error message component
  const errorMessage = (
    <div className={styles.message} style={messageStyle}>
      {error}
    </div>
  )

  return (
    <div className={styles.pageContainer}>
      <div className={styles.authContainer}>
        <div className={styles.authContent}>
          <div className={styles.authHeader}>
            <h1 className={styles.authTitle}>
              {isLogin ? 'Welcome' : 'Join'} <span className={styles.accent}>Back</span>
              <br />
              to the <span className={styles.accent}>Beat</span>
            </h1>
            <p className={styles.authDescription}>
              {isLogin ? 'Continue your dance journey' : 'Start your dance adventure today'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.authForm}>
            {error && errorMessage}
            
            {!isLogin && (
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={styles.formInput}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {!isLogin && (
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className={styles.formInput}
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  required
                />
              </div>
            )}
            
            <div className={styles.formGroup}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={styles.formInput}
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {!isLogin && (
              <div className={styles.formGroup}>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={styles.formInput}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            <button 
              type="submit" 
              className={`${styles.authBtn} ${styles.primaryBtn} ${isLoading ? styles.loading : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Please wait...' : (isLogin ? 'Start Dancing' : 'Join the Dance')}
            </button>
          </form>

          <div className={styles.authToggle}>
            <p>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className={styles.toggleBtn}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>

        <div className={styles.authVisual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/dance-visual.jpg" // Make sure to add this image to your public folder
              alt="Dance Visual"
              width={500}
              height={500}
              className={styles.backgroundImage}
              priority
            />
            <div className={styles.overlay}></div>
            <div className={styles.floatingElements}>
              <div className={`${styles.musicNote} ${styles.note1}`}>♪</div>
              <div className={`${styles.musicNote} ${styles.note2}`}>♫</div>
              <div className={`${styles.musicNote} ${styles.note3}`}>♪</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage