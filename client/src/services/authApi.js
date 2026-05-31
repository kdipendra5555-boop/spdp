// src/services/authApi.js
import axios from "axios";

const API = "https://spdp.onrender.com/api/auth";

export const sendOtp = (email) =>
  axios.post(`${API}/send-otp`, { email });

export const verifyOtp = (email, otp) =>
  axios.post(`${API}/verify-otp`, { email, otp });