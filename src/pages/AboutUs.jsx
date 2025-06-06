import React from 'react';
import Footer from '../component/Footer';
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
       <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
                {/* <img alt="logo" width={50} className="object-contain" /> */}
                 <Link to="/">
                  <img alt="logo" width={50} className="object-contain cursor-pointer" />
                </Link>
                <nav className="hidden md:flex gap-8">
                   <Link to="/aboutUs" className="text-xl hover:text-blue-600">About Us</Link>
                                   <Link to="/services" className="text-xl hover:text-blue-600">Services</Link>
                                   <Link to="/seller" className="text-xl hover:text-blue-600">Seller</Link>
                                   <Link to="/buyer" className="text-xl hover:text-blue-600">Buyer</Link>
                                    <Link to="/login" className="text-xl hover:text-blue-600">Log In</Link>
                                   <Link to="/signUp" className="text-xl hover:text-blue-600">Register</Link>
                  {/* <Link to="/home" className="text-xl hover:text-blue-600">How It Works?</Link> */}
                </nav>
                 <div className="hidden md:flex gap-2">
                  
                    {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" onClick={handleLogin}> */}
                    {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" >
                      Log In
                    </button>
                     <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700" >
                      Signup
                    </button> */}
                  
                  <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs md:text-sm hover:bg-blue-700">
                    Post A Business
                  </button>
                </div>
                {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
              {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button> */}
              </header>
    <div className='pt-[4rem] pb-[1rem]'>
       <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4 flex justify-center">About Us</h1>
      <p className="mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs
