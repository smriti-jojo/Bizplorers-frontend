import ReusableSelect from "../Dropdown";
import { TextField } from "@mui/material";
import ReusableRadioButton from "../RadioButton";

const countryCityMap = {
  India: ["Delhi", "Mumbai", "Bangalore"],
  USA: ["New York", "Los Angeles", "Chicago"],
  Germany: ["Berlin", "Munich", "Frankfurt"],
};

const StepTwo = ({ formData, handleChange, errors }) => (

  
  <div className="space-y-4 px-[5%]">
    <div className="rounded-md my-[5%]">
       <h1 className="text-2xl font-semibold pb-4">REVENUES</h1>
     <div className="flex justify-between w-full">
       
             <div className="w-[45%]">
          <h1> Last Financial year(Rs) </h1>
          <TextField
            name="lastFinancialYear"
            value={formData.lastFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.lastFinancialYear}
          />
        
       </div>
          <div className="w-[45%]">
          <h1>Trailing 12 months(Rs)</h1>
          <TextField
            name="trailing12months"
            value={formData.trailing12months}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.trailing12months}
          />
        </div>
        </div>
    
        <div className="w-[45%] mt-3">
          <h1>Previous month(Rs)</h1>
          <TextField
            name="prevMonth"
            value={formData.prevMonth}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.prevMonth}
          />
        </div>
        {/* <div className="w-[350px]">
          <h1>Pre-previous month(Rs)</h1>
          <TextField
            name="prePrevMonth"
            value={formData.prePrevMonth}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.prePrevMonth}
          />
        </div>
      </div> */}

      <div>{/* <h1>Open to Pre-revenue Business</h1> */}</div>
    </div>

     <div className="rounded-md  ">
       <h1 className="text-2xl font-semibold pb-4">NET PROFIT</h1>
     <div className="flex justify-between w-full">
       
             <div className="w-[45%]">
          <h1> Last Financial year(Rs) </h1>
          <TextField
            name="NETlastFinancialYear"
            value={formData.NETlastFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.NETlastFinancialYear}
          />
        
       </div>
          <div className="w-[45%]">
          <h1>Trailing 12 months(Rs)</h1>
          <TextField
            name="NETtrailing12months"
            value={formData.NETtrailing12months}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.NETtrailing12months}
          />
        </div>
        </div>
    
        <div className="w-[45%] mt-3">
          <h1>Previous month(Rs)</h1>
          <TextField
            name="NETprevMonth"
            value={formData.NETprevMonth}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.NETprevMonth}
          />
        </div>
        {/* <div className="w-[350px]">
          <h1>Pre-previous month(Rs)</h1>
          <TextField
            name="prePrevMonth"
            value={formData.prePrevMonth}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.prePrevMonth}
          />
        </div>
      </div> */}

      <div>{/* <h1>Open to Pre-revenue Business</h1> */}</div>
    </div>

{/* <div>
  <h1>Is the business generating positive cash flow?</h1>
</div> */}
 <label className="block mb-2 font-medium">Is the business generating positive cash flow?</label>
  <div className="flex gap-4">
    <label>
      <input
        type="radio"
        name="positiveCashFlow"
        value="Yes"
        checked={formData.positiveCashFlow === 'Yes'}
        onChange={handleChange}
        className="mr-1"
      />
      Yes
    </label>
    <label>
      <input
        type="radio"
        name="positiveCashFlow"
        value="No"
        checked={formData.positiveCashFlow === 'No'}
        onChange={handleChange}
        className="mr-2"
      />
      No
    </label>
  </div>
   

    {/**Cashflow */}
    <div className="rounded-md">
 
      {/**ASSETS */}
      <div>
        <h1 className="text-2xl font-semibold pt-[3%]">ASSETS</h1>
        <div className="pt-4">
          <h1>Description of Key Asset/IP</h1>
          <TextField
          multiline
          rows={2}
            name="assestDesc"
            value={formData.assestDesc}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.assestDesc}
          />
        </div>
      </div>
      {/**Sources */}
      <div>
        <h1 className="text-2xl font-semibold pt-[3%]">Sources Of Funds</h1>

        <div className="flex justify-between w-full py-4 ">
          <div className="w-[45%]">
            <h1> Equity(Rs) </h1>
            <TextField
              name="equity"
              value={formData.equity}
              onChange={handleChange}
              id="outlined-basic"
              variant="outlined"
              size="small"
              slotProps={{ inputLabel: { shrink: false } }}
              className="!w-full"
              error={errors.equity}
            />
          </div>
          <div className="w-[45%]">
            <h1> Debt(Rs)*</h1>
            <TextField
              name="debt"
              value={formData.debt}
              onChange={handleChange}
              id="outlined-basic"
              variant="outlined"
              size="small"
              slotProps={{ inputLabel: { shrink: false } }}
              className="!w-full"
              error={errors.debt}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StepTwo;
