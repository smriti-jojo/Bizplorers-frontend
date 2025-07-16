import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import instance from "../instance";
import Footer from "../component/Footer";
import Header from "../component/Header";
import {
  showSuccess,
  showError,
  showInfo,
  showWarning,
} from "../component/utils/toast";

const SignUp = ({ type }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateField = (field, value) => {
    let newErrors = { ...errors };
    switch (field) {
      case "name":
        newErrors.name = value.trim() ? "" : "Name is required";
        break;
      // case "email":
      //   newErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      //     ? ""
      //     : "Invalid email";
      //   break;
      case "email":
        const emailPattern =
          /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
        const domain = value.split("@")[1] || "";
        const parts = domain.split(".");
        const isValid =
          emailPattern.test(value) &&
          !(
            parts.length >= 2 &&
            parts[parts.length - 1] === parts[parts.length - 2]
          );

        newErrors.email = isValid ? "" : "Invalid email";
        break;

      case "phone":
        newErrors.phone = /^[6-9]\d{9}$/.test(value)
          ? ""
          : "Enter a valid 10-digit phone number";
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

    console.log("Error:", newErrors.phone); // DEBUG
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handlePhoneChange = (value) => {
  //   const cleanedValue = value.replace(/^\+91/, "").slice(0, 10);
  //   setFormData((prev) => ({ ...prev, phone: cleanedValue }));
  //   validateField("phone", `+91${cleanedValue}`);
  // };

  // const handlePhoneChange = (value, data, event, formattedValue) => {
  //   // Ensure only digits after +91 are used
  //   const cleaned = value.replace(/\D/g, "").slice(-10); // take last 10 digits
  //   const fullPhone = `+91${cleaned}`;

  //   setFormData((prev) => ({ ...prev, phone: fullPhone }));

  //   // Validate
  //   if (/^\+91[6-9]\d{9}$/.test(fullPhone)) {
  //     setErrors((prev) => ({ ...prev, phone: "" }));
  //   } else {
  //     setErrors((prev) => ({
  //       ...prev,
  //       phone: "Enter a valid 10-digit Indian phone number",
  //     }));
  //   }
  // };

  // const handlePhoneChange = (value) => {
  //   setFormData((prev) => ({ ...prev, phone: value }));
  //    console.log("Phone Changed:", value); // DEBUG
  //   validateField("phone", value);
  // };
  // const handlePhoneChange = (value) => {
  //   const onlyNumber = value.replace("+91", "").replace(/\D/g, "");
  //   setFormData((prev) => ({ ...prev, phone: onlyNumber }));
  //   validateField("phone", onlyNumber);
  // };
  // const handlePhoneChange = (value) => {

  //   if (value.length <= 10) {
  //     setFormData((prev) => ({ ...prev, phone: value }));
  //     console.log("Phone Changed:", value); // DEBUG
  //     validateField("phone", value);
  //   }
  // };
  const handlePhoneChange = (e) => {
    const rawValue = e.target.value;
    const numericValue = rawValue.replace(/\D/g, ""); // Remove non-numeric characters

    if (numericValue.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: numericValue }));
      console.log("Phone Changed:", numericValue); // DEBUG
      validateField("phone", numericValue);
    }
  };

  const notifySuccess = (msg = "Registered successfully!") => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const notifyOTP = (
    msg = "Verification OTP sent to your registered email!"
  ) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };
  const handleLogin = () => {
    if (type === "modal") {
    } else {
      navigate("/login");
    }
  };

  // useEffect(() => {
  //   localStorage.setItem(
  //     'registered user by broker',
  //     JSON.stringify({
  //       email: formData.email,
  //       role: formData.role,
  //     })
  //   );
  // }, [status]);

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
        // const data = await response.json();
        // if (response.ok) navigate('/otp', { state: { email: formData.email, role: formData.role } });
        // else alert(data.message || "Error signing up");
        // const response= await instance({
        //   url:`auth/register`,
        //     method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(formData),
        // });
        const data = await response.json();
        if (response.ok) {
          setLoading(false);
          notifySuccess();
          if (type === "modal") {
            localStorage.setItem(
              "registered user by broker",
              JSON.stringify({
                email: formData.email,
                role: formData.role,
              })
            );

            notifyOTP();
            // alert("Verification OTP sent to your registered email")
          } else {
            notifyOTP();
            navigate("/otp", {
              state: { email: formData.email, role: formData.role },
            });
          }
        } else {
          showError(data.error);
          setLoading(false);
        }
      } catch (error) {
        showError("Network error, please try again");
        setLoading(false);
      }
    } else {
      showError("Please fix the errors first.");
      setLoading(false);
    }
  };

  //    const notifySuccess = (msg = "Saved successfully!") => {
  //   toast.success(msg, {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     pauseOnHover: true,
  //     draggable: true,
  //     theme: "colored",
  //   });
  // };

  return (
    <>
      {type === "modal" ? (
        <>
          <div className="flex justify-center">
            <form
              // onSubmit={handleSubmit}
              onSubmit={handleSubmit}
              className="bg-slate-100 p-6 rounded-lg shadow-md w-full max-w-md"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <div className="flex flex-col space-y-1 mb-2">
                <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-black">
                  <span className="mr-2 text-gray-600 font-medium">+91</span>
                  <input
                    type="text"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full outline-none bg-transparent "
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}

              <div className="flex mb-4 my-3 bg-gray-200 rounded-lg overflow-hidden">
                {["buyer", "seller", "broker"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, role }))}
                    className={`w-1/3 py-2 text-center font-medium transition border-r ${
                      formData.role === role
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border-blue-500 text-blue-500 bg-white border-b-2"
                    }`}
                  >
                    {role === "buyer" && <AccountCircleIcon />}
                    {role === "seller" && <StorefrontIcon />}
                    {role === "broker" && <RealEstateAgentIcon />}
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </button>
                ))}
              </div>
              {/* <a href="/nre-register" className="text-blue-600 underline">
                NRE Registration?
              </a> */}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                {loading ? "Signing in..." : "Sign Up"}
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          {/* <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
           
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
              
            </nav>
           
          </header> */}
          <Header />

          <div className="flex justify-center items-center pt-[7%] pb-[3%] bg-gray-100 px-4">
            <form
              // onSubmit={handleSubmit}
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              {/* <PhoneInput
  country={"in"}
  disableDropdown={true}
  countryCodeEditable={false}
  disableCountryCode={false}
  placeholder="Enter 10-digit mobile number"
  value={formData.phone}
  onChange={handlePhoneChange}
  inputStyle={{ width: "100%" }}
  className="w-full mb-2 border rounded"
/> */}

              <div className="flex flex-col space-y-1 mb-2">
                <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-black">
                  <span className="mr-2 text-gray-600 font-medium">+91</span>
                  <input
                    type="text"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full outline-none bg-transparent"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}

              <div className="flex mb-4 my-3 bg-gray-200 rounded-lg overflow-hidden">
                {["buyer", "seller", "broker"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, role }))}
                    className={`w-1/3 py-2 text-center font-medium transition border-r ${
                      formData.role === role
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border-blue-500 text-blue-500 bg-white border-b-2"
                    }`}
                  >
                    {role === "buyer" && <AccountCircleIcon />}
                    {role === "seller" && <StorefrontIcon />}
                    {role === "broker" && <RealEstateAgentIcon />}
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                {loading ? "Signing in..." : "Sign Up"}
              </button>
              <div className="flex justify-center py-2">
                Already a member?
                <a
                  href="/login"
                  className="text-teal-600 hover:text-teal-800 underline"
                >
                  Log in
                </a>
              </div>
            </form>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default SignUp;
