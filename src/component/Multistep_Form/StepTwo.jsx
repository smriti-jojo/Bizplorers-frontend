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
    {/* <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
    />
    <select
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
    >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select> */}
     <div>
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
      <div className="flex gap-[5%] px-3 py-5 ">
        <div><h1>Ticket Size(Rs)(min)*</h1>
        <TextField  id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-[350px]" /></div>
         <div>
          <h1>Ticket Size(Rs)(max)*</h1>
           <TextField id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-[350px]"/>
         </div>
     
      </div>

      <div className="flex gap-[4%]">
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
       {formData.businessLocation && (
        <div>
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
        <div className="px-3 py-5">
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
   <div className="flex gap-[5%] px-3 py-5">
         <TextField id="outlined-basic" label="Revenue Size(min)*" variant="outlined" size="small" className="!w-[350px]" />
      <TextField id="outlined-basic" label="Revenue Size(min)(max)*" variant="outlined" size="small" className="!w-[350px]"/>
      </div>

  </>
)}



      </div>
     </div>

      
     
    
  </div>
);

export default StepTwo;
