import React from 'react';
import { Box, Container } from '@mui/material';
import styles from './Stats.module.css';

const Stats = () => {
  const stats = [
    { label: 'CLASSES', value: '100+' },
    { label: 'INSTRUCTORS', value: '25+' },
    { label: 'MEMBERS', value: '15K' },
    { label: 'RATING', value: '4.9' },
  ];

  return (
    <Box component="section" className={styles.statsSection}>
      <Container>
        <div className={styles.statsRow}>
          {stats.map((stat, index) => (
            <div className={styles.statItem} key={index}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default Stats;
