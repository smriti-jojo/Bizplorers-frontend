import React, { useState } from 'react';
import axios from 'axios';

const RegisterModalForm = ({role}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: role
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const token = localStorage.getItem('token'); // Replace with your actual auth method

      const response = await axios.post('https://bizplorers-backend.onrender.com/api/broker/register-user', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      setMessage(response.data.message || 'User created successfully');
      setFormData({ name: '', email: '', phone: '', role: 'buyer' });
    } catch (error) {
      setMessage(error.response?.data?.error || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-xl border">
      <h2 className="text-xl font-semibold mb-4">Register Buyer/Seller</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />
        {/* <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select> */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {loading ? 'Registering...' : 'Register User'}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
};

export default RegisterModalForm;
