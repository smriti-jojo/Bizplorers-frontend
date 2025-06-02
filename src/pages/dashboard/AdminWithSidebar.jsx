import React, { useState } from "react";
import { IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  ArrowDropDown,
  ArrowDropUp,
  GridView as GridViewIcon,
  LocalShipping as LocalShippingIcon,
  ShoppingCart as ShoppingCartIcon,
  Message as MessageIcon,
  Diversity3 as Diversity3Icon,
  Info as InfoIcon,
  Settings as SettingsIcon,
  Assignment as AssignmentIcon,
  Paid as PaidIcon,
} from "@mui/icons-material";
import * as XLSX from "xlsx";
import AdminUserTable from "../../component/AdminTable";
import pic from "../../assests/pic.jpg";
import axios from "axios";
import { useEffect } from "react";

function Sidebar({ picklists, setPicklists, management, setManagement, selectedCategory, setSelectedCategory }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);
    const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const MainMenuOpen = () => setIsMainMenuOpen(!isMainMenuOpen);
    const AdminMenuOpen = () => setIsAdminMenuOpen(!isAdminMenuOpen);

  // const handleFile = (event) => {
  //   const file = event.target.files[0];
  //   if (!file) return;

  //   const reader = new FileReader();
  //   reader.onload = (evt) => {
  //     const data = new Uint8Array(evt.target.result);
  //     const workbook = XLSX.read(data, { type: "array" });
  //     const firstSheetName = workbook.SheetNames[0];
  //     const worksheet = workbook.Sheets[firstSheetName];
  //     const jsonData = XLSX.utils.sheet_to_json(worksheet);

  //     const newPicklists = {};
  //     const managementLabels = [];

  //     if (jsonData.length > 0) {
  //       Object.keys(jsonData[0]).forEach((field) => {
  //         managementLabels.push(field);
  //         const values = jsonData
  //           .map((row) => row[field])
  //           .filter((v) => v !== undefined && v !== null);
  //         // Create array of objects with id, name, active flag for each unique value
  //         newPicklists[field] = Array.from(new Set(values)).map((val, idx) => ({
  //           id: idx + 1,
  //           name: val,
  //           active: true,
  //         }));
  //       });
  //     }

  //     setPicklists(newPicklists);
  //     setManagement(managementLabels);
  //     setSelectedCategory(managementLabels[0] || "");
  //   };

  //   reader.readAsArrayBuffer(file);
  // };

  const token=localStorage.getItem("token");
//   const handleFile = async (event) => {
//   const file = event.target.files[0];
//   if (!file) return;

//   const reader = new FileReader();
//   reader.onload = async (evt) => {
//     const data = new Uint8Array(evt.target.result);
//     const workbook = XLSX.read(data, { type: "array" });
//     const firstSheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[firstSheetName];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet);

//     const picklists = {};

//     if (jsonData.length > 0) {
//       Object.keys(jsonData[0]).forEach((field) => {
//         const values = jsonData
//           .map((row) => row[field])
//           .filter((v) => v !== undefined && v !== null);
//         picklists[field] = Array.from(new Set(values)); // Unique values only
//       });
//     }

//     console.log("picklist",picklists);
//     // 🔥 Send to backend
//     try {
//     //   const response = await axios.post("https://bizplorers-backend.onrender.com/api/picklist/multiple_add_value", {
//     //     picklists,
//     //   },
//     // );
//      const response = await fetch('https://bizplorers-backend.onrender.com/api/picklist/multiple_add_value', {
//         method: 'POST',
//         body: JSON.stringify({picklists}), 
//         headers: { 'Content-Type': 'application/json' ,
//         'Authorization': `Bearer ${token}`,
//         },
//       });

//       console.log("Picklists added:", response.data);
//       const result = await response.json();
//       // const result=response.data;
//       if (response.ok) {
//         alert("Picklists added successfully:", result);
//         // Show success toast or update UI
//       } else {
//         console.error("Error adding picklists:", result.message);
//       }
//     } catch (error) {
//       console.error("Request failed:", error);
//     }
//   };

//   reader.readAsArrayBuffer(file);
// };

const handleFile = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = async (evt) => {
    const data = new Uint8Array(evt.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const picklistsForBackend = {};
    const newPicklistsForFrontend = {};
    const managementLabels = [];

    if (jsonData.length > 0) {
      Object.keys(jsonData[0]).forEach((field) => {
        managementLabels.push(field);

        const values = jsonData
          .map((row) => row[field])
          .filter((v) => v !== undefined && v !== null);

        const uniqueValues = Array.from(new Set(values));

        // ✅ For frontend
        newPicklistsForFrontend[field] = uniqueValues.map((val, idx) => ({
          id: idx + 1,
          name: val,
          active: true,
        }));

        // ✅ For backend
        picklistsForBackend[field] = uniqueValues;
      });
    }

    // ✅ Send to backend
    try {
      const response = await fetch(
        "https://bizplorers-backend.onrender.com/api/picklist/multiple_add_value",
        {
          method: "POST",
          body: JSON.stringify({ picklists: picklistsForBackend }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // make sure token is defined
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Picklists added successfully:", result);
        alert("Picklists uploaded successfully!");
      } else {
        console.error("Error adding picklists:", result.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }

    // ✅ Set frontend state
    setPicklists(newPicklistsForFrontend);
    setManagement(managementLabels);
    setSelectedCategory(managementLabels[0] || "");
  };

  reader.readAsArrayBuffer(file);
};

  const AdminData=[{
    name:'User',
    component:<AdminUserTable/>
  },{
    name:'Role',
    component:<AdminUserTable/>
  }]

  useEffect(() => {
  const fetchPicklists = async () => {
    try {
      const response = await axios.get("https://bizplorers-backend.onrender.com/api/picklist/get_all", {
        headers: { Authorization: `Bearer ${token}` } // if protected
      });

      const backendData = response.data.data;

      setPicklists(backendData);
      setManagement(Object.keys(backendData));
      setSelectedCategory(Object.keys(backendData)[0] || "");
    } catch (err) {
      console.error("Failed to load picklists:", err);
    }
  };

  fetchPicklists();
}, []);


  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[20.5rem] bg-white text-black z-40 transform transition-transform duration-300 ease-in-out overflow-hidden hover:overflow-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block flex flex-col`}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold hidden md:block">
            <MoreHorizIcon fontSize="large" />
          </div>
          <IconButton onClick={toggleSidebar} className="text-black">
            <MenuIcon />
          </IconButton>
        </div>

        <div className="flex items-center gap-3 p-3 border-2 border-slate-300 shadow-lg rounded-md w-[90%] mx-3 my-3">
          <img  src={pic} alt="profile" className="rounded-full w-10" />
          <div className="flex flex-col">
            <h1 className="font-semibold">Hi! Admin</h1>
          </div>
        </div>

        {/* Excel Upload */}
        <div className="mx-3 my-3">
          <h1>Please Upload Excel Sheet to Continue</h1>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFile}
            className="border p-2 rounded w-full cursor-pointer"
          />
        </div>

        {/**Admin */}
        <div className="px-[5%]">
             <div className="flex justify-between">
              <div className="font-semibold text-slate-400 text-lg">Admin</div>
              <Button onClick={AdminMenuOpen} className="!text-slate-400">
                {isAdminMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
              </Button>
              </div>
              {isAdminMenuOpen && (
                <div className="mt-2 space-y-2 max-h-60 overflow-auto px-2">
                { ['User','Role'].map((item,index)=>(
                    <div 
                      onClick={() => setSelectedCategory(item)}
                      className={`cursor-pointer p-2 rounded ${
                        selectedCategory=== item ? "bg-blue-200" : "hover:bg-gray-200"
                      }`}>
{item}
                    </div>
                ))}
                       
            
            </div>
              )}
        
</div>
        {/* Management Menu */}
        <div className="flex-grow px-4 overflow-hidden">
          <div className="mt-4">
            <div className="flex justify-between">
              <div className="font-semibold text-slate-400 text-lg">Management</div>
              <Button onClick={MainMenuOpen} className="!text-slate-400">
                {isMainMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
              </Button>
            </div>

            {isMainMenuOpen && (
              management.length > 0 ? (
                <div className="mt-2 space-y-2 max-h-60 overflow-auto">
                  {management.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedCategory(item)}
                      className={`cursor-pointer p-2 rounded ${
                        selectedCategory === item ? "bg-blue-200" : "hover:bg-gray-200"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : (
                <div>No labels found</div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// function MainContent({ picklists, setPicklists, selectedCategory }) {
//   const handleToggle = (category, id) => {
//     setPicklists((prev) => ({
//       ...prev,
//       [category]: prev[category].map((item) =>
//         item.id === id ? { ...item, active: !item.active } : item
//       ),
//     }));
//   };

//   const handleDelete = (category, id) => {
//     setPicklists((prev) => ({
//       ...prev,
//       [category]: prev[category].filter((item) => item.id !== id),
//     }));
//   };

//   const handleAdd = (category) => {
//     const newItem = { id: Date.now(), name: "New Value", active: true };
//     setPicklists((prev) => ({
//       ...prev,
//       [category]: [...prev[category], newItem],
//     }));
//   };

//   const handleEdit = (category, id) => {
//     const newName = prompt("Enter new name:");
//     if (newName) {
//       setPicklists((prev) => ({
//         ...prev,
//         [category]: prev[category].map((item) =>
//           item.id === id ? { ...item, name: newName } : item
//         ),
//       }));
//     }
//   };

//    if(!picklists[selectedCategory] && selectedCategory=='User' ){
// return(
//     <AdminUserTable/>
// )

//   if (!selectedCategory && !picklists[selectedCategory]) {
//     return (
//       <main className="flex-1 p-6 overflow-auto">
//         <h1 className="text-lg text-gray-600">Please upload an Excel sheet and select a category.</h1>
//       </main>
//     );
//   }

 
//   }

//   return (
//     <main className="flex-1 p-6 overflow-auto">
//       <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>
//       <ul className="space-y-2 mb-4">
//         {picklists[selectedCategory]?.map((item) => (
//           <li
//             key={item.id}
//             className="flex justify-between items-center bg-gray-50 p-3 rounded shadow"
//           >
//             <span>{item.name}</span>
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={() => handleEdit(selectedCategory, item.id)}
//                 className="text-blue-500"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(selectedCategory, item.id)}
//                 className="text-red-500"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => handleToggle(selectedCategory, item.id)}
//                 className="text-green-500"
//               >
//                 {item.active ? "Active" : "Inactive"}
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={() => handleAdd(selectedCategory)}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Add New Value
//       </button>
//     </main>
//   );
// }


// export default function MainContent({ picklists, setPicklists, selectedCategory }) {
//   const handleToggle = (category, id) => {
//     setPicklists((prev) => ({
//       ...prev,
//       [category]: prev[category].map((item) =>
//         item.id === id ? { ...item, active: !item.active } : item
//       ),
//     }));
//   };

//   const handleDelete = (category, id) => {
//     setPicklists((prev) => ({
//       ...prev,
//       [category]: prev[category].filter((item) => item.id !== id),
//     }));
//   };

//   const handleAdd = (category) => {
//     const newItem = { id: Date.now(), name: "New Value", active: true };
//     setPicklists((prev) => ({
//       ...prev,
//       [category]: [...prev[category], newItem],
//     }));
//   };

//   const handleEdit = (category, id) => {
//     const newName = prompt("Enter new name:");
//     if (newName) {
//       setPicklists((prev) => ({
//         ...prev,
//         [category]: prev[category].map((item) =>
//           item.id === id ? { ...item, name: newName } : item
//         ),
//       }));
//     }
//   };

//   if (!selectedCategory || !picklists[selectedCategory]) {
//     return (
//       <main className="flex-1 p-6 overflow-auto">
//         <h1 className="text-lg text-gray-600">
//           Please upload an Excel sheet and select a category.
//         </h1>
//       </main>
//     );
//   }

//   return (
//     <main className="flex-1 p-6 overflow-auto">
//       <UserTable
//         items={picklists[selectedCategory]}
//         category={selectedCategory}
//         onAdd={handleAdd}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//         onToggle={handleToggle}
//       />
//     </main>
//   );
// }

function MainContent({ picklists, setPicklists, selectedCategory }) {
  const handleToggle = (category, id) => {
    setPicklists((prev) => ({
      ...prev,
      [category]: prev[category].map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      ),
    }));
  };

  const handleDelete = (category, id) => {
    setPicklists((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item.id !== id),
    }));
  };

  const handleAdd = (category) => {
    const newItem = { id: Date.now(), name: "New Value", active: true };
    setPicklists((prev) => ({
      ...prev,
      [category]: [...prev[category], newItem],
    }));
  };

  const handleEdit = (category, id) => {
    const newName = prompt("Enter new name:");
    if (newName) {
      setPicklists((prev) => ({
        ...prev,
        [category]: prev[category].map((item) =>
          item.id === id ? { ...item, name: newName } : item
        ),
      }));
    }
  };

  if (selectedCategory === "User" && !picklists[selectedCategory]) {
    return <AdminUserTable />;
  }

  if (!selectedCategory || !picklists[selectedCategory]) {
    return (
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-lg text-gray-600">
          Please upload an Excel sheet and select a category.
        </h1>
      </main>
    );
  }

  return (
    <main className="flex-1 p-6 overflow-auto">
      <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {picklists[selectedCategory]?.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">
                  {item.active ? "Active" : "Inactive"}
                </td>
                <td className="py-2 px-4 space-x-2">
                  <button
                    onClick={() => handleEdit(selectedCategory, item.id)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(selectedCategory, item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleToggle(selectedCategory, item.id)}
                    className="text-green-600 hover:underline"
                  >
                    Toggle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        // onClick={() => handleAdd(selectedCategory)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add New Value
      </button>
    </main>
  );
}



export default function AdminWithSidebar() {
  const [picklists, setPicklists] = useState({});
  const [management, setManagement] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="flex h-screen">
      <Sidebar
        picklists={picklists}
        setPicklists={setPicklists}
        management={management}
        setManagement={setManagement}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MainContent
        picklists={picklists}
        setPicklists={setPicklists}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
