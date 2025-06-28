import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@mui/material";
import ReusableCards from "../../component/ReusableCards";
import AddIcon from "@mui/icons-material/Add";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import Buyer from "../../pages/signup_steps/Buyer";
import axios from 'axios';
import Seller from "../../pages/signup_steps/Buyer";

import { toast } from "react-toastify";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});
const RenderCombinedCards = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [combinedData, setCombinedData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [buyerData, setbuyerData] = useState([]);


  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") );
  const brokerId=user.id;

  const handleDialogClickOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  const notifySuccess = (msg = "Users Assigned to Broker!") => {
      toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    };

//   const handleAddToCart = (item) => {
//   setCart((prevCart) => {
//     const isAlreadyInCart = prevCart.find(
//       (cartItem) => cartItem.id === item.id && cartItem.type === item.type
//     );
//     if (isAlreadyInCart) return prevCart; // Avoid duplicates
//     return [...prevCart, item];
//   });
// };
// const toggleSelection = (item) => {
//   const isSelected = selectedItems.find(
//     (i) => i.id === item.id && i.type === item.type
//   );
//   if (isSelected) {
//     setSelectedItems((prev) =>
//       prev.filter((i) => !(i.id === item.id && i.type === item.type))
//     );
//   } else {
//     setSelectedItems((prev) => [...prev, item]);
//   }
// };
// const toggleSelection = (item) => {
//   const exists = selectedItems.find(
//     (i) => i.userId=== item.userId
//   );

//   if (exists) {
//     setSelectedItems((prev) =>
//       prev.filter(
//         (i) =>
//           !(i.userId === item.userId)
//       )
//     );
//   } else {
//     const fullItemWithBroker = {
//       ...item,
//       brokerId,
//     };
//     setSelectedItems((prev) => [...prev, fullItemWithBroker]);
//   }
// };

useEffect(() => {
  console.log("Updated selectedItems", selectedItems);
}, [selectedItems]);

// const toggleSelection = (item) => {
//   const user=JSON.parse(localStorage.getItem("user"));
//   const brokerId=user.id;
//   const exists = selectedItems.find(i => i.id === item.id);

//   if (exists) {
//     setSelectedItems(prev =>
//       prev.filter(i => i.id !== item.id)
//     );
//   } else {
//     const fullItemWithBroker = {
//       ...item,
//       brokerId:brokerId,
//       id: item.userId, // normalize the key to `id` for consistency
//     };
//     setSelectedItems(prev => [...prev, fullItemWithBroker]);
//   }
 
  
// };
const toggleSelection = (item) => {
 

  const normalizedId = item.userId; 

  const exists = selectedItems.find(i => i.userId === normalizedId);

  if (exists) {
    setSelectedItems(prev =>
      prev.filter(i => i.userId !== normalizedId)
    );
  } else {
    const fullItemWithBroker = {
      userId: normalizedId, // always use userId as id
      role:item.type
    };
    setSelectedItems(prev => {
      const alreadyExists = prev.some(i => i.userId === normalizedId);
      if (alreadyExists) return prev;
      return [...prev, fullItemWithBroker];
    });
  
  }
};







  const fetchCombinedData = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const [sellerRes, buyerRes] = await Promise.all([
        axios.get(
          "https://bizplorers-backend.onrender.com/api/seller/getAllSeller"
          
        ),
        axios.get(
          "https://bizplorers-backend.onrender.com/api/buyer/getAllBuyer"
        
        ),
      ]);



      const formattedSellers = sellerRes.data.map((item) => ({
        ...item,
        type: "seller",
      }));

      const formattedBuyers = buyerRes.data.map((item) => ({
        ...item,
        type: "buyer",
      }));
      setbuyerData(formattedBuyers);
console.log("combinedData----",[...formattedSellers, ...formattedBuyers]);
      setCombinedData([...formattedSellers, ...formattedBuyers]);
      // console.log("combinedData----",combinedData);
    } catch (error) {
      console.error("Error fetching combined data:", error);
      alert("Failed to fetch seller and buyer data.");
    }
  };

  useEffect(() => {
    if (combinedData.length === 0) {
      fetchCombinedData();
    }
  }, [combinedData]);

  const handleExistingUserToBroker=async()=>{
  const token=localStorage.getItem('token');
  const user=JSON.parse(localStorage.getItem("user"));
  console.log("selecteditems---handle",selectedItems);
  const data={
    brokerId:user.id,
    users:selectedItems
  }
    try {
          const response = await axios.put(
            "https://bizplorers-backend.onrender.com/api/broker/assign-existing",
            data,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("status",response.status);
    if(response.status===200){
notifySuccess();
    }
          // alert(response.data.message);
          // const updatedValue = response.data.value;
    
        
        } catch (error) {
          console.error("Update failed:", error);
          alert("Failed to update value. Please try again.");
        }
      };
  

  return (
    <div className="px-[5%]">
      <div className="flex justify-end pb-4">
        <Button variant="contained" onClick={handleExistingUserToBroker}>
          <AddIcon className="mr-1" />
          Assign User
        </Button>
      </div>

      <Dialog
        open={openDialog}
        slots={{ transition: Transition }}
        keepMounted
        onClose={handleDialogClose}
        PaperProps={{
          style: {
            width: "90vw",
            height: "100vh",
            maxWidth: "none",
            maxHeight: "none",
          },
        }}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Seller type="modal" />
          </DialogContentText>
        </DialogContent>
        <DialogActions className="absolute top-0 right-2">
          <Button onClick={handleDialogClose}>
            <X size={40} color="black" />
          </Button>
        </DialogActions>
      </Dialog>

      <div className="flex flex-wrap gap-x-[5%] gap-y-10">
       {combinedData.map((card, index) => (
  card.type === 'buyer' ? (
    // <ReusableCards
    //   key={index}
    //   buyer={card}
    //   onSelect={() => toggleSelection(card)}
    //   location="dashboard"
    //   isSelected={!!selectedItems.find(i => i.userId === card.userId)}
    // />
     <ReusableCards  key={index} type="buyer" buyer={card} 
      id={card.userId}
      onSelect={() => toggleSelection(card)}
      location="dashboard"
      isSelected={!!selectedItems.find(i => i.userId === card.userId)} />
  ) : (
    <ReusableCards
      key={index}
      id={card.userId}
      type={card.type}
      brokerId={card.brokerId}
      company_name={card.company_name}
      city={card.city}
      description_business={card.description_business}
      askingPrice={card.askingPrice}
      EBITDA={card.EBITDA}
      buyerInterest={card.buyerInterest}
      onSelect={() => toggleSelection(card)}
      location="dashboard"
      isSelected={!!selectedItems.find(i => i.userId === card.userId)}
    />
  )
))}

      </div>
    </div>
  );
};


export default RenderCombinedCards
