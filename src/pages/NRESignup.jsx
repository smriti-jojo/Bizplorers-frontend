// FRONTEND: src/pages/NRERegister.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import instance from "../instance";
import Header from "../component/Header";
import Footer from "../component/Footer";

const NRESignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    passportNumber: "",
    password: "",
    confirmPassword: "",
    role: "nre",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateField = (field, value) => {
    let newErrors = { ...errors };
    switch (field) {
      case "name":
        newErrors.name = value.trim() ? "" : "Name is required";
        break;
      case "email":
        newErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email";
        break;
      case "phone":
        newErrors.phone = /^\d{10}$/.test(value)
          ? ""
          : "Enter a valid 10-digit number";
        break;
      case "country":
        newErrors.country = value.trim() ? "" : "Country is required";
        break;
      case "passportNumber":
        newErrors.passportNumber = value.trim() ? "" : "Passport number required";
        break;
      case "password":
        newErrors.password = value ? "" : "Password is required";
        break;
      case "confirmPassword":
        newErrors.confirmPassword =
          value === formData.password ? "" : "Passwords do not match";
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      Object.values(errors).every((err) => !err) &&
      Object.values(formData).every((field) => field)
    ) {
      try {
         const response = await fetch(
          "https://bizplorers-backend.onrender.com/api/auth/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        
        const data = await response.json();
        if (response.ok) {
        toast.success("Registration successful!");
        navigate("/otp", {
          state: { email: formData.email, role: formData.role },
        });
      }
      } catch (err) {
        toast.error(err.response?.data?.error || "Registration failed");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fix the form errors first.");
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center pt-20 pb-10 bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            NRE Registration
          </h2>

          {[
            { label: "Name", name: "name" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone" },
            { label: "Country", name: "country" },
            { label: "Passport Number", name: "passportNumber" },
            { label: "Password", name: "password", type: "password" },
            {
              label: "Confirm Password",
              name: "confirmPassword",
              type: "password",
            },
          ].map(({ label, name, type = "text" }) => (
            <div key={name} className="mb-3">
              <input
                type={type}
                name={name}
                value={formData[name]}
                placeholder={label}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors[name] && (
                <p className="text-sm text-red-500">{errors[name]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            {loading ? "Registering..." : "Register as NRE"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default NRESignup;