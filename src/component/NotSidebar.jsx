
// import React, { useState } from 'react';
// import { IconButton, Button } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import AssistantIcon from '@mui/icons-material/Assistant';
// import {
//   ArrowDropDown,
//   ArrowDropUp,
//   GridView as GridViewIcon,
//   LocalShipping as LocalShippingIcon,
//   ShoppingCart as ShoppingCartIcon,
//   Message as MessageIcon,
//   Diversity3 as Diversity3Icon,
//   Info as InfoIcon,
//   Settings as SettingsIcon,
//   Assignment as AssignmentIcon,
//   Paid as PaidIcon,
//   ExpandLess,
//   ExpandMore,
//   East,
//   DataExploration
// } from '@mui/icons-material';
// // import profile_pic from '../images/profile.jpg';
// import * as XLSX from 'xlsx';

// export default function Sidebar({ onPicklistChange }) {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);
//   const [isPaymentMenuOpen, setIsPaymentMenuOpen] = useState(true);
//   const [picklists, setPicklists] = useState({});
//   const[management,setManagement]=useState([]);

//   const toggleSidebar = () => setIsOpen(!isOpen);
//   const MainMenuOpen = () => setIsMainMenuOpen(!isMainMenuOpen);
//   const PaymentMenuOpen = () => setIsPaymentMenuOpen(!isPaymentMenuOpen);

//   const HomeMenu = [
//     { title: 'Dashboard', icon: <GridViewIcon /> },
//     { title: 'Shipments', icon: <LocalShippingIcon /> },
//     { title: 'Orders', icon: <ShoppingCartIcon /> },
//     { title: 'Messages', icon: <MessageIcon /> },
//     { title: 'Customers', icon: <Diversity3Icon /> },
//     { title: 'Help & Support', icon: <InfoIcon /> },
//     { title: 'Settings', icon: <SettingsIcon /> },
//   ];

//   const PaymentMenu = [
//     { title: 'Taxes', icon: <AssignmentIcon /> },
//     { title: 'Payments', icon: <PaidIcon /> },
//   ];

//   // Parse uploaded Excel and generate picklists
//   const handleFile = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       const data = new Uint8Array(evt.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });
//       const firstSheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[firstSheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);

//       // Extract unique values per field (column)
//       const newPicklists = {};
//       const managementLabels=[];
//       if (jsonData.length > 0) {
//         Object.keys(jsonData[0]).forEach((field) => {
// managementLabels.push(field);
//           const values = jsonData.map(row => row[field]).filter(v => v !== undefined && v !== null);
//           newPicklists[field] = Array.from(new Set(values));
//         });
//       }

//       setPicklists(newPicklists);
//       setManagement(managementLabels);
      
//       if (onPicklistChange) {
//         onPicklistChange(newPicklists);
//       }
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
//           onClick={toggleSidebar}
//         />
//       )}

//       <div
//         className={`fixed top-0 left-0 h-full w-[20.5rem] bg-white text-black z-40 transform transition-transform duration-300 ease-in-out overflow-hidden hover:overflow-auto
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//           md:translate-x-0 md:static md:block flex flex-col`}
//       >
//         <div className="px-4 py-3 flex items-center justify-between">
//           <div className="text-xl font-bold hidden md:block">
//             <MoreHorizIcon fontSize="large" />
//           </div>
//           <IconButton onClick={toggleSidebar} className="text-black">
//             <MenuIcon />
//           </IconButton>
//         </div>

    
//         <div className="flex items-center gap-3 p-3 border-2 border-slate-300 shadow-lg rounded-md w-[90%] mx-3 my-3">
//           <img  alt="profile" className="rounded-full w-10" />
//           <div className="flex flex-col">
//             <h1 className="font-semibold">Hi! Admin</h1>
//             {/* <h2 className="text-sm text-slate-500">Free Plan</h2> */}
//           </div>
//           {/* <div className="flex flex-col -space-y-4 mt-1">
//             <ExpandLess fontSize="small" />
//             <ExpandMore fontSize="small" />
//           </div> */}
//         </div>

//         {/* Excel Upload */}
//         <div className="mx-3 my-3">
//             <h1>Please Upload Excel Sheet to Continue</h1>
//           <input
//             type="file"
//             accept=".xlsx,.xls"
//             onChange={handleFile}
//             className="border p-2 rounded w-full cursor-pointer"
//           />
//         </div>

//         {/* Menus */}
//         <div className="flex-grow px-4 overflow-hidden">
//           {/* Main Menu */}
//           <div className="mt-4">
//             <div className="flex justify-between">
//               <div className="font-semibold text-slate-400 text-lg">Management</div>
//               <Button onClick={MainMenuOpen} className="!text-slate-400">
//                 {isMainMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
//               </Button>
//             </div>
//             {isMainMenuOpen && (
//                 management.length>0?(
//               <div className="mt-2 space-y-4">
//                 {/* {HomeMenu.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 hover:bg-blue-100 p-2 rounded cursor-pointer"
//                   >
//                     {item.icon}
//                     <span className="text-md">{item.title}</span>
//                   </div>
//                 ))} */}
                
//                 {management.map((item,index)=>(
// <div key={index}>
//     {item}
//     </div>
//                 ))}
//               </div>
//             ):"No labels found"
//             )}
//           </div>

//           {/* Payment */}
       

//           {/* Dynamic Picklists (in sidebar) */}
//           {/* {Object.keys(picklists).length > 0 && (
//             <div className="mt-6 border-t pt-4">
//               <h3 className="font-semibold text-lg mb-2">Picklist Fields</h3>
//               {Object.entries(picklists).map(([field, values]) => (
//                 <div key={field} className="mb-4">
//                   <label className="block font-semibold mb-1">{field}</label>
//                   <select className="w-full p-2 border rounded">
//                     <option value="">Select {field}</option>
//                     {values.map((val, i) => (
//                       <option key={i} value={val}>
//                         {val}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               ))}
//             </div>
//           )} */}
//         </div>

//       </div>
//     </>
//   );
// }
import React, { useState } from 'react';
import { IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import * as XLSX from 'xlsx';
import pic from '../assests/place.jpg';
import place from '../assests/place.jpg';

export default function Sidebar({ onPicklistChange, onCategorySelect, selectedCategory }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);
  const [management, setManagement] = useState([]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const MainMenuOpen = () => setIsMainMenuOpen(!isMainMenuOpen);

  // Parse uploaded Excel and generate picklists
  const handleFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Extract unique values per field (column)
      const newPicklists = {};
      const managementLabels = [];
      if (jsonData.length > 0) {
        Object.keys(jsonData[0]).forEach((field) => {
          managementLabels.push(field);
          const values = jsonData
            .map(row => row[field])
            .filter(v => v !== undefined && v !== null);
          newPicklists[field] = Array.from(new Set(values)).map((val, i) => ({
            id: i + 1,
            name: val,
            active: true,
          }));
        });
      }

      setManagement(managementLabels);
      onPicklistChange(newPicklists);
      if (managementLabels.length > 0) {
        onCategorySelect(managementLabels[0]);
      }
    };

    reader.readAsArrayBuffer(file);
  };

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
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
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
          <img src={place} />
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
                <div className="mt-2 space-y-4 max-h-[50vh] overflow-auto">
                  {management.map((item, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded cursor-pointer ${
                        selectedCategory === item ? 'bg-blue-200' : 'hover:bg-gray-200'
                      }`}
                      onClick={() => onCategorySelect(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-gray-500">No labels found</p>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
