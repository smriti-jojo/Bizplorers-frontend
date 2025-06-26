import React from "react";
import ReusableTabs from "../../component/ReusableTabs";
import { useState } from "react";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@mui/material";
import ViewProfile from "../../component/Broker/ViewProfile";
import ReusableCards from "../../component/ReusableCards";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Stepper from "../../component/Stepper";
import axios from "axios";
// import StepOne from '../../component/Multistep_Form/StepOne';
import StepOne from "../../component/Multistep_Seller/StepOne";
// import StepTwo from '../../component/Multistep_Form/StepTwo';
import StepTwo from "../../component/Multistep_Seller/StepTwo";
// import StepThree from '../../component/Multistep_Form/StepThree';
import StepThree from "../../component/Multistep_Seller/StepThree";
import Seller from "../../pages/signup_steps/Seller";
import Buyer from "../../pages/signup_steps/Buyer";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { toast } from "react-toastify";
import RenderBuyerCards from "../../component/TabPages/RenderBuyerCards";
import RenderSellerCards from "../../component/TabPages/RenderSellerCards";
import RenderCombinedCards from "../../component/TabPages/RenderCombinedCards";
import  {showSuccess,showError ,showInfo,showWarning} from '../../component/utils/toast';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditableRow = ({ label, icon, value, editable, onChange, textarea }) => (
  <div className="flex items-start gap-2 my-2">
    <span className="font-semibold flex items-center">
      {icon}
      {label}:
    </span>
    {editable ? (
      textarea ? (
        <textarea
          className="border p-2 rounded-md w-full"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className="border p-2 rounded-md w-full"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    ) : (
      <span>{value}</span>
    )}
  </div>
);

//  const RenderBuyerCards = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [cardData, setCardData] = useState([]);

//   const handleDialogClickOpen = () => setOpenDialog(true);
//   const handleDialogClose = () => setOpenDialog(false);
//   const token=localStorage.getItem("token");
//    const notifyNoBuyer = (msg = "No Buyers found for this broker!") => {
//           toast.error(msg, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "colored",
//           });
//         };
//  const user=JSON.parse(localStorage.getItem("user"));
//  const brokerId=user.id;

//   const fetchBuyerByBrokerData = async () => {
//     try {
//       const response = await fetch(
//         `https://bizplorers-backend.onrender.com/api/buyer/getAllBuyer/${brokerId}`,
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
//       console.log("buyerbybrokerid", data);
//       setCardData(data);
//     } catch (error) {
//       console.error(error);
//       notifyNoBuyer();
//     }
//   };

//   useEffect(() => {
//     if (cardData.length === 0) {
//       fetchBuyerByBrokerData();
//     }
//   }, [cardData]);

//   return (
//     <div className="px-[5%] py-6">
//       <div className="flex justify-end pb-4">
//         <Button variant="contained" onClick={handleDialogClickOpen}>
//           <AddIcon className="mr-1" />
//           Add Buyer
//         </Button>
//       </div>

//       <Dialog
//         open={openDialog}
//         slots={{ transition: Transition }}
//         keepMounted
//         onClose={handleDialogClose}
//         PaperProps={{
//           style: {
//             width: "90vw",
//             height: "100vh",
//             maxWidth: "none",
//             maxHeight: "none",
//           },
//         }}
//       >
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             <Buyer type="modal" />
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions className="absolute top-0 right-2">
//           <Button onClick={handleDialogClose}>
//             <X size={40} color="black" />
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <div className="flex flex-wrap gap-x-[5%] gap-y-10">
//         {cardData.map((card, index) => (
//           <ReusableCards
//             key={index}
//             id={card.userId}
//             type="buyer"
//             company_name={card.company_name}
//             city={card.city}
//             description_business={card.description_business}
//             buyerInterest={card.buyerInterest}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

//   const RenderSellerCards = () => {
//     const [openDialog, setOpenDialog] = useState(false);
//     const[cardData,setCardData]=useState([]);
//   const token=localStorage.getItem("token")
//     const handleDialogClickOpen = () => {
//       setOpenDialog(true);
//     };

//     const handleDialogClose = () => {
//       setOpenDialog(false);
//     };

   

//            const notifyNoSeller = (msg = "No Seller found for this broker!") => {
//           toast.error(msg, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "colored",
//           });
//         };
//  const user=JSON.parse(localStorage.getItem("user"));
//  const brokerId=user.id;
//      const fetchSellerByBrokerData = async () => {
//       try {
//         const response = await fetch(`https://bizplorers-backend.onrender.com/api/seller/getAllSeller/${brokerId}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//           },
//         });
  
//         if (!response.ok) throw new Error('Failed to fetch');
  
//         const data = await response.json();
//         // alert('Data fetched successfully!');
//         console.log("sellerbybrokerid",data);
//         setCardData(data);
//       } catch (error) {
//         console.error(error);
//         // alert('No Buyers found for this broker.');
//         notifyNoSeller();
//       }
//     };

// useEffect(()=>{
//   if (cardData.length === 0) {
//     fetchSellerByBrokerData();
//   }
  
// },[cardData])
//     // const cardData = [
//     //   { title: "Card 1", content: <ReusableCards /> },
//     //   { title: "Card 2", content: <ReusableCards /> },
//     //   { title: "Card 3", content: <ReusableCards /> },
//     //   { title: "Card 4", content: <ReusableCards /> },
//     //   { title: "Card 5", content: <ReusableCards /> },
//     //   { title: "Card 6", content: <ReusableCards /> },
//     // ];

//     return (
//       <>
//         <div className="px-[5%] ">
//           <div className="flex justify-end pb-4">
//             <Button variant="contained" onClick={handleDialogClickOpen}>
//               <AddIcon className="mr-1" />
//               Add Seller
//             </Button>
//           </div>
//           <Dialog
//             open={openDialog}
//             slots={{
//               transition: Transition,
//             }}
//             keepMounted
//             onClose={handleDialogClose}
//             aria-describedby="alert-dialog-slide-description"
//             PaperProps={{
//               style: {
//                 width: "90vw",
//                 height: "100vh",
//                 maxWidth: "none", // Override default maxWidth
//                 maxHeight: "none", // Override default maxHeight
//               },
//             }}
//           >
//             <DialogContent className="">
//               <DialogContentText id="alert-dialog-slide-description">
//                 <Seller type={"modal"} />
//               </DialogContentText>
//             </DialogContent>
           
//             <DialogActions className="absolute top-0 right-2">
//               <Button onClick={handleDialogClose}>
//                 <X size={40} color="black" />
//               </Button>
//             </DialogActions>
//           </Dialog>
//           <div className="flex flex-wrap gap-x-[5%] gap-y-10">
//             {cardData.map((card, index) => (
//               <ReusableCards
//               key={index}
//               id={card.userId}
//                 description_business={card.description_business}
//                 company_name={card.company_name}
//                 city={card.city}
//                 askingPrice={card.askingPrice}
//             EBITDA={card.EBITDA}
//               />
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   };



// const RenderCombinedCards = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [combinedData, setCombinedData] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);


//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user") );
//   const brokerId=user.id;

//   const handleDialogClickOpen = () => setOpenDialog(true);
//   const handleDialogClose = () => setOpenDialog(false);

//   const notifySuccess = (msg = "Users Assigned to Broker!") => {
//       toast.success(msg, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "colored",
//       });
//     };

// //   const handleAddToCart = (item) => {
// //   setCart((prevCart) => {
// //     const isAlreadyInCart = prevCart.find(
// //       (cartItem) => cartItem.id === item.id && cartItem.type === item.type
// //     );
// //     if (isAlreadyInCart) return prevCart; // Avoid duplicates
// //     return [...prevCart, item];
// //   });
// // };
// // const toggleSelection = (item) => {
// //   const isSelected = selectedItems.find(
// //     (i) => i.id === item.id && i.type === item.type
// //   );
// //   if (isSelected) {
// //     setSelectedItems((prev) =>
// //       prev.filter((i) => !(i.id === item.id && i.type === item.type))
// //     );
// //   } else {
// //     setSelectedItems((prev) => [...prev, item]);
// //   }
// // };
// // const toggleSelection = (item) => {
// //   const exists = selectedItems.find(
// //     (i) => i.userId=== item.userId
// //   );

// //   if (exists) {
// //     setSelectedItems((prev) =>
// //       prev.filter(
// //         (i) =>
// //           !(i.userId === item.userId)
// //       )
// //     );
// //   } else {
// //     const fullItemWithBroker = {
// //       ...item,
// //       brokerId,
// //     };
// //     setSelectedItems((prev) => [...prev, fullItemWithBroker]);
// //   }
// // };

// useEffect(() => {
//   console.log("Updated selectedItems", selectedItems);
// }, [selectedItems]);

// // const toggleSelection = (item) => {
// //   const user=JSON.parse(localStorage.getItem("user"));
// //   const brokerId=user.id;
// //   const exists = selectedItems.find(i => i.id === item.id);

// //   if (exists) {
// //     setSelectedItems(prev =>
// //       prev.filter(i => i.id !== item.id)
// //     );
// //   } else {
// //     const fullItemWithBroker = {
// //       ...item,
// //       brokerId:brokerId,
// //       id: item.userId, // normalize the key to `id` for consistency
// //     };
// //     setSelectedItems(prev => [...prev, fullItemWithBroker]);
// //   }
 
  
// // };
// const toggleSelection = (item) => {
 

//   const normalizedId = item.userId; 

//   const exists = selectedItems.find(i => i.userId === normalizedId);

//   if (exists) {
//     setSelectedItems(prev =>
//       prev.filter(i => i.userId !== normalizedId)
//     );
//   } else {
//     const fullItemWithBroker = {
//       userId: normalizedId, // always use userId as id
//       role:item.type
//     };
//     setSelectedItems(prev => {
//       const alreadyExists = prev.some(i => i.userId === normalizedId);
//       if (alreadyExists) return prev;
//       return [...prev, fullItemWithBroker];
//     });
  
//   }
// };







//   const fetchCombinedData = async () => {
//     try {
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       };

//       const [sellerRes, buyerRes] = await Promise.all([
//         axios.get(
//           "https://bizplorers-backend.onrender.com/api/seller/getAllSeller"
          
//         ),
//         axios.get(
//           "https://bizplorers-backend.onrender.com/api/buyer/getAllBuyer"
        
//         ),
//       ]);

//       const formattedSellers = sellerRes.data.map((item) => ({
//         ...item,
//         type: "seller",
//       }));

//       const formattedBuyers = buyerRes.data.map((item) => ({
//         ...item,
//         type: "buyer",
//       }));
// console.log("combinedData----",[...formattedSellers, ...formattedBuyers]);
//       setCombinedData([...formattedSellers, ...formattedBuyers]);
//       // console.log("combinedData----",combinedData);
//     } catch (error) {
//       console.error("Error fetching combined data:", error);
//       alert("Failed to fetch seller and buyer data.");
//     }
//   };

//   useEffect(() => {
//     if (combinedData.length === 0) {
//       fetchCombinedData();
//     }
//   }, [combinedData]);

//   const handleExistingUserToBroker=async()=>{
//   const token=localStorage.getItem('token');
//   const user=JSON.parse(localStorage.getItem("user"));
//   console.log("selecteditems---handle",selectedItems);
//   const data={
//     brokerId:user.id,
//     users:[selectedItems]
//   }
//     try {
//           const response = await axios.put(
//             "https://bizplorers-backend.onrender.com/api/broker/assign-existing",
//             data,
//             {
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );
//           console.log("status",response.status);
//     if(response.status===200){
// notifySuccess();
//     }
//           // alert(response.data.message);
//           // const updatedValue = response.data.value;
    
        
//         } catch (error) {
//           console.error("Update failed:", error);
//           alert("Failed to update value. Please try again.");
//         }
//       };
  

//   return (
//     <div className="px-[5%]">
//       <div className="flex justify-end pb-4">
//         <Button variant="contained" onClick={handleExistingUserToBroker}>
//           <AddIcon className="mr-1" />
//           Assign User
//         </Button>
//       </div>

//       <Dialog
//         open={openDialog}
//         slots={{ transition: Transition }}
//         keepMounted
//         onClose={handleDialogClose}
//         PaperProps={{
//           style: {
//             width: "90vw",
//             height: "100vh",
//             maxWidth: "none",
//             maxHeight: "none",
//           },
//         }}
//       >
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             <Seller type="modal" />
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions className="absolute top-0 right-2">
//           <Button onClick={handleDialogClose}>
//             <X size={40} color="black" />
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <div className="flex flex-wrap gap-x-[5%] gap-y-10">
//         {combinedData.map((card, index) => (
//           <ReusableCards
//             key={index}
//             id={card.userId}
//             type={card.type}
//             company_name={card.company_name}
//             city={card.city}
//             description_business={card.description_business}
//             askingPrice={card.askingPrice}
//             EBITDA={card.EBITDA}
//             buyerInterest={card.buyerInterest}
//            onSelect={() => toggleSelection(card)}
//            location={'dashboard'}
// isSelected={!!selectedItems.find(i => i.userId === card.userId)}

//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const BrokerDashboard = () => {
  const [duration, setDuration] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [brokerData, setBrokerData] = useState([]);
  const [step, setStep] = useState(1);
   const [token, setToken] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [cart, setCart] = useState([]);


  const handleDialogClickOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  //   const handleDropdownChange = (event) => {
  //     setDuration(event.target.value);
  //   };


  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  
       const notifyLogOut = (msg = "Logged out successfully!") => {
          toast.success(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        };

        
       const notifyNoBuyer = (msg = "No Buyers found for this broker!") => {
          toast.error(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        };

           const notifyNoSeller = (msg = "No Seller found for this broker!") => {
          toast.error(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        };
  const handleLogout = () => {
    localStorage.removeItem("token");
     localStorage.removeItem("user");
     notifyLogOut();
    window.location.href = "/login"; // or your login route
  };
 ;





 
  const durationOptions = [
    { label: "Days", value: "10" },
    { label: "Month", value: "20" },
    { label: "Year", value: "30" },
  ];

  const tabs = [
    { label: "View Profile", component: () => <ViewProfile /> },
    { label: "Registered Buyer", component: () => <RenderBuyerCards /> },
    { label: "Registered Seller", component: () => <RenderSellerCards /> },
     { label: "All", component: () => <RenderCombinedCards /> },
  ];
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
                       <Link to="/signUp" className="text-xl hover:text-blue-600">
                         Register
                       </Link>
                     </nav>
                     <div className="hidden md:flex gap-2">
                      
                       <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogout}>
                                 Log Out
                               </button>
                     </div>
                   </header> */}
       
    
     <Header/>
     
      <div className="py-[5%]  ">
        <ReusableTabs
          tabs={tabs}
          //   dropdownComponent={DropdownSelect}
          dropdownOptions={durationOptions}
          dropdownValue={duration}
          //   onDropdownChange={handleDropdownChange}
          buttonLabel="New Shipments"
          onButtonClick={() => alert("Add Shipment")}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default BrokerDashboard;
