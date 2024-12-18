import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './OtpVerification.css'; // Create this CSS file for styling

const OtpVerification = ({ email }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = parseInt(otp.join(""), 10);

    try {
      const response = await axios.post('https://localhost:7030/Otp', {
        email, // Include the email
        otp: otpValue, // Match the backend parameter name
      });
      setMessage(response.data.message || "OTP verified successfully!");
      
      // Redirect to Login.js on successful verification
      navigate('/login'); // Replace '/login' with the actual route for Login.js
    } catch (error) {
      setError("Error verifying OTP. Please try again.");
      console.error("Error verifying OTP", error);
    }
  };

  return (
    <div className="otp-verification">
      <div className="otp-header">
        <img src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5280.jpg?semt=ais_hybrid" alt="Email Sent" className="icon" />
        <h2>Please check your email</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsMgRch2kZYG4uQQYn3sfIJvMaiWFbaO5XUFlFw7VadG-MMZzWnAEjd7NUG9Hok1eSx8&usqp=CAU" alt="gmail" className="gicon" />
        <p>We've sent a code to <strong>{email}</strong></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`otp-${index}`}
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="otp-box"
            />
          ))}
        </div>
        <p className="resend-text">
          Didn't get the code? <span className="resend-link">Click to resend.</span>
        </p>
        <div className="otp-actions">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="verify-btn">Verify</button>
        </div>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default OtpVerification;
