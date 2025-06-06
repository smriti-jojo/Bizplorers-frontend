import React from "react";
import TrendingBusinesses from "../component/Home/TrendingBusiness";
import ActiveBuyers from "../component/Home/ActiveBuyer";
import { Briefcase } from 'lucide-react';
import { Store } from 'lucide-react';
import { Banknote } from 'lucide-react';
import { Book } from 'lucide-react';
import Footer from '../component/Footer';
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Hero from '../assests/Main/Hero1.jpg';
import pitch from '../assests/Main/pitching.jpg';
import startup from '../assests/Main/startup.png';
import support from '../assests/Main/support.jpg';

const categories = [
  { name: "E-commerce", icon: <Briefcase size={'50px'}/> }, // Replace with an actual image if needed
  { name: "Offline Retail", icon: <Store size={'50px'}/> }, // Replace with an actual image if needed
  { name: "Fintech", icon: <Banknote size={'50px'}/> }, // Replace with an actual image if needed
  { name: "Edtech", icon: <Book size={'50px'}/> }, // Replace with an actual image if needed
];

const Home = () => {
const navigate=useNavigate();

   const handleLogin = () => {
    navigate('/login');
  };
  const handleSignup = () => {
    navigate('/signUp');
  };


  return (
    <div>
      <div className="min-h-screen bg-blue-50 text-gray-900 font-sans">
        {/* Navbar */}
        {/* <header className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold text-blue-800">
            BUYOUT <span className="text-blue-500">CONNECT</span>
          </h1>
          <nav className="space-x-6 text-sm font-medium hidden md:block">
            <a href="#" className="hover:text-blue-500">
              About Us
            </a>
            <a href="#" className="hover:text-blue-500">
              Our Services
            </a>
            <a href="#" className="hover:text-blue-500">
              Sellers
            </a>
            <a href="#" className="hover:text-blue-500">
              Buyers
            </a>
            <a href="#" className="hover:text-blue-500">
              Contact Us
            </a>
            <a href="#" className="hover:text-blue-500">
              Log In
            </a>
            <a href="#" className="hover:text-blue-500">
              Register
            </a>
          </nav>
          <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Post A Business
          </button>
        </header> */}
            <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-3 bg-white shadow-md z-10">
                {/* <img alt="logo" width={50} className="object-contain" /> */}
                 <Link to="/">
                  <img alt="logo" width={50} className="object-contain cursor-pointer" />
                </Link>
                <nav className="hidden md:flex gap-8 ">
                  <Link to="/aboutUs" className="text-xl hover:text-blue-600">About Us</Link>
                  <Link to="/services" className="text-xl hover:text-blue-600">Services</Link>
                  <Link to="/seller" className="text-xl hover:text-blue-600">Seller</Link>
                  <Link to="/buyer" className="text-xl hover:text-blue-600">Buyer</Link>
                   <Link to="/login" className="text-xl hover:text-blue-600">Log In</Link>
                  <Link to="/signUp" className="text-xl hover:text-blue-600">Register</Link>
                {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogin}>
                      Log In
                    </button>
                     <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleSignup} >
                      Signup
                    </button> */}
                  {/* <Link to="/homepage" className="text-xl hover:text-blue-600">How It Works?</Link> */}
                </nav>
                 <div className="hidden md:flex gap-2">
                  
                    {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogin}> */}
                    {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogin}>
                      Log In
                    </button>
                     <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleSignup} >
                      Signup
                    </button> */}
                  
                  <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">
                    Post A Business
                  </button>
                </div>
                {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
              {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
              </header>

        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 pb-16 pt-[7rem] items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold leading-snug mb-6">
              India’s first online <br /> marketplace to buy and <br /> sell
              businesses
            </h2>
            <ul className="mb-6 space-y-2 text-lg">
              <li>✅ Democratization of business ownership for buyers</li>
              <li>✅ Complete support by our experienced advisors</li>
              <li>✅ Monetization opportunities for business sellers</li>
            </ul>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 text-sm">
                Get Started. It’s Free!
              </button>
              <button className="bg-blue-100 text-blue-600 px-5 py-2 rounded hover:bg-blue-200 text-sm">
                Get Expert Advice
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center items-center">
            {/* Placeholder for the illustration */}
            <div className="w-full max-w-md  bg-white rounded-lg shadow-md p-6">
              {/* <p className="text-center text-sm text-gray-500">
                [Illustration Placeholder - Rocket, Charts, People]
              </p> */}
              <img src={Hero} className="!w-full "/>
            </div>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 py-20 space-y-10 md:space-y-0 md:space-x-10">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Pitch your business to hundreds of potential buyers, get the best
              price <br />
              and reduce the time to monetization!
            </h2>
            <p className="text-base mb-6 leading-relaxed">
              Whether you are running a thriving business or have just built one
              and want to cash-out due to any reason rather than scaling it up
              yourself, it’s never easy to find the right buyers. At Bizplorers,
              you can get access to individuals and organizations across the
              country who might be interested in buying out your business, thus
              providing you the opportunity to get the best price in a much
              quicker ‘money-in-the-bank’.
            </p>
            <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm">
              Get Started. It’s Free!
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={pitch}
              alt="Team presenting growth chart"
              className="rounded-lg shadow-md w-full max-w-md h-full"
            />
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 py-20 space-y-10 md:space-y-0 md:space-x-10">
          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={startup}
              alt="Team presenting growth chart"
              className="rounded-lg shadow-md w-[60%] max-w-md"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Pitch your business to hundreds of potential buyers, get the best
              price <br />
              and reduce the time to monetization!
            </h2>
            <p className="text-base mb-6 leading-relaxed">
              Whether you are running a thriving business or have just built one
              and want to cash-out due to any reason rather than scaling it up
              yourself, it’s never easy to find the right buyers. At Bizplorers,
              you can get access to individuals and organizations across the
              country who might be interested in buying out your business, thus
              providing you the opportunity to get the best price in a much
              quicker ‘money-in-the-bank’.
            </p>
            <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm">
              Get Started. It’s Free!
            </button>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 py-20 space-y-10 md:space-y-0 md:space-x-10">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              We Are Here To Support You!
            </h2>
            <p className="text-base mb-6 leading-relaxed">
              Whether you are running a thriving business or have just built one
              and want to cash-out due to any reason rather than scaling it up
              yourself, it’s never easy to find the right buyers. At Bizplorers,
              you can get access to individuals and organizations across the
              country who might be interested in buying out your business, thus
              providing you the opportunity to get the best price in a much
              quicker ‘money-in-the-bank’.
            </p>
            {/* <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm">
            Get Started. It’s Free!
          </button> */}
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
        <section className="w-full">
          <TrendingBusinesses />
        </section>
        <section>
          
          <div className="py-3">
            
         
            <ActiveBuyers />
          </div>
          
        </section>
        <section className="mb-10">
           <div className="w-full  p-8  ">
     

      <div className="text-center mb-6 ">
        <h2 className="text-3xl font-semibold">Business Categories</h2>
        <p className="mt-2 text-gray-600 flex justify-center ">Below are the lists of popular job categories. The freelancers can find a suitable job category and pick up an ideal job that matches their expertise as well as professional experience.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category.name} className="p-6 bg-white border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4 flex justify-center text-blue-400">{category.icon}</div>
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>

    </div>
        </section>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
