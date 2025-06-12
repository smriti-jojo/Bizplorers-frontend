import React from "react";
import { MapPin } from 'lucide-react';
import { User } from 'lucide-react';
import { Ticket } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const buyers = [
  {
    id: 1,
    initials: "APN",
    name: "Dulpmantech",
    location: "Kolkata, Hong Kong",
    description: "Individual Description",
    ticketSize: "₹0.00 - ₹0.00",
  },
  {
    id: 2,
    initials: "DS",
    name: "Jollyworks",
    location: "Individual",
    description: "Description of Individual",
    ticketSize: "₹0.00 - ₹0.00",
  },
  {
    id: 3,
    initials: "AP",
    name: "Asemetrix",
    location: "Kolkata, India",
    description: "Description of Individual",
    ticketSize: "₹0.00 - ₹0.00",
  },
  {
    id: 4,
    initials: "AP",
    name: "Sevronjij",
    location: "Kolkata, India",
    description: "Description of Individual",
    ticketSize: "₹0.00 - ₹0.00",
  },
];
const ActiveBuyers = () => {
  return (
    <div className="container mx-auto p-5">
    <h2 className="text-xl md:text-3xl font-bold mb-4 flex justify-center ">Active Buyers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    
        {buyers.map((buyer) => (
          <div key={buyer.id} className="bg-white shadow-md rounded-lg p-5">
            
            <div className="flex flex-col items-center mb-3">
              
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                {buyer.initials}
    
              </div>
            
              <h3 className="text-lg font-semibold mt-2 blur-sm">{buyer.name}</h3>
            
              {/* <p className="text-gray-500 text-sm">{buyer.location}</p> */}
        
            </div>

            {/* <p className="text-gray-700">{buyer.description}</p> */}
<div className="">
    <p className="text-gray-500 text-sm flex gap-1 mt-1"><MapPin size={'15px'} className="text-blue-500 mt-1"/>{buyer.location}</p>
    </div>
    <div className="flex gap-1 my-1">
        <User size={'15px'} className="text-blue-500 mt-1"/> Individual
        </div>
            <div className="mt-2 flex gap-1">
              
              <p className=" flex gap-1"><Ticket size={'15px'} className="text-blue-500 mt-1"/>Ticket Size:</p>
              <p>{buyer.ticketSize}</p>
            </div>
            
            <div className="flex justify-between mt-4 py-1">
        
            
            
              {/* <button className="text-blue-500 hover:underline">
                LinkedIn
              </button> */}
              <button className="border-2 border-blue-400 p-1 rounded-md"> <Linkedin className="!text-blue-400"/></button>
              

                 <button className="border-2 border-blue-400 p-1 rounded-md text-blue-400">
                View Profile
              </button>

            </div>
    
          </div>
        ))}
    
      </div>
    
    </div>
  );
};
export default ActiveBuyers;
