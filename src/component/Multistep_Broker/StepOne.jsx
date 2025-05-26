import { TextField } from '@mui/material';
import ReusableSelect from '../Dropdown';


const StepOne = ({ formData, handleChange,errors }) => {

    

  return(
  
  <div className="space-y-4">
    <div className='flex gap-5'>
         <div className='w-full'>
         <h1>First Name</h1>
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
    />
    </div>
    <div className='w-full'>
         <h1>Last Name</h1>
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
    />
    </div>
    </div>
    <div>
        <h1>Mobile Number</h1>
         <input
      type="tel"
      name="mobile_no"
      placeholder="Mobile Number"
      value={formData.mobile_no}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
      error={errors.mobile_no}
    />
    </div>
     {/* <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
    /> */}
      
    {/* <div className="flex gap-[5%] w-full"> */}
    {/* <div>
<h1>Type of Seller</h1>
       <div className="w-[550px]">
      <ReusableSelect
      hiddenLabel
  id="filled-hidden-label-small"
        label="Type of Buyer"
        name="buyertype"
        value={formData.buyertype}
        onChange={handleChange}
        options={['Individual', 'Organization']}
        className={`w-full px-3  border rounded `}
        width={550}
          error={errors.buyertype}
        
      />
    </div>
    </div> */}
   
   
   
  {/* <div>
    <h1>Description of Individual/Organization</h1>
    <textarea
    type="textbox"
    name="description"
    rows={4}
      placeholder="Enter Description"
      value={formData.description}
      onChange={handleChange}
       className={`w-full px-3 py-2 border rounded ${
          errors.description ? 'border-red-500' : 'border-gray-300'
        }`}
      />
  </div> */}
  
 
  <div>
    <h1>Address</h1>
     <TextField 
      name="address" value={formData.address} onChange={handleChange}
     multiline rows={3} id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-full" />
  </div>
  <div className='flex justify-between w-full'>
    <div>
      <h1>Country</h1>
     <ReusableSelect
            label="Select Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
             options={["E-commerce","Offline Retail","Fintech","Edtech","Saas","Education & training","Restaurant/café","Mobile App"]}
          //  options={Object.keys(countryCityMap)}
            className={`w-full py-2 border rounded `}
              error={errors.country}
              width={550}
          />
    </div>
    <div>
      <h1>State</h1>
     <ReusableSelect
            label="Select State"
            name="state"
            value={formData.state}
            onChange={handleChange}
             options={["E-commerce","Offline Retail","Fintech","Edtech","Saas","Education & training","Restaurant/café","Mobile App"]}
          //  options={Object.keys(countryCityMap)}
            className={`w-full py-2 border rounded `}
              error={errors.state}
              width={550}
          />
    </div>
  
  </div>
  <div className='flex gap-5 w-full'>
      <div className='w-full'>
      <h1>City</h1>
     <ReusableSelect
            label="Select City"
            name="city"
            value={formData.city}
            onChange={handleChange}
             options={["E-commerce","Offline Retail","Fintech","Edtech","Saas","Education & training","Restaurant/café","Mobile App"]}
          //  options={Object.keys(countryCityMap)}
            className={`w-full py-2 border rounded `}
              error={errors.city}
              width={550}
          />
    </div>
    <div className='w-full px-2'>
        <h1 className='py-1'>Zip Code</h1>
        <TextField
         name="zip" value={formData.zip} onChange={handleChange}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    slotProps={{ inputLabel: { shrink: false } }}
                    className="!w-full"
                  />
    </div>
  </div>


</div>
)};

export default StepOne;
