import React from "react";
import { MapPin } from 'lucide-react';
import { User } from 'lucide-react';
import { Ticket } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { BuyerCard } from "../../pages/Buyer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const NextArrow = (props) => {
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

const ActiveBuyers = () => {
  return (
    <div className="container mx-auto p-5">
    <h2 className="text-xl md:text-3xl font-bold mb-6 flex justify-center ">Active Buyers</h2>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> */}
    <div className="relative px-5 max-w-screen-xl mx-auto">
            <Slider
              {...Mentorsettings}
              nextArrow={<NextArrow />}
              className="bg-slate-100"
            >
        {buyers.map((buyer,index) => (
         <BuyerCard key={index} buyer={buyer} type={'home'} />
        ))}
    </Slider>
      </div>
    
    </div>
  );
};
export default ActiveBuyers;
