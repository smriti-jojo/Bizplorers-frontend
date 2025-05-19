import React from 'react'
import { useLocation } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
     const location = useLocation();
  const email = location.state?.email;
  const navigate=useNavigate();

  console.log("Email:", email);

  const handleSubmit=()=>{
navigate('/buyer');
  }

  return (
    <div>
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
