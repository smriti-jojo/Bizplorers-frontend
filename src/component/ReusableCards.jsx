import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarIcon from '@mui/icons-material/Star';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';
import place from '../assests/place.jpg';
const ReusableCards = ({description_business,company_name,city,askingPrice,EBITDA}) => {
  return (
    <div className='relative'>
      <div className='w-[350px] border-2 border-slate-300 rounded-md p-4 '>
        <div><CircleIcon fontSize='5px' className='!text-green-600 mr-2'/>Newly Established Restaurant for Sale</div>
        <h1 className='font-semibold text-lg py-1'>For Sale:{company_name?company_name:'Profitable Business '} </h1>
     <div className='flex gap-3 py-1'>
     <div><EmailIcon fontSize='7px' className='mr-1 text-blue-400'/> Official Email</div> 
     <div><PhoneIcon fontSize='7px' className='mr-1 text-green-400'/>Phone</div>
     <div><LinkedInIcon fontSize='7px' className='mr-1 text-red-500'/>LinkedIn</div>
     </div>
     <div className='flex justify-between py-1'>
      <div>
       {/* {description_business} */}
       {description_business?description_business:
      ' A successful business thrives by identifying a clear....'}
      </div>
      <div className=''>
        <img src={place} alt='image' width={'100px'}/>
      </div>
     </div>
     <div className='py-1 '>
<StarIcon fontSize='small' className='mr-1 text-yellow-400'/>8.2 <span className='ml-3'><LocationPinIcon fontSize='small' className='mr-1 text-red-500'/>{city?city:'Chennai'}</span>
     </div>
     <div className='p-4 bg-slate-100 space-y-2'>
      <div className='flex justify-between text-[15px]'>
        Run Rate Sales... <span>INR 1.3crore</span>
      </div>
      <div className='flex justify-between text-[15px]'>
        EBITDA Margin... <span>{EBITDA?EBITDA:20}%</span>
      </div>
     </div>
     <div className='flex justify-between py-2'>
      <div className='w-[60%]'> 
        <h1>Business for Sale <InfoIcon fontSize='small'/></h1>
       <div className="flex items-end gap-1 text-blue-700">
  <p className="text-[12px] ">INR</p>
  <h1 className="text-2xl font-bold">{askingPrice?askingPrice:'40L'}</h1>
</div>

       
      </div>
      <div className='flex items-center'>
        <Button variant='contained' className='!bg-yellow-400 !text-black !w-[150px] !text-[0.7rem] !py-3'>Contact Business</Button>
      </div>
     </div>
      </div>
      <span class=" absolute top-5 -right-2 z-10 inline-block bg-green-400 rotate-45 text-white text-xs font-semibold px-2.5 py-0.5  shadow">
  Premium
</span>

    </div>
  )
}

export default ReusableCards
