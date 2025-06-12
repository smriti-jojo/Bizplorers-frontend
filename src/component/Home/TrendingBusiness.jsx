import React from "react";
import { Image } from "lucide-react";
import { MapPin } from "lucide-react";
import { Boxes } from "lucide-react";
import { Clock } from "lucide-react";
import { Building2 } from "lucide-react";
import { Award } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const businesses = [
  {
    category: "Mobile App",
    ttmRevenue: "₹2.75 Cr.",
    ttmProfit: "TTM Profit",
    askingPrice: "₹25 Cr.",
    location: "Margao, India",
    teamSize: 50,
    businessSince: "January 2022",
    businessType: "Proprietary",
    CIN: "10002",
  },
  {
    category: "E-commerce",
    ttmRevenue: "₹1 L",
    ttmProfit: "TTM Profit",
    askingPrice: "₹5 L",
    location: "Rayadurg, India",
    teamSize: 10,
    businessSince: "January 2020",
    businessType: "Proprietary",
    CIN: "10002",
  },
  {
    category: "Content",
    ttmRevenue: "₹103.00",
    ttmProfit: "TTM Profit",
    askingPrice: "₹103.00",
    location: "Margao, India",
    teamSize: 103,
    businessSince: "January 2024",
    businessType: "Proprietary",
    CIN: "10002",
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

const TrendingBusinesses = () => {
  return (
    <div className="container mx-auto p-4 ">
      {/* <h1 className="text-4xl font-bold mb-6 flex justify-center ">Trending Businesses</h1> */}
      <h1 className="text-xl md:text-3xl font-bold mb-4 flex justify-center ">
        Trending Businesses
      </h1>

      <div className="flex justify-center w-full">
        {/* <p className="mb-8 text-[15px] w-[60%]">
          Below are the lists of popular job categories. The freelancers can
          find a suitable job category and pick up an ideal job that matches
          their expertise as well as professional experience.
        </p> */}
      </div>

      {/* <div className="relative max-w-full px-5"> */}
      <div className="relative px-5 max-w-screen-xl mx-auto">
        <Slider
          {...Mentorsettings}
          nextArrow={<NextArrow />}
          className="bg-slate-100"
        >
          {businesses.map((business, index) => (
            // <div key={index} className="bg-white shadow-md rounded-lg p-4 ">
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 w-[200px]"
            >
              {/* <Image/>  */}
              <div className="flex gap-5 ">
                <Image size={"50px"} className="!text-blue-600" />
                <span className="blur-sm text-2xl">Name</span>
              </div>
              <div className="text-md font-semibold mt-3 py-1  rounded bg-green-100 text-green-700 w-[100px] flex justify-center">
                {business.category}
              </div>

              <div className="flex gap-2 pt-3">
                <div className="mt-2">
                  <p>
                    <strong>TTM Revenue:</strong>{" "}
                    <span className="blur-sm">{business.ttmRevenue}</span>
                  </p>
                </div>{" "}
                <div>
                  <p>
                    <strong>TTM Profit:</strong> {business.ttmProfit}
                  </p>{" "}
                </div>
                <div>
                  <p>
                    <strong>Asking Price:</strong> {business.askingPrice}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-sm">
                {" "}
                <div className="flex justify-between">
                  <p className="flex gap-1 mt-1">
                    <strong className="flex gap-1">
                      <MapPin size={"20px"} />
                    </strong>{" "}
                    {business.location}
                  </p>
                  <p className="flex gap-1 mt-1">
                    <strong className="flex gap-1">
                      <Award size={"20px"} />
                    </strong>{" "}
                    <span className="blur-sm">{business.CIN}</span>
                  </p>
                </div>
                <p className="flex gap-1 mt-1">
                  <strong className="flex gap-1">
                    <Boxes /> Team Size:
                  </strong>{" "}
                  {business.teamSize}
                </p>
                <p className="flex gap-1 mt-1">
                  <strong className="flex gap-1">
                    <Clock />
                    Business Since:
                  </strong>{" "}
                  {business.businessSince}
                </p>
                <p className="flex gap-1 mt-1">
                  <strong className="flex gap-1">
                    <Building2 />
                    Business Type:
                  </strong>{" "}
                  {business.businessType}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default TrendingBusinesses;
