// import React, { useEffect, useState } from "react";
// import { Button } from "@mui/material";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import { toast } from "react-toastify";
// import Header from "../../component/Header";
// import Footer from "../../component/Footer";

// const EditableRow = ({ label, value, editable, onChange, textarea, dropdownOptions }) => (
//   <div className="flex gap-5 items-start flex-wrap my-2">
//     <h1 className="font-semibold flex items-center">
//       <CheckBoxIcon className="!text-green-600 mr-1" />
//       <span>{label}:</span>
//     </h1>
//     {editable ? (
//       dropdownOptions ? (
//         <select
//           className="border rounded px-2 py-1"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//         >
//           <option value="">Select</option>
//           {dropdownOptions.map((opt) => (
//             <option key={opt} value={opt}>
//               {opt}
//             </option>
//           ))}
//         </select>
//       ) : textarea ? (
//         <textarea
//           className="border rounded px-2 py-1 w-full md:w-[60%]"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//         />
//       ) : (
//         <input
//           className="border rounded px-2 py-1"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//         />
//       )
//     ) : (
//       <p>{value}</p>
//     )}
//   </div>
// );

// const CollapsibleSection = ({ title, children, isOpen, onToggle }) => (
//   <div className="border-t pt-4">
//     <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
//       <h2 className="text-xl font-bold">{title}</h2>
//       <span>{isOpen ? "▲" : "▼"}</span>
//     </div>
//     {isOpen && <div className="mt-4">{children}</div>}
//   </div>
// );

// const BuyerDashboard = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [openSection, setOpenSection] = useState("personal");
//   const [buyerData, setBuyerData] = useState({
//     typeOfBuyer: "",
//     designation: "",
//     description: "",
//     linkedinProfile: "",
//     businessCategories: [],
//     ticketSizeMin: "",
//     ticketSizeMax: "",
//     businesslocationCountry: "",
//     businesslocationState: "",
//     businesslocationCities: [],
//     openToPreRevenue: false,
//     openToPreBreakeven: false,
    
//     metric: "",
//     maxMultiple: "",
//     preferredArrangement: [],
//   });

//   const token = localStorage.getItem("token");

//   const countryStateCityMap = {
//     India: {
//       Delhi: ["New Delhi", "Dwarka", "Rohini"],
//       Maharashtra: ["Mumbai", "Pune", "Nagpur"],
//       Karnataka: ["Bangalore", "Mysore", "Mangalore"],
//     },
//     USA: {
//       NewYork: ["New York City", "Buffalo", "Rochester"],
//       California: ["Los Angeles", "San Francisco", "San Diego"],
//       Illinois: ["Chicago", "Springfield", "Naperville"],
//     },
//     Germany: {
//       Berlin: ["Mitte", "Kreuzberg", "Prenzlauer Berg"],
//       Bavaria: ["Munich", "Nuremberg", "Augsburg"],
//       Hesse: ["Frankfurt", "Wiesbaden", "Kassel"],
//     },
//   };

//   const handleChange = (key, value) => {
//     setBuyerData((prev) => ({ ...prev, [key]: value }));
//     if (key === "businesslocationCountry") {
//       setBuyerData((prev) => ({ ...prev, businesslocationState: "", businesslocationCities: [] }));
//     } else if (key === "businesslocationState") {
//       setBuyerData((prev) => ({ ...prev, businesslocationCities: [] }));
//     }
//   };

//   const handleArrayChange = (key, index, value) => {
//     const newArray = [...buyerData[key]];
//     newArray[index] = value;
//     setBuyerData((prev) => ({ ...prev, [key]: newArray }));
//   };

//   const fetchBuyerData = async () => {
//     try {
//       const response = await fetch("https://bizplorers-backend.onrender.com/api/buyer/getBuyer", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await response.json();
//       setBuyerData(data);
//     } catch (err) {
//       toast.error("Error fetching data");
//     }
//   };

//   const updateData = async () => {
//     try {
//       const response = await fetch("https://bizplorers-backend.onrender.com/api/buyer/updateBuyer", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(buyerData),
//       });
//       await response.json();
//       toast.success("Details updated successfully!");
//     } catch (err) {
//       toast.error("Update failed");
//     }
//   };

//   const handleEditToggle = () => {
//     if (isEditing) updateData();
//     setIsEditing(!isEditing);
//   };

//   useEffect(() => {
//     fetchBuyerData();
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="flex justify-center items-center">
//         <div className="flex flex-col border rounded-md mt-10 px-6 w-full m-4 max-w-screen-md bg-white shadow-md">
//           <div className="flex justify-between w-full my-4">
//             <h1 className="text-2xl font-bold">BUYER DETAILS</h1>
//             <Button variant="contained" onClick={handleEditToggle}>
//               {isEditing ? "Save" : "Edit Details"}
//             </Button>
//           </div>

//           <CollapsibleSection
//             title="Personal Details"
//             isOpen={openSection === "personal"}
//             onToggle={() => setOpenSection(openSection === "personal" ? "" : "personal")}
//           >
//             <EditableRow label="Type Of Buyer" value={buyerData.typeOfBuyer} editable={isEditing} onChange={(v) => handleChange("typeOfBuyer", v)} dropdownOptions={["Individual", "Organization"]} />
//             <EditableRow label="Designation" value={buyerData.designation} editable={isEditing} onChange={(v) => handleChange("designation", v)} />
//             <EditableRow label="LinkedIn" value={buyerData.linkedinProfile} editable={isEditing} onChange={(v) => handleChange("linkedinProfile", v)} />
//             <EditableRow label="Description" value={buyerData.description} editable={isEditing} onChange={(v) => handleChange("description", v)} textarea />
//           </CollapsibleSection>

//           <CollapsibleSection
//             title="Preferences"
//             isOpen={openSection === "preferences"}
//             onToggle={() => setOpenSection(openSection === "preferences" ? "" : "preferences")}
//           >
//             <EditableRow label="Ticket Size Min" value={buyerData.ticketSizeMin} editable={isEditing} onChange={(v) => handleChange("ticketSizeMin", v)} />
//             <EditableRow label="Ticket Size Max" value={buyerData.ticketSizeMax} editable={isEditing} onChange={(v) => handleChange("ticketSizeMax", v)} />
           
//             <EditableRow label="Metric" value={buyerData.metric} editable={isEditing} onChange={(v) => handleChange("metric", v)} dropdownOptions={["sales", "profit"]} />
//             <EditableRow label="Max Multiple" value={buyerData.maxMultiple} editable={isEditing} onChange={(v) => handleChange("maxMultiple", v)} />
//             <EditableRow label="Open to Pre-Revenue" value={buyerData.openToPreRevenue ? "Yes" : "No"} editable={isEditing} onChange={(v) => handleChange("openToPreRevenue", v === "Yes")} dropdownOptions={["Yes", "No"]} />
//             <EditableRow label="Open to Pre-Breakeven" value={buyerData.openToPreBreakeven ? "Yes" : "No"} editable={isEditing} onChange={(v) => handleChange("openToPreBreakeven", v === "Yes")} dropdownOptions={["Yes", "No"]} />
//           </CollapsibleSection>

//           <CollapsibleSection
//             title="Location & Preferences"
//             isOpen={openSection === "location"}
//             onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
//           >
//             <EditableRow label="Country" value={buyerData.businesslocationCountry} editable={isEditing} onChange={(v) => handleChange("businesslocationCountry", v)} dropdownOptions={Object.keys(countryStateCityMap)} />

//             {buyerData.businesslocationCountry && (
//               <EditableRow
//                 label="State"
//                 value={buyerData.businesslocationState}
//                 editable={isEditing}
//                 onChange={(v) => handleChange("businesslocationState", v)}
//                 dropdownOptions={Object.keys(
//                   countryStateCityMap[buyerData.businesslocationCountry] || {}
//                 )}
//               />
//             )}

//             {buyerData.businesslocationState && (
//               <div className="flex flex-col">
//                 <label className="font-semibold">Cities:</label>
//                 {isEditing ? (
//                   (countryStateCityMap[buyerData.businesslocationCountry]?.[buyerData.businesslocationState] || []).map(
//                     (city) => (
//                       <label key={city} className="flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           checked={buyerData.businesslocationCities.includes(city)}
//                           onChange={(e) => {
//                             const selected = buyerData.businesslocationCities.includes(city);
//                             const updatedCities = selected
//                               ? buyerData.businesslocationCities.filter((c) => c !== city)
//                               : [...buyerData.businesslocationCities, city];
//                             handleChange("businesslocationCities", updatedCities);
//                           }}
//                         />
//                         {city}
//                       </label>
//                     )
//                   )
//                 ) : (
//                   <p>{buyerData.businesslocationCities.join(", ")}</p>
//                 )}
//               </div>
//             )}

//             {/* <div className="flex gap-3 flex-wrap mt-2">
//               <h1 className="font-semibold flex items-center">
//                 <CheckBoxIcon className="!text-green-600 mr-1" /> Preferred Arrangement:
//               </h1>
//               {buyerData.preferredArrangement.map((arr, i) =>
//                 isEditing ? (
//                   <input
//                     key={i}
//                     className="border px-2 py-1 rounded-md"
//                     value={arr}
//                     onChange={(e) => handleArrayChange("preferredArrangement", i, e.target.value)}
//                   />
//                 ) : (
//                   <p key={i} className="mr-2">
//                     {arr},
//                   </p>
//                 )
//               )}
//             </div> */}
//             <div className="my-3">
//   <h1 className="font-semibold flex items-center mb-1">
//     <CheckBoxIcon className="!text-green-600 mr-1" /> Preferred Arrangement:
//   </h1>
//   {isEditing ? (
//     <select
//       multiple
//       className="border rounded px-2 py-1 w-full md:w-1/2"
//       value={buyerData.preferredArrangement}
//       onChange={(e) =>
//         handleChange(
//           "preferredArrangement",
//           Array.from(e.target.selectedOptions, (option) => option.value)
//         )
//       }
//     >
//       {["Cash", "Stock", "Royalty", "Acquihire"].map((option) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   ) : (
//     <p>{buyerData.preferredArrangement.join(", ") || "N/A"}</p>
//   )}
// </div>

//           </CollapsibleSection>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BuyerDashboard;
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { toast } from "react-toastify";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import {CircularProgress} from "@mui/material";
// Reusable row
const EditableRow = ({ label, value, editable, onChange, textarea, dropdownOptions }) => (
  <div className="flex gap-5 items-start flex-wrap my-2">
    <h1 className="font-semibold flex items-center">
      <CheckBoxIcon className="!text-green-600 mr-1" />
      <span>{label}:</span>
    </h1>
    {editable ? (
      dropdownOptions ? (
        <select className="border rounded px-2 py-1" value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Select</option>
          {dropdownOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : textarea ? (
        <textarea className="border rounded px-2 py-1 w-full md:w-[60%]" value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input className="border rounded px-2 py-1" value={value} onChange={(e) => onChange(e.target.value)} />
      )
    ) : (
      <p>{Array.isArray(value) ? value.join(", ") : value}</p>
    )}
  </div>
);

// Collapsible section
const CollapsibleSection = ({ title, children, isOpen, onToggle }) => (
  <div className="border-t pt-4">
    <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
      <h2 className="text-xl font-bold">{title}</h2>
      <span>{isOpen ? "▲" : "▼"}</span>
    </div>
    {isOpen && <div className="mt-4">{children}</div>}
  </div>
);

const BuyerDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSection, setOpenSection] = useState("personal");
  const [buyerData, setBuyerData] = useState({
    typeOfBuyer: "",
    designation: "",
    description: "",
    linkedinProfile: "",
    businessCategories: [],
    ticketSizeMin: "",
    ticketSizeMax: "",
    businesslocationCountry: "",
    businesslocationState: "",
    businesslocationCities: [],
    openToPreRevenue: false,
    openToPreBreakeven: false,
    // metric: "",
    // maxMultiple: "",
    preferredArrangement: [],
  });

  const token = localStorage.getItem("token");

  const countryStateCityMap = {
    India: {
      Delhi: ["New Delhi", "Dwarka", "Rohini"],
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Karnataka: ["Bangalore", "Mysore", "Mangalore"],
    },
    USA: {
      NewYork: ["New York City", "Buffalo", "Rochester"],
      California: ["Los Angeles", "San Francisco", "San Diego"],
      Illinois: ["Chicago", "Springfield", "Naperville"],
    },
    Germany: {
      Berlin: ["Mitte", "Kreuzberg", "Prenzlauer Berg"],
      Bavaria: ["Munich", "Nuremberg", "Augsburg"],
      Hesse: ["Frankfurt", "Wiesbaden", "Kassel"],
    },
  };

  const businessCategoryOptions = [
    "E-commerce",
    "Offline Retail",
    "Fintech",
    "Edtech",
    "Saas",
    "Education & training",
    "Restaurant/café",
    "Mobile App",
  ];

  const preferredArrangementOptions = ["Cash", "Stock", "Royalty", "Acquihire"];

  // const handleChange = (key, value) => {
  //   setBuyerData((prev) => ({ ...prev, [key]: value }));
  //   if (key === "businesslocationCountry") {
  //     setBuyerData((prev) => ({ ...prev, businesslocationState: "", businesslocationCities: [] }));
  //   } else if (key === "businesslocationState") {
  //     setBuyerData((prev) => ({ ...prev, businesslocationCities: [] }));
  //   }

  // };

  const handleChange = (key, value) => {
  setBuyerData((prev) => {
    const updated = { ...prev, [key]: value };

    if (key === "businesslocationCountry") {
      updated.businesslocationState = "";
      updated.businesslocationCities = [];
    } else if (key === "businesslocationState") {
      updated.businesslocationCities = [];
    }

    return updated;
  });
};

 const handleCancel=()=>{
    setIsEditing(!isEditing);
  }

  const fetchBuyerData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://bizplorers-backend.onrender.com/api/buyer/getBuyer", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setBuyerData(data);
      setLoading(false);
    } catch (err) {
      toast.error("Error fetching data");
    }
  };

  const updateData = async () => {
    try {
      const response = await fetch("https://bizplorers-backend.onrender.com/api/buyer/updateBuyer", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(buyerData),
      });
      await response.json();
      toast.success("Details updated successfully!");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  const handleEditToggle = () => {
    if (isEditing) updateData();
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    fetchBuyerData();
  }, []);

  return (
    <div>
      <Header />

       {loading ? (
                  <div className="flex justify-center w-full min-h-screen">
                    <CircularProgress />
                  </div>
                ) : (
      <div className="flex justify-center items-center my-[6%]">
        <div className="flex flex-col border rounded-md mt-10 px-6 w-full m-4 max-w-screen-md bg-white shadow-md">
          <div className="flex justify-between w-full my-4">
            <h1 className="text-2xl font-bold">BUYER DETAILS</h1>
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

          {/* Personal Section */}
          <CollapsibleSection
            title="Personal Details"
            isOpen={openSection === "personal"}
            onToggle={() => setOpenSection(openSection === "personal" ? "" : "personal")}
          >
            <EditableRow label="Type Of Buyer" value={buyerData.typeOfBuyer} editable={isEditing} onChange={(v) => handleChange("typeOfBuyer", v)} dropdownOptions={["Individual", "Organization"]} />
            <EditableRow label="Designation" value={buyerData.designation} editable={isEditing} onChange={(v) => handleChange("designation", v)} />
            <EditableRow label="LinkedIn" value={buyerData.linkedinProfile?buyerData.linkedinProfile:"N/A"} editable={isEditing} onChange={(v) => handleChange("linkedinProfile", v)} />
            <EditableRow label="Description" value={buyerData.description} editable={isEditing} onChange={(v) => handleChange("description", v)} textarea />
          </CollapsibleSection>

          {/* Preferences */}
          <CollapsibleSection
            title="Preferences"
            isOpen={openSection === "preferences"}
            onToggle={() => setOpenSection(openSection === "preferences" ? "" : "preferences")}
          >
            <EditableRow label="Ticket Size Min" value={buyerData.ticketSizeMin} editable={isEditing} onChange={(v) => handleChange("ticketSizeMin", v)} />
            <EditableRow label="Ticket Size Max" value={buyerData.ticketSizeMax} editable={isEditing} onChange={(v) => handleChange("ticketSizeMax", v)} />
            {/* <EditableRow label="Metric" value={buyerData.metric} editable={isEditing} onChange={(v) => handleChange("metric", v)} dropdownOptions={["sales", "profit"]} /> */}
            {/* <EditableRow label="Max Multiple" value={buyerData.maxMultiple} editable={isEditing} onChange={(v) => handleChange("maxMultiple", v)} /> */}
            <EditableRow label="Open to Pre-Revenue" value={buyerData.openToPreRevenue ? "Yes" : "No"} editable={isEditing} onChange={(v) => handleChange("openToPreRevenue", v === "Yes")} dropdownOptions={["Yes", "No"]} />
            <EditableRow label="Open to Pre-Breakeven" value={buyerData.openToPreBreakeven ? "Yes" : "No"} editable={isEditing} onChange={(v) => handleChange("openToPreBreakeven", v === "Yes")} dropdownOptions={["Yes", "No"]} />

            {/* Preferred Arrangement */}
            <div className="my-3">
              <h1 className="font-semibold flex items-center mb-1">
                <CheckBoxIcon className="!text-green-600 mr-1" /> Preferred Arrangement:
              </h1>
              {isEditing ? (
                <select
                  multiple
                  className="border rounded px-2 py-1 w-full md:w-1/2"
                  value={buyerData.preferredArrangement}
                  onChange={(e) =>
                    handleChange(
                      "preferredArrangement",
                      Array.from(e.target.selectedOptions, (option) => option.value)
                    )
                  }
                >
                  {preferredArrangementOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <p>{buyerData.preferredArrangement.join(", ") || "N/A"}</p>
              )}
            </div>
          </CollapsibleSection>

          {/* Location Section */}
          <CollapsibleSection
            title="Location"
            isOpen={openSection === "location"}
            onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
          >
            <EditableRow label="Country" value={buyerData.businesslocationCountry} editable={isEditing} onChange={(v) => handleChange("businesslocationCountry", v)} dropdownOptions={Object.keys(countryStateCityMap)} />
            {buyerData.businesslocationCountry && (
            <EditableRow
  label="State"
  value={buyerData.businesslocationState || "N/A"}
  editable={isEditing}
  onChange={(v) => handleChange("businesslocationState", v)}
  dropdownOptions={
    buyerData.businesslocationCountry
      ? Object.keys(countryStateCityMap[buyerData.businesslocationCountry] || {})
      : []
  }
/>

            )}
            <div className="my-2">
              <h1 className="font-semibold flex items-center mb-1">
                <CheckBoxIcon className="!text-green-600 mr-1" /> Cities:
              </h1>
              {isEditing ? (
                (countryStateCityMap[buyerData.businesslocationCountry]?.[buyerData.businesslocationState] || []).map(
                  (city) => (
                    <label key={city} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={buyerData.businesslocationCities.includes(city)}
                        onChange={(e) => {
                          const selected = buyerData.businesslocationCities.includes(city);
                          const updatedCities = selected
                            ? buyerData.businesslocationCities.filter((c) => c !== city)
                            : [...buyerData.businesslocationCities, city];
                          handleChange("businesslocationCities", updatedCities);
                        }}
                      />
                      {city}
                    </label>
                  )
                )
              ) : (
                <p>{buyerData.businesslocationCities.join(", ") || "N/A"}</p>
              )}
            </div>

            {/* Business Categories */}
            <div className="my-3">
              <h1 className="font-semibold flex items-center mb-1">
                <CheckBoxIcon className="!text-green-600 mr-1" /> Business Categories:
              </h1>
              {isEditing ? (
                <select
                  multiple
                  className="border rounded px-2 py-1 w-full md:w-1/2"
                  value={buyerData.businessCategories}
                  onChange={(e) =>
                    handleChange("businessCategories", Array.from(e.target.selectedOptions, (opt) => opt.value))
                  }
                >
                  {businessCategoryOptions.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              ) : (
                <p>{buyerData.businessCategories.join(", ") || "N/A"}</p>
              )}
            </div>
          </CollapsibleSection>
        </div>
      </div>
                )}
      <Footer />

    </div>
  );
};

export default BuyerDashboard;
