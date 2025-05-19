import React, { useState } from 'react';
import Stepper from '../../component/Multistep_Form/Stepper';
import StepOne from '../../component/Multistep_Seller/StepOne';
import StepTwo from '../../component/Multistep_Seller/StepTwo';
import StepThree from '../../component/Multistep_Seller/StepThree';
import Confirmation from '../../component/Multistep_Form/Confirmation';


const Seller = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
   
 
    
    businessCategory:[],
    businessLocation:'',
    // city:[],
    // openToPreRevenue:'',
    // openToPreBreakeven:'',
    // metric:'',
    // maxMultiple:'',
    // preferredArrangement:[],

    //
    entityStructure:[],
    country:'',
    state:[],
     city:[],
     status:'',
     salereason:'',
     askingPrice:'',
     preferredArrangement:[]
  });
const [errors, setErrors] = useState({});
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

  const actualValue =multiple
    ? Array.from(selectedOptions).map((option) => option.value)
    : value;

  // setFormData((prev) => ({
  //   ...prev,
  //   [name]: actualValue,
  // }));
  setFormData((prev) => {
    const newFormData = { ...prev, [name]: actualValue };
    console.log("Updated formData:", newFormData);  // Log here inside setState callback
    return newFormData;
  });

  setErrors((prev) => ({ ...prev, [name]: '' }));
};



  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.buyertype.trim()) {
        newErrors.buyertype = 'Type Of Buyer is required';
      }
      if (!formData.designation.trim()) {
        newErrors.designation = 'Designation is required';
      }
        if (!formData.description.trim()) {
        newErrors.description= 'Description is required';
      }
        if (!formData.linkedIn.trim()) {
        newErrors.linkedIn = 'Linkedin profile is required';
      }
    }
      if (step === 2) {
      if (!formData.businessCategory || formData.businessCategory.length === 0){
        newErrors.businessCategory = 'Business Category is required';
      }
      // if (!formData.designation.trim()) {
      //   newErrors.designation = 'Designation is required';
      // }
      //   if (!formData.description.trim()) {
      //   newErrors.description= 'Description is required';
      // }
      //   if (!formData.linkedIn.trim()) {
      //   newErrors.linkedIn = 'Linkedin profile is required';
      // }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleNext = () => {
  // if (validateStep()) {
    setStep((prev) => prev + 1);
  // }
};

const handleSubmit=()=>{
  console.log("submission")
}

const stepsList = ['COMPANY DETAILS', 'FINANCIAL DETAILS', 'TRANSACTION DETAILS'];
  return (
    <div className="flex justify-center py-[3%] min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-[90%]">
        {/* <h2 className="text-2xl font-bold mb-2 text-center">Multi Step Form</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          React Tailwind UI multi step form with basic validation.
        </p> */}
        <Stepper step={step} steps={stepsList}/>

        {step === 1 && <StepOne formData={formData} handleChange={handleChange}  errors={errors} />}
        {step === 2 && <StepTwo formData={formData} handleChange={handleChange}  errors={errors} />}
        {/* {step === 3 && <Confirmation formData={formData} />} */}
          {step === 3 && <StepThree formData={formData} handleChange={handleChange}  errors={errors} />}

        <div className="flex gap-5 mt-6">
          {step > 1 && (
            <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">
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
        </div>
      </div>
    </div>
  );
};

export default Seller;
