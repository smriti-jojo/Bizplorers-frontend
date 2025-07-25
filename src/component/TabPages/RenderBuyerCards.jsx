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

import { toast } from "react-toastify";


const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});


 const RenderBuyerCards = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [cardData, setCardData] = useState([]);

  const handleDialogClickOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);


  const token=localStorage.getItem("token");
   const notifyNoBuyer = (msg = "No Buyer to display, Please Register!") => {
          toast.error(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        };
 const user=JSON.parse(localStorage.getItem("user"));
 const brokerId=user.id;

 const handleSuccess = () => {
    console.log("Buyer registered successfully!");
    setOpenDialog(false);
  };

  const fetchBuyerByBrokerData = async () => {
    try {
      const response = await fetch(
        `https://bizplorers-backend.onrender.com/api/buyer/getAllBuyer/${brokerId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
// console.log("response-----bybrokerid", response);
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      console.log("buyerbybrokerid", data);
      setCardData(data);
    } catch (error) {
      console.error(error);
      notifyNoBuyer();
    }
  };

  useEffect(() => {
    if (cardData.length === 0) {
      fetchBuyerByBrokerData();
    }
  }, [cardData]);

  const refresh=localStorage.getItem("refreshBuyerList");

  useEffect(()=>{
    
      fetchBuyerByBrokerData();
    localStorage.removeItem("refreshBuyerList");
    
  },[refresh])

  return (
    <div className="px-[5%] py-6">
      <div className="flex justify-end pb-4">
        <Button variant="contained" onClick={handleDialogClickOpen} className='!bg-blue-600 hover:!bg-blue-700'>
          <AddIcon className="mr-1" />
          Add Buyer
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
            <Buyer type="modal" onSuccess={handleSuccess}/>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions className="absolute top-0 right-2">
          <Button onClick={handleDialogClose}>
            <X size={40} color="black" />
          </Button>
        </DialogActions>
      </Dialog>

      <div className="flex flex-wrap gap-x-[5%] gap-y-10">
        {cardData.map((card, index) => (
          // <ReusableCards
          //   key={index}
          //   id={card.userId}
          //   type="buyer"
          //   company_name={card.company_name}
          //   city={card.city}
          //   description_business={card.description_business}
          //   buyerInterest={card.buyerInterest}
          // />
          <ReusableCards  key={index} type="buyer" data={card} 
           onUpdate={(updatedBuyer) => {
      const updatedList = [...cardData];
      updatedList[index] = updatedBuyer;
      setCardData(updatedList); 
    }}
      // id={card.userId}
      
       location="dashboard"
       />
        ))}
      </div>
    </div>
  );
};

export default RenderBuyerCards;
