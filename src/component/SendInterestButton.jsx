import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SendInterestButton = ({ senderId, receiverId, type }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      // const response = await fetch('/api/interests/send', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ senderId, receiverId, type })
      // });
// console.log("data------formdata ", dataToSend);
      const response = await fetch(
        "https://bizplorers-backend.onrender.com/api/interests/send",
        {
          method: "POST",
          body: JSON.stringify({ senderId, receiverId, type }),
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.success(`${type === 'buyer' ? 'Invite' : 'Interest'} sent successfully!`);
      } else {
        toast.error(data.error || 'Error sending interest');
      }
    } catch (err) {
      toast.error('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-blue-700"
    >
      {loading ? 'Sending...' : type === 'buyer' ? 'Send Invite' : 'Send Interest'}
    </button>
  );
};

export default SendInterestButton;
