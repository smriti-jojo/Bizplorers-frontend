import React, { useState } from "react";
import Stepper from "../../component/Stepper";
import StepOne from "../../component/Multistep_Seller/StepOne";
import StepTwo from "../../component/Multistep_Seller/StepTwo";
import StepThree from "../../component/Multistep_Seller/StepThree";
import Confirmation from "../../component/Multistep_Form/Confirmation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SignUp from "../Signup";
import OTPVerification from "../OTPVerification";
import { Link } from "react-router-dom";

const RegisterSeller = ({ type }) => {
  const [step, setStep] = useState(1);
  const [stepsList, setStepsList] = useState([]);
  const [formData, setFormData] = useState({
    company_name: "",
    website_url: "",
    CIN: "",
    company_linkedin: "",
    description_business: "",
    numcofounder: "",
    teamSize: "",
    numLocation: "",
    year: "",
    month: "",
    cofounder_linkedin: "",
    businessCategory: "",
    // businessLocation:'',
    entityStructure: "",
    country: "",
    state: "",
    city: "",
    //  status:'',
    //Step 2
    lastFinancialYear: "",
    prevFinancialYear: "",
    prePrevFinancialYear: "",
    trail12months: "",
    lastmonth: "",
    prevMonth: "",
    prePrevMonth: "",
    PATlastFinancialYear: "",
    PATprevFinancialYear: "",
    PATtrailing12months: "",
    PATlastmonth: "",
    PATprevMonth: "",
    PATprePrevMonth: "",
    EBITDA: "",
    OCFlastFinancialYear: "",
    assestDesc: "",
    equity: "",
    debt: "",
    OCFprevFinancialYear: "",
    OCFprePrevFinancialYear: "",
    //step 3
    salereason: "",
    askingPrice: "",
    preferredArrangement: [],
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, multiple, selectedOptions, value } = e.target;

  //   const actualValue =multiple
  //     ? Array.from(selectedOptions).map((option) => option.value)
  //     : value;

  //   setFormData((prev) => {
  //     const newFormData = { ...prev, [name]: actualValue };

  //     return newFormData;
  //   });

  //   setErrors((prev) => ({ ...prev, [name]: '' }));
  // };

  // const validateStep = () => {
  //   const newErrors = {};

  //   if (step === 1) {
  //     if (!formData.company_name.trim()) {
  //       newErrors.company_name = 'Company Name is required';
  //     }
  //     if (!formData.website_url.trim()) {
  //       newErrors.website_url = 'Website Url is required';
  //     }
  //       if (!formData.CIN.trim()) {
  //       newErrors.CIN= 'CIN is required';
  //     }
  //       if (!formData.company_linkedin.trim()) {
  //       newErrors.company_linkedin = 'Linkedin profile is required';
  //     }
  //      if (!formData.description_business.trim()) {
  //       newErrors.description_business = ' description_business is required';
  //     }
  //      if (!formData.numcofounder.trim()) {
  //       newErrors.numcofounder = 'numcofounder is required';
  //     }
  //      if (!formData.teamSize.trim()) {
  //       newErrors.teamSize = 'teamSize is required';
  //     }
  //      if (!formData.numLocation.trim()) {
  //       newErrors.numLocation = ' numLocation is required';
  //     }
  //      if (!formData.year.trim()) {
  //       newErrors.year = 'Year is required';
  //     }
  //      if (!formData.month.trim()) {
  //       newErrors.month = 'Month is required';
  //     }
  //      if (!formData.cofounder_linkedin.trim()) {
  //       newErrors.cofounder_linkedin = 'cofounder_linkedin is required';
  //     }
  //      if (!formData.country.trim()) {
  //       newErrors.country = 'Country is required';
  //     }
  //     //  if (!formData.businessCategory.trim()) {
  //     //   newErrors.businessCategory = 'Business Category is required';
  //     // }

  //      if (!formData.businessCategory || formData.businessCategory.length === 0){
  //       newErrors.businessCategory = 'Business Category is required';
  //     }

  //      if (!formData.entityStructure || formData.entityStructure.length === 0){
  //       newErrors.entityStructure = 'Entity Structure is required';
  //     }

  //      if (!formData.state.trim()){
  //       newErrors.state = 'State is required';
  //     }
  //      if (!formData.city|| formData.city.length === 0){
  //       newErrors.city = 'City is required';
  //     }

  //      if (!formData.status.trim()) {
  //       newErrors.status = 'status is required';
  //     }

  //   }
  //     if (step === 2) {
  //     // if (!formData.businessCategory || formData.businessCategory.length === 0){
  //     //   newErrors.businessCategory = 'Business Category is required';
  //     // }
  //     if (!formData.lastFinancialYear.trim()) {
  //       newErrors.lastFinancialYear = 'lastFinancialYear is required';
  //     }
  //       if (!formData.description.trim()) {
  //       newErrors.description= 'Description is required';
  //     }
  //       if (!formData.linkedIn.trim()) {
  //       newErrors.linkedIn = 'Linkedin profile is required';
  //     }
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleChange = (e) => {
    const { name, multiple, selectedOptions, value } = e.target;
    const actualValue = multiple
      ? Array.from(selectedOptions).map((option) => option.value)
      : value;

    setFormData((prev) => ({ ...prev, [name]: actualValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  //   const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData((prev) => ({ ...prev, [name]: value }));
  //   setErrors((prev) => ({ ...prev, [name]: '' }));
  // };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // or your login route
  };

  const validateStep = () => {
    const newErrors = {};

    if (type === "modal") {
      if (step === 3) {
        if (!formData.company_name.trim()) {
          console.log("company_name---------");
          newErrors.company_name = "Company Name is required";
        }
        if (!formData.website_url.trim()) {
          console.log("website url---------");
          newErrors.website_url = "Website URL is required";
        }
        // else if (!/^https?:\/\/.+/.test(formData.website_url)) {
        //   newErrors.website_url = 'Website URL must start with http:// or https://';
        // }
        if (!formData.CIN.trim()) {
          console.log("website url222---------");
          newErrors.CIN = "CIN is required";
        }
        if (!formData.company_linkedin.trim()) {
          console.log("company_name---------222");
          newErrors.company_linkedin = "Company LinkedIn profile is required";
        }
        // } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.company_linkedin)) {
        //   newErrors.company_linkedin = 'Invalid LinkedIn URL';
        // }
        if (!formData.description_business.trim()) {
          console.log("company_name---------333");
          newErrors.description_business =
            "Description of business is required";
        }
        if (!formData.numcofounder.trim()) {
          console.log("company_name---------444");
          newErrors.numcofounder = "Number of cofounders is required";
        }
        // } else if (isNaN(formData.numcofounder) || +formData.numcofounder < 0) {
        //   newErrors.numcofounder = 'Number of cofounders must be a non-negative number';
        // }
        if (!formData.teamSize.trim()) {
          console.log("company_name---------555");
          newErrors.teamSize = "Team size is required";
        }
        // } else if (isNaN(formData.teamSize) || +formData.teamSize <= 0) {
        //   newErrors.teamSize = 'Team size must be a positive number';
        // }
        if (!formData.numLocation.trim()) {
          console.log("company_name---------666");
          newErrors.numLocation = "Number of locations is required";
        }
        // } else if (isNaN(formData.numLocation) || +formData.numLocation < 0) {
        //   newErrors.numLocation = 'Number of locations must be a non-negative number';
        // }
        if (!formData.year.trim()) {
          console.log("company_name---------777");
          newErrors.year = "Year is required";
        }
        // } else if (!/^\d{4}$/.test(formData.year)) {
        //   newErrors.year = 'Year must be a 4-digit number';
        // }
        if (!formData.month.trim()) {
          console.log("company_name--------888-");
          newErrors.month = "Month is required";
        }
        // } else if (!(+formData.month >= 1 && +formData.month <= 12)) {
        //   newErrors.month = 'Month must be between 1 and 12';
        // }
        if (!formData.cofounder_linkedin.trim()) {
          console.log("company_name---------999");
          newErrors.cofounder_linkedin =
            "Cofounder LinkedIn profile is required";
        }
        // } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.cofounder_linkedin)) {
        //   newErrors.cofounder_linkedin = 'Invalid LinkedIn URL';
        // }
        if (!formData.country.trim()) {
          console.log("company_name---------1111");
          newErrors.country = "Country is required";
        }
        if (!formData.businessCategory.trim()) {
          console.log("company_name---------1222");
          newErrors.businessCategory = "Business Category is required";
        }
        if (!formData.entityStructure.trim()) {
          console.log("company_name---------13333");
          newErrors.entityStructure = "Entity Structure is required";
        }
        if (!formData.state.trim()) {
          newErrors.state = "State is required";
        }
        if (!formData.city.trim()) {
          newErrors.city = "City is required";
        }
      }

      // Step 2 validations
      if (step === 4) {
        // Financial year fields - must be present and be 4-digit year numbers
        [
          "lastFinancialYear",
          "prevFinancialYear",
          "prePrevFinancialYear",
        ].forEach((field) => {
          if (!formData[field].trim()) {
            newErrors[field] = `${field} is required`;
          }
          // else if (!/^\d{4}$/.test(formData[field])) {
          //   newErrors[field] = `${field} must be a 4-digit year`;
          // }
        });

        // Last month, prev month, pre-prev month - should be 1-12
        ["lastmonth", "prevMonth", "prePrevMonth"].forEach((field) => {
          if (!formData[field].trim()) {
            newErrors[field] = `${field} is required`;
          }
          // } else if (!(+formData[field] >= 1 && +formData[field] <= 12)) {
          //   newErrors[field] = `${field} must be between 1 and 12`;
          // }
        });

        // PAT and OCF fields - must be numbers (can be 0 or more)
        [
          "PATlastFinancialYear",
          "PATprevFinancialYear",
          "PATtrailing12months",
          "PATlastmonth",
          "PATprevMonth",
          "PATprePrevMonth",
          "EBITDA",
          "OCFlastFinancialYear",
          "OCFprevFinancialYear",
          "OCFprePrevFinancialYear",
          "equity",
          "debt",
        ].forEach((field) => {
          if (!formData[field].toString().trim()) {
            newErrors[field] = `${field} is required`;
          }
          // } else if (isNaN(formData[field]) || +formData[field] < 0) {
          //   newErrors[field] = `${field} must be a non-negative number`;
          // }
        });

        if (!formData.assestDesc.trim()) {
          newErrors.assestDesc = "Asset description is required";
        }
      }

      // Step 3 validations
      if (step === 5) {
        if (!formData.salereason.trim()) {
          newErrors.salereason = "Sale reason is required";
        }
        if (!formData.askingPrice.trim()) {
          newErrors.askingPrice = "Asking price is required";
        }
        // else if (isNaN(formData.askingPrice) || +formData.askingPrice <= 0) {
        //   newErrors.askingPrice = 'Asking price must be a positive number';
        // }
        if (
          !formData.preferredArrangement ||
          formData.preferredArrangement.length === 0
        ) {
          newErrors.preferredArrangement = "Preferred arrangement is required";
        }
      }
    }
    // Step 1 validations
    else {
      if (step === 1) {
        if (!formData.company_name.trim()) {
          console.log("company_name---------");
          newErrors.company_name = "Company Name is required";
        }
        if (!formData.website_url.trim()) {
          console.log("website url---------");
          newErrors.website_url = "Website URL is required";
        }
        // else if (!/^https?:\/\/.+/.test(formData.website_url)) {
        //   newErrors.website_url = 'Website URL must start with http:// or https://';
        // }
        if (!formData.CIN.trim()) {
          console.log("website url222---------");
          newErrors.CIN = "CIN is required";
        }
        if (!formData.company_linkedin.trim()) {
          console.log("company_name---------222");
          newErrors.company_linkedin = "Company LinkedIn profile is required";
        }
        // } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.company_linkedin)) {
        //   newErrors.company_linkedin = 'Invalid LinkedIn URL';
        // }
        if (!formData.description_business.trim()) {
          console.log("company_name---------333");
          newErrors.description_business =
            "Description of business is required";
        }
        if (!formData.numcofounder.trim()) {
          console.log("company_name---------444");
          newErrors.numcofounder = "Number of cofounders is required";
        }
        // } else if (isNaN(formData.numcofounder) || +formData.numcofounder < 0) {
        //   newErrors.numcofounder = 'Number of cofounders must be a non-negative number';
        // }
        if (!formData.teamSize.trim()) {
          console.log("company_name---------555");
          newErrors.teamSize = "Team size is required";
        }
        // } else if (isNaN(formData.teamSize) || +formData.teamSize <= 0) {
        //   newErrors.teamSize = 'Team size must be a positive number';
        // }
        if (!formData.numLocation.trim()) {
          console.log("company_name---------666");
          newErrors.numLocation = "Number of locations is required";
        }
        // } else if (isNaN(formData.numLocation) || +formData.numLocation < 0) {
        //   newErrors.numLocation = 'Number of locations must be a non-negative number';
        // }
        if (!formData.year.trim()) {
          console.log("company_name---------777");
          newErrors.year = "Year is required";
        }
        // } else if (!/^\d{4}$/.test(formData.year)) {
        //   newErrors.year = 'Year must be a 4-digit number';
        // }
        if (!formData.month.trim()) {
          console.log("company_name--------888-");
          newErrors.month = "Month is required";
        }
        // } else if (!(+formData.month >= 1 && +formData.month <= 12)) {
        //   newErrors.month = 'Month must be between 1 and 12';
        // }
        if (!formData.cofounder_linkedin.trim()) {
          console.log("company_name---------999");
          newErrors.cofounder_linkedin =
            "Cofounder LinkedIn profile is required";
        }
        // } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.cofounder_linkedin)) {
        //   newErrors.cofounder_linkedin = 'Invalid LinkedIn URL';
        // }
        if (!formData.country.trim()) {
          console.log("company_name---------1111");
          newErrors.country = "Country is required";
        }
        if (!formData.businessCategory.trim()) {
          console.log("company_name---------1222");
          newErrors.businessCategory = "Business Category is required";
        }
        if (!formData.entityStructure.trim()) {
          console.log("company_name---------13333");
          newErrors.entityStructure = "Entity Structure is required";
        }
        if (!formData.state.trim()) {
          newErrors.state = "State is required";
        }
        if (!formData.city.trim()) {
          newErrors.city = "City is required";
        }
      }

      // Step 2 validations
      if (step === 2) {
        // Financial year fields - must be present and be 4-digit year numbers
        [
          "lastFinancialYear",
          "prevFinancialYear",
          "prePrevFinancialYear",
        ].forEach((field) => {
          if (!formData[field].trim()) {
            newErrors[field] = `${field} is required`;
          }
          // else if (!/^\d{4}$/.test(formData[field])) {
          //   newErrors[field] = `${field} must be a 4-digit year`;
          // }
        });

        // Last month, prev month, pre-prev month - should be 1-12
        ["lastmonth", "prevMonth", "prePrevMonth"].forEach((field) => {
          if (!formData[field].trim()) {
            newErrors[field] = `${field} is required`;
          }
          // } else if (!(+formData[field] >= 1 && +formData[field] <= 12)) {
          //   newErrors[field] = `${field} must be between 1 and 12`;
          // }
        });

        // PAT and OCF fields - must be numbers (can be 0 or more)
        [
          "PATlastFinancialYear",
          "PATprevFinancialYear",
          "PATtrailing12months",
          "PATlastmonth",
          "PATprevMonth",
          "PATprePrevMonth",
          "EBITDA",
          "OCFlastFinancialYear",
          "OCFprevFinancialYear",
          "OCFprePrevFinancialYear",
          "equity",
          "debt",
        ].forEach((field) => {
          if (!formData[field].toString().trim()) {
            newErrors[field] = `${field} is required`;
          }
          // } else if (isNaN(formData[field]) || +formData[field] < 0) {
          //   newErrors[field] = `${field} must be a non-negative number`;
          // }
        });

        if (!formData.assestDesc.trim()) {
          newErrors.assestDesc = "Asset description is required";
        }
      }

      // Step 3 validations
      if (step === 3) {
        if (!formData.salereason.trim()) {
          newErrors.salereason = "Sale reason is required";
        }
        if (!formData.askingPrice.trim()) {
          newErrors.askingPrice = "Asking price is required";
        }
        // else if (isNaN(formData.askingPrice) || +formData.askingPrice <= 0) {
        //   newErrors.askingPrice = 'Asking price must be a positive number';
        // }
        if (
          !formData.preferredArrangement ||
          formData.preferredArrangement.length === 0
        ) {
          newErrors.preferredArrangement = "Preferred arrangement is required";
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    console.log("next-----");
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
        "https://bizplorers-backend.onrender.com/api/seller/add_detail",
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
      //     ? alert("Seller Created Successfully!")
      //     : alert("Data submitted successfully!");
      //   navigate("/seller/dashboard");
      // }
      if (type === "modal") {
  alert("Seller Created Successfully!");
  // don't navigate
} else {
  alert("Data submitted successfully!");
  navigate("/seller/dashboard");
}
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
        "COMPANY DETAILS",
        "FINANCIAL DETAILS",
        "TRANSACTION DETAILS",
      ]);
    } else {
      setStepsList([
        "COMPANY DETAILS",
        "FINANCIAL DETAILS",
        "TRANSACTION DETAILS",
      ]);
    }
  }, [type]);

  return (
    <>
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
            onCli
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
     <div
        className={`flex justify-center min-h-screen bg-slate-100 ${
          type === "modal" ? "pt-[3%]" : "pt-[7%]"
        }`}
      >
        {/* <div className={`bg-white px-2 py-2 rounded shadow-md w-full `}>
          */}
          <div
          className={`bg-white px-4 py-4 rounded shadow-md  h-full  ${
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
                  type={'modal'}
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
                  type={''}
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

          {/* 
        <div className="flex gap-5 mt-6">
          {step > 1 && (
            <button onClick={() => setStep((prev) => prev - 1)} className="px-4 py-2 bg-gray-300 rounded">
              Back
            </button>
          )}
          {step < 3 && (
            <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded">
              Next
            </button>
          )}
          {step==3 && (
            <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">
              Submit
            </button>
          ) }
        </div> */}
        </div>
      </div>
    </>
  );
};

export default RegisterSeller;
