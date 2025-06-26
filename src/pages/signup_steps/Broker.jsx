import React, { useState } from "react";
import Stepper from "../../component/Stepper";
import StepOne from "../../component/Multistep_Broker/StepOne";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer";
import { Menu, X } from "lucide-react";
import Header from "../../component/Header";
import { toast } from "react-toastify";

const countryStateCityMap = {
  India: {
    Delhi: ["New Delhi", "Dwarka", "Rohini"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  },
  USA: {
    NewYork: ["New York City", "Buffalo", "Rochester"],
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Illinois: ["Chicago", "Springfield", "Naperville"],
  },
  Germany: {
    Berlin: ["Mitte", "Kreuzberg", "Prenzlauer Berg"],
    Bavaria: ["Munich", "Nuremberg", "Augsburg"],
    Hesse: ["Frankfurt", "Wiesbaden", "Kassel"],
  },
};

const Broker = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
   
    address: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  // const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // const handleChange = (e) => {
  //   console.log("value",e.target.value);
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //    setErrors((prev) => ({ ...prev, [e.target.name]: '' })); // clear error on change
  // };
  //   const handleChange = (e) => {
  //   const { name, value, type, selectedOptions } = e.target;

  //   const actualValue = type=="multiple"
  //     ? Array.from(selectedOptions).map((option) => option.value)
  //     : value;

  //   setFormData({ ...formData, [name]: actualValue });
  //   setErrors((prev) => ({ ...prev, [name]: '' })); // clear error on change
  // };
  // const handleChange = (e) => {
  //   const { name, value, multiple, selectedOptions } = e.target;
  //   console.log("valueee--",e.target.value);

  //   const actualValue = multiple
  //     ? Array.from(selectedOptions).map((option) => option.value)
  //     : value;

  //   setFormData((prev) => ({ ...prev, [name]: actualValue }));
  //   setErrors((prev) => ({ ...prev, [name]: '' }));
  // };

  const handleChange = (e) => {
    const { name, multiple, selectedOptions, value } = e.target;

    const actualValue = multiple
      ? Array.from(selectedOptions).map((option) => option.value)
      : value;

    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: actualValue,
    // }));
    setFormData((prev) => {
      const newFormData = { ...prev, [name]: actualValue };
      console.log("Updated formData:", newFormData); // Log here inside setState callback
      return newFormData;
    });

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep = () => {
    const newErrors = {};

    // if (!formData.firstName.trim()) {
    //   newErrors.firstName = "First Name is required";
    // }
    // if (!formData.lastName.trim()) {
    //   newErrors.lastName = "LastName is required";
    // }
    // if (!formData.mobileNumber.trim()) {
    //   newErrors.mobileNumber = "Mobile Number is required";
    // }
    if (!formData.address.trim()) {
      newErrors.address = " Address is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.zipcode.trim()) {
      newErrors.zipcode = "Zipcode is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
   const notifyLogOut = (msg = "Logged out successfully!") => {
            toast.success(msg, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
          };

          const notifySuccess=(msg = "Data Submitted successfully!") => {
            toast.success(msg, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
          };
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    notifyLogOut();
    window.location.href = "/login"; // or your login route
  };
  const handleSubmit1 = () => {
    alert("data submitted successfully");
    navigate("/broker/dashboard");
  };

  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    if (!validateStep()) return;

    const dataToSend =
       { ...formData ,dataFilled:true};
    try {
      console.log("data------formdata ", dataToSend);
      const response = await fetch(
        "https://bizplorers-backend.onrender.com/api/broker/add_detail",
        {
          method: "POST",
          body: JSON.stringify(dataToSend),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Something went wrong!");
      console.log("formdata", formData);
      const data = await response.json();
      notifySuccess();
      console.log("brokerData----", data);
      navigate("/broker/dashboard");
    } catch (error) {
      console.error(error);
      alert("Submission failed.");
    }
  };

  const stepsList = ["BROKER DETAILS"];
  return (
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
         
          <Link to="/signUp" className="text-xl hover:text-blue-600">
            Register
          </Link>
         
        </nav>
        <div className="hidden md:flex gap-2">
         
          <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">
            Log Out
          </button>
         
        </div>
      
      </header> */}
      <Header/>
      <div className="flex justify-center py-[7%] min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-[90%]">
          {/* <h2 className="text-2xl font-bold mb-2 text-center">Multi Step Form</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          React Tailwind UI multi step form with basic validation.
        </p> */}
          <Stepper step={step} steps={stepsList} />

          {step === 1 && (
            <StepOne
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          )}
          {/* {step === 2 && <StepTwo formData={formData} handleChange={handleChange}  errors={errors} />} */}
          {/* {step === 3 && <Confirmation formData={formData} />} */}
          {/* {step === 3 && <StepThree formData={formData} handleChange={handleChange}  errors={errors} />} */}

          <div className="flex gap-5 mt-6">
            {/* {step > 1 && (
            <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">
              Back
            </button>
          )}
          {step < 3 && (
            <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded">
              Next
            </button>
          )} */}
            {step == 1 && (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Broker;
