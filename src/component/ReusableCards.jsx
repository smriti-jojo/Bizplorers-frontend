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
import {
  showSuccess,
  showError,
  showInfo,
  showWarning,
} from "../component/utils/toast";

const ReusableCards = ({ type, location, data, onUpdate }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSellerPopup, setshowSellerPopup] = useState(false);
  const [openSection, setOpenSection] = useState("personal");
  const [editSellerMode, setSellerEditMode] = useState(false);
  const [editBuyerMode, setBuyerEditMode] = useState(false);
  const [formData, setFormData] = useState(data || {});
  const [countries, setCountries] = useState([]);
  const [buyerCountries, setBuyerCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [userDetailData, setUserDetailData] = useState({
    name: data.User?.name || "",
    email: data.User?.email || "",
    phone: data.User?.phone || "",
  });
  const [preferredArrangement, setPreferredArrangement] = useState([]);
  const [saleReason, setSaleReason] = useState([]);
  const [typeofbuyerOption, settypeofbuyerOption] = useState([]);
  const [entityStructureoption, setEntityStructureoption] = useState([]);
  const [businessCategoryoption, setBusinessCategoryoption] = useState([]);
  const [picklistData, setpicklistData] = useState([]);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const senderId = user?.id;

  // FIX 1: Update formData when data prop changes
  useEffect(() => {
    if (data) {
      setFormData(data);
      setUserDetailData({
        name: data.User?.name || "",
        email: data.User?.email || "",
        phone: data.User?.phone || "",
      });
    }
  }, [data]);

  // FIX 2: Fetch picklists on mount
  useEffect(() => {
    const fetchPicklists = async () => {
      try {
        const response = await fetch("https://bizplorers-backend.onrender.com/api/picklist/all-categories-values");
        const result = await response.json();
        if (response.ok) {
          setpicklistData(result.data);
        } else {
          console.error("❌ Failed to fetch picklists:", result.message);
        }
      } catch (err) {
        console.error("❌ Error fetching picklists:", err);
      }
    };
    fetchPicklists();
  }, []);

  // FIX 3: Set countries when picklistData changes - FIXED DEPENDENCY
  useEffect(() => {
    if (picklistData.length > 0) {
      const countryArray = picklistData[2]?.values;
      setCountries(countryArray);
    }
  }, [picklistData]); // Added dependency

  // FIX 4: Process all dropdown options when picklistData updates - FIXED DEPENDENCY
  useEffect(() => {
    if (picklistData.length > 0) {
      const countryArr = picklistData[2]?.values || [];
      console.log(
        "countryArr.map((c) => ({ id: c.id, label: c.value }))",
        countryArr.map((c) => ({ id: c.id, label: c.value }))
      );
      setBuyerCountries(countryArr.map((c) => ({ id: c.id, label: c.value })));

      const SaleArray = picklistData[6]?.values || [];
      setSaleReason(SaleArray.map((c) => ({ id: c.id, label: c.value })));

      const EntityArray = picklistData[4]?.values || [];
      setEntityStructureoption(EntityArray.map((c) => ({ id: c.id, label: c.value })));

      const buyerTypeArray = picklistData[7]?.values || [];
      settypeofbuyerOption(buyerTypeArray.map((c) => ({ id: c.id, label: c.value })));

      const ArrangementArray = picklistData[5]?.values || [];
      setPreferredArrangement(ArrangementArray.map((c) => ({ id: c.id, label: c.value })));

      const businessCategoryArray = picklistData[0]?.values || [];
      setBusinessCategoryoption(businessCategoryArray.map((c) => ({ id: c.id, label: c.value })));
    }
  }, [picklistData]); // Added dependency

  const fetchStateByCountryData = async (id) => {
    try {
      const response = await fetch(
        `https://bizplorers-backend.onrender.com/api/picklist/states?countryId=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      console.log("data---buyerstate--", data);
      setStates(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCityByStateData = async (id) => {
    try {
      const response = await fetch(
        `https://bizplorers-backend.onrender.com/api/picklist/cities?stateId=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      console.log("data---buyerstate--", data);
      setCities(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCitiesByCountry = async (countryId) => {
    try {
      const res = await fetch(
        `https://bizplorers-backend.onrender.com/api/picklist/buyer-cities?countryId=${countryId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data = await res.json();
      console.log("fetchCitiesByCountry---", data);
      setCities(data.map((c) => ({ id: c.id, label: c.value })));
    } catch (err) {
      console.error(err);
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
    console.log("Field:", field, "Value:", selected);

    setFormData((prev) => {
      const next = { ...prev, [field]: selected };

      if (field === "businesslocationCountry") {
        next.businesslocationCities = "";
      }

      return next;
    });

    if (field === "businesslocationCountry") {
      const id = selected;
      if (id) fetchCitiesByCountry(id);
    }
  };

  const handleChange = (field, selectedValue) => {
    console.log("Field:", field, "Value:", selectedValue);
    
    let valueToSet;
    if (field === "preferredArrangement") {
      valueToSet = Array.isArray(selectedValue) 
        ? selectedValue.map((item) => item.label || item)
        : selectedValue;
    } else {
      valueToSet = selectedValue;
    }

    setFormData((prev) => {
      const next = { ...prev, [field]: valueToSet };

      // Reset dependent fields
      if (field === "country" || field.endsWith("Country")) {
        const stateKey = field === "country" ? "state" : field.replace("Country", "State");
        const cityKey = field === "country" ? "city" : field.replace("Country", "City");
        next[stateKey] = "";
        next[cityKey] = "";
      }

      if (field === "state" || field.endsWith("State")) {
        const cityKey = field === "state" ? "city" : field.replace("State", "City");
        next[cityKey] = "";
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

  // FIX 5: Add missing showSuccess function
  const showSuccess = (message) => {
    console.log("Success:", message);
    // Replace with your actual notification system
    alert(message);
  };

  const handleSellerSave = async () => {
    const payload = {
      company_name: formData.company_name,
      headline: formData.headline,
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
      // FIX 6: Safe access to nested properties
      country: formData.country?.value || formData.country,
      state: formData.state?.value || formData.state,
      city: formData.city?.value || formData.city,
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
      salereason: formData.salereason?.value || formData.salereason,
      askingPrice: formData.askingPrice,
      preferredArrangement: Array.isArray(formData.preferredArrangement) 
        ? formData.preferredArrangement 
        : formData.preferredArrangement?.split(',') || []
    };

    try {
      const response = await fetch(
        `https://bizplorers-backend.onrender.com/api/seller/update_detail`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      // FIX 7: Proper error handling
      if (response.ok) {
        const updatedData = await response.json();
        setSellerEditMode(false);
        setshowSellerPopup(false);
        setFormData(updatedData);
        if (onUpdate) onUpdate(updatedData);
        showSuccess("Seller data updated successfully");
      } else {
        const errorData = await response.json();
        console.error("Validation error from API:", errorData);
        alert("Validation error: " + JSON.stringify(errorData, null, 2));
      }
    } catch (err) {
      console.error("Error while saving:", err);
      alert("Error while saving: " + err.message);
    }
  };

  const handleSave = async () => {
    const payload = {
      typeOfBuyer: formData.typeOfBuyer?.value || formData.typeOfBuyer,
      designation: formData.designation,
      description: formData.description,
      linkedinProfile: formData.linkedinProfile,
      businessCategories: formData.businessCategories,
      ticketSizeMin: formData.ticketSizeMin,
      ticketSizeMax: formData.ticketSizeMax,
      businesslocationCountry: (() => {
        const existing = formData.businesslocationCountry;
        if (typeof existing === "string" && isNaN(existing)) return existing;
        if (typeof existing === "object" && existing?.label) {
          return existing.label;
        }
        return buyerCountries.find((c) => String(c.id) === String(existing))?.label || "";
      })(),
      businesslocationCities: (() => {
        const existingCities = formData.businesslocationCities || [];
        const isLabelArray = Array.isArray(existingCities) &&
          existingCities.every((val) => typeof val === "string" && isNaN(val));

        if (isLabelArray) return existingCities;

        return existingCities.map((cityId) => {
          const city = cities.find((c) => String(c.id) === String(cityId));
          return city?.label || "";
        });
      })(),
      openToPreRevenue: formData.openToPreRevenue,
      openToPreBreakeven: formData.openToPreBreakeven,
      preferredArrangement: formData.preferredArrangement,
    };

    try {
      console.log("payload----", payload);
      const response = await fetch(
        `https://bizplorers-backend.onrender.com/api/buyer/updateBuyer`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      // FIX 8: Proper error handling
      if (response.ok) {
        const updatedData = await response.json();
        setBuyerEditMode(false);
        setShowPopup(false);
        setFormData(updatedData);
        if (onUpdate) onUpdate(updatedData);
        showSuccess("Buyer Details Updated Successfully");
      } else {
        const errorData = await response.json();
        console.error("Validation error from API:", errorData);
        alert("Validation error: " + JSON.stringify(errorData, null, 2));
      }
    } catch (err) {
      console.error("Error while saving:", err);
      alert("Error while saving: " + err.message);
    }
  };

  const getEntityLabel = (val) =>
    entityStructureoption.find((e) => e.label.toLowerCase() === val?.toLowerCase())?.label || val;

  return (
    <>
      {type === "buyer" ? (
        <div className="relative">
          <div className="w-[350px] px-5 py-5 max-h-[500px] border-2 border-slate-300 rounded-md p-4 bg-white shadow-lg shadow-slate-400">
            <div className="my-2 text-lg text-blue-500 font-semibold line-clamp-2">
              {data?.designation?.slice(0, 50)}
            </div>

            <div className="w-full">
              <div className="line-clamp-4 w-full min-h-[96px] text-justify">
                {data?.description || "A successful business thrives by identifying a clear...."}
              </div>
            </div>

            <div className="py-2">
              <span>
                Interested
                <LocationPinIcon fontSize="small" className="mr-1 text-red-500" />
                <div>
                  {(data?.businesslocationCities ?? []).join(", ") || "N/A"}
                </div>
              </span>
            </div>

            <div className="p-4 bg-slate-100 space-y-2 my-3">
              <div className="flex justify-between text-[15px]">
                Open to Pre-Revenue
                <span>{isTruthy(data?.openToPreRevenue) ? "Yes" : "No"}</span>
              </div>

              <div className="flex justify-between text-[15px]">
                Open to Pre-Breakeven
                <span>{isTruthy(data?.openToPreBreakeven) ? "Yes" : "No"}</span>
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
                      
                      <div className="flex justify-end gap-3 mb-4">
                        {location === "dashboard" &&
                          (editBuyerMode ? (
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
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
                          ))}
                      </div>

                      {token && user?.role === "broker" && location === "dashboard" && (
                        <>
                          <h3 className="text-2xl font-semibold mb-2">User Info</h3>
                          <div className="flex justify-between mb-2">
                            <div className="font-bold">
                              Name: <span className="font-normal ml-1">{userDetailData.name}</span>
                            </div>
                            <div className="font-bold">
                              Email: <span className="font-normal ml-1">{userDetailData.email}</span>
                            </div>
                            <div className="font-bold">
                              Phone: <span className="font-normal ml-1">{userDetailData.phone}</span>
                            </div>
                          </div>
                        </>
                      )}

                      <h3 className="text-2xl font-semibold mb-4">Detailed Info</h3>

                      {/* Personal Details Section */}
                      <CollapsibleSection
                        title="Personal Details"
                        isOpen={openSection === "personal"}
                        onToggle={() => setOpenSection(openSection === "personal" ? "" : "personal")}
                      >
                        <EditableRow
                          label="Type Of Buyer"
                          value={formData.typeOfBuyer}
                          editable={editBuyerMode}
                          onChange={(v) => handleBuyerChange("typeOfBuyer", v)}
                          options={typeofbuyerOption}
                        />
                        <EditableRow
                          label="Designation"
                          value={formData.designation}
                          editable={editBuyerMode}
                          onChange={(v) => handleBuyerChange("designation", v)}
                        />
                        <EditableRow
                          label="LinkedIn"
                          value={formData.linkedinProfile || "N/A"}
                          editable={editBuyerMode}
                          onChange={(v) => handleBuyerChange("linkedinProfile", v)}
                        />
                        <EditableRow
                          label="Description"
                          value={formData.description}
                          editable={editBuyerMode}
                          onChange={(v) => handleBuyerChange("description", v)}
                          textarea
                        />
                      </CollapsibleSection>

                      {/* Preferences Section */}
                      <CollapsibleSection
                        title="Preferences"
                        isOpen={openSection === "preferences"}
                        onToggle={() => setOpenSection(openSection === "preferences" ? "" : "preferences")}
                      >
                        <EditableRow
                          label="Ticket Size Min"
                          value={formData.ticketSizeMin}
                          editable={editBuyerMode}
                          onChange={(v) => handleBuyerChange("ticketSizeMin", v)}
                        />
                        <EditableRow
                          label="Ticket Size Max"
                          value={formData.ticketSizeMax}
                          editable={editBuyerMode}
                          onChange={(v) => handleBuyerChange("ticketSizeMax", v)}
                        />
                        <EditableRow
                          label="Open to Pre-Revenue"
                          value={formData.openToPreRevenue ? "Yes" : "No"}
                          editable={editBuyerMode}
                          onChange={(v) => handleBuyerChange("openToPreRevenue", v === "Yes")}
                          options={["Yes", "No"]}
                        />
                        <EditableRow
                          label="Open to Pre-Breakeven"
                          value={formData.openToPreBreakeven ? "Yes" : "No"}
                          editable={editBuyerMode}
                          onChange={(v) => handleBuyerChange("openToPreBreakeven", v === "Yes")}
                          options={["Yes", "No"]}
                        />
                        
                        {/* Business Categories */}
                        <div className="my-3">
                          <h1 className="font-semibold flex items-center mb-1">
                            <CheckBoxIcon className="text-green-600 mr-1" /> Business Categories:
                          </h1>
                          {editBuyerMode ? (
                            <select
                              multiple
                              className="border rounded px-2 py-1 w-full md:w-1/2"
                              value={formData.businessCategories || []}
                              onChange={(e) =>
                                handleBuyerChange(
                                  "businessCategories",
                                  Array.from(e.target.selectedOptions, (opt) => opt.value)
                                )
                              }
                            >
                              {businessCategoryoption.map((cat) => (
                                <option key={cat.id} value={cat.label}>
                                  {cat.label}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <div>{(formData?.businessCategories ?? []).join(", ") || "N/A"}</div>
                          )}
                        </div>
                        
                        {/* Preferred Arrangement */}
                        <div className="my-3">
                          <h1 className="font-semibold flex items-center mb-1">
                            <CheckBoxIcon className="text-green-600 mr-1" /> Preferred Arrangement:
                          </h1>
                          {editBuyerMode ? (
                            <select
                              multiple
                              className="border rounded px-2 py-1 w-full md:w-1/2"
                              value={formData.preferredArrangement || []}
                              onChange={(e) =>
                                handleBuyerChange(
                                  "preferredArrangement",
                                  Array.from(e.target.selectedOptions, (option) => option.value)
                                )
                              }
                            >
                              {preferredArrangement.map((option) => (
                                <option key={option.id} value={option.label}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <div>{(formData?.preferredArrangement ?? []).join(", ") || "N/A"}</div>
                          )}
                        </div>
                      </CollapsibleSection>

                      {/* Location Section */}
                      <CollapsibleSection
                        title="Location"
                        isOpen={openSection === "location"}
                        onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
                      >
                        <div className="my-3 flex gap-2">
                          <h1 className="font-semibold flex items-center mb-1">
                            <CheckBoxIcon className="text-green-600 mr-1" /> Business Country:
                          </h1>
                          {editBuyerMode ? (
                            <select
                              className="border rounded px-2 py-1 w-full md:w-1/2"
                              value={formData.businesslocationCountry || ""}
                              onChange={(e) => handleBuyerChange("businesslocationCountry", e.target.value)}
                            >
                              <option value="">Select Country</option>
                              {buyerCountries.map((option) => (
                                <option key={option.id} value={option.id}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <div>{formData.businesslocationCountry || "N/A"}</div>
                          )}
                        </div>

                        <div className="my-3 flex gap-2">
                          <h1 className="font-semibold flex items-center mb-1">
                            <CheckBoxIcon className="text-green-600 mr-1" /> Business Cities:
                          </h1>
                          {editBuyerMode ? (
                            <select
                              multiple
                              className="border rounded px-2 py-1 w-full md:w-1/2"
                              value={formData.businesslocationCities || []}
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
                          ) : (
                            <div>{(formData?.businesslocationCities ?? []).join(", ") || "N/A"}</div>
                          )}
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
        /* SELLER CARD */
        <div className="relative">
          <div className="w-[350px] px-5 py-5 max-h-[450px] border-2 border-slate-300 rounded-md p-4 bg-white shadow-lg shadow-slate-400">
            <div className="my-2 text-lg text-blue-500 font-semibold line-clamp-2">
              {data?.headline?.slice(0, 50)}
            </div>

            <div className="w-full">
              <div className="line-clamp-4 w-full min-h-[96px] text-justify">
                {data?.description_business}
              </div>
            </div>
            
            <div className="py-2">
              <span>
                <LocationPinIcon fontSize="small" className="mr-1 text-red-500" />
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
                  <h1 className="text-2xl font-bold">
                    {data?.askingPrice || "40L"}
                  </h1>
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

                      <div className="flex justify-end gap-3 mb-4">
                        {location === "dashboard" &&
                          (editSellerMode ? (
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
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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

                      {token && user?.role === "broker" && location === "dashboard" && (
                        <>
                          <h3 className="text-2xl font-semibold mb-2">User Info</h3>
                          <div className="flex justify-between mb-2">
                            <div className="font-bold">
                              Name: <span className="font-normal ml-1">{userDetailData.name}</span>
                            </div>
                            <div className="font-bold">
                              Email: <span className="font-normal ml-1">{userDetailData.email}</span>
                            </div>
                            <div className="font-bold">
                              Phone: <span className="font-normal ml-1">{userDetailData.phone}</span>
                            </div>
                          </div>
                        </>
                      )}

                      <h3 className="text-2xl font-semibold mb-4">Detailed Info</h3>

                      {/* Company Details Section */}
                      <CollapsibleSection
                        title="Company Details"
                        isOpen={openSection === "company"}
                        onToggle={() => setOpenSection(openSection === "company" ? "" : "company")}
                      >
                        {location === "dashboard" && (
                          <>
                            <EditableRow
                              label="Company Name"
                              value={formData.company_name}
                              editable={editSellerMode}
                              onChange={(v) => handleChange("company_name", v)}
                            />
                            <EditableRow
                              label="Business Headline"
                              value={formData.headline}
                              editable={editSellerMode}
                              onChange={(v) => handleChange("headline", v)}
                            />
                            <EditableRow
                              label="Website"
                              value={formData.website_url}
                              editable={editSellerMode}
                              onChange={(v) => handleChange("website_url", v)}
                            />
                            <EditableRow
                              label="CIN"
                              value={formData.CIN}
                              editable={editSellerMode}
                              onChange={(v) => handleChange("CIN", v)}
                            />
                            <EditableRow
                              label="Company LinkedIn"
                              value={formData.company_linkedin}
                              editable={editSellerMode}
                              onChange={(v) => handleChange("company_linkedin", v)}
                            />
                          </>
                        )}
                        
                        <EditableRow
                          label="No. of Cofounders"
                          value={formData.numcofounder}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("numcofounder", v)}
                        />
                        <EditableRow
                          label="Team Size"
                          value={formData.teamSize}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("teamSize", v)}
                        />
                        <EditableRow
                          label="Locations Count"
                          value={formData.numLocation}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("numLocation", v)}
                        />
                        <EditableRow
                          label="Founded Year"
                          value={formData.year?.toString()}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("year", v)}
                          options={["2025", "2024", "2023", "2022", "2021", "2020"]}
                        />
                        <EditableRow
                          label="Founded Month"
                          value={formData.month}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("month", v)}
                          options={["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]}
                        />
                        <EditableRow
                          label="Business Description"
                          value={formData.description_business}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("description_business", v)}
                          type="textarea"
                        />
                        <EditableRow
                          label="Business Category"
                          value={formData.businessCategory}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("businessCategory", v)}
                          options={businessCategoryoption.map((item) => item.label)}
                        />
                        <EditableRow
                          label="Entity Structure"
                          value={getEntityLabel(formData.entityStructure)}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("entityStructure", v)}
                          options={entityStructureoption.map((item) => item.label)}
                        />
                      </CollapsibleSection>

                      {/* Financial Performance Section */}
                      <CollapsibleSection
                        title="Financial Performance"
                        isOpen={openSection === "financial"}
                        onToggle={() => setOpenSection(openSection === "financial" ? "" : "financial")}
                      >
                        <EditableRow
                          label="Last FY Revenue"
                          value={formData.lastFinancialYear}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("lastFinancialYear", v)}
                        />
                        <EditableRow
                          label="Trailing 12 Months Revenue"
                          value={formData.trailing12months}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("trailing12months", v)}
                        />
                        <EditableRow
                          label="Previous Month Revenue"
                          value={formData.prevMonth}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("prevMonth", v)}
                        />
                        <EditableRow
                          label="NET Last FY"
                          value={formData.NETlastFinancialYear}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("NETlastFinancialYear", v)}
                        />
                        <EditableRow
                          label="NET Trailing 12 Months"
                          value={formData.NETtrailing12months}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("NETtrailing12months", v)}
                        />
                        <EditableRow
                          label="NET Prev Month"
                          value={formData.NETprevMonth}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("NETprevMonth", v)}
                        />
                        <EditableRow
                          label="Positive Cash Flow"
                          value={formData.positiveCashFlow ? "Yes" : "No"}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("positiveCashFlow", v === "Yes")}
                          options={["Yes", "No"]}
                        />
                      </CollapsibleSection>

                      {/* Assets & Liabilities Section */}
                      <CollapsibleSection
                        title="Assets & Liabilities"
                        isOpen={openSection === "assets"}
                        onToggle={() => setOpenSection(openSection === "assets" ? "" : "assets")}
                      >
                        <EditableRow
                          label="Assets Description"
                          value={formData.assestDesc}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("assestDesc", v)}
                          type="textarea"
                        />
                        <EditableRow
                          label="Equity"
                          value={formData.equity}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("equity", v)}
                        />
                        <EditableRow
                          label="Debt"
                          value={formData.debt}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("debt", v)}
                        />
                      </CollapsibleSection>

                      {/* Exit Plan Section */}
                      <CollapsibleSection
                        title="Exit Plan"
                        isOpen={openSection === "exit"}
                        onToggle={() => setOpenSection(openSection === "exit" ? "" : "exit")}
                      >
                        <EditableRow
                          label="Reason for Sale"
                          value={formData.salereason}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("salereason", v)}
                          options={saleReason}
                        />
                        <EditableRow
                          label="Asking Price"
                          value={formData.askingPrice}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("askingPrice", v)}
                        />
                        <EditableRow
                          label="Preferred Arrangement"
                          value={formData.preferredArrangement}
                          editable={editSellerMode}
                          onChange={(v) => handleChange("preferredArrangement", v)}
                          options={preferredArrangement}
                          multiple
                        />
                      </CollapsibleSection>

                      {/* Location Section */}
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
