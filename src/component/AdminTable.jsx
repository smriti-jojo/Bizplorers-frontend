import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const users = [
  {
    id: 1,
    username: "Admin Bizplorers",
    name: "Admin",
    role: "Admin",
    // registeredOn: "21 Apr, 2024 12:57 PM",
    status: "Active",
  },
  {
    id: 2,
    username: "test2",
    name: "test1",
    role: "Buyer",
    // registeredOn: "24 Aug, 2022 05:42 AM",
    status: "Active",
  },
  {
    id: 3,
    username: "smriti",
    name: "smriti",
    role: "Seller",
    // registeredOn: "14 Aug, 2022 01:51 AM",
    status: "Active",
  },
  // {
  //   id: 3,
  //   username: "admin_3",
  //   name: "Bishu",
  //   role: "Editor",
  //   registeredOn: "24 Jul, 2019 11:14 AM",
  //   status: "Active",
  // },
  {
    id: 4,
    username: "Amit",
    name: "Amit",
    role: "Seller",
    // registeredOn: "19 Jul, 2019 02:01 PM",
    status: "Active",
  },
 
];

const AdminUserTable=() =>{
  return (
    <div className="p-6 bg-white shadow-lg rounded- w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Admin User</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add User
        </button>
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Username</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Role</th>
            {/* <th className="p-2 border">Registered On</th> */}
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">{user.username}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.role}</td>
              {/* <td className="p-2 border">{user.registeredOn}</td> */}
              <td className="p-2 border">
                <span className="px-2 py-1 text-sm bg-green-100 text-green-700 rounded">
                  {user.status}
                </span>
              </td>
              <td className="p-2 border">
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <EditIcon fontSize="small" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <DeleteIcon fontSize="small" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AdminUserTable;



// import React from "react";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// export default function UserTable({ items, category, onEdit, onDelete, onToggle, onAdd }) {
//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">{category} Users</h2>
//         <button
//           onClick={() => onAdd(category)}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           + Add User
//         </button>
//       </div>

//       <table className="w-full table-auto border-collapse">
//         <thead>
//           <tr className="bg-gray-100 text-left">
//             <th className="p-2 border">ID</th>
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Status</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id} className="hover:bg-gray-50">
//               <td className="p-2 border">{item.id}</td>
//               <td className="p-2 border">{item.name}</td>
//               <td className="p-2 border">
//                 <span
//                   className={`px-2 py-1 text-sm rounded ${
//                     item.active
//                       ? "bg-green-100 text-green-700"
//                       : "bg-gray-200 text-gray-600"
//                   }`}
//                 >
//                   {item.active ? "Active" : "Inactive"}
//                 </span>
//               </td>
//               <td className="p-2 border">
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => onEdit(category, item.id)}
//                     className="text-blue-600 hover:text-blue-800"
//                   >
//                     <EditIcon fontSize="small" />
//                   </button>
//                   <button
//                     onClick={() => onDelete(category, item.id)}
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     <DeleteIcon fontSize="small" />
//                   </button>
//                   <button
//                     onClick={() => onToggle(category, item.id)}
//                     className="text-green-600 hover:text-green-800"
//                   >
//                     {item.active ? "Deactivate" : "Activate"}
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
