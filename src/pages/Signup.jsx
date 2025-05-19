// import React, { useState } from "react";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     role: "buyer",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     const phoneRegex = /^[0-9]{10}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";

//     if (!formData.phone) newErrors.phone = "Phone number is required";
//     else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Invalid phone number";

//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Form submitted", formData);
//       // Submit logic here
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Buyer 1"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full mb-2 p-2 border rounded"
//         />
//         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-2 p-2 border rounded"
//         />
//         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//         <div className="flex mb-2">
//           <select className="border p-2 rounded-l bg-gray-100" disabled>
//             <option value="+91">+91</option>
//           </select>
//           <input
//             type="text"
//             name="phone"
//             placeholder="Mobile Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-2 border-t border-b border-r rounded-r"
//           />
//         </div>
//         {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full mb-2 p-2 border rounded"
//         />
//         {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           className="w-full mb-2 p-2 border rounded"
//         />
//         {errors.confirmPassword && (
//           <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//         )}

//         <div className="flex gap-4 mb-4">
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="buyer"
//               checked={formData.role === "buyer"}
//               onChange={handleChange}
//             />
//             <span className="ml-1">Buyer</span>
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="seller"
//               checked={formData.role === "seller"}
//               onChange={handleChange}
//             />
//             <span className="ml-1">Seller</span>
//           </label>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState, useEffect } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "", // no default role
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateField("name", formData.name);
  }, [formData.name]);

  useEffect(() => {
    validateField("email", formData.email);
  }, [formData.email]);

  useEffect(() => {
    validateField("phone", formData.phone);
  }, [formData.phone]);

  useEffect(() => {
    validateField("password", formData.password);
    validateField("confirmPassword", formData.confirmPassword);
  }, [formData.password, formData.confirmPassword]);

  useEffect(() => {
    validateField("role", formData.role);
  }, [formData.role]);

  const validateField = (field, value) => {
    const newErrors = { ...errors };
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
        newErrors.phone = /^[0-9]{10}$/.test(value)
          ? ""
          : "Enter valid 10-digit number";
        break;
      case "password":
        newErrors.password = value ? "" : "Password is required";
        break;
      case "confirmPassword":
        newErrors.confirmPassword =
          value === formData.password ? "" : "Passwords do not match";
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
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate('/buyer');
    const allFieldsValid = Object.values(errors).every((err) => err === "") &&
      Object.values(formData).every((field) => field);
    if (allFieldsValid) {
      console.log("Form submitted:", formData);
      //  navigate('/buyer');
      navigate('/otp', { state: { email: formData.email } });
    } else {
      alert("Please fix the errors first.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

 

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Buyer 1"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        {/* Phone */}
        <div className="flex mb-1">
          <span className="p-2 bg-gray-100 border border-r-0 rounded-l">+91</span>
          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-r"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password}</p>
        )}

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mb-2">{errors.confirmPassword}</p>
        )}
               {/* Role Tabs */}
        <div className="flex mb-4 my-3 bg-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => handleRoleChange("buyer")}
            className={`w-1/2 py-2 text-center font-medium transition ${
              formData.role === "buyer"
                // ? "bg-white text-blue-500"
                // : "text-gray-600 hover:bg-gray-300"
                 ? "bg-blue-600 text-white hover:bg-blue-300"
                : "border-blue-500 text-blue-500 bg-white border-b-2 "
            }`}
          >
           <AccountCircleIcon/> Buyer
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange("seller")}
            className={`w-1/2 py-2 text-center font-medium transition ${
              formData.role === "seller"
                // ? "text-gray-600 hover:bg-gray-300"
                  ? "bg-blue-600 text-white hover:bg-blue-300"
                : "border-blue-500 text-blue-500 bg-white border-b-2 "
            }`}
          >
           <StorefrontIcon/> Seller
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange("broker")}
            className={`w-1/2 py-2 text-center font-medium transition ${
              formData.role === "broker"
                // ? "bg-white text-blue-500"
                // : "text-gray-600 hover:bg-gray-300"
                 ? "bg-blue-600 text-white hover:bg-blue-300"
                : "border-blue-500 text-blue-500 bg-white border-b-2"
            }`}
          >
         <RealEstateAgentIcon/>   Broker
          </button>
        </div>
        {/* {errors.role && <p className="text-red-500 text-sm mb-2">{errors.role}</p>} */}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

