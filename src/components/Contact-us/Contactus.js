// pages/contact.js or components/ContactUs.js
'use client';
import styles from './Contactus.module.css';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    danceStyle: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      danceStyle: ''
    });
  };

  return (
    <>
      <Navbar />
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>Get in touch with us for dance classes, performances, or any queries</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <div className={styles.contactItem}>
            <div className={styles.icon}>📞</div>
            <div>
              <h3>Phone</h3>
              <p>7066885712</p>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <div className={styles.icon}>✉️</div>
            <div>
              <h3>Email</h3>
              <p>s4sahil.dudani@gmail.com</p>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <div className={styles.icon}>📍</div>
            <div>
              <h3>Studio Location</h3>
              <p>Visit us for in-person dance classes</p>
            </div>
          </div>

          <div className={styles.socialMedia}>
            <h3>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>Facebook</a>
              <a href="#" className={styles.socialLink}>YouTube</a>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Send us a Message</h2>
            
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <select
                name="danceStyle"
                value={formData.danceStyle}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Select Dance Style (Optional)</option>
                <option value="classical">Classical Dance</option>
                <option value="contemporary">Contemporary</option>
                <option value="hip-hop">Hip Hop</option>
                <option value="bollywood">Bollywood</option>
                <option value="ballet">Ballet</option>
                <option value="jazz">Jazz</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
     </>
  );
}