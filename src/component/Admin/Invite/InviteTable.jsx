// import React from "react";

// const InviteTable = ({ invites }) => {
//   console.log("invitesss-----",invites);
//   return (
//     <div className="overflow-x-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">Invite History</h2>
//       <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
//         <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
//           <tr>
//             <th className="text-left px-6 py-3">Sender Name</th>
//             <th className="text-left px-6 py-3">Sender Email</th>
//             <th className="text-left px-6 py-3">Receiver Name</th>
//             <th className="text-left px-6 py-3">Receiver Email</th>
//             <th className="text-left px-6 py-3">Sent At</th>
//           </tr>
//         </thead>
//         <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
//           {invites?.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
//                 No invites sent yet.
//               </td>
//             </tr>
//           ) : (
//             invites.map((invite, idx) => (
//               <tr key={idx} className="hover:bg-gray-50">
//                 <td className="px-6 py-3">{invite.sender?.name || "—"}</td>
//                 <td className="px-6 py-3">{invite.sender?.email || "—"}</td>
//                 <td className="px-6 py-3">{invite.receiver?.name || "—"}</td>
//                 <td className="px-6 py-3">{invite.receiver?.email || "—"}</td>
//                 <td className="px-6 py-3">
//                   {new Date(invite.createdAt).toLocaleString()}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InviteTable;

import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";

const InviteTable = ({ invites = [] }) => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: "24px",
        borderRadius: "16px",
        marginBottom: "40px",
        backgroundColor: "#fafafa",
         width:"1000px"
      }}
    >
      <Typography variant="h6" color="primary" gutterBottom>
        Invites Sent
      </Typography>

      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f0f0f0" }}>
              <TableCell><b>Sender Name</b></TableCell>
              <TableCell><b>Sender Email</b></TableCell>
              <TableCell><b>Receiver Name</b></TableCell>
              <TableCell><b>Receiver Email</b></TableCell>
              <TableCell><b>Sent At</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invites.length > 0 ? (
              invites.map((invite) => (
                <TableRow key={invite.id}>
                  <TableCell>{invite.sender?.name || "-"}</TableCell>
                  <TableCell>{invite.sender?.email || "-"}</TableCell>
                  <TableCell>{invite.receiver?.name || "-"}</TableCell>
                  <TableCell>{invite.receiver?.email || "-"}</TableCell>
                  <TableCell>{new Date(invite.createdAt).toLocaleString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No invites found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default InviteTable;
