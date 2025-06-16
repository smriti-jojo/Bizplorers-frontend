import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut, Bell } from "lucide-react"; // optional icons
import avatar from '../assests/pic.jpg';
import { useNavigate } from "react-router-dom";

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
const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;

console.log(user);

const handleDashboard=()=>{
    navigate(`/${user.role}/dashboard`)
}

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
