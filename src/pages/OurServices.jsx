import React from "react";
import Footer from "../component/Footer";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import team from "../assests/services/team.jpg";
import support from "../assests/services/support.jpg";
import dilligence from "../assests/services/dilligence.jpg";
import legal from "../assests/services/legal.jpg";
import Header from "../component/Header";


const OurServices = () => {
  const navigate = useNavigate();

  const Quote=()=>{
    navigate(`/signUp`);
  }
  return (
    <div>
      <div className="min-h-screen bg-blue-50 text-gray-900 font-sans">
        {/* <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
         
          <Link to="/">
            <img
              alt="logo"
              width={50}
              className="object-contain cursor-pointer"
            />
          </Link>
          <nav className="hidden md:flex gap-8">
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
            <Link to="/login" className="text-xl hover:text-blue-600">
              Log In
            </Link>
            <Link to="/signUp" className="text-xl hover:text-blue-600">
              Register
            </Link>
                   </nav>
          <div className="hidden md:flex gap-2">
          
          </div>
          
        </header> */}
        <Header/>
        <h1 className="pt-[5rem] font-bold text-4xl flex justify-center">
          Our Services
        </h1>
        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 py-20 space-y-10 md:space-y-0 md:space-x-10">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold mb-4 ">
              Pre-Sales Advisory
            </h2>
            <h3 className="text-xl font-semibold pb-2">
              Sale Readiness, Pitch Creation, Inquiry Handling, Buyer Vetting,
              Offer Evaluation
            </h3>
            <p className="text-base mb-6 leading-relaxed">
              Whether you are running a thriving business or have just built one
              and want to cash-out due to any reason rather than scaling it up
              yourself, it’s never easy to find the right buyers. At Bizplorers,
              you can get access to individuals and organizations across the
              country who might be interested in buying out your business, thus
              providing you the opportunity to get the best price in a much
              quicker ‘money-in-the-bank’.
            </p>
            <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm" onClick={Quote}>
              Get a Quote
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={team}
              alt="Team presenting growth chart"
              className="rounded-lg shadow-md w-full max-w-md"
            />
          </div>
        </section>
        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 py-20 space-y-10 md:space-y-0 md:space-x-10">
          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={dilligence}
              alt="Team presenting growth chart"
              className="rounded-lg shadow-md w-full max-w-md"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold mb-4 ">
              Due Diligence Support
            </h2>
            <h3 className="text-xl font-semibold pb-2">
              Sale Readiness, Pitch Creation, Inquiry Handling, Buyer Vetting,
              Offer Evaluation
            </h3>
            <p className="text-base mb-6 leading-relaxed">
              Whether you are running a thriving business or have just built one
              and want to cash-out due to any reason rather than scaling it up
              yourself, it’s never easy to find the right buyers. At Bizplorers,
              you can get access to individuals and organizations across the
              country who might be interested in buying out your business, thus
              providing you the opportunity to get the best price in a much
              quicker ‘money-in-the-bank’.
            </p>
            <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm" onClick={Quote}>
              Get a Quote
            </button>
          </div>
        </section>
        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 py-20 space-y-10 md:space-y-0 md:space-x-10">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Commercial Support
            </h2>
            {/* <h3 className='text-xl font-semibold pb-2'>Sale Readiness, Pitch Creation, Inquiry Handling, Buyer Vetting, Offer Evaluation</h3> */}
            <p className="text-base mb-6 leading-relaxed">
              Whether you are running a thriving business or have just built one
              and want to cash-out due to any reason rather than scaling it up
              yourself, it’s never easy to find the right buyers. At Bizplorers,
              you can get access to individuals and organizations across the
              country who might be interested in buying out your business, thus
              providing you the opportunity to get the best price in a much
              quicker ‘money-in-the-bank’.
            </p>
            <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm" onClick={Quote}>
              Get a Quote
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={support}
              alt="Team presenting growth chart"
              className="rounded-lg shadow-md w-full max-w-md"
            />
          </div>
        </section>
        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 py-20 space-y-10 md:space-y-0 md:space-x-10">
          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={legal}
              alt="Team presenting growth chart"
              className="rounded-lg shadow-md w-full max-w-md"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Legal and Secretarial
            </h2>
            <h3 className="text-xl font-semibold pb-2">
              NDA, Business Transfer Agreement, Legal Clauses, Secrerarial
              Compliances
            </h3>
            <p className="text-base mb-6 leading-relaxed">
              Whether you are running a thriving business or have just built one
              and want to cash-out due to any reason rather than scaling it up
              yourself, it’s never easy to find the right buyers. At Bizplorers,
              you can get access to individuals and organizations across the
              country who might be interested in buying out your business, thus
              providing you the opportunity to get the best price in a much
              quicker ‘money-in-the-bank’.
            </p>
            <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm" onClick={Quote}>
              Get a Quote
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default OurServices;
