import React, { useState, useEffect } from "react";
import { Button, MenuItem, Select, Checkbox, ListItemText } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { toast } from "react-toastify";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import {CircularProgress} from "@mui/material";

// const countryStateCityMap = {
//   India: {
//     Delhi: ["New Delhi", "Dwarka", "Rohini"],
//     Maharashtra: ["Mumbai", "Pune", "Nagpur"],
//     Karnataka: ["Bangalore", "Mysore", "Mangalore"],
//   },
//   USA: {
//     NewYork: ["New York City", "Buffalo", "Rochester"],
//     California: ["Los Angeles", "San Francisco", "San Diego"],
//     Illinois: ["Chicago", "Springfield", "Naperville"],
//   },
//   Germany: {
//     Berlin: ["Mitte", "Kreuzberg", "Prenzlauer Berg"],
//     Bavaria: ["Munich", "Nuremberg", "Augsburg"],
//     Hesse: ["Frankfurt", "Wiesbaden", "Kassel"],
//   },
// };

// const dropdownOptions = {
//   businessCategory: [
//               "E-commerce",
//               "Offline Retail",
//               "Fintech",
//               "Edtech",
//               "Saas",
//               "Education & training",
//               "Restaurant/café",
//               "Mobile App",
//             ],
//   entityStructure: ["PartnerShip", "LLP", "Private Ltd", "Public Ltd"],
//   salereason: ['No Cash Runway','Bandwidth constraints','Inability to Scale','Relocation'],
//   preferredArrangement: ["Cash", "Stock", "Royalty", "Acquihire"],
// };

  const picklists=localStorage.getItem("picklists");
   const parsedPicklists=JSON.parse(picklists);
   console.log("parsedPicklists-----",parsedPicklists);
   console.log("parsedPicklistsbuyerrr-----",parsedPicklists?.[5]);

   

const Section = ({ title, isOpen, toggleOpen, children }) => (
  <div className="border-t pt-4">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={toggleOpen}
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <span>{isOpen ? "▲" : "▼"}</span>
    </div>
    {isOpen && <div className="mt-4">{children}</div>}
  </div>
);

// const EditableRow = ({ label, value, editable, onChange, type = "text", options = [], multiple = false }) => {
//   const renderView = () => <p>{Array.isArray(value) ? value.join(", ") : value || "—"}</p>;

//   const renderEdit = () => {
//     if (options.length > 0) {
//       return multiple ? (
//         <Select
//           multiple
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           renderValue={(selected) => selected.join(", ")}
//           className="min-w-[200px] h-10"
//         >
//           {/* {options.map((opt) => (
//             <MenuItem key={opt} value={opt}>
//               <Checkbox checked={value.includes(opt)} />
//               <ListItemText primary={opt} />
//             </MenuItem>
//           ))} */}
//           {options.map((opt) => {
//   const val = typeof opt === "string" ? opt : opt.value;
//   return (
//     <MenuItem key={val} value={val}>
//       <Checkbox checked={value.includes(val)} />
//       <ListItemText primary={val} />
//     </MenuItem>
//   );
// })}

//         </Select>
//       ) : (
//         <Select value={value} onChange={(e) => onChange(e.target.value)} className="min-w-[200px] h-10">
//           {/* {options.map((opt) => (
//             <MenuItem key={opt} value={opt}>
//               {opt}
//             </MenuItem>
//           ))} */}
//           {options.map((opt) => {
//   const val = typeof opt === "string" ? opt : opt.value;
//   return (
//     <MenuItem key={val} value={val}>
//       {val}
//     </MenuItem>
//   );
// })}

//         </Select>
//       );
//     }

//     if (type === "textarea") {
//       return (
//         <textarea
//           className="border rounded px-2 py-1 w-full md:w-[60%]"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//         />
//       );
//     }

//     return (
//       <input
//         className="border rounded px-2 py-1"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     );
//   };

//   return (
//     <div className="flex gap-5 items-start flex-wrap my-2">
//       <h1 className="font-semibold flex items-center">
//         <CheckBoxIcon className="!text-green-600 mr-1" />
//         {label}:
//       </h1>
//       {editable ? renderEdit() : renderView()}
//     </div>
//   );
// };
// const EditableRow = ({
//   label,
//   value,
//   editable,
//   onChange,
//   type = "text",
//   options = [],
//   multiple = false,
// }) => {
//   /* ---------- helpers ---------- */
//   const getId   = (opt) => (typeof opt === "string" ? opt : opt.id);
//   const getText = (opt) => (typeof opt === "string" ? opt : opt.label ?? opt.value);
// console.log("getId",getId);
// console.log("getText",getText);
//   /* ---------- VIEW mode ---------- */
//   const renderView = () => {
//     if (Array.isArray(value)) return <p>{value.map(getText).join(", ") || "—"}</p>;
//     if (typeof value === "object") return <p>{getText(value) || "—"}</p>;
//     return <p>{value || "—"}</p>;
//   };

//   /* ---------- EDIT mode ---------- */
//   const renderEdit = () => {
//     /* textarea or free‑text ---------------------------------- */
//     if (options.length === 0) {
//       if (type === "textarea") {
//         return (
//           <textarea
//             className="border rounded px-2 py-1 w-full md:w-[60%]"
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//           />
//         );
//       }
//       return (
//         <input
//           className="border rounded px-2 py-1"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//         />
//       );
//     }

//     /* dropdown (single / multi) ------------------------------ */
//     if (multiple) {
//       const selectedIds = (value || []).map(getId);
//       return (
//         <Select
//           multiple
//           value={selectedIds}
//           onChange={(e) => {
//             const newVals = options.filter((o) =>
//               e.target.value.includes(getId(o))
//             );
//             onChange(newVals);
//           }}
//           renderValue={(selected) =>
//             selected
//               .map((id) => getText(options.find((o) => getId(o) === id)))
//               .join(", ")
//           }
//           className="min-w-[200px] h-10"
//         >
//           {options.map((opt) => {
//             const id = getId(opt);
//             return (
//               <MenuItem key={id} value={id}>
//                 <Checkbox checked={selectedIds.includes(id)} />
//                 <ListItemText primary={getText(opt)} />
//               </MenuItem>
//             );
//           })}
//         </Select>
//       );
//     }

//     /* single‑select ------------------------------------------ */
//     const currentId = value ? getId(value) : "";
//     return (
//       <Select
//         value={currentId}
//         onChange={(e) => {
//           const selected = options.find((o) => getId(o) === e.target.value);
//           onChange(selected);
//         }}
//         className="min-w-[200px] h-10"
//       >
//         {options.map((opt) => {
//           const id = getId(opt);
//           return (
//             <MenuItem key={id} value={id}>
//               {getText(opt)}
//             </MenuItem>
//           );
//         })}
//       </Select>
//     );
//   };



// // const renderEdit = () => {
// //   // Textarea or text input if no options
// //   if (options.length === 0) {
// //     if (type === "textarea") {
// //       return (
// //         <textarea
// //           className="border rounded px-2 py-1 w-full md:w-[60%]"
// //           value={value || ""}
// //           onChange={(e) => onChange(e.target.value)}
// //         />
// //       );
// //     }
// //     return (
// //       <input
// //         className="border rounded px-2 py-1"
// //         value={value || ""}
// //         onChange={(e) => onChange(e.target.value)}
// //       />
// //     );
// //   }

// //   // Multi-select dropdown
// //   if (multiple) {
// //     const selectedIds = (value || []).map(getId);
// //     return (
// //       <Select
// //         multiple
// //         value={selectedIds}
// //         onChange={(e) => {
// //           const newVals = options.filter((o) =>
// //             e.target.value.includes(getId(o))
// //           );
// //           onChange(newVals);
// //         }}
// //         renderValue={(selected) =>
// //           selected
// //             .map((id) => getText(options.find((o) => getId(o) === id)))
// //             .join(", ")
// //         }
// //         className="min-w-[200px] h-10"
// //       >
// //         {options.map((opt) => {
// //           const id = getId(opt);
// //           return (
// //             <MenuItem key={id} value={id}>
// //               <Checkbox checked={selectedIds.includes(id)} />
// //               <ListItemText primary={getText(opt)} />
// //             </MenuItem>
// //           );
// //         })}
// //       </Select>
// //     );
// //   }

// //   // Single-select dropdown
// //   const currentId =
// //     value && typeof value === "object" ? getId(value) : value || "";

// //   return (
// //     <Select
// //       value={currentId}
// //       onChange={(e) => {
// //         const selectedOption = options.find(
// //           (opt) => getId(opt) === e.target.value
// //         );
// //         onChange(selectedOption || e.target.value); // for non-object values
// //       }}
// //       className="min-w-[200px] h-10"
// //     >
// //       {options.map((opt) => {
// //         const id = getId(opt);
// //         return (
// //           <MenuItem key={id} value={id}>
// //             {getText(opt)}
// //           </MenuItem>
// //         );
// //       })}
// //     </Select>
// //   );
// // };


//   /* ---------- JSX row wrapper ---------- */
//   return (
//     <div className="flex gap-5 items-start flex-wrap my-2">
//       <h1 className="font-semibold flex items-center">
//         <CheckBoxIcon className="!text-green-600 mr-1" />
//         {label}:
//       </h1>
//       {editable ? renderEdit() : renderView()}
//     </div>
//   );
// };



const EditableRow = ({
  label,
  value,
  editable,
  onChange,
  type = "text",
  options = [],
  multiple = false,
}) => {
  const getId = (opt) => (typeof opt === "string" ? opt : opt?.id?.toString?.() || "");
  const getText = (opt) =>
    typeof opt === "string" ? opt : opt?.label ?? opt?.name ?? opt?.value ?? "";

  const renderView = () => {
    if (Array.isArray(value)) {
      return <p>{value.map(getText).join(", ") || "—"}</p>;
    }
    if (typeof value === "object") {
      return <p>{getText(value) || "—"}</p>;
    }
    return <p>{value || "—"}</p>;
  };

  const renderEdit = () => {
    // Free input or textarea
    if (options.length === 0) {
      if (type === "textarea") {
        return (
          <textarea
            className="border rounded px-2 py-1 w-full md:w-[60%]"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
          />
        );
      }
      return (
        <input
          className="border rounded px-2 py-1"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    }

    // Multi-select
    if (multiple) {
      const selectedIds = Array.isArray(value)
        ? value.map((v) => getId(v).toString())
        : [];

      return (
        <Select
          multiple
          value={selectedIds}
          onChange={(e) => {
            const selected = options.filter((o) =>
              e.target.value.includes(getId(o).toString())
            );
            onChange(selected);
          }}
          renderValue={(selected) =>
            selected
              .map((id) => {
                const match = options.find((o) => getId(o) === id);
                return getText(match);
              })
              .join(", ")
          }
          className="min-w-[200px] h-10"
        >
          {options.map((opt) => {
            const id = getId(opt).toString();
            return (
              <MenuItem key={id} value={id}>
                <Checkbox checked={selectedIds.includes(id)} />
                <ListItemText primary={getText(opt)} />
              </MenuItem>
            );
          })}
        </Select>
      );
    }

    // Single-select
    const currentId = value ? getId(value).toString() : "";

    return (
      <Select
        value={currentId}
        onChange={(e) => {
          const selected = options.find((o) => getId(o).toString() === e.target.value);
          onChange(selected || e.target.value);
        }}
        className="min-w-[200px] h-10"
      >
        {options.map((opt) => {
          const id = getId(opt).toString();
          return (
            <MenuItem key={id} value={id}>
              {getText(opt)}
            </MenuItem>
          );
        })}
      </Select>
    );
  };

  return (
    <div className="flex gap-5 items-start flex-wrap my-2">
      <h1 className="font-semibold flex items-center">
        <CheckBoxIcon className="!text-green-600 mr-1" />
        {label}:
      </h1>
      {editable ? renderEdit() : renderView()}
    </div>
  );
};


const SellerDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
   const [countries, setCountries] = useState([]);
   const[preferredArrangement,setPreferredArrangement]=useState([]);
    const[saleReason,setSaleReason]=useState([]);
     const[businessCategoryArray,setbusinessCategoryArray]=useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const[loading,setLoading]=useState(false);
  const [openSections, setOpenSections] = useState({
    company: true,
    finance: false,
    location: false,
    ownership: false,
    exit: false,
  });

 
  const [formData, setFormData] = useState({
    company_name: "",
    website_url: "",
    CIN: "",
    company_linkedin: "",
    description_business: "",
    numcofounder: "",
    teamSize: "",
    numLocation: "",
    year: "",
    month: "",
    cofounderLinks: [],
    businessCategory: "",
    entityStructure: "",
    country: "",
    state: "",
    city: "",
    lastFinancialYear: "",
    trailing12months: "",
    prevMonth: "",
    NETlastFinancialYear: "",
    NETtrailing12months: "",
    NETprevMonth: "",
    positiveCashFlow: "",
    assestDesc: "",
    equity: "",
    debt: "",
    salereason: "",
    askingPrice: "",
    preferredArrangement: [],
  });

  //   useEffect(()=>{
  //     const countryArray=parsedPicklists[2]?.values;
  // setCountries(countryArray);
  
  // },[]);
  useEffect(() => {
  const countryArray = parsedPicklists[2]?.values || [];
  const mapped = countryArray.map((c) => ({
    id: c.id,
    label: c.value,
  }));
  setCountries(mapped);

  const SaleArray = parsedPicklists[6]?.values || [];
  const Salemapped = SaleArray.map((c) => ({
    id: c.id,
    label: c.value,
  }));
  setSaleReason(Salemapped);

  const ArrangementArray = parsedPicklists[5]?.values || [];
  const arrangemapped = ArrangementArray.map((c) => ({
    id: c.id,
    label: c.value,
  }));
  setPreferredArrangement(arrangemapped);
  const businessCategoryArray = parsedPicklists[0]?.values || [];
  const businessCategorymapped = businessCategoryArray.map((c) => ({
    id: c.id,
    label: c.value,
  }));
  setbusinessCategoryArray(businessCategorymapped);

}, []);


  // const handleChange = (key, value) => {
  //   setFormData((prev) => ({ ...prev, [key]: value }));
  //   if (key === "country") setFormData((prev) => ({ ...prev, state: "", city: "" }));
  //   if (key === "state") setFormData((prev) => ({ ...prev, city: "" }));
  // };
//   const handleChange = (field, value) => {
//      console.log("handlebefireeefiled---",field);
//     console.log("handlebefireee---",value);
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
//     console.log("handlechange-----",value);
//     fetchStateByCountryData(value.id);        // <-- states API
//   }

//   if (field === "state" || field.endsWith("State")) {
//       console.log("handlechangeststae-----",value);
//     fetchCityByStateData(value);           // <-- cities API
//   }
// };
const handleChange = (field, selectedValue) => {
  console.log("Field:", field);
  console.log("Value:", selectedValue);
// let valueToSelect;
//   if(field==='businessCategory'){
// valueToSelect=selectedValue.value;
//   }
//   else{
//     valueToSelect=selectedValue;
//   }

  setFormData((prev) => {
    // const next = { ...prev, [field]: valueToSelect};
     const next = { ...prev, [field]: selectedValue};


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


  const token = localStorage.getItem("token");

  const fetchSellerData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://bizplorers-backend.onrender.com/api/seller/get_detail", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setFormData(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Error loading data");
    }
  };

  const updateData = async () => {
    try {
      const res = await fetch("https://bizplorers-backend.onrender.com/api/seller/update_detail", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      await res.json();
      toast.success("Data updated!");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  const handleCancel=()=>{
    setIsEditing(!isEditing);
  }

  const handleEditToggle = () => {
    if (isEditing) updateData();
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    fetchSellerData();
  }, []);

  //  const fetchStateByCountryData = async (id) => {
  //     try {
  //       const response = await fetch(`https://bizplorers-backend.onrender.com/api/picklist/states?countryId=${id}`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${token}`,
  //         },
  //       });

  
  //       if (!response.ok) throw new Error('Failed to fetch');
  
  //       const data = await response.json();
  //       console.log("data---buyerstate--",data);
  //       setStates(data);
  //     } catch (error) {
  //       console.error(error);
       
  //     }
  //   };

  const fetchStateByCountryData = async (id) => {
  const res = await fetch(`https://bizplorers-backend.onrender.com/api/picklist/states?countryId=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  const mapped = data.map((s) => ({
    id: s.id,
    label: s.value,
  }));
  setStates(mapped);
};

    //  const fetchCityByStateData = async (id) => {
    //   try {
    //     const response = await fetch(`https://bizplorers-backend.onrender.com/api/picklist/cities?stateId=${id}`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`,
    //       },
    //     });

  
    //     if (!response.ok) throw new Error('Failed to fetch');
  
    //     const data = await response.json();
    //     console.log("data---buyerstate--",data);
    //     setCities(data);
    //   } catch (error) {
    //     console.error(error);
       
    //   }
    // };
  // const countries = Object.keys(countryStateCityMap);
  // const countries = parsedPicklists[2].values;
  // const states = formData.country ? Object.keys(countryStateCityMap[formData.country]) : [];
  // const cities = formData.country && formData.state ? countryStateCityMap[formData.country][formData.state] : [];
const fetchCityByStateData = async (id) => {
  const res = await fetch(`https://bizplorers-backend.onrender.com/api/picklist/cities?stateId=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  const mapped = data.map((c) => ({
    id: c.id,
    label: c.value,
  }));
  setCities(mapped);
};

  return (
    <div>
      <Header />
       {loading ? (
                  <div className="flex justify-center w-full min-h-screen">
                    <CircularProgress />
                  </div>
                ) : (
      <div className="flex justify-center items-center mb-[10%]">
        <div className="flex flex-col border rounded-md mt-[7%] px-6 w-full m-4 max-w-screen-md bg-white shadow-md">
          <div className="flex justify-between w-full my-4">
            <h1 className="text-2xl font-bold">SELLER DETAILS</h1>
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

          {/* Section 1 */}
          <Section
            title="Company Details"
            isOpen={openSections.company}
            toggleOpen={() => setOpenSections((p) => ({ ...p, company: !p.company }))}
          >
            <EditableRow label="Company Name" value={formData.company_name} editable={isEditing} onChange={(v) => handleChange("company_name", v)} />
            <EditableRow label="Business Headline" value={formData.headline} editable={isEditing} onChange={(v) => handleChange("headline", v)} />
            <EditableRow label="Website" value={formData.website_url} editable={isEditing} onChange={(v) => handleChange("website_url", v)} />
            <EditableRow label="CIN" value={formData.CIN} editable={isEditing} onChange={(v) => handleChange("CIN", v)} />
            <EditableRow label="Company LinkedIn" value={formData.company_linkedin} editable={isEditing} onChange={(v) => handleChange("company_linkedin", v)} />
            <EditableRow label="No. of Cofounders" value={formData.numcofounder} editable={isEditing} onChange={(v) => handleChange("numcofounder", v)} />
            <EditableRow label="Team Size" value={formData.teamSize} editable={isEditing} onChange={(v) => handleChange("teamSize", v)} />
            <EditableRow label="Locations Count" value={formData.numLocation} editable={isEditing} onChange={(v) => handleChange("numLocation", v)} />
            <EditableRow label="Founded Year" value={formData.year} editable={isEditing} onChange={(v) => handleChange("year", v)} options={["2025", "2024", "2023", "2022", "2021", "2020"]} />
            <EditableRow label="Founded Month" value={formData.month} editable={isEditing} onChange={(v) => handleChange("month", v)} options={["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]}/>
            <EditableRow label="Business Description" value={formData.description_business} editable={isEditing} onChange={(v) => handleChange("description_business", v)} type="textarea" />
            <EditableRow label="Business Category" value={formData.businessCategory} editable={isEditing} onChange={(v) => handleChange("businessCategory", v)} options={businessCategoryArray} />
            <EditableRow label="Entity Structure" value={formData.entityStructure} editable={isEditing} onChange={(v) => handleChange("entityStructure", v)} options={parsedPicklists[4]?.values} />
          </Section>

          {/* Location Section */}
          <Section
            title="Location Details"
            isOpen={openSections.location}
            toggleOpen={() => setOpenSections((p) => ({ ...p, location: !p.location }))}
          >

  <EditableRow
    label="Country"
    value={formData.country}
    editable={isEditing}
    onChange={(v) => handleChange("country", v)}
    options={countries}
  />
  <EditableRow
    label="State"
    value={formData.state}
    editable={isEditing}
    onChange={(v) => handleChange("state", v)}
    options={states}
  />
  <EditableRow
    label="City"
    value={formData.city}
    editable={isEditing}
    onChange={(v) => handleChange("city", v)}
    options={cities}
  />

          </Section>

          {/* Financial Section */}
          <Section
            title="Financial Performance"
            isOpen={openSections.finance}
            toggleOpen={() => setOpenSections((p) => ({ ...p, finance: !p.finance }))}
          >
            <EditableRow label="Last FY Revenue" value={formData.lastFinancialYear} editable={isEditing} onChange={(v) => handleChange("lastFinancialYear", v)} />
            <EditableRow label="Trailing 12 Months Revenue" value={formData.trailing12months} editable={isEditing} onChange={(v) => handleChange("trailing12months", v)} />
            <EditableRow label="Previous Month Revenue" value={formData.prevMonth} editable={isEditing} onChange={(v) => handleChange("prevMonth", v)} />
            <EditableRow label="NET Last FY" value={formData.NETlastFinancialYear} editable={isEditing} onChange={(v) => handleChange("NETlastFinancialYear", v)} />
            <EditableRow label="NET Trailing 12 Months" value={formData.NETtrailing12months} editable={isEditing} onChange={(v) => handleChange("NETtrailing12months", v)} />
            <EditableRow label="NET Prev Month" value={formData.NETprevMonth} editable={isEditing} onChange={(v) => handleChange("NETprevMonth", v)} />
            {/* <EditableRow label="Positive Cash Flow" value={formData.positiveCashFlow} editable={isEditing} onChange={(v) => handleChange("positiveCashFlow", v)} /> */}
          <EditableRow
  label="Positive Cash Flow"
  value={formData.positiveCashFlow ? "Yes" : "No"}
  editable={isEditing}
  onChange={(v) => handleChange("positiveCashFlow", v === "Yes")}
   options={["Yes", "No"]}
/>

          </Section>

          {/* Ownership Section */}
          <Section
            title="Assets & Liabilities"
            isOpen={openSections.ownership}
            toggleOpen={() => setOpenSections((p) => ({ ...p, ownership: !p.ownership }))}
          >
            <EditableRow label="Assets Description" value={formData.assestDesc} editable={isEditing} onChange={(v) => handleChange("assestDesc", v)} type="textarea" />
            <EditableRow label="Equity" value={formData.equity} editable={isEditing} onChange={(v) => handleChange("equity", v)} />
            <EditableRow label="Debt" value={formData.debt} editable={isEditing} onChange={(v) => handleChange("debt", v)} />
          </Section>

          {/* Exit Section */}
          <Section
            title="Exit Plan"
            isOpen={openSections.exit}
            toggleOpen={() => setOpenSections((p) => ({ ...p, exit: !p.exit }))}
          >
            <EditableRow label="Reason for Sale" value={formData.salereason} editable={isEditing} onChange={(v) => handleChange("salereason", v)}  options={saleReason}  />
            <EditableRow label="Asking Price" value={formData.askingPrice} editable={isEditing} onChange={(v) => handleChange("askingPrice", v)} />
            <EditableRow label="Preferred Arrangement" value={formData.preferredArrangement} editable={isEditing} onChange={(v) => handleChange("preferredArrangement", v)}  options={preferredArrangement}  multiple />
          </Section>
        </div>
      </div>
                )}
      <Footer />
    </div>
  );
};

export default SellerDashboard;




// import React, { useState, useEffect } from "react";
// import { Button, MenuItem, Select } from "@mui/material";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import { toast } from "react-toastify";
// import Footer from "../../component/Footer";
// import Header from "../../component/Header";

// const Section = ({ title, isOpen, toggleOpen, children }) => (
//   <div className="border-t pt-4">
//     <div
//       className="flex justify-between items-center cursor-pointer"
//       onClick={toggleOpen}
//     >
//       <h2 className="text-lg font-semibold">{title}</h2>
//       <span>{isOpen ? "▲" : "▼"}</span>
//     </div>
//     {isOpen && <div className="mt-4">{children}</div>}
//   </div>
// );

// const EditableRow = ({ label, value, editable, onChange, textarea = false, isArray = false, options = [] }) => (
//   <div className="flex gap-5 items-start flex-wrap my-2">
//     <h1 className="font-semibold flex items-center">
//       <CheckBoxIcon className="!text-green-600 mr-1" />
//       <span>{label}:</span>
//     </h1>
//     {editable ? (
//       isArray ? (
//         <Select
//           multiple
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className="border rounded px-2 py-1 w-full md:w-[60%]"
//         >
//           {options.map((opt, index) => (
//             <MenuItem key={index} value={opt}>{opt}</MenuItem>
//           ))}
//         </Select>
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
//       <p>{Array.isArray(value) ? value.join(", ") : value}</p>
//     )}
//   </div>
// );

// const SellerDashboard = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [openSections, setOpenSections] = useState({ company: true, registration: false, team: false, location: false, finance: false, assets: false, sale: false });

//   const [sellerData, setSellerData] = useState({
//     company_name: "",
//     website_url: "",
//     CIN: "",
//     company_linkedin: "",
//     description_business: "",
//     numcofounder: "",
//     teamSize: ""y
//     numLocation: "",
//     year: "",
//     month: "",
//     cofounderLinks: [],
//     businessCategory: "",
//     entityStructure: "",
//     country: "",
//     state: "",
//     city: "",
//     lastFinancialYear: "",
//     trailing12months: "",
//     prevMonth: "",
//     NETlastFinancialYear: "",
//     NETtrailing12months: "",
//     NETprevMonth: "",
//     positiveCashFlow: "",
//     assestDesc: "",
//     equity: "",
//     debt: "",
//     salereason: "",
//     askingPrice: "",
//     preferredArrangement: []
//   });

//   const handleChange = (key, value) => setSellerData((prev) => ({ ...prev, [key]: value }));

//   const notifySuccess = (msg = "Data Updated Successfully!") => toast.success(msg, { position: "top-right", autoClose: 3000, hideProgressBar: false, pauseOnHover: true, draggable: true, theme: "colored" });

//   const token = localStorage.getItem("token");

//   const fetchSellerData = async () => {
//     try {
//       const res = await fetch("https://bizplorers-backend.onrender.com/api/seller/get_detail", { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } });
//       const data = await res.json();
//       setSellerData(data);
//     } catch (err) {
//       console.error(err);
//       alert("Getting Data failed.");
//     }
//   };

//   const updateData = async () => {
//     try {
//       await fetch("https://bizplorers-backend.onrender.com/api/seller/update_detail", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify(sellerData)
//       });
//       notifySuccess();
//     } catch (err) {
//       console.error(err);
//       alert("Update failed");
//     }
//   };

//   const handleEditToggle = () => {
//     if (isEditing) updateData();
//     setIsEditing(!isEditing);
//   };

//   useEffect(() => { fetchSellerData(); }, []);

//   return (
//     <div>
//       <Header />
//       <div className="flex justify-center items-center">
//         <div className="flex flex-col border rounded-md mt-[7%] px-6 w-full m-4 max-w-screen-md bg-white shadow-md">
//           <div className="flex justify-between w-full my-4">
//             <h1 className="text-2xl font-bold">SELLER DETAILS</h1>
//             <Button variant="contained" onClick={handleEditToggle}>{isEditing ? "Save" : "Edit Details"}</Button>
//           </div>

//           <Section title="Company Details" isOpen={openSections.company} toggleOpen={() => setOpenSections(p => ({ ...p, company: !p.company }))}>
//             <EditableRow label="Company Name" value={sellerData.company_name} editable={isEditing} onChange={(val) => handleChange("company_name", val)} />
//             <EditableRow label="Entity Structure" value={sellerData.entityStructure} editable={isEditing} onChange={(val) => handleChange("entityStructure", val)} />
//             <EditableRow label="Business Category" value={sellerData.businessCategory} editable={isEditing} onChange={(val) => handleChange("businessCategory", val)} />
//             <EditableRow label="Year Established" value={sellerData.year} editable={isEditing} onChange={(val) => handleChange("year", val)} />
//             <EditableRow label="Month Established" value={sellerData.month} editable={isEditing} onChange={(val) => handleChange("month", val)} />
//           </Section>

//           <Section title="Registration & Socials" isOpen={openSections.registration} toggleOpen={() => setOpenSections(p => ({ ...p, registration: !p.registration }))}>
//             <EditableRow label="Website URL" value={sellerData.website_url} editable={isEditing} onChange={(val) => handleChange("website_url", val)} />
//             <EditableRow label="CIN" value={sellerData.CIN} editable={isEditing} onChange={(val) => handleChange("CIN", val)} />
//             <EditableRow label="Company LinkedIn" value={sellerData.company_linkedin} editable={isEditing} onChange={(val) => handleChange("company_linkedin", val)} />
//           </Section>

//           <Section title="Team & Location" isOpen={openSections.team} toggleOpen={() => setOpenSections(p => ({ ...p, team: !p.team }))}>
//             <EditableRow label="Number of Co-Founders" value={sellerData.numcofounder} editable={isEditing} onChange={(val) => handleChange("numcofounder", val)} />
//             <EditableRow label="Team Size" value={sellerData.teamSize} editable={isEditing} onChange={(val) => handleChange("teamSize", val)} />
//             <EditableRow label="Number of Locations" value={sellerData.numLocation} editable={isEditing} onChange={(val) => handleChange("numLocation", val)} />
//             <EditableRow label="Co-Founder Links" value={sellerData.cofounderLinks} editable={isEditing} onChange={(val) => handleChange("cofounderLinks", val)} isArray options={["https://linkedin.com/in/example"]} />
//             <EditableRow label="Country" value={sellerData.country} editable={isEditing} onChange={(val) => handleChange("country", val)} />
//             <EditableRow label="State" value={sellerData.state} editable={isEditing} onChange={(val) => handleChange("state", val)} />
//             <EditableRow label="City" value={sellerData.city} editable={isEditing} onChange={(val) => handleChange("city", val)} />
//           </Section>

//           <Section title="Financials" isOpen={openSections.finance} toggleOpen={() => setOpenSections(p => ({ ...p, finance: !p.finance }))}>
//             <EditableRow label="Last Financial Year" value={sellerData.lastFinancialYear} editable={isEditing} onChange={(val) => handleChange("lastFinancialYear", val)} />
//             <EditableRow label="Trailing 12 Months" value={sellerData.trailing12months} editable={isEditing} onChange={(val) => handleChange("trailing12months", val)} />
//             <EditableRow label="Previous Month" value={sellerData.prevMonth} editable={isEditing} onChange={(val) => handleChange("prevMonth", val)} />
//             <EditableRow label="NET Last Financial Year" value={sellerData.NETlastFinancialYear} editable={isEditing} onChange={(val) => handleChange("NETlastFinancialYear", val)} />
//             <EditableRow label="NET Trailing 12 Months" value={sellerData.NETtrailing12months} editable={isEditing} onChange={(val) => handleChange("NETtrailing12months", val)} />
//             <EditableRow label="NET Previous Month" value={sellerData.NETprevMonth} editable={isEditing} onChange={(val) => handleChange("NETprevMonth", val)} />
//             <EditableRow label="Positive Cash Flow" value={sellerData.positiveCashFlow} editable={isEditing} onChange={(val) => handleChange("positiveCashFlow", val)} />
//           </Section>

//           <Section title="Assets & Equity" isOpen={openSections.assets} toggleOpen={() => setOpenSections(p => ({ ...p, assets: !p.assets }))}>
//             <EditableRow label="Assets Description" value={sellerData.assestDesc} editable={isEditing} onChange={(val) => handleChange("assestDesc", val)} textarea />
//             <EditableRow label="Equity" value={sellerData.equity} editable={isEditing} onChange={(val) => handleChange("equity", val)} />
//             <EditableRow label="Debt" value={sellerData.debt} editable={isEditing} onChange={(val) => handleChange("debt", val)} />
//           </Section>

//           <Section title="Sale Details" isOpen={openSections.sale} toggleOpen={() => setOpenSections(p => ({ ...p, sale: !p.sale }))}>
//             <EditableRow label="Reason for Sale" value={sellerData.salereason} editable={isEditing} onChange={(val) => handleChange("salereason", val)} textarea />
//             <EditableRow label="Asking Price" value={sellerData.askingPrice} editable={isEditing} onChange={(val) => handleChange("askingPrice", val)} />
//             <EditableRow label="Preferred Arrangement" value={sellerData.preferredArrangement} editable={isEditing} onChange={(val) => handleChange("preferredArrangement", val)} isArray options={["Full Sale", "Equity Partnership", "Advisory Only"]} />
//           </Section>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SellerDashboard;




// import React, { useState, useEffect } from "react";
// import { Button } from "@mui/material";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import { toast } from "react-toastify";
// import Footer from "../../component/Footer";
// import Header from "../../component/Header";

// const Section = ({ title, isOpen, toggleOpen, children }) => (
//   <div className="border-t pt-4">
//     <div
//       className="flex justify-between items-center cursor-pointer"
//       onClick={toggleOpen}
//     >
//       <h2 className="text-lg font-semibold">{title}</h2>
//       <span>{isOpen ? "▲" : "▼"}</span>
//     </div>
//     {isOpen && <div className="mt-4">{children}</div>}
//   </div>
// );

// const EditableRow = ({ label, value, editable, onChange, textarea = false }) => (
//   <div className="flex gap-5 items-start flex-wrap my-2">
//     <h1 className="font-semibold flex items-center">
//       <CheckBoxIcon className="!text-green-600 mr-1" />
//       <span>{label}:</span>
//     </h1>
//     {editable ? (
//       textarea ? (
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

// const SellerDashboard = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [openSections, setOpenSections] = useState({
//     company: true,
//     website: false,
//     linkedin: false,
//     more: false,
//   });

//   const [sellerData, setSellerData] = useState({
//     company_name: "",
//     website_url: "",
//     CIN: "",
//     company_linkedin: "",
//     cofounderLinks: [],
//     description_business: "",
//     businessCategory: "",
//     entityStructure: "",
//     country: "",
//     state: "",
//     city: "",
//   });

//   const handleChange = (key, value) => {
//     setSellerData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleArrayChange = (key, index, value) => {
//     const newArray = [...sellerData[key]];
//     newArray[index] = value;
//     setSellerData((prev) => ({ ...prev, [key]: newArray }));
//   };

//   const notifySuccess = (msg = "Data Updated Successfully!") => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const token = localStorage.getItem("token");

//   const fetchSellerData = async () => {
//     try {
//       const response = await fetch(
//         "https://bizplorers-backend.onrender.com/api/seller/get_detail",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (!response.ok) throw new Error("Failed to fetch");
//       const data = await response.json();
//       setSellerData(data);
//     } catch (error) {
//       console.error(error);
//       alert("Getting Data failed.");
//     }
//   };

//   const updateData = async () => {
//     try {
//       const response = await fetch(
//         "https://bizplorers-backend.onrender.com/api/seller/update_detail",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(sellerData),
//         }
//       );
//       if (!response.ok) throw new Error("Update failed");
//       notifySuccess();
//     } catch (error) {
//       console.error(error);
//       alert("Update failed");
//     }
//   };

//   const handleEditToggle = () => {
//     if (isEditing) updateData();
//     setIsEditing(!isEditing);
//   };

//   useEffect(() => {
//     fetchSellerData();
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="flex justify-center items-center">
//         <div className="flex flex-col border rounded-md mt-[7%] px-6 w-full m-4 max-w-screen-md bg-white shadow-md">
//           <div className="flex justify-between w-full my-4">
//             <h1 className="text-2xl font-bold">SELLER DETAILS</h1>
//             <Button variant="contained" onClick={handleEditToggle}>
//               {isEditing ? "Save" : "Edit Details"}
//             </Button>
//           </div>

//           <Section
//             title="Company Details"
//             isOpen={openSections.company}
//             toggleOpen={() => setOpenSections(prev => ({ ...prev, company: !prev.company }))}
//           >
//             <EditableRow label="Company Name" value={sellerData.company_name} editable={isEditing} onChange={(val) => handleChange("company_name", val)} />
//             <EditableRow label="Entity Structure" value={sellerData.entityStructure} editable={isEditing} onChange={(val) => handleChange("entityStructure", val)} />
//             <EditableRow label="Business Category" value={sellerData.businessCategory} editable={isEditing} onChange={(val) => handleChange("businessCategory", val)} />
//           </Section>

//           <Section
//             title="Website"
//             isOpen={openSections.website}
//             toggleOpen={() => setOpenSections(prev => ({ ...prev, website: !prev.website }))}
//           >
//             <EditableRow label="Website URL" value={sellerData.website_url} editable={isEditing} onChange={(val) => handleChange("website_url", val)} />
//             <EditableRow label="CIN" value={sellerData.CIN} editable={isEditing} onChange={(val) => handleChange("CIN", val)} />
//           </Section>

//           <Section
//             title="LinkedIn"
//             isOpen={openSections.linkedin}
//             toggleOpen={() => setOpenSections(prev => ({ ...prev, linkedin: !prev.linkedin }))}
//           >
//             <EditableRow label="Company LinkedIn" value={sellerData.company_linkedin} editable={isEditing} onChange={(val) => handleChange("company_linkedin", val)} />
//             <div className="flex gap-3 flex-wrap">
//               <h1 className="font-semibold flex items-center">Co-Founder LinkedIn:</h1>
//               {sellerData.cofounderLinks.map((link, i) =>
//                 isEditing ? (
//                   <input
//                     key={i}
//                     className="border px-2 py-1 rounded-md"
//                     value={link}
//                     onChange={(e) => handleArrayChange("cofounderLinks", i, e.target.value)}
//                   />
//                 ) : (
//                   <p key={i}>{link}</p>
//                 )
//               )}
//             </div>
//           </Section>

//           <Section
//             title="More"
//             isOpen={openSections.more}
//             toggleOpen={() => setOpenSections(prev => ({ ...prev, more: !prev.more }))}
//           >
//             <EditableRow label="Description about Business" value={sellerData.description_business} editable={isEditing} onChange={(val) => handleChange("description_business", val)} textarea />
//             <EditableRow label="Country" value={sellerData.country} editable={isEditing} onChange={(val) => handleChange("country", val)} />
//             <EditableRow label="State" value={sellerData.state} editable={isEditing} onChange={(val) => handleChange("state", val)} />
//             <EditableRow label="City" value={sellerData.city} editable={isEditing} onChange={(val) => handleChange("city", val)} />
//           </Section>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SellerDashboard;


// import React, { useState, useEffect } from "react";
// import { Button } from "@mui/material";
// import { Menu, X } from "lucide-react";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import Footer from "../../component/Footer";
// import Header from "../../component/Header";
// import  {showSuccess,showError ,showInfo,showWarning} from '../../component/utils/toast';


// const SellerDashboard = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);

//  const [sellerData, setSellerData] = useState({
//      company_name: "",
//      website_url: "",
//      CIN: "",
//      company_linkedin: "",
//      description_business: "",
//      numcofounder: "",
//      teamSize: "",
//      numLocation: "",
//      year: "",
//      month: "",
//      // cofounder_linkedin: "",
//      cofounderLinks:[],
//      businessCategory: "",
//      // businessLocation:'',
//      entityStructure: "",
//      country: "",
//      state: "",
//      city: "",
//      //  status:'',
//      //Step 2
//      lastFinancialYear: "",
//      trailing12months: "",
//      prevMonth: "",
//     NETlastFinancialYear: "",
//      NETtrailing12months: "",
//      NETprevMonth: "",
//       positiveCashFlow:"",
//      assestDesc: "",
//      equity: "",
//      debt: "",
    
//      //step 3
//      salereason: "",
//      askingPrice: "",
//      preferredArrangement: [],
    
//    });

//   const EditableRow = ({
//     label,
//     icon,
//     value,
//     editable,
//     onChange,
//     textarea,
//   }) => (
//     <div className="flex items-start gap-2 my-2">
//       <span className="font-semibold flex items-center">
//         {icon}
//         {label}:
//       </span>
//       {editable ? (
//         textarea ? (
//           <textarea
//             className="border p-2 rounded-md w-full"
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//           />
//         ) : (
//           <input
//             className="border p-2 rounded-md w-full"
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//           />
//         )
//       ) : (
//         <span>{value}</span>
//       )}
//     </div>
//   );
//   const handleChange = (key, value) => {
//     setSellerData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleArrayChange = (key, index, value) => {
//     const newArray = [...sellerData[key]];
//     newArray[index] = value;
//     setSellerData((prev) => ({ ...prev, [key]: newArray }));
//   };

//   const notifySuccess = (msg = "Data Updated Successfully!") => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const token = localStorage.getItem("token");
//   const fetchSellerData = async () => {
//     try {
//       const response = await fetch(
//         "https://bizplorers-backend.onrender.com/api/seller/get_detail",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (!response.ok) throw new Error("Failed to fetch");

//       const data = await response.json();
// showSuccess("Data fetched successfully");
//       setSellerData(data);
//     } catch (error) {
//       console.error(error);
//       showError("Getting Data failed.");
//       // alert("Getting Data failed.");
//     }
//   };

//   const updateData = async () => {
//     try {
//       const response = await fetch(
//         "https://bizplorers-backend.onrender.com/api/seller/update_detail",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(sellerData),
//         }
//       );

//       if (!response.ok) throw new Error("Update failed");

//       const updated = await response.json();
//       notifySuccess();
//       console.log(updated);
//     } catch (error) {
//       console.error(error);
//       showError("Update failed");
//       // alert("Update failed");
//     }
//   };

//   const handleEditToggle = () => {
//     if (isEditing) {
//       updateData();
//     }
//     setIsEditing(!isEditing);
//   };
//   useEffect(() => {
//     fetchSellerData();
//   }, []);

  
//        const notifyLogOut = (msg = "Logged out successfully!") => {
//           toast.success(msg, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "colored",
//           });
//         };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     notifyLogOut();
//     window.location.href = "/login"; // or your login route
//   };

//   return (
//     <div>
     
//       {/* <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
       
//         <Link to="/">
//           <img
//             alt="logo"
//             width={50}
//             className="object-contain cursor-pointer"
//           />
//         </Link>
//         <nav className="hidden md:flex gap-8">
//           <Link to="/aboutUs" className="text-xl hover:text-blue-600">
//             About Us
//           </Link>
//           <Link to="/services" className="text-xl hover:text-blue-600">
//             Services
//           </Link>
//           <Link to="/seller" className="text-xl hover:text-blue-600">
//             Seller
//           </Link>
//           <Link to="/buyer" className="text-xl hover:text-blue-600">
//             Buyer
//           </Link>
         
//           <Link to="/signUp" className="text-xl hover:text-blue-600">
//             Register
//           </Link>
         
//         </nav>
//         <div className="hidden md:flex gap-2">
        
//           <button
//             className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700"
//             onClick={handleLogout}
//           >
//             Log Out
//           </button>
         
//         </div>
        
//       </header> */}
//       <Header/>
//       {/* 
//       <div className='flex justify-center pb-10'>
//         <div className='flex flex-col border-2 border-slate-500 rounded-md mt-[7%] px-[5%] w-[80%] '> */}
//       {/* <div className='flex justify-center pb-10'>
//   <div className='flex flex-col border-2 border-slate-500 rounded-md mt-[7%] px-[5%] w-[80%] mx-4 md:mx-10'> */}

//       {/**Added Margin */}
//       <div className="flex justify-center items-center">
//         <div className="flex flex-col border-2 border-slate-500 rounded-md mt-[7%] px-6 w-full m-4  max-w-screen-md">
//           <div className="flex justify-between w-full mt-[2%]">
//             <div className="text-2xl font-bold">SELLER DETAILS</div>
//             <div>
//               <Button variant="contained" onClick={handleEditToggle}>
//                 {isEditing ? "Save" : "Edit Details"}
//               </Button>
//             </div>
//           </div>

//           {/* Personal Details */}
//           <div className="flex flex-col text-black my-[2%]">
//             <h1 className="text-xl font-bold">Company Details</h1>
//             <EditableRow
//               label="Company Name"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.company_name}
//               editable={isEditing}
//               onChange={(val) => handleChange("company_name", val)}
//             />
//             <EditableRow
//               label="Entity Structure"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.entityStructure}
//               editable={isEditing}
//               onChange={(val) => handleChange("entityStructure", val)}
//             />
//             <EditableRow
//               label="Business Category"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.businessCategory}
//               editable={isEditing}
//               onChange={(val) => handleChange("businessCategory", val)}
//               textarea
//             />
//             <EditableRow
//               label="Website Url"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.website_url}
//               editable={isEditing}
//               onChange={(val) => handleChange("website_url", val)}
//             />
//             <EditableRow
//               label="CIN"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.CIN}
//               editable={isEditing}
//               onChange={(val) => handleChange("CIN", val)}
//             />
//             <EditableRow
//               label="Company Linkedin"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.company_linkedin}
//               editable={isEditing}
//               onChange={(val) => handleChange("company_linkedin", val)}
//             />
//             {/* <EditableRow
//               label="Co-founder Linkedin"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.cofounder_linkedin}
//               editable={isEditing}
//               onChange={(val) => handleChange("cofounder_linkedin", val)}
//             /> */}
//                  <div className="flex gap-3 flex-wrap">
//               <h1 className="font-semibold flex items-center">
//                 <CheckBoxIcon className="!text-green-600 mr-1" />
//                 Co-Founder Linkedin:
//               </h1>
//               {sellerData.cofounderLinks.map((arr, i) =>
//                 isEditing ? (
//                   <input
//                     key={i}
//                     className="border px-2 py-1 rounded-md"
//                     value={arr}
//                     onChange={(e) =>
//                       handleArrayChange("cofounderLinks", i, e.target.value)
//                     }
//                   />
//                 ) : (
//                   <p key={i} className="mr-2">
//                     {arr},
//                   </p>
//                 )
//               )}
//             </div>
//             <EditableRow
//               label="Description about Business"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.description_business}
//               editable={isEditing}
//               onChange={(val) => handleChange("description_business", val)}
//             />
//             <EditableRow
//               label="Country"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.country}
//               editable={isEditing}
//               onChange={(val) => handleChange("country", val)}
//             />
//             <EditableRow
//               label="State"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.state}
//               editable={isEditing}
//               onChange={(val) => handleChange("state", val)}
//             />
//             <EditableRow
//               label="City"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.city}
//               editable={isEditing}
//               onChange={(val) => handleChange("city", val)}
//             />
//             <EditableRow
//               label="Number of Co-founder"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.numcofounder}
//               editable={isEditing}
//               onChange={(val) => handleChange("numcofounder", val)}
//             />
//             <EditableRow
//               label="Team Size"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.teamSize}
//               editable={isEditing}
//               onChange={(val) => handleChange("teamSize", val)}
//             />
//             <EditableRow
//               label="Number of Locations"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.numLocation}
//               editable={isEditing}
//               onChange={(val) => handleChange("numLocation", val)}
//             />
//             <EditableRow
//               label="Commencement of Business Year"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.year}
//               editable={isEditing}
//               onChange={(val) => handleChange("year", val)}
//             />
//             <EditableRow
//               label="Commencement of Business Month"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.month}
//               editable={isEditing}
//               onChange={(val) => handleChange("month", val)}
//             />
//             <EditableRow
//               label="Status"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.status}
//               editable={isEditing}
//               onChange={(val) => handleChange("status", val)}
//             />
//             {/* <EditableRow label="Website Url" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.website_url} editable={isEditing} onChange={(val) => handleChange('website_url', val)} />
//          <EditableRow label="Website Url" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.website_url} editable={isEditing} onChange={(val) => handleChange('website_url', val)} /> */}
//           </div>

//           {/* Preferences Details */}
//           <div className="flex flex-col text-black my-[2%]">
//             <h1 className="text-xl font-bold">Financial Details</h1>
//             {/* <div className='flex gap-3 flex-wrap'>
//               <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Business Categories:</h1>
//               {buyerData.businessCategory.map((cat, i) =>
//                 isEditing ? (
//                   <input key={i} className="border px-2 py-1 rounded-md" value={cat} onChange={e => handleArrayChange('businessCategory', i, e.target.value)} />
//                 ) : (
//                   <p key={i} className='mr-2'>{cat},</p>
//                 )
//               )}
//             </div> */}

//             <EditableRow
//               label="Last Financial year(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.lastFinancialYear}
//               editable={isEditing}
//               onChange={(val) => handleChange("lastFinancialYear", val)}
//             />
//             <EditableRow
//               label="Previous Financial Year(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.prevFinancialYear}
//               editable={isEditing}
//               onChange={(val) => handleChange("prevFinancialYear", val)}
//             />
//             <EditableRow
//               label="Pre-previous Financial Year(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.prePrevFinancialYear}
//               editable={isEditing}
//               onChange={(val) => handleChange("prePrevFinancialYear", val)}
//             />
//             <EditableRow
//               label="Trailing 12 months(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.trail12months}
//               editable={isEditing}
//               onChange={(val) => handleChange("trail12months", val)}
//             />
//             <EditableRow
//               label="Last month(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.lastmonth}
//               editable={isEditing}
//               onChange={(val) => handleChange("lastmonth", val)}
//             />
//             <EditableRow
//               label="Previous month(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.prevMonth}
//               editable={isEditing}
//               onChange={(val) => handleChange("prevMonth", val)}
//             />
//             <EditableRow
//               label="Pre-previous month(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.prePrevMonth}
//               editable={isEditing}
//               onChange={(val) => handleChange("prePrevMonth", val)}
//             />
//             <h1 className="text-2xl font-semibold ">PROFITS(PAT)</h1>

//             <EditableRow
//               label="Last Financial year(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.PATlastFinancialYear}
//               editable={isEditing}
//               onChange={(val) => handleChange("PATlastFinancialYear", val)}
//             />
//             <EditableRow
//               label="Previous Financial Year(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.PATprevFinancialYear}
//               editable={isEditing}
//               onChange={(val) => handleChange("PATprevFinancialYear", val)}
//             />
//             <EditableRow
//               label="Pre-previous Financial Year(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.PATprePrevFinancialYear}
//               editable={isEditing}
//               onChange={(val) => handleChange("PATprePrevFinancialYear", val)}
//             />
//             <EditableRow
//               label="Trailing 12 months(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.PATtrailing12months}
//               editable={isEditing}
//               onChange={(val) => handleChange("PATtrailing12months", val)}
//             />
//             <EditableRow
//               label="Last month(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.PATlastmonth}
//               editable={isEditing}
//               onChange={(val) => handleChange("PATlastmonth", val)}
//             />
//             <EditableRow
//               label="Previous month(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.PATprevMonth}
//               editable={isEditing}
//               onChange={(val) => handleChange("PATprevMonth", val)}
//             />
//             <EditableRow
//               label="Pre-previous month(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.PATprePrevMonth}
//               editable={isEditing}
//               onChange={(val) => handleChange("PATprePrevMonth", val)}
//             />
//             <EditableRow
//               label="EBITDA Margin (current) %"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.EBITDA}
//               editable={isEditing}
//               onChange={(val) => handleChange("EBITDA", val)}
//             />
//             <h1 className="text-2xl font-semibold ">OPERATING CASH FLOW</h1>

//             <EditableRow
//               label="Last Financial year(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.OCFlastFinancialYear}
//               editable={isEditing}
//               onChange={(val) => handleChange("OCFlastFinancialYear", val)}
//             />
//             <EditableRow
//               label="Previous Financial Year(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.OCFprevFinancialYear}
//               editable={isEditing}
//               onChange={(val) => handleChange("OCFprevFinancialYear", val)}
//             />
//             <EditableRow
//               label="Pre-previous Financial Year(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.OCFprePrevFinancialYear}
//               editable={isEditing}
//               onChange={(val) => handleChange("OCFprePrevFinancialYear", val)}
//             />
//             <h1 className="text-2xl font-semibold pt-[5%]">ASSESTS</h1>

//             <EditableRow
//               label="Description of Key Assest/IP"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.assestDesc}
//               editable={isEditing}
//               onChange={(val) => handleChange("assestDesc", val)}
//             />
//             <h1 className="text-2xl font-semibold pt-[5%]">Sources Of Funds</h1>
//             <EditableRow
//               label="Equity(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.equity}
//               editable={isEditing}
//               onChange={(val) => handleChange("equity", val)}
//             />
//             <EditableRow
//               label="Debt(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.debt}
//               editable={isEditing}
//               onChange={(val) => handleChange("debt", val)}
//             />
//             <h1 className="text-2xl font-semibold ">TRANSACTION DETAILS</h1>
//             <EditableRow
//               label="Reason For Sale"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.salereason}
//               editable={isEditing}
//               onChange={(val) => handleChange("salereason", val)}
//             />
//             <EditableRow
//               label="Asking Price(Rs)"
//               icon={<CheckBoxIcon className="!text-green-600 mr-1" />}
//               value={sellerData.askingPrice}
//               editable={isEditing}
//               onChange={(val) => handleChange("askingPrice", val)}
//             />
//             {/* <EditableRow label="Preferred Arrangement" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={sellerData.preferredArrangement} editable={isEditing} onChange={(val) => handleChange('preferredArrangement', val)} /> */}
//             <div className="flex gap-3 flex-wrap">
//               <h1 className="font-semibold flex items-center">
//                 <CheckBoxIcon className="!text-green-600 mr-1" />
//                 Preferred Arrangement:
//               </h1>
//               {sellerData.preferredArrangement.map((arr, i) =>
//                 isEditing ? (
//                   <input
//                     key={i}
//                     className="border px-2 py-1 rounded-md"
//                     value={arr}
//                     onChange={(e) =>
//                       handleArrayChange(
//                         "preferredArrangement",
//                         i,
//                         e.target.value
//                       )
//                     }
//                   />
//                 ) : (
//                   <p key={i} className="mr-2">
//                     {arr},
//                   </p>
//                 )
//               )}
//             </div>
//             {/* <div className="flex gap-3 flex-wrap">
//               <h1 className="font-semibold flex items-center">
//                 <CheckBoxIcon className="!text-green-600 mr-1" />
//                 Co-Founder Linkedin:
//               </h1>
//               {sellerData.cofounderLinks.map((arr, i) =>
//                 isEditing ? (
//                   <input
//                     key={i}
//                     className="border px-2 py-1 rounded-md"
//                     value={arr}
//                     onChange={(e) =>
//                       handleArrayChange("cofounderLinks", i, e.target.value)
//                     }
//                   />
//                 ) : (
//                   <p key={i} className="mr-2">
//                     {arr},
//                   </p>
//                 )
//               )}
//             </div> */}

//             {/* <div className='flex gap-3 flex-wrap'>
//               <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Cities:</h1>
//               {buyerData.city.map((ct, i) =>
//                 isEditing ? (
//                   <input key={i} className="border px-2 py-1 rounded-md" value={ct} onChange={e => handleArrayChange('city', i, e.target.value)} />
//                 ) : (
//                   <p key={i} className='mr-2'>{ct},</p>
//                 )
//               )}
//             </div> */}

//             {/* <EditableRow label="Open to Pre-Revenue" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.openToPreRevenue} editable={isEditing} onChange={(val) => handleChange('openToPreRevenue', val)} />
//             {buyerData.openToPreRevenue === "No" && (
//               <>
//                 <EditableRow label="Open to Pre-Breakeven" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.openToPreBreakeven} editable={isEditing} onChange={(val) => handleChange('openToPreBreakeven', val)} />
//                 <EditableRow label="Revenue Min" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.revenueMin} editable={isEditing} onChange={(val) => handleChange('revenueMin', val)} />
//                 <EditableRow label="Revenue Max" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.revenueMax} editable={isEditing} onChange={(val) => handleChange('revenueMax', val)} />
//               </>
//             )} */}
//           </div>

//           {/* <div className='flex flex-col text-black my-[2%]'>
//             <h1 className='text-xl font-bold'>Preferred Value Multiple</h1>
//             <EditableRow label="Metric" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.metric} editable={isEditing} onChange={(val) => handleChange('metric', val)} />
//             <EditableRow label="Max Multiple" icon={<CheckBoxIcon className='!text-green-600 mr-1' />} value={buyerData.maxMultiple} editable={isEditing} onChange={(val) => handleChange('maxMultiple', val)} />

//             <div className='flex gap-3 flex-wrap'>
//               <h1 className='font-semibold flex items-center'><CheckBoxIcon className='!text-green-600 mr-1' />Preferred Arrangement:</h1>
//               {buyerData.preferredArrangement.map((arr, i) =>
//                 isEditing ? (
//                   <input key={i} className="border px-2 py-1 rounded-md" value={arr} onChange={e => handleArrayChange('preferredArrangement', i, e.target.value)} />
//                 ) : (
//                   <p key={i} className='mr-2'>{arr},</p>
//                 )
//               )}
//             </div>
//           </div> */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// // Reusable editable row
// const EditableRow = ({
//   label,
//   icon,
//   value,
//   editable,
//   onChange,
//   textarea = false,
// }) => (
//   <div className="flex gap-5 items-start flex-wrap my-2">
//     <h1 className="font-semibold flex items-center">
//       {icon}
//       <span className="ml-1">{label}:</span>
//     </h1>
//     {editable ? (
//       textarea ? (
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

// export default SellerDashboard;
