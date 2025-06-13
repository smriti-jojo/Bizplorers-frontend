// import React from 'react';
// import { Facebook } from 'lucide-react';
// import { Linkedin } from 'lucide-react';
// import { Youtube } from 'lucide-react';
// import { Instagram } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-blue-600 text-white py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="md:w-1/3 px-6">
//             <h2 className="text-xl font-bold">Bizplorers</h2>
//             <p className="mt-2">
//               Nam libero tempore cum soluta nobis est eligendi optio cumque
//               nihil impedit possimus, omnis voluptas est, omnis dolor
//               repellendus.
//             </p>
//             <div className="flex space-x-2 mt-4">
              
//               <button className='p-2 rounded-full'>
//                 <Instagram/>
//               </button>
//               <button className='p-2 rounded-full'>
//                 <Facebook/>
//               </button>
              
//               <button className='p-2 rounded-full'>
//                 <Linkedin/>
//               </button>
//               <button className='p-2 rounded-full'>
//                 <Youtube/>
//               </button>
            
//             </div>
//           </div>
          
//           <div className="md:w-1/4 mt-6 md:mt-0">
//             <h3 className="font-bold text-lg">Category</h3>
//             <ul className="mt-2">
//               <li>E-commerce</li>
//               <li>Edtech</li>
//               <li>SaaS</li>
//               <li>Education & Training</li>
//               <li>Mobile App</li>
//             </ul>
//           </div>

//           <div className="md:w-1/4 mt-6 md:mt-0">
//             <h3 className="font-bold text-lg">Company</h3>
//             <ul className="mt-2">
//               <li>About Us</li>
//               <li>Contact Us</li>
//               <li>Our Services</li>
//               <li>Terms & Conditions</li>
//             </ul>
//           </div>

//           <div className="md:w-1/4 mt-6 md:mt-0">
//             <h3 className="font-bold text-lg">Resources</h3>
//             <ul className="mt-2">
//               <li>FAQs</li>
//               <li>How it works</li>
//               <li>Membership</li>
//             </ul>
//           </div>
//         </div>

//         <div className="text-center mt-10">
//           <p>© Copyright 2025 Bizplorers. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 px-6">
            <h2 className="text-4xl font-bold">Bizplorers</h2>
            <p className="mt-2">
              find trending sellers , buyers 
            </p>
            <div className="flex space-x-2 mt-4">
              <button className="p-2 rounded-full"><Instagram /></button>
              <button className="p-2 rounded-full"><Facebook /></button>
              <button className="p-2 rounded-full"><Linkedin /></button>
              <button className="p-2 rounded-full"><Youtube /></button>
            </div>
          </div>

          {/* <div className="md:w-1/4 mt-6 md:mt-0">
            <h3 className="font-bold text-lg">Category</h3>
            <ul className="mt-2 space-y-1">
              <li><Link to="/categories/e-commerce" className="hover:underline">E-commerce</Link></li>
              <li><Link to="/categories/edtech" className="hover:underline">Edtech</Link></li>
              <li><Link to="/categories/saas" className="hover:underline">SaaS</Link></li>
              <li><Link to="/categories/education-training" className="hover:underline">Education & Training</Link></li>
              <li><Link to="/categories/mobile-app" className="hover:underline">Mobile App</Link></li>
            </ul>
          </div> */}
          <div className="md:w-1/4 mt-6 md:mt-0">
  <h3 className="font-semibold text-xl">Category</h3>
  <ul className="mt-2 space-y-1">
    <li className="cursor-default">E-commerce</li>
    <li className="cursor-default">Edtech</li>
    <li className="cursor-default">SaaS</li>
    <li className="cursor-default">Education & Training</li>
    <li className="cursor-default">Mobile App</li>
  </ul>
</div>


          <div className="md:w-1/4 mt-6 md:mt-0">
            <h3 className="font-semibold text-xl">Company</h3>
            <ul className="mt-2 space-y-1">
              <li><Link to="/aboutUs" className="hover:underline">About Us</Link></li>
              {/* <li><Link to="/contact" className="hover:underline">Contact Us</Link></li> */}
              <li><Link to="/services" className="hover:underline">Our Services</Link></li>
              {/* <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:underline">Refund Policy</Link></li> */}
            </ul>
          </div>

          <div className="md:w-1/4 mt-6 md:mt-0">
            <h3 className="font-semibold text-xl">Resources</h3>
            <ul className="mt-2 space-y-1">
              <li><Link to="/" className="hover:underline">FAQs</Link></li>
              <li><Link to="/" className="hover:underline">How it works</Link></li>
              {/* <li><Link to="/" className="hover:underline">Membership</Link></li> */}
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
