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
        setUserData(result.data);
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
    <div className="p-6 bg-white shadow-lg rounded-lg w-full">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-semibold">Admin User</h2>
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
        <DialogTitle className="!font-bold">User Details</DialogTitle>
        <DialogContent>
       {selectedUser && (
  <>
    {/* <Typography>Name: {selectedUser.name}</Typography> */}
    <div className="flex justify-between w-full mb-3">
      <Typography>Name: {selectedUser.name}</Typography>
       <Typography>Email: {selectedUser.email}</Typography>
       <Typography>Role: {selectedUser.role}</Typography>
    </div>
   
    {/* <Typography>Role: {selectedUser.role}</Typography> */}

    {selectedUser.Seller && (
      <>
        {/* <Typography variant="h6" className="text-md font-bold">Seller Details</Typography> */}
        {/* Add relevant seller fields */}
        {/* <Typography>Company: {selectedUser.Seller.companyName}</Typography>
        <Typography>Location: {selectedUser.Seller.city}, {selectedUser.Seller.state}</Typography> */}
       
            <Typography variant="h6" className="!font-bold">Seller Details</Typography>
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
         
  

      </>
    )}

    {selectedUser.Buyer && (
      <>
        <Typography variant="h6 " className="!font-bold !text-xl">Buyer Details</Typography>
        {/* Add relevant buyer fields */}
       
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
    <Typography>Status: {selectedUser.Buyer.status}</Typography>
      </>
    )}

    {selectedUser.Broker && (
      <>
        <Typography variant="h6" className="!font-bold">Broker Details</Typography>
       <Typography>Address: {selectedUser.Broker.address}</Typography>
    <Typography>City: {selectedUser.Broker.city}</Typography>
    <Typography>State: {selectedUser.Broker.state}</Typography>
    <Typography>Country: {selectedUser.Broker.country}</Typography>
    <Typography>Zip Code: {selectedUser.Broker.zipcode}</Typography>
    <Typography>Status: {selectedUser.Broker.status}</Typography>
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
