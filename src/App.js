
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Buyer from "./pages/signup_steps/Buyer";
import OTPVerification from "./pages/OTPVerification";
import ProfileCompletion from "./pages/ProfileCompletion";
import Seller from './pages/signup_steps/Seller'
import Broker from './pages/signup_steps/Broker';
import BuyerDashboard from "./pages/dashboard/BuyerDashboard";
import SellerDashboard from "./pages/dashboard/SellerDashboard";
import BrokerDashboard from "./pages/dashboard/BrokerDashboard";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
           <Route path="/otp" element={<OTPVerification/>}/>
           <Route path="/profile_completion" element={<ProfileCompletion/>}/>
          <Route path="/buyer" element={<Buyer/>}/>
           <Route path="/seller" element={<Seller/>}/>
            <Route path="/broker" element={<Broker/>}/>
             <Route path="/buyer/dashboard" element={<BuyerDashboard/>}/>
              <Route path="/seller/dashboard" element={<SellerDashboard/>}/>
               <Route path="/broker/dashboard" element={<BrokerDashboard/>}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
