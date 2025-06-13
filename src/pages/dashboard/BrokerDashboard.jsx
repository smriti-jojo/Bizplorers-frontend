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

const BrokerDashboard = () => {
  const [duration, setDuration] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [brokerData, setBrokerData] = useState([]);
  const [step, setStep] = useState(1);
   const [token, setToken] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

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
  const handleLogout = () => {
    localStorage.removeItem("token");
     localStorage.removeItem("user");
    window.location.href = "/login"; // or your login route
  };
 ;
  const RenderBuyerCards = () => {
    const cardData = [
      { title: "Card 1", content: <ReusableCards /> },
      { title: "Card 2", content: <ReusableCards /> },
      { title: "Card 3", content: <ReusableCards /> },
      { title: "Card 4", content: <ReusableCards /> },
      { title: "Card 5", content: <ReusableCards /> },
      { title: "Card 6", content: <ReusableCards /> },
    ];

   
    return (
      <>
        <div className="px-[5%]  ">
          <div className="flex justify-end pb-4">
            <Button variant="contained" onClick={handleDialogClickOpen}>
              <AddIcon className="mr-1" />
              Add Buyer
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
            <DialogContent className="z-10">
              <DialogContentText id="alert-dialog-slide-description">
                <Buyer type={"modal"} />
              </DialogContentText>
            </DialogContent>
        
            <DialogActions className="absolute top-0 right-2 z-10">
              <Button onClick={handleDialogClose}>
                <X size={40} color="black" />
              </Button>
            </DialogActions>
          </Dialog>
          <div className="flex flex-wrap gap-x-[5%] gap-y-10">
            {cardData.map((card, index) => (
              <ReusableCards
                key={index}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        </div>
      </>
    );
  };
  const RenderSellerCards = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const[cardData,setCardData]=useState([]);
  
    const handleDialogClickOpen = () => {
      setOpenDialog(true);
    };

    const handleDialogClose = () => {
      setOpenDialog(false);
    };

     const fetchSellerByBrokerData = async () => {
      try {
        const response = await fetch('https://bizplorers-backend.onrender.com/api/seller/getAllSeller/20', {
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
      } catch (error) {
        console.error(error);
        alert('Getting Data failed.');
      }
    };

useEffect(()=>{
  if (cardData.length === 0) {
    fetchSellerByBrokerData();
  }
  
},[cardData])
    // const cardData = [
    //   { title: "Card 1", content: <ReusableCards /> },
    //   { title: "Card 2", content: <ReusableCards /> },
    //   { title: "Card 3", content: <ReusableCards /> },
    //   { title: "Card 4", content: <ReusableCards /> },
    //   { title: "Card 5", content: <ReusableCards /> },
    //   { title: "Card 6", content: <ReusableCards /> },
    // ];

    return (
      <>
        <div className="px-[5%] ">
          <div className="flex justify-end pb-4">
            <Button variant="contained" onClick={handleDialogClickOpen}>
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
              <DialogContentText id="alert-dialog-slide-description">
                <Seller type={"modal"} />
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
              <ReusableCards
              key={index}
                description_business={card.description_business}
                company_name={card.company_name}
                city={card.city}
                askingPrice={card.askingPrice}
            EBITDA={card.EBITDA}
              />
            ))}
          </div>
        </div>
      </>
    );
  };

  const durationOptions = [
    { label: "Days", value: "10" },
    { label: "Month", value: "20" },
    { label: "Year", value: "30" },
  ];

  const tabs = [
    { label: "View Profile", component: () => <ViewProfile /> },
    { label: "Registered Buyer", component: () => <RenderBuyerCards /> },
    { label: "Registered Seller", component: () => <RenderSellerCards /> },
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
