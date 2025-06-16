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
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { useLayoutEffect } from "react";


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
    // cofounder_linkedin: "",
    cofounderLinks:[],
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

 
  const handleChange = (e) => {
    const { name, multiple, selectedOptions, value } = e.target;
    const actualValue = multiple
      ? Array.from(selectedOptions).map((option) => option.value)
      : value;

      console.log("actualValuenAME",name);
      console.log("actualValue",actualValue);
    setFormData((prev) => ({ ...prev, [name]: actualValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };


//   const validateStep = () => {
  
//     const newErrors = {};

//     if (type === "modal") {
//       if (step === 3) {
//         if (!formData.company_name.trim()) {
//           console.log("company_name---------");
//           newErrors.company_name = "Company Name is required";
//         }
//         if (!formData.website_url.trim()) {
//           console.log("website url---------");
//           newErrors.website_url = "Website URL is required";
//         }
//         // else if (!/^https?:\/\/.+/.test(formData.website_url)) {
//         //   newErrors.website_url = 'Website URL must start with http:// or https://';
//         // }
     
//          if (!formData.entityStructure.trim()) {
//           console.log("company_name---------13333");
//           newErrors.entityStructure = "Entity Structure is required";
//         }
//   const entity = formData.entityStructure?.trim();

// if ((entity === "Private Ltd" || entity === "Public Ltd") && !formData.CIN.trim()) {
//   console.log("cin----");
//   newErrors.CIN = "CIN is required for Private or Public Ltd companies";
// }

//         if (!formData.company_linkedin.trim()) {
//           console.log("company_name---------222");
//           newErrors.company_linkedin = "Company LinkedIn profile is required";
//         }
//         // } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.company_linkedin)) {
//         //   newErrors.company_linkedin = 'Invalid LinkedIn URL';
//         // }
//         if (!formData.description_business.trim()) {
//           console.log("company_name---------333");
//           newErrors.description_business =
//             "Description of business is required";
//         }
//         if (!formData.numcofounder.trim()) {
//           console.log("company_name---------444");
//           newErrors.numcofounder = "Number of cofounders is required";
//         }
//         // } else if (isNaN(formData.numcofounder) || +formData.numcofounder < 0) {
//         //   newErrors.numcofounder = 'Number of cofounders must be a non-negative number';
//         // }
//         if (!formData.teamSize.trim()) {
//           console.log("company_name---------555");
//           newErrors.teamSize = "Team size is required";
//         }
//         // } else if (isNaN(formData.teamSize) || +formData.teamSize <= 0) {
//         //   newErrors.teamSize = 'Team size must be a positive number';
//         // }
//         if (!formData.numLocation.trim()) {
//           console.log("company_name---------666");
//           newErrors.numLocation = "Number of locations is required";
//         }
//         // } else if (isNaN(formData.numLocation) || +formData.numLocation < 0) {
//         //   newErrors.numLocation = 'Number of locations must be a non-negative number';
//         // }
//         if (!formData.year.trim()) {
//           console.log("company_name---------777");
//           newErrors.year = "Year is required";
//         }
       
//         if (!formData.month.trim()) {
//           console.log("company_name--------888-");
//           newErrors.month = "Month is required";
//         }
       
//          if (
//           !formData.cofounderLinks||
//           formData.cofounderLinks.length === 0
//         ) {
//           newErrors.cofounderLinks = "Cofounder Linkedin is required";
//         }
       
//         if (!formData.country.trim()) {
//           console.log("company_name---------1111");
//           newErrors.country = "Country is required";
//         }
//         if (!formData.businessCategory.trim()) {
//           console.log("company_name---------1222");
//           newErrors.businessCategory = "Business Category is required";
//         }
       
//         if (!formData.state.trim()) {
//           newErrors.state = "State is required";
//         }
//         if (!formData.city.trim()) {
//           newErrors.city = "City is required";
//         }
//       }

//       // Step 2 validations
//       if (step === 4) {
//         // Financial year fields - must be present and be 4-digit year numbers
//         [
//           "lastFinancialYear",
//           "prevFinancialYear",
//           "prePrevFinancialYear",
//         ].forEach((field) => {
//           if (!formData[field].trim()) {
//             newErrors[field] = `${field} is required`;
//           }
//           // else if (!/^\d{4}$/.test(formData[field])) {
//           //   newErrors[field] = `${field} must be a 4-digit year`;
//           // }
//         });

//         // Last month, prev month, pre-prev month - should be 1-12
//         ["lastmonth", "prevMonth", "prePrevMonth"].forEach((field) => {
//           if (!formData[field].trim()) {
//             newErrors[field] = `${field} is required`;
//           }
//           // } else if (!(+formData[field] >= 1 && +formData[field] <= 12)) {
//           //   newErrors[field] = `${field} must be between 1 and 12`;
//           // }
//         });

//         // PAT and OCF fields - must be numbers (can be 0 or more)
//         [
//           "PATlastFinancialYear",
//           "PATprevFinancialYear",
//           "PATtrailing12months",
//           "PATlastmonth",
//           "PATprevMonth",
//           "PATprePrevMonth",
//           "EBITDA",
//           "OCFlastFinancialYear",
//           "OCFprevFinancialYear",
//           "OCFprePrevFinancialYear",
//           "equity",
//           "debt",
//         ].forEach((field) => {
//           if (!formData[field].toString().trim()) {
//             newErrors[field] = `${field} is required`;
//           }
//           // } else if (isNaN(formData[field]) || +formData[field] < 0) {
//           //   newErrors[field] = `${field} must be a non-negative number`;
//           // }
//         });

//         if (!formData.assestDesc.trim()) {
//           newErrors.assestDesc = "Asset description is required";
//         }
//       }

//       // Step 3 validations
//       if (step === 5) {
//         if (!formData.salereason.trim()) {
//           newErrors.salereason = "Sale reason is required";
//         }
//         if (!formData.askingPrice.trim()) {
//           newErrors.askingPrice = "Asking price is required";
//         }
//         // else if (isNaN(formData.askingPrice) || +formData.askingPrice <= 0) {
//         //   newErrors.askingPrice = 'Asking price must be a positive number';
//         // }
//         if (
//           !formData.preferredArrangement ||
//           formData.preferredArrangement.length === 0
//         ) {
//           newErrors.preferredArrangement = "Preferred arrangement is required";
//         }
//       }
//     }
//     // Step 1 validations
//     else {
//       if (step === 1) {
//         if (!formData.company_name.trim()) {
//           console.log("company_name---------");
//           newErrors.company_name = "Company Name is required";
//         }
//         if (!formData.website_url.trim()) {
//           console.log("website url---------");
//           newErrors.website_url = "Website URL is required";
//         }
//         // else if (!/^https?:\/\/.+/.test(formData.website_url)) {
//         //   newErrors.website_url = 'Website URL must start with http:// or https://';
//         // }
//         // if (!formData.CIN.trim()) {
//         //   console.log("website url222---------");
//         //   newErrors.CIN = "CIN is required";
//         // }
//           if (!formData.entityStructure.trim()) {
//           console.log("company_name---------13333");
//           newErrors.entityStructure = "Entity Structure is required";
//         }
//         const entity = formData.entityStructure?.trim();

// if ((entity === "Private Ltd" || entity === "Public Ltd") && !formData.CIN.trim()) {
//   newErrors.CIN = "CIN is required for Private or Public Ltd companies";
// }
//         if (!formData.company_linkedin.trim()) {
//           console.log("company_name---------222");
//           newErrors.company_linkedin = "Company LinkedIn profile is required";
//         }
//         // } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.company_linkedin)) {
//         //   newErrors.company_linkedin = 'Invalid LinkedIn URL';
//         // }
//         if (!formData.description_business.trim()) {
//           console.log("company_name---------333");
//           newErrors.description_business =
//             "Description of business is required";
//         }
//         if (!formData.numcofounder.trim()) {
//           console.log("company_name---------444");
//           newErrors.numcofounder = "Number of cofounders is required";
//         }
//         // } else if (isNaN(formData.numcofounder) || +formData.numcofounder < 0) {
//         //   newErrors.numcofounder = 'Number of cofounders must be a non-negative number';
//         // }
//         if (!formData.teamSize.trim()) {
//           console.log("company_name---------555");
//           newErrors.teamSize = "Team size is required";
//         }
//         // } else if (isNaN(formData.teamSize) || +formData.teamSize <= 0) {
//         //   newErrors.teamSize = 'Team size must be a positive number';
//         // }
//         if (!formData.numLocation.trim()) {
//           console.log("company_name---------666");
//           newErrors.numLocation = "Number of locations is required";
//         }
//         // } else if (isNaN(formData.numLocation) || +formData.numLocation < 0) {
//         //   newErrors.numLocation = 'Number of locations must be a non-negative number';
//         // }
//         if (!formData.year.trim()) {
//           console.log("company_name---------777");
//           newErrors.year = "Year is required";
//         }
//         // } else if (!/^\d{4}$/.test(formData.year)) {
//         //   newErrors.year = 'Year must be a 4-digit number';
//         // }
//         if (!formData.month.trim()) {
//           console.log("company_name--------888-");
//           newErrors.month = "Month is required";
//         }
       
//         if (!formData.cofounderLinks || formData.cofounderLinks.length === 0) {
//           console.log("eriir----");
//   newErrors.cofounderLinks = "At least one Cofounder LinkedIn profile is required";
// } else {
//   // Check if any of the provided links are empty
//   const hasEmptyLinks = formData.cofounderLinks.some(link => !link.trim());
//   if (hasEmptyLinks) {
//     newErrors.cofounderLinks = "All Cofounder LinkedIn fields must be filled or removed";
//   }
// }
//         // } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.cofounder_linkedin)) {
//         //   newErrors.cofounder_linkedin = 'Invalid LinkedIn URL';
//         // }
//         if (!formData.country.trim()) {
//           console.log("company_name---------1111");
//           newErrors.country = "Country is required";
//         }
//         if (!formData.businessCategory.trim()) {
//           console.log("company_name---------1222");
//           newErrors.businessCategory = "Business Category is required";
//         }
//         // if (!formData.entityStructure.trim()) {
//         //   console.log("company_name---------13333");
//         //   newErrors.entityStructure = "Entity Structure is required";
//         // }
//         if (!formData.state.trim()) {
//           newErrors.state = "State is required";
//         }
//         if (!formData.city.trim()) {
//           newErrors.city = "City is required";
//         }
//       }

//       // Step 2 validations
//       if (step === 2) {
//         // Financial year fields - must be present and be 4-digit year numbers
//         [
//           "lastFinancialYear",
//           "prevFinancialYear",
//           "prePrevFinancialYear",
//         ].forEach((field) => {
//           if (!formData[field].trim()) {
//             newErrors[field] = `${field} is required`;
//           }
         
//         });

//         // Last month, prev month, pre-prev month - should be 1-12
//         ["lastmonth", "prevMonth", "prePrevMonth"].forEach((field) => {
//           if (!formData[field].trim()) {
//             newErrors[field] = `${field} is required`;
//           }
         
//         });

//         // PAT and OCF fields - must be numbers (can be 0 or more)
//         [
//           "PATlastFinancialYear",
//           "PATprevFinancialYear",
//           "PATtrailing12months",
//           "PATlastmonth",
//           "PATprevMonth",
//           "PATprePrevMonth",
//           "EBITDA",
//           "OCFlastFinancialYear",
//           "OCFprevFinancialYear",
//           "OCFprePrevFinancialYear",
//           "equity",
//           "debt",
//         ].forEach((field) => {
//           if (!formData[field].toString().trim()) {
//             newErrors[field] = `${field} is required`;
//           }
         
//         });

//         if (!formData.assestDesc.trim()) {
//           newErrors.assestDesc = "Asset description is required";
//         }
//       }

//       // Step 3 validations
//       if (step === 3) {
//         if (!formData.salereason.trim()) {
//           newErrors.salereason = "Sale reason is required";
//         }
//         if (!formData.askingPrice.trim()) {
//           newErrors.askingPrice = "Asking price is required";
//         }
      
//         if (
//           !formData.preferredArrangement ||
//           formData.preferredArrangement.length === 0
//         ) {
//           newErrors.preferredArrangement = "Preferred arrangement is required";
//         }
//       }
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

  // const handleNext = () => {
  //   console.log("next-----");
  //   console.log("formdata--valuess",formData);
  //   try{
  //   if (validateStep()) setStep((prev) => prev + 1)
  //   }catch(e){
  // console.log("error found",e)}
  // };
 
  const validateStep = () => {
  const newErrors = {};
  const safeTrim = (val) => (typeof val === "string" ? val.trim() : "");
  const isEmpty = (val) => safeTrim(val) === "";
  const isMissingOrEmptyArray = (arr) => !Array.isArray(arr) || arr.length === 0;

  if (type === "modal") {
    if (step === 3) {
      if (isEmpty(formData.company_name)) newErrors.company_name = "Company Name is required";
      if (isEmpty(formData.website_url)) newErrors.website_url = "Website URL is required";
      if (isEmpty(formData.entityStructure)) newErrors.entityStructure = "Entity Structure is required";

      const entity = safeTrim(formData.entityStructure);
      if ((entity === "Private Ltd" || entity === "Public Ltd") && isEmpty(formData.CIN)) {
        newErrors.CIN = "CIN is required for Private or Public Ltd companies";
      }

      if (isEmpty(formData.company_linkedin)) newErrors.company_linkedin = "Company LinkedIn profile is required";
      if (isEmpty(formData.description_business)) newErrors.description_business = "Description of business is required";
      if (isEmpty(formData.numcofounder)) newErrors.numcofounder = "Number of cofounders is required";
      if (isEmpty(formData.teamSize)) newErrors.teamSize = "Team size is required";
      if (isEmpty(formData.numLocation)) newErrors.numLocation = "Number of locations is required";
      if (isEmpty(formData.year)) newErrors.year = "Year is required";
      if (isEmpty(formData.month)) newErrors.month = "Month is required";

      if (isMissingOrEmptyArray(formData.cofounderLinks)) {
        newErrors.cofounderLinks = "Cofounder Linkedin is required";
      } else if (formData.cofounderLinks.some(link => isEmpty(link))) {
        newErrors.cofounderLinks = "All Cofounder LinkedIn fields must be filled or removed";
      }

      if (isEmpty(formData.country)) newErrors.country = "Country is required";
      if (isEmpty(formData.businessCategory)) newErrors.businessCategory = "Business Category is required";
      if (isEmpty(formData.state)) newErrors.state = "State is required";
      if (isEmpty(formData.city)) newErrors.city = "City is required";
    }

    if (step === 4) {
      ["lastFinancialYear", "prevFinancialYear", "prePrevFinancialYear"].forEach(field => {
        if (isEmpty(formData[field])) newErrors[field] = `${field} is required`;
      });

      ["lastmonth", "prevMonth", "prePrevMonth"].forEach(field => {
        if (isEmpty(formData[field])) newErrors[field] = `${field} is required`;
      });

      [
        "PATlastFinancialYear", "PATprevFinancialYear", "PATtrailing12months",
        "PATlastmonth", "PATprevMonth", "PATprePrevMonth", "EBITDA",
        "OCFlastFinancialYear", "OCFprevFinancialYear", "OCFprePrevFinancialYear",
        "equity", "debt"
      ].forEach(field => {
        if (formData[field] == null || safeTrim(formData[field].toString()) === "") {
          newErrors[field] = `${field} is required`;
        }
      });

      if (isEmpty(formData.assestDesc)) newErrors.assestDesc = "Asset description is required";
    }

    if (step === 5) {
      if (isEmpty(formData.salereason)) newErrors.salereason = "Sale reason is required";
      if (isEmpty(formData.askingPrice)) newErrors.askingPrice = "Asking price is required";
      if (isMissingOrEmptyArray(formData.preferredArrangement)) {
        newErrors.preferredArrangement = "Preferred arrangement is required";
      }
    }
  } else {
    if (step === 1) {
      if (isEmpty(formData.company_name)) newErrors.company_name = "Company Name is required";
      if (isEmpty(formData.website_url)) newErrors.website_url = "Website URL is required";
      if (isEmpty(formData.entityStructure)) newErrors.entityStructure = "Entity Structure is required";

      const entity = safeTrim(formData.entityStructure);
      if ((entity === "Private Ltd" || entity === "Public Ltd") && isEmpty(formData.CIN)) {
        newErrors.CIN = "CIN is required for Private or Public Ltd companies";
      }

      if (isEmpty(formData.company_linkedin)) newErrors.company_linkedin = "Company LinkedIn profile is required";
      if (isEmpty(formData.description_business)) newErrors.description_business = "Description of business is required";
      if (isEmpty(formData.numcofounder)) newErrors.numcofounder = "Number of cofounders is required";
      if (isEmpty(formData.teamSize)) newErrors.teamSize = "Team size is required";
      if (isEmpty(formData.numLocation)) newErrors.numLocation = "Number of locations is required";
      if (isEmpty(formData.year)) newErrors.year = "Year is required";
      if (isEmpty(formData.month)) newErrors.month = "Month is required";

      if (isMissingOrEmptyArray(formData.cofounderLinks)) {
        newErrors.cofounderLinks = "Cofounder Linkedin is required";
      } else if (formData.cofounderLinks.some(link => isEmpty(link))) {
        newErrors.cofounderLinks = "All Cofounder LinkedIn fields must be filled or removed";
      }

      if (isEmpty(formData.country)) newErrors.country = "Country is required";
      if (isEmpty(formData.businessCategory)) newErrors.businessCategory = "Business Category is required";
      if (isEmpty(formData.state)) newErrors.state = "State is required";
      if (isEmpty(formData.city)) newErrors.city = "City is required";
    }

    if (step === 2) {
      ["lastFinancialYear", "prevFinancialYear", "prePrevFinancialYear"].forEach(field => {
        if (isEmpty(formData[field])) newErrors[field] = `${field} is required`;
      });

      ["lastmonth", "prevMonth", "prePrevMonth"].forEach(field => {
        if (isEmpty(formData[field])) newErrors[field] = `${field} is required`;
      });

      [
        "PATlastFinancialYear", "PATprevFinancialYear", "PATtrailing12months",
        "PATlastmonth", "PATprevMonth", "PATprePrevMonth", "EBITDA",
        "OCFlastFinancialYear", "OCFprevFinancialYear", "OCFprePrevFinancialYear",
        "equity", "debt"
      ].forEach(field => {
        if (formData[field] == null || safeTrim(formData[field].toString()) === "") {
          newErrors[field] = `${field} is required`;
        }
      });

      if (isEmpty(formData.assestDesc)) newErrors.assestDesc = "Asset description is required";
    }

    if (step === 3) {
      if (isEmpty(formData.salereason)) newErrors.salereason = "Sale reason is required";
      if (isEmpty(formData.askingPrice)) newErrors.askingPrice = "Asking price is required";
      if (isMissingOrEmptyArray(formData.preferredArrangement)) {
        newErrors.preferredArrangement = "Preferred arrangement is required";
      }
    }
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

// const validateStep = () => {
//   const newErrors = {};

//   const safeTrim = (val) => (typeof val === "string" ? val.trim() : "");
//   const isEmpty = (val) => safeTrim(val) === "";
//   const isMissingOrEmptyArray = (arr) => !Array.isArray(arr) || arr.length === 0;

//   try {
//     console.log("Running validation for step:", step);
//     console.log("Form data:", formData);

//     if (type === "modal") {
//       if (step === 3) {
//         console.log("Validating step 3 (modal)");

//         if (isEmpty(formData.company_name)) newErrors.company_name = "Company Name is required";
//         if (isEmpty(formData.website_url)) newErrors.website_url = "Website URL is required";
//         if (isEmpty(formData.entityStructure)) newErrors.entityStructure = "Entity Structure is required";

//         const entity = safeTrim(formData.entityStructure);
//         if ((entity === "Private Ltd" || entity === "Public Ltd") && isEmpty(formData.CIN)) {
//           newErrors.CIN = "CIN is required for Private or Public Ltd companies";
//         }

//         if (isEmpty(formData.company_linkedin)) newErrors.company_linkedin = "Company LinkedIn profile is required";
//         if (isEmpty(formData.description_business)) newErrors.description_business = "Description of business is required";
//         if (isEmpty(formData.numcofounder)) newErrors.numcofounder = "Number of cofounders is required";
//         if (isEmpty(formData.teamSize)) newErrors.teamSize = "Team size is required";
//         if (isEmpty(formData.numLocation)) newErrors.numLocation = "Number of locations is required";
//         if (isEmpty(formData.year)) newErrors.year = "Year is required";
//         if (isEmpty(formData.month)) newErrors.month = "Month is required";

//         if (isMissingOrEmptyArray(formData.cofounderLinks)) {
//           newErrors.cofounderLinks = "Cofounder LinkedIn is required";
//         } else if (formData.cofounderLinks.some(link => isEmpty(link))) {
//           newErrors.cofounderLinks = "All Cofounder LinkedIn fields must be filled or removed";
//         }

//         if (isEmpty(formData.country)) newErrors.country = "Country is required";
//         if (isEmpty(formData.businessCategory)) newErrors.businessCategory = "Business Category is required";
//         if (isEmpty(formData.state)) newErrors.state = "State is required";
//         if (isEmpty(formData.city)) newErrors.city = "City is required";
//       }

//       if (step === 4) {
//         console.log("Validating step 4 (modal)");
//         ["lastFinancialYear", "prevFinancialYear", "prePrevFinancialYear"].forEach((field) => {
//           if (isEmpty(formData[field])) newErrors[field] = `${field} is required`;
//         });

//         ["lastmonth", "prevMonth", "prePrevMonth"].forEach((field) => {
//           if (isEmpty(formData[field])) newErrors[field] = `${field} is required`;
//         });

//         [
//           "PATlastFinancialYear",
//           "PATprevFinancialYear",
//           "PATtrailing12months",
//           "PATlastmonth",
//           "PATprevMonth",
//           "PATprePrevMonth",
//           "EBITDA",
//           "OCFlastFinancialYear",
//           "OCFprevFinancialYear",
//           "OCFprePrevFinancialYear",
//           "equity",
//           "debt"
//         ].forEach((field) => {
//           if (isEmpty(formData[field]?.toString())) newErrors[field] = `${field} is required`;
//         });

//         if (isEmpty(formData.assestDesc)) newErrors.assestDesc = "Asset description is required";
//       }

//       if (step === 5) {
//         console.log("Validating step 5 (modal)");

//         if (isEmpty(formData.salereason)) newErrors.salereason = "Sale reason is required";
//         if (isEmpty(formData.askingPrice)) newErrors.askingPrice = "Asking price is required";
//         if (isMissingOrEmptyArray(formData.preferredArrangement)) {
//           newErrors.preferredArrangement = "Preferred arrangement is required";
//         }
//       }
//     } else {
//       // if (step === 1) {
//       //   console.log("Validating step 1 (non-modal)");

//       //   if (isEmpty(formData.company_name)) newErrors.company_name = "Company Name is required";
//       //   if (isEmpty(formData.website_url)) newErrors.website_url = "Website URL is required";
//       //   if (isEmpty(formData.entityStructure)) newErrors.entityStructure = "Entity Structure is required";

//       //   const entity = safeTrim(formData.entityStructure);
//       //   if ((entity === "Private Ltd" || entity === "Public Ltd") && isEmpty(formData.CIN)) {
//       //     newErrors.CIN = "CIN is required for Private or Public Ltd companies";
//       //   }

//       //   if (isEmpty(formData.company_linkedin)) newErrors.company_linkedin = "Company LinkedIn profile is required";
//       //   if (isEmpty(formData.description_business)) newErrors.description_business = "Description of business is required";
//       //   if (isEmpty(formData.numcofounder)) newErrors.numcofounder = "Number of cofounders is required";
//       //   if (isEmpty(formData.teamSize)) newErrors.teamSize = "Team size is required";
//       //   if (isEmpty(formData.numLocation)) newErrors.numLocation = "Number of locations is required";
//       //   if (isEmpty(formData.year)) newErrors.year = "Year is required";
//       //   if (isEmpty(formData.month)) newErrors.month = "Month is required";

//       //   if (isMissingOrEmptyArray(formData.cofounderLinks)) {
//       //     newErrors.cofounderLinks = "Cofounder LinkedIn is required";
//       //   } else if (formData.cofounderLinks.some(link => isEmpty(link))) {
//       //     newErrors.cofounderLinks = "All Cofounder LinkedIn fields must be filled or removed";
//       //   }

//       //   if (isEmpty(formData.country)) newErrors.country = "Country is required";
//       //   if (isEmpty(formData.businessCategory)) newErrors.businessCategory = "Business Category is required";
//       //   if (isEmpty(formData.state)) newErrors.state = "State is required";
//       //   if (isEmpty(formData.city)) newErrors.city = "City is required";
//       // }
//       if (step === 1) {
//   console.log("✅ Step 1 (non-modal) validation starting");

//   try {
//     if (isEmpty(formData.company_name)) {
//       console.log("⛔ company_name is missing");
//       newErrors.company_name = "Company Name is required";
//     }

//     if (isEmpty(formData.website_url)) {
//       console.log("⛔ website_url is missing");
//       newErrors.website_url = "Website URL is required";
//     }

//     if (isEmpty(formData.entityStructure)) {
//       console.log("⛔ entityStructure is missing");
//       newErrors.entityStructure = "Entity Structure is required";
//     }

//     const entity = safeTrim(formData.entityStructure);
//     if ((entity === "Private Ltd" || entity === "Public Ltd") && isEmpty(formData.CIN)) {
//       console.log("⛔ CIN is missing for", entity);
//       newErrors.CIN = "CIN is required for Private or Public Ltd companies";
//     }

//     if (isEmpty(formData.company_linkedin)) {
//       console.log("⛔ company_linkedin is missing");
//       newErrors.company_linkedin = "Company LinkedIn profile is required";
//     }

//     if (isEmpty(formData.description_business)) {
//       console.log("⛔ description_business is missing");
//       newErrors.description_business = "Description of business is required";
//     }

//     if (isEmpty(formData.numcofounder)) {
//       console.log("⛔ numcofounder is missing");
//       newErrors.numcofounder = "Number of cofounders is required";
//     }

//     if (isMissingOrEmptyArray(formData.cofounderLinks)) {
//       console.log("⛔ cofounderLinks is missing or empty");
//       newErrors.cofounderLinks = "Cofounder LinkedIn is required";
//     } else {
//       formData.cofounderLinks.forEach((link, idx) => {
//         if (isEmpty(link)) {
//           console.log(`⛔ cofounderLinks[${idx}] is empty`);
//           newErrors.cofounderLinks = "All Cofounder LinkedIn fields must be filled or removed";
//         }
//       });
//     }

//     if (isEmpty(formData.teamSize)) console.log("⛔ teamSize missing");
//     if (isEmpty(formData.numLocation)) console.log("⛔ numLocation missing");
//     if (isEmpty(formData.year)) console.log("⛔ year missing");
//     if (isEmpty(formData.month)) console.log("⛔ month missing");
//     if (isEmpty(formData.country)) console.log("⛔ country missing");
//     if (isEmpty(formData.businessCategory)) console.log("⛔ businessCategory missing");
//     if (isEmpty(formData.state)) console.log("⛔ state missing");
//     if (isEmpty(formData.city)) console.log("⛔ city missing");

//   } catch (e) {
//     console.error("🔥 Step 1 failed at:", e);
//     newErrors.general = "Step 1 crashed. See console.";
//   }
// }


//       if (step === 2) {
//         console.log("Validating step 2 (non-modal)");

//         ["lastFinancialYear", "prevFinancialYear", "prePrevFinancialYear"].forEach((field) => {
//           if (isEmpty(formData[field])) newErrors[field] = `${field} is required`;
//         });

//         ["lastmonth", "prevMonth", "prePrevMonth"].forEach((field) => {
//           if (isEmpty(formData[field])) newErrors[field] = `${field} is required`;
//         });

//         [
//           "PATlastFinancialYear",
//           "PATprevFinancialYear",
//           "PATtrailing12months",
//           "PATlastmonth",
//           "PATprevMonth",
//           "PATprePrevMonth",
//           "EBITDA",
//           "OCFlastFinancialYear",
//           "OCFprevFinancialYear",
//           "OCFprePrevFinancialYear",
//           "equity",
//           "debt"
//         ].forEach((field) => {
//           if (isEmpty(formData[field]?.toString())) newErrors[field] = `${field} is required`;
//         });

//         if (isEmpty(formData.assestDesc)) newErrors.assestDesc = "Asset description is required";
//       }

//       if (step === 3) {
//         console.log("Validating step 3 (non-modal)");
//         if (isEmpty(formData.salereason)) newErrors.salereason = "Sale reason is required";
//         if (isEmpty(formData.askingPrice)) newErrors.askingPrice = "Asking price is required";
//         if (isMissingOrEmptyArray(formData.preferredArrangement)) {
//           newErrors.preferredArrangement = "Preferred arrangement is required";
//         }
//       }
//     }

//   } catch (error) {
//     console.error("🔥 Validation failed with error:", error);
//     newErrors.general = "Unexpected error occurred during validation. Please try again.";
//   }

//   setErrors(newErrors);
//   return Object.keys(newErrors).length === 0;
// };

 
  const handleNext = async() => {
  console.log("next-----");
  console.log("formdata--valuess", formData);
  try {
    const isValid = await validateStep();
    if (!isValid) {
      alert("Validation error");
      console.log("Validation failed");
      return;
    }
    setStep((prev) => prev + 1);
    //  window.scrollTo({ top: 0, behavior: "smooth" }); 
  } catch (e) {
    console.log("error found", e);
  }
};

const handleBack=()=>{
setStep((prev) => prev - 1);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  //   setTimeout(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, 100); // Delay ensures DOM has updated
  }

  useLayoutEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [step]); // works for both next and back

  const token = localStorage.getItem("token");
  const handleSubmit = async () => {
    if (!validateStep()) return;
    const user = JSON.parse(localStorage.getItem("user"));
    const id = user?.id;

    console.log("id----", id);
    const dataToSend =
      type === "modal" ? { ...formData, brokerId: id,dataFilled:true } : { ...formData ,dataFilled:true};

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
        </div>
        
      </header> */}
      <Header/>
     <div
        className={`flex justify-center min-h-screen bg-slate-100 ${
          type === "modal" ? "pt-[3%]" : "pt-[7%] pb-[5%]"
        }`}
      >
        {/* <div className={`bg-white px-2 py-2 rounded shadow-md w-full `}>
          */}
          {/**Added padding to the form */}
          <div
          className={`bg-white px-4 py-4 rounded shadow-md  h-full  ${
          
            type === "modal" ? "w-full px-5" : "w-[90%] px-[3%]"
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
                    onClick={handleBack}
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
      <Footer/>
    </>
  );
};

export default RegisterSeller;
