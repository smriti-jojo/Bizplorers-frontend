import  React from 'react'
import { useLocation } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { useState } from 'react';

const OTPVerification = () => {
  const [menuOpen, setMenuOpen] = useState(false);
     const location = useLocation();
  const email = location.state?.email;
  const role=location.state?.role;
  const navigate=useNavigate();

  console.log("Email:", email);
    console.log("Role:", role);

  const handleSubmit=()=>{
navigate(`/${role}`);
  }

  return (
    <div>
         <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-[5%] py-3 bg-white shadow-md z-10">
        <img alt='logo' width={50} className="object-contain" />
         <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/homepage" className="hover:text-blue-600 text-xl">
            About Us
          </Link>
          <Link to="/dashboard" className="hover:text-blue-600 text-xl">
           Services
          </Link>
          <Link to="/ask-ai" className="hover:text-blue-600 text-xl">
            Seller
          </Link>
           <Link to="/homepage" className="hover:text-blue-600 text-xl">
            Buyer
          </Link>
           <Link to="/homepage" className="hover:text-blue-600 text-xl">
            How It Work?
          </Link>
        </nav>
        <div className="hidden md:flex gap-2">
          <button className="text-blue-600 hover:text-slate-400 text-sm md:text-lg font-semibold">Log In</button>
          <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">Post A Business</button>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 md:hidden z-20">
            <button className="text-blue-600 hover:text-slate-400 text-sm font-semibold">Log In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm hover:bg-blue-700">Post A Business</button>
          </div>
        )}
      </header>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='border-2 border-slate-300 rounded-md shadow-md shadow-slate-400 w-[40%] py-[2%]'>
            <h1 className='text-2xl flex justify-center font-bold'>Complete Your Registration</h1>
           <h2 className='flex justify-center py-2'>Enter the Verification Code send to</h2>
            <div className='flex flex-col items-center gap-5 w-full'>
                
            <p className='font-bold text-slate-600'>{email}</p>
             <TextField placeholder='Enter OTP' size='small' className='!w-[90%]'/>
             <Button className="!w-[90%]" variant='contained' onClick={handleSubmit}>Submit</Button>
             <h1>Already have an account?<span className='text-blue-600 ml-1'>Log In</span></h1>
            </div>
           
           
        </div>
      </div>
    </div>
  )
}

export default OTPVerification
