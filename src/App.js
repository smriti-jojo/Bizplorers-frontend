import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
import SignUp from "./pages/Signup";
// import Buyer from "./pages/signup_steps/Buyer";
import RegisterBuyer from "./pages/signup_steps/Buyer";
import RegisterSeller from "./pages/signup_steps/Seller";
import Buyer from "./pages/Buyer";
import OTPVerification from "./pages/OTPVerification";
import ProfileCompletion from "./pages/ProfileCompletion";
// import Seller from './pages/signup_steps/Seller'
import Broker from "./pages/signup_steps/Broker";
import BuyerDashboard from "./pages/dashboard/BuyerDashboard";
import SellerDashboard from "./pages/dashboard/SellerDashboard";
import BrokerDashboard from "./pages/dashboard/BrokerDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AdminWithSidebar from "./pages/dashboard/AdminWithSidebar";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Seller from "./pages/Seller";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>

          {/**Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          {/* <Route path="/" element={<SignUp/>}/> */}
          <Route path="/otp" element={<OTPVerification />} />
          <Route path="/profile_completion" element={<ProfileCompletion />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/login" element={<Login />} />

{/**Private Routes */}
          <Route
            path="/broker"
            element={
              <PrivateRoute allowedRoles={["broker"]}>
                <Broker />
              </PrivateRoute>
            }
          />
          <Route
            path="/broker/dashboard"
            element={
              <PrivateRoute allowedRoles={["broker"]}>
                <BrokerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/buyer_step"
            element={
              <PrivateRoute allowedRoles={["buyer"]}>
                <RegisterBuyer />
              </PrivateRoute>
            }
          />
          <Route
            path="/buyer/dashboard"
            element={
              <PrivateRoute allowedRoles={["buyer"]}>
                <BuyerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/seller_step"
            element={
              <PrivateRoute allowedRoles={["seller"]}>
                <RegisterSeller />
              </PrivateRoute>
            }
          />
          <Route
            path="/seller/dashboard"
            element={
              <PrivateRoute allowedRoles={["seller"]}>
                <SellerDashboard />
              </PrivateRoute>
            }
          />

          {/* <Route path="/broker" element={<Broker/>}/> */}
          {/* <Route path="/buyer/dashboard" element={<BuyerDashboard/>}/> */}
          {/* <Route path="/seller/dashboard" element={<SellerDashboard/>}/> */}
          {/* <Route path="/broker/dashboard" element={<BrokerDashboard/>}/> */}
          {/* <Route path="/admin/dashboard" element={<AdminWithSidebar/>}/> */}

          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminWithSidebar />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
