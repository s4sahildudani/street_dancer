import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.section}>
            <Link href="/" className={styles.logo}>
              Step<span className={styles.accent}>Dance</span>
            </Link>
            <p className={styles.description}>
              Join us in the rhythm of movement and expression.
            </p>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.links}>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.title}>Contact Info</h3>
            <ul className={styles.contact}>
              <li>📧 info@stepdance.com</li>
              <li>📞 +1 234 567 8900</li>
              <li>📍 Mumbai, India</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} StepDance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;