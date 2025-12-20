import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import styles from './Footer.module.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      
      {/* CENTERED CONTENT WRAPPER */}
      <Container className={styles.innerContainer}>
        <Grid container spacing={18}>
          
          {/* Brand */}
          <Grid item xs={12} sm={12} md={3} lg={3} >
            <Box className={styles.brandSection}>
              <Box className={styles.logoWrapper}>
                <div className={styles.logoCircle}>
                  <MusicNoteIcon fontSize="small" />
                </div>
                <Typography className={styles.logoText}>
                  DANCESTUDIO
                </Typography>
              </Box>

              <Typography className={styles.description}>
                Elevating the art of movement. Our mission is to provide world-class
                dance education accessible to everyone, everywhere.
              </Typography>
            </Box>
          </Grid>

          {/* Explore */}
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography className={styles.colTitle}>EXPLORE</Typography>
            <ul className={styles.linkList}>
              <li><Link href="#" className={styles.footerLink}>All Classes</Link></li>
              <li><Link href="#" className={styles.footerLink}>Masterclasses</Link></li>
              <li><Link href="#" className={styles.footerLink}>Dance Styles</Link></li>
              <li><Link href="#" className={styles.footerLink}>Instructors</Link></li>
            </ul>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography className={styles.colTitle}>SUPPORT</Typography>
            <ul className={styles.linkList}>
              <li><Link href="#" className={styles.footerLink}>Membership</Link></li>
              <li><Link href="#" className={styles.footerLink}>Help Center</Link></li>
              <li><Link href="#" className={styles.footerLink}>Gift Cards</Link></li>
              <li><Link href="#" className={styles.footerLink}>Careers</Link></li>
            </ul>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography className={styles.colTitle}>NEWSLETTER</Typography>
            <div className={styles.subscribeBox}>
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className={styles.input}
              />
              <button className={styles.submitBtn}>
                <ArrowRightAltIcon />
              </button>
            </div>
          </Grid>

        </Grid>

        {/* Bottom bar */}
        <Box className={styles.bottomBar}>
          <Typography className={styles.copyright}>
            © 2024 DANCESTUDIO INC. ALL RIGHTS RESERVED.
          </Typography>

          <Box className={styles.legalLinks}>
            <Link href="#" className={styles.legalLink}>PRIVACY POLICY</Link>
            <Link href="#" className={styles.legalLink}>TERMS OF SERVICE</Link>
            <Link href="#" className={styles.legalLink}>COOKIES</Link>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;
