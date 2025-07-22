import React, { useEffect, useState, useMemo } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { Button, DialogTitle } from "@mui/material";
import { Typography } from "@mui/material";
import CollapsibleSection from "./CollapsibleSection";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdminUserTable = () => {
  const [userData, setUserData] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", role: "", isActive: true });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const [comments, setComments] = useState(""); // {userId: "comment text"}
  const [comments, setComments] = useState({}); 
   const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openSection, setOpenSection] = useState("personal");

  // Pagination setup
  const usersPerPage = 5;

  // Check if user is admin - you may fetch this from your auth or user context
  // For demo, let's assume the token contains role info or you have a way to determine:
  const isAdmin = true; // Set accordingly in your real app

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(
        "https://bizplorers-backend.onrender.com/api/users/getAllUsers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();
console.log("userResults---",result);
      if (response.ok) {
        const resultData=result.data;
        const sortedByRegisteredOnDesc = resultData.sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);
        setUserData(sortedByRegisteredOnDesc);
      } else {
        console.error("Error fetching users:", result.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  function formatDate(isoDateStr) {
    const date = new Date(isoDateStr);
    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
  return date.toLocaleString("en-GB", options).replace(",", "").replace(" at ", " ");
  }

  const notifySuccess = (msg = "User deleted successfully!") => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  // Pagination & Search filtered users
  const filteredUsers = useMemo(() => {
    return userData.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toString().includes(searchTerm)
    );
  }, [searchTerm, userData]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  // Handlers for editing, deleting, and pagination below...

  // const handleEditClick = (user) => {
  //   setEditingUserId(user.id);
  //   setEditForm({
  //     name: user.name,
  //     role: user.role,
  //     isActive: user.isActive,
    
  //   });
  // };
  const handleEditClick = (user) => {
  setEditingUserId(user.id);
  setEditForm({
    name: user.name,
    role: user.role,
    isActive: user.isActive,
    comment: user.comment || "", // add this line
  });
};

  const handleCancel = () => {
    setEditingUserId(null);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    const updatedForm = {
      ...editForm,
      comment: comments[editingUserId] ?? editForm.comment ?? ""
    };

    try {
      console.log("editForm----",updatedForm);
      const response = await fetch(
        `https://bizplorers-backend.onrender.com/api/users/${editingUserId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedForm),
        }
      );

      const result = await response.json();
      console.log("result------",result);


      // if (response.ok) {
      //   setUserData((prevData) =>
      //     prevData.map((user) =>
      //       user.id === editingUserId ? { ...user, ...editForm } : user
      //     )
      //   );
      //   await fetchAllUsers();
      if (response.ok) {
  await fetchAllUsers(); // this sets userData internally
  notifySuccess("User updated successfully!");

      } else {
        console.error("Error updating user:", result.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
      setEditingUserId(null);
    }
  };

   const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setOpen(false);
  };

  const handleDeleteClick = (id) => {
    setShowDeleteModal(true);
    setUserToDelete(id);
  };

  const handleDelete = async () => {
    console.log("userTODelete-----",userToDelete);
    try {
      const response = await fetch(
        `https://bizplorers-backend.onrender.com/api/users/${userToDelete}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        setUserData((prevData) =>
          prevData.filter((user) => user.id !== userToDelete)
        );
        notifySuccess();
      } else {
        console.error("Error deleting user:", result.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
      setShowDeleteModal(false);
      setUserToDelete(null);
    }
  };

  // Comment handler - admin only
  // const handleCommentChange = (userId, text) => {
  //   setComments((prev) => ({ ...prev, [userId]: text }));
  // };

//   const handleCommentChange = (userId, text) => {
//   setComments((prev) => ({ ...prev, [userId]: text }));
// };
const handleCommentChange = (userId, text) => {
  setComments((prev) => ({ ...prev, [userId]: text }));
  setEditForm((prev) => ({ ...prev, comment: text }));
};


  // Pagination controls
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full mt-[10%]">
      <div className="flex justify-between items-center ">
        {/* <h2 className="text-xl font-semibold">Admin User</h2> */}
        {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add User
        </button> */}
      </div>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search by ID, Name or Role"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset page on search
        }}
        className="mb-4 p-2 border rounded w-full max-w-xs"
      />

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border w-1/12">ID</th>
            <th className="p-2 border w-2/12">Name</th>
            <th className="p-2 border w-1/12">Role</th>
            <th className="p-2 border w-[20%]">Registered On</th>
            <th className="p-2 border w-2/12">Status</th>
            {/* Add Comments header only if admin */}
            <th className="p-2 border w-2/12">Comment </th>
              <th className="p-2 border w-2/12">Details</th>
            <th className="p-2 border w-2/12">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="p-2 border">{user.id}</td>

              {editingUserId === user.id ? (
                <>
                  <td className="p-2 border">
                    <input
                      type="text"
                      name="name"
                      value={editForm.name}
                      onChange={handleInputChange}
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="p-2 border">
                    <input
                      type="text"
                      name="role"
                      value={editForm.role}
                      onChange={handleInputChange}
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="p-2 border">
                    {user.createdAt ? formatDate(user.createdAt) : "N/A"}
                  </td>
             <td className="p-2 border flex justify-center">
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      name="isActive"
      checked={editForm.isActive}
      onChange={handleInputChange}
    />
    <span
      className={`font-semibold ${
        editForm.isActive ? "text-green-600" : "text-red-600"
      }`}
    >
      {editForm.isActive ? "Active" : "Inactive"}
    </span>
  </label>
</td>

                  {/* <td className="p-2 border flex justify-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="isActive"
                        checked={editForm.isActive}
                        onChange={handleInputChange}
                      />
                      Active
                    </label>
                  </td>
                  
                   */}
                  {/* <td className="p-2 border">
 {user.comment?  <p className="text-gray-700">{user.comment}</p>: (<input
                        type="text"
                        placeholder="Add comment"
                        value={comments || ""}
                        onChange={(e) => setComments(e.target.value)}
                        className="border p-1 rounded w-full"
                      />)}
</td> */}
<td className="p-2 border">
  {user.comment?  <p className="text-gray-700">{user.comment}</p>: (
  <input
    type="text"
    placeholder="Add comment"
    value={comments[editingUserId] ?? editForm.comment ?? ""}
    onChange={(e) => handleCommentChange(editingUserId, e.target.value)}
    className="border p-1 rounded w-full"
  />)}
</td>

                    
                  }
                  {/* <td className="p-2 border space-x-2">
                    <button
                      onClick={handleSave}
                      className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                  </td> */}
                  <td className="p-2 border w-2/12">
  <div className="flex flex-wrap justify-center items-center gap-2">
    <button className="bg-green-600 text-white px-2 py-1 rounded text-sm" onClick={handleSave}>Save</button>
    <button className="bg-gray-600 text-white px-2 py-1 rounded text-sm" onClick={handleCancel}>Cancel</button>
  </div>
</td>

                </>
              ) : (
                <>
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.role}</td>
                  <td className="p-2 border">{user.createdAt ? formatDate(user.createdAt) : "N/A"}</td>
                  <td className={`p-2 border`}>{user.isActive ?<div className="!text-green-500 font-semibold">{"Active" }</div> : <div className="!text-red-500 font-semibold">{"Inactive"}</div>}</td>
                  
                    <td className="p-2 border">
                      {/* <input
                        type="text"
                        placeholder="Add comment"
                        value={comments[user.id] || ""}
                        onChange={(e) => handleCommentChange(user.id, e.target.value)}
                        className="border p-1 rounded w-full"
                      /> */}
                      {user.comment?  <p className="text-gray-700">{user.comment}</p>: "No Comments Added "}
                    </td>

                    <td className="">
                      <Button
                      variant="contained"
                      className="w-[140px]"
                       onClick={() => handleOpen(user)}
                      >
                        View Details
                      </Button>

                    </td>
                  
                  <td className="p-2 border flex gap-2">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
                      title="Edit"
                    >
                      <EditIcon />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(user.id)}
                      className="bg-red-600 text-white p-1 rounded hover:bg-red-700"
                      title="Delete"
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
          {paginatedUsers.length === 0 && (
            <tr>
              <td colSpan={isAdmin ? 7 : 6} className="text-center p-4">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle className="!font-bold text-xl ">User Details</DialogTitle>
        <DialogContent>
       {selectedUser && (
  <>
    {/* <Typography>Name: {selectedUser.name}</Typography> */}
    <div className="flex justify-between w-full mb-3">
      <Typography><span className="font-bold">Name:</span> {selectedUser.name}</Typography>
       <Typography><span className="font-bold">Email: </span>{selectedUser.email}</Typography>
       <Typography><span className="font-bold">Role:</span> {selectedUser.role}</Typography>
    </div>
   
    {/* <Typography>Role: {selectedUser.role}</Typography> */}

    {selectedUser.Seller && (
      <>
       
       
            {/* <Typography variant="h6" className="!font-bold">Seller Details</Typography>
            <Typography><div className="!font-semibold">Company Name:<span className="!font-normal">{selectedUser.Seller.company_name}</span> </div></Typography>
            <Typography><div className="!font-semibold">Website: <a href={selectedUser.Seller.website_url} target="_blank" rel="noopener noreferrer"><span className="!font-medium">{selectedUser.Seller.website_url}</span></a></div></Typography>
            <Typography>CIN: {selectedUser.Seller.CIN}</Typography>
            <Typography>LinkedIn: <a href={selectedUser.Seller.company_linkedin} target="_blank" rel="noopener noreferrer">{selectedUser.Seller.company_linkedin}</a></Typography>
            <Typography>Description: {selectedUser.Seller.description_business}</Typography>
            <Typography>Business Category: {selectedUser.Seller.businessCategory}</Typography>
            <Typography>Entity Structure: {selectedUser.Seller.entityStructure}</Typography>
            <Typography>Country: {selectedUser.Seller.country}</Typography>
            <Typography>State: {selectedUser.Seller.state}</Typography>
            <Typography>City: {selectedUser.Seller.city}</Typography>
            <Typography>Founded: {selectedUser.Seller.month}/{selectedUser.Seller.year}</Typography>
            <Typography>Co-founders: {selectedUser.Seller.numcofounder}</Typography>
            <Typography>Team Size: {selectedUser.Seller.teamSize}</Typography>
            <Typography>Locations: {selectedUser.Seller.numLocation}</Typography>
            <Typography>Co-founder Links:</Typography>
            {selectedUser.Seller.cofounderLinks.map((link, index) => (
              <Typography key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
              </Typography>
            ))}
            <Typography>Last Financial Year Revenue: ₹{selectedUser.Seller.lastFinancialYear}</Typography>
            <Typography>Trailing 12 Months Revenue: ₹{selectedUser.Seller.trailing12months}</Typography>
            <Typography>Previous Month Revenue: ₹{selectedUser.Seller.prevMonth}</Typography>
            <Typography>Last FY NET: ₹{selectedUser.Seller.NETlastFinancialYear}</Typography>
            <Typography>Trailing 12M NET: ₹{selectedUser.Seller.NETtrailing12months}</Typography>
            <Typography>Previous Month NET: ₹{selectedUser.Seller.NETprevMonth}</Typography>
            <Typography>Asset Description: {selectedUser.Seller.assestDesc}</Typography>
            <Typography>Equity: {selectedUser.Seller.equity}%</Typography>
            <Typography>Debt: {selectedUser.Seller.debt}%</Typography>
            <Typography>Positive Cash Flow: {selectedUser.Seller.positiveCashFlow ? "Yes" : "No"}</Typography>
            <Typography>Reason for Sale: {selectedUser.Seller.salereason}</Typography>
            <Typography>Asking Price: ₹{selectedUser.Seller.askingPrice}</Typography>
            <Typography>Preferred Arrangement: {selectedUser.Seller.preferredArrangement.join(", ")}</Typography>
            <Typography>Status: {selectedUser.Seller.status}</Typography>
          */}
     <h3 className="text-xl font-bold my-4 ">Detailed Info</h3>

      {/* PERSONAL SECTION */}
      <CollapsibleSection
        title="Company Details"
        isOpen={openSection === "company"}
        onToggle={() => setOpenSection(openSection === "company" ? "" : "company")}
      >
         <div className="mb-4">
          <label className="text-xs text-gray-500">Business Headline</label>
          <div className="text-sm">{selectedUser.Seller.headline}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Business Description</label>
          <div className="text-sm">{selectedUser.Seller.description_business}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Business Category</label>
          <div className="text-sm">{selectedUser.Seller.businessCategory}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Entity Structure</label>
          <div className="text-sm">{selectedUser.Seller.entityStructure}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Website</label>
          <div className="text-sm">{selectedUser.Seller.website_url}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">CIN</label>
          <div className="text-sm">{selectedUser.Seller.CIN}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Company Linkedin</label>
          <div className="text-sm">{selectedUser.Seller.company_linkedin || "N/A"}</div>
        </div>
        <div className="mb-4">
          <label className="text-xs text-gray-500">No. of Cofounder</label>
          <div className="text-sm">{selectedUser.Seller.numcofounder}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Team Size</label>
          <div className="text-sm">{selectedUser.Seller.teamSize}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">No. of Location</label>
          <div className="text-sm">{selectedUser.Seller.numLocation}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Founded Year</label>
          <div className="text-sm">{selectedUser.Seller.year}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">Founded Month</label>
          <div className="text-sm">{selectedUser.Seller.month}</div>
        </div>
        
         <div className="mb-4">
          <label className="text-xs text-gray-500">No. of Cofounder</label>
          <div className="text-sm">{selectedUser.Seller.numcofounder}</div>
        </div>
         <div className="mb-4">
          <label className="text-xs text-gray-500">No. of Cofounder</label>
          <div className="text-sm">{selectedUser.Seller.numcofounder}</div>
        </div>
      </CollapsibleSection>

      {/* PREFERENCES SECTION */}
      <CollapsibleSection
        title="Financial Performance"
        isOpen={openSection === "financial"}
        onToggle={() => setOpenSection(openSection === "financial" ? "" : "financial")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Last Financial Year Revenue</label>
          <div className="text-sm">{selectedUser.Seller.lastFinancialYear}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Trailing 12 Months Revenue</label>
          <div className="text-sm">{selectedUser.Seller.trailing12months}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Previous Month Revenue</label>
          <div className="text-sm">{selectedUser.Seller.prevMonth}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">NET Last Financial Year </label>
          <div className="text-sm">
            {selectedUser.Seller.NETlastFinancialYear}
          </div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">NET Trailing 12 Months</label>
          <div className="text-sm">
            {selectedUser.Seller.NETtrailing12months}
          </div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">NET Prev Month</label>
          <div className="text-sm">{selectedUser.Seller.NETprevMonth}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Positive Cash Flow</label>
          <div className="text-sm">{selectedUser.Seller.positiveCashFlow?"Yes":"No"}</div>
        </div>
        
      </CollapsibleSection>

{/**Assest Section */}
         <CollapsibleSection
        title="Assest & Liabilites"
        isOpen={openSection === "assest"}
        onToggle={() => setOpenSection(openSection === "assest" ? "" : "assest")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Assets Description</label>
          <div className="text-sm">{selectedUser.Seller.assestDesc}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Equity</label>
          <div className="text-sm">{selectedUser.Seller.equity}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Debt</label>
          <div className="text-sm">{selectedUser.Seller.debt}</div>
        </div>
       
     
        {/**Exit Plan */}
      </CollapsibleSection>
         <CollapsibleSection
        title="Exit Plan"
        isOpen={openSection === "exit"}
        onToggle={() => setOpenSection(openSection === "exit" ? "" : "exit")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Reason for Sale</label>
          <div className="text-sm">{selectedUser.Seller.salereason}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Asking Price</label>
          <div className="text-sm">{selectedUser.Seller.askingPrice}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Preferred Arrangement</label>
          <div className="text-sm"> {(selectedUser.Seller.preferredArrangement || []).join(", ") || "N/A"}</div>
        </div>
      
        
      </CollapsibleSection>

      {/* LOCATION SECTION */}
      <CollapsibleSection
        title="Location"
        isOpen={openSection === "location"}
        onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Country</label>
          <div className="text-sm">{selectedUser.Seller.country}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">State</label>
          <div className="text-sm">{selectedUser.Seller.state}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Cities</label>
          <div className="text-sm">
            {selectedUser.Seller.city|| "N/A"}
          </div>
        </div>
      </CollapsibleSection>

      </>
    )}

    {selectedUser.Buyer && (
      <>
        {/* <Typography variant="h6 " className="!font-bold !text-xl">Buyer Details</Typography>
        
       
    <Typography>Type of Buyer: {selectedUser.Buyer.typeOfBuyer}</Typography>
    <Typography>Designation: {selectedUser.Buyer.designation}</Typography>
    <Typography>Description: {selectedUser.Buyer.description}</Typography>

    <Typography>
      LinkedIn:{' '}
      {selectedUser.Buyer.linkedinProfile ? (
        <a href={selectedUser.Buyer.linkedinProfile} target="_blank" rel="noopener noreferrer">
          {selectedUser.Buyer.linkedinProfile}
        </a>
      ) : (
        'N/A'
      )}
    </Typography>

    <Typography>Business Categories: {selectedUser.Buyer.businessCategories?.join(', ')}</Typography>
    <Typography>
      Ticket Size Range: ₹{selectedUser.Buyer.ticketSizeMin} - ₹{selectedUser.Buyer.ticketSizeMax}
    </Typography>
    <Typography>Business Location Country: {selectedUser.Buyer.businesslocationCountry}</Typography>
    <Typography>
      Cities: {selectedUser.Buyer.businesslocationCities?.join(', ')}
    </Typography>

    <Typography>Open to Pre-Revenue: {selectedUser.Buyer.openToPreRevenue ? 'Yes' : 'No'}</Typography>
    <Typography>Open to Pre-Breakeven: {selectedUser.Buyer.openToPreBreakeven ? 'Yes' : 'No'}</Typography>
    <Typography>Metric: {selectedUser.Buyer.metric}</Typography>
    <Typography>Max Multiple: {selectedUser.Buyer.maxMultiple}</Typography>
    <Typography>Preferred Arrangements: {selectedUser.Buyer.preferredArrangement?.join(', ')}</Typography>
    <Typography>Status: {selectedUser.Buyer.status}</Typography> */}

        <h3 className="text-xl font-bold my-4">Detailed Info</h3>

      {/* PERSONAL SECTION */}
      <CollapsibleSection
        title="Personal Details"
        isOpen={openSection === "personal"}
        onToggle={() => setOpenSection(openSection === "personal" ? "" : "personal")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Type Of Buyer</label>
          <div className="text-sm">{selectedUser.Buyer.typeOfBuyer}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Designation</label>
          <div className="text-sm">{selectedUser.Buyer.designation}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">LinkedIn</label>
          <div className="text-sm">{selectedUser.Buyer.linkedinProfile || "N/A"}</div>
        </div>
        <div className="mb-4">
          <label className="text-xs text-gray-500">Description</label>
          <div className="text-sm">{selectedUser.Buyer.description}</div>
        </div>
      </CollapsibleSection>

      {/* PREFERENCES SECTION */}
      <CollapsibleSection
        title="Preferences"
        isOpen={openSection === "preferences"}
        onToggle={() => setOpenSection(openSection === "preferences" ? "" : "preferences")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Ticket Size</label>
          <div className="text-sm">{selectedUser.Buyer.ticketSizeMin} - {selectedUser.Buyer.ticketSizeMax}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Open To Pre-Revenue</label>
          <div className="text-sm">{selectedUser.Buyer.openToPreRevenue ? "Yes" : "No"}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Open To Pre-Breakeven</label>
          <div className="text-sm">{selectedUser.Buyer.openToPreBreakeven ? "Yes" : "No"}</div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Preferred Arrangement</label>
          <div className="text-sm">
            {(selectedUser.Buyer.preferredArrangement || []).join(", ") || "N/A"}
          </div>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-500">Interested Business Categories</label>
          <div className="text-sm">
            {(selectedUser.Buyer.businessCategories || []).join(", ") || "N/A"}
          </div>
        </div>
      </CollapsibleSection>

      {/* LOCATION SECTION */}
      <CollapsibleSection
        title="Location"
        isOpen={openSection === "location"}
        onToggle={() => setOpenSection(openSection === "location" ? "" : "location")}
      >
        <div className="mb-2">
          <label className="text-xs text-gray-500">Country</label>
          <div className="text-sm">{selectedUser.Buyer.businesslocationCountry}</div>
        </div>
        {/* <div className="mb-2">
          <label className="text-xs text-gray-500">State</label>
          <div className="text-sm">{buyer.businesslocationState}</div>
        </div> */}
        <div className="mb-2">
          <label className="text-xs text-gray-500">Cities</label>
          <div className="text-sm">
            {(selectedUser.Buyer.businesslocationCities || []).join(", ") || "N/A"}
          </div>
        </div>
      </CollapsibleSection>
      </>
    )}

    {selectedUser.Broker && (
      <>
        <Typography variant="h6" className="!text-xl !font-bold">Broker Details</Typography>
       <Typography className="pt-1"><span className="font-bold">Address:</span> {selectedUser.Broker.address}</Typography>
    <Typography className="pt-1"><span className="font-bold">City:</span> {selectedUser.Broker.city}</Typography>
    <Typography className="pt-1"><span className="font-bold">State:</span> {selectedUser.Broker.state}</Typography>
    <Typography className="pt-1"><span className="font-bold">Country:</span> {selectedUser.Broker.country}</Typography>
    <Typography className="pt-1"><span className="font-bold">Zip Code: </span>{selectedUser.Broker.zipcode}</Typography>
    <Typography className="pt-1"><span className="font-bold">Status:</span> {selectedUser.Broker.status}</Typography>
      </>
    )}
  </>
)}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">Close</Button>
        </DialogActions>
      </Dialog>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, idx) => {
          const pageNum = idx + 1;
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-3 py-1 border rounded ${
                currentPage === pageNum ? "bg-blue-600 text-white" : ""
              }`}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Delete Confirmation Dialog */}
      {/* <Dialog
        open={showDeleteModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowDeleteModal(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete User?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this user? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteModal(false)} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog> */}
             <Dialog
  open={showDeleteModal}
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
  border: "2px solid grey",  // full border property
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // light grey shadow
},
  }}
  BackdropProps={{
    sx: {
      backgroundColor: "transparent",
    },
  }}
>
  <DialogTitle>Are you sure you want to delete this user?</DialogTitle>

  <DialogContent>
    <DialogContentText id="alert-dialog-slide-description">
      This action cannot be undone.
    </DialogContentText>
  </DialogContent>

  <DialogActions style={{ justifyContent: "space-between", padding: "16px" }}>
    <Button onClick={handleDelete} color="error" variant="contained">
      Yes, Delete
    </Button>
    <Button onClick={() => setShowDeleteModal(false)} variant="outlined">
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
  );
};

export default AdminUserTable;
