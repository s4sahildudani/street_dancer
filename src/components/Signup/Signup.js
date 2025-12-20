'use client';

import React, { useState } from "react";
import styles from "./Signup.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import { registerUser } from '../../app/NodeApi/NodeApi';
import { useRouter } from 'next/navigation';
import VerifyEmail from '../VerifyEmail/VerifyEmail';
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
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (!formData.agreeToTerms) {
        throw new Error('Please agree to the Terms and Conditions');
      }

      if (!formData.phone.match(/^\d{10}$/)) {
        throw new Error('Please enter a valid 10-digit phone number');
      }

      const registrationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };

      const response = await registerUser(registrationData);
      
      if (response.success) {
        setError('Registration successful! Please login with your credentials.');
        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          agreeToTerms: false,
        });
        // Redirect to login after a short delay
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      }
    } catch (error) {
      setError(error.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
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
          <h2 style={{textAlign:"center"}}>Create Account</h2>
          <p style={{textAlign:"center"}}>Start your 14-day free trial today.</p>

          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            style={{width:"95%"}}
          />

          <input
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
             style={{width:"95%"}}
          />

          <input
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
             style={{width:"95%"}}
          />

          {/* Password */}
          <div className={styles.passwordField}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
               style={{width:"90%"}}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className={styles.passwordField}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
               style={{width:"90%"}}
            />
            <span
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>

          <div className={styles.terms}>
            <input
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
            />
            <label>I agree to the <a href="#">Terms and Conditions</a></label>
          </div>

          <button className={styles.submitBtn} type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>

          <p className={styles.loginLink}>
            Already a user? <a href="/login">Login</a>
          </p>
        </form>
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
