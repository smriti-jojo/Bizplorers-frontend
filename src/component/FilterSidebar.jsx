
import React, { useState } from "react";
import { useEffect } from "react";

const SellerFilterSidebar = ({ filters, setFilters, onReset }) => {
  const [showFilters, setShowFilters] = useState(true);
  const[picklistData,setpicklistData]=useState([]);

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
  {[
    "E-commerce",
    "Offline Retail",
    "Fintech",
    "Edtech",
    "Saas",
    "Education & training",
    "Restaurant/café",
    "Mobile App",
  ].map((item, index) => (
    <option key={index} value={item}>{item}</option>
  ))}
 
</select>


          {/* Preferred Management */}
          <label className="block text-sm font-medium mb-1">Preferred Management</label>
          <select name="preferredManagement" value={filters.preferredManagement} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
            <option value="">All</option>
            {/* <option value="active">Active</option>
            <option value="passive">Passive</option> */}
            {[
    "Cash", "Stock", "Royalty","Acquihire"
  ].map((item, index) => (
    <option key={index} value={item}>{item}</option>
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
            <input type="number" name="minRevenue" value={filters.minRevenue} onChange={handleChange} placeholder="Min" className="w-1/2 p-2 border rounded" />
            <input type="number" name="maxRevenue" value={filters.maxRevenue} onChange={handleChange} placeholder="Max" className="w-1/2 p-2 border rounded" />
          </div>

          {/* Profit */}
          <label className="block text-sm font-medium mb-1">12 Months Profit (₹)</label>
          <div className="flex gap-2 mb-3">
            <input type="number" name="minProfit" value={filters.minProfit} onChange={handleChange} placeholder="Min" className="w-1/2 p-2 border rounded" />
            <input type="number" name="maxProfit" value={filters.maxProfit} onChange={handleChange} placeholder="Max" className="w-1/2 p-2 border rounded" />
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
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>

          {/* Entity Structure */}
          <label className="block text-sm font-medium mb-1">Entity Structure</label>
          {/**'partnership, LLP,Private LTd, Public Ltd */}
         
          <select name="entityStructure" value={filters.entityStructure} onChange={handleChange} className="w-full p-2 mb-4 border rounded">
            <option value="">All</option>
       {["PartnerShip", "LLP", "Private Ltd", "Public Ltd"]
  .map((item, index) => (
    <option key={index} value={item}>{item}</option>
  ))}
           
          </select>

          {/* Buttons */}
          <div className="flex justify-end">
            <button onClick={onReset} className="border border-gray-500 px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-100">
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerFilterSidebar;


