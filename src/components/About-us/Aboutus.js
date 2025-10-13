// pages/about.js or components/AboutUs.js
import styles from './Aboutus.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
export default function AboutUs() {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from professional dancers with years of experience in various dance styles.",
      icon: "👨‍🏫"
    },
    {
      title: "Flexible Schedules",
      description: "Choose from morning, evening, and weekend classes to fit your busy lifestyle.",
      icon: "⏰"
    },
    {
      title: "All Skill Levels",
      description: "Whether you're a beginner or advanced dancer, we have classes for everyone.",
      icon: "🎯"
    },
    {
      title: "Performance Opportunities",
      description: "Showcase your skills at our regular recitals and community events.",
      icon: "🎭"
    }
  ];

  const danceStyles = [
    "Classical Dance",
    "Contemporary",
    "Hip Hop",
    "Bollywood",
    "Ballet",
    "Jazz",
    "Salsa",
    "Bharatanatyam"
  ];

  return (
    <>
    <Navbar />
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About Our Dance Studio</h1>
          <p className={styles.subtitle}>
            Where passion meets rhythm and dreams come to life through the art of dance
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <p className={styles.storyText}>
            Founded with a vision to make dance accessible to everyone, our studio has been a cornerstone 
            of the local dance community for over a decade. We believe that dance is not just an art form, 
            but a way of expressing emotions, building confidence, and creating lasting friendships.
          </p>
          <p className={styles.storyText}>
            Our journey began with a simple idea: to create a welcoming space where people of all ages 
            and backgrounds could discover the joy of movement. Today, we're proud to have taught 
            thousands of students and helped them find their unique dance voice.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionSection}>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              To inspire and nurture the dancer in everyone by providing high-quality dance education 
              in a supportive, creative environment that celebrates diversity and encourages personal growth.
            </p>
          </div>
          <div className={styles.missionCard}>
            <h3 className={styles.missionTitle}>Our Vision</h3>
            <p className={styles.missionText}>
              To be the leading dance studio that transforms lives through dance, building a community 
              where artistry, discipline, and joy come together to create unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Dance Styles */}
      <section className={styles.stylesSection}>
        <h2 className={styles.sectionTitle}>Dance Styles We Offer</h2>
        <div className={styles.stylesGrid}>
          {danceStyles.map((style, index) => (
            <div key={index} className={styles.styleTag}>
              {style}
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <div className={styles.valuesList}>
          <div className={styles.valueItem}>
            <strong>Excellence:</strong> We strive for the highest standards in dance education and performance.
          </div>
          <div className={styles.valueItem}>
            <strong>Inclusivity:</strong> We welcome dancers of all backgrounds, abilities, and experience levels.
          </div>
          <div className={styles.valueItem}>
            <strong>Creativity:</strong> We encourage artistic expression and innovative choreography.
          </div>
          <div className={styles.valueItem}>
            <strong>Community:</strong> We build lasting relationships and support each other's growth.
          </div>
          <div className={styles.valueItem}>
            <strong>Fun:</strong> We believe learning should be enjoyable and fulfilling.
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Start Your Dance Journey?</h2>
          <p className={styles.ctaText}>
            Join our vibrant dance community and discover the joy of movement. Contact us today to schedule 
            your first class or learn more about our programs.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className={styles.ctaButton}>Get In Touch</a>
            <a href="/classes" className={styles.ctaButtonSecondary}>View Classes</a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}