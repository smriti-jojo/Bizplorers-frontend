import ReusableSelect from "../Dropdown";
import { TextField } from "@mui/material";
import ReusableRadioButton from '../RadioButton';

const countryCityMap = {
  India: ['Delhi', 'Mumbai', 'Bangalore'],
  USA: ['New York', 'Los Angeles', 'Chicago'],
  Germany: ['Berlin', 'Munich', 'Frankfurt'],
};

const StepTwo = ({ formData, handleChange ,errors}) => (
  <div className="space-y-4">
   
     <div>
      <h1>Business Categories of Interest</h1>
      <ReusableSelect
      multiple
        label="Business Categories of Interest"
        name="businessCategory"
        value={formData.businessCategory}
        onChange={handleChange}
        options={["E-commerce","Offline Retail","Fintech","Edtech","Saas","Education & training","Restaurant/café","Mobile App"]}
        className={`w-full px-3 py-2 border rounded `}
          error={errors.businessCategory}
          width={350}
        
      />
      <div className="flex gap-[5%]  py-2 ">
        <div><h1>Ticket Size(Rs)(min)*</h1>
        <TextField name="ticketSizemin" value={formData.ticketSizemin} onChange={handleChange} id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-[350px]" error={errors.ticketSizemin}/></div>
         <div>
          <h1>Ticket Size(Rs)(max)*</h1>
           <TextField name="ticketSizemax" value={formData.ticketSizemax} onChange={handleChange} id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-[350px]" error={errors.ticketSizemax}/>
         </div>
     
      </div>

      <div className="flex gap-[5%] py-2">
        <div>
        <h1>Business Location Preference Country</h1>
         <ReusableSelect
        label="Business Location Preference Country"
        name="businessLocation"
        value={formData.businessLocation}
        onChange={handleChange}
        // options={["E-commerce","Offline Retail","Fintech","Edtech","Saas","Education & training","Restaurant/café","Mobile App"]}
       options={Object.keys(countryCityMap)}
        className={`w-full py-2 border rounded `}
          error={errors.businessLocation}
          width={350}
      />
      </div>
       {formData.businessLocation && (
        <div>
          <h1>City</h1>
          <ReusableSelect
          multiple
    label="City"
    name="city"
    value={formData.city}
    onChange={handleChange}
    options={countryCityMap[formData.businessLocation] || []}
    error={errors.city}
    width={350}
  />
  </div>
)}
      </div>

      <div>
        {/* <h1>Open to Pre-revenue Business</h1> */}
        <div className="px-3 py-2">
  <label className="block mb-2 font-medium">Open to Pre-revenue Business</label>
  <div className="flex gap-4">
    <label>
      <input
        type="radio"
        name="openToPreRevenue"
        value="YES"
        checked={formData.openToPreRevenue === 'YES'}
        onChange={handleChange}
        className="mr-1"
      />
      YES
    </label>
    <label>
      <input
        type="radio"
        name="openToPreRevenue"
        value="NO"
        checked={formData.openToPreRevenue === 'NO'}
        onChange={handleChange}
        className="mr-2"
      />
      NO
    </label>
  </div>
</div>

{formData.openToPreRevenue === 'NO' && (
  <>
   <label className="block mb-2 font-medium px-3">Open to Pre-breakeven businesses</label>
   <div className="flex gap-4 px-3">
    <label>
      <input
        type="radio"
        name="openToPreBreakeven"
        value="YES"
        checked={formData.openToPreBreakeven === 'YES'}
        onChange={handleChange}
        className="mr-1"
      />
      YES
    </label>
    <label>
      <input
        type="radio"
        name="openToPreBreakeven"
        value="NO"
        checked={formData.openToPreBreakeven === 'NO'}
        onChange={handleChange}
        className="mr-1"
      />
      NO
    </label>
  </div>
   <div className="flex gap-[5%]  py-2">
    <div>
      <h1>Revenue Size(min)*</h1>
         <TextField name="revenueMin" value={formData.revenueMin} onChange={handleChange} id="outlined-basic" label="" variant="outlined" size="small" className="!w-[350px]" error={errors.revenueMin}/>
    </div>
    <div>
      <h1>Revenue Size(min)(max)*</h1>
      <TextField name="revenueMax" value={formData.revenueMax} onChange={handleChange}  id="outlined-basic" label="" variant="outlined" size="small" className="!w-[350px]" error={errors.revenueMax}/>
      </div>
    </div>
      

  </>
)}



      </div>
     </div>

      
     
    
  </div>
);

export default StepTwo;
