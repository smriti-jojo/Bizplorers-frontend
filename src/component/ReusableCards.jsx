// import React from "react";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import StarIcon from "@mui/icons-material/Star";
// import LocationPinIcon from "@mui/icons-material/LocationOn"; // corrected
// import InfoIcon from "@mui/icons-material/Info";
// import { Button } from "@mui/material";
// import { Check } from "lucide-react";
// import { useState } from "react";
// import SendInterestButton from "../component/SendInterestButton";

// const ReusableCards = ({
//   description_business,
//   company_name,
//   headline,
//   city,
//   userId,
//   askingPrice,
//   last12monthsSales,
//   profit12months,
//   type,
//   location,
//   onSelect,
//   isSelected,
//   data,
//   brokerId,
// }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [showSellerPopup, setshowSellerPopup] = useState(false);
//   const [openSection, setOpenSection] = useState("personal");


//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"));
//   const senderId = user?.id;

//   const isTruthy = (val) => {
//     if (typeof val === "boolean") return val;
//     if (typeof val === "string") {
//       return ["true", "yes", "1"].includes(val.trim().toLowerCase());
//     }
//     return false;
//   };

//   const CollapsibleSection = ({ title, children, isOpen, onToggle }) => (
//   <div className="border-t pt-4">
//     <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
//       <h2 className="text-xl font-bold">{title}</h2>
//       <span>{isOpen ? "▲" : "▼"}</span>
//     </div>
//     {isOpen && <div className="mt-4">{children}</div>}
//   </div>
// );


//   return (
//     <>
//       {type === "buyer" ? (
//         <div className="relative ">
//           {/* {token && user?.role === "broker" && location === "dashboard" && (
//             <button
//               className={`absolute -top-3 -left-3 p-2 rounded-full border ${
//                 isSelected ? "bg-green-500 text-white" : "bg-gray-200"
//               }`}
//               onClick={onSelect}
//             >
//               <Check size={20} />
//             </button>
//           )} */}

//           {/* {token &&
//             user?.role === "broker" &&
//             location === "dashboard" &&
//             data?.brokerId != null && (
//               <div className="absolute right-0 -top-3 text-green-600 px-1 bg-yellow-100">
//                 Assigned Buyer
//               </div>
//             )} */}

//           <div className="w-[350px] px-5 py-5 min-h-[420px] border-2 border-slate-300 rounded-md p-4 bg-white shadow-lg shadow-slate-400">
//             <div className="my-2 text-lg text-blue-500 font-semibold">
//               {data?.designation || "Newly Established Restaurant for Sale"}
//             </div>

//             <div className="w-full">
//               <div className="line-clamp-4 w-full min-h-[96px] text-justify">
//                 {data?.description ||
//                   "A successful business thrives by identifying a clear...."}
//               </div>
//             </div>

//             <div className="py-2">
//               <span>
//                 Interested
//                 <LocationPinIcon
//                   fontSize="small"
//                   className="mr-1 text-red-500"
//                 />
//                 {data?.businesslocationCities?.join(", ") || "N/A"}
//               </span>
//             </div>

//             <div className="p-4 bg-slate-100 space-y-2 my-3">
//               <div className="flex justify-between text-[15px]">
//                 Open to Pre-Revenue
//                 <span>{isTruthy(data?.openToPreRevenue) ? "Yes" : "No"}</span>
//               </div>

//               <div className="flex justify-between text-[15px]">
//                 Open to Pre-Breakeven
//                 <span>
//                   {isTruthy(data?.openToPreBreakeven) ? "Yes" : "No"}
//                 </span>
//               </div>
//             </div>

//             <div className="flex justify-between py-2 pb-4">
//               <div className="w-[60%]">
//                 <h1>
//                   Ticket Size <InfoIcon fontSize="small" />
//                 </h1>
//                 <div className="flex items-end gap-1 text-blue-700">
//                   <p className="text-[10px]">INR</p>
//                   <h1 className="text-xl font-bold">
//                     {data?.ticketSizeMin && data?.ticketSizeMax
//                       ? `${data?.ticketSizeMin} - ${data?.ticketSizeMax}`
//                       : "25L - 1Cr"}
//                   </h1>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 {/* <Button
//                   variant="contained"
//                   className="!bg-yellow-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
//                 >
//                   Contact Buyer
//                 </Button> */}
//                 {/* <SendInterestButton /> */}
//                 {/* {senderId ? (
//                   <SendInterestButton
//                     senderId={senderId}
//                     receiverId={data.userId}
//                     type={"buyer"}
//                   />
//                 ) : (
//                   <SendInterestButton type={"buyer"} />
//                 )} */}
//                 {/* {token && user?.role === "broker" && (
//   senderId!=data.brokerId?(
//       <SendInterestButton
//       senderId={senderId}
//       receiverId={data.userId}
//       type="buyer"
//     />
//   ) : (
//     <SendInterestButton type="buyer" />
//   )
// )} */}
// {/* {token && user?.role === "broker" ? (
//   senderId === data.brokerId ?   (
//     <SendInterestButton type="buyer" />
//   ):(
//     <SendInterestButton
//       senderId={senderId}
//       receiverId={data.userId}
//       type="buyer"
//     />
//   )
// ) :(
//     <SendInterestButton type="buyer" />
//   )} */}
//   {/* {token && (
//   user?.role === "broker" ? (
//     senderId === data.brokerId ? (
//       <SendInterestButton type="buyer" />
//     ) : (
//       <SendInterestButton
//         senderId={senderId}
//         receiverId={data.userId}
//         type="buyer"
//       />
//     )
//   ) : user?.role === "buyer" ? (
//     <SendInterestButton type="buyer" />
//   ) : (
//     <SendInterestButton
//       senderId={senderId}
//       receiverId={data.userId}
//       type="buyer"
//     />
//   )
// )} */}
// {token ? (
//   user?.role === "broker" ? (
//     senderId === data.brokerId ? (
//       <SendInterestButton type="buyer" />
//     ) : (
//       <SendInterestButton
//         senderId={senderId}
//         receiverId={data.userId}
//         type="buyer"
//       />
//     )
//   ) : user?.role === "buyer" ? (
//     <SendInterestButton type="buyer" />
//   ) : (
//     <SendInterestButton
//       senderId={senderId}
//       receiverId={data.userId}
//       type="buyer"
//     />
//   )
// ) : (
  
//   <SendInterestButton type="buyer" />
// )}

//                 <Button
//                   variant="contained"
//                   // className="!bg-blue-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
//                   onClick={() => setShowPopup(true)}
//                   disabled={!token || user?.role === "buyer"}
//                   className={`px-4 py-2 rounded text-black transition 
//     ${
//       !token || user?.role === "buyer"
//         ? "bg-slate-300 cursor-not-allowed !w-[150px] !text-[0.7rem] !py-3"
//         : "bg-yellow-400 hover:bg-blue-700 cursor-pointer !w-[150px] !text-[0.7rem] !py-3"
//     }`}
//                 >
//                   View Profile
//                 </Button>
//               {showPopup && (
//   <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//     <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative shadow-xl max-h-[90vh] overflow-y-auto">
//       <button
//         onClick={() => setShowPopup(false)}
//         className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
//       >
//         ✕
//       </button>

//       <h3 className="text-lg font-semibold mb-4">Detailed Info</h3>

//       {/* PERSONAL SECTION */}
//       <CollapsibleSection
//         title="Personal Details"
//         isOpen={openSection === "personal"}
//         onToggle={() => setOpenSection(openSection === "personal" ? "" : "personal")}
//       >
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Type Of Buyer</label>
//           <div className="text-sm">{data.typeOfBuyer}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Designation</label>
//           <div className="text-sm">{data.designation}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">LinkedIn</label>
//           <div className="text-sm">{data.linkedinProfile || "N/A"}</div>
//         </div>
//         <div className="mb-4">
//           <label className="text-xs text-gray-500">Description</label>
//           <div className="text-sm">{data.description}</div>
//         </div>
//       </CollapsibleSection>

//       {/* PREFERENCES SECTION */}
//       <CollapsibleSection
//         title="Preferences"
//         isOpen={openSection === "preferences"}
//         onToggle={() => setOpenSection(openSection === "preferences" ? "" : "preferences")}
//       >
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Ticket Size</label>
//           <div className="text-sm">{data.ticketSizeMin} - {data.ticketSizeMax}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Open To Pre-Revenue</label>
//           <div className="text-sm">{data.openToPreRevenue ? "Yes" : "No"}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Open To Pre-Breakeven</label>
//           <div className="text-sm">{data.openToPreBreakeven ? "Yes" : "No"}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Preferred Arrangement</label>
//           <div className="text-sm">
//             {(data.preferredArrangement || []).join(", ") || "N/A"}
//           </div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Interested Business Categories</label>
//           <div className="text-sm">
//             {(data.businessCategories || []).join(", ") || "N/A"}
//           </div>
//         </div>
//       </CollapsibleSection>

//       {/* LOCATION SECTION */}
//       <CollapsibleSection
//         title="Location"
//         isOpen={openSection === "location"}
//         onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
//       >
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Country</label>
//           <div className="text-sm">{data.businesslocationCountry}</div>
//         </div>
//         {/* <div className="mb-2">
//           <label className="text-xs text-gray-500">State</label>
//           <div className="text-sm">{buyer.businesslocationState}</div>
//         </div> */}
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Cities</label>
//           <div className="text-sm">
//             {(data.businesslocationCities || []).join(", ") || "N/A"}
//           </div>
//         </div>
//       </CollapsibleSection>
//     </div>
//   </div>
// )}

//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         // fallback for non-buyer cards (if applicable)

//         <div className="relative">
//           {/* {token && user?.role === "broker" && location === "dashboard" && (
//             <button
//               className={`absolute -top-3 -left-3 p-2 rounded-full border ${
//                 isSelected ? "bg-green-500 text-white" : "bg-gray-200"
//               }`}
//               onClick={onSelect}
//             >
//               <Check size={20} />
//             </button>
//           )}
//            {token && user?.role === "broker" && location === "dashboard" && brokerId!=null && (
//            <div className="absolute right-0 -top-3 text-green-600 px-1 bg-yellow-100">
//             Assigned Seller
//             </div>
//           )} */}

//           <div className="w-[350px] px-5 py-5 min-h-[420px] border-2 border-slate-300 rounded-md p-4 bg-white shadow-lg shadow-slate-400">
//             <div className="my-2 text-lg text-blue-500 font-semibold">
//               {data?.headline}
//             </div>
//             <div className="w-full">
//               <div className="line-clamp-4 w-full min-h-[96px] text-justify">
//                 {data?.description_business}
//               </div>
//             </div>
//             <div className="py-2">
//               <span>
//                 <LocationPinIcon
//                   fontSize="small"
//                   className="mr-1 text-red-500"
//                 />
//                 {data?.city}
//               </span>
//             </div>

//             <div className="p-4 bg-slate-100 space-y-2 my-3">
//               <div className="flex justify-between text-[15px]">
//                 Last 12 Months Sales... <span>{data?.trailing12months}</span>
//               </div>
//               <div className="flex justify-between text-[15px]">
//                 Last 12 Months Profit... <span>{data?.NETtrailing12months}</span>
//               </div>
//             </div>

//             <div className="flex justify-between py-2 pb-4">
//               <div className="w-[60%]">
//                 <h1>Expected Sales Price</h1>
//                 <div className="flex items-end gap-1 text-blue-700">
//                   <p className="text-[12px]">INR</p>
//                   <h1 className="text-2xl font-bold">{data?.askingPrice || "40L"}</h1>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 {/* <Button
//                 variant="contained"
//                 className="!bg-yellow-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
//               >
//                 Contact Business
//               </Button> */}
//                 {/* {senderId ? (
//                   <SendInterestButton
//                     senderId={senderId}
//                     receiverId={data?.userId}
//                     type={"seller"}
//                   />
//                 ) : (
//                   <SendInterestButton type={"seller"} />
//                 )} */}
//                   {/* {token && user?.role === "broker" && (
//   senderId!=data.brokerId?(
//       <SendInterestButton
//       senderId={senderId}
//       receiverId={data.userId}
//       type="seller"
//     />
//   ) : (
//     <SendInterestButton type="seller"/>
//   )
// )} */}

// {/* {token && user?.role === "broker" ? 
//  (
//   senderId === data.brokerId ?   (
//     <SendInterestButton type="buyer" />
//   ):(
//     <SendInterestButton
//       senderId={senderId}
//       receiverId={data.userId}
//       type="seller"
//     />
//   )

// ) :(
//     <SendInterestButton type="seller" />
//   )} */}

//   {/* {token && (
//   user?.role === "broker" ? (
//     senderId === data.brokerId ? (
//       <SendInterestButton type="seller" />
//     ) : (
//       <SendInterestButton
//         senderId={senderId}
//         receiverId={data.userId}
//         type="seller"
//       />
//     )
//   ) : user?.role === "seller" ? (
//     <SendInterestButton type="seller" />
//   ) : (
//     <SendInterestButton
//       senderId={senderId}
//       receiverId={data.userId}
//       type="seller"
//     />
//   )
// )} */}

// {token ? (
//   user?.role === "broker" ? (
//     senderId === data.brokerId ? (
//       <SendInterestButton type="seller" />
//     ) : (
//       <SendInterestButton
//         senderId={senderId}
//         receiverId={data.userId}
//         type="seller"
//       />
//     )
//   ) : user?.role === "seller" ? (
//     <SendInterestButton type="seller" />
//   ) : (
//     <SendInterestButton
//       senderId={senderId}
//       receiverId={data.userId}
//       type="seller"
//     />
//   )
// ) : (
  
//   <SendInterestButton type="seller" />
// )}





//                 <Button
//                   variant="contained"
//                   // className="!bg-blue-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
//                   onClick={() => setshowSellerPopup(true)}
//                   disabled={!token || user?.role === "seller"}
//                   className={`px-4 py-2 rounded text-black transition 
//     ${
//       !token || user?.role === "seller"
//         ? "bg-slate-300 cursor-not-allowed !w-[150px] !text-[0.7rem] !py-3"
//         : "bg-yellow-400 hover:bg-blue-700 cursor-pointer !w-[150px] !text-[0.7rem] !py-3"
//     }`}
//                 >
//                   View Profile
//                 </Button>
//                     {showSellerPopup && (
//   <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//     <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative shadow-xl max-h-[90vh] overflow-y-auto">
//       <button
//         onClick={() => setshowSellerPopup(false)}
//         className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
//       >
//         ✕
//       </button>

//       <h3 className="text-lg font-semibold mb-4">Detailed Info</h3>

//       {/* PERSONAL SECTION */}
//       <CollapsibleSection
//         title="Company Details"
//         isOpen={openSection === "company"}
//         onToggle={() => setOpenSection(openSection === "company" ? "" : "company")}
//       >
//          <div className="mb-4">
//           <label className="text-xs text-gray-500">Business Headline</label>
//           <div className="text-sm">{data.headline}</div>
//         </div>
//          <div className="mb-4">
//           <label className="text-xs text-gray-500">Business Description</label>
//           <div className="text-sm">{data.description_business}</div>
//         </div>
//          <div className="mb-4">
//           <label className="text-xs text-gray-500">Business Category</label>
//           <div className="text-sm">{data.businessCategory}</div>
//         </div>
//          <div className="mb-4">
//           <label className="text-xs text-gray-500">Entity Structure</label>
//           <div className="text-sm">{data.entityStructure}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Website</label>
//           <div className="text-sm">{data.website_url}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">CIN</label>
//           <div className="text-sm">{data.CIN}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Company Linkedin</label>
//           <div className="text-sm">{data.company_linkedin || "N/A"}</div>
//         </div>
//         <div className="mb-4">
//           <label className="text-xs text-gray-500">No. of Cofounder</label>
//           <div className="text-sm">{data.numcofounder}</div>
//         </div>
//          <div className="mb-4">
//           <label className="text-xs text-gray-500">Team Size</label>
//           <div className="text-sm">{data.teamSize}</div>
//         </div>
//          <div className="mb-4">
//           <label className="text-xs text-gray-500">No. of Location</label>
//           <div className="text-sm">{data.numLocation}</div>
//         </div>
//          <div className="mb-4">
//           <label className="text-xs text-gray-500">Founded Year</label>
//           <div className="text-sm">{data.year}</div>
//         </div>
//          <div className="mb-4">
//           <label className="text-xs text-gray-500">Founded Month</label>
//           <div className="text-sm">{data.month}</div>
//         </div>
        
//          <div className="mb-4">
//           <label className="text-xs text-gray-500">No. of Cofounder</label>
//           <div className="text-sm">{data.numcofounder}</div>
//         </div>
//          <div className="mb-4">
//           <label className="text-xs text-gray-500">No. of Cofounder</label>
//           <div className="text-sm">{data.numcofounder}</div>
//         </div>
//       </CollapsibleSection>

//       {/* PREFERENCES SECTION */}
//       <CollapsibleSection
//         title="Financial Performance"
//         isOpen={openSection === "financial"}
//         onToggle={() => setOpenSection(openSection === "financial" ? "" : "financial")}
//       >
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Last Financial Year Revenue</label>
//           <div className="text-sm">{data.lastFinancialYear}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Trailing 12 Months Revenue</label>
//           <div className="text-sm">{data.trailing12months}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Previous Month Revenue</label>
//           <div className="text-sm">{data.prevMonth}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">NET Last Financial Year </label>
//           <div className="text-sm">
//             {data.NETlastFinancialYear}
//           </div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">NET Trailing 12 Months</label>
//           <div className="text-sm">
//             {data.NETtrailing12months}
//           </div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">NET Prev Month</label>
//           <div className="text-sm">{data.NETprevMonth}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Positive Cash Flow</label>
//           <div className="text-sm">{data.positiveCashFlow}</div>
//         </div>
        
//       </CollapsibleSection>

// {/**Assest Section */}
//          <CollapsibleSection
//         title="Assest & Liabilites"
//         isOpen={openSection === "assest"}
//         onToggle={() => setOpenSection(openSection === "assest" ? "" : "assest")}
//       >
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Assets Description</label>
//           <div className="text-sm">{data.assestDesc}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Equity</label>
//           <div className="text-sm">{data.equity}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Debt</label>
//           <div className="text-sm">{data.debt}</div>
//         </div>
       
     
//         {/**Exit Plan */}
//       </CollapsibleSection>
//          <CollapsibleSection
//         title="Exit Plan"
//         isOpen={openSection === "exit"}
//         onToggle={() => setOpenSection(openSection === "exit" ? "" : "exit")}
//       >
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Reason for Sale</label>
//           <div className="text-sm">{data.salereason}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Asking Price</label>
//           <div className="text-sm">{data.askingPrice}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Preferred Arrangement</label>
//           <div className="text-sm"> {(data.preferredArrangement || []).join(", ") || "N/A"}</div>
//         </div>
      
        
//       </CollapsibleSection>

//       {/* LOCATION SECTION */}
//       <CollapsibleSection
//         title="Location"
//         isOpen={openSection === "location"}
//         onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
//       >
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Country</label>
//           <div className="text-sm">{data.country}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">State</label>
//           <div className="text-sm">{data.state}</div>
//         </div>
//         <div className="mb-2">
//           <label className="text-xs text-gray-500">Cities</label>
//           <div className="text-sm">
//             {data.city|| "N/A"}
//           </div>
//         </div>
//       </CollapsibleSection>
//     </div>
//   </div>
// )}


//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ReusableCards;
import React, { useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StarIcon from "@mui/icons-material/Star";
import LocationPinIcon from "@mui/icons-material/LocationOn"; // corrected
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import { Check } from "lucide-react";
import { useState } from "react";
import SendInterestButton from "../component/SendInterestButton";
import CollapsibleSection from "./CollapsibleSection";
 import EditableRow from "./ReusableEditableRow";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import  {showSuccess,showError ,showInfo,showWarning} from '../component/utils/toast';


const ReusableCards = ({
  
  type,
  location,
  data,
  onUpdate
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSellerPopup, setshowSellerPopup] = useState(false);
  const [openSection, setOpenSection] = useState("personal");
  const [editSellerMode, setSellerEditMode] = useState(false);
   const [editBuyerMode, setBuyerEditMode] = useState(false);
const [formData, setFormData] = useState({ ...data });
const [countries, setCountries] = useState([]);
const[buyerCountries,setBuyerCountries]=useState([]);
const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);


  const picklists=localStorage.getItem("picklists");
   const parsedPicklists=JSON.parse(picklists);
   console.log("parsedPicklists-----",parsedPicklists);
   console.log("parsedPicklistsbuyerrr-----",parsedPicklists[2]);



  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const senderId = user?.id;

  useEffect(()=>{
    const countryArray=parsedPicklists[2]?.values;
setCountries(countryArray);

},[]);

useEffect(() => {
  const countryArr = parsedPicklists[2]?.values || [];
  console.log("countryArr.map((c) => ({ id: c.id, label: c.value }))",countryArr.map((c) => ({ id: c.id, label: c.value })));
  setBuyerCountries(countryArr.map((c) => ({ id: c.id, label: c.value })));
}, []);
  
 const fetchStateByCountryData = async (id) => {
      try {
        const response = await fetch(`https://bizplorers-backend.onrender.com/api/picklist/states?countryId=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

  
        if (!response.ok) throw new Error('Failed to fetch');
  
        const data = await response.json();
        console.log("data---buyerstate--",data);
        setStates(data);
      } catch (error) {
        console.error(error);
       
      }
    };

     const fetchCityByStateData = async (id) => {
      try {
        const response = await fetch(`https://bizplorers-backend.onrender.com/api/picklist/cities?stateId=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

  
        if (!response.ok) throw new Error('Failed to fetch');
  
        const data = await response.json();
        console.log("data---buyerstate--",data);
        setCities(data);
      } catch (error) {
        console.error(error);
       
      }
    };

  const isTruthy = (val) => {
    if (typeof val === "boolean") return val;
    if (typeof val === "string") {
      return ["true", "yes", "1"].includes(val.trim().toLowerCase());
    }
    return false;
  };


const handleBuyerChange = (field, selected) => {
  console.log("Field:", field);
  console.log("Value:", selected);

  setFormData((prev) => {
    const next = { ...prev, [field]: selected };

    if (field === "businesslocationCountry") {
      next.businesslocationCities= ""; // ✅ fix: key must be string
    }

    return next;
  });

  // ✅ Trigger dependent data fetch
  if (field === "businesslocationCountry") {
console.log("selecteddd--object",selected);
    const id = selected;
    console.log("businessLocationCountryId----",id);
    if (id) fetchCitiesByCountry(id);
  }
};


const fetchCitiesByCountry = async (countryId) => {
  try {
    const res   = await fetch(
      `https://bizplorers-backend.onrender.com/api/picklist/buyer-cities?countryId=${countryId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
   
    const data  = await res.json();
     console.log("fetchCitiesByCountry---",data);
    setCities(data.map((c) => ({ id: c.id, label: c.value })));
  } catch (err) {
    console.error(err);
  }
};


// const handleChange = (field, value) => {
//   setFormData((prev) => {
//     const next = { ...prev, [field]: value };

//     /* ---------- if a COUNTRY field changed ---------- */
//     if (field === "country" || field.endsWith("Country")) {
//       const stateKey =
//         field === "country" ? "state" : field.replace("Country", "State");
//       const cityKey =
//         field === "country" ? "city" : field.replace("Country", "Cities");

//       next[stateKey] = "";          // reset state
//       next[cityKey] = Array.isArray(prev[cityKey]) ? [] : ""; // reset cities
//     }

//     /* ---------- if a STATE field changed ------------ */
//     if (field === "state" || field.endsWith("State")) {
//       const cityKey =
//         field === "state" ? "city" : field.replace("State", "Cities");

//       next[cityKey] = Array.isArray(prev[cityKey]) ? [] : ""; // reset cities
//     }

//     return next;
//   });

//   /* Fetch dependent dropdown data */
//   if (field === "country" || field.endsWith("Country")) {
//     fetchStateByCountryData(value);        // <-- states API
//   }

//   if (field === "state" || field.endsWith("State")) {
//     fetchCityByStateData(value);           // <-- cities API
//   }
// };
const handleChange = (field, selectedValue) => {
  console.log("Field:", field);
  console.log("Value:", selectedValue);

  setFormData((prev) => {
    const next = { ...prev, [field]: selectedValue };

    // Reset dependent fields
    if (field === "country" || field.endsWith("Country")) {
      const stateKey = field === "country" ? "state" : field.replace("Country", "State");
      const cityKey = field === "country" ? "city" : field.replace("Country", "City");

      next[stateKey] = ""; // reset state
      next[cityKey] = "";  // reset city
    }

    if (field === "state" || field.endsWith("State")) {
      const cityKey = field === "state" ? "city" : field.replace("State", "City");
      next[cityKey] = ""; // reset city
    }
    

    return next;
  });

  // Trigger dependent data fetch
  if (field === "country" || field.endsWith("Country")) {
    const countryId = typeof selectedValue === "object" ? selectedValue.id : null;
    if (countryId) fetchStateByCountryData(countryId);
  }

  if (field === "state" || field.endsWith("State")) {
    const stateId = typeof selectedValue === "object" ? selectedValue.id : selectedValue;
    if (stateId) fetchCityByStateData(stateId);
  }
};



const handleSellerSave = async () => {
  // const endpoint =
  //   type === 'buyer'
  //     ? "https://bizplorers-backend.onrender.com/api/buyer/updateBuyer"
  //     : "https://bizplorers-backend.onrender.com/api/seller/update_detail";
    const payload={
      company_name: formData.company_name,
      website_url: formData.website_url,
      CIN: formData.CIN,
      company_linkedin: formData.company_linkedin,
      description_business: formData.description_business,
      numcofounder: formData.numcofounder,
      teamSize: formData.teamSize,
      numLocation: formData.numLocation,
      year: formData.year,
      month: formData.month,
      cofounderLinks: formData.cofounderLinks,
      businessCategory: formData.businessCategory,
      entityStructure: formData.entityStructure,
      country: formData.country.value,
      state: formData.state.value,
      city: formData.city.value,
      lastFinancialYear: formData.lastFinancialYear,
      trailing12months: formData.trailing12months,
      prevMonth: formData.prevMonth,
      NETlastFinancialYear: formData.NETlastFinancialYear,
      NETtrailing12months: formData.NETtrailing12months,
      NETprevMonth: formData.NETprevMonth,
      positiveCashFlow: formData.positiveCashFlow,
      assestDesc: formData.assestDesc,
      equity: formData.equity,
      debt: formData.debt,
      salereason: formData.salereason,
      askingPrice: formData.askingPrice,
      preferredArrangement: formData.preferredArrangement,
}

  try {
    const response = await fetch(`https://bizplorers-backend.onrender.com/api/seller/update_detail`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // if needed
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // try parsing as JSON to get structured validation errors
      
        const errorData = JSON.parse(response);
        console.error("Validation error from API:", errorData);
        alert("Validation error: " + JSON.stringify(errorData, null, 2));
      } 

    if (response.ok) {
      const updatedData = await response.json();
      setSellerEditMode(false);
      setshowSellerPopup(false);
      // Optionally update local `data` state if needed
      setFormData(updatedData);
        if (onUpdate) onUpdate(updatedData); 
showSuccess("Seller data updated successfully");
    } else {
      console.error("Failed to update data");
    }
  } catch (err) {
    console.error("Error while saving:", err);
  }
};

const handleSave = async () => {
  // const endpoint =
  //   type === 'buyer'
  //     ? "https://bizplorers-backend.onrender.com/api/buyer/updateBuyer"
  //     : "https://bizplorers-backend.onrender.com/api/seller/update_detail";
    const payload={
    
        typeOfBuyer: formData.typeOfBuyer,
        designation: formData.designation,
        description: formData.description,
        linkedinProfile: formData.linkedinProfile,
        businessCategories: formData.businessCategories,
        ticketSizeMin: formData.ticketSizeMin,
        ticketSizeMax: formData.ticketSizeMax,
        // businesslocationCountry: formData.businesslocationCountry,
  businesslocationCountry: (() => {
  const existing = formData.businesslocationCountry;
console.log("existing----",existing);
  // Case 1: Already a label string like "India"
  if (typeof existing === "string" && isNaN(existing)) return existing;

  // Case 2: It's an object like { id, label }
  if (typeof existing === "object" && existing?.label) {
    return existing.label;
  }

  // Case 3: It's an ID like 11 or "11" – find country from ID, return its value
  return (
    buyerCountries.find(
      (c) => String(c.id) === String(existing)
    )?.label || ""
  );
})(),


        // businesslocationState: formData.businesslocationState,
       
    businesslocationCities: (() => {
    const existingCities = formData.businesslocationCities || [];

    // If already an array of strings (labels), return as-is
    const isLabelArray =
      Array.isArray(existingCities) &&
      existingCities.every((val) => typeof val === "string" && isNaN(val));

    if (isLabelArray) return existingCities;

    // Otherwise, convert IDs to labels
    return existingCities.map((cityId) => {
      const city = cities.find((c) => String(c.id) === String(cityId));
      return city?.label || "";
    });
  })(),
  
        // businesslocationCities: formData.businesslocationCities,
        openToPreRevenue: formData.openToPreRevenue,
        openToPreBreakeven: formData.openToPreBreakeven,
        // metric: "",
        // maxMultiple: "",
        preferredArrangement: formData.preferredArrangement,
      
}

  try {
    console.log("payload----",payload);
    const response = await fetch(`https://bizplorers-backend.onrender.com/api/buyer/updateBuyer`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // if needed
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // try parsing as JSON to get structured validation errors
      
        const errorData = JSON.parse(response);
        console.error("Validation error from API:", errorData);
        alert("Validation error: " + JSON.stringify(errorData, null, 2));
      } 

    if (response.ok) {
      const updatedData = await response.json();
      setBuyerEditMode(false);
      setShowPopup(false);
      // Optionally update local `data` state if needed
      setFormData(updatedData);
      if (onUpdate) onUpdate(updatedData);
      showSuccess("Buyer Details Updated Successfully");
    } else {
      console.error("Failed to update data");
    }
  } catch (err) {
    console.error("Error while saving:", err);
  }
};


const dropdownOptions = {
  businessCategory: [
              "E-commerce",
              "Offline Retail",
              "Fintech",
              "Edtech",
              "Saas",
              "Education & training",
              "Restaurant/café",
              "Mobile App",
            ],
  entityStructure: ["PartnerShip", "LLP", "Private Ltd", "Public Ltd"],
  salereason: ['No Cash Runway','Bandwidth constraints','Inability to Scale','Relocation'],
  preferredArrangement: ["Cash", "Stock", "Royalty", "Acquihire"],
};



  return (
    <>
      {type === "buyer" ? (
        <div className="relative ">
          {/* {token && user?.role === "broker" && location === "dashboard" && (
            <button
              className={`absolute -top-3 -left-3 p-2 rounded-full border ${
                isSelected ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              onClick={onSelect}
            >
              <Check size={20} />
            </button>
          )} */}

          {/* {token &&
            user?.role === "broker" &&
            location === "dashboard" &&
            data?.brokerId != null && (
              <div className="absolute right-0 -top-3 text-green-600 px-1 bg-yellow-100">
                Assigned Buyer
              </div>
            )} */}

          <div className="w-[350px] px-5 py-5 min-h-[420px] border-2 border-slate-300 rounded-md p-4 bg-white shadow-lg shadow-slate-400">
            <div className="my-2 text-lg text-blue-500 font-semibold">
              {data?.designation || "Newly Established Restaurant for Sale"}
            </div>

            <div className="w-full">
              <div className="line-clamp-4 w-full min-h-[96px] text-justify">
                {data?.description ||
                  "A successful business thrives by identifying a clear...."}
              </div>
            </div>

            <div className="py-2">
              <span>
                Interested
                <LocationPinIcon
                  fontSize="small"
                  className="mr-1 text-red-500"
                />
                {data?.businesslocationCities?.join(", ") || "N/A"}
              </span>
            </div>

            <div className="p-4 bg-slate-100 space-y-2 my-3">
              <div className="flex justify-between text-[15px]">
                Open to Pre-Revenue
                <span>{isTruthy(data?.openToPreRevenue) ? "Yes" : "No"}</span>
              </div>

              <div className="flex justify-between text-[15px]">
                Open to Pre-Breakeven
                <span>
                  {isTruthy(data?.openToPreBreakeven) ? "Yes" : "No"}
                </span>
              </div>
            </div>

            <div className="flex justify-between py-2 pb-4">
              <div className="w-[60%]">
                <h1>
                  Ticket Size <InfoIcon fontSize="small" />
                </h1>
                <div className="flex items-end gap-1 text-blue-700">
                  <p className="text-[10px]">INR</p>
                  <h1 className="text-xl font-bold">
                    {data?.ticketSizeMin && data?.ticketSizeMax
                      ? `${data?.ticketSizeMin} - ${data?.ticketSizeMax}`
                      : "25L - 1Cr"}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {/* <Button
                  variant="contained"
                  className="!bg-yellow-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
                >
                  Contact Buyer
                </Button> */}
                {/* <SendInterestButton /> */}
                {/* {senderId ? (
                  <SendInterestButton
                    senderId={senderId}
                    receiverId={data.userId}
                    type={"buyer"}
                  />
                ) : (
                  <SendInterestButton type={"buyer"} />
                )} */}
                {/* {token && user?.role === "broker" && (
  senderId!=data.brokerId?(
      <SendInterestButton
      senderId={senderId}
      receiverId={data.userId}
      type="buyer"
    />
  ) : (
    <SendInterestButton type="buyer" />
  )
)} */}
{/* {token && user?.role === "broker" ? (
  senderId === data.brokerId ?   (
    <SendInterestButton type="buyer" />
  ):(
    <SendInterestButton
      senderId={senderId}
      receiverId={data.userId}
      type="buyer"
    />
  )
) :(
    <SendInterestButton type="buyer" />
  )} */}
  {/* {token && (
  user?.role === "broker" ? (
    senderId === data.brokerId ? (
      <SendInterestButton type="buyer" />
    ) : (
      <SendInterestButton
        senderId={senderId}
        receiverId={data.userId}
        type="buyer"
      />
    )
  ) : user?.role === "buyer" ? (
    <SendInterestButton type="buyer" />
  ) : (
    <SendInterestButton
      senderId={senderId}
      receiverId={data.userId}
      type="buyer"
    />
  )
)} */}
{token ? (
  user?.role === "broker" ? (
    senderId === data.brokerId ? (
      <SendInterestButton type="buyer" />
    ) : (
      <SendInterestButton
        senderId={senderId}
        receiverId={data.userId}
        type="buyer"
      />
    )
  ) : user?.role === "buyer" ? (
    <SendInterestButton type="buyer" />
  ) : (
    <SendInterestButton
      senderId={senderId}
      receiverId={data.userId}
      type="buyer"
    />
  )
) : (
  
  <SendInterestButton type="buyer" />
)}

                <Button
                  variant="contained"
                  // className="!bg-blue-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
                  onClick={() => setShowPopup(true)}
                  disabled={!token || user?.role === "buyer"}
                  className={`px-4 py-2 rounded text-black transition 
    ${
      !token || user?.role === "buyer"
        ? "bg-slate-300 cursor-not-allowed !w-[150px] !text-[0.7rem] !py-3"
        : "bg-yellow-400 hover:bg-blue-700 cursor-pointer !w-[150px] !text-[0.7rem] !py-3"
    }`}
                >
                  View Profile
                </Button>
              {showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative shadow-xl max-h-[90vh] overflow-y-auto">
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
      >
        ✕
      </button>
                     {/* <div className="flex justify-end gap-3 mb-4">
  {editBuyerMode && location==='dashboard'? (
    <>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save
      </button>
      <button
        onClick={() => {
          setBuyerEditMode(false);
          setFormData({ ...data });
        }}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        Cancel
      </button>
    </>
  ) : (
    <button
      onClick={() => setBuyerEditMode(true)}
      className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500"
    >
      Edit
    </button>
  )}
</div> */}
<div className="flex justify-end gap-3 mb-4">
  {location === 'dashboard' && (
    editBuyerMode ? (
      <>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save
        </button>
        <button
          onClick={() => {
            setBuyerEditMode(false);
            setFormData({ ...data });
          }}
          className="px-4 py-2 bg-red-500 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </>
    ) : (
      <button
        onClick={() => setBuyerEditMode(true)}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white"
      >
        Edit Details
      </button>
    )
  )}
</div>



      <h3 className="text-2xl font-semibold mb-4">Detailed Info</h3>

      {/* PERSONAL SECTION */}
      <CollapsibleSection
        title="Personal Details"
        isOpen={openSection === "personal"}
        onToggle={() => setOpenSection(openSection === "personal" ? "" : "personal")}
      >
        <EditableRow label="Type Of Buyer" value={formData.typeOfBuyer} editable={editBuyerMode} onChange={(v) => handleBuyerChange("typeOfBuyer", v)} dropdownOptions={["Individual", "Organization"]} />
            <EditableRow label="Designation" value={formData.designation} editable={editBuyerMode} onChange={(v) => handleBuyerChange("designation", v)} />
            <EditableRow label="LinkedIn" value={formData.linkedinProfile?formData.linkedinProfile:"N/A"} editable={editBuyerMode} onChange={(v) => handleBuyerChange("linkedinProfile", v)} />
            <EditableRow label="Description" value={formData.description} editable={editBuyerMode} onChange={(v) => handleBuyerChange("description", v)} textarea />
      </CollapsibleSection>

      {/* PREFERENCES SECTION */}
      <CollapsibleSection
        title="Preferences"
        isOpen={openSection === "preferences"}
        onToggle={() => setOpenSection(openSection === "preferences" ? "" : "preferences")}
      >
         <EditableRow label="Ticket Size Min" value={formData.ticketSizeMin} editable={editBuyerMode} onChange={(v) => handleBuyerChange("ticketSizeMin", v)} />
            <EditableRow label="Ticket Size Max" value={formData.ticketSizeMax} editable={editBuyerMode} onChange={(v) => handleBuyerChange("ticketSizeMax", v)} />
            {/* <EditableRow label="Metric" value={buyerData.metric} editable={isEditing} onChange={(v) => handleChange("metric", v)} dropdownOptions={["sales", "profit"]} /> */}
            {/* <EditableRow label="Max Multiple" value={buyerData.maxMultiple} editable={isEditing} onChange={(v) => handleChange("maxMultiple", v)} /> */}
            <EditableRow label="Open to Pre-Revenue" value={formData.openToPreRevenue ? "Yes" : "No"} editable={editBuyerMode} onChange={(v) => handleBuyerChange("openToPreRevenue", v === "Yes")} options={["Yes", "No"]} />
            <EditableRow label="Open to Pre-Breakeven" value={formData.openToPreBreakeven ? "Yes" : "No"} editable={editBuyerMode} onChange={(v) => handleBuyerChange("openToPreBreakeven", v === "Yes")} options={["Yes", "No"]} />
        <div className="my-3">
              <h1 className="font-semibold flex items-center mb-1">
                <CheckBoxIcon className="!text-green-600 mr-1" /> Business Categories:
              </h1>
              {editBuyerMode ? (
                <select
                  multiple
                  className="border rounded px-2 py-1 w-full md:w-1/2"
                  value={formData.businessCategories}
                  onChange={(e) =>
                    handleBuyerChange("businessCategories", Array.from(e.target.selectedOptions, (opt) => opt.value))
                  }
                >
                  {dropdownOptions.businessCategory.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              ) : (
                <p>{formData.businessCategories.join(", ") || "N/A"}</p>
              )}
            </div>
            {/* Preferred Arrangement */}
            <div className="my-3">
              <h1 className="font-semibold flex items-center mb-1">
                <CheckBoxIcon className="!text-green-600 mr-1" /> Preferred Arrangement:
              </h1>
              {editBuyerMode ? (
                <select
                  multiple
                  className="border rounded px-2 py-1 w-full md:w-1/2"
                  value={formData.preferredArrangement}
                  onChange={(e) =>
                    handleBuyerChange(
                      "preferredArrangement",
                      Array.from(e.target.selectedOptions, (option) => option.value)
                    )
                  }
                >
                  {dropdownOptions.preferredArrangement.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <p>{formData.preferredArrangement.join(", ") || "N/A"}</p>
              )}
            </div>
      
      </CollapsibleSection>

      {/* LOCATION SECTION */}
      {/* <CollapsibleSection
        title="Location"
        isOpen={openSection === "location"}
        onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
      >
        <EditableRow label="Country" value={formData.businesslocationCountry} editable={editBuyerMode} onChange={(v) => handleChange("businesslocationCountry", v)} dropdownOptions={Object.keys(countryStateCityMap)} />
                 {formData.businesslocationCountry && (
                 <EditableRow
       label="State"
       value={formData.businesslocationState || "N/A"}
       editable={editBuyerMode}
       onChange={(v) => handleChange("businesslocationState", v)}
       dropdownOptions={
         formData.businesslocationCountry
           ? Object.keys(countryStateCityMap[formData.businesslocationCountry] || {})
           : []
       }
     />
     
                 )}
                 <div className="my-2">
                   <h1 className="font-semibold flex items-center mb-1">
                     <CheckBoxIcon className="!text-green-600 mr-1" /> Cities:
                   </h1>
                   {editBuyerMode? (
                     (countryStateCityMap[formData.businesslocationCountry]?.[formData.businesslocationState] || []).map(
                       (city) => (
                         <label key={city} className="flex items-center gap-2">
                           <input
                             type="checkbox"
                             checked={formData.businesslocationCities.includes(city)}
                             onChange={(e) => {
                               const selected = formData.businesslocationCities.includes(city);
                               const updatedCities = selected
                                 ? formData.businesslocationCities.filter((c) => c !== city)
                                 : [...formData.businesslocationCities, city];
                               handleChange("businesslocationCities", updatedCities);
                             }}
                           />
                           {city}
                         </label>
                       )
                     )
                   ) : (
                     <p>{formData.businesslocationCities.join(", ") || "N/A"}</p>
                   )}
                 </div>
     <EditableRow
  label="Country"
  value={formData.businesslocationCountry}
  editable={editBuyerMode}
  onChange={(v) => handleBuyerChange("businesslocationCountry", v)}
  dropdownOptions={countries}
/>

{formData.businesslocationCountry && (
  <EditableRow
    label="State"
    value={formData.businesslocationState}
    editable={editBuyerMode}
    onChange={(v) => handleBuyerChange("businesslocationState", v)}
    dropdownOptions={states}
/>
)}

<div className="my-2">
  <h1 className="font-semibold flex items-center mb-1">
    <CheckBoxIcon className="!text-green-600 mr-1" /> Cities:
  </h1>
  {editBuyerMode ? (
    cities.map((city) => (
      <label key={city} className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.businesslocationCities.includes(city)}
          onChange={(e) => {
            const selected = formData.businesslocationCities.includes(city);
            const updatedCities = selected
              ? formData.businesslocationCities.filter((c) => c !== city)
              : [...formData.businesslocationCities, city];
            handleBuyerChange("businesslocationCities", updatedCities);
          }}
        />
        {city}
      </label>
    ))
  ) : (
    <p>{formData.businesslocationCities.join(", ") || "N/A"}</p>
  )}
</div>

              
      
      </CollapsibleSection> */}
           <CollapsibleSection
  title="Location"
  isOpen={openSection === "location"}
  onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
>
  {/* COUNTRY – single‑select */}
  {/* <EditableRow
    label="Country"
    value={formData.businesslocationCountry}
    editable={editBuyerMode}
    // onChange={(v) => handleBuyerChange("businesslocationCountry", v)}
     onChange={(e) =>
                    handleBuyerChange("businesslocationCountry", Array.from(e.target.selectedOptions, (opt) => opt.value))
                  }
    dropdownOptions={buyerCountries}    // <- array of {id,label}
  /> */}
   <div className="my-3 flex gap-2">
              <h1 className="font-semibold flex items-center mb-1">
                <CheckBoxIcon className="!text-green-600 mr-1" /> Business Country:
              </h1>
    {editBuyerMode ? (
      <>
        
  <select
                  
                  className="border rounded px-2 py-1 w-full md:w-1/2"
                  value={formData.businesslocationCountry}
                  onChange={(e) =>
                    handleBuyerChange(
                      "businesslocationCountry",
                      Array.from(e.target.selectedOptions, (option) => option.value)
                    )
                  }
                >
                  {buyerCountries.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
             </> ) : (<>
              
                <p>{formData.businesslocationCountry || "N/A"}</p></>)}
                </div>

  {/* CITY – single‑select */}
  {/* <EditableRow
    label="City"
    value={formData.businesslocationCities}
    editable={editBuyerMode}
    onChange={(v) => handleBuyerChange("businesslocationCities", v)}
    dropdownOptions={cities}       // <- array of {id,label} coming from API
    multiple
  /> */}
   <div className="my-3 flex gap-2">
              <h1 className="font-semibold flex items-center mb-1">
                <CheckBoxIcon className="!text-green-600 mr-1" /> Business Cities:
              </h1>
    {editBuyerMode ? (<>
     
  <select
               multiple  
             
                  className="border rounded px-2 py-1 w-full md:w-1/2"
                  value={formData.businesslocationCities}
                  onChange={(e) =>
                    handleBuyerChange(
                      "businesslocationCities",
                      Array.from(e.target.selectedOptions, (option) => option.value)
                    )
                  }
                >
                  {cities.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
             </> ) : (<>
                 
                <p>{formData.businesslocationCities.join(",") || "N/A"}</p></>)}
                </div>

</CollapsibleSection>
    </div>
  </div>
)}

              </div>
            </div>
          </div>
        </div>
      ) : (
        // fallback for non-buyer cards (if applicable)

        <div className="relative">
          {/* {token && user?.role === "broker" && location === "dashboard" && (
            <button
              className={`absolute -top-3 -left-3 p-2 rounded-full border ${
                isSelected ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              onClick={onSelect}
            >
              <Check size={20} />
            </button>
          )}
           {token && user?.role === "broker" && location === "dashboard" && brokerId!=null && (
           <div className="absolute right-0 -top-3 text-green-600 px-1 bg-yellow-100">
            Assigned Seller
            </div>
          )} */}

 

          <div className="w-[350px] px-5 py-5 min-h-[420px] border-2 border-slate-300 rounded-md p-4 bg-white shadow-lg shadow-slate-400">
            <div className="my-2 text-lg text-blue-500 font-semibold">
              {data?.headline}
            </div>
            <div className="w-full">
              <div className="line-clamp-4 w-full min-h-[96px] text-justify">
                {data?.description_business}
              </div>
            </div>
            <div className="py-2">
              <span>
                <LocationPinIcon
                  fontSize="small"
                  className="mr-1 text-red-500"
                />
                {data?.city}
              </span>
            </div>

            <div className="p-4 bg-slate-100 space-y-2 my-3">
              <div className="flex justify-between text-[15px]">
                Last 12 Months Sales... <span>{data?.trailing12months}</span>
              </div>
              <div className="flex justify-between text-[15px]">
                Last 12 Months Profit... <span>{data?.NETtrailing12months}</span>
              </div>
            </div>

            <div className="flex justify-between py-2 pb-4">
              <div className="w-[60%]">
                <h1>Expected Sales Price</h1>
                <div className="flex items-end gap-1 text-blue-700">
                  <p className="text-[12px]">INR</p>
                  <h1 className="text-2xl font-bold">{data?.askingPrice || "40L"}</h1>
                </div>
              </div>
              <div className="flex flex-col gap-2">
               

{token ? (
  user?.role === "broker" ? (
    senderId === data.brokerId ? (
      <SendInterestButton type="seller" />
    ) : (
      <SendInterestButton
        senderId={senderId}
        receiverId={data.userId}
        type="seller"
      />
    )
  ) : user?.role === "seller" ? (
    <SendInterestButton type="seller" />
  ) : (
    <SendInterestButton
      senderId={senderId}
      receiverId={data.userId}
      type="seller"
    />
  )
) : (
  
  <SendInterestButton type="seller" />
)}





                <Button
                  variant="contained"
                  // className="!bg-blue-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
                  onClick={() => setshowSellerPopup(true)}
                  disabled={!token || user?.role === "seller"}
                  className={`px-4 py-2 rounded text-black transition 
    ${
      !token || user?.role === "seller"
        ? "bg-slate-300 cursor-not-allowed !w-[150px] !text-[0.7rem] !py-3"
        : "bg-yellow-400 hover:bg-blue-700 cursor-pointer !w-[150px] !text-[0.7rem] !py-3"
    }`}
                >
                  View Profile
                </Button>
                    {showSellerPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative shadow-xl max-h-[90vh] overflow-y-auto">
      <button
        onClick={() => setshowSellerPopup(false)}
        className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
      >
        ✕
      </button>
                     {/* <div className="flex justify-end gap-3 mb-4">
  {editSellerMode && location==='dashboard'? (
    <>
      <button
        onClick={handleSellerSave}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save
      </button>
      <button
        onClick={() => {
          setSellerEditMode(false);
          setFormData({ ...data });
        }}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        Cancel
      </button>
    </>
  ) : (
    <button
      onClick={() => setSellerEditMode(true)}
      className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500"
    >
      Edit
    </button>
  )}
</div> */}

<div className="flex justify-end gap-3 mb-4">
  {location === 'dashboard' && (
    editSellerMode ? (
      <>
      <button
        onClick={handleSellerSave}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save
      </button>
      <button
        onClick={() => {
          setSellerEditMode(false);
          setFormData({ ...data });
        }}
        className="px-4 py-2 bg-red-500 rounded hover:bg-gray-400"
      >
        Cancel
      </button>
      </>
    ) : (
    <button
      onClick={() => setSellerEditMode(true)}
      className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white"
    >
      Edit Details
    </button>
  ))}

</div>


      <h3 className="text-2xl font-semibold mb-4">Detailed Info</h3>
     
      {/* PERSONAL SECTION */}
      <CollapsibleSection
        title="Company Details"
        isOpen={openSection === "company"}
        onToggle={() => setOpenSection(openSection === "company" ? "" : "company")}
      >
   { location==='dashboard'?

   <>
  
   <EditableRow label="Company Name" value={formData.company_name} editable={editSellerMode} onChange={(v) => handleChange("company_name", v)} />
            <EditableRow label="Website" value={formData.website_url} editable={editSellerMode} onChange={(v) => handleChange("website_url", v)} />
            <EditableRow label="CIN" value={formData.CIN} editable={editSellerMode} onChange={(v) => handleChange("CIN", v)} />
            <EditableRow label="Company LinkedIn" value={formData.company_linkedin} editable={editSellerMode} onChange={(v) => handleChange("company_linkedin", v)} />
     </>:null}    
      <EditableRow label="No. of Cofounders" value={formData.numcofounder} editable={editSellerMode} onChange={(v) => handleChange("numcofounder", v)} />
            <EditableRow label="Team Size" value={formData.teamSize} editable={editSellerMode} onChange={(v) => handleChange("teamSize", v)} />
            <EditableRow label="Locations Count" value={formData.numLocation} editable={editSellerMode} onChange={(v) => handleChange("numLocation", v)} />
            <EditableRow label="Founded Year" value={formData.year} editable={editSellerMode} onChange={(v) => handleChange("year", v)} />
            <EditableRow label="Founded Month" value={formData.month} editable={editSellerMode} onChange={(v) => handleChange("month", v)} />
            <EditableRow label="Business Description" value={formData.description_business} editable={editSellerMode} onChange={(v) => handleChange("description_business", v)} type="textarea" />
            <EditableRow label="Business Category" value={formData.businessCategory} editable={editSellerMode} onChange={(v) => handleChange("businessCategory", v)} 
             dropdownOptions={dropdownOptions.businessCategory}       // <- array of {id,label} coming from API
   />
            {/* <EditableRow label="Entity Structure" value={formData.entityStructure} editable={editSellerMode} onChange={(v) => handleChange("entityStructure", v)} options={dropdownOptions.entityStructure} />
               */}
                <EditableRow label="Entity Structure" value={formData.entityStructure} editable={editSellerMode} onChange={(v) => handleChange("entityStructure", v)}  dropdownOptions={dropdownOptions.entityStructure}  />
              
      </CollapsibleSection>

      {/* PREFERENCES SECTION */}
      <CollapsibleSection
        title="Financial Performance"
        isOpen={openSection === "financial"}
        onToggle={() => setOpenSection(openSection === "financial" ? "" : "financial")}
      >
     <EditableRow label="Last FY Revenue" value={formData.lastFinancialYear} editable={editSellerMode} onChange={(v) => handleChange("lastFinancialYear", v)} />
            <EditableRow label="Trailing 12 Months Revenue" value={formData.trailing12months} editable={editSellerMode} onChange={(v) => handleChange("trailing12months", v)} />
            <EditableRow label="Previous Month Revenue" value={formData.prevMonth} editable={editSellerMode} onChange={(v) => handleChange("prevMonth", v)} />
            <EditableRow label="NET Last FY" value={formData.NETlastFinancialYear} editable={editSellerMode} onChange={(v) => handleChange("NETlastFinancialYear", v)} />
            <EditableRow label="NET Trailing 12 Months" value={formData.NETtrailing12months} editable={editSellerMode} onChange={(v) => handleChange("NETtrailing12months", v)} />
            <EditableRow label="NET Prev Month" value={formData.NETprevMonth} editable={editSellerMode} onChange={(v) => handleChange("NETprevMonth", v)} />
            {/* <EditableRow label="Positive Cash Flow" value={formData.positiveCashFlow} editable={isEditing} onChange={(v) => handleChange("positiveCashFlow", v)} /> */}
          <EditableRow
  label="Positive Cash Flow"
  value={formData.positiveCashFlow ? "Yes" : "No"}
  editable={editSellerMode}
  onChange={(v) => handleChange("positiveCashFlow", v === "Yes")}
  //  options={["Yes", "No"]}
   options={["Yes", "No"]}
/>

        
      </CollapsibleSection>

{/**Assest Section */}
         <CollapsibleSection
        title="Assest & Liabilites"
        isOpen={openSection === "assest"}
        onToggle={() => setOpenSection(openSection === "assest" ? "" : "assest")}
      >
          <EditableRow label="Assets Description" value={formData.assestDesc} editable={editSellerMode} onChange={(v) => handleChange("assestDesc", v)} type="textarea" />
            <EditableRow label="Equity" value={formData.equity} editable={editSellerMode} onChange={(v) => handleChange("equity", v)} />
            <EditableRow label="Debt" value={formData.debt} editable={editSellerMode} onChange={(v) => handleChange("debt", v)} />
     
        {/**Exit Plan */}
      </CollapsibleSection>
         <CollapsibleSection
        title="Exit Plan"
        isOpen={openSection === "exit"}
        onToggle={() => setOpenSection(openSection === "exit" ? "" : "exit")}
      >
          <EditableRow label="Reason for Sale" value={formData.salereason} editable={editSellerMode} onChange={(v) => handleChange("salereason", v)} dropdownOptions={dropdownOptions.salereason} />
            <EditableRow label="Asking Price" value={formData.askingPrice} editable={editSellerMode} onChange={(v) => handleChange("askingPrice", v)} />
            <EditableRow label="Preferred Arrangement" value={formData.preferredArrangement} editable={editSellerMode} onChange={(v) => handleChange("preferredArrangement", v)} dropdownOptions={dropdownOptions.preferredArrangement}  multiple />
        
      </CollapsibleSection>
      

      {/* LOCATION SECTION */}
      {/* <CollapsibleSection
        title="Location"
        isOpen={openSection === "location"}
        onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
      >
        <EditableRow label="Country" value={formData.country} editable={editSellerMode} onChange={(v) => handleChange("country", v)} options={countries} />
            <EditableRow label="State" value={formData.state} editable={editSellerMode} onChange={(v) => handleChange("state", v)} options={states} />
            <EditableRow label="City" value={formData.city} editable={editSellerMode} onChange={(v) => handleChange("city", v)} options={cities} />
          
      </CollapsibleSection> */}
      <CollapsibleSection
  title="Location"
  isOpen={openSection === "location"}
  onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
>
  <EditableRow
    label="Country"
    value={formData.country}
    editable={editSellerMode}
    onChange={(v) => handleChange("country", v)}
    options={countries}
  />
  <EditableRow
    label="State"
    value={formData.state}
    editable={editSellerMode}
    onChange={(v) => handleChange("state", v)}
    options={states}
  />
  <EditableRow
    label="City"
    value={formData.city}
    editable={editSellerMode}
    onChange={(v) => handleChange("city", v)}
    options={cities}
  />
</CollapsibleSection>

    </div>
  </div>
)}


              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReusableCards;
