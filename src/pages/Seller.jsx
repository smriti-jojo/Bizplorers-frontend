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

import React, { useState } from "react";
import SellerFilterSidebar from "../component/FilterSidebar";
import BusinessCard from "../component/BusinessCard";
import SortDropdown from "../component/SortDropdown";
import { Link } from "react-router-dom";
import ReusableCards from "../component/ReusableCards";
import { useEffect } from "react";
import Footer from "../component/Footer";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Header from "../component/Header";


const Seller = () => {
  const [sortBy, setSortBy] = useState("Newest");
  const[allBusinesses,setAllBusinesses]=useState([]);
  const [loading,setLoading]=useState(false);

  const [filters, setFilters] = useState({
    category: "",
    preferredManagement: "",
    year: "",
    month: "",
    minRevenue: "",
    maxRevenue: "",
    minProfit: "",
    maxProfit: "",
    minPrice: "",
    maxPrice: "",
    status: "",
    country: "",
    entityStructure: "",
  });

    const fetchSellerData = async () => {
setLoading(true);
    try {
      const response = await fetch('https://bizplorers-backend.onrender.com/api/seller/getAllSeller', {
        method: 'GET'
      
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      
      setAllBusinesses(data);
    } catch (error) {
      console.error(error);
      // alert('Getting Data failed.');
    }
    setLoading(false);
  };
   useEffect(() => {
         fetchSellerData();
      }, []);

 
  // const allBusinesses = [
  //   {
  //     name: "InnovateX Technologies",
  //     description: "AI-driven software for SMEs.",
  //     teamSize: 50,
  //     startDate: "January 2022",
  //     monthlyRevenue: 1000000,
  //     monthlyProfit: 300000,
  //     category: "tech",
  //     arrangement: "active",
  //     status: "operational",
  //     country: "india",
  //     entityStructure: "llp",
  //     price: 2000000,
  //   },
  //   {
  //     name: "EduSpark",
  //     description: "Online education tools.",
  //     teamSize: 20,
  //     startDate: "March 2021",
  //     monthlyRevenue: 300000,
  //     monthlyProfit: 100000,
  //     category: "education",
  //     arrangement: "passive",
  //     status: "paused",
  //     country: "usa",
  //     entityStructure: "private",
  //     price: 500000,
  //   },
  // ];

  // const filteredBusinesses = allBusinesses.filter((biz) => {
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
  //   } = filters;

  //   const matchesCategory = category ? biz.category === category : true;
  //   const matchesArrangement = preferredManagement ? biz.arrangement === preferredManagement : true;
  //   const matchesMinRev = minRevenue ? biz.monthlyRevenue >= Number(minRevenue) : true;
  //   const matchesMaxRev = maxRevenue ? biz.monthlyRevenue <= Number(maxRevenue) : true;
  //   const matchesMinProfit = minProfit ? biz.monthlyProfit >= Number(minProfit) : true;
  //   const matchesMaxProfit = maxProfit ? biz.monthlyProfit <= Number(maxProfit) : true;
  //   const matchesMinPrice = minPrice ? biz.price >= Number(minPrice) : true;
  //   const matchesMaxPrice = maxPrice ? biz.price <= Number(maxPrice) : true;
  //   const matchesStatus = status ? biz.status === status : true;
  //   const matchesCountry = country ? biz.country === country : true;
  //   const matchesEntity = entityStructure ? biz.entityStructure === entityStructure : true;

  //   return (
  //     matchesCategory &&
  //     matchesArrangement &&
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
  const filteredBusinesses = allBusinesses.filter((biz) => {
  const {
    category,
    preferredManagement,
    year,
    month,
    minRevenue,
    maxRevenue,
    minProfit,
    maxProfit,
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
  const matchesMinRev = minRevenue
    ? Number(biz.trail12months) >= Number(minRevenue)
    : true;
  const matchesMaxRev = maxRevenue
    ? Number(biz.trail12months) <= Number(maxRevenue)
    : true;
  const matchesMinProfit = minProfit
    ? Number(biz.PATtrailing12months) >= Number(minProfit)
    : true;
  const matchesMaxProfit = maxProfit
    ? Number(biz.PATtrailing12months) <= Number(maxProfit)
    : true;
  const matchesMinPrice = minPrice
    ? Number(biz.askingPrice) >= Number(minPrice)
    : true;
  const matchesMaxPrice = maxPrice
    ? Number(biz.askingPrice) <= Number(maxPrice)
    : true;
  const matchesStatus = status ? biz.status === status : true;
  const matchesCountry = country
    ? biz.country.toLowerCase() === country.toLowerCase()
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
    matchesMinRev &&
    matchesMaxRev &&
    matchesMinProfit &&
    matchesMaxProfit &&
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
      minRevenue: "",
      maxRevenue: "",
      minProfit: "",
      maxProfit: "",
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
                <div className="hidden md:flex gap-2">
               
      
                 
                </div>
               
              </header> */}
              <Header/>
              <div className="mt-[5%] flex gap-5 w-full">
      {/* <FilterSidebar filters={filters} setFilters={setFilters} onReset={onReset} /> */}
      <SellerFilterSidebar filters={filters} setFilters={setFilters} onReset={onReset} />

      <div className="flex-1 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">{filteredBusinesses.length} Businesses Found</h1>
          {/* <SortDropdown sortBy={sortBy} setSortBy={setSortBy} /> */}
        </div>

        {/* {filteredBusinesses.map((card, index) => (
           <ReusableCards
              key={index}
                description_business={card.description_business}
                company_name={card.company_name}
                city={card.city}
                askingPrice={card.askingPrice}
            EBITDA={card.EBITDA}
            />
        ))} */}
        <div className="flex flex-wrap  gap-6 w-full">
          {loading?
          <div className="flex justify-center w-full min-h-screen">
      <CircularProgress />
    </div>:(
      
  filteredBusinesses.map((card, index) => (
    <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
      <ReusableCards
      userId={card.userId}
        description_business={card.description_business}
        company_name={card.company_name}
        city={card.city}
        askingPrice={card.askingPrice}
        EBITDA={card.EBITDA}
      />
    </div>
  ))
)
}
</div>

      </div>
      </div>
     
    </div>
     <Footer/>
     </>
  );
};

export default Seller;
