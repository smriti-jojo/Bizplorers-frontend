
import React, { useState,useEffect } from 'react';
import { Button } from '@mui/material';
import { Menu, X } from "lucide-react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SellerDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [sellerData, setSellerData] = useState({
   company_name:'',
   website_url:'',
   CIN:'',
   company_linkedin:'',
   description_business:'',
    numcofounder:'',
   cofounder:'',
   teamSize:'',
   numLocation:'',
   year:'',
   month:'',
   cofounder_linkedin:'',
    businessCategory:[],
    businessLocation:'',
    entityStructure:[],
    country:'',
    state:[],
     city:[],
     status:'',
     lastFinancialYear:'',
     prevFinancialYear:'',
     prePrevFinancialYear:'',
     trail12months:'',
     lastmonth:'',
     prevMonth:'',
     prePrevMonth:'',
     PATlastFinancialYear:'',
     PATprevFinancialYear:'',
     PATprePrevFinancialYear:'',
     PATtrailing12months:'',
     PATlastmonth:'',
     PATprevMonth:'',
     PATprePrevMonth:'',
     EBITDA:'',
     OCFlastFinancialYear:'',
     assestDesc:'',
     equity:'',
     debt:'',
     OCFprevFinancialYear:'',
     OCFprePrevFinancialYear:'',
     salereason:'',
     askingPrice:'',
     preferredArrangement:[]
  });

  const EditableRow = ({ label, icon, value, editable, onChange, textarea }) => (
  <div className='flex items-start gap-2 my-2'>
    <span className='font-semibold flex items-center'>{icon}{label}:</span>
    {editable ? (
      textarea ? (
        <textarea className='border p-2 rounded-md w-full' value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input className='border p-2 rounded-md w-full' value={value} onChange={(e) => onChange(e.target.value)} />
      )
    ) : (
      <span>{value}</span>
    )}
  </div>
);
  const handleChange = (key, value) => {
    setSellerData(prev => ({ ...prev, [key]: value }));
  };

  const handleArrayChange = (key, index, value) => {
    const newArray = [...sellerData[key]];
    newArray[index] = value;
    setSellerData(prev => ({ ...prev, [key]: newArray }));
  };

  const notifySuccess = (msg = "Data Updated Successfully!") => {
       toast.success(msg, {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         pauseOnHover: true,
         draggable: true,
         theme: "colored",
       });
     };

  const token = localStorage.getItem('token');
    const fetchSellerData = async () => {
    try {
      const response = await fetch('https://bizplorers-backend.onrender.com/api/seller/get_detail', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      
      setSellerData(data);
    } catch (error) {
      console.error(error);
      alert('Getting Data failed.');
    }
  };

  const updateData = async () => {
    try {
      const response = await fetch('https://bizplorers-backend.onrender.com/api/seller/update_detail', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(sellerData),
      });

      if (!response.ok) throw new Error('Update failed');

      const updated = await response.json();
      notifySuccess();
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
      fetchSellerData();
    }, []);
  
    const handleLogout=()=>{
    localStorage.removeItem('token');
    window.location.href = '/login'; // or your login route
  };

  return (
    <div>
      {/* <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-[5%] py-3 bg-white shadow-md z-10">
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
      </header> */}
         <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-[5%] py-3 bg-white shadow-md z-10">
        <img alt='logo' width={50} className="object-contain" />
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/homepage" className="hover:text-blue-600 text-xl">About Us</Link>
          <Link to="/dashboard" className="hover:text-blue-600 text-xl">Services</Link>
          <Link to="/ask-ai" className="hover:text-blue-600 text-xl">Seller</Link>
          <Link to="/homepage" className="hover:text-blue-600 text-xl">Buyer</Link>
          <Link to="/homepage" className="hover:text-blue-600 text-xl">How It Works?</Link>
        </nav>
        <div className="hidden md:flex gap-2">
          {token? (<button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogout}>Log Out</button>
       ) :  (<button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">Log In</button>)}
          <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">Post A Business</button>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 md:hidden z-20">
            <button className="text-blue-600 hover:text-slate-400 text-sm font-semibold">Log In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm hover:bg-blue-700">Post A Business</button>
          </div>
        )}
      </header>

      <div className='flex justify-center'>
        <div className='flex flex-col border-2 border-slate-500 rounded-md mt-[7%] px-[5%] w-[80%] '>
          <div className='flex justify-between w-full mt-[2%]'>
            <div className='text-2xl font-bold'>SELLER DETAILS</div>
            <div>
              <Button variant='contained' onClick={handleEditToggle}>
                {isEditing ? 'Save' : 'Edit Details'}
              </Button>
            </div>
          </div>

          {/* Personal Details */}
          <div className='flex flex-col text-black my-[2%]'>
            <h1 className='text-xl font-bold'>Company Details</h1>
            <EditableRow label="Company Name" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.company_name} editable={isEditing} onChange={(val) => handleChange('company_name', val)} />
            <EditableRow label="Entity Structure" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.entityStructure} editable={isEditing} onChange={(val) => handleChange('entityStructure', val)} />
            <EditableRow label="Business Category" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.businessCategory} editable={isEditing} onChange={(val) => handleChange('businessCategory', val)} textarea />
            <EditableRow label="Website Url" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.website_url} editable={isEditing} onChange={(val) => handleChange('website_url', val)} />
         <EditableRow label="CIN" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.CIN} editable={isEditing} onChange={(val) => handleChange('CIN', val)} />
          <EditableRow label="Company Linkedin" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.company_linkedin} editable={isEditing} onChange={(val) => handleChange('company_linkedin', val)} />
          <EditableRow label="Co-founder Linkedin" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.cofounder_linkedin} editable={isEditing} onChange={(val) => handleChange('cofounder_linkedin', val)} />
        <EditableRow label="Description about Business" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.description_business} editable={isEditing} onChange={(val) => handleChange('description_business', val)} />
          <EditableRow label="Country" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.country} editable={isEditing} onChange={(val) => handleChange('country', val)} />
          <EditableRow label="State" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.state} editable={isEditing} onChange={(val) => handleChange('state', val)} />
          <EditableRow label="City" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.city} editable={isEditing} onChange={(val) => handleChange('city', val)} />
          <EditableRow label="Number of Co-founder" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.numcofounder} editable={isEditing} onChange={(val) => handleChange('numcofounder', val)} />
         <EditableRow label="Team Size" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.teamSize} editable={isEditing} onChange={(val) => handleChange('teamSize', val)} />
         <EditableRow label="Number of Locations" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.numLocation} editable={isEditing} onChange={(val) => handleChange('numLocation', val)} />
         <EditableRow label="Commencement of Business Year" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.year} editable={isEditing} onChange={(val) => handleChange('year', val)} />
         <EditableRow label="Commencement of Business Month" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.month} editable={isEditing} onChange={(val) => handleChange('month', val)} />
         <EditableRow label="Status" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.status} editable={isEditing} onChange={(val) => handleChange('status', val)} />
         {/* <EditableRow label="Website Url" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.website_url} editable={isEditing} onChange={(val) => handleChange('website_url', val)} />
         <EditableRow label="Website Url" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.website_url} editable={isEditing} onChange={(val) => handleChange('website_url', val)} /> */}
        
          </div>

          {/* Preferences Details */}
          <div className='flex flex-col text-black my-[2%]'>
            <h1 className='text-xl font-bold'>Financial Details</h1>
            {/* <div className='flex gap-3 flex-wrap'>
              <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Business Categories:</h1>
              {buyerData.businessCategory.map((cat, i) =>
                isEditing ? (
                  <input key={i} className="border px-2 py-1 rounded-md" value={cat} onChange={e => handleArrayChange('businessCategory', i, e.target.value)} />
                ) : (
                  <p key={i} className='mr-2'>{cat},</p>
                )
              )}
            </div> */}

            <EditableRow label="Last Financial year(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.lastFinancialYear} editable={isEditing} onChange={(val) => handleChange('lastFinancialYear', val)} />
            <EditableRow label="Previous Financial Year(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.prevFinancialYear} editable={isEditing} onChange={(val) => handleChange('prevFinancialYear', val)} />
            <EditableRow label="Pre-previous Financial Year(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.prePrevFinancialYear} editable={isEditing} onChange={(val) => handleChange('prePrevFinancialYear', val)} />
 <EditableRow label="Trailing 12 months(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.trail12months} editable={isEditing} onChange={(val) => handleChange('trail12months', val)} />
            <EditableRow label="Last month(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.lastmonth} editable={isEditing} onChange={(val) => handleChange('lastmonth', val)} />
 <EditableRow label="Previous month(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.prevMonth} editable={isEditing} onChange={(val) => handleChange('prevMonth', val)} />
           <EditableRow label="Pre-previous month(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.prePrevMonth} editable={isEditing} onChange={(val) => handleChange('prePrevMonth', val)} />
  <h1 className="text-2xl font-semibold ">PROFITS(PAT)</h1>
 
 <EditableRow label="Last Financial year(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.PATlastFinancialYear} editable={isEditing} onChange={(val) => handleChange('PATlastFinancialYear', val)} />
  <EditableRow label="Previous Financial Year(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.PATprevFinancialYear} editable={isEditing} onChange={(val) => handleChange('PATprevFinancialYear', val)} />
   <EditableRow label="Pre-previous Financial Year(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.PATprePrevFinancialYear} editable={isEditing} onChange={(val) => handleChange('PATprePrevFinancialYear', val)} />
    <EditableRow label="Trailing 12 months(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.PATtrailing12months} editable={isEditing} onChange={(val) => handleChange('PATtrailing12months', val)} />
     <EditableRow label="Last month(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.PATlastmonth} editable={isEditing} onChange={(val) => handleChange('PATlastmonth', val)} />
      <EditableRow label="Previous month(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.PATprevMonth} editable={isEditing} onChange={(val) => handleChange('PATprevMonth', val)} />
       <EditableRow label="Pre-previous month(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.PATprePrevMonth} editable={isEditing} onChange={(val) => handleChange('PATprePrevMonth', val)} />
        <EditableRow label="EBITDA Margin (current) %" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.EBITDA} editable={isEditing} onChange={(val) => handleChange('EBITDA', val)} />
 <h1 className="text-2xl font-semibold ">OPERATING CASH FLOW</h1>
 
 <EditableRow label="Last Financial year(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.OCFlastFinancialYear} editable={isEditing} onChange={(val) => handleChange('OCFlastFinancialYear', val)} />
  <EditableRow label="Previous Financial Year(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.OCFprevFinancialYear} editable={isEditing} onChange={(val) => handleChange('OCFprevFinancialYear', val)} />
   <EditableRow label="Pre-previous Financial Year(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.OCFprePrevFinancialYear} editable={isEditing} onChange={(val) => handleChange('OCFprePrevFinancialYear', val)} />
     <h1 className="text-2xl font-semibold pt-[5%]">ASSESTS</h1>
   
    <EditableRow label="Description of Key Assest/IP" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.assestDesc} editable={isEditing} onChange={(val) => handleChange('assestDesc', val)} />
      <h1 className="text-2xl font-semibold pt-[5%]">Sources Of Funds</h1>
     <EditableRow label="Equity(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.equity} editable={isEditing} onChange={(val) => handleChange('equity', val)} />
      <EditableRow label="Debt(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.debt} editable={isEditing} onChange={(val) => handleChange('debt', val)} />
        <h1 className="text-2xl font-semibold ">TRANSACTION DETAILS</h1>
       <EditableRow label="Reason For Sale" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.salereason} editable={isEditing} onChange={(val) => handleChange('salereason', val)} />
        <EditableRow label="Asking Price(Rs)" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.askingPrice} editable={isEditing} onChange={(val) => handleChange('askingPrice', val)} />
         {/* <EditableRow label="Preferred Arrangement" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.preferredArrangement} editable={isEditing} onChange={(val) => handleChange('preferredArrangement', val)} /> */}
          <div className='flex gap-3 flex-wrap'>
              <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Preferred Arrangement:</h1>
              {sellerData.preferredArrangement.map((arr, i) =>
                isEditing ? (
                  <input key={i} className="border px-2 py-1 rounded-md" value={arr} onChange={e => handleArrayChange('preferredArrangement', i, e.target.value)} />
                ) : (
                  <p key={i} className='mr-2'>{arr},</p>
                )
              )}
            </div>


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

export default SellerDashboard;

