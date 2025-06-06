import  React from 'react'
import { useLocation } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const OTPVerification = ({type}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const[otp,setOtp]=useState('');
  const[email,setEmail]=useState('');
  const[role,setRole]=useState('');
     const location = useLocation();

useEffect(() => {
    if (type === 'modal') {
      const userString = localStorage.getItem("registered user by broker");
      if (userString) {
        try {
          const user = JSON.parse(userString);
          setEmail(user.email || '');
          setRole(user.role || '');
        } catch {
          setEmail('');
          setRole('');
        }
      }
    } else {
      setEmail(location.state?.email || '');
      setRole(location.state?.role || '');
    }
  }, [type, location.state]);
  const navigate=useNavigate();

  console.log("Email:", email);
    console.log("Role:", role);

  const handleSubmit1=()=>{
navigate(`/${role}`);
  }

 const handleChange = (e) => {
  setOtp(e.target.value);
};

  const notifySuccess = (msg = "Email verified successfully") => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

   const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response = await fetch("https://bizplorers-backend.onrender.com/api/auth/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
  email: email,
  otp: otp,
})

         
        });
      
       const data = await response.json();
       console.log("data----token----",data);
        if (response.ok){
           console.log("data----token----",data);
           if (data.token) {
            const user=JSON.stringify(data.user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', user);
    }
          //  notifySuccess();
          // navigate('/otp', { state: { email: formData.email, role: formData.role } });}
          //  const user=localStorage.getItem('user');
          if(type==='modal'){
            // alert("otp verified successfully");
            notifySuccess();
          }
          else {
             notifySuccess();
             
             const storedUser = JSON.parse(localStorage.getItem('user')); // ✅ Convert string to object
console.log("userrole",storedUser .role);
if (storedUser.role === "buyer") {
  navigate(`/buyer_step`);
} else if (storedUser.role === "seller") {
  navigate(`/seller_step`);
} else {
  navigate(`/${storedUser.role}`); // use user.role here
}


            
            }
         
        }
        else alert(JSON.stringify(data.message) || "Error in Otp Verification");
         } catch (error) {
        alert("Network error, please try again");
      
    } 
  };

  return (
    <div>
      {type==='modal'?<><div className='w-full  flex justify-center '>
        <div className='border-2 border-slate-300 rounded-md shadow-md shadow-slate-400 w-[40%] py-[2%]'>
            <h1 className='text-2xl flex justify-center font-bold'>Complete Your Registration</h1>
           <h2 className='flex justify-center py-2'>Enter the Verification Code send to</h2>
            <div className='flex flex-col items-center gap-5 w-full'>
                
            <p className='font-bold text-slate-600'>{email}</p>
             {/* <TextField placeholder='Enter OTP' size='small' className='!w-[90%]' onChange={handleChange} /> */}
             <TextField
  placeholder='Enter OTP'
  size='small'
  className='!w-[90%]'
  value={otp}
  onChange={handleChange}
/>
             <Button className="!w-[90%]" variant='contained' onClick={handleSubmit}>Submit</Button>
             <h1>Already have an account?<span className='text-blue-600 ml-1'>Log In</span></h1>
            </div>
           
           
        </div>
      </div></>:<>
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
              <Link to="/login" className="text-xl hover:text-blue-600">
                Log In
              </Link>
              <Link to="/signUp" className="text-xl hover:text-blue-600">
                Register
              </Link>
              {/* <Link to="/homepage" className="text-xl hover:text-blue-600">How It Works?</Link> */}
            </nav>
            <div className="hidden md:flex gap-2">
              {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogin}> */}
              {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" >
                            Log In
                          </button>
                           <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" >
                            Signup
                          </button> */}

              <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">
                Post A Business
              </button>
            </div>
            {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
            {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
          </header>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='border-2 border-slate-300 rounded-md shadow-md shadow-slate-400 w-[40%] py-[2%]'>
            <h1 className='text-2xl flex justify-center font-bold'>Complete Your Registration</h1>
           <h2 className='flex justify-center py-2'>Enter the Verification Code send to</h2>
            <div className='flex flex-col items-center gap-5 w-full'>
                
            <p className='font-bold text-slate-600'>{email}</p>
             {/* <TextField placeholder='Enter OTP' size='small' className='!w-[90%]' onChange={handleChange} /> */}
             <TextField
  placeholder='Enter OTP'
  size='small'
  className='!w-[90%]'
  value={otp}
  onChange={handleChange}
/>
             <Button className="!w-[90%]" variant='contained' onClick={handleSubmit}>Submit</Button>
             <h1>Already have an account?<span className='text-blue-600 ml-1'>Log In</span></h1>
            </div>
           
           
        </div>
      </div>
      </>}
    </div>
  )
}

export default OTPVerification
