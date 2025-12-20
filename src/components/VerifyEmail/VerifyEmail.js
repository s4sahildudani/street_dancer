import React, { useState } from "react";
import styles from "./VerifyEmail.module.css";

const VerifyEmail = ({ email }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto focus next
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    if (otp.join("").length !== 6) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("OTP Verified (demo)");
    }, 1500);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Icon */}
        <div className={styles.iconWrapper}>
          <span className="material-symbols-outlined">mark_email_unread</span>
        </div>

        {/* Text */}
        <h1 className={styles.title}>Verify your email</h1>
        <p className={styles.subtitle}>
          We've sent a 6-digit code to{" "}
          <span>{email || "your email"}</span>. Enter it below to activate your account.
        </p>

        {/* OTP */}
        <div className={styles.otpContainer}>
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              className={styles.otpInput}
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>

        {/* Button */}
        <button
          className={`${styles.verifyBtn} ${
            otp.join("").length === 6 ? styles.active : ""
          }`}
          disabled={otp.join("").length !== 6 || loading}
          onClick={handleVerify}
        >
          {loading ? "Verifying..." : "Verify & Start Moving"}
        </button>

        {/* Footer */}
        <p className={styles.resend}>
          Didn’t receive the email?
          <span> Resend Code</span>
        </p>

        <p className={styles.changeEmail}>
          <span className="material-symbols-outlined">arrow_back</span>
          Change email address
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
