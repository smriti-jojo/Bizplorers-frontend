// // import React, { useState } from "react";
// // import FilterSidebar from "../component/FilterSidebar";
// // import BusinessCard from "../component/BusinessCard";
// // import SortDropdown from "../component/SortDropdown";

// // const Seller = () => {
// //   const [sortBy, setSortBy] = useState("Newest");

// //   const businesses = [
// //     {
// //       name: "InnovateX Technologies",
// //       description:
// //         "A cutting-edge tech company that specializes in AI-driven software for SMEs.",
// //       teamSize: 50,
// //       startDate: "January 2022",
// //       monthlyRevenue: "10L",
// //       monthlyProfit: "3L",
// //       tag: "Mobile App",
// //     },
// //     // Add more mock businesses as needed
// //   ];

// //   return (
// //     <div className="flex flex-col md:flex-row p-6 bg-gray-50 min-h-screen gap-6">
// //       <FilterSidebar onFilterChange={() => {}} />

// //       <div className="flex-1">
// //         <div className="flex justify-between items-center mb-4">
// //           <h1 className="text-xl font-bold">{businesses.length} Businesses Found</h1>
// //           <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
// //         </div>

// //         {businesses.map((b, index) => (
// //           <BusinessCard key={index} business={b} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Seller;
// import React, { useState } from "react";
// import FilterSidebar from "../component/FilterSidebar";
// import BusinessCard from "../component/BusinessCard";
// import SortDropdown from "../component/SortDropdown";

// const Seller = () => {
//   const [sortBy, setSortBy] = useState("Newest");

//   const [filters, setFilters] = useState({
//     category: "",
//     arrangement: "",
//     minRevenue: "",
//     maxRevenue: "",
//   });

//   const allBusinesses = [
//     {
//       name: "InnovateX Technologies",
//       description: "AI-driven software for SMEs.",
//       teamSize: 50,
//       startDate: "January 2022",
//       monthlyRevenue: 1000000,
//       monthlyProfit: 300000,
//       category: "tech",
//       arrangement: "full",
//       tag: "Mobile App",
//     },
//     {
//       name: "EduSpark",
//       description: "Online education tools.",
//       teamSize: 20,
//       startDate: "March 2021",
//       monthlyRevenue: 300000,
//       monthlyProfit: 100000,
//       category: "education",
//       arrangement: "partial",
//       tag: "Web App",
//     },
//   ];

//   const filteredBusinesses = allBusinesses.filter((biz) => {
//     const { category, arrangement, minRevenue, maxRevenue } = filters;

//     const matchesCategory = category ? biz.category === category : true;
//     const matchesArrangement = arrangement ? biz.arrangement === arrangement : true;
//     const matchesMinRev = minRevenue ? biz.monthlyRevenue >= Number(minRevenue) : true;
//     const matchesMaxRev = maxRevenue ? biz.monthlyRevenue <= Number(maxRevenue) : true;

//     return matchesCategory && matchesArrangement && matchesMinRev && matchesMaxRev;
//   });

//   return (
//     <div className="flex flex-col md:flex-row p-6 bg-gray-50 min-h-screen gap-6">
//       <FilterSidebar filters={filters} setFilters={setFilters} />

//       <div className="flex-1">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-xl font-bold">{filteredBusinesses.length} Businesses Found</h1>
//           <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
//         </div>

//         {filteredBusinesses.map((b, index) => (
//           <BusinessCard key={index} business={b} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Seller;

// import React, { useState } from "react";
// import FilterSidebar from "../component/FilterSidebar";
// import BusinessCard from "../component/BusinessCard";
// import SortDropdown from "../component/SortDropdown";
// import { Link } from "react-router-dom";
// import ReusableCards from "../component/ReusableCards";
// import { useEffect } from "react";

// const Buyer = () => {
//   const [sortBy, setSortBy] = useState("Newest");
//   const[allBusinesses,setAllBusinesses]=useState([]);

//   const [filters, setFilters] = useState({
//     // category: "",
//     typeOfBuyer: '',
//     // businessCategories: [],
//     ticketSizeMin: '',
//     ticketSizeMax: '',
//     businesslocationCountry: '',
//     businesslocationCities: [],
//     openToPreRevenue: '',
//     openToPreBreakeven: '',
//     // revenueSizeMin: '',
//     // revenueSizeMax: '',
//     // metric: '',
//     // maxMultiple: '',
//     preferredArrangement: []
//   });

//     const fetchSellerData = async () => {
//     try {
//       const response = await fetch('https://bizplorers-backend.onrender.com/api/seller/getAllSeller', {
//         method: 'GET'
      
//       });

//       if (!response.ok) throw new Error('Failed to fetch');

//       const data = await response.json();
      
//       setAllBusinesses(data);
//     } catch (error) {
//       console.error(error);
//       // alert('Getting Data failed.');
//     }
//   };
//    useEffect(() => {
//          fetchSellerData();
//       }, []);

 
//   // const allBusinesses = [
//   //   {
//   //     name: "InnovateX Technologies",
//   //     description: "AI-driven software for SMEs.",
//   //     teamSize: 50,
//   //     startDate: "January 2022",
//   //     monthlyRevenue: 1000000,
//   //     monthlyProfit: 300000,
//   //     category: "tech",
//   //     arrangement: "active",
//   //     status: "operational",
//   //     country: "india",
//   //     entityStructure: "llp",
//   //     price: 2000000,
//   //   },
//   //   {
//   //     name: "EduSpark",
//   //     description: "Online education tools.",
//   //     teamSize: 20,
//   //     startDate: "March 2021",
//   //     monthlyRevenue: 300000,
//   //     monthlyProfit: 100000,
//   //     category: "education",
//   //     arrangement: "passive",
//   //     status: "paused",
//   //     country: "usa",
//   //     entityStructure: "private",
//   //     price: 500000,
//   //   },
//   // ];

//   const filteredBusinesses = allBusinesses.filter((biz) => {
//     const {
//        typeOfBuyer,
//     // businessCategories: [],
//     ticketSizeMin,
//     ticketSizeMax,
//     businesslocationCountry,
//     businesslocationCities,
//     openToPreRevenue,
//     openToPreBreakeven,
//     // revenueSizeMin: '',
//     // revenueSizeMax: '',
//     // metric: '',
//     // maxMultiple: '',
//     preferredArrangement
//     } = filters;

//     const matchesCategory = category ? biz. typeOfBuyer === typeOfBuyer : true;
//     const matchesArrangement =  preferredArrangement ? biz. preferredArrangement ===  preferredArrangement : true;
//     const matchesMinRev = minRevenue ? biz.monthlyRevenue >= Number(minRevenue) : true;
//     const matchesMaxRev = maxRevenue ? biz.monthlyRevenue <= Number(maxRevenue) : true;
//     const matchesMinProfit = minProfit ? biz.monthlyProfit >= Number(minProfit) : true;
//     const matchesMaxProfit = maxProfit ? biz.monthlyProfit <= Number(maxProfit) : true;
//     const matchesMinPrice = minPrice ? biz.price >= Number(minPrice) : true;
//     const matchesMaxPrice = maxPrice ? biz.price <= Number(maxPrice) : true;
//     const matchesStatus = status ? biz.status === status : true;
//     const matchesCountry = country ? biz.country === country : true;
//     const matchesEntity = entityStructure ? biz.entityStructure === entityStructure : true;

//     return (
//       matchesCategory &&
//       matchesArrangement &&
//       matchesMinRev &&
//       matchesMaxRev &&
//       matchesMinProfit &&
//       matchesMaxProfit &&
//       matchesMinPrice &&
//       matchesMaxPrice &&
//       matchesStatus &&
//       matchesCountry &&
//       matchesEntity
//     );
//   });

//   const onReset = () => {
//     setFilters({
//        typeOfBuyer: '',
//     // businessCategories: [],
//     ticketSizeMin: '',
//     ticketSizeMax: '',
//     businesslocationCountry: '',
//     businesslocationCities: [],
//     openToPreRevenue: '',
//     openToPreBreakeven: '',
//     // revenueSizeMin: '',
//     // revenueSizeMax: '',
//     // metric: '',
//     // maxMultiple: '',
//     preferredArrangement: []
//     });
//   };

//   return (
//     <div className="flex flex-col md:flex-row p-6 bg-gray-50 min-h-screen gap-6">
//              <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
//                 {/* <img alt="logo" width={50} className="object-contain"  onClick={() => navigate('/')}/> */}
//                 <Link to="/">
//                   <img
//                     alt="logo"
//                     width={50}
//                     className="object-contain cursor-pointer"
//                   />
//                 </Link>
//                 <nav className="hidden md:flex gap-8">
//                   <Link to="/aboutUs" className="text-xl hover:text-blue-600">
//                     About Us
//                   </Link>
//                   <Link to="/services" className="text-xl hover:text-blue-600">
//                     Services
//                   </Link>
//                   <Link to="/seller" className="text-xl hover:text-blue-600">
//                     Seller
//                   </Link>
//                   <Link to="/buyer" className="text-xl hover:text-blue-600">
//                     Buyer
//                   </Link>
//                   <Link to="/login" className="text-xl hover:text-blue-600">
//                     Log In
//                   </Link>
//                   <Link to="/signUp" className="text-xl hover:text-blue-600">
//                     Register
//                   </Link>
//                   {/* <Link to="/homepage" className="text-xl hover:text-blue-600">How It Works?</Link> */}
//                 </nav>
//                 <div className="hidden md:flex gap-2">
//                   {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogin}> */}
//                   {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" >
//                             Log In
//                           </button>
//                            <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" >
//                             Signup
//                           </button> */}
      
//                   <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">
//                     Post A Business
//                   </button>
//                 </div>
//                 {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
//                 {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
//               </header>
//               <div className="mt-[5%] flex gap-5 w-full">
//       <FilterSidebar filters={filters} setFilters={setFilters} onReset={onReset} />

//       <div className="flex-1 ">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-xl font-bold">{filteredBusinesses.length} Businesses Found</h1>
//           <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
//         </div>

//         {/* {filteredBusinesses.map((card, index) => (
//            <ReusableCards
//               key={index}
//                 description_business={card.description_business}
//                 company_name={card.company_name}
//                 city={card.city}
//                 askingPrice={card.askingPrice}
//             EBITDA={card.EBITDA}
//             />
//         ))} */}
//         <div className="flex flex-wrap gap-6">
//   {filteredBusinesses.map((card, index) => (
//     <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
//       <ReusableCards
//         description_business={card.description_business}
//         company_name={card.company_name}
//         city={card.city}
//         askingPrice={card.askingPrice}
//         EBITDA={card.EBITDA}
//       />
//     </div>
//   ))}
// </div>

//       </div>
//       </div>
//     </div>
//   );
// };

// export default Buyer;

// import React, { useState, useEffect } from "react";
// import FilterSidebar from "../component/FilterSidebar";
// import SortDropdown from "../component/SortDropdown";
// import ReusableCards from "../component/ReusableCards";
// import { Link } from "react-router-dom";

// const Buyer = () => {
//   const [sortBy, setSortBy] = useState("Newest");
//   const [allBusinesses, setAllBusinesses] = useState([]);

//   const [filters, setFilters] = useState({
//     typeOfBuyer: '',
//     ticketSizeMin: '',
//     ticketSizeMax: '',
//     businesslocationCountry: '',
//     businesslocationCities: [],
//     openToPreRevenue: '',
//     openToPreBreakeven: '',
//     preferredArrangement: [],
//     minRevenue: '',
//     maxRevenue: '',
//     minProfit: '',
//     maxProfit: '',
//     minPrice: '',
//     maxPrice: '',
//     status: '',
//     entityStructure: ''
//   });

//   const fetchSellerData = async () => {
//     try {
//       const response = await fetch(
//         "https://bizplorers-backend.onrender.com/api/seller/getAllSeller"
//       );

//       if (!response.ok) throw new Error("Failed to fetch");

//       const data = await response.json();
//       setAllBusinesses(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchSellerData();
//   }, []);

//   const filteredBusinesses = allBusinesses.filter((biz) => {
//     const {
//       typeOfBuyer,
//       ticketSizeMin,
//       ticketSizeMax,
//       businesslocationCountry,
//       businesslocationCities,
//       openToPreRevenue,
//       openToPreBreakeven,
//       preferredArrangement,
//       minRevenue,
//       maxRevenue,
//       minProfit,
//       maxProfit,
//       minPrice,
//       maxPrice,
//       status,
//       entityStructure
//     } = filters;

//     const matchesType = typeOfBuyer ? biz.typeOfBuyer === typeOfBuyer : true;
//     const matchesArrangement = preferredArrangement.length > 0 ? preferredArrangement.includes(biz.arrangement) : true;
//     const matchesMinTicket = ticketSizeMin ? biz.ticketSize >= Number(ticketSizeMin) : true;
//     const matchesMaxTicket = ticketSizeMax ? biz.ticketSize <= Number(ticketSizeMax) : true;
//     const matchesCountry = businesslocationCountry ? biz.businesslocationCountry === businesslocationCountry : true;
//     const matchesCity = businesslocationCities.length > 0 ? businesslocationCities.includes(biz.businesslocationCity) : true;
//     const matchesPreRevenue = openToPreRevenue ? biz.isPreRevenue === true : true;
//     const matchesPreBreakeven = openToPreBreakeven ? biz.isPreBreakeven === true : true;
//     const matchesMinRev = filters.minRevenue ? biz.monthlyRevenue >= Number(filters.minRevenue) : true;
//     const matchesMaxRev = filters.maxRevenue ? biz.monthlyRevenue <= Number(filters.maxRevenue) : true;
//     const matchesMinProfit = filters.minProfit ? biz.monthlyProfit >= Number(filters.minProfit) : true;
//     const matchesMaxProfit = filters.maxProfit ? biz.monthlyProfit <= Number(filters.maxProfit) : true;
//     const matchesMinPrice = filters.minPrice ? biz.askingPrice >= Number(filters.minPrice) : true;
//     const matchesMaxPrice = filters.maxPrice ? biz.askingPrice <= Number(filters.maxPrice) : true;
//     const matchesStatus = status ? biz.status === status : true;
//     const matchesEntity = entityStructure ? biz.entityStructure === entityStructure : true;

//     return (
//       matchesType &&
//       matchesArrangement &&
//       matchesMinTicket &&
//       matchesMaxTicket &&
//       matchesCountry &&
//       matchesCity &&
//       matchesPreRevenue &&
//       matchesPreBreakeven &&
//       matchesMinRev &&
//       matchesMaxRev &&
//       matchesMinProfit &&
//       matchesMaxProfit &&
//       matchesMinPrice &&
//       matchesMaxPrice &&
//       matchesStatus &&
//       matchesEntity
//     );
//   });

//   const onReset = () => {
//     setFilters({
//       typeOfBuyer: '',
//       ticketSizeMin: '',
//       ticketSizeMax: '',
//       businesslocationCountry: '',
//       businesslocationCities: [],
//       openToPreRevenue: '',
//       openToPreBreakeven: '',
//       preferredArrangement: [],
//       minRevenue: '',
//       maxRevenue: '',
//       minProfit: '',
//       maxProfit: '',
//       minPrice: '',
//       maxPrice: '',
//       status: '',
//       entityStructure: ''
//     });
//   };

//   return (
//     <div className="flex flex-col md:flex-row p-6 bg-gray-50 min-h-screen gap-6">
//       <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
//         <Link to="/">
//           <img
//             alt="logo"
//             width={50}
//             className="object-contain cursor-pointer"
//           />
//         </Link>
//         <nav className="hidden md:flex gap-8">
//           <Link to="/aboutUs" className="text-xl hover:text-blue-600">About Us</Link>
//           <Link to="/services" className="text-xl hover:text-blue-600">Services</Link>
//           <Link to="/seller" className="text-xl hover:text-blue-600">Seller</Link>
//           <Link to="/buyer" className="text-xl hover:text-blue-600">Buyer</Link>
//           <Link to="/login" className="text-xl hover:text-blue-600">Log In</Link>
//           <Link to="/signUp" className="text-xl hover:text-blue-600">Register</Link>
//         </nav>
//         <div className="hidden md:flex gap-2">
//           <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">
//             Post A Business
//           </button>
//         </div>
//       </header>

//       <div className="mt-[5%] flex gap-5 w-full">
//         <FilterSidebar filters={filters} setFilters={setFilters} onReset={onReset} />

//         <div className="flex-1">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-xl font-bold">{filteredBusinesses.length} Businesses Found</h1>
//             <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
//           </div>

//           <div className="flex flex-wrap gap-6">
//             {filteredBusinesses.map((card, index) => (
//               <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
//                 <ReusableCards
//                   description_business={card.description_business}
//                   company_name={card.company_name}
//                   city={card.businesslocationCity}
//                   askingPrice={card.askingPrice}
//                   EBITDA={card.EBITDA}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Buyer;



// const Buyer = () => {
//   const [filters, setFilters] = useState({
//     location: '',
//     type: '',
//     preRevenue: '',
//     preBreakeven: '',
//     minTicket: '',
//     maxTicket: '',
//     interest: '',
//     arrangement: '',
//   });

//   const buyers = [
//     {
//       name: 'Buyer 1',
//       description:
//         'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
//       sector: 'Edtech',
//       ticketSize: 'Rs 5,00,000 - 10,00,000',
//       type: 'company',
//     },
//     {
//       name: 'Buyer 2',
//       description:
//         'Pratibimba -McClintock’s eye for detail certainly helped narrow the whereabouts of lorem ipsum’s origin...',
//       sector: 'E-commerce',
//       ticketSize: 'Rs 10,00,000 - 25,00,000',
//       type: 'Individual',
//     },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="flex p-5 bg-gray-100 min-h-screen">
//       {/* Sidebar Filters */}
//       <div className="w-1/4 p-4 bg-white rounded-lg shadow-md space-y-4">
//         <h2 className="text-lg font-semibold">Buyers</h2>

//         <select name="location" onChange={handleChange} className="w-full border p-2 rounded">
//           <option>Select Location</option>
//           <option>India</option>
//           <option>USA</option>
//         </select>

//         <select name="type" onChange={handleChange} className="w-full border p-2 rounded">
//           <option>Select Type of Buyer</option>
//           <option>Individual</option>
//           <option>Company</option>
//         </select>

//         <select name="preRevenue" onChange={handleChange} className="w-full border p-2 rounded">
//           <option>Open to pre-revenue businesses?</option>
//           <option>Yes</option>
//           <option>No</option>
//         </select>

//         <select name="preBreakeven" onChange={handleChange} className="w-full border p-2 rounded">
//           <option>Open to pre-breakeven businesses?</option>
//           <option>Yes</option>
//           <option>No</option>
//         </select>

//         <div className="flex space-x-2">
//           <input
//             type="number"
//             name="minTicket"
//             placeholder="Min"
//             onChange={handleChange}
//             className="w-1/2 border p-2 rounded"
//           />
//           <input
//             type="number"
//             name="maxTicket"
//             placeholder="Max"
//             onChange={handleChange}
//             className="w-1/2 border p-2 rounded"
//           />
//         </div>

//         <select name="interest" onChange={handleChange} className="w-full border p-2 rounded">
//           <option>Buyer Interest</option>
//           <option>Edtech</option>
//           <option>E-commerce</option>
//         </select>

//         <select name="arrangement" onChange={handleChange} className="w-full border p-2 rounded">
//           <option>Preferred Arrangement</option>
//           <option>Equity</option>
//           <option>Debt</option>
//         </select>
//       </div>

//       {/* Buyer Cards */}
//       <div className="w-3/4 px-6 space-y-4">
//         {buyers.map((buyer, idx) => (
//           <div key={idx} className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
//             {/* <FaUserCircle size={50} className="text-gray-400" /> */}
//             <div className="flex-1">
//               <p className="font-medium text-gray-800">{buyer.name}</p>
//               <p className="text-sm text-gray-600 mb-2">{buyer.description}</p>
//               <div className="text-sm text-gray-500 mb-1">{buyer.sector}</div>
//               <div className="text-sm text-gray-500">
//                 Ticket Size: {buyer.ticketSize} | {buyer.type}
//               </div>
//             </div>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//               Invite to business
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Buyer;
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


// const BuyerCard = ({ buyer }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-full">
//       <h2 className="text-xl font-bold mb-2">{buyer.name}</h2>
//       <p className="text-gray-700 mb-1"><strong>Location:</strong> {buyer.location}</p>
//       <p className="text-gray-700 mb-1"><strong>Buyer Type:</strong> {buyer.buyerType}</p>
//       <p className="text-gray-700 mb-1"><strong>Open to Pre-Revenue:</strong> {buyer.preRevenue}</p>
//       <p className="text-gray-700 mb-1"><strong>Open to Pre-Breakeven:</strong> {buyer.preBreakeven}</p>
//       <p className="text-gray-700 mb-1"><strong>Ticket Size:</strong> ₹{buyer.ticketSize.toLocaleString()}</p>
//       <p className="text-gray-700 mb-1"><strong>Interest:</strong> {buyer.interest}</p>
//       <p className="text-gray-700 mb-1"><strong>Preferred Arrangement:</strong> {buyer.arrangement}</p>
//     </div>
//   );
// };
// const BuyerCard = ({ props }) => {
//   return (
//     <div className='relative'>
//       <div className='w-[350px] border-2 border-slate-300 rounded-md p-4'>
//         <div className='flex items-center text-sm text-green-600'>
//           <CircleIcon fontSize='5px' className='mr-2' />
//           {props.buyerType}
//         </div>

//         <h1 className='font-semibold text-lg py-1'>
//           Buyer: {props.name ? props.name : 'High-Intent Investor'}
//         </h1>

//         <div className='flex gap-3 py-1'>
//           <div><EmailIcon fontSize='7px' className='mr-1 text-blue-400' /> Email</div>
//           <div><PhoneIcon fontSize='7px' className='mr-1 text-green-400' /> Phone</div>
//           <div><LinkedInIcon fontSize='7px' className='mr-1 text-red-500' /> LinkedIn</div>
//         </div>

//         <div className='flex justify-between py-1'>
//           <div>
//             {props.interest ? props.interest : 'Looking to acquire businesses in the tech and F&B sectors.'}
//           </div>
//           <div>
//             <img src={avatar} alt='buyer' width='100px' className='rounded-md' />
//           </div>
//         </div>

//         <div className='py-1'>
//           <StarIcon fontSize='small' className='mr-1 text-yellow-400' />
//           9.1 <span className='ml-3'>
//             <LocationPinIcon fontSize='small' className='mr-1 text-red-500' />
//             {props.businessCity ? props.businessCity : 'Mumbai'}
//           </span>
//         </div>

//         <div className='p-4 bg-slate-100 space-y-2'>
//           <div className='flex justify-between text-[15px]'>
//             Open to Pre-Revenue <span className='text-green-600'>Yes</span>
//           </div>
//           <div className='flex justify-between text-[15px]'>
//             Open to Pre-Breakeven <span className='text-green-600'>Yes</span>
//           </div>
//         </div>

//         <div className='flex justify-between py-2'>
//           <div className='w-[60%]'>
//             <h1>Ticket Size <InfoIcon fontSize='small' /></h1>
//             <div className='flex items-end gap-1 text-blue-700'>
//               <p className='text-[12px]'>INR</p>
//               <h1 className='text-2xl font-bold'>
//                 {props.ticketMin ? props.ticketMin : '25L'} - {props.ticketMax ? props.ticketMax : '1Cr'}
//               </h1>
//             </div>
//           </div>
//           <div className='flex items-center'>
//             <Button variant='contained' className='!bg-yellow-400 !text-black !w-[150px] !text-[0.7rem] !py-3'>
//               Contact Buyer
//             </Button>
//           </div>
//         </div>
//       </div>

//       <span className="absolute top-5 -right-2 z-10 inline-block bg-blue-500 rotate-45 text-white text-xs font-semibold px-2.5 py-0.5 shadow">
//         Verified
//       </span>
//     </div>
//   );
// };
const BuyerCard = ({ buyer }) => {
  const token=localStorage.getItem('token');
  return (
    <div className='relative'>
      <div className='w-[350px] border-2 border-slate-300 rounded-md p-4'>
        <div className='flex items-center text-sm text-green-600'>
          <CircleIcon fontSize='5px' className='mr-2' />
          {buyer.buyerType}
        </div>

        <h1 className='font-semibold text-lg py-1'>
          Buyer: <span className={token?"blur-sm":""}>{buyer.name}</span>
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

      <span className="absolute top-5 -right-2 z-10 inline-block bg-blue-500 rotate-45 text-white text-xs font-semibold px-2.5 py-0.5 shadow">
        Verified
      </span>
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
       <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
                {/* <img alt="logo" width={50} className="object-contain"  onClick={() => navigate('/')}/> */}
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
                  {/* <Link to="/homepage" className="text-xl hover:text-blue-600">How It Works?</Link> */}
                </nav>
                <div className="hidden md:flex gap-2">
                  {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogin}> */}
                  {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" >
                            Log In
                          </button>
                           <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" >
                            Signup
                          </button> */}
      
                  <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">
                    Post A Business
                  </button>
                </div>
                {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
                {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
              </header>
    
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

