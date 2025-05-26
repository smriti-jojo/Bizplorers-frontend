
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Menu, X } from "lucide-react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const ViewProfile= () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [brokerData, setBrokerData] = useState({
      firstName: 'abc',
    lastName: 'abc',
   mobile_no:'8765981234',
   address:'Address',
   country:'India',
   state:'UP',
   city:'Noida',
   zip:'201303'
  });

  const handleChange = (key, value) => {
    setBrokerData(prev => ({ ...prev, [key]: value }));
  };

  const handleArrayChange = (key, index, value) => {
    const newArray = [...brokerData[key]];
    newArray[index] = value;
    setBrokerData(prev => ({ ...prev, [key]: newArray }));
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-[5%] py-3 bg-white shadow-md z-10">
        <img alt='logo' width={50} className="object-contain" />
        <div className="hidden md:flex gap-2">
          <button className="text-blue-600 hover:text-slate-400 text-sm md:text-lg font-semibold">Login</button>
          <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">Sign Up</button>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 md:hidden z-20">
            <button className="text-blue-600 hover:text-slate-400 text-sm font-semibold">Login</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm hover:bg-blue-700">Sign Up</button>
          </div>
        )}
      </header>

      <div className='flex justify-center'>
        <div className='flex flex-col border-2 border-slate-500 rounded-md px-[5%] w-[80%] '>
          <div className='flex justify-between w-full mt-[1%]'>
            <div className='text-2xl font-bold'>BROKER DETAILS</div>
            <div>
              <Button variant='contained' onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save' : 'Edit Details'}
              </Button>
            </div>
          </div>

          {/* Personal Details */}
          <div className='flex flex-col text-black my-[2%]'>
            <h1 className='text-xl font-bold'>Company Details</h1>
            <EditableRow label="First Name" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.firstName} editable={isEditing} onChange={(val) => handleChange('firstName', val)} />
            <EditableRow label="Last Name" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.lastName} editable={isEditing} onChange={(val) => handleChange('lastName', val)} />
            <EditableRow label="Address" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.address} editable={isEditing} onChange={(val) => handleChange('address', val)} textarea />
            <EditableRow label="Mobile No" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.mobile_no} editable={isEditing} onChange={(val) => handleChange('mobile_no', val)} />
         <EditableRow label="Country" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.country} editable={isEditing} onChange={(val) => handleChange('country', val)} />
          <EditableRow label="State" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.state} editable={isEditing} onChange={(val) => handleChange('state', val)} />
          <EditableRow label="City" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.city} editable={isEditing} onChange={(val) => handleChange('city', val)} />
        <EditableRow label="Zip Code" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={brokerData.zip} editable={isEditing} onChange={(val) => handleChange('zip', val)} />
        
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

