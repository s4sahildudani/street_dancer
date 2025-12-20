import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import styles from './Cta.module.css';

const CTA = () => {
  return (
    <Box component="section" className={styles.section}>
      <Container maxWidth="md" className={styles.container}>
        <div className={styles.cornerTL}></div>
        <div className={styles.cornerBR}></div>
        <Typography variant="h2" className={styles.title}>
          READY TO <br/><span className={styles.outline}>MOVE?</span>
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          Join thousands of dancers worldwide and start your transformation today.
        </Typography>
        <Button variant="contained" className={styles.ctaBtn}>
          START YOUR FREE TRIAL
        </Button>
      </Container>
    </Box>
  );
};

export default CTA;