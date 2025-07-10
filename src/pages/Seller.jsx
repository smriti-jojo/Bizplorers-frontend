// import React, { useState } from "react";
// import SellerFilterSidebar from "../component/FilterSidebar";
// import BusinessCard from "../component/BusinessCard";
// import SortDropdown from "../component/SortDropdown";
// import { Link } from "react-router-dom";
// import ReusableCards from "../component/ReusableCards";
// import { useEffect } from "react";
// import Footer from "../component/Footer";
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import Header from "../component/Header";


// const Seller = () => {
//   const [sortBy, setSortBy] = useState("Newest");
//   const[allBusinesses,setAllBusinesses]=useState([]);
//   const [loading,setLoading]=useState(false);

//   const [filters, setFilters] = useState({
//     category: "",
//     preferredManagement: "",
//     year: "",
//     month: "",
//     minRevenue: "",
//     maxRevenue: "",
//     minProfit: "",
//     maxProfit: "",
//     minPrice: "",
//     maxPrice: "",
//     status: "",
//     country: "",
//     entityStructure: "",
//      trailing12months:"",
//       NETtrailing12months:"",
//   });

//     const fetchSellerData = async () => {
// setLoading(true);
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
//     setLoading(false);
//   };
//    useEffect(() => {
//          fetchSellerData();
//       }, []);

 
  
//   const filteredBusinesses = allBusinesses.filter((biz) => {
//   const {
//     category,
//     preferredManagement,
//     year,
//     month,
//     minRevenue,
//     maxRevenue,
//     minProfit,
//     maxProfit,
//     minPrice,
//     maxPrice,
//     status,
//     country,
//     entityStructure,
//      trailing12months,
//       NETtrailing12months,
//   } = filters;

//   const matchesCategory = category ? biz.businessCategory === category : true;
//   const matchesArrangement = preferredManagement
//     ? biz.preferredArrangement?.includes(preferredManagement)
//     : true;
//   const matchesYear = year ? Number(biz.year) === Number(year) : true;
//   const matchesMonth = month ? Number(biz.month) === Number(month) : true;
//   const matchesMinRev = minRevenue
//     ? Number(biz.trail12months) >= Number(minRevenue)
//     : true;
//   const matchesMaxRev = maxRevenue
//     ? Number(biz.trail12months) <= Number(maxRevenue)
//     : true;
//   const matchesMinProfit = minProfit
//     ? Number(biz.PATtrailing12months) >= Number(minProfit)
//     : true;
//   const matchesMaxProfit = maxProfit
//     ? Number(biz.PATtrailing12months) <= Number(maxProfit)
//     : true;
//   const matchesMinPrice = minPrice
//     ? Number(biz.askingPrice) >= Number(minPrice)
//     : true;
//   const matchesMaxPrice = maxPrice
//     ? Number(biz.askingPrice) <= Number(maxPrice)
//     : true;
//   const matchesStatus = status ? biz.status === status : true;
//   const matchesCountry = country
//     ? biz.country.toLowerCase() === country.toLowerCase()
//     : true;
//   const matchesEntity =
//     entityStructure && biz.entityStructure
//       ? biz.entityStructure.toLowerCase() === entityStructure.toLowerCase()
//       : true;

//   return (
//     matchesCategory &&
//     matchesArrangement &&
//     matchesYear &&
//     matchesMonth &&
//     matchesMinRev &&
//     matchesMaxRev &&
//     matchesMinProfit &&
//     matchesMaxProfit &&
//     matchesMinPrice &&
//     matchesMaxPrice &&
//     matchesStatus &&
//     matchesCountry &&
//     matchesEntity
//   );
// });

//   const onReset = () => {
//     setFilters({
//       category: "",
//       preferredManagement: "",
//       year: "",
//       month: "",
//       minRevenue: "",
//       maxRevenue: "",
//       minProfit: "",
//       maxProfit: "",
//       minPrice: "",
//       maxPrice: "",
//       status: "",
//       country: "",
//       entityStructure: "",
//        trailing12months:"",
//       NETtrailing12months:"",
//     });
//   };

//   return (
//     <>
//     <div className="flex flex-col md:flex-row p-6 bg-gray-50 min-h-screen gap-6">
       
//               <Header/>
//               <div className="mt-[5%] flex gap-5 w-full">

//       <SellerFilterSidebar filters={filters} setFilters={setFilters} onReset={onReset} />

//       <div className="flex-1 ">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-xl font-bold">{filteredBusinesses.length} Businesses Found</h1>
       
//         </div>

       
//         <div className="flex flex-wrap  gap-6 w-full">
//           {loading?
//           <div className="flex justify-center w-full min-h-screen">
//       <CircularProgress />
//     </div>:(
//        <div className="flex flex-wrap gap-y-7 gap-x-7 w-full">
//   {filteredBusinesses.map((card, index) => (
//     <div key={index} className="">
      
//        <ReusableCards type="seller" data={card}  />
     
//     </div>
//   ))}</div>
// )
// }
// </div>

//       </div>
//       </div>
     
//     </div>
//      <Footer/>
//      </>
//   );
// };

// export default Seller;
import React, { useState, useEffect } from "react";
import SellerFilterSidebar from "../component/FilterSidebar";
import ReusableCards from "../component/ReusableCards";
import Footer from "../component/Footer";
import Header from "../component/Header";
import CircularProgress from "@mui/material/CircularProgress";

const Seller = () => {
  const [sortBy, setSortBy] = useState("Newest");
  const [allBusinesses, setAllBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    category: "",
    preferredManagement: "",
    year: "",
    month: "",
    trailing12months: "",         // ✅ minimum revenue filter
    NETtrailing12months: "",      // ✅ minimum profit filter
    minPrice: "",
    maxPrice: "",
    status: "",
    country: "",
    entityStructure: "",
  });

  const fetchSellerData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://bizplorers-backend.onrender.com/api/seller/getAllSeller"
      );
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setAllBusinesses(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSellerData();
  }, []);

  const parseNumber = (value) => {
    if (!value) return 0;
    if (typeof value === "number") return value;
    if (typeof value === "string") {
      const cleaned = value.replace(/[^0-9.]/g, "");
      return Number(cleaned);
    }
    return 0;
  };

  const filteredBusinesses = allBusinesses.filter((biz) => {
    const {
      category,
      preferredManagement,
      year,
      month,
      trailing12months,
      NETtrailing12months,
      minPrice,
      maxPrice,
      status,
      country,
      entityStructure,
    } = filters;

    const matchesCategory = category ? biz.businessCategory === category : true;
    const matchesArrangement = preferredManagement
      ? biz.preferredArrangement?.includes(preferredManagement)
      : true;
    const matchesYear = year ? Number(biz.year) === Number(year) : true;
    const matchesMonth = month ? Number(biz.month) === Number(month) : true;

    const matchesRevenue = trailing12months
      ? parseNumber(biz.trailing12months) >= Number(trailing12months)
      : true;

    const matchesProfit = NETtrailing12months
      ? parseNumber(biz.NETtrailing12months) >= Number(NETtrailing12months)
      : true;

    const matchesMinPrice = minPrice
      ? parseNumber(biz.askingPrice) >= Number(minPrice)
      : true;
    const matchesMaxPrice = maxPrice
      ? parseNumber(biz.askingPrice) <= Number(maxPrice)
      : true;

    const matchesStatus = status ? biz.status === status : true;
    const matchesCountry = country
      ? biz.country?.toLowerCase() === country.toLowerCase()
      : true;
    const matchesEntity =
      entityStructure && biz.entityStructure
        ? biz.entityStructure.toLowerCase() === entityStructure.toLowerCase()
        : true;

    return (
      matchesCategory &&
      matchesArrangement &&
      matchesYear &&
      matchesMonth &&
      matchesRevenue &&
      matchesProfit &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesStatus &&
      matchesCountry &&
      matchesEntity
    );
  });

  const onReset = () => {
    setFilters({
      category: "",
      preferredManagement: "",
      year: "",
      month: "",
      trailing12months: "",
      NETtrailing12months: "",
      minPrice: "",
      maxPrice: "",
      status: "",
      country: "",
      entityStructure: "",
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row p-6 bg-gray-50 min-h-screen gap-6">
        <Header />
        <div className="mt-[5%] flex gap-5 w-full">
          <SellerFilterSidebar
            filters={filters}
            setFilters={setFilters}
            onReset={onReset}
          />

          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">
                {filteredBusinesses.length} Businesses Found
              </h1>
            </div>

            <div className="flex flex-wrap gap-6 w-full">
              {loading ? (
                <div className="flex justify-center w-full min-h-screen">
                  <CircularProgress />
                </div>
              ) : (
                <div className="flex flex-wrap gap-y-7 gap-x-7 w-full">
                  {filteredBusinesses.map((card, index) => (
                    <div key={index}>
                      <ReusableCards type="seller" data={card} location={'home'}/>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Seller;
