import { TextField } from '@mui/material';
import ReusableSelect from '../Dropdown';


const StepOne = ({ formData, handleChange,errors }) => {

    

  return(
  
  <div className="space-y-4">
    {/* <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
    /> */}
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
    <div>
        <h1>Company Name</h1>
        <TextField  id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-full" />
    </div>
   

   <div className='flex gap-5 w-full'>
    <div className='w-1/2'>
        <h1>Entity Structure</h1>
        <ReusableSelect
              multiple
                label="Entity Structure"
                name="entityStructure"
                value={formData.entityStructure}
                onChange={handleChange}
                options={["PartnerShip","LLP","Private Ltd","Public Ltd"]}
                className={`!w-full  py-2 border rounded `}
                  error={errors.entityStructure}
                width={'100%'}
              />
    </div>
    <div className='w-1/2'>
        <h1>Category Of Business</h1>
        <ReusableSelect
              multiple
                label="Business Categories of Interest"
                name="businessCategory"
                value={formData.businessCategory}
                onChange={handleChange}
                options={["E-commerce","Offline Retail","Fintech","Edtech","Saas","Education & training","Restaurant/café","Mobile App"]}
                className={`!w-full px-3 py-2 border rounded `}
                  error={errors.businessCategory}
                  width={'100%'}
                
              />
    </div>

   </div>
   
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
  <div className='flex gap-5 w-full'>
    <div className='w-1/2'>
    <h1>Website Url</h1>
     <TextField  id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-full" />
</div>
 <div className='w-1/2'>
    <h1>CIN</h1>
     <TextField  id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-full" />
</div>
  </div>
  <div className='flex gap-5 w-full'>
    <div className='w-1/2'>
    <h1>Company Linkedin Page</h1>
     <TextField  id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-full" />
</div>
 <div className='w-1/2'>
    <h1>Co-founders Linkedin Profiles</h1>
     <TextField  id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-full" />
</div>
  </div>

  <div>
    <h1>Description about business</h1>
     <TextField multiline rows={5} id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-full" />
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
              width={350}
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
              width={350}
          />
    </div>
    <div>
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
              width={350}
          />
    </div>
  </div>

   <div className='flex justify-between w-full '>
    <div className='w-[350px]'>
      <h1>Number of co-founders</h1>
       <TextField id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-full" />
  
    </div>
     <div className='w-[350px]'>
      <h1>Team Size</h1>
       <TextField id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-full" />
  
    </div>
     <div className='w-[350px]'>
      <h1>Number of Locations</h1>
       <TextField id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-full" />
  
    </div>
     </div>
     <div className='flex gap-[3.5%]'>
      <div className=''>
     <h1>Commencement of business </h1>
         <div className='flex gap-5'>
      
      <div>
     <ReusableSelect
            label="Year"
            name="year"
            value={formData.year}
            onChange={handleChange}
             options={["E-commerce","Offline Retail","Fintech","Edtech","Saas","Education & training","Restaurant/café","Mobile App"]}
          //  options={Object.keys(countryCityMap)}
            className={`w-full py-2 border rounded `}
              error={errors.year}
              width={150}
          />
</div>
<div>
  <ReusableSelect
            label="Month"
            name="month"
            value={formData.month}
            onChange={handleChange}
             options={["E-commerce","Offline Retail","Fintech","Edtech","Saas","Education & training","Restaurant/café","Mobile App"]}
          //  options={Object.keys(countryCityMap)}
            className={`w-full py-2 border rounded `}
              error={errors.month}
              width={150}
          />

</div>
    </div>
   
    </div>
     <div className=''>
      <h1>Current Status</h1>
       <ReusableSelect
            label="Current Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
             options={["Active","Dormant"]}
          //  options={Object.keys(countryCityMap)}
            className={`w-full py-2 border rounded `}
              error={errors.status}
              width={350}
          />
    </div>
 </div>  
  {/* <div>
      <h1>Buyer Linkedin Profile</h1>
     <input
      type="text"
      name="linkedIn"
      placeholder="Enter Linkedin Profile"
      value={formData.linkedIn}
      onChange={handleChange}
      // className="w-full px-3 py-2 border rounded"
      className={`w-full px-3 py-2 border rounded ${
          errors.linkedIn ? 'border-red-500' : 'border-gray-300'
        }`}
    />
  </div> */}
</div>
)};

export default StepOne;
