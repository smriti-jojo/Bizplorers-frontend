import React, { useState } from "react";
import { useRef } from "react";
import { IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  ArrowDropDown,
  ArrowDropUp,
  
} from "@mui/icons-material";
import * as XLSX from "xlsx";
import AdminUserTable from "../../component/AdminTable";
import pic from "../../assests/pic.jpg";
import axios from "axios";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditIcon } from "lucide-react";
import { TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { DialogTitle } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import BrokersVerticalTabs from "../../component/Admin/Broker/VerticalTabs";
import  {showSuccess,showError ,showInfo,showWarning} from '../../component/utils/toast';
import BrokerRegistrationsTable from '../../component/Admin/Broker/BrokerRegistrationTable';
import InterestTable from "../../component/Admin/Interest/InterestTable";
import InviteTable from "../../component/Admin/Invite/InviteTable";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Sidebar({
  picklists,
  setPicklists,
  management,
  setManagement,
  selectedCategory,
  setSelectedCategory,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [brokerData,setBrokerData]=useState([]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const MainMenuOpen = () => setIsMainMenuOpen(!isMainMenuOpen);
  const AdminMenuOpen = () => setIsAdminMenuOpen(!isAdminMenuOpen);

  const token = localStorage.getItem("token");

  const handleFile = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      const picklistsForBackend = {};
      const newPicklistsForFrontend = {};
      const managementLabels = [];

      if (jsonData.length > 0) {
        Object.keys(jsonData[0]).forEach((field) => {
          managementLabels.push(field);

          const values = jsonData
            .map((row) => row[field])
            .filter((v) => v !== undefined && v !== null);

          const uniqueValues = Array.from(new Set(values));

          // ✅ For frontend
          newPicklistsForFrontend[field] = uniqueValues.map((val, idx) => ({
            id: idx + 1,
            name: val,
            active: true,
          }));

          // ✅ For backend
          picklistsForBackend[field] = uniqueValues;
        });
      }

      // ✅ Send to backend
      try {
        const response = await fetch(
          "https://bizplorers-backend.onrender.com/api/picklist/multiple_add_value",
          {
            method: "POST",
            body: JSON.stringify({ picklists: picklistsForBackend }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // make sure token is defined
            },
          }
        );

        const result = await response.json();

        if (response.ok) {
          console.log("Picklists added successfully:", result);
          showSuccess("Picklists uploaded successfully!");
          // alert("Picklists uploaded successfully!");
        } else {
          showError(result.message);
          console.error("Error adding picklists:", result.message);
        }
      } catch (error) {
        showError(error);
        console.error("Request failed:", error);
      }

      // ✅ Set frontend state
      setPicklists(newPicklistsForFrontend);
      setManagement(managementLabels);
      setSelectedCategory(managementLabels[0] || "");
    };

    reader.readAsArrayBuffer(file);
  };



    //  const fetchSellerBuyerUnderBroker = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://bizplorers-backend.onrender.com/api/users/brokers-with-buyers-and-sellers",
    //       {
    //         headers: { Authorization: `Bearer ${token}` }, // if protected
    //       }
    //     );

    //     const brokerData1 = response.data.data;

    //     // setPicklists(backendData);
    //     // alert("data fetched successfully");
        
    //     setBrokerData(brokerData1);
    //     // setManagement(Object.keys(backendData));
    //     // setSelectedCategory(Object.keys(backendData)[0] || "");
    //   } catch (err) {
    //     console.error("Failed to load picklists:", err);
    //   }
    // };

  useEffect(() => {
    const fetchPicklists = async () => {
      try {
        const response = await axios.get(
          "https://bizplorers-backend.onrender.com/api/picklist/get_all",
          {
            headers: { Authorization: `Bearer ${token}` }, // if protected
          }
        );

        const backendData = response.data.data;

        setPicklists(backendData);
        setManagement(Object.keys(backendData));
        setSelectedCategory(Object.keys(backendData)[0] || "");
      } catch (err) {
        console.error("Failed to load picklists:", err);
      }
    };

    fetchPicklists();
    
    // setFetchData( fetchPicklists());
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[20.5rem] bg-white text-black z-40 transform transition-transform duration-300 ease-in-out overflow-hidden hover:overflow-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block flex flex-col`}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold hidden md:block">
            <MoreHorizIcon fontSize="large" />
          </div>
          <IconButton onClick={toggleSidebar} className="text-black">
            <MenuIcon />
          </IconButton>
        </div>

        <div className="flex items-center gap-3 p-3 border-2 border-slate-300 shadow-lg rounded-md w-[90%] mx-3 my-3">
          <img src={pic} alt="profile" className="rounded-full w-10" />
          <div className="flex flex-col">
            <h1 className="font-semibold">Hi! Admin</h1>
          </div>
        </div>

        {/* Excel Upload */}
        <div className="mx-3 my-3">
          <h1>Please Upload Excel Sheet to Continue</h1>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFile}
            className="border p-2 rounded w-full cursor-pointer"
          />
        </div>

        {/**Admin */}
        <div className="px-[5%]">
          <div className="flex justify-between">
            <div className="font-semibold text-slate-400 text-lg">Admin</div>
            <Button onClick={AdminMenuOpen} className="!text-slate-400">
              {isAdminMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
            </Button>
          </div>
          {isAdminMenuOpen && (
            <div className="mt-2 space-y-2 max-h-60 overflow-auto px-2">
              {/* { ['User','Role'].map((item,index)=>( */}
              {["User","Broker","Interest","Invite"].map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(item)}
                  className={`cursor-pointer p-2 rounded ${
                    selectedCategory === item
                      ? "bg-blue-200"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Management Menu */}
        <div className="flex-grow px-4 overflow-hidden">
          <div className="mt-4">
            <div className="flex justify-between">
              <div className="font-semibold text-slate-400 text-lg">
                Management
              </div>
              <Button onClick={MainMenuOpen} className="!text-slate-400">
                {isMainMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
              </Button>
            </div>

            {isMainMenuOpen &&
              (management.length > 0 ? (
                <div className="mt-2 space-y-2 max-h-60 overflow-auto">
                  {management.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedCategory(item)}
                      className={`cursor-pointer p-2 rounded ${
                        selectedCategory === item
                          ? "bg-blue-200"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : (
                <div>No labels found</div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

function MainContent({ picklists, setPicklists, selectedCategory }) {
  const [editingId, setEditingId] = React.useState(null);
  const [editName, setEditName] = React.useState("");
  const [userToDelete, setUserToDelete] = useState("");
  const inputRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [newValue, setNewValue] = useState("");
  const [ShowDeleteModal, setShowDeleteModal] = useState(false);
  const [brokerData,setBrokerData]=useState([]);
   const [invites, setInvites] = useState([]);
   const [interest,setInterest]=useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const token = localStorage.getItem("token");

   const fetchSellerBuyerUnderBroker = async () => {
      try {
        const response = await axios.get(
          "https://bizplorers-backend.onrender.com/api/users/brokers-with-buyers-and-sellers",
          {
            headers: { Authorization: `Bearer ${token}` }, // if protected
          }
        );

        const brokerData1 = response.data;
console.log("apibrokerData1----",brokerData1);
        // setPicklists(backendData);
        // alert("data fetched successfully");
        
        setBrokerData(brokerData1);
        // setManagement(Object.keys(backendData));
        // setSelectedCategory(Object.keys(backendData)[0] || "");
      } catch (err) {
        console.error("Failed to load picklists:", err);
      }
    };


     const fetchInterest = async () => {
      try {
        const response = await axios.get(
          "https://bizplorers-backend.onrender.com/api/interest/admin/interests"
          
        );

        const interestData= response.data;
console.log("apiinterestData1----",interestData);
        setInterest(interestData);
        // setManagement(Object.keys(backendData));
        // setSelectedCategory(Object.keys(backendData)[0] || "");
      } catch (err) {
        console.error("Failed to load picklists:", err);
      }
    };

     const fetchInvite = async () => {
      try {
        const response = await axios.get(
          "https://bizplorers-backend.onrender.com/api/invite/admin/invites"
          
        );

        const inviteData = response.data;
console.log("apiinviteData1----",inviteData);
        // setPicklists(backendData);
        // alert("data fetched successfully");
        
        setInvites(inviteData);
        // setManagement(Object.keys(backendData));
        // setSelectedCategory(Object.keys(backendData)[0] || "");
      } catch (err) {
        console.error("Failed to load picklists:", err);
      }
    };

  const handleDelete = async (category, id) => {
    try {
      const response = await axios.delete(
        `https://bizplorers-backend.onrender.com/api/picklist/delete/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // alert(response.data.message);
      notifySuccess();
      const updatedValue = response.data.data;
      setPicklists((prev) => ({
        ...prev,
        [category]: prev[category].filter((item) => item.id !== id),
      }));
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Deletion failed:", error);
      showError("Failed to delete value. Please try again.");
      // alert("Failed to delete value. Please try again.");
    }
  };

  const handleAdd = async (category, value) => {
    console.log("category---", category);
    console.log("value--", value);
    // const newItem = { id: Date.now(), name: "New Value", active: true };
    // setPicklists((prev) => ({
    //   ...prev,
    //   [category]: [...prev[category], newItem],
    // }));

    const dataToAdd = {
      category: category,
      value: value,
    };
    try {
      const response = await fetch(
        "https://bizplorers-backend.onrender.com/api/picklist/add_value",
        {
          method: "POST",
          body: JSON.stringify(dataToAdd),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // make sure token is defined
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Picklists added successfully:", result);
        notifyAdded();
        // await setFetchData;
        window.location.reload();

        // setPicklists((prev) => ({
        //       ...prev,
        //       [category]: [...prev[category], newItem],
        //     }));
      } else {
        console.error("Error adding picklists:", result.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const startEditing = (category, id, currentName) => {
    setEditingId(id);
    setEditName(currentName);
  };

  const handleToggle = async (category, id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.patch(
        `https://bizplorers-backend.onrender.com/api/picklist/toggle/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // alert(response.data.message);
      // const updatedValue = response.data;

      // setPicklists((prev) => ({
      //   ...prev,
      //   [category]: prev[category].map((item) =>
      //     item.id === id ? { ...item, name: updatedValue.value } : item
      //   ),
      // }));
      showSuccess(response.data.message);
      // alert(response.data.message);
      const updatedValue = response.data.data;

      setPicklists((prev) => ({
        ...prev,
        [category]: prev[category].map((item) =>
          item.id === id ? { ...item, active: updatedValue.is_active } : item
        ),
      }));
    } catch (error) {
      console.error("Status Update failed:", error);
      showError("Failed to update status. Please try again.");
      // alert("Failed to update status. Please try again.");
    }
  };

  const saveEdit = async (category, id) => {
    if (editName.trim() === "") {
      showInfo("Name cannot be empty");
      // alert("Name cannot be empty");
      return;
    }

    const token = localStorage.getItem("token");
    const data = {
      id: id,
      new_value: editName,
    };

    try {
      const response = await axios.put(
        "https://bizplorers-backend.onrender.com/api/picklist/update_value",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      showSuccess(response.data.message);
      // alert(response.data.message);
      const updatedValue = response.data.value;

      setPicklists((prev) => ({
        ...prev,
        [category]: prev[category].map((item) =>
          item.id === id ? { ...item, name: updatedValue.value } : item
        ),
      }));

      setEditingId(null);
    } catch (error) {
      console.error("Update failed:", error);
      showError("Failed to update value. Please try again.");
      // alert("Failed to update value. Please try again.");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  React.useEffect(() => {
    if (editingId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingId]);

  useEffect(()=>{
    fetchSellerBuyerUnderBroker();
    fetchInterest();
    fetchInvite();
  },[]);

  if (selectedCategory === "User" && !picklists[selectedCategory]) {
    return <AdminUserTable />;
  }

  //  if (selectedCategory === "Broker" && !picklists[selectedCategory]) {
  //   return <BrokerRegistrationsTable broker={brokerData}/>;
      
  // }
//   if (selectedCategory === "Broker" && !picklists[selectedCategory]) {
//   return (
//     <div className="p-4 space-y-6">
//       {brokerData.length > 0 ? (
//         brokerData.map((broker, idx) => (
//           <BrokerRegistrationsTable key={broker.id || idx} broker={broker} />
//         ))
//       ) : (
//         <p className="text-center text-gray-500">No broker data found.</p>
//       )}
//     </div>
//   );
// }

if (selectedCategory === "Broker" && !picklists[selectedCategory]) {
  return (
    <div className="p-6 mt-20 mx-20">
      {brokerData.length > 0 ? (
        brokerData.map((broker) => (
          <BrokerRegistrationsTable key={broker.id} broker={broker} />
        ))
      ) : (
        <p>No brokers found.</p>
      )}
    </div>
  );
}

if (selectedCategory === "Interest" && !picklists[selectedCategory]) {
  return (
    <div className="p-6 mt-20 mx-20">
   <InterestTable interests={interest}/>
    </div>
  );
}
if (selectedCategory === "Invite" && !picklists[selectedCategory]) {
  return (
    <div className="p-6 mt-20 mx-20">
     <InviteTable invites={invites}/>
    </div>
  );
}

  if (!selectedCategory || !picklists[selectedCategory]) {
    return (
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-lg text-gray-600">
          Please upload an Excel sheet and select a category.
        </h1>
      </main>
    );
  }

  return (
    <main className="flex-1 p-6 overflow-auto mt-[5%]">
      <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {picklists[selectedCategory]?.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">
                  {editingId === item.id ? (
                    <input
                      ref={inputRef}
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveEdit(selectedCategory, item.id);
                        } else if (e.key === "Escape") {
                          cancelEdit();
                        }
                      }}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td
                  className={`py-2 px-4 cursor-pointer font-semibold ${
                    item.active ? "text-green-600" : "text-red-600"
                  }`}
                  onClick={() => handleToggle(selectedCategory, item.id)}
                  title="Click to toggle status"
                >
                  {item.active ? "Active" : "Inactive"}
                </td>
                <td className="py-2 px-4 space-x-2">
                  {editingId === item.id ? (
                    <>
                      <button
                        onClick={() => saveEdit(selectedCategory, item.id)}
                        className="text-green-600 hover:underline"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="text-gray-600 hover:underline"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            startEditing(selectedCategory, item.id, item.name)
                          }
                          className="text-blue-600 hover:underline"
                        >
                          <EditIcon />
                        </button>
                        <button
                          // onClick={() => handleDelete(selectedCategory, item.id)}
                          onClick={() => setShowDeleteModal(true)}
                          className="text-red-600 hover:underline "
                        >
                          <DeleteIcon />
                        </button>
                        <Dialog
                          open={ShowDeleteModal}
                          slots={{
                            transition: Transition,
                          }}
                          keepMounted
                          onClose={() => setShowDeleteModal(false)}
                          aria-describedby="alert-dialog-slide-description"
                          PaperProps={{
                            elevation: 0, //
                            style: {
                              width: "400px",
                              padding: "20px",
                              borderRadius: "12px",
                              border: "2px solid grey", // full border property
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // light grey shadow
                            },
                          }}
                          BackdropProps={{
                            sx: {
                              backgroundColor: "transparent",
                            },
                          }}
                        >
                          <DialogTitle>
                            Are you sure you want to delete this user?
                          </DialogTitle>

                          <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                              This action cannot be undone.
                            </DialogContentText>
                          </DialogContent>

                          <DialogActions
                            style={{
                              justifyContent: "space-between",
                              padding: "16px",
                            }}
                          >
                            <Button
                              onClick={() =>
                                handleDelete(selectedCategory, item.id)
                              }
                              color="error"
                              variant="contained"
                            >
                              Yes, Delete
                            </Button>
                            <Button
                              onClick={() => setShowDeleteModal(false)}
                              variant="outlined"
                            >
                              Cancel
                            </Button>
                          </DialogActions>

                          {/* <DialogActions className="absolute top-0 right-2">
                          <Button onClick={handleDialogClose}>
                            <X size={24} color="black" />
                          </Button>
                        </DialogActions> */}
                        </Dialog>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        // onClick={() => handleAdd(selectedCategory)}
        onClick={handleClickOpen}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add New Value
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const value = formJson.value;
              console.log(value);
              // setNewValue(value);
              handleAdd(selectedCategory, value);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Add Value</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="value"
            label="Add new Value"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button type="submit" color="success" variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}

const notifySuccess = (msg = "Item deleted successfully!") => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

const notifyAdded = (msg = "Item Added successfully!") => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
export default function AdminWithSidebar() {
  const [picklists, setPicklists] = useState({});
  const [management, setManagement] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

   const notifySuccess = (msg = "Logged out successfully!") => {
      toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    };
  
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
    

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    notifyLogOut();
    navigate("/");
  };
  // const handleSignup = () => {
  //   navigate('/signUp');
  // };

  return (
    <>
      {/* <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
   
        <Link to="/">
          <img
            alt="logo"
            width={50}
            className="object-contain cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex gap-2">
         
          <button
            className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      </header> */}
      <Header/>

      <div className="flex h-screen w-full">
        
        <Sidebar
          picklists={picklists}
          setPicklists={setPicklists}
          management={management}
          setManagement={setManagement}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="overflow-auto w-full px-[5%] ">
        <MainContent
          picklists={picklists}
          setPicklists={setPicklists}
          selectedCategory={selectedCategory}
          // setFetchData={setFetchData}
          // fetchPicklists={fetchPicklists}
          // setShowDeleteModal={setShowDeleteModal}
        />
        </div>
      </div>
      <div className="pt-[5%]">
         <Footer />
      </div>
     
    </>
  );
}
