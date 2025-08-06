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
import Seller from "../../pages/signup_steps/Seller";

import { toast } from "react-toastify";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});
let toastAlreadyShown = false;


  const RenderSellerCards = () => {
    const [openDialog, setOpenDialog] = useState(false);
    

    const[cardData,setCardData]=useState([]);
    const [refreshFlag, setRefreshFlag] = useState(false);
  const token=localStorage.getItem("token")
    const handleDialogClickOpen = () => {
      setOpenDialog(true);
    };

    const handleDialogClose = () => {
      setOpenDialog(false);
    };

      const handleSuccess = () => {
    console.log("Seller registered successfully!");
    setOpenDialog(false);
  };
   

           const notifyNoSeller = (msg = "No Seller to display, Please Register!") => {
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

 
     const fetchSellerByBrokerData = async () => {
      try {
        const response = await fetch(`https://bizplorers-backend.onrender.com/api/seller/getAllSeller/${brokerId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (!response.ok) throw new Error('Failed to fetch');
  
        const data = await response.json();
        // alert('Data fetched successfully!');
        console.log("sellerbybrokerid",data);
        setCardData(data);
          if (data.length === 0 && !toastAlreadyShown) {
      notifyNoSeller();
      toastAlreadyShown = true; 
    }
      } catch (error) {
        console.error(error);
        
      }
    };


useEffect(() => {
  
  fetchSellerByBrokerData(); // run once on mount
}, []);





const refresh=localStorage.getItem("refreshSellerList");

  useEffect(()=>{
    
     fetchSellerByBrokerData();
    localStorage.removeItem("refreshSellerList");
    
  },[refresh])

    

    return (
      <>
        <div className="px-[5%] ">
          <div className="flex justify-end pb-4">
            <Button variant="contained" onClick={handleDialogClickOpen} className='!bg-blue-600 hover:!bg-blue-700'>
              <AddIcon className="mr-1" />
              Add Seller
            </Button>
          </div>
          <Dialog
            open={openDialog}
            slots={{
              transition: Transition,
            }}
            keepMounted
            onClose={handleDialogClose}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
              style: {
                width: "90vw",
                height: "100vh",
                maxWidth: "none", // Override default maxWidth
                maxHeight: "none", // Override default maxHeight
              },
            }}
          >
            <DialogContent className="">
              
                <Seller type={"modal"} onSuccess={handleSuccess}/>
              
            </DialogContent>
           
            <DialogActions className="absolute top-0 right-2">
              <Button onClick={handleDialogClose}>
                <X size={40} color="black" />
              </Button>
            </DialogActions>
          </Dialog>
          <div className="flex flex-wrap gap-x-[5%] gap-y-10">
            {cardData.map((card, index) => (
              <ReusableCards
            //   key={index}
            
            //   userId={card.userId}
            //     description_business={card.description_business}
            //     company_name={card.company_name}
            //     city={card.city}
            //     askingPrice={card.askingPrice}
            // EBITDA={card.EBITDA}
             
             key={index} type="seller" data={card}
            onUpdate={(updatedBuyer) => {
      const updatedList = [...cardData];
      updatedList[index] = updatedBuyer;
      setCardData(updatedList); // update state to trigger re-render
    }}
location={'dashboard'}
              />
            ))}
          </div>
        </div>
      </>
    );
  };


export default RenderSellerCards
