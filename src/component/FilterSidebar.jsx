
import React, { useState } from "react";
import { useEffect } from "react";

const SellerFilterSidebar = ({ filters, setFilters, onReset }) => {
  const [showFilters, setShowFilters] = useState(true);
  const[picklistData,setpicklistData]=useState([]);

  const picklists = localStorage.getItem("picklists");
  const parsedPicklists = picklists ? JSON.parse(picklists) : null;
  console.log("parsedPicklists-----", parsedPicklists);
  console.log("parsedPicklistsbuyerrr-----", parsedPicklists[2]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
useEffect(() => {
    const SavedData = JSON.parse(localStorage.getItem("picklists"));
    console.log("localstorage--data", SavedData);
    if (SavedData?.data) {
      setpicklistData(SavedData.data);
    }
  }, []); 

  console.log("savedpicklistdata---",picklistData);

  return (
    <div className="w-full md:w-60">
      {/* Mobile Toggle */}
      <div className="md:hidden mb-4">
        <button
          className="bg-gray-200 w-full p-2 rounded text-sm font-medium"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Business Filters</h2>
    
          <label className="block text-sm font-medium mb-1">Select Category of Business</label>
<select name="category" value={filters.category} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
  <option value="">All</option>
  {parsedPicklists[0].values.map((item, index) => (
    <option key={index} value={item.value}>{item.value}</option>
  ))}
 
</select>


          {/* Preferred Management */}
          <label className="block text-sm font-medium mb-1">Preferred Management</label>
          <select name="preferredManagement" value={filters.preferredManagement} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
            <option value="">All</option>
            {/* <option value="active">Active</option>
            <option value="passive">Passive</option> */}
            {parsedPicklists[5].values.map((item, index) => (
    <option key={index} value={item.value}>{item.value}</option>
  ))}
 
          </select>

          {/* Period in Business */}
          <label className="block text-sm font-medium mb-1">Select Period in Business</label>
          <div className="flex gap-2 mb-3">
            <input type="number" name="year" value={filters.year} onChange={handleChange} placeholder="Year" className="w-1/2 p-2 border rounded" />
            <input type="number" name="month" value={filters.month} onChange={handleChange} placeholder="Month" className="w-1/2 p-2 border rounded" />
          </div>

          {/* Revenue */}
          <label className="block text-sm font-medium mb-1">12 Months Revenue (₹)</label>
          <div className="flex gap-2 mb-3">
            <input type="number" name="trailing12months" value={filters.trailing12months} onChange={handleChange} placeholder="Min" className="w-full p-2 border rounded" />
           
          </div>

          {/* Profit */}
          <label className="block text-sm font-medium mb-1">12 Months Profit (₹)</label>
          <div className="flex gap-2 mb-3">
            <input type="number" name="NETtrailing12months" value={filters.NETtrailing12months} onChange={handleChange} placeholder="Min" className="w-full p-2 border rounded" />
           
          </div>

          {/* Asking Price */}
          <label className="block text-sm font-medium mb-1">Asking Price (₹)</label>
          <div className="flex gap-2 mb-3">
            <input type="number" name="minPrice" value={filters.minPrice} onChange={handleChange} placeholder="Min" className="w-1/2 p-2 border rounded" />
            <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleChange} placeholder="Max" className="w-1/2 p-2 border rounded" />
          </div>

          {/* Status */}
          {/* <label className="block text-sm font-medium mb-1">Current Status</label>
          <select name="status" value={filters.status} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
            <option value="">Select</option>
            <option value="operational">Operational</option>
            <option value="paused">Paused</option>
          </select> */}

          {/* Country */}
          <label className="block text-sm font-medium mb-1">Select Country</label>
          <select name="country" value={filters.country} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
            <option value="">All</option>
            {parsedPicklists[2].values.map((item,index)=>(
               <option  key={index} value={item.value}>{item.value}</option>
            ))}
            {/* <option value="india">India</option>
            <option value="usa">USA</option> */}
          </select>

          {/* Entity Structure */}
          <label className="block text-sm font-medium mb-1">Entity Structure</label>
          {/**'partnership, LLP,Private LTd, Public Ltd */}
         
          <select name="entityStructure" value={filters.entityStructure} onChange={handleChange} className="w-full p-2 mb-4 border rounded">
            <option value="">All</option>
       {parsedPicklists[4].values.map((item,index)=>(
               <option  key={index} value={item.value}>{item.value}</option>
            ))}
           
          </select>

          {/* Buttons */}
          <div className="flex justify-end">
            <button onClick={onReset} className="w-full border border-gray-500 px-4 py-2 rounded text-sm text-white bg-blue-600 hover:bg-blue-700">
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerFilterSidebar;


