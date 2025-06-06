import React, { useEffect, useState } from "react";
import Stepper from "../../component/Stepper";
import StepOne from "../../component/Multistep_Form/StepOne";
import StepTwo from "../../component/Multistep_Form/StepTwo";
import StepThree from "../../component/Multistep_Form/StepThree";
import SignUpStep from "../../component/Multistep_Form/SignupStep";
import SignUp from "../Signup";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import OTPVerification from "../OTPVerification";

const RegisterBuyer = ({ type }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [stepsList, setStepsList] = useState([]);
  const [formData, setFormData] = useState({
    typeOfBuyer: "",
    designation: "",
    description: "",
    linkedinProfile: "",
    businessCategories: [],
    ticketSizeMin: "",
    ticketSizeMax: "",
    businesslocationCountry: "",
    businesslocationCities: [],
    openToPreRevenue: "",
    openToPreBreakeven: "",
    revenueSizeMin: "",
    revenueSizeMax: "",
    metric: "",
    maxMultiple: "",
    preferredArrangement: [],
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, multiple, selectedOptions, value } = e.target;
    const actualValue = multiple
      ? Array.from(selectedOptions).map((option) => option.value)
      : value;

    setFormData((prev) => ({ ...prev, [name]: actualValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // or your login route
  };
  const validateStep = () => {
    const newErrors = {};
    if (type === "modal") {
      if (step === 3) {
        if (!formData.typeOfBuyer.trim())
          newErrors.typeOfBuyer = "Type Of Buyer is required";
        if (!formData.designation.trim())
          newErrors.designation = "Designation is required";
        if (!formData.description.trim())
          newErrors.description = "Description is required";
        // if (!formData.linkedinProfile.trim()) newErrors.linkedinProfile = 'Linkedin profile is required';
        const linkedinRegex =
          /^https:\/\/(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9_-]+\/?$/;

        if (!formData.linkedinProfile.trim()) {
          newErrors.linkedinProfile = "Linkedin profile is required";
        } else if (!linkedinRegex.test(formData.linkedinProfile.trim())) {
          newErrors.linkedinProfile =
            "Enter a valid LinkedIn URL (e.g. https://linkedin.com/in/username)";
        }
      }

      if (step === 4) {
        if (!formData.businessCategories.length)
          newErrors.businessCategories = "Business Category is required";
        if (!formData.ticketSizeMin.trim())
          newErrors.ticketSizeMin = "Minimum Ticket Size is required";
        if (!formData.ticketSizeMax.trim())
          newErrors.ticketSizeMax = "Maximum Ticket Size is required";
        if (!formData.businesslocationCountry.trim())
          newErrors.businesslocationCountry = "Business Location is required";
        if (!formData.businesslocationCities.length)
          newErrors.businesslocationCities = "At least one City is required";
        if (!formData.openToPreRevenue.trim())
          newErrors.openToPreRevenue = "Please select an option";
        // if (!formData.openToPreBreakeven.trim())
        //   newErrors.openToPreBreakeven = "Please select an option";
        // if (!formData.revenueSizeMin.trim())
        //   newErrors.revenueSizeMin = "Minimum Revenue is required";
        // if (!formData.revenueSizeMax.trim())
        //   newErrors.revenueSizeMax = "Maximum Revenue is required";
        if (formData.revenueSizeMin === "") formData.revenueSizeMin = null;
if (formData.revenueSizeMax === "") formData.revenueSizeMax = null;
if (formData.openToPreBreakeven === "") formData.openToPreBreakeven = null;
      }

      if (step === 5) {
        if (!formData.metric.trim()) newErrors.metric = "Metric is required";
        if (!formData.maxMultiple.trim())
          newErrors.maxMultiple = "Max Multiple is required";
        if (!formData.preferredArrangement.length)
          newErrors.preferredArrangement = "Preferred Arrangement is required";
      }
    } else {
      if (step === 1) {
        if (!formData.typeOfBuyer.trim())
          newErrors.typeOfBuyer = "Type Of Buyer is required";
        if (!formData.designation.trim())
          newErrors.designation = "Designation is required";
        if (!formData.description.trim())
          newErrors.description = "Description is required";
        // if (!formData.linkedinProfile.trim()) newErrors.linkedinProfile = 'Linkedin profile is required';
        const linkedinRegex =
          /^https:\/\/(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9_-]+\/?$/;

        if (!formData.linkedinProfile.trim()) {
          newErrors.linkedinProfile = "Linkedin profile is required";
        } else if (!linkedinRegex.test(formData.linkedinProfile.trim())) {
          newErrors.linkedinProfile =
            "Enter a valid LinkedIn URL (e.g. https://linkedin.com/in/username)";
        }
      }

      if (step === 2) {
        if (!formData.businessCategories.length)
          newErrors.businessCategories = "Business Category is required";
        if (!formData.ticketSizeMin.trim())
          newErrors.ticketSizeMin = "Minimum Ticket Size is required";
        if (!formData.ticketSizeMax.trim())
          newErrors.ticketSizeMax = "Maximum Ticket Size is required";
        if (!formData.businesslocationCountry.trim())
          newErrors.businesslocationCountry = "Business Location is required";
        if (!formData.businesslocationCities.length)
          newErrors.businesslocationCities = "At least one City is required";
        if (!formData.openToPreRevenue.trim())
          newErrors.openToPreRevenue = "Please select an option";
        // if (openToPreRevenue === "No" && !formData.openToPreBreakeven.trim())
        //   newErrors.openToPreBreakeven = "Please select an option";
        // if (openToPreRevenue === "No" && !formData.revenueSizeMin.trim())
        //   newErrors.revenueSizeMin = "Minimum Revenue is required";
        // if (openToPreRevenue === "No" && !formData.revenueSizeMax.trim())
        //   newErrors.revenueSizeMax = "Maximum Revenue is required";
        if (formData.revenueSizeMin === "") formData.revenueSizeMin = null;
if (formData.revenueSizeMax === "") formData.revenueSizeMax = null;
if (formData.openToPreBreakeven === "") formData.openToPreBreakeven = null;
      }

      if (step === 3) {
        if (!formData.metric.trim()) newErrors.metric = "Metric is required";
        if (!formData.maxMultiple.trim())
          newErrors.maxMultiple = "Max Multiple is required";
        if (!formData.preferredArrangement.length)
          newErrors.preferredArrangement = "Preferred Arrangement is required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    if (!validateStep()) return;
    const user = JSON.parse(localStorage.getItem("user"));
    const id = user?.id;

    console.log("id----", id);
    const dataToSend =
      type === "modal" ? { ...formData, brokerId: id } : { ...formData };

    try {
      console.log("data------formdata ", dataToSend);
      const response = await fetch(
        "https://bizplorers-backend.onrender.com/api/buyer/add_detail",
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
      // {
      //   type === "modal"
      //     ? alert("Buyer Created Successfully!")
      //     : alert("Data submitted successfully!");
      //   navigate("/buyer/dashboard");
      // }
       if (type === "modal") {
  alert("Buyer Created Successfully!");
  
  // don't navigate
} else {
  alert("Data submitted successfully!");
  navigate("/buyer/dashboard");
}
      console.log("buyerData----", data);
      //  navigate('/buyer/dashboard');
    } catch (error) {
      console.error(error);
      alert("Submission failed.");
    }
  };

  useEffect(() => {
    if (type === "modal") {
      setStepsList([
        "PERSONAL DETAILS",
        "OTP VERIFICATION",
        "BASIC DETAILS",
        "PREFERENCE DETAILS",
        "TRANSACTION DETAILS",
      ]);
    } else {
      setStepsList([
        "BASIC DETAILS",
        "PREFERENCE DETAILS",
        "TRANSACTION DETAILS",
      ]);
    }
  }, [type]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {type !== "modal" && (
        // <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-[5%] py-3 bg-white shadow-md z-10">
        //   <img alt='logo' width={50} className="object-contain" />
        //   <nav className="hidden md:flex gap-8 text-sm font-medium">
        //     <Link to="/homepage" className="hover:text-blue-600 text-xl">About Us</Link>
        //     <Link to="/dashboard" className="hover:text-blue-600 text-xl">Services</Link>
        //     <Link to="/ask-ai" className="hover:text-blue-600 text-xl">Seller</Link>
        //     <Link to="/homepage" className="hover:text-blue-600 text-xl">Buyer</Link>
        //     <Link to="/homepage" className="hover:text-blue-600 text-xl">How It Work?</Link>
        //   </nav>
        //   <div className="hidden md:flex gap-2">
        //     <button className="text-blue-600 hover:text-slate-400 text-sm md:text-lg font-semibold">Log In</button>
        //     <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">Post A Business</button>
        //   </div>
        //   <button className="md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
        //     {menuOpen ? <X size={24} /> : <Menu size={24} />}
        //   </button>
        //   {menuOpen && (
        //     <div className="absolute top-full right-4 mt-2 bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 md:hidden z-20">
        //       <button className="text-blue-600 hover:text-slate-400 text-sm font-semibold">Log In</button>
        //       <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm hover:bg-blue-700">Post A Business</button>
        //     </div>
        //   )}
        // </header>
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
            {/* <Link to="/login" className="text-xl hover:text-blue-600">
                                       Log In
                                     </Link> */}
            <Link to="/signUp" className="text-xl hover:text-blue-600">
              Register
            </Link>
            {/* <Link to="/homepage" className="text-xl hover:text-blue-600">How It Works?</Link> */}
          </nav>
          <div className="hidden md:flex gap-2">
            {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogin}> */}
            {/* <button
              className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700"
              
            >
              Log Out
            </button> */}
            {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" >
                                               Signup
                                             </button> */}

            <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">
              Post A Business
            </button>
          </div>
          {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
          {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
        </header>
      )}

      <div
        className={`flex justify-center max-h-screen ${
          type === "modal" ? "pt-0" : "pt-[7%]"
        }`}
      >
        <div
          className={`bg-white px-2 py-2 rounded shadow-md  h-full  ${
            type === "modal" ? "w-full" : "w-[90%]"
          }`}
        >
          <Stepper step={step} steps={stepsList} />
          {type === "modal" ? (
            <>
              {step === 1 && <SignUp type={"modal"} />}
              {step === 2 && <OTPVerification type={"modal"} />}
              {step === 3 && (
                <StepOne
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
              {step === 4 && (
                <StepTwo
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
              {step === 5 && (
                <StepThree
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
            </>
          ) : (
            <>
              {step === 1 && (
                <StepOne
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                  type={"modal"}
                />
              )}
              {step === 2 && (
                <StepTwo
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
              {step === 3 && (
                <StepThree
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
            </>
          )}

          {type === "modal" ? (
            <>
              <div className="flex gap-5 mt-6">
                {step > 1 && (
                  <button
                    onClick={() => setStep((prev) => prev - 1)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Back
                  </button>
                )}
                {step < 5 && (
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Next
                  </button>
                )}
                {step === 5 && (
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Submit
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-5 mt-6">
                {step > 1 && (
                  <button
                    onClick={() => setStep((prev) => prev - 1)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Back
                  </button>
                )}
                {step < 3 && (
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Submit
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterBuyer;
