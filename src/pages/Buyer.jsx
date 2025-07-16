import React, { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import ReusableCards from "../component/ReusableCards";
import SendInterestButton from "../component/SendInterestButton";
import CircleIcon from '@mui/icons-material/Circle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarIcon from '@mui/icons-material/Star';
import LocationPinIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';
import avatar from '../assests/pic.jpg';

export const BuyerCard = ({ buyer, type }) => {
  const token = localStorage.getItem('token');

  return (
    <div className="relative">
      <div className="w-[350px] border-2 border-slate-300 rounded-md p-4 shadow-lg shadow-slate-400 bg-white">
        <div className="flex gap-3 py-1">
          <div><EmailIcon fontSize="7px" className="mr-1 text-blue-400" /> Email</div>
          <div><PhoneIcon fontSize="7px" className="mr-1 text-green-400" /> Phone</div>
          <div><LinkedInIcon fontSize="7px" className="mr-1 text-red-500" /> LinkedIn</div>
        </div>

        <div className="flex justify-between py-1">
          <div>
            {buyer.businessCategories
              ? buyer.businessCategories
              : 'Looking to acquire businesses in the tech and F&B sectors.'}
          </div>
          <div>
            <img src={avatar} alt="buyer" width="100px" className="rounded-md" />
          </div>
        </div>

        <div className="py-1">
          <StarIcon fontSize="small" className="mr-1 text-yellow-400" />
          9.1 <span className="ml-3">
            <LocationPinIcon fontSize="small" className="mr-1 text-red-500" />
            {buyer.businesslocationCities ? buyer.businesslocationCities : 'Mumbai'}
          </span>
        </div>

        <div className="p-4 bg-slate-100 space-y-2">
          <div className="flex justify-between text-[15px]">
            Open to Pre-Revenue <span className="text-green-600">{buyer.openToPreRevenue? 'Yes' : 'No'}</span>
          </div>
          <div className="flex justify-between text-[15px]">
            Open to Pre-Breakeven <span className="text-green-600">{buyer.openToPreBreakeven === 'yes' ? 'Yes' : 'No'}</span>
          </div>
        </div>

        <div className="flex justify-between py-2">
          <div className="w-[60%]">
            <h1>Ticket Size <InfoIcon fontSize="small" /></h1>
            <div className="flex items-end gap-1 text-blue-700">
              <p className="text-[12px]">INR</p>
              <h1 className={token ? 'text-2xl font-bold' : 'text-2xl font-bold blur-sm'}>
                {buyer.ticketSizeMin ? buyer.ticketSizeMin : '25L'} - {buyer.ticketSizeMax ? buyer.ticketSizeMax : '1Cr'}
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            {/* <Button variant="contained" className="!bg-yellow-400 !text-black !w-[150px] !text-[0.7rem] !py-3">
              Contact Buyer
            </Button> */}
            {/* <SendInterestButton type={'buyer'}/> */}
          </div>
        </div>
      </div>

      {type === 'home' ? (
        <span className="absolute top-5 right-10 z-10 inline-block bg-blue-500 rotate-45 text-white text-xs font-semibold px-2.5 py-0.5 shadow">
          Verified
        </span>
      ) : (
        <span className="absolute top-5 -right-2 z-10 inline-block bg-blue-500 rotate-45 text-white text-xs font-semibold px-2.5 py-0.5 shadow">
          Verified
        </span>
      )}
    </div>
  );
};


const BuyerFilterSidebar = ({ filters, setFilters, onReset }) => {
  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filter Buyers</h2>

      <div className="mb-4">
        <label className="block mb-1">Business City</label>
        <select
          className="w-full border rounded p-2"
          value={filters.businesslocationCities}
          onChange={(e) => handleChange("businesslocationCities", e.target.value)}
        >
          <option value="">All</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Type of Buyer</label>
        <select
          className="w-full border rounded p-2"
          value={filters.typeOfBuyer}
          onChange={(e) => handleChange("typeOfBuyer", e.target.value)}
        >
          <option value="">All</option>
          <option value="Individual">Individual</option>
          <option value="Organization">Organization</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Open to Pre-Revenue</label>
        <select
          className="w-full border rounded p-2"
          value={filters.openToPreRevenue}
          onChange={(e) => handleChange("openToPreRevenue", e.target.value)}
        >
          <option value="">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Open to Pre-Breakeven</label>
        <select
          className="w-full border rounded p-2"
          value={filters.openToPreBreakeven}
          onChange={(e) => handleChange("openToPreBreakeven", e.target.value)}
        >
          <option value="">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Categories of Interest</label>
        <select
          className="w-full border rounded p-2"
          value={filters.businessCategories}
          onChange={(e) => handleChange("businessCategories", e.target.value)}
        >
          <option value="">All</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Offline Retail">Offline Retail</option>
          <option value="Fintech">Fintech</option>
          <option value="Edtech">Edtech</option>
          <option value="Saas">Saas</option>
          <option value="Education & training">Education  & training</option>
          <option value="Restaurant/café">Restaurant/café</option>
          <option value="Mobile App">Mobile App</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Preferred Arrangement</label>
        <select
          className="w-full border rounded p-2"
          value={filters.preferredArrangement}
          onChange={(e) => handleChange("preferredArrangement", e.target.value)}
        >
          <option value="">All</option>
          <option value="Cash">Cash</option>
          <option value="Stock">Stock</option>
          <option value="Royalty">Royalty</option>
          <option value="Acquihire">Acquihire</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const Buyer = () => {
  const [allBuyers, setAllBuyer] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    businesslocationCities: "",
    typeOfBuyer: "",
    openToPreRevenue: "",
    openToPreBreakeven: "",
    ticketSizeMin: "",
    ticketSizeMax: "",
    businessCategories: "",
    preferredArrangement: "",
    
  });

  const resetFilters = () => {
    setFilters({
      businesslocationCities: "",
      typeOfBuyer: "",
      openToPreRevenue: "",
      openToPreBreakeven: "",
      ticketSizeMin: "",
      ticketSizeMax: "",
      businessCategories: "",
      preferredArrangement: "",
     
    });
  };

  const fetchBuyerData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://bizplorers-backend.onrender.com/api/buyer/getAllBuyer");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setAllBuyer(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBuyerData();
  }, []);

  const parseNumber = (value) => {
    if (!value) return 0;
    if (value.includes("Cr")) {
      return parseFloat(value.replace(/[^\d.]/g, "")) * 10000000;
    } else if (value.includes("L")) {
      return parseFloat(value.replace(/[^\d.]/g, "")) * 100000;
    }
    return parseFloat(value.replace(/[^\d.]/g, ""));
  };

  // const filteredBuyers = allBuyers.filter((buyer) => {
  //   const matchesCity = filters.businesslocationCities
  //     ? buyer.businesslocationCities === filters.businesslocationCities
  //     : true;

  //   const matchesType = filters.typeOfBuyer
  //     ? buyer.typeOfBuyer === filters.typeOfBuyer
  //     : true;

  //   const matchesPreRevenue = filters.openToPreRevenue
  //     ? buyer.openToPreRevenue === filters.openToPreRevenue
  //     : true;

  //   const matchesPreBreakeven = filters.openToPreBreakeven
  //     ? buyer.openToPreBreakeven === filters.openToPreBreakeven
  //     : true;

  //   const matchesMinTicket = filters.ticketSizeMin
  //     ? parseNumber(buyer.ticketSizeMin) >= parseFloat(filters.ticketSizeMin)
  //     : true;

  //   const matchesMaxTicket = filters.ticketSizeMax
  //     ? parseNumber(buyer.ticketSizeMax) <= parseFloat(filters.ticketSizeMax)
  //     : true;

  //   const matchesInterest = filters.businessCategories
  //     ? buyer.businessCategories === filters.businessCategories
  //     : true;

  //   const matchesArrangement = filters.preferredArrangement
  //     ? buyer.preferredArrangement === filters.preferredArrangement
  //     : true;

  //   return (
  //     matchesCity &&
  //     matchesType &&
  //     matchesPreRevenue &&
  //     matchesPreBreakeven &&
  //     matchesMinTicket &&
  //     matchesMaxTicket &&
  //     matchesInterest &&
  //     matchesArrangement
  //   );
  // });

  const filteredBuyers = allBuyers.filter((buyer) => {
  // Convert filter values to appropriate types
  const filterPreRevenue = filters.openToPreRevenue === "yes" ? true : 
                         filters.openToPreRevenue === "no" ? false : null;
  const filterPreBreakeven = filters.openToPreBreakeven === "yes" ? true : 
                           filters.openToPreBreakeven === "no" ? false : null;

  return (
    // City filter - check if city array includes the filter value
    (!filters.businesslocationCities || 
     (buyer.businesslocationCities && 
      buyer.businesslocationCities.includes(filters.businesslocationCities))) &&
    
    // Type filter - fixed typo in "Organization"
    (!filters.typeOfBuyer || 
     buyer.typeOfBuyer.toLowerCase() === filters.typeOfBuyer.toLowerCase()) &&
    
    // Pre-revenue filter - handle boolean comparison
    (filters.openToPreRevenue === "" || 
     buyer.openToPreRevenue === filterPreRevenue) &&
    
    // Pre-breakeven filter - handle boolean comparison
    (filters.openToPreBreakeven === "" || 
     buyer.openToPreBreakeven === filterPreBreakeven) &&
    
    // Ticket size filters
    (!filters.ticketSizeMin || 
     (buyer.ticketSizeMin && buyer.ticketSizeMin >= parseFloat(filters.ticketSizeMin))) &&
    (!filters.ticketSizeMax || 
     (buyer.ticketSizeMax && buyer.ticketSizeMax <= parseFloat(filters.ticketSizeMax))) &&
    
    // Business categories - check if array includes the filter value
    (!filters.businessCategories || 
     (buyer.businessCategories && 
      buyer.businessCategories.includes(filters.businessCategories))) &&
    
    // Preferred arrangement - check if array includes the filter value
    (!filters.preferredArrangement || 
     (buyer.preferredArrangement && 
      buyer.preferredArrangement.includes(filters.preferredArrangement)))
  );
});

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row p-6 bg-gray-50 min-h-screen gap-6 pt-[5rem]">
        <BuyerFilterSidebar filters={filters} setFilters={setFilters} onReset={resetFilters} />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">{filteredBuyers.length} Buyers Found</h1>
          </div>

          {loading ? (
            <div className="flex justify-center w-full min-h-screen">
              <CircularProgress />
            </div>
          ) : (
            <div className="flex flex-wrap gap-y-7 gap-x-7 w-full">
              {filteredBuyers.map((buyer, index) => (
                <div key={index} className="">
                  <ReusableCards type="buyer" data={buyer} location="home" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Buyer;
