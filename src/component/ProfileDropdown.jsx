import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut, Bell } from "lucide-react"; // optional icons
import avatar from '../assests/pic.jpg';
import { useNavigate } from "react-router-dom";
import  {showSuccess,showError ,showInfo,showWarning} from '../component/utils/toast';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);
const navigate=useNavigate();
  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    alert("Logged out!");
    // Add your actual logout logic here
  };
  const token=localStorage.getItem("token");
const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;

console.log(user);

// const handleDashboard=()=>{
//   if(user.role==='admin')
//   {
//      navigate(`/${user.role}`)
//   }
//   else{
//      navigate(`/${user.role}/dashboard`)
//   }
   
// }
// const handleDashboard = () => {
//   if (!token) {
//     navigate("/login");
//   } else if (!user?.dataFilled) {
//     if(user.role==='buyer'){
//       navigate('/buyer_step');
//     }
//     else if(user.role==='seller'){
// navigate('/seller_step');
//     }
//     else{
//       navigate('/broker');
//     }
    
//   } else {
//     if (user.role === "admin") {
//       navigate("/admin");
//     } else {
//       navigate(`/${user.role}/dashboard`);
//     }
//   }
// };

// const handleDashboard = () => {
//   if (!token) {
//     navigate("/login");
//   } else if (!user?.dataFilled) {
//     if (user?.role === "buyer") {
//       showWarning("Complete Your Registeration");
//       navigate("/buyer_step");
//     } else if (user?.role === "seller") {
//     showWarning("Complete Your Registeration");
//       navigate("/seller_step");
//     } else if (user?.role === "broker") {
//        showWarning("Complete Your Registeration");
//       navigate("/broker");
//     } else {
//       console.warn("Unknown role or incomplete registration.");
//       navigate("/login"); // fallback or error page
//     }
//   } else {
//     if (user?.role === "admin"){
//       navigate("/admin");
//     } else if (!user?.role==="admin" && user?.dataFilled){
//       navigate(`/${user.role}/dashboard`);
//     } else {
//       console.warn("User role is missing.");
//       navigate("/login"); // fallback or error page
//     }
//   }
// };
const handleDashboard = () => {
  if (!token) {
    navigate("/login");
    return;
  }

  if (user?.role === "admin") {
    navigate("/admin");
    return;
  }

  if (!user?.dataFilled) {
    if (user?.role === "buyer") {
      showWarning("Complete Your Registration");
      navigate("/buyer_step");
    } else if (user?.role === "seller") {
      showWarning("Complete Your Registration");
      navigate("/seller_step");
    } else if (user?.role === "broker") {
      showWarning("Complete Your Registration");
      navigate("/broker");
    } else {
      console.warn("Unknown role or incomplete registration.");
      navigate("/login"); // fallback or error page
    }
    return;
  }

  // Final fallback if everything is okay
  if (user?.role) {
    navigate(`/${user.role}/dashboard`);
  } else {
    console.warn("User role is missing.");
    navigate("/login");
  }
};



  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Profile Button */}
      <button onClick={toggleDropdown} className="focus:outline-none">
        <img
          src={avatar} // replace with your profile image path
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-yellow-500"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-xl shadow-xl z-50">
          {/* Header */}
          <div className="flex items-center p-4 border-b">
            <img
              src={avatar}
              alt="profile"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold text-sm">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Dashboard */}
          <div className="p-3">
            <button className="w-full bg-blue-500 hover:bg-blue-600 hover:text-white text-sm font-bold py-2 rounded" onClick={handleDashboard}>
              My Dashboard
            </button>
          </div>

          {/* Menu Items */}
      

          {/* Logout */}
          {/* <div className="border-t p-3">
            <button
              onClick={logout}
              className="w-full text-left text-red-600 hover:text-red-800 font-medium"
            >
               Logout
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
}
