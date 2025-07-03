import React from "react";
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

const ReusableCards = ({
  description_business,
  company_name,
  headline,
  city,
  userId,
  askingPrice,
  last12monthsSales,
  profit12months,
  type,
  location,
  onSelect,
  isSelected,
  data,
  brokerId,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSellerPopup, setshowSellerPopup] = useState(false);
  const [openSection, setOpenSection] = useState("personal");


  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const senderId = user?.id;

  const isTruthy = (val) => {
    if (typeof val === "boolean") return val;
    if (typeof val === "string") {
      return ["true", "yes", "1"].includes(val.trim().toLowerCase());
    }
    return false;
  };

  const CollapsibleSection = ({ title, children, isOpen, onToggle }) => (
  <div className="border-t pt-4">
    <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
      <h2 className="text-xl font-bold">{title}</h2>
      <span>{isOpen ? "▲" : "▼"}</span>
    </div>
    {isOpen && <div className="mt-4">{children}</div>}
  </div>
);


  return (
    <>
      {type === "buyer" ? (
        <div className="relative ">
          {token && user?.role === "broker" && location === "dashboard" && (
            <button
              className={`absolute -top-3 -left-3 p-2 rounded-full border ${
                isSelected ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              onClick={onSelect}
            >
              <Check size={20} />
            </button>
          )}

          {token &&
            user?.role === "broker" &&
            location === "dashboard" &&
            data?.brokerId != null && (
              <div className="absolute right-0 -top-3 text-green-600 px-1 bg-yellow-100">
                Assigned Buyer
              </div>
            )}

          <div className="w-[350px] px-5 py-5 h-[420px] border-2 border-slate-300 rounded-md p-4 bg-white shadow-lg shadow-slate-400">
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
                {token && user?.role === "broker" && (
  senderId!=data.brokerId?(
      <SendInterestButton
      senderId={senderId}
      receiverId={data.userId}
      type="buyer"
    />
  ) : (
    <SendInterestButton type="buyer" />
  )
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

      <h3 className="text-lg font-semibold mb-4">Detailed Info</h3>

      {/* PERSONAL SECTION */}
      <CollapsibleSection
        title="Personal Details"
        isOpen={openSection === "personal"}
        onToggle={() => setOpenSection(openSection === "personal" ? "" : "personal")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Type Of Buyer</label>
          <div className="text-sm">{data.typeOfBuyer}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Designation</label>
          <div className="text-sm">{data.designation}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">LinkedIn</label>
          <div className="text-sm">{data.linkedinProfile || "N/A"}</div>
        </div>
        <div className="mb-4">
          <label className="text-xs text-gray-500">Description</label>
          <div className="text-sm">{data.description}</div>
        </div>
      </CollapsibleSection>

      {/* PREFERENCES SECTION */}
      <CollapsibleSection
        title="Preferences"
        isOpen={openSection === "preferences"}
        onToggle={() => setOpenSection(openSection === "preferences" ? "" : "preferences")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Ticket Size</label>
          <div className="text-sm">{data.ticketSizeMin} - {data.ticketSizeMax}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Open To Pre-Revenue</label>
          <div className="text-sm">{data.openToPreRevenue ? "Yes" : "No"}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Open To Pre-Breakeven</label>
          <div className="text-sm">{data.openToPreBreakeven ? "Yes" : "No"}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Preferred Arrangement</label>
          <div className="text-sm">
            {(data.preferredArrangement || []).join(", ") || "N/A"}
          </div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Interested Business Categories</label>
          <div className="text-sm">
            {(data.businessCategories || []).join(", ") || "N/A"}
          </div>
        </div>
      </CollapsibleSection>

      {/* LOCATION SECTION */}
      <CollapsibleSection
        title="Location"
        isOpen={openSection === "location"}
        onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Country</label>
          <div className="text-sm">{data.businesslocationCountry}</div>
        </div>
        {/* <div className="mb-2">
          <label className="text-xs text-gray-500">State</label>
          <div className="text-sm">{buyer.businesslocationState}</div>
        </div> */}
        <div className="mb-2">
          <label className="text-xs text-gray-500">Cities</label>
          <div className="text-sm">
            {(data.businesslocationCities || []).join(", ") || "N/A"}
          </div>
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

          <div className="w-[350px] px-5 py-5 h-[420px] border-2 border-slate-300 rounded-md p-4 bg-white shadow-lg shadow-slate-400">
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
                {/* <Button
                variant="contained"
                className="!bg-yellow-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
              >
                Contact Business
              </Button> */}
                {/* {senderId ? (
                  <SendInterestButton
                    senderId={senderId}
                    receiverId={data?.userId}
                    type={"seller"}
                  />
                ) : (
                  <SendInterestButton type={"seller"} />
                )} */}
                  {token && user?.role === "broker" && (
  senderId!=data.brokerId?(
      <SendInterestButton
      senderId={senderId}
      receiverId={data.userId}
      type="seller"
    />
  ) : (
    <SendInterestButton type="seller"/>
  )
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

      <h3 className="text-lg font-semibold mb-4">Detailed Info</h3>

      {/* PERSONAL SECTION */}
      <CollapsibleSection
        title="Company Details"
        isOpen={openSection === "company"}
        onToggle={() => setOpenSection(openSection === "company" ? "" : "company")}
      >
         <div className="mb-4">
          <label className="text-xs text-gray-500">Business Headline</label>
          <div className="text-sm">{data.headline}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Business Description</label>
          <div className="text-sm">{data.description_business}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Business Category</label>
          <div className="text-sm">{data.businessCategory}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Entity Structure</label>
          <div className="text-sm">{data.entityStructure}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Website</label>
          <div className="text-sm">{data.website_url}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">CIN</label>
          <div className="text-sm">{data.CIN}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Company Linkedin</label>
          <div className="text-sm">{data.company_linkedin || "N/A"}</div>
        </div>
        <div className="mb-4">
          <label className="text-xs text-gray-500">No. of Cofounder</label>
          <div className="text-sm">{data.numcofounder}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Team Size</label>
          <div className="text-sm">{data.teamSize}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">No. of Location</label>
          <div className="text-sm">{data.numLocation}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Founded Year</label>
          <div className="text-sm">{data.year}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Founded Month</label>
          <div className="text-sm">{data.month}</div>
        </div>
        
         <div className="mb-4">
          <label className="text-xs text-gray-500">No. of Cofounder</label>
          <div className="text-sm">{data.numcofounder}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">No. of Cofounder</label>
          <div className="text-sm">{data.numcofounder}</div>
        </div>
      </CollapsibleSection>

      {/* PREFERENCES SECTION */}
      <CollapsibleSection
        title="Financial Performance"
        isOpen={openSection === "financial"}
        onToggle={() => setOpenSection(openSection === "financial" ? "" : "financial")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Last Financial Year Revenue</label>
          <div className="text-sm">{data.lastFinancialYear}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Trailing 12 Months Revenue</label>
          <div className="text-sm">{data.trailing12months}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Previous Month Revenue</label>
          <div className="text-sm">{data.prevMonth}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">NET Last Financial Year </label>
          <div className="text-sm">
            {data.NETlastFinancialYear}
          </div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">NET Trailing 12 Months</label>
          <div className="text-sm">
            {data.NETtrailing12months}
          </div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">NET Prev Month</label>
          <div className="text-sm">{data.NETprevMonth}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Positive Cash Flow</label>
          <div className="text-sm">{data.positiveCashFlow}</div>
        </div>
        
      </CollapsibleSection>

{/**Assest Section */}
         <CollapsibleSection
        title="Assest & Liabilites"
        isOpen={openSection === "assest"}
        onToggle={() => setOpenSection(openSection === "assest" ? "" : "assest")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Assets Description</label>
          <div className="text-sm">{data.assestDesc}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Equity</label>
          <div className="text-sm">{data.equity}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Debt</label>
          <div className="text-sm">{data.debt}</div>
        </div>
       
     
        {/**Exit Plan */}
      </CollapsibleSection>
         <CollapsibleSection
        title="Exit Plan"
        isOpen={openSection === "exit"}
        onToggle={() => setOpenSection(openSection === "exit" ? "" : "exit")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Reason for Sale</label>
          <div className="text-sm">{data.salereason}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Asking Price</label>
          <div className="text-sm">{data.askingPrice}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Preferred Arrangement</label>
          <div className="text-sm"> {(data.preferredArrangement || []).join(", ") || "N/A"}</div>
        </div>
      
        
      </CollapsibleSection>

      {/* LOCATION SECTION */}
      <CollapsibleSection
        title="Location"
        isOpen={openSection === "location"}
        onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Country</label>
          <div className="text-sm">{data.country}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">State</label>
          <div className="text-sm">{data.state}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Cities</label>
          <div className="text-sm">
            {data.city|| "N/A"}
          </div>
        </div>
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
