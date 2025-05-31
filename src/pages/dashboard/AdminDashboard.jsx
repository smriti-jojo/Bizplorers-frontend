// import React, { useState } from 'react';
// import Sidebar from '../../component/Sidebar';

// export default function AdminDashboard() {
//   const [picklists, setPicklists] = useState({});
//   const [selectedValues, setSelectedValues] = useState({});

//   const handlePicklistChange = (newPicklists) => {
//     setPicklists(newPicklists);
//     // Reset selected values when picklists change
//     const reset = {};
//     Object.keys(newPicklists).forEach((field) => {
//       reset[field] = '';
//     });
//     setSelectedValues(reset);
//   };

//   const handleSelectChange = (field, value) => {
//     setSelectedValues((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="flex h-screen">
//       <Sidebar onPicklistChange={handlePicklistChange} />

//       <main className="flex-grow p-6 overflow-auto">
//         <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//         {Object.keys(picklists).length === 0 ? (
//           <p className="text-gray-600">Upload an Excel file in the sidebar to generate picklists.</p>
//         ) : (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Picklist Fields</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {Object.entries(picklists).map(([field, values]) => (
//                 <div key={field} className="flex flex-col">
//                   <label className="font-medium mb-2">{field}</label>
//                   <select
//                     value={selectedValues[field] || ''}
//                     onChange={(e) => handleSelectChange(field, e.target.value)}
//                     className="p-2 border rounded"
//                   >
//                     <option value="">Select {field}</option>
//                     {values.map((val, idx) => (
//                       <option key={idx} value={val}>
//                         {val}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }
import React from 'react';

export default function MainContent({
  picklists,
  selectedCategory,
  onToggle,
  onDelete,
  onAdd,
  onEdit,
  fileUploaded
}) {
  return (
    <main className="flex-1 p-6 overflow-auto">
      {!fileUploaded ? (
        <h1 className="text-lg text-gray-600">Please upload an Excel sheet to continue.</h1>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>
          <ul className="space-y-2 mb-4">
            {picklists[selectedCategory]?.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded shadow"
              >
                <span>{item.name}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onEdit(selectedCategory, item.id)}
                    className="text-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(selectedCategory, item.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onToggle(selectedCategory, item.id)}
                    className="text-green-500"
                  >
                    {item.active ? 'Active' : 'Inactive'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={() => onAdd(selectedCategory)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add New Value
          </button>
        </>
      )}
    </main>
  );
}

