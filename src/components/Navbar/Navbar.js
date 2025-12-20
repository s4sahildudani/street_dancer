'use client';

import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

const SDNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    handleClose();
    router.push('/login');
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <MusicNoteIcon style={{fontSize:"1.3rem", marginTop:"0.25rem"}} />
            </div>
            <h1 className={styles.brand}>DanceStudio</h1>
          </div>
          <button className={styles.toggle} onClick={toggleMenu}>
            <MenuIcon fontSize="large" />
          </button>
          <div className={styles.menu}>
            <a href="#classes" className={styles.link}>CLASSES</a>
            <a href="#instructors" className={styles.link}>INSTRUCTORS</a>
            <a href="#pricing" className={styles.link}>PRICING</a>
            <a href="#testimonials" className={styles.link}>REVIEWS</a>
          </div>
          <div className={styles.actions}>
            {user ? (
              <Avatar 
                onClick={handleProfileClick}
                className={styles.avatar}
                sx={{ 
                  bgcolor: '#6366f1',
                  cursor: 'pointer',
                  width: 32,
                  height: 32,
                  '&:hover': { bgcolor: '#4f46e5' }
                }}
              >
                {user.name ? user.name[0].toUpperCase() : 'U'}
              </Avatar>
            ) : (
              <a href="/login" className={styles.loginLink}>Login</a>
            )}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  background: 'rgba(17, 24, 39, 0.98)',
                  color: '#fff',
                  mt: 1
                }
              }}
            >
              <MenuItem 
                onClick={handleLogout}
                sx={{ 
                  '&:hover': { 
                    background: 'rgba(255, 255, 255, 0.1)' 
                  }
                }}
              >
                Logout
              </MenuItem>
            </Menu>
            <button className={styles.getStarted}>
              Get Started
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={toggleMenu}>
            <CloseIcon fontSize="large" />
          </button>
          <div className={styles.mobileMenuContent}>
            <a href="#classes" className={styles.mobileLink} onClick={toggleMenu}>CLASSES</a>
            <a href="#instructors" className={styles.mobileLink} onClick={toggleMenu}>INSTRUCTORS</a>
            <a href="#pricing" className={styles.mobileLink} onClick={toggleMenu}>PRICING</a>
            <a href="#testimonials" className={styles.mobileLink} onClick={toggleMenu}>REVIEWS</a>
            {user ? (
              <button className={styles.mobileGetStarted} onClick={() => { handleLogout(); toggleMenu(); }}>
                Logout
              </button>
            ) : (
              <a href="/login" className={styles.mobileLink} >Login</a>
            )}
            <button className={styles.mobileGetStarted} onClick={toggleMenu}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SDNavbar;
