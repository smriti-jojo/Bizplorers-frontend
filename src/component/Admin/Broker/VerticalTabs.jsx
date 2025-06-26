import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab, Box, Typography, CircularProgress } from "@mui/material";

const BrokersVerticalTabs = () => {
  const [brokers, setBrokers] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [clients, setClients] = useState({});
  const [loading, setLoading] = useState(false);
  const [brokersLoading, setBrokersLoading] = useState(true);

  const baseURL = "https://bizplorers-backend.onrender.com/api";

  // Fetch brokers on mount
  useEffect(() => {
    const fetchBrokers = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/users/role-based-users?role=broker`
        );
        console.log("Broker data fetched:", res.data);
        setBrokers(res.data);
      } catch (error) {
        console.error("Error fetching brokers:", error);
      } finally {
        setBrokersLoading(false);
      }
    };

    fetchBrokers();
  }, []);

  // Load sellers & buyers on tab change
  const handleTabChange = async (event, newValue) => {
    console.log("Tab changed to index:", newValue);
    setActiveTab(newValue);
    const brokerId = brokers[newValue]?.id?.toString();
    console.log("Resolved brokerId:", brokerId);

    if (!brokers[newValue]) {
      console.warn("Broker not found at index", newValue);
      return;
    }
    // Skip if broker ID is invalid or data already exists
    if (!brokerId || clients[brokerId]) return;

    setLoading(true);

    const token =localStorage.getItem("token");
  //   try {
  //     const sellersRes = await axios.get(
  //       `${baseURL}/seller/getAllSeller/${brokerId}`,
  //       {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  //     );
  //     const buyersRes = await axios.get(
  //       `${baseURL}/buyer/getAllBuyer/${brokerId}`,
  //       {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  //     );

  //     console.log("Fetched sellers:", sellersRes);
  //     console.log("Fetched buyers:", buyersRes);

     
try {
  const token = localStorage.getItem("token");

  let sellers = [];
  let buyers = [];

  try {
    const sellersRes = await axios.get(`${baseURL}/seller/getAllSeller/${brokerId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    sellers = Array.isArray(sellersRes.data) ? sellersRes.data : [];
  } catch (err) {
    if (err.response && err.response.status === 404) {
      console.warn("⚠️ No sellers found for broker", brokerId);
    } else {
      throw err;
    }
  }

  try {
    const buyersRes = await axios.get(`${baseURL}/buyer/getAllBuyer/${brokerId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    buyers = Array.isArray(buyersRes.data) ? buyersRes.data : [];
  } catch (err) {
    if (err.response && err.response.status === 404) {
      console.warn("⚠️ No buyers found for broker", brokerId);
    } else {
      throw err;
    }
  }

  // ✅ Update state even if one of them is empty
  setClients((prev) => ({
    ...prev,
    [brokerId]: { sellers, buyers },
  }));
} catch (error) {
  console.error("❌ Unexpected error fetching clients:", error);
} finally {
  setLoading(false);
}


  
// setClients((prev) => {
//     const updated = {
//       ...prev,
//       [brokerId]: {
//         sellers: sellersRes.data,
//         buyers: buyersRes.data,
//       },
//     };
//     console.log("Setting clients:", updated);
//     return updated;
//   });
// setClients((prev) => {
//   const updated = JSON.parse(JSON.stringify(prev));
//   updated[brokerId] = {
//     sellers: sellersRes.data,
//     buyers: buyersRes.data,
//   };
//   console.log("Forcing deep update of clients:", updated);
//   return updated;
// });


   
  };

  useEffect(() => {
  console.log("Clients state updated:", clients);
}, [clients]);

  const selectedBroker = brokers[activeTab];
  const brokerId = selectedBroker?.id?.toString();
  const selectedClients = brokerId ? clients[brokerId] : null;

  // Log only when data updates
  useEffect(() => {
    if (brokerId) {
      console.log("Current broker ID:", brokerId);
      console.log("Clients keys:", Object.keys(clients));
      console.log("Selected clients:", selectedClients);
    }
  }, [brokerId, clients]);

  return (
    <Box
      display="flex"
      height="500px"
      width="100%"
      sx={{ backgroundColor: "pink" }}
      mt="10%"
    >
      {brokersLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={activeTab}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            sx={{ borderRight: 1, borderColor: "divider", minWidth: 200 }}
          >
            {brokers.map((broker) => (
              <Tab key={broker.id} label={broker.name} />
            ))}
          </Tabs>

          <Box flex={1} p={2}>
            {loading || !selectedClients ? (
              <Box display="flex" alignItems="center" gap={2}>
                <CircularProgress size={20} />
                <Typography>Loading clients...</Typography>
              </Box>
            ) : (
              <>
                <Typography variant="h6">Sellers</Typography>
                <ul>
                  {selectedClients.sellers.map((s) => (
                    <li key={s.id}>{s.company_name
}</li>
                  ))}
                </ul>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Buyers
                </Typography>
                <ul>
                  {selectedClients.buyers.map((b) => (
                    <li key={b.id}>{b.name}</li>
                  ))}
                </ul>
              </>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default BrokersVerticalTabs;
