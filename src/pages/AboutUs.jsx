import React from 'react';
import Footer from '../component/Footer';
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Header from '../component/Header';

const AboutUs = () => {
  return (
    <>
       {/* <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-md z-10">
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
                </nav>
                 <div className="hidden md:flex gap-2">
                 
                </div>
               
              </header> */}
              <Header/>
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
