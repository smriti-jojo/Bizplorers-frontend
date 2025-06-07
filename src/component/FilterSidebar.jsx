// import React from "react";

// const FilterSidebar = ({ onFilterChange }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-[280px]">
//       <h2 className="font-semibold text-lg mb-4">Business</h2>
//       <div className="space-y-4 text-sm">
//         <select className="w-full border rounded p-2" onChange={onFilterChange}>
//           <option>Select Category of business</option>
//         </select>
//         <select className="w-full border rounded p-2" onChange={onFilterChange}>
//           <option>Select Preferred Arrangements</option>
//         </select>
//         <div className="flex gap-2">
//           <input className="w-1/2 border rounded p-2" placeholder="Year" />
//           <input className="w-1/2 border rounded p-2" placeholder="Month" />
//         </div>
//         <div>
//           <input className="w-full border rounded p-2" placeholder="Min Revenue (₹)" />
//           <input className="w-full border rounded p-2 mt-1" placeholder="Max Revenue (₹)" />
//         </div>
//         <div>
//           <input className="w-full border rounded p-2" placeholder="Min Profit (₹)" />
//           <input className="w-full border rounded p-2 mt-1" placeholder="Max Profit (₹)" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;

// import React from "react";

// const FilterSidebar = ({ filters, setFilters }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-[280px]">
//       <h2 className="font-semibold text-lg mb-4">Business</h2>
//       <div className="space-y-4 text-sm">
//         <select
//           name="category"
//           className="w-full border rounded p-2"
//           value={filters.category}
//           onChange={handleChange}
//         >
//           <option value="">Select Category</option>
//           <option value="tech">Tech</option>
//           <option value="education">Education</option>
//         </select>

//         <select
//           name="arrangement"
//           className="w-full border rounded p-2"
//           value={filters.arrangement}
//           onChange={handleChange}
//         >
//           <option value="">Preferred Arrangement</option>
//           <option value="full">Full Buyout</option>
//           <option value="partial">Partial Buyout</option>
//         </select>

//         <input
//           type="number"
//           name="minRevenue"
//           placeholder="Min Revenue (₹)"
//           value={filters.minRevenue}
//           onChange={handleChange}
//           className="w-full border rounded p-2"
//         />
//         <input
//           type="number"
//           name="maxRevenue"
//           placeholder="Max Revenue (₹)"
//           value={filters.maxRevenue}
//           onChange={handleChange}
//           className="w-full border rounded p-2"
//         />
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;
import React, { useState } from "react";

const FilterSidebar = ({ filters, setFilters, onReset }) => {
  const [showFilters, setShowFilters] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full md:w-56">
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

          {/* Category */}
          <label className="block text-sm font-medium mb-1">Select Category of Business</label>
          <select name="category" value={filters.category} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
            <option value="">Select</option>
            <option value="tech">Tech</option>
            <option value="education">Education</option>
          </select>

          {/* Preferred Management */}
          <label className="block text-sm font-medium mb-1">Preferred Management</label>
          <select name="preferredManagement" value={filters.preferredManagement} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="passive">Passive</option>
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
          <label className="block text-sm font-medium mb-1">Current Status</label>
          <select name="status" value={filters.status} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
            <option value="">Select</option>
            <option value="operational">Operational</option>
            <option value="paused">Paused</option>
          </select>

          {/* Country */}
          <label className="block text-sm font-medium mb-1">Select Country</label>
          <select name="country" value={filters.country} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>

          {/* Entity Structure */}
          <label className="block text-sm font-medium mb-1">Entity Structure</label>
          <select name="entityStructure" value={filters.entityStructure} onChange={handleChange} className="w-full p-2 mb-4 border rounded">
            <option value="">Select</option>
            <option value="llp">LLP</option>
            <option value="private">Private Ltd</option>
            <option value="proprietorship">Proprietorship</option>
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

export default FilterSidebar;


