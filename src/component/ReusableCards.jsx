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
  city,
  id,
  askingPrice,
  EBITDA,
  type,
  location,
  onSelect,
  isSelected,
  buyer,
}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [showSellerPopup, setshowSellerPopup] = useState(false);
    
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const isTruthy = (val) => {
    if (typeof val === "boolean") return val;
    if (typeof val === "string") {
      return ["true", "yes", "1"].includes(val.trim().toLowerCase());
    }
    return false;
  };

  return (
    <>
      {type === "buyer" ? (
        <div className="relative bg-slate-100">
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

          <div className="w-[350px] px-5 py-5 h-[420px] border-2 border-slate-300 rounded-md p-4 bg-white shadow-lg shadow-slate-400">
            <div className="my-2 text-lg text-blue-500 font-semibold">
              {buyer?.designation || "Newly Established Restaurant for Sale"}
            </div>

            <div className="w-full">
              <div className="line-clamp-4 w-full min-h-[96px] text-justify">
                {buyer?.description ||
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
                {buyer?.businesslocationCities?.join(", ") || "N/A"}
              </span>
            </div>

            <div className="p-4 bg-slate-100 space-y-2 my-3">
              <div className="flex justify-between text-[15px]">
                Open to Pre-Revenue
                <span>
                  {isTruthy(buyer?.openToPreRevenue) ? "Yes" : "No"}
                </span>
              </div>

              <div className="flex justify-between text-[15px]">
                Open to Pre-Breakeven
                <span>
                  {isTruthy(buyer?.openToPreBreakeven) ? "Yes" : "No"}
                </span>
              </div>
            </div>

            <div className="flex justify-between py-2 pb-4">
              <div className="w-[60%]">
                <h1>
                  Ticket Size <InfoIcon fontSize="small" />
                </h1>
                <div className="flex items-end gap-1 text-blue-700">
                  <p className="text-[12px]">INR</p>
                  <h1 className="text-2xl font-bold">
                    {buyer?.ticketSizeMin && buyer?.ticketSizeMax
                      ? `${buyer?.ticketSizeMin} - ${buyer?.ticketSizeMax}`
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
                <SendInterestButton />
                 <Button
                variant="contained"
                className="!bg-blue-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
                onClick={() => setShowPopup(true)}
              >
                View Profile
              </Button>
                      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 relative shadow-xl">
            <h3 className="text-lg font-semibold mb-4">User Info</h3>

            <div className="mb-2">
              <label className="text-xs text-gray-500">Name</label>
              <div className={`${location=='dashboard'? 'text-sm' :'blur-sm select-none'}`}>{buyer.User.name}</div>
            </div>
            <div className="mb-2">
              <label className="text-xs text-gray-500">Email</label>
              <div className={`${location=='dashboard'? 'text-sm' :'blur-sm select-none'}`}>{buyer.User.email}</div>
            </div>
            <div className="mb-4">
              <label className="text-xs text-gray-500">Phone</label>
              <div className={`${location=='dashboard'? 'text-sm' :'blur-sm select-none'}`}>{buyer.User.phone}</div>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    
              </div>
      
            </div>
          </div>
        </div>
      ) : (
        // fallback for non-buyer cards (if applicable)
        
        <div className="relative bg-slate-100">
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
        <div className="w-[350px] px-5 py-5 h-[420px] border-2 border-slate-300 rounded-md p-4 bg-white shadow-lg shadow-slate-400">
          <div className="my-2 text-lg text-blue-500 font-semibold">
            {company_name || "Newly Established Restaurant for Sale"}
          </div>
          <div className="w-full">
            <div className="line-clamp-4 w-full min-h-[96px] text-justify">
              {description_business ||
                "A successful business thrives by identifying a clear...."}
            </div>
          </div>
          <div className="py-2">
            <span>
              <LocationPinIcon fontSize="small" className="mr-1 text-red-500" />
              {city || "Chennai"}
            </span>
          </div>

          <div className="p-4 bg-slate-100 space-y-2 my-3">
            {/* <div className="flex justify-between text-[15px]">
              Run Rate Sales... <span>{`INR ${askingPrice  || '1.3crore}`}</span>
            </div> */}
            <div className="flex justify-between text-[15px]">
              EBITDA Margin... <span>{EBITDA || 20}%</span>
            </div>
          </div>

          <div className="flex justify-between py-2 pb-4">
            <div className="w-[60%]">
              <h1>
                Business for Sale <InfoIcon fontSize="small" />
              </h1>
              <div className="flex items-end gap-1 text-blue-700">
                <p className="text-[12px]">INR</p>
                <h1 className="text-2xl font-bold">
                  {askingPrice || "40L"}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* <Button
                variant="contained"
                className="!bg-yellow-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
              >
                Contact Business
              </Button> */}
              <SendInterestButton />
              <Button
                variant="contained"
                className="!bg-blue-400 !text-black !w-[150px] !text-[0.7rem] !py-3"
                onClick={()=>setshowSellerPopup(true)}
              >
                View Profile
              </Button>
                         {showSellerPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 relative shadow-xl">
            <h3 className="text-lg font-semibold mb-4">User Info</h3>

            <div className="mb-2">
              <label className="text-xs text-gray-500">Name</label>
              <div className="blur-sm select-none">{"User.name"}</div>
            </div>
            <div className="mb-2">
              <label className="text-xs text-gray-500">Email</label>
              <div className="blur-sm select-none">{"User.email"}</div>
            </div>
            <div className="mb-4">
              <label className="text-xs text-gray-500">Phone</label>
              <div className="blur-sm select-none">{"buyer.User.phone"}</div>
            </div>

            <button
              onClick={() => setshowSellerPopup(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              ✕
            </button>
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
