import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate=useNavigate();
    const token=localStorage.getItem("token");
 const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-[4rem] py-4 bg-white shadow-md z-10">
      {/* Logo on the left */}
      <Link to="/">
        <img
          src="/your-logo.png" // Replace with your actual logo path
          alt="logo"
          width={50}
          className="object-contain cursor-pointer"
        />
      </Link>

      {/* Right side: Nav links and buttons grouped */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex gap-8">
          <Link to="/aboutUs" className="text-xl hover:text-blue-600">
            About Us
          </Link>
          <Link to="/services" className="text-xl hover:text-blue-600">
            Services
          </Link>
          <Link to="/seller" className="text-xl hover:text-blue-600">
            Seller
          </Link>
          <Link to="/buyer" className="text-xl hover:text-blue-600">
            Buyer
          </Link>
          {!token?(
            <>
          {/* <Link to="/login" className="text-xl hover:text-blue-600">
            Log In
          </Link> */}
          <Link to="/signUp" className="text-xl hover:text-blue-600">
            Register
          </Link>
          <button
            className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700"
            onClick={()=>navigate('/login')}
          >  Log In</button>

          {/* <button
            className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700"
            onClick={()=>navigate('/signUp')}
          > Register</button> */}
          </>
          ):''}
        </nav>

        {/* Optional: Action buttons or other elements */}
        {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 text-sm">
          Post A Business
        </button> */}
{token?(
         <button
            className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700"
            onClick={handleLogOut}
          >
            Log Out
          </button>
):''}
      </div>
    </header>
  );
};

export default Header;
