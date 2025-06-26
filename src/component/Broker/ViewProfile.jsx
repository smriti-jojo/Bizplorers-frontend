
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Menu, X } from "lucide-react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '../Header';
import {CircularProgress } from "@mui/material";


 


const ViewProfile= () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
   const [loading, setLoading] = useState(false);

  const [brokerData, setBrokerData] = useState({
      firstName: '',
    lastName: '',
   mobileNumber:'',
   address:'',
   country:'',
   state:'',
   city:'',
   zipcode:''
  });

  const handleChange = (key, value) => {
    setBrokerData(prev => ({ ...prev, [key]: value }));
  };

  const handleArrayChange = (key, index, value) => {
    const newArray = [...brokerData[key]];
    newArray[index] = value;
    setBrokerData(prev => ({ ...prev, [key]: newArray }));
  };

   const token = localStorage.getItem('token');
  
    const notifyDataUpdatedSuccess = (msg = "Data Updated Successfully!") => {
     toast.success(msg, {
       position: "top-right",
       autoClose: 3000,
       hideProgressBar: false,
       pauseOnHover: true,
       draggable: true,
       theme: "colored",
     });
   };
 
  
    const fetchBrokerData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://bizplorers-backend.onrender.com/api/broker/getBroker', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (!response.ok) throw new Error('Failed to fetch');
  
        const data = await response.json();
        // alert('Data fetched successfully!');
        setBrokerData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        // alert('Getting Data failed.');
      }
    };
  
    const updateData = async () => {
      try {
        const response = await fetch('https://bizplorers-backend.onrender.com/api/broker/updateBroker', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(brokerData),
        });
  
        if (!response.ok) throw new Error('Update failed');
  
        const updated = await response.json();
        // alert('Details updated successfully!');
        notifyDataUpdatedSuccess();
        console.log(updated);
      } catch (error) {
        console.error(error);
        alert('Update failed');
      }
    };
  
    const handleEditToggle = () => {
      if (isEditing) {
        updateData();
      }
      setIsEditing(!isEditing);
    };
  
    useEffect(() => {
      fetchBrokerData();
    }, []);

    const notifySuccess = (msg = "Logged out successfully!") => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  
    const handleLogout=()=>{
    localStorage.removeItem('token');
    notifySuccess();
    window.location.href = '/login'; // or your login route
  };

   const handleCancel=()=>{
    setIsEditing(!isEditing);
  }

  return (
    <div>
     

      {/* <div className='flex justify-center'>
        <div className='flex flex-col border-2 border-slate-500 rounded-md px-[5%] w-[80%] '> */}
        {/**Added Margin */}
         <div className="flex justify-center items-center  ">
        <div className="flex flex-col border rounded-md  px-6 w-full m-4 max-w-screen-md bg-white shadow-lg shadow-slate-100">
          <div className="flex justify-between w-full my-4">
            <div className='text-2xl font-bold'>BROKER DETAILS</div>
            {isEditing ? 
                       <div className="flex gap-3">
                       <Button variant="contained" onClick={handleEditToggle} className="!bg-green-500">
                   Save
                       </Button>
                        <Button variant="contained" onClick={handleCancel} className="!bg-red-500">
                   Cancel
                       </Button>
                       </div>:( <Button variant="contained" onClick={handleEditToggle}>
                   Edit Details
                       </Button>)
           }
          </div>

          {/* Personal Details */}
         
          <div className='flex flex-col text-black my-[2%]'>
            <h1 className='text-xl font-bold'>Personal Details</h1>
           {loading?<div className='flex justify-center'><CircularProgress/></div>:(
            <>
            <EditableRow label="Address" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.address} editable={isEditing} onChange={(val) => handleChange('address', val)} textarea />
           
         <EditableRow label="Country" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.country} editable={isEditing} onChange={(val) => handleChange('country', val)} />
          <EditableRow label="State" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.state} editable={isEditing} onChange={(val) => handleChange('state', val)} />
          <EditableRow label="City" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.city} editable={isEditing} onChange={(val) => handleChange('city', val)} />
        <EditableRow label="Zip Code" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.zipcode} editable={isEditing} onChange={(val) => handleChange('zipcode', val)} />
         </>  )}
          </div>


          {/* <div className='flex gap-3 flex-wrap'>
              <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Preferred Arrangement:</h1>
              {sellerData.preferredArrangement.map((arr, i) =>
                isEditing ? (
                  <input key={i} className="border px-2 py-1 rounded-md" value={arr} onChange={e => handleArrayChange('preferredArrangement', i, e.target.value)} />
                ) : (
                  <p key={i} className='mr-2'>{arr},</p>
                )
              )}
            </div> */}


            {/* <div className='flex gap-3 flex-wrap'>
              <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Cities:</h1>
              {buyerData.city.map((ct, i) =>
                isEditing ? (
                  <input key={i} className="border px-2 py-1 rounded-md" value={ct} onChange={e => handleArrayChange('city', i, e.target.value)} />
                ) : (
                  <p key={i} className='mr-2'>{ct},</p>
                )
              )}
            </div> */}

            {/* <EditableRow label="Open to Pre-Revenue" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.openToPreRevenue} editable={isEditing} onChange={(val) => handleChange('openToPreRevenue', val)} />
            {buyerData.openToPreRevenue === "No" && (
              <>
                <EditableRow label="Open to Pre-Breakeven" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.openToPreBreakeven} editable={isEditing} onChange={(val) => handleChange('openToPreBreakeven', val)} />
                <EditableRow label="Revenue Min" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.revenueMin} editable={isEditing} onChange={(val) => handleChange('revenueMin', val)} />
                <EditableRow label="Revenue Max" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.revenueMax} editable={isEditing} onChange={(val) => handleChange('revenueMax', val)} />
              </>
            )} */}
          </div>

          
          {/* <div className='flex flex-col text-black my-[2%]'>
            <h1 className='text-xl font-bold'>Preferred Value Multiple</h1>
            <EditableRow label="Metric" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.metric} editable={isEditing} onChange={(val) => handleChange('metric', val)} />
            <EditableRow label="Max Multiple" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.maxMultiple} editable={isEditing} onChange={(val) => handleChange('maxMultiple', val)} />

            <div className='flex gap-3 flex-wrap'>
              <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Preferred Arrangement:</h1>
              {buyerData.preferredArrangement.map((arr, i) =>
                isEditing ? (
                  <input key={i} className="border px-2 py-1 rounded-md" value={arr} onChange={e => handleArrayChange('preferredArrangement', i, e.target.value)} />
                ) : (
                  <p key={i} className='mr-2'>{arr},</p>
                )
              )}
            </div>
          </div> */}
        </div>
      
    </div>
  );
};

// Reusable editable row
const EditableRow = ({ label, icon, value, editable, onChange, textarea = false }) => (
  <div className='flex gap-5 items-start flex-wrap my-2'>
    <h1 className='font-semibold flex items-center'>{icon}<span className="ml-1">{label}:</span></h1>
    {editable ? (
      textarea ? (
        <textarea className="border rounded px-2 py-1 w-full md:w-[60%]" value={value} onChange={e => onChange(e.target.value)} />
      ) : (
        <input className="border rounded px-2 py-1" value={value} onChange={e => onChange(e.target.value)} />
      )
    ) : (
      <p>{value}</p>
    )}
  </div>
);

export default ViewProfile;

