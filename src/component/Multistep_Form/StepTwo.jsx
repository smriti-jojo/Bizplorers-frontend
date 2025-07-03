import ReusableSelect from "../Dropdown";
import { TextField } from "@mui/material";
import ReusableRadioButton from '../RadioButton';

const countryCityMap = {
  India: ['Delhi', 'Mumbai', 'Bangalore'],
  USA: ['New York', 'Los Angeles', 'Chicago'],
  Germany: ['Berlin', 'Munich', 'Frankfurt'],
};

const StepTwo = ({ formData, handleChange ,errors}) => (
  <div className="space-y-4 px-[5%]">
   
     <div>
      <h1>Business Categories of Interest</h1>
      <ReusableSelect
      multiple
        label="Business Categories of Interest"
        name="businessCategories"
        value={formData.businessCategories}
        onChange={handleChange}
        options={["E-commerce","Offline Retail","Fintech","Edtech","Saas","Education & training","Restaurant/café","Mobile App"]}
        className={`w-full px-3 py-2 border rounded `}
          error={errors.businessCategories}
          width={350}
        
      />
      <div className="flex gap-[5%]  py-2 ">
        <div><h1>Ticket Size(Rs)(min)*</h1>
        <TextField name="ticketSizeMin" value={formData.ticketSizeMin} onChange={handleChange} id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-[350px]" error={errors.ticketSizeMin}/></div>
         <div>
          <h1>Ticket Size(Rs)(max)*</h1>
           <TextField name="ticketSizeMax" value={formData.ticketSizeMax} onChange={handleChange} id="outlined-basic"  variant="outlined" size="small" slotProps={{ inputLabel: { shrink: false } }} className="!w-[350px]" error={errors.ticketSizeMax}/>
         </div>
     
      </div>

      <div className="flex gap-[5%] py-2">
        <div>
        <h1>Business Location Preference Country</h1>
         <ReusableSelect
        label="Business Location Preference Country"
        name="businesslocationCountry"
        value={formData.businesslocationCountry}
        onChange={handleChange}
        // options={["E-commerce","Offline Retail","Fintech","Edtech","Saas","Education & training","Restaurant/café","Mobile App"]}
       options={Object.keys(countryCityMap)}
        className={`w-full py-2 border rounded `}
          error={errors.businesslocationCountry}
          width={350}
      />
      </div>
       {formData.businesslocationCountry && (
        <div>
          <h1>City</h1>
          <ReusableSelect
          multiple
    label="City"
    name="businesslocationCities"
    value={formData.businesslocationCities}
    onChange={handleChange}
    options={countryCityMap[formData.businesslocationCountry] || []}
    error={errors.businesslocationCities}
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
        value="Yes"
        checked={formData.openToPreRevenue === 'Yes'}
        onChange={handleChange}
        className="mr-1"
      />
      Yes
    </label>
    <label>
      <input
        type="radio"
        name="openToPreRevenue"
        value="No"
        checked={formData.openToPreRevenue === 'No'}
        onChange={handleChange}
        className="mr-2"
      />
      No
    </label>
  </div>
</div>

{formData.openToPreRevenue === 'No' && (
  <>
   <label className="block mb-2 font-medium px-3">Open to Pre-breakeven businesses</label>
   <div className="flex gap-4 px-3">
    <label>
      <input
        type="radio"
        name="openToPreBreakeven"
        value="Yes"
        checked={formData.openToPreBreakeven === 'Yes'}
        onChange={handleChange}
        className="mr-1"
      />
      Yes
    </label>
    <label>
      <input
        type="radio"
        name="openToPreBreakeven"
        value="No"
        checked={formData.openToPreBreakeven === 'No'}
        onChange={handleChange}
        className="mr-1"
      />
      No
    </label>
  </div>
   {/* <div className="flex gap-[5%]  py-2">
    <div>
      <h1>Revenue Size(min)*</h1>
         <TextField name="revenueSizeMin" value={formData.revenueSizeMin} onChange={handleChange} id="outlined-basic" label="" variant="outlined" size="small" className="!w-[350px]" error={errors.revenueSizeMin}/>
    </div>
    <div>
      <h1>Revenue Size(min)(max)*</h1>
      <TextField name="revenueSizeMax" value={formData.revenueSizeMax} onChange={handleChange}  id="outlined-basic" label="" variant="outlined" size="small" className="!w-[350px]" error={errors.revenueSizeMax}/>
      </div>
    </div> */}
      

  </>
)}

<div className="pt-5">
 <h1>Preferred Arrangement</h1>
  <div className="w-[550px]">
      <ReusableSelect
      multiple
        label="Preferred Arrangement"
        name="preferredArrangement"
        value={formData.preferredArrangement}
        onChange={handleChange}
        options={["Cash", "Stock", "Royalty","Acquihire"]}
        className={`w-full px-3  border rounded `}
        width={350}
          error={errors.preferredArrangement}
        
      />
    </div>
    </div>
      </div>
     </div>

      
     
    
  </div>
);

export default StepTwo;
