'use client';

import React, { useState } from "react";
import styles from "./Signup.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import { addUser, signupUser, verifyUser } from '../../app/NodeApi/NodeApi';
import VerifyEmail from '../VerifyEmail/VerifyEmail';
import { useRouter } from 'next/navigation';
import { TextField, InputAdornment, IconButton, Checkbox, FormControlLabel, Button } from "@mui/material";
const AuthPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Set confirmPassword to password since we removed the field
      formData.confirmPassword = formData.password;

      if (!formData.agreeToTerms) {
        throw new Error('Please agree to the Terms and Conditions');
      }

      if (!formData.phone.match(/^\d{10}$/)) {
        throw new Error('Please enter a valid 10-digit phone number');
      }

      const addResponse = await addUser(formData);
      if (addResponse) {
        const otpResponse = await signupUser(formData);
        if (otpResponse) {
          setShowVerification(true);
        }
      }
    } catch (error) {
      setError(error.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async (otp) => {
    try {
      const response = await verifyUser(formData.email, otp);
      if (response) {
        // Assume success, redirect to login
        router.push('/login');
      }
    } catch (error) {
      setError(error.message || 'Verification failed');
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  
  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAxq3XXgyilmuvbdDl8H2xRprJTp6CpT7UA0aeVHNutGC6X5DsrtoUabXBk4FYtxQd115cXaKjDgcaSllZ3r8D6Arkb08x1Uu6vVfWr7zUEThGIw2zqh_CLjKkAfXAdLZVfsPcyaKQMCDBpgqLdZf_0lEhrJAUWO9VRetPW_fmbc32QE-SnGoRm2RNKkOmZ76-pJqNkQxCGuscVB0s9cLHLNqoRdtLNKe1lqvU-MLb-Cw0MNXfUPx9jVKgIuh00fe0eCJnlNGzqGCKT",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAp5QbDjbOP712QOB9pbxJd-WAitguTf94-pg2ZgklVA6xERLqEtAlglRZ6U3trq8RmIf-FNgRmyitAY9OaBvVboQWCU1OLnn0vuyTvfNkrWAbl3xnOdPNY4GTn76JCk5lHTqZYT58VUI5tQ_NsD8VGOrkJP-5xXsZndTZUEtAFZpx74dRg3RNcCnu5Krr2I7GvXGIx2lBVsGyvF9JAwxqU98wR633i0rLbWHz2hTb22EgyOL7LJQ8rWc_76ZB_kVYv71nckLCSoESw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDxMaE2s54a0838j9IAIp7Z-11f3b3YYPXElkbNdPd9y_c-xmOKc4MJHro1qFDyBc-rP9Z7yK2VFs6ImjsEk1nFu6zzoqmsG6Ska-vm9TmZCBF3M0o0XvRogx5CH77O8YIuftqLuUnvLBSPPh6XyYTs-O-aLSqrAtKT4VNFoidtwaEB3zCD_2wFnljiSG-kVvmU25PBspWWNpoV7nQ37bi7JrZs26CjCHtEZeU3YlK9Rnoxv0NkjXUVYibeHWIrJirCiW8dVX4FnN_f",
  ];

  return (
    <>
    <Navbar />
    <div className={styles.wrapper}>
        {/* LEFT – FORM */}
        <div className={styles.formSection}>
          <div className={styles.formWrapper}>
            <h2 style={{textAlign:"center"}}>Create Account</h2>
            <p style={{textAlign:"center"}}>Start your 14-day free trial today.</p>

            {error && (
              <div className={styles.error}>
                {error}
              </div>
            )}

            {!showVerification && (
            <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#111',
                color: 'white',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: '#222',
                },
                '&:hover fieldset': {
                  borderColor: '#fff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#aaa',
              },
            }}
          />

          <TextField
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#111',
                color: 'white',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: '#222',
                },
                '&:hover fieldset': {
                  borderColor: '#fff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#aaa',
              },
            }}
          />

          <TextField
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#111',
                color: 'white',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: '#222',
                },
                '&:hover fieldset': {
                  borderColor: '#fff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#aaa',
              },
            }}
          />

          {/* Password */}
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: '#aaa' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#111',
                color: 'white',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: '#222',
                },
                '&:hover fieldset': {
                  borderColor: '#fff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#aaa',
              },
            }}
          />

          {/* Confirm Password */}
          <TextField
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmPassword: e.target.value,
              })
            }
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    edge="end"
                    sx={{ color: '#aaa' }}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#111',
                color: 'white',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: '#222',
                },
                '&:hover fieldset': {
                  borderColor: '#fff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#aaa',
              },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                sx={{
                  color: '#999',
                  '&.Mui-checked': {
                    color: '#fff',
                  },
                }}
              />
            }
            label={
              <span style={{ color: '#999', fontSize: '14px' }}>
                I agree to the <a href="#" style={{ color: '#fff' }}>Terms and Conditions</a>
              </span>
            }
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isLoading}
            sx={{
              marginTop: '20px',
              width: '100%',
              height: '52px',
              borderRadius: '14px',
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 700,
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>

          <p className={styles.loginLink}>
            Already a user? <a href="/login">Login</a>
          </p>
        </form>
          )}

          {showVerification && <VerifyEmail email={formData.email} onVerify={handleVerify} />}
          </div>
      </div>

      {/* RIGHT – HERO */}
      <div className={styles.heroSection}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h1>
            Feel the <span>Rhythm</span>
            <br /> Join the Movement.
          </h1>

          <p>
            Unlock unlimited access to world-class choreography and a global
            community.
          </p>

          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              {avatars.map((img, i) => (
                <img key={i} src={img} alt="avatar" />
              ))}
            </div>
            <div>
              <strong>10k+ Dancers</strong>
              <span>Joined this month</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    <Footer />
    </>
  );
};

export default AuthPage;
