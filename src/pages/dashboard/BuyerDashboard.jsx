import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Menu, X } from "lucide-react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link } from 'react-router-dom';
import Footer from '../../component/Footer';

// Reusable row component for input or display
const EditableRow = ({ label, icon, value, editable, onChange, textarea }) => (
  <div className='flex items-start gap-2 my-2'>
    <span className='font-semibold flex items-center'>{icon}{label}:</span>
    {editable ? (
      textarea ? (
        <textarea className='border p-2 rounded-md w-full' value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input className='border p-2 rounded-md w-full' value={value} onChange={(e) => onChange(e.target.value)} />
      )
    ) : (
      <span>{value}</span>
    )}
  </div>
);

const BuyerDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [buyerData, setBuyerData] = useState({
    typeOfBuyer: '',
    designation: '',
    description: '',
    linkedinProfile: '',
    businessCategories: [],
    ticketSizeMin: '',
    ticketSizeMax: '',
    businesslocationCountry: '',
    businesslocationCities: [],
    openToPreRevenue: '',
    openToPreBreakeven: '',
    revenueSizeMin: '',
    revenueSizeMax: '',
    metric: '',
    maxMultiple: '',
    preferredArrangement: []
  });

  const token = localStorage.getItem('token');

  const handleChange = (key, value) => {
    setBuyerData(prev => ({ ...prev, [key]: value }));
  };

  const handleArrayChange = (key, index, value) => {
    const newArray = [...buyerData[key]];
    newArray[index] = value;
    setBuyerData(prev => ({ ...prev, [key]: newArray }));
  };
const handleLogout = () => {
    localStorage.removeItem("token");
     localStorage.removeItem("user");
    window.location.href = "/login"; // or your login route
  };

  const fetchBuyerData = async () => {
    try {
      const response = await fetch('https://bizplorers-backend.onrender.com/api/buyer/getBuyer', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      alert('Data fetched successfully!');
      setBuyerData(data);
    } catch (error) {
      console.error(error);
      alert('Getting Data failed.');
    }
  };

  const updateData = async () => {
    try {
      const response = await fetch('https://bizplorers-backend.onrender.com/api/buyer/updateBuyer', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(buyerData),
      });

      if (!response.ok) throw new Error('Update failed');

      const updated = await response.json();
      alert('Details updated successfully!');
      console.log(updated);
    } catch (error) {
      console.error(error);
      alert('Update failed');
    }
  };

  const handleEditToggle = () => {
    if (isEditing) {
      updateData();
    }
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    fetchBuyerData();
  }, []);

//   const handleLogout=()=>{
//   localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   window.location.href = '/login'; // or your login route
// };

  
  return (
    <div>
      {/* <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-[5%] py-3 bg-white shadow-md z-10">
        <img alt='logo' width={50} className="object-contain" />
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/homepage" className="hover:text-blue-600 text-xl">About Us</Link>
          <Link to="/dashboard" className="hover:text-blue-600 text-xl">Services</Link>
          <Link to="/ask-ai" className="hover:text-blue-600 text-xl">Seller</Link>
          <Link to="/homepage" className="hover:text-blue-600 text-xl">Buyer</Link>
          <Link to="/homepage" className="hover:text-blue-600 text-xl">How It Works?</Link>
        </nav>
        <div className="hidden md:flex gap-2">
          {token? (<button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogout}>Log Out</button>
       ) :  (<button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">Log In</button>)}
          <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">Post A Business</button>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 md:hidden z-20">
            <button className="text-blue-600 hover:text-slate-400 text-sm font-semibold">Log In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm hover:bg-blue-700">Post A Business</button>
          </div>
        )}
      </header> */}
         <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
                           {/* <img alt="logo" width={50} className="object-contain"  onClick={() => navigate('/')}/> */}
                           <Link to="/">
                             <img
                               alt="logo"
                               width={50}
                               className="object-contain cursor-pointer"
                             />
                           </Link>
                           <nav className="hidden md:flex gap-8">
                             <Link to="/aboutUs" className="text-xl hover:text-blue-600">
                               About Us
                             </Link>
                             <Link to="/services" className="text-xl hover:text-blue-600">
                               Services
                             </Link>
                             <Link to="/seller" className="text-xl hover:text-blue-600">
                               Seller
                             </Link>
                             <Link to="/buyer" className="text-xl hover:text-blue-600">
                               Buyer
                             </Link>
                             {/* <Link to="/login" className="text-xl hover:text-blue-600">
                               Log In
                             </Link> */}
                             <Link to="/signUp" className="text-xl hover:text-blue-600">
                               Register
                             </Link>
                             {/* <Link to="/homepage" className="text-xl hover:text-blue-600">How It Works?</Link> */}
                           </nav>
                           <div className="hidden md:flex gap-2">
                             {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogin}> */}
                             <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogout}>
                                       Log Out
                                     </button>
                                      {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" >
                                       Signup
                                     </button> */}
                 
                             <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">
                               Post A Business
                             </button>
                           </div>
                           {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
                           {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
                         </header>
             

      {/* <div className='flex justify-center pb-10'>
        <div className='flex flex-col border-2 border-slate-500 rounded-md mt-[7%] px-[5%] w-[80%]'> */}
        {/**Added Margin */}
         <div className='flex justify-center items-center'>
  <div className='flex flex-col border-2 border-slate-500 rounded-md mt-[7%] px-6 w-full m-4  max-w-screen-md'>
          <div className='flex justify-between w-full mt-[2%]'>
            <div className='text-2xl font-bold'>BUYER DETAILS</div>
            <Button variant='contained' onClick={handleEditToggle}>
              {isEditing ? 'Save' : 'Edit Details'}
            </Button>
          </div>

          {/* Personal Details */}
          <div className='flex flex-col text-black my-[2%]'>
            <h1 className='text-xl font-bold'>Personal Details</h1>
            <EditableRow label="Type Of Buyer" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.typeOfBuyer} editable={isEditing} onChange={val => handleChange('typeOfBuyer', val)} />
            <EditableRow label="Designation" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.designation} editable={isEditing} onChange={val => handleChange('designation', val)} />
            <EditableRow label="Description" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.description} editable={isEditing} onChange={val => handleChange('description', val)} textarea />
            <EditableRow label="LinkedIn" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.linkedinProfile} editable={isEditing} onChange={val => handleChange('linkedinProfile', val)} />
          </div>

          {/* Preferences Details */}
          <div className='flex flex-col text-black my-[2%]'>
            <h1 className='text-xl font-bold'>Preferences Details</h1>

            {/* Business Categories */}
            <div className='flex gap-3 flex-wrap'>
              <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Business Categories:</h1>
              {buyerData.businessCategories.map((cat, i) =>
                isEditing ? (
                  <input key={i} className="border px-2 py-1 rounded-md" value={cat} onChange={e => handleArrayChange('businessCategories', i, e.target.value)} />
                ) : (
                  <p key={i} className='mr-2'>{cat},</p>
                )
              )}
            </div>

            <EditableRow label="Ticket Size (min)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.ticketSizeMin} editable={isEditing} onChange={val => handleChange('ticketSizeMin', val)} />
            <EditableRow label="Ticket Size (max)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.ticketSizeMax} editable={isEditing} onChange={val => handleChange('ticketSizeMax', val)} />
            <EditableRow label="Country" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.businesslocationCountry} editable={isEditing} onChange={val => handleChange('businesslocationCountry', val)} />

            {/* Cities */}
            <div className='flex gap-3 flex-wrap'>
              <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Cities:</h1>
              {buyerData.businesslocationCities.map((ct, i) =>
                isEditing ? (
                  <input key={i} className="border px-2 py-1 rounded-md" value={ct} onChange={e => handleArrayChange('businesslocationCities', i, e.target.value)} />
                ) : (
                  <p key={i} className='mr-2'>{ct},</p>
                )
              )}
            </div>

            <EditableRow label="Open to Pre-Revenue" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.openToPreRevenue ? "Yes" : "No"} editable={isEditing} onChange={val => handleChange('openToPreRevenue', val === 'Yes')} />
            <EditableRow label="Open to Pre-Breakeven" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.openToPreBreakeven ? "Yes" : "No"} editable={isEditing} onChange={val => handleChange('openToPreBreakeven', val === 'Yes')} />
            <EditableRow label="Revenue Min" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.revenueSizeMin} editable={isEditing} onChange={val => handleChange('revenueSizeMin', val)} />
            <EditableRow label="Revenue Max" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.revenueSizeMax} editable={isEditing} onChange={val => handleChange('revenueSizeMax', val)} />
            <EditableRow label="Metric" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.metric} editable={isEditing} onChange={val => handleChange('metric', val)} />
            <EditableRow label="Max Multiple" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.maxMultiple} editable={isEditing} onChange={val => handleChange('maxMultiple', val)} />

            {/* Preferred Arrangement */}
            <div className='flex gap-3 flex-wrap'>
              <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Preferred Arrangement:</h1>
              {buyerData.preferredArrangement.map((arr, i) =>
                isEditing ? (
                  <input key={i} className="border px-2 py-1 rounded-md" value={arr} onChange={e => handleArrayChange('preferredArrangement', i, e.target.value)} />
                ) : (
                  <p key={i} className='mr-2'>{arr},</p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BuyerDashboard;
