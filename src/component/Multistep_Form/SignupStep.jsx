import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StepOne from "./StepOne";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';


const RoleSelector = ({ selectedRole, handleRoleChange, error }) => {
  const roles = [
    { id: "buyer", label: "Buyer", icon: <AccountCircleIcon className="mr-1" /> },
    { id: "seller", label: "Seller", icon: <StorefrontIcon className="mr-1" /> },
    { id: "broker", label: "Broker", icon: <RealEstateAgentIcon className="mr-1" /> },
  ];

  return (
    <div className="flex mb-4 mt-4 bg-gray-200 rounded-lg overflow-hidden">
      {roles.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => handleRoleChange(id)}
          className={`w-1/3 py-2 text-center font-medium transition ${
            selectedRole === id
              ? "bg-blue-600 text-white hover:bg-blue-300"
              : "text-blue-500 bg-white"
          } ${id !== "broker" ? "border-r" : ""}`}
        >
          {icon} {label}
        </button>
      ))}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};


const SignUpStep = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
    });
  }, [formData]);

  const validateField = (field, value) => {
    const newErrors = { ...errors };
    switch (field) {
      case "name":
        newErrors.name = value.trim() ? "" : "Name is required";
        break;
      case "email":
        newErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email";
        break;
      case "phone":
        newErrors.phone = /^[0-9]{10}$/.test(value) ? "" : "Enter valid 10-digit number";
        break;
      case "password":
        newErrors.password = value ? "" : "Password is required";
        break;
      case "confirmPassword":
        newErrors.confirmPassword = value === formData.password ? "" : "Passwords do not match";
        break;
      case "role":
        newErrors.role = value ? "" : "Please select a role";
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allValid = Object.values(errors).every((e) => !e) &&
                     Object.values(formData).every((v) => v !== "");
    if (allValid) {
      console.log("Form submitted:", formData);
      navigate("/otp", { state: { email: formData.email, role: formData.role } });
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 mt-[5rem]">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <StepOne formData={formData} handleChange={handleChange} errors={errors} />
        <RoleSelector
          selectedRole={formData.role}
          handleRoleChange={handleRoleChange}
          error={errors.role}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpStep;
