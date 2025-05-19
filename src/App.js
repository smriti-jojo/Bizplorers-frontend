
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Buyer from "./pages/signup_steps/Buyer";
import OTPVerification from "./pages/OTPVerification";
import ProfileCompletion from "./pages/ProfileCompletion";
import Seller from './pages/signup_steps/Seller'

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
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
