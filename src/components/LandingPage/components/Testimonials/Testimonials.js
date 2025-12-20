import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';

const Testimonials = () => {
  const reviews = [
    { name: 'Jessica M.', location: 'NYC', text: 'DanceStudio completely changed my routine. The instructors explain things so clearly that even as a beginner, I felt confident.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2q0MRwGYzRTAX4Xn3Oc9x-DtgeSn1dwBPRRiZZpqhOV94WRx2-hJV9-rqz4BBi12PzHYbR-HS4zrGSdwZAHIq3GfPkzmn3Z5g2WmdWxpXx_r_2ZxfbzhyqVleLePKo1IfHkq91rBcqcl4bFlrs4OjxDe4IUK4-pKzL_8Xr904_Kr1ejgUfLeKNfvEOhfksb8pPebR3Mk8bRMiCagOwOYCzaHZmrqvXjxZhHBDubEpgKsrvxhKA4SbXuMPDNS8mpYO8PoqYjHIhhoX' },
    { name: 'Alex R.', location: 'London', text: "The quality of the videos is unmatched. I love being able to cast to my TV and practice in my living room like I'm in the studio.", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfd76jT5Z6AYgNYp1ZLDBzWMuLcQd6azKfL9cjhT25uG__M_12R9ASSJy36dhcTXqPgRwrZVVfdtbxB4TX3V83786bR-AhzltchPC3oNqe7FOVG4joh_x9Z_XhYOoV_rH-C6UNRSHVMa1YLLzYN3uzXJJsgFgsiGvWUjHEzXDtvwK1nLFroukbi4Wt3zY6LOKUj3kCLSoD0r-v-htl9eQ4T9QlBnTvvRC-nOevEUhtzlO6boT1jxkQk2Ca9jXPEk_sv1nxOsODQ_Po' },
    { name: 'Maria S.', location: 'Madrid', text: 'Amazing platform! The dance classes are so engaging and the community support is incredible. Highly recommend to anyone passionate about dance.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2q0MRwGYzRTAX4Xn3Oc9x-DtgeSn1dwBPRRiZZpqhOV94WRx2-hJV9-rqz4BBi12PzHYbR-HS4zrGSdwZAHIq3GfPkzmn3Z5g2WmdWxpXx_r_2ZxfbzhyqVleLePKo1IfHkq91rBcqcl4bFlrs4OjxDe4IUK4-pKzL_8Xr904_Kr1ejgUfLeKNfvEOhfksb8pPebR3Mk8bRMiCagOwOYCzaHZmrqvXjxZhHBDubEpgKsrvxhKA4SbXuMPDNS8mpYO8PoqYjHIhhoX' }
  ];

  return (
    <Box component="section" sx={{ padding: '120px 0', background: '#0a0a0a' }} id="testimonials">
      <Container>
        <Typography variant="h3" sx={{ fontSize: '2.6rem', fontWeight: 900, textAlign: 'center', marginBottom: '70px', letterSpacing: '2px', color: '#fff' }}>COMMUNITY <Box component="span" sx={{ color: 'rgba(255,255,255,0.35)' }}>VOICES</Box></Typography>
        <Grid container spacing={4}>
          {reviews.map((rev, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <Box sx={{ background: 'linear-gradient(180deg, #111, #0c0c0c)', padding: '40px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', flexDirection: 'column', minHeight: '340px' }}>
                <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontStyle: 'italic' }}>"{rev.text}"</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <Avatar src={rev.img} sx={{ width: 48, height: 48, filter: 'grayscale(1)' }} />
                  <div>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>{rev.name}</Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{rev.location}</Typography>
                  </div>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;