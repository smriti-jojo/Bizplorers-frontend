import React from 'react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 px-6">
            <h2 className="text-xl font-bold">Bizplorers</h2>
            <p className="mt-2">
              Nam libero tempore cum soluta nobis est eligendi optio cumque
              nihil impedit possimus, omnis voluptas est, omnis dolor
              repellendus.
            </p>
            <div className="flex space-x-2 mt-4">
              
              <button className='p-2 rounded-full'>
                <Instagram/>
              </button>
              <button className='p-2 rounded-full'>
                <Facebook/>
              </button>
              
              <button className='p-2 rounded-full'>
                <Linkedin/>
              </button>
              <button className='p-2 rounded-full'>
                <Youtube/>
              </button>
            
            </div>
          </div>
          
          <div className="md:w-1/4 mt-6 md:mt-0">
            <h3 className="font-bold text-lg">Category</h3>
            <ul className="mt-2">
              <li>E-commerce</li>
              <li>Edtech</li>
              <li>SaaS</li>
              <li>Education & Training</li>
              <li>Mobile App</li>
            </ul>
          </div>

          <div className="md:w-1/4 mt-6 md:mt-0">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="mt-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Our Services</li>
              {/* <li>Enterprise</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li> */}
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="md:w-1/4 mt-6 md:mt-0">
            <h3 className="font-bold text-lg">Resources</h3>
            <ul className="mt-2">
              <li>FAQs</li>
              <li>How it works</li>
              <li>Membership</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <p>© Copyright 2025 Bizplorers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;