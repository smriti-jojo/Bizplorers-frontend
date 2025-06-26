import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: email, 2: OTP + new password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('https://bizplorers-backend.onrender.com/api/auth/send-reset-otp', { email });
      setMessage(res.data.message);
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Error sending OTP');
    }
    setLoading(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('https://bizplorers-backend.onrender.com/api/auth/reset-password', {
        email,
        otp,
        newPassword,
      });
      setMessage(res.data.message);
      setStep(3); // Completed
    } catch (err) {
      setMessage(err.response?.data?.error || 'Error resetting password');
    }
    setLoading(false);
  };

  return (
    <>
    <Header/>
    <div className="max-w-md mx-auto my-[10%] bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>

      {step === 1 && (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleResetPassword} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full px-4 py-2 border rounded-md"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-2 border rounded-md"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      )}

      {step === 3 && (
        <div className="text-center text-green-600 font-semibold mt-4">
          🎉 Password has been reset successfully! You can now login.
        </div>
      )}

      {/* {message && (
        <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
      )} */}
    </div>
    <div className=''>
      <Footer/>
    </div>
    </>
  );
};

export default ForgotPassword;
