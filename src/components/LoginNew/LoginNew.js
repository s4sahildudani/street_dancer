'use client';

import React, { useState } from 'react';
import styles from './LoginNew.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { loginUser } from '../../app/NodeApi/NodeApi';
import { useRouter } from 'next/navigation';
const AuthLayout = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const imageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuByPMiqO-TCIETkg0Up7LssZkzUCZCW-0gsGJU0D0-j8KCBaI9h4upSDtgMnKD2AU0zRCj7dBZ8Me_7FyAkCjy0IsmPinBzIv0mjNnk3FEbWJV9wPidfuHme5nq4XyIDuKTp5INuy6mG4L1oFuhX3GBA64FKEC-n8F039P66ABi1LCGU8IXKuXBMJL6sHpUIrDWGBpbcSLHBvIrnJV0uiLqxuzKRKpaj56qWMA3JHQE_eqUIzIt2UVav08vborZJRyK40DiDsaKIDfE';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await loginUser({ email, password });
      if (response.user) {
        const userData = {
          ...response.user,
          name: response.user.name || response.user.username || email.split('@')[0]
        };
        localStorage.setItem('user', JSON.stringify(userData));
        router.push('/home');
      }
    } catch (error) {
      setError(error.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <main className={styles.wrapper}>
      {/* LEFT – LOGIN */}
      <div className={styles.left}>
        <div className={styles.formWrapper}>
          <h1 className={styles.heading}>Welcome Back</h1>
          <p className={styles.subText}>
            Log in to access your classes and continue your journey on the dance floor.
          </p>

          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Email */}
            <div className={styles.field}>
              <label>Email or Username</label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className={styles.field}>
              <label>Password</label>
              <div className={styles.passwordBox}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className={styles.options}>
              <label className={styles.remember}>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            {/* Submit */}
            <button className={styles.loginBtn} type="submit" disabled={isLoading}>
              {isLoading ? 'Logging In...' : 'Log In'}
            </button>

            <p className={styles.signup}>
              New to DanceStudio?
              <a href="/sign-up"> Create an Account</a>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT – FEATURED */}
      <div className={styles.right}>
        <div
          className={styles.featured}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className={styles.overlay}></div>

          <div className={styles.featuredContent}>
            <span className={styles.badge}>Premium Classes</span>
            <h3>
              Elevate your rhythm with world-class instructors.
            </h3>
            <p>📍 Global Online Studio</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default AuthLayout;
