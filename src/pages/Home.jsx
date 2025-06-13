import React, { useEffect } from "react";
import TrendingBusinesses from "../component/Home/TrendingBusiness";
import ActiveBuyers from "../component/Home/ActiveBuyer";
import { Briefcase } from "lucide-react";
import { Store } from "lucide-react";
import { Banknote } from "lucide-react";
import { Book } from "lucide-react";
import { Laptop } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { ChefHat } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import Footer from "../component/Footer";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Hero from "../assests/Main/Hero1.jpg";
import pitch from "../assests/Main/pitching.jpg";
import startup from "../assests/Main/startup.png";
import support from "../assests/Main/support.jpg";
import Header from "../component/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BuyerCard } from "./Buyer";

const categories = [
  { name: "E-commerce", icon: <Briefcase size={"50px"} /> }, // Replace with an actual image if needed
  { name: "Offline Retail", icon: <Store size={"50px"} /> }, // Replace with an actual image if needed
  { name: "Fintech", icon: <Banknote size={"50px"} /> }, // Replace with an actual image if needed
  { name: "Edtech", icon: <Book size={"50px"} /> }, // Replace with an actual image if needed

  { name: "Saas", icon: <Laptop size={"50px"} /> },
  { name: "Education  & training", icon: <BookOpenText size={"50px"} /> },
  { name: "Restaurant/café", icon: <ChefHat size={"50px"} /> },
  { name: "Mobile App", icon: <Smartphone size={"50px"} /> },
  { name: "Content", icon: <Book size={"50px"} /> },
  { name: "Agency", icon: <Book size={"50px"} /> },
];

const Home = () => {
  const navigate = useNavigate();

  const fetchAllPicklists = async () => {
    try {
      const response = await fetch(
        "https://bizplorers-backend.onrender.com/api/picklist/get_all",
        {
          method: "GET",
          // headers: {
          //   "Content-Type": "application/json",
          // },
        }
      );

      const result = await response.json();
      console.log("picklistResults---", result);
      if (response.ok) {
        // setUserData(result.data);
        console.log("picklists--value", JSON.stringify(result));
        localStorage.setItem("picklists", JSON.stringify(result));
      } else {
        console.error("Error fetching users:", result.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  useEffect(() => {
    fetchAllPicklists();
  }, []);

   const Mentorsettings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  {
    /**Mentor Slider Next Arrow */
  }
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="custom-next absolute bottom-[50%] right-[0%] cursor-pointer"
      >
        ▶
      </div>
    );
  };

const handleGetStarted=()=>{
  navigate('/signUp');
}
  return (
    <div>
      <div className="min-h-screen bg-blue-50 text-gray-900 font-sans">
        {/* Navbar */}

        {/* <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-3 bg-white shadow-md z-10">
               
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
                </nav>
                 <div className="hidden md:flex gap-2">
                </div>
              </header> */}
        <Header />

        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 pb-16 pt-[7rem] items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold  mb-6">
              India’s first online <br /> marketplace to buy and <br /> sell
              businesses
            </h2>
            <ul className="mb-6 space-y-2 text-lg">
              <li>✅ Democratization of business ownership for buyers</li>
              <li>✅ Complete support by our experienced advisors</li>
              <li>✅ Monetization opportunities for business sellers</li>
            </ul>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 text-sm" 
              onClick={
    handleGetStarted}>
                Get Started. It’s Free!
              </button>
              {/* <button className="bg-blue-100 text-blue-600 px-5 py-2 rounded hover:bg-blue-200 text-sm">
                Get Expert Advice
              </button> */}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center items-center">
            {/* Placeholder for the illustration */}
            <div className="w-full max-w-md  bg-white rounded-lg shadow-md p-6">
              {/* <p className="text-center text-sm text-gray-500">
                [Illustration Placeholder - Rocket, Charts, People]
              </p> */}
              <img src={Hero} className="!w-full " />
            </div>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 py-20 space-y-10 md:space-y-0 md:space-x-10">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold mb-4 ">
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
            <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm" onClick={
    handleGetStarted}>
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
            <h2 className="text-xl md:text-3xl font-bold mb-4 ">
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
            <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm" onClick={
    handleGetStarted}>
              Get Started. It’s Free!
            </button>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 py-20 space-y-10 md:space-y-0 md:space-x-10">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold mb-4 ">
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
              <h2 className="text-xl md:text-3xl font-bold mb-4 ">
                Business Categories
              </h2>
              {/* <p className="mt-2 text-gray-600 flex justify-center ">
                Below are the lists of popular job categories. The freelancers
                can find a suitable job category and pick up an ideal job that
                matches their expertise as well as professional experience.
              </p> */}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="p-6 bg-white border rounded-lg shadow-md text-center"
                >
                  <div className="text-4xl mb-4 flex justify-center text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
