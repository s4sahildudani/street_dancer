'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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

  const menuItems = [
    { text: 'Events', href: '/events' },
    { text: 'About', href: '/about-us' },
    { text: 'Contact', href: '/contact-us' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', position: 'relative' }}>
      <IconButton 
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          right: 20,
          top: 20,
          color: '#ffffff',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        <CloseIcon sx={{ fontSize: 30 }} />
      </IconButton>

      <Typography variant="h6" sx={{ my: 4, pt: 2 }}>
        <span className={styles.brand}>
          Step<span className={styles.brandAccent}>Dance</span>
        </span>
      </Typography>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} sx={{ justifyContent: 'center', py: 1 }}>
            <Link href={item.href} className={styles.mobileLink}>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  '& .MuiTypography-root': { 
                    fontSize: '1.3rem',
                    fontWeight: 500
                  }
                }} 
              />
            </Link>
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: 'center', py: 2 }}>
          {user ? (
            <button onClick={handleLogout} className={styles.mobileCta}>
              Logout
            </button>
          ) : (
            <Link href="/login" className={styles.mobileCta}>
              Login
            </Link>
          )}
        </ListItem>
      </List>
    </Box>
  );

  if (!mounted) {
    return null;
  }

  return (
    <AppBar 
      position="fixed" 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      elevation={isScrolled ? 4 : 0}
      sx={{padding:"0rem !important"}}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Typography variant="h6" component="div">
              <span className={styles.brand}>
                Step<span className={styles.brandAccent}>Dance</span>
              </span>
            </Typography>
          </Link>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Link key={item.text} href={item.href} className={styles.link}>
                {item.text}
              </Link>
            ))}
            {user ? (
              <>
                <Avatar 
                  onClick={handleProfileClick}
                  className={styles.avatar}
                  sx={{ 
                    bgcolor: '#6366f1',
                    cursor: 'pointer',
                    '&:hover': { bgcolor: '#4f46e5' }
                  }}
                >
                  {user.name ? user.name[0].toUpperCase() : 'U'}
                </Avatar>
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
              </>
            ) : (
              <Link href="/login" className={styles.loginBtn}>
                Login
              </Link>
            )}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon sx={{ color: '#e5e7eb' }} />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            width: '100%',
            background: 'rgba(17, 24, 39, 0.98)',
            backdropFilter: 'blur(10px)',
            padding: '1rem'
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};


export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
  loading: () => (
    <AppBar 
      position="fixed" 
      sx={{
        background: 'rgba(17, 24, 39, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        padding: '1rem',
        zIndex: 1000,
      }}
      elevation={0}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ 
            fontSize: '2rem',
            fontWeight: 800,
            background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '1px'
          }}>
            Step<Box component="span" sx={{
              background: 'linear-gradient(45deg, #ec4899, #f43f5e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Dance</Box>
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            <Box sx={{ color: '#e5e7eb', opacity: 0.7 }}>Loading...</Box>
          </Box>
          
          <IconButton sx={{ display: { md: 'none' } }}>
            <MenuIcon sx={{ color: '#e5e7eb' }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
});