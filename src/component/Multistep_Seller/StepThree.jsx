import ReusableSelect from '../Dropdown';
import {
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useState,useEffect } from 'react';


const StepThree = ({ formData, handleChange,errors,type }) => {

     const[picklistData,setpicklistData]=useState([]);
         useEffect(() => {
             const fetchPicklists = async () => {
               try {
                 const response = await fetch("https://bizplorers-backend.onrender.com/api/picklist/all-categories-values");
                 const result = await response.json();
                 if (response.ok) {
                   setpicklistData(result.data); // Always fresh
                 } else {
                   console.error("❌ Failed to fetch picklists:", result.message);
                 }
               } catch (err) {
                 console.error("❌ Error fetching picklists:", err);
               }
             };
           
             fetchPicklists();
           }, []);

  return(
  
  <div className="space-y-4 px-[5%]">
      <h1 className="text-2xl font-semibold ">TRANSACTION DETAILS</h1>
    <div className="flex justify-between w-full ">
      
    <div className="w-[550px] ">
        {/* <h1>Reason For Sale</h1> */}
        
      {/* <ReusableSelect
      
        label="Reason for Sale"
        name="salereason"
        value={formData.salereason}
        onChange={handleChange}
        options={['No Cash Runway','Bandwidth constraints','Inability to Scale','Relocation']}
        className={`w-full px-3 py-2 border rounded `}
        width={550}
          error={errors.salereason}
        
      /> */}

    <div className='pt-6'>
         <FormControl className={`${type==='modal'?'w-[350px]':'w-[500px]'} `} error={!!errors.salereason} size='small'>
         <InputLabel >Reason for Sale</InputLabel>
          <Select
            labelId="salereason"
            label="Select salereason"
            name="salereason"
            value={formData.salereason}
            onChange={handleChange}
            
         >
            {picklistData[6]?.values.map((entity,index) => (
              <MenuItem key={index} value={entity.value}>
                {entity.value}
              </MenuItem>
            ))}
          </Select>
          {errors.salereason && <FormHelperText>{errors.salereason}</FormHelperText>}
        </FormControl>
        </div>
    </div>


    <div>
       <h1>Asking Price(Rs)</h1> 
     <input
     label='Asking Price'
      type="text"
      name="askingPrice"
      placeholder="Asking Price"
      value={formData.askingPrice}
      onChange={handleChange}
      // className="w-[550px] px-3 py-2 border rounded"
      className={`${type==='modal'?'w-[350px]':'w-[500px]'} px-3 py-2 border rounded ${
          errors.askingPrice ? 'border-red-500 ' : 'border-gray-300'
        }`}
    />
  </div>
  </div>
 
<div className=''>
  <h1 className="text-xl font-semibold mb-4">Preferred Arrangement</h1>
<div className=" flex flex-wrap  ">
  {picklistData[5]?.values.map((option) => (
    <button
      key={option.value}
      type="button"
      className={`w-[100px] py-3 rounded-sm  border text-sm ${
        formData.preferredArrangement.includes(option.value)
          ? "bg-blue-100 text-blue-500 border-blue-500":
           "bg-white text-gray-800 border-gray-300"
          
      } hover:bg-blue-100 border border-blue`}
      onClick={() => {
        const isSelected = formData.preferredArrangement.includes(option.value);
        const newSelection = isSelected
          ? formData.preferredArrangement.filter((item) => item !== option.value)
          : [...formData.preferredArrangement, option.value];

        handleChange({
          target: {
            name: "preferredArrangement",
            value: newSelection,
          },
        });
      }}
    >
      {option.value}
    </button>
  ))}
</div>
{errors.preferredArrangement && (
  <p className="text-red-500 text-sm mt-1">{errors.preferredArrangement}</p>
)}
</div>
</div>
)};

export default StepThree;
