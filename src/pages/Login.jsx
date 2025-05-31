import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

 const navigate=useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!form.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setLoading(true);
//     try {
//       const response = await axios.post(`https://bizplorers-backend.onrender.com/api/auth/login`, form);

//       const token = response.data.access_token;
//       document.cookie = `token=${token}; expires=${new Date(
//         Date.now() + 7 * 24 * 60 * 60 * 1000
//       ).toUTCString()}; path=/`;

//       localStorage.setItem("user", JSON.stringify(response.data));
//       localStorage.setItem("token", token);

//       notifySuccess();

//       // Redirect logic or further action here
//       // e.g., navigate("/dashboard");
//     } catch (error) {
//       notifyError(error);
//       console.error("Login failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

   const notifySuccess = (msg = "Login successful!") => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//    const onSubmit  = async (e) => {
//        e.preventDefault();
//     try {
//       const response = await fetch('https://bizplorers-backend.onrender.com/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       });

//       if (!response.ok) throw new Error('Failed to Login');

//       const data = await response.json();
//       alert(data);
      
//     } catch (error) {
//       console.error(error);
//       alert('Login failed.');
//     }
//   };

const onSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);
  try {
    const response = await fetch(
      "https://bizplorers-backend.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // << send form data here
      }
    );

    if (!response.ok) {
      // You can parse error message from backend if available
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to login");
    }

    const data = await response.json();

 

    // Save token and user data as needed
    document.cookie = `token=${data.token}; path=/`;
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  // setTimeout(() => {
  //   console.log("Triggering success notification...");
       notifySuccess();
  navigate(`/${data.user.role}/dashboard`);
// }, 1000);

   
  } catch (error) {
    console.error(error);
    alert("Login failed: " + error.message);
  } finally {
    setLoading(false);
  }
};

const handleSignup=()=>{
  navigate('/');
}
  return (
    <div className="min-h-screen bg-slate-100 ">
        <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-[5%] py-3 bg-white shadow-md z-10">
        <img alt='logo' width={50} className="object-contain" />
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/homepage" className="hover:text-blue-600 text-xl">About Us</Link>
          <Link to="/dashboard" className="hover:text-blue-600 text-xl">Services</Link>
          <Link to="/ask-ai" className="hover:text-blue-600 text-xl">Seller</Link>
          <Link to="/homepage" className="hover:text-blue-600 text-xl">Buyer</Link>
          <Link to="/homepage" className="hover:text-blue-600 text-xl">How It Works?</Link>
        </nav>
        <div className="hidden md:flex gap-2">
       <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleSignup}>Sign Up</button>
          <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">Post A Business</button>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 md:hidden z-20">
            <button className="text-blue-600 hover:text-slate-400 text-sm font-semibold">Sign Up</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm hover:bg-blue-700">Post A Business</button>
          </div>
        )}
      </header>

    <div className="flex  justify-center items-center min-h-screen ">
    <div className=" bg-gray-100 w-[400px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">
          Welcome Back!
        </h2>

        <form onSubmit={onSubmit} className="space-y-3">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <Mail className="w-5 h-5" />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full pl-10 py-2 border rounded-full bg-slate-100"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <Lock className="w-5 h-5" />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 py-2 border bg-slate-100 rounded-full"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <p className="text-[12px] text-black font-bold flex justify-end cursor-pointer">
              Forgot Password?
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;
