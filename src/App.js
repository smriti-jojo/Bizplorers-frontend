
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Buyer from "./pages/signup_steps/Buyer";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/buyer" element={<Buyer/>}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
