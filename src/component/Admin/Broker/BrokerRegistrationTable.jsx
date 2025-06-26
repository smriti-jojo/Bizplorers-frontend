import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Divider,
} from "@mui/material";

const BrokerRegistrationsTable = ({ broker }) => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: "24px",
        borderRadius: "16px",
        marginBottom: "40px",
   
        backgroundColor: "#fafafa",
      }}
    >
      {/* Broker Header */}
      <div style={{ marginBottom: "16px" }}>
        <Typography variant="h6" color="primary">
          Broker: {broker?.name || "N/A"} ({broker?.email || "N/A"})
        </Typography>
      </div>

      {/* Sellers Table */}
      <Typography variant="subtitle1" style={{ marginTop: 16, marginBottom: 8 }}>
        Registered Sellers
      </Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f0f0f0" }}>
              <TableCell><b>Seller Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Company</b></TableCell>
              <TableCell><b>City</b></TableCell>
              <TableCell><b>State</b></TableCell>
              <TableCell><b>Status</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {broker.sellers?.length > 0 ? (
              broker.sellers.map((seller) => (
                <TableRow key={seller.id}>
                  <TableCell>{seller.User?.name || "-"}</TableCell>
                  <TableCell>{seller.User?.email || "-"}</TableCell>
                  <TableCell>{seller.company_name}</TableCell>
                  <TableCell>{seller.city}</TableCell>
                  <TableCell>{seller.state}</TableCell>
                  <TableCell>{seller.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No sellers registered.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Buyers Table */}
      <Typography variant="subtitle1" style={{ marginTop: 32, marginBottom: 8 }}>
        Registered Buyers
      </Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f0f0f0" }}>
              <TableCell><b>Buyer Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Designation</b></TableCell>
              <TableCell><b>Min Ticket Size</b></TableCell>
              <TableCell><b>Max Ticket Size</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {broker.buyers?.length > 0 ? (
              broker.buyers.map((buyer) => (
                <TableRow key={buyer.id}>
                  <TableCell>{buyer.User?.name || "-"}</TableCell>
                  <TableCell>{buyer.User?.email || "-"}</TableCell>
                  <TableCell>{buyer.designation}</TableCell>
                  <TableCell>{buyer.ticketSizeMin}</TableCell>
                  <TableCell>{buyer.ticketSizeMax}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No buyers registered.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BrokerRegistrationsTable;
