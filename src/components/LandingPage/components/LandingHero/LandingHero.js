
import React from 'react';
import styles from './LandingHero.module.css';
import { Button, Stack } from '@mui/material';

const SDHero = () => {
  return (
    <section className={styles.hero}>
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrEf8Q9gPLw3Ry5rqrplwAU2HSymjvW_uc6uG0Jz2JANZ9TZ3HfgDckgLv-Hyyc_0U-D2dwmjFX3JZtnKCv0lz791W31-z3dvrdNNwtU7p6AoRyOx3aMW1z3VbIVdDzHjKJkqYCx7Q8fNHhh2naUxeYj79MrywshftxQk494IZV_f8VzmGzuyhHcyfcJrRQqTmozcTSF_VKYM4b1d2yJR7vgJPmb6CUnTVxXkcwQx1ejyNeNOxtIcEALMQR0uLopyzkK-bBoOAuik7"
        className={styles.backgroundImg}
        alt="Dancer background"
      />
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <div className={styles.dot}></div>
          <span className="small fw-bold text-uppercase text-white letter-spacing-2">Live Classes Now</span>
        </div>
        
        <h3 className={styles.title}>
          Move to the <br/>
          <span className={styles.outlineText}>Rhythm</span> of <br/>
          Your Beat
        </h3>
        
        <p className={styles.description}>
          Unlock your potential with unlimited access to 100+ dance classes. 
          Start your journey with world-class instructors today.
        </p>
        
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" style={{display:"flex",alignItems:"center"}}>
          <Button variant="contained" className={styles.primaryBtn}>
            Start Free Trial
          </Button>
          <Button variant="outlined" className={styles.secondaryBtn} startIcon={<span className="material-symbols-outlined"></span>}>
            Watch New Reel
          </Button>
        </Stack>
      </div>
    </section>
  );
};

export default SDHero;
