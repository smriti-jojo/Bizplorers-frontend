
import React, { useState } from "react";
import CircleIcon from '@mui/icons-material/Circle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarIcon from '@mui/icons-material/Star';
import LocationPinIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';
import avatar from '../assests/pic.jpg';
// import BuyerCard from "../component/BuyerCard";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";



export const BuyerCard = ({ buyer ,type}) => {
  const token=localStorage.getItem('token');
  return (
    <div className='relative'>
      <div className='w-[350px] border-2 border-slate-300 rounded-md p-4 shadow-lg shadow-slate-400 bg-white'>
        <div className='flex items-center text-sm text-green-600'>
          <CircleIcon fontSize='5px' className='mr-2' />
          {buyer.buyerType}
        </div>

        <h1 className='font-semibold text-lg py-1'>
          Buyer: <span className={token?"":"blur-sm"}>{buyer.name}</span>
        </h1>

        <div className='flex gap-3 py-1'>
          <div><EmailIcon fontSize='7px' className='mr-1 text-blue-400' /> Email</div>
          <div><PhoneIcon fontSize='7px' className='mr-1 text-green-400' /> Phone</div>
          <div><LinkedInIcon fontSize='7px' className='mr-1 text-red-500' /> LinkedIn</div>
        </div>

        <div className='flex justify-between py-1'>
          <div>
            {buyer.interest ? buyer.interest : 'Looking to acquire businesses in the tech and F&B sectors.'}
          </div>
          <div>
            <img src={avatar} alt='buyer' width='100px' className='rounded-md' />
          </div>
        </div>

        <div className='py-1'>
          <StarIcon fontSize='small' className='mr-1 text-yellow-400' />
          9.1 <span className='ml-3'>
            <LocationPinIcon fontSize='small' className='mr-1 text-red-500' />
            {buyer.businessCity ? buyer.businessCity : 'Mumbai'}
          </span>
        </div>

        <div className='p-4 bg-slate-100 space-y-2'>
          <div className='flex justify-between text-[15px]'>
            Open to Pre-Revenue <span className='text-green-600'>{buyer.preRevenue === 'yes' ? 'Yes' : 'No'}</span>
          </div>
          <div className='flex justify-between text-[15px]'>
            Open to Pre-Breakeven <span className='text-green-600'>{buyer.preBreakeven === 'yes' ? 'Yes' : 'No'}</span>
          </div>
        </div>

        <div className='flex justify-between py-2'>
          <div className='w-[60%]'>
            <h1>Ticket Size <InfoIcon fontSize='small' /></h1>
            <div className='flex items-end gap-1 text-blue-700'>
              <p className='text-[12px]'>INR</p>
              {/* <h1 className='text-2xl font-bold blur-sm'> */}
                <h1 className={token?'text-2xl font-bold':'text-2xl font-bold blur-sm'}>
                {buyer.ticketMin ? buyer.ticketMin : '25L'} - {buyer.ticketMax ? buyer.ticketMax : '1Cr'}
              </h1>
            </div>
          </div>
          <div className='flex items-center'>
            <Button variant='contained' className='!bg-yellow-400 !text-black !w-[150px] !text-[0.7rem] !py-3'>
              Contact Buyer
            </Button>
          </div>
        </div>
      </div>
{type==='home'?(
   <span className="absolute top-5 right-10 z-10 inline-block bg-blue-500 rotate-45 text-white text-xs font-semibold px-2.5 py-0.5 shadow">
        Verified
      </span>
):(
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
        <select className="w-full border rounded p-2" value={filters.businessCity} onChange={(e) => handleChange("businessCity", e.target.value)}>
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Type of Buyer</label>
        <select className="w-full border rounded p-2" value={filters.buyerType} onChange={(e) => handleChange("buyerType", e.target.value)}>
          <option value="">Select Type</option>
          <option value="Individual">Individual</option>
          <option value="Organisation">Organisation</option>
          {/* <option value="PE">PE</option> */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Open to Pre-Revenue</label>
        <select className="w-full border rounded p-2" value={filters.preRevenue} onChange={(e) => handleChange("preRevenue", e.target.value)}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Open to Pre-Breakeven</label>
        <select className="w-full border rounded p-2" value={filters.preBreakeven} onChange={(e) => handleChange("preBreakeven", e.target.value)}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Ticket Size (Min)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={filters.ticketMin}
          onChange={(e) => handleChange("minTicketSize", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Ticket Size (Max)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={filters.ticketMax}
          onChange={(e) => handleChange("maxTicketSize", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Categories of Interest</label>
        <select className="w-full border rounded p-2" value={filters.interest} onChange={(e) => handleChange("interest", e.target.value)}>
          <option value="">Select Interest</option>
          <option value="Tech Startups">Tech Startups</option>
          <option value="Education">Education</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Preferred Arrangement</label>
        <select className="w-full border rounded p-2" value={filters.arrangement} onChange={(e) => handleChange("arrangement", e.target.value)}>
          <option value="">Select Arrangement</option>
          <option value="Cash">Cash</option>
          <option value="Stock">Stock</option>
            <option value="Royalty">Royalty</option>
              <option value="Acquihire">Acquihire</option>
       
        </select>
      </div>

      <div className="flex gap-2">
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={() => {}}
        >
          Update Filter
        </button>
        <button
          className="w-full bg-gray-300 text-black py-2 rounded hover:bg-gray-400"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}


const Buyer = () => {
  const [filters, setFilters] = useState({
    businessCity: "",
    buyerType: "",
    preRevenue: "",
    preBreakeven: "",
    minTicketSize: "",
    maxTicketSize: "",
    interest: "",
    arrangement: "",
  });

  const resetFilters = () => {
    setFilters({
      businessCity: "",
      buyerType: "",
      preRevenue: "",
      preBreakeven: "",
      minTicketSize: "",
      maxTicketSize: "",
      interest: "",
      arrangement: "",
    });
  };

  const allBuyers = [
    {
      name: "Arjun Kapoor",
      businessCity: "Mumbai",
      buyerType: "Organisation",
      preRevenue: "yes",
      preBreakeven: "no",
      // ticketSize: 5000000,
      ticketMin:'25L',
      ticketMax:'1Cr',
      interest: "Tech Startups",
      arrangement: "Cash",
    },
    {
      name: "Sneha Reddy",
      businessCity: "Bangalore",
      buyerType: "Individual",
      preRevenue: "no",
      preBreakeven: "yes",
      ticketMin:'20L',
      ticketMax:'90L',
      // ticketSize: 2000000,
      interest: "Education",
      arrangement: "Acquihire",
    },
    // Add more buyers as needed
  ];

  const filteredBuyers = allBuyers.filter((buyer) => {
    const matchesCity = filters.businessCity ? buyer.businessCity === filters.businessCity : true;
    const matchesType = filters.buyerType ? buyer.buyerType === filters.buyerType : true;
    const matchesPreRevenue = filters.preRevenue ? buyer.preRevenue === filters.preRevenue : true;
    const matchesPreBreakeven = filters.preBreakeven ? buyer.preBreakeven === filters.preBreakeven : true;
    // const matchesMinTicket = filters.minTicketSize ? buyer.ticketSize >= Number(filters.minTicketSize) : true;
    // const matchesMaxTicket = filters.maxTicketSize ? buyer.ticketSize <= Number(filters.maxTicketSize) : true;
    const matchesMinTicket = filters.minTicketSize ? Number(buyer.ticketMin.replace(/\D/g, '')) >= Number(filters.minTicketSize) : true;
const matchesMaxTicket = filters.maxTicketSize ? Number(buyer.ticketMax.replace(/\D/g, '')) <= Number(filters.maxTicketSize) : true;

    const matchesInterest = filters.interest ? buyer.interest === filters.interest : true;
    const matchesArrangement = filters.arrangement ? buyer.arrangement === filters.arrangement : true;

    return (
      matchesCity &&
      matchesType &&
      matchesPreRevenue &&
      matchesPreBreakeven &&
      matchesMinTicket &&
      matchesMaxTicket &&
      matchesInterest &&
      matchesArrangement
    );
  });

  return (
    <div>
       {/* <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
               
                <Link to="/">
                  <img
                    alt="logo"
                    width={50}
                    className="object-contain cursor-pointer"
                  />
                </Link>
                <nav className="hidden md:flex gap-8">
                  <Link to="/aboutUs" className="text-xl hover:text-blue-600">
                    About Us
                  </Link>
                  <Link to="/services" className="text-xl hover:text-blue-600">
                    Services
                  </Link>
                  <Link to="/seller" className="text-xl hover:text-blue-600">
                    Seller
                  </Link>
                  <Link to="/buyer" className="text-xl hover:text-blue-600">
                    Buyer
                  </Link>
                  <Link to="/login" className="text-xl hover:text-blue-600">
                    Log In
                  </Link>
                  <Link to="/signUp" className="text-xl hover:text-blue-600">
                    Register
                  </Link>
                </nav>    
              </header> */}
              <Header/>
    
    <div className="flex flex-col md:flex-row p-6 bg-gray-50 min-h-screen gap-6 pt-[5rem]">
        
      <BuyerFilterSidebar filters={filters} setFilters={setFilters} onReset={resetFilters} />

      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">{filteredBuyers.length} Buyers Found</h1>
        </div>

  <div className="flex flex-wrap gap-6">
        {filteredBuyers.map((buyer, index) => (
           <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
          <BuyerCard key={index} buyer={buyer} />
          </div>
        ))}
        </div>
           {/* <div className="flex flex-wrap gap-6">
          {filteredBuyers.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <ReusableCards
                description_business={card.description_business}
                company_name={card.company_name}
                city={card.businessCity}
                askingPrice={card.askingPrice}
                EBITDA={card.EBITDA}
              />
            </div>
          ))} */}
        {/* </div> */}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Buyer;

