import React from 'react';
import { Button } from '@mui/material';

const ProfileCompletion = () => {
  return (
    
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='border-2 border-slate-300 rounded-md shadow-md shadow-slate-400 w-[40%] h-[40%]'>
            <h1>Profile Successfully Completed</h1>
             <Button className="!w-[90%]" variant='contained' >Back to my Dashboard</Button>
        </div>
</div>
    
  )
}

export default ProfileCompletion
